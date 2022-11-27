import * as vscode from "vscode"

export class BcompCodeLens extends vscode.CodeLens {
    public document: vscode.TextDocument;
    public symbol: string;  // The searched symbol (text).

    /**
     * Constructor.
     * @param doc The corresponding TextDocument.
     * @param range The range in the TextDocument.
     * @param matchedText The matchedText, i.e. the symbol.
     */
    constructor(doc: vscode.TextDocument, range: vscode.Range, matchedText: string) {
        super(range);
        this.document = doc;
        this.symbol = matchedText;
    }
}