# Basic Computer Assembly

![](assets/preview.png)

'Basic Computer Assembly' is a language server extension for Visual Studio Code for Basic Computer assembler files.
It provides support for:
- Assembler syntax highlighting.
- Completions: While you type completions are proposed based on the labels in your asm files.
- Unused references: bcomp-asm.find-unused-labels to find all labels that are not referenced. Useful to find dead code.
- Code Lens: Above symbols it shows the number of references. You can click it to get to the references.
- Labels definitions finding
<!-- - Hovering: When hovering over a symbol it shows the comments for the symbol.
- Outline view: View your labels (code, data, constants) in the outline view.
- Rename symbols. -->

It supports the `.bcomp` extension

## Todo
- Difference between variables/code blocks in suggestions
- Theory page
- Info about commands on hovering
- Syntax analyzing and error detection
- Snippets
- INCLUDE, MODULE, stdlib and precompilator
- and more-more other...

## Installation

Install by extension package from [vsix extensiong](https://github.com/mamsdeveloper/bcomp-asm/tree/master/release).

![](assets/install.png)

## Syntax highlighting in Markdown code blocks

Assembler syntax highlighting can also be used within Markdown documents.
Just add ```bcomp``` to your code blocks.


## License and Acknowledgements

Basic Computer Assembly is licensed under the [MIT license](LICENSE.txt).

This extension made use of 0 other packages (except 72mb of node modules)

Many thanks to the authors.


