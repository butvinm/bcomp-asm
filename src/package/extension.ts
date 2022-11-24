import * as vscode from "vscode";
import { GlobalStorage } from "./globalstorage";
import { PackageInfo } from "./packageinfo";
import { showParsedAsm } from "../commands/showParsedAsm";
import { showUnusedLabels } from "../commands/showUnusedLabels";

export function activate(context: vscode.ExtensionContext) {
	// Init package info
	PackageInfo.Init(context);

	// Init global storage
	GlobalStorage.Init(context);

	// Register commands.
    context.subscriptions.push(
        vscode.commands.registerCommand("bcomp-asm.parse-asm", () => { showParsedAsm(); })
    );

    
    context.subscriptions.push(
        vscode.commands.registerCommand("bcomp-asm.find-unused-labels", () => { showUnusedLabels(); })
    );
}


