import * as vscode from "vscode";
import { LabelContext, LblContext } from "../parser/basmParser";

import { getLabelsDefinitions, getLabelsRefs, getProgTree } from "../parser/parseUtils";

export function showUnusedLabels() {
	const tree = getProgTree();
	if (!tree) return;

	const outputChannel = vscode.window.createOutputChannel("Parsed Basm");

	const labelsRefs = getLabelsRefs(tree);
	const usedRefs: string[] = [];
    for (let ref of labelsRefs) {
        if (!(ref.parent instanceof LblContext)) {
            usedRefs.push(ref.text);
        }
	}
    // const labels = new Set()
	const labelsDefinitions = getLabelsDefinitions(tree);
	for (let lbl of labelsDefinitions) {
		if (!usedRefs.includes(lbl.text.slice(0, -1))) {
            outputChannel.appendLine(`Unused label ${lbl.text} at line ${lbl._start.line}`)
		}
	}

    outputChannel.show();
}
