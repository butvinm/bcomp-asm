import * as vscode from "vscode";
import {
	getLabelsDefinitions,
	getLabelsRefs,
	getProgTree,
	getRefsLocations,
} from "../parser/parseUtils";
import { BcompCodeLens } from "./BcompCodeLens";

/**
 * CodeLensProvider for bcomp assembly language.
 */
export class CodeLensProvider implements vscode.CodeLensProvider {
	/**
	 * Called from vscode to provide the code lenses.
	 * Code lenses are provided unresolved.
	 * It searches the given document for symbols (strings which ends with ":")
	 * and creates a code lens for each.
	 * @param document The document to check.
	 * @param token
	 */

	// called by vscode
	public async provideCodeLenses(
		document: vscode.TextDocument,
		token: vscode.CancellationToken
	): Promise<vscode.CodeLens[]> {
		const codeLenses: Array<vscode.CodeLens> = [];

		// Find all labels definitions
		const tree = getProgTree();
		if (!tree) return codeLenses;

		const labelsDefinitions = getLabelsDefinitions(tree);
		for (let lbl of labelsDefinitions) {
			// if (!lbl.stop) continue;
			const lineNumber = lbl.start.line - 1;
			const startIndex = lbl.start.charPositionInLine;
			const stopIndex = startIndex + lbl.text.length;
			const startPos = new vscode.Position(lineNumber, startIndex);
			const endPos = new vscode.Position(lineNumber, stopIndex);
			const range = new vscode.Range(startPos, endPos);
			const codeLensName = lbl.text.slice(0, lbl.text.length - 1);
			const codeLens = new BcompCodeLens(document, range, codeLensName);
			codeLenses.push(codeLens);
		}

		return codeLenses;
	}

	// called by vscode
	public async resolveCodeLens?(
		codeLens: BcompCodeLens,
		token: vscode.CancellationToken
	): Promise<vscode.CodeLens> {
		// update refs locations
		const tree = getProgTree();
		if (!tree) return codeLens;
		const labelsRefsLocations = getRefsLocations(codeLens.document, tree);

		const doc = codeLens.document;
		const pos = codeLens.range.start;

		const refLocations = labelsRefsLocations.get(codeLens.symbol);

		// create title
		const refsCount = refLocations ? refLocations.length : 0;
		let title = refsCount + " reference";
		if (refsCount != 1) {
			title += "s";
		}

		// Add command to show the references
		codeLens.command = {
			title: title,
			command: "editor.action.showReferences",
			arguments: [
				doc.uri, // uri
				pos, // position
				refLocations, //reference locations
			],
		};
		return codeLens;
	}
}
