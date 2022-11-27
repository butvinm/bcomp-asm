import * as vscode from "vscode";
import { getLabelsDefinitions, getProgTree } from "../parser/parseUtils";

const keywords = ["ORG", "WORD", "END", "DUP"];

const keywordsCompletions: vscode.CompletionItem[] = [];
for (let keyword of keywords) {
	const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
	keywordsCompletions.push(item);
}

const instructions = [
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
	"BEQ",
	"BNE",
	"BMI",
	"BPL",
	"BCS",
	"BCC",
	"BVS",
	"BVC",
	"BLT",
	"BGE",
	"BR",
	"DI",
	"EI",
	"IN",
	"OUT",
	"INT",
];

const instructionsCompletions: vscode.CompletionItem[] = [];
for (let instruction of instructions) {
	const item = new vscode.CompletionItem(
		instruction,
		vscode.CompletionItemKind.Function
	);
	instructionsCompletions.push(item);
}

const consts = ["SP", "IP"];
const constsCompletions: vscode.CompletionItem[] = [];
for (let const_ of consts) {
	const item = new vscode.CompletionItem(const_, vscode.CompletionItemKind.Constant);
	constsCompletions.push(item);
}

const basicCompletions = Array.of(
	...keywordsCompletions,
	...instructionsCompletions,
	...constsCompletions
);

export class CompletionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext
	): vscode.ProviderResult<
		vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>
	> {
		const completions = Array.of(...basicCompletions, ...this.getLabelsCompletions());
		const completionsList = new vscode.CompletionList(completions, false);
		return completionsList;
	}

	private getLabelsCompletions(): vscode.CompletionItem[] {
		const labelsCompletions: vscode.CompletionItem[] = [];
		const tree = getProgTree();
		if (!tree) return labelsCompletions;

		const labelsDefinitions = getLabelsDefinitions(tree);
		for (let label of labelsDefinitions) {
			const item = new vscode.CompletionItem(
				label.label().text,
				vscode.CompletionItemKind.Reference
			);
			labelsCompletions.push(item);
		}

		return labelsCompletions;
	}
}
