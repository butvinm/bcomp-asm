import { CommonRegexes } from "./regexes/commonregexes";
import * as vscode from "vscode";
import { Config } from "./config";
import {
	getCompleteLabel,
	getModule,
	getNonLocalLabel,
	grepMultiple,
	reduceLocations,
} from "./grep";
import { CompletionRegexes } from "./regexes/completionregexes";
import { PackageInfo } from "./whatsnew/packageinfo";
import { AllowedLanguageIds } from "./languageId";

/// All additional completions like Z80 instructions and assembler
/// directives etc.
const completions = [
	// bcomp mnemonic
	// address
	"AND",
	"OR",
	"ADD",
	"ADC",
	"SUB",
	"CMP",
	"LOOP",
	"LD",
	"SWAM",
	"JUMP",
	"CALL",
	"ST",
	// non-address
	"NOP",
	"HLT",
	"CLA",
	"NOT",
	"CLC",
	"CMC",
	"ROL",
	"ROR",
	"ASL",
	"ASR",
	"SXTB",
	"SWAB",
	"INC",
	"DEC",
	"NEG",
	"POP",
	"POPF",
	"RET",
	"IRET",
	"PUSH",
	"PUSHF",
	"SWAP",
	// branches
	"BEQ",
	"BZS",
	"BNE",
	"BZC",
    "BMI",
    "BNS",
    "BPL",
    "BNC",
	"BCS",
    "BHIS",
    "BCC",
    "BLO",
	"BVS",
	"BVC",
	"BLT",
	"BGE",
	"BR",
	// io
	"DI",
	"EI",
	"IN",
	"OUT",
	"INT",
	// registers
	"SP",
	"IP",
	"AC",
	"BR",
	"AR",
	"DR",
	"IP",
	"CR",
    "IR",
    // assembler commands
    "WORD",
    "ORG",
    "START",
    "DUP",
    "END"
];

/**
 * CompletionItemProvider for assembly language.
 */
export class CompletionProposalsProvider implements vscode.CompletionItemProvider {
	// The configuration to use.
	protected config: Config;

	/**
	 * Constructor.
	 * @param config The configuration (preferences) to use.
	 */
	constructor(config: Config) {
		// Store
		this.config = config;
	}

