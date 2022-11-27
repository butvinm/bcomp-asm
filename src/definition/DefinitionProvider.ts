import * as vscode from "vscode";
import {
	getLabelsDefinitions,
	getLabelsRefs,
	getLineTree,
	getProgTree,
} from "../parser/parseUtils";

export class DefinitionProvider implements vscode.DefinitionProvider {
	provideDefinition(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken
	): vscode.ProviderResult<vscode.Definition | vscode.LocationLink[]> {
		const lineText = document.lineAt(position.line).text;
		const lineTree = getLineTree(lineText);
		if (!lineTree) return;
		const refs = getLabelsRefs(lineTree);
		if (!refs) return;
        const ref = refs.pop();
        if (!ref) return;

		const tree = getProgTree();
		if (!tree) return;

		const labelsDefinitions = getLabelsDefinitions(tree);
		for (let lbl of labelsDefinitions) {
			if (lbl.label().text === ref.text) {
				const lineNumber = lbl.start.line - 1;
                const startIndex = lbl.start.charPositionInLine;
                let stopIndex = startIndex
                if (lbl.stop) {
                    stopIndex += lbl.stop.stopIndex;
                } else {
                    stopIndex += lbl.start.stopIndex;
                }

				const startPos = new vscode.Position(lineNumber, startIndex);
				const endPos = new vscode.Position(lineNumber, stopIndex);
				const range = new vscode.Range(startPos, endPos);
				const refLocation = new vscode.Location(document.uri, range);
				return refLocation;
			}
		}
	}
}
