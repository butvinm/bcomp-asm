import * as assert from 'assert';
import {CommonRegexes} from './../../src/regexes/commonregexes';
import {CompletionRegexes} from './../../src/regexes/completionregexes';


// For access to protected functions.
const CompletionRegexesMock = CompletionRegexes as any;

suite('CompletionRegexes', () => {

    suite('RegEx with search-word middle, ignore case', () => {

        // insOuts: search-word, input-line, should-match, found-prefix
        function checkResultsSearchWord(func: (string) => RegExp, insOuts: (string | boolean)[]) {
            try {
                // Check the test
                const count = insOuts.length;
                const div = 4;  // Line divider
                assert.equal(count % div, 0, "Testcase error: Number of lines in input and output should be equal, otherwise the test is wrong!");
                for (let i = 0; i < count; i += div) {
                    const searchWord = insOuts[i];
                    const input = insOuts[i + 1] as string;
                    const shouldMatch = insOuts[i + 2];
                    const prefix = insOuts[i + 3];
                    const regex = func(searchWord);
                    const result = regex.exec(input);
                    if (result) {
                        assert.ok(shouldMatch, "A match was found although no match should be found. Line " + (i / div) + ", searched for: '" + searchWord + "' in '" + input + "'");
                        const foundPrefix = result[1];
                        assert.equal(prefix, foundPrefix, "'" + prefix + "' == '" + foundPrefix + "', Prefix of line " + (i / div));
                    }
                    else {
                        assert.ok(!shouldMatch, "No match was found although a match should be found. Line " + (i / div) + ", searched for: '" + searchWord + "' in '" + input + "'");
                    }
                }
            }
            catch (e) {
                assert.fail("Testcase assertion: " + e);
            }
        }

        suite('regexEveryLabelColonForWord', () => {

            test('find label', (done) => {
                const insOuts = [
                    // search-word, input-line, should-match, found-prefix
                    "label", "label:", true, "",
                    "label", "label: ", true, "",
                    "label", "label:;", true, "",
                    "label", "  label:", true, "  ",
                    "label", "   label: ", true, "   ",

                    "label", " label:;", true, " ",
                    "label", "label", false, "",
                    "label", "label ", false, "",
                    "label", "label;", false, "",
                    "LabelA_0123456789", "LabelA_0123456789:", true, "",

                    "_LabelA_0123456789", "_LabelA_0123456789:", true, "",
                    "label", "xxx.label:", true, "xxx.",
                    "label", "_xxx.label:", true, "_xxx.",
                    "label", "0xxx.label:", true, "0xxx.", // Allows more than senseful, i.e. labels don't start with a number.
                    "label", ".label:", true, ".",

                    "label", "label.xxx:", true, "",
                    "label", "yyy.label.xxx:", true, "yyy.",
                    "label", "xlabel:", false, "",
                    "label", "labely:", true, "",
                    "label", "xxx.labely:", true, "xxx.",
                    "label", "xxx.xlabel:", false, "",

                    "label", "xlabel.yyy:", false, "",
                    "\\w*s\\w*n\\w*d", "sound:", true, "",
                    "\\w*s\\w*n\\w*d", "snd:", true, "",
                    "\\w*s\\w*n\\w*d", "xxx.soundaaa:", true, "xxx.",
                    "\\w*s\\w*n\\w*d", "yyy.sound.zzz:", true, "yyy.",

                    "label", "LaBeL:", true, "",

                    "label", "@Label:", true, "@",

                    // List file
                    "label", "  label:", true, "  ",
                    "label", "6017.R11 00 AF     label:", true, "6017.R11 00 AF     ",
                    "label", "39+  6017          label:", true, "39+  6017          ",
                    "label", "7002 00 70         label:", true, "7002 00 70         ",
                    "label", "29    0012  D3 FE  label:", true, "29    0012  D3 FE  ",
                    "label", "625++C4D1          label:", true, "625++C4D1          ",
                    "label", "626++C4D1 FE 10    label:", true, "626++C4D1 FE 10    ",

                    "label", "  @label:", true, "  @",
                    "label", "6017.R11 00 AF     @label:", true, "6017.R11 00 AF     @",
                    "label", "39+  6017          @label:", true, "39+  6017          @",
                    "label", "7002 00 70         @label:", true, "7002 00 70         @",
                    "label", "29    0012  D3 FE  @label:", true, "29    0012  D3 FE  @",
                    "label", "625++C4D1          @label:", true, "625++C4D1          @",
                    "label", "626++C4D1 FE 10    @label:", true, "626++C4D1 FE 10    @",
                ];

                checkResultsSearchWord(CompletionRegexesMock.regexEveryLabelColonForWord, insOuts);
                done();
            });


        });


        test('regexEveryLabelWithoutColonForWord', (done) => {
            const insOuts = [
                // search-word, input-line, should-match, found-prefix
                "label", "label", true, "",
                "label", "label ", true, "",
                "label", "label  ", true, "",
                "label", "  label", false, "",
                "label", "   label ", false, "",

                "label", " label  ", false, "",
                "label", " label", false, "",
                "label", " label ", false, "",
                "label", " label  ", false, "",
                "LabelA_0123456789", "LabelA_0123456789", true, "",

                "_LabelA_0123456789", "_LabelA_0123456789", true, "",
                "label", "xxx.label", true, "xxx.",
                "label", "_xxx.label", true, "_xxx.",
                "label", "0xxx.label", false, "",
                "label", ".label", true, ".",

                "label", "label.xxx", true, "",
                "label", "yyy.label.xxx", true, "yyy.",
                "label", "xlabel", false, "",
                "label", "labely", true, "",
                "label", "xxx.xlabel", false, "",

                "label", "xlabel.yyy", false, "",
                "label", "label:", false, "",
                "label", "label: ", false, "",
                "label", "label:;", false, "",
                "label", "xxx.label:", false, "",

                "\\w*s\\w*n\\w*d", "sound", true, "",
                "\\w*s\\w*n\\w*d", "snd", true, "",
                "\\w*s\\w*n\\w*d", "xxx.soundaaa", true, "xxx.",
                "\\w*s\\w*n\\w*d", "yyy.sound.zzz", true, "yyy.",

                "label", "LaBeL", true, "",
            ];

            checkResultsSearchWord(CompletionRegexesMock.regexEveryLabelWithoutColonForWord, insOuts);
            done();
        });


        test('regexEveryModuleForWord', (done) => {
            const insOuts = [
                // search-word, input-line, should-match, found-prefix
                "m", "module m", false, "",
                "m", " module m", true, " module ",
                "m", " MODULE m", true, " MODULE ",
                "m", " module x", false, "",
                "Mm_0123456789", "  module Mm_0123456789;", true, "  module ",
                "m", "  module  maaa", true, "  module  ",
                "m", " module m.aaa", true, " module ",
                "m", " module maaa.bb", true, " module ",
                "m", " module ma.b.c", true, " module ",
                "m", " module a.m", false, "",

                // For list file
                "m", "6017.R11 00 AF     module m", true, "6017.R11 00 AF     module ",
                "m", "39+ 6017           module m", true, "39+ 6017           module ",
                "m", "29    0012  D3 FE  module m", true, "29    0012  D3 FE  module ",
                "m", "625++C4D1          module m", true, "625++C4D1          module ",
                "m", "626++C4D1 FE 10    module m", true, "626++C4D1 FE 10    module ",
            ];

            checkResultsSearchWord(CompletionRegexesMock.regexEveryModuleForWord, insOuts);
            done();
        });


        test('regexEveryMacroForWord', (done) => {
            const insOuts = [
                "m", "macro m", false, "",
                "m", " macro m", true, " macro ",
                "m", " MACRO m", true, " MACRO ",
                "m", " macro x", false, "",
                "Mm_0123456789", "  macro Mm_0123456789;", true, "  macro ",
                "m", "  macro  maaa", true, "  macro  ",
                "m", " macro m.aaa", true, " macro ",
                "m", " macro maaa.bb", true, " macro ",
                "m", " macro ma.b.c", true, " macro ",
                "m", " macro a.m", false, "",

                // For list file
                "m", "6017.R11 00 AF     macro m", true, "6017.R11 00 AF     macro ",
                "m", "39+ 6017           macro m", true, "39+ 6017           macro ",
                "m", "29    0012  D3 FE  macro m", true, "29    0012  D3 FE  macro ",
                "m", "625++C4D1          macro m", true, "625++C4D1          macro ",
                "m", "626++C4D1 FE 10    macro m", true, "626++C4D1 FE 10    macro ",
            ];

            checkResultsSearchWord(CompletionRegexesMock.regexEveryMacroForWord, insOuts);
            done();
        });


        test('regexAnyReferenceForWord', (done) => {  // NOSONAR
            const insOuts = [
                // search-word, input-line, should-match, found-prefix
                "label", "label ", true, "",
                "label", " label", true, " ",
                "label", " jr label", true, " jr ",
                "label", " jr label2", false, "",
                "label", " jr zlabel", false, "",

                "label", "  jr nz,label", true, "  jr nz,",
                "label", "  jr nz,label.init", true, "  jr nz,",
                "label", "  jr nz,init.label.l3", true, "  jr nz,init.",
                "label", "  jr nz,init.label", true, "  jr nz,init.",
                "label", "  ld a,(init.label)", true, "  ld a,(init.",

                "label", "  ld a,(ix+init.label)", true, "  ld a,(ix+init.",
                "label", "  ld a,(ix-init.label)", true, "  ld a,(ix-init.",
                "label", "  ld a,(5+init.label)", true, "  ld a,(5+init.",
                "label", "  ld a,(5-init.label*8)", true, "  ld a,(5-init.",
            ];

            checkResultsSearchWord(CommonRegexes.regexAnyReferenceForWord, insOuts);
            done();
        });
    });
});