	/**
	 * Called from vscode if the user selects "Find all references".
	 * @param document The current document.
	 * @param position The position of the word for which the references should be found.
	 * @param token
	 */
	public async provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken
	): Promise<vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList>> {
		// First check for right path
		const docPath = document.uri.fsPath;
		if (!docPath.includes(this.config.rootFolder)) return undefined as any; // Path is wrong.

		// Get required length
		const settings = PackageInfo.getConfiguration();
		let requiredLen = settings.completionsRequiredLength;
		if (requiredLen == undefined || requiredLen < 1) requiredLen = 1;

		const line = document.lineAt(position).text;
		const { label } = getCompleteLabel(line, position.character);
		//console.log('provideCompletionItems:', label);
		let len = label.length;
		if (label.startsWith(".")) len--; // Require one more character for local labels.
		if (len < requiredLen)
			return new vscode.CompletionList([new vscode.CompletionItem(" ")], false); // A space is required, otherwise vscode will not ask again for completion items.

		// Search proposals
		return this.propose(document, position);
	}

	/**
	 * Proposes a list of labels etc.
	 * @param document The document that contains the word.
	 * @param position The word position.
	 */
	protected async propose(
		document: vscode.TextDocument,
		position: vscode.Position
	): Promise<vscode.CompletionList> {
		// Get all lines
		const lines = document.getText().split("\n");
		// Get the module at the line of the searched word.
		const row = position.line;
		const moduleLabel = getModule(lines, row);

		// Get the range of the whole input label.
		// Otherwise vscode takes only the part after the last dot.
		const lineContents = lines[row];
		const { label, preString } = getCompleteLabel(lineContents, position.character);
		const start = preString.length;
		const end = start + label.length;
		const range = new vscode.Range(
			new vscode.Position(row, start),
			new vscode.Position(row, end)
		);
		//console.log('Completions for: '+ label);

		// Get the first non-local label
		const languageId = document.languageId as AllowedLanguageIds;
		const regexLbls = CommonRegexes.regexesLabel(this.config, languageId);
		let nonLocalLabel; // Only used for local labels
		if (label.startsWith(".")) {
			nonLocalLabel = getNonLocalLabel(regexLbls, lines, row);
		}

		// Search
		const searchWord = document.getText(document.getWordRangeAtPosition(position));
		const fuzzySearchWord = CommonRegexes.regexPrepareFuzzy(searchWord);

		// regexes for labels with and without colon
		const regexes = CompletionRegexes.regexesEveryLabelForWord(
			fuzzySearchWord,
			this.config,
			languageId
		);
		// Find all sjasmplus MODULEs in the document
		const searchSjasmModule = CompletionRegexes.regexEveryModuleForWord(
			fuzzySearchWord,
			languageId
		);
		regexes.push(searchSjasmModule);
		// Find all sjasmplus MACROs in the document
		const searchSjasmMacro = CompletionRegexes.regexEveryMacroForWord(
			fuzzySearchWord,
			languageId
		);
		regexes.push(searchSjasmMacro);

		const locations = await grepMultiple(regexes, this.config.rootFolder, languageId);
		// Reduce the found locations.
		const reducedLocations = await reduceLocations(
			regexLbls,
			locations,
			document.fileName,
			position,
			true,
			false
		);
		// Now put all proposal texts in a map. (A map to make sure every item is listed only once.)
		const proposals = new Map<string, vscode.CompletionItem>();

		// Get number of dots
		//const dotCount = label.split('.').length-1;

		// Go through all found locations
		for (const loc of reducedLocations) {
            const text = loc.moduleLabel;
			if (this.config.labelsExcludes.includes(text)) continue; // Skip if excluded
			/*
            Alternative implementation that only proposes completion up to the next dot:
            const fullText = loc.moduleLabel;
            // Reduce text to match number of columns
            const textArr = fullText.split('.');
            let text = textArr[0];
            for (let i = 1; i <= dotCount; i++) {
                text += '.' + textArr[i];
            }
            */

			//console.log('');
			//console.log('Proposal:', text);
			const item = new vscode.CompletionItem(
				text,
				vscode.CompletionItemKind.Function
			);
			item.filterText = text;
			item.range = range;

			// Check for local label
			if (nonLocalLabel) {
				// A previous non-local label was searched (and found), so label is local.
				item.filterText = label;
				// Change insert text
				let k = moduleLabel.length;
				if (k > 0) k++; // For the dot '.'
				k += nonLocalLabel.length;
				let part = text.substring(k);
				item.insertText = part;
				// change shown text
				item.label = part;
				// And filter text
				item.filterText = part;
			}
			// Maybe make the label local to current module.
			else if (text.startsWith(moduleLabel + ".")) {
				// Change insert text
				const k = moduleLabel.length + 1;
				let part = text.substring(k);
				item.insertText = part;
				// change shown text
				item.label = "[" + text.substring(0, k) + "] " + part;
			}

			proposals.set(item.label as string, item);
		}

		// Create list from map
		const propList = Array.from(proposals.values());

		// Check if word includes a dot
		let allCompletions;
		let k = label.lastIndexOf(".");
		if (k < 0) {
			// No dot.
			// Check if word starts with a capital letter
			const upperCase = label[0] == label[0].toUpperCase();
			// Add the instruction proposals
			let i = 0;
			allCompletions = completions.map((text) => {
                if (upperCase) text = text.toUpperCase();
                
				const item = new vscode.CompletionItem(
					text,
					vscode.CompletionItemKind.Function
				);
				item.sortText = i.toString(); // To make sure they are shown at first.
				i++;
				item.range = range;
				return item;
			});
			// Add grepped words
			allCompletions.push(...propList);
		} else {
			// Simply use grepped list.
            allCompletions = propList;
		}

		// Return.
		// false: In fact the 'false' means that the list is not incomplete,
		// i.e. it is complete. vscode will not call completion
		// anymore if not something bigger chances.
		// So, in fact only for the first character the completion list
		// is build. vscode filters this list on its own.
		const completionList = new vscode.CompletionList(allCompletions, false);
		return completionList;
	}
}
