import * as vscode from "vscode";

import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { basmListener } from "../parser/basmListener";
import { LineContext } from "../parser/basmParser";
import { getProgTree } from "../parser/parseUtils";

export function showParsedAsm() {
	const tree = getProgTree();
	if (!tree) return;

	const outputChannel = vscode.window.createOutputChannel("Parsed Basm");

	const listener: basmListener = new showTokenListener(outputChannel);
	ParseTreeWalker.DEFAULT.walk(listener, tree);
    
	outputChannel.show();
}

class showTokenListener implements basmListener {
	public outputChannel: vscode.OutputChannel;

	constructor(outputChannel: vscode.OutputChannel) {
		this.outputChannel = outputChannel;
	}

	enterLine(context: LineContext) {
		this.outputChannel.appendLine(context.toStringTree());
	}
}
