import * as vscode from "vscode";

import { CharStreams, CommonTokenStream } from "antlr4ts";
import { basmLexer } from "../parser/basmLexer";
import { basmParser, LabelContext, LblContext, ProgContext } from "../parser/basmParser";
import { basmListener } from "./basmListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

export function getProgTree(): ProgContext | undefined {
	// get text from current file
	const editor = vscode.window.activeTextEditor;
	if (!editor) return;

	const text = editor.document.getText();

	// parse text
	const chars = CharStreams.fromString(text);
	const lexer = new basmLexer(chars);

	const tokens = new CommonTokenStream(lexer);
	const parser = new basmParser(tokens);
	const tree = parser.prog();

	return tree;
}

export function getLabelsDefinitions(tree: ProgContext): LblContext[] {
	const listener = new labelsDefinitionListener();
	const walkListener: basmListener = listener;
	ParseTreeWalker.DEFAULT.walk(walkListener, tree);
	return listener.lbls;
}

class labelsDefinitionListener implements basmListener {
	public lbls: LblContext[] = [];

	enterLbl(context: LblContext) {
		this.lbls.push(context);
	}
}

export function getLabelsRefs(tree: ProgContext): LabelContext[] {
	const listener = new labelsRefsListener();
	const walkListener: basmListener = listener;
	ParseTreeWalker.DEFAULT.walk(walkListener, tree);
	return listener.lbls;
}

class labelsRefsListener implements basmListener {
	public lbls: LabelContext[] = [];

    enterLabel(context: LabelContext) {
        if (!(context.parent instanceof LblContext)) {
            this.lbls.push(context);
        }
    }
    
}

export function getRefsLocations(document: vscode.TextDocument, tree: ProgContext): Map<string, Array<vscode.Location>> {
    const labelsRefs = getLabelsRefs(tree);
    const refsLocations = new Map();
    for (let labelRef of labelsRefs) {
        const refName = labelRef.text;
        // get location 
        const lineNumber = labelRef.start.line - 1;
        const startIndex = labelRef.start.charPositionInLine;
        const stopIndex = startIndex + labelRef.text.length;
        const startPos = new vscode.Position(lineNumber, startIndex);
        const endPos = new vscode.Position(lineNumber, stopIndex);
        const range = new vscode.Range(startPos, endPos);
        const refLocation = new vscode.Location(document.uri, range);

        if (refsLocations.has(refName)) {
            refsLocations.get(refName).push(refLocation);
        } else {
            refsLocations.set(refName, [refLocation]);
        }
    }

    return refsLocations;
}