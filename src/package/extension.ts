import * as vscode from "vscode";
import { GlobalStorage } from "./globalstorage";
import { PackageInfo } from "./packageinfo";
import { showParsedAsm } from "../commands/showParsedAsm";
import { showUnusedLabels } from "../commands/showUnusedLabels";
import { CodeLensProvider } from "../codelens/CodeLensProvider";
import { CompletionProvider } from "../completion/CompletionProvider";
import { DefinitionProvider } from "../definition/DefinitionProvider";
import { ReferenceProvider } from "../reference/ReferenceProvider";

const asmListFiles: vscode.DocumentSelector = [{ scheme: "file", language: "bcomp-asm" }];

export function activate(context: vscode.ExtensionContext) {
	// Init package info
	PackageInfo.Init(context);

	// Init global storage
	GlobalStorage.Init(context);

	// Register commands.
	context.subscriptions.push(
		vscode.commands.registerCommand("bcomp-asm.parse-asm", () => {
			showParsedAsm();
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand("bcomp-asm.find-unused-labels", () => {
			showUnusedLabels();
		})
	);

	// Register CodeLens

    const codeLensProvider = vscode.languages.registerCodeLensProvider(
        asmListFiles,
        new CodeLensProvider()
	);
	context.subscriptions.push(codeLensProvider);

    // Register Completions
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        asmListFiles,
        new CompletionProvider()
    );
    context.subscriptions.push(completionProvider);

    // Register Definitions 
    const definitionProvider = vscode.languages.registerDefinitionProvider(
        asmListFiles,
        new DefinitionProvider()
    );
    context.subscriptions.push(definitionProvider);

    // Register references 
    const referenceProvider = vscode.languages.registerReferenceProvider(
        asmListFiles,
        new ReferenceProvider()
    );
    context.subscriptions.push(referenceProvider);
}
