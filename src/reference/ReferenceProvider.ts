import * as vscode from "vscode";
import { LabelContext } from "../parser/basmParser";
import { getLabelsDefinitions, getLabelsRefs, getLineTree, getProgTree } from "../parser/parseUtils";


export class ReferenceProvider implements vscode.ReferenceProvider {
    provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
        const locations: Array<vscode.Location> = [];
        const lineText = document.lineAt(position.line).text;
		const lineTree = getLineTree(lineText);
		if (!lineTree) return locations;
		const refs = getLabelsRefs(lineTree);
		if (!refs) return locations;
        const ref = refs.pop();
        if (!ref) return locations;
        
        // Find all labels definitions
		const tree = getProgTree();
		if (!tree) return locations;

		const labelsDefinitions = getLabelsDefinitions(tree);
        const labelsDefinitionsLbl = labelsDefinitions.map((lbl) => { return lbl.label() })
        const labelsRefs = getLabelsRefs(tree);
        
        const allRefs = Array.of(...labelsDefinitionsLbl, ...labelsRefs);

        
		for (let lbl of allRefs) {
            if (lbl.text != ref.text) continue;
			const lineNumber = lbl.start.line - 1;
			const startIndex = lbl.start.charPositionInLine;
			const stopIndex = startIndex + lbl.text.length;
			const startPos = new vscode.Position(lineNumber, startIndex);
			const endPos = new vscode.Position(lineNumber, stopIndex);
            const range = new vscode.Range(startPos, endPos);
            const location = new vscode.Location(document.uri, range);
            locations.push(location);
		}

		return locations;
    }
}