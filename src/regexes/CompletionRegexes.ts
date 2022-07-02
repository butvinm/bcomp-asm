

/**
 * All regexes that are used for the completion provider.
 */
export class CompletionRegexes {


	/**
	 * Returns an array of regexes with 1 or 2 regexes.
	 * @param fuzzySearchWord Is a fuzzy search word, e.g. "\\w*s\\w*n\\w*d" for snd.
	 * @param {labelsWithColons, labelsWithoutColons} Add regex with colons /
	 * Add regex without colons
	 */
	public static regexesEveryLabelForWordForCompletion(fuzzySearchWord: string, cfg: {labelsWithColons: boolean, labelsWithoutColons: boolean}): RegExp[] {
		const regexes: RegExp[] = [];
		// Find all "some.thing:" (labels) in the document
		if (cfg.labelsWithColons) {
			const searchRegex = this.regexEveryLabelColonForWordForCompletion(fuzzySearchWord);
			regexes.push(searchRegex);
		}
		// Find all sjasmplus labels without ":" in the document
		if (cfg.labelsWithoutColons) {
			const searchRegex2 = this.regexEveryLabelWithoutColonForWordForCompletion(fuzzySearchWord);
			regexes.push(searchRegex2);
		}
		return regexes;
	}


	/**
	 * Searches for labels that contain the given word.
	 * Checks for a label without a colon.
	 * The label can be everywhere. I.e. it can be a middle part of a dot
	 * notated label.
	 * Capture groups:
	 *  1 = preceding characters before 'searchWord'.
	 * Used by CompletionProposalsProvider.
	 * @param fuzzySearchWord Is a fuzzy search word, e.g. "\\w*s\\w*n\\w*d" for snd.
	 */
	protected static regexEveryLabelWithoutColonForWordForCompletion(fuzzySearchWord: string): RegExp {
		//searchWord=searchWord.replace(/\./g, '\\.');
		return new RegExp('^(([^0-9 ][\\w\\.]*)?)\\b' + fuzzySearchWord + '[\\w\\.]*\\b(?![:\\w\\.])', 'i');
	}


	/**
	 * Searches for labels that contains the given word.
	 * Checks for a label with a colon.
	 * The label can be everywhere. I.e. it can be a middle part of a dot
	 * notated label.
	 * Capture groups:
	 *  1 = preceding characters before 'searchWord'.
	 * Used by CompletionProposalsProvider.
	 * @param fuzzySearchWord Is a fuzzy search word, e.g. "\\w*s\\w*n\\w*d" for snd.
	 */
	protected static regexEveryLabelColonForWordForCompletion(fuzzySearchWord: string): RegExp {
		//return new RegExp('^(\\s*[\\w\\.]*)\\b' + searchWord + '[\\w\\.]*:', 'i');
		//return new RegExp('(^@?[\\w\\.]*|^.*\\s@?[\\w\\.]*)\\b' + searchWord + '[\\w\\.]*:', 'i');
		return new RegExp('(^@?[\\w\\.]*|^.*\\s@?[\\w\\.]*)\\b' + fuzzySearchWord + '[\\w\\.]*:', 'i');
	}
}

