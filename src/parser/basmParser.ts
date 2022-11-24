// Generated from grammar/basm.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { basmListener } from "./basmListener";

export class basmParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly ORG = 11;
	public static readonly WORD = 12;
	public static readonly END = 13;
	public static readonly DUP = 14;
	public static readonly AND = 15;
	public static readonly OR = 16;
	public static readonly ADD = 17;
	public static readonly ADC = 18;
	public static readonly SUB = 19;
	public static readonly CMP = 20;
	public static readonly LOOP = 21;
	public static readonly LD = 22;
	public static readonly SWAM = 23;
	public static readonly JUMP = 24;
	public static readonly CALL = 25;
	public static readonly ST = 26;
	public static readonly NOP = 27;
	public static readonly HLT = 28;
	public static readonly CLA = 29;
	public static readonly NOT = 30;
	public static readonly CLC = 31;
	public static readonly CMC = 32;
	public static readonly ROL = 33;
	public static readonly ROR = 34;
	public static readonly ASL = 35;
	public static readonly ASR = 36;
	public static readonly SXTB = 37;
	public static readonly SWAB = 38;
	public static readonly INC = 39;
	public static readonly DEC = 40;
	public static readonly NEG = 41;
	public static readonly POP = 42;
	public static readonly POPF = 43;
	public static readonly RET = 44;
	public static readonly IRET = 45;
	public static readonly PUSH = 46;
	public static readonly PUSHF = 47;
	public static readonly SWAP = 48;
	public static readonly BEQ = 49;
	public static readonly BNE = 50;
	public static readonly BMI = 51;
	public static readonly BPL = 52;
	public static readonly BCS = 53;
	public static readonly BCC = 54;
	public static readonly BVS = 55;
	public static readonly BVC = 56;
	public static readonly BLT = 57;
	public static readonly BGE = 58;
	public static readonly BR = 59;
	public static readonly DI = 60;
	public static readonly EI = 61;
	public static readonly IN = 62;
	public static readonly OUT = 63;
	public static readonly INT = 64;
	public static readonly SP = 65;
	public static readonly IP = 66;
	public static readonly CYRILLIC = 67;
	public static readonly NAME = 68;
	public static readonly DECIMAL = 69;
	public static readonly HEX = 70;
	public static readonly COMMENT = 71;
	public static readonly STRING = 72;
	public static readonly EOL = 73;
	public static readonly WS = 74;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_instructionLine = 2;
	public static readonly RULE_instruction = 3;
	public static readonly RULE_directive = 4;
	public static readonly RULE_orgAddress = 5;
	public static readonly RULE_wordDirective = 6;
	public static readonly RULE_wordArguments = 7;
	public static readonly RULE_wordArgument = 8;
	public static readonly RULE_dupArgument = 9;
	public static readonly RULE_count = 10;
	public static readonly RULE_lbl = 11;
	public static readonly RULE_label = 12;
	public static readonly RULE_dev = 13;
	public static readonly RULE_operand = 14;
	public static readonly RULE_directAbsolute = 15;
	public static readonly RULE_indirect = 16;
	public static readonly RULE_postIncrement = 17;
	public static readonly RULE_preDecrement = 18;
	public static readonly RULE_displacementSP = 19;
	public static readonly RULE_directRelative = 20;
	public static readonly RULE_directLoad = 21;
	public static readonly RULE_address = 22;
	public static readonly RULE_string = 23;
	public static readonly RULE_name = 24;
	public static readonly RULE_number = 25;
	public static readonly RULE_comment = 26;
	public static readonly RULE_addr = 27;
	public static readonly RULE_nonaddr = 28;
	public static readonly RULE_branch = 29;
	public static readonly RULE_io = 30;
	public static readonly RULE_sp = 31;
	public static readonly RULE_ip = 32;
	public static readonly RULE_org = 33;
	public static readonly RULE_word = 34;
	public static readonly RULE_dup = 35;
	public static readonly RULE_end = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "instructionLine", "instruction", "directive", "orgAddress", 
		"wordDirective", "wordArguments", "wordArgument", "dupArgument", "count", 
		"lbl", "label", "dev", "operand", "directAbsolute", "indirect", "postIncrement", 
		"preDecrement", "displacementSP", "directRelative", "directLoad", "address", 
		"string", "name", "number", "comment", "addr", "nonaddr", "branch", "io", 
		"sp", "ip", "org", "word", "dup", "end",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'$'", "'?'", "'('", "')'", "':'", "'+'", "'-'", "'&'", 
		"'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "ORG", "WORD", "END", "DUP", 
		"AND", "OR", "ADD", "ADC", "SUB", "CMP", "LOOP", "LD", "SWAM", "JUMP", 
		"CALL", "ST", "NOP", "HLT", "CLA", "NOT", "CLC", "CMC", "ROL", "ROR", 
		"ASL", "ASR", "SXTB", "SWAB", "INC", "DEC", "NEG", "POP", "POPF", "RET", 
		"IRET", "PUSH", "PUSHF", "SWAP", "BEQ", "BNE", "BMI", "BPL", "BCS", "BCC", 
		"BVS", "BVC", "BLT", "BGE", "BR", "DI", "EI", "IN", "OUT", "INT", "SP", 
		"IP", "CYRILLIC", "NAME", "DECIMAL", "HEX", "COMMENT", "STRING", "EOL", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(basmParser._LITERAL_NAMES, basmParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return basmParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "basm.g4"; }

	// @Override
	public get ruleNames(): string[] { return basmParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return basmParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(basmParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, basmParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (basmParser.ORG - 11)) | (1 << (basmParser.WORD - 11)) | (1 << (basmParser.END - 11)) | (1 << (basmParser.AND - 11)) | (1 << (basmParser.OR - 11)) | (1 << (basmParser.ADD - 11)) | (1 << (basmParser.ADC - 11)) | (1 << (basmParser.SUB - 11)) | (1 << (basmParser.CMP - 11)) | (1 << (basmParser.LOOP - 11)) | (1 << (basmParser.LD - 11)) | (1 << (basmParser.SWAM - 11)) | (1 << (basmParser.JUMP - 11)) | (1 << (basmParser.CALL - 11)) | (1 << (basmParser.ST - 11)) | (1 << (basmParser.NOP - 11)) | (1 << (basmParser.HLT - 11)) | (1 << (basmParser.CLA - 11)) | (1 << (basmParser.NOT - 11)) | (1 << (basmParser.CLC - 11)) | (1 << (basmParser.CMC - 11)) | (1 << (basmParser.ROL - 11)) | (1 << (basmParser.ROR - 11)) | (1 << (basmParser.ASL - 11)) | (1 << (basmParser.ASR - 11)) | (1 << (basmParser.SXTB - 11)) | (1 << (basmParser.SWAB - 11)) | (1 << (basmParser.INC - 11)) | (1 << (basmParser.DEC - 11)) | (1 << (basmParser.NEG - 11)) | (1 << (basmParser.POP - 11)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (basmParser.POPF - 43)) | (1 << (basmParser.RET - 43)) | (1 << (basmParser.IRET - 43)) | (1 << (basmParser.PUSH - 43)) | (1 << (basmParser.PUSHF - 43)) | (1 << (basmParser.SWAP - 43)) | (1 << (basmParser.BEQ - 43)) | (1 << (basmParser.BNE - 43)) | (1 << (basmParser.BMI - 43)) | (1 << (basmParser.BPL - 43)) | (1 << (basmParser.BCS - 43)) | (1 << (basmParser.BCC - 43)) | (1 << (basmParser.BVS - 43)) | (1 << (basmParser.BVC - 43)) | (1 << (basmParser.BLT - 43)) | (1 << (basmParser.BGE - 43)) | (1 << (basmParser.BR - 43)) | (1 << (basmParser.DI - 43)) | (1 << (basmParser.EI - 43)) | (1 << (basmParser.IN - 43)) | (1 << (basmParser.OUT - 43)) | (1 << (basmParser.INT - 43)) | (1 << (basmParser.NAME - 43)) | (1 << (basmParser.COMMENT - 43)) | (1 << (basmParser.EOL - 43)))) !== 0)) {
				{
				{
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (basmParser.ORG - 11)) | (1 << (basmParser.WORD - 11)) | (1 << (basmParser.END - 11)) | (1 << (basmParser.AND - 11)) | (1 << (basmParser.OR - 11)) | (1 << (basmParser.ADD - 11)) | (1 << (basmParser.ADC - 11)) | (1 << (basmParser.SUB - 11)) | (1 << (basmParser.CMP - 11)) | (1 << (basmParser.LOOP - 11)) | (1 << (basmParser.LD - 11)) | (1 << (basmParser.SWAM - 11)) | (1 << (basmParser.JUMP - 11)) | (1 << (basmParser.CALL - 11)) | (1 << (basmParser.ST - 11)) | (1 << (basmParser.NOP - 11)) | (1 << (basmParser.HLT - 11)) | (1 << (basmParser.CLA - 11)) | (1 << (basmParser.NOT - 11)) | (1 << (basmParser.CLC - 11)) | (1 << (basmParser.CMC - 11)) | (1 << (basmParser.ROL - 11)) | (1 << (basmParser.ROR - 11)) | (1 << (basmParser.ASL - 11)) | (1 << (basmParser.ASR - 11)) | (1 << (basmParser.SXTB - 11)) | (1 << (basmParser.SWAB - 11)) | (1 << (basmParser.INC - 11)) | (1 << (basmParser.DEC - 11)) | (1 << (basmParser.NEG - 11)) | (1 << (basmParser.POP - 11)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (basmParser.POPF - 43)) | (1 << (basmParser.RET - 43)) | (1 << (basmParser.IRET - 43)) | (1 << (basmParser.PUSH - 43)) | (1 << (basmParser.PUSHF - 43)) | (1 << (basmParser.SWAP - 43)) | (1 << (basmParser.BEQ - 43)) | (1 << (basmParser.BNE - 43)) | (1 << (basmParser.BMI - 43)) | (1 << (basmParser.BPL - 43)) | (1 << (basmParser.BCS - 43)) | (1 << (basmParser.BCC - 43)) | (1 << (basmParser.BVS - 43)) | (1 << (basmParser.BVC - 43)) | (1 << (basmParser.BLT - 43)) | (1 << (basmParser.BGE - 43)) | (1 << (basmParser.BR - 43)) | (1 << (basmParser.DI - 43)) | (1 << (basmParser.EI - 43)) | (1 << (basmParser.IN - 43)) | (1 << (basmParser.OUT - 43)) | (1 << (basmParser.INT - 43)) | (1 << (basmParser.NAME - 43)) | (1 << (basmParser.COMMENT - 43)))) !== 0)) {
					{
					this.state = 74;
					this.line();
					}
				}

				this.state = 77;
				this.match(basmParser.EOL);
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, basmParser.RULE_line);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				this.comment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.instructionLine();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 85;
				this.directive();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 86;
				this.lbl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instructionLine(): InstructionLineContext {
		let _localctx: InstructionLineContext = new InstructionLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, basmParser.RULE_instructionLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === basmParser.NAME) {
				{
				this.state = 89;
				this.lbl();
				}
			}

			this.state = 92;
			this.instruction();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === basmParser.COMMENT) {
				{
				this.state = 93;
				this.comment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, basmParser.RULE_instruction);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case basmParser.AND:
			case basmParser.OR:
			case basmParser.ADD:
			case basmParser.ADC:
			case basmParser.SUB:
			case basmParser.CMP:
			case basmParser.LOOP:
			case basmParser.LD:
			case basmParser.SWAM:
			case basmParser.JUMP:
			case basmParser.CALL:
			case basmParser.ST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.addr();
				this.state = 97;
				this.operand();
				}
				break;
			case basmParser.NOP:
			case basmParser.HLT:
			case basmParser.CLA:
			case basmParser.NOT:
			case basmParser.CLC:
			case basmParser.CMC:
			case basmParser.ROL:
			case basmParser.ROR:
			case basmParser.ASL:
			case basmParser.ASR:
			case basmParser.SXTB:
			case basmParser.SWAB:
			case basmParser.INC:
			case basmParser.DEC:
			case basmParser.NEG:
			case basmParser.POP:
			case basmParser.POPF:
			case basmParser.RET:
			case basmParser.IRET:
			case basmParser.PUSH:
			case basmParser.PUSHF:
			case basmParser.SWAP:
			case basmParser.DI:
			case basmParser.EI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 99;
				this.nonaddr();
				}
				break;
			case basmParser.BEQ:
			case basmParser.BNE:
			case basmParser.BMI:
			case basmParser.BPL:
			case basmParser.BCS:
			case basmParser.BCC:
			case basmParser.BVS:
			case basmParser.BVC:
			case basmParser.BLT:
			case basmParser.BGE:
			case basmParser.BR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 100;
				this.branch();
				this.state = 101;
				this.label();
				}
				break;
			case basmParser.IN:
			case basmParser.OUT:
			case basmParser.INT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
				this.io();
				this.state = 104;
				this.dev();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, basmParser.RULE_directive);
		let _la: number;
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case basmParser.ORG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.org();
				this.state = 109;
				this.orgAddress();
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === basmParser.COMMENT) {
					{
					this.state = 110;
					this.comment();
					}
				}

				}
				break;
			case basmParser.WORD:
			case basmParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.wordDirective();
				}
				break;
			case basmParser.END:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.end();
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === basmParser.COMMENT) {
					{
					this.state = 115;
					this.comment();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orgAddress(): OrgAddressContext {
		let _localctx: OrgAddressContext = new OrgAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, basmParser.RULE_orgAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.address();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wordDirective(): WordDirectiveContext {
		let _localctx: WordDirectiveContext = new WordDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, basmParser.RULE_wordDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === basmParser.NAME) {
				{
				this.state = 122;
				this.lbl();
				}
			}

			this.state = 125;
			this.word();
			this.state = 126;
			this.wordArguments();
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === basmParser.COMMENT) {
				{
				this.state = 127;
				this.comment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wordArguments(): WordArgumentsContext {
		let _localctx: WordArgumentsContext = new WordArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, basmParser.RULE_wordArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.wordArgument();
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === basmParser.T__0) {
				{
				{
				this.state = 131;
				this.match(basmParser.T__0);
				this.state = 132;
				this.wordArgument();
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wordArgument(): WordArgumentContext {
		let _localctx: WordArgumentContext = new WordArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, basmParser.RULE_wordArgument);
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 138;
				this.number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this.match(basmParser.T__1);
				this.state = 140;
				this.label();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 141;
				this.dupArgument();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 142;
				this.match(basmParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dupArgument(): DupArgumentContext {
		let _localctx: DupArgumentContext = new DupArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, basmParser.RULE_dupArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.count();
			this.state = 146;
			this.dup();
			this.state = 147;
			this.match(basmParser.T__3);
			this.state = 148;
			this.wordArgument();
			this.state = 149;
			this.match(basmParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public count(): CountContext {
		let _localctx: CountContext = new CountContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, basmParser.RULE_count);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lbl(): LblContext {
		let _localctx: LblContext = new LblContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, basmParser.RULE_lbl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.label();
			this.state = 154;
			this.match(basmParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, basmParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dev(): DevContext {
		let _localctx: DevContext = new DevContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, basmParser.RULE_dev);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, basmParser.RULE_operand);
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 160;
				this.directAbsolute();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 161;
				this.indirect();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 162;
				this.postIncrement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 163;
				this.preDecrement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 164;
				this.displacementSP();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 165;
				this.directRelative();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 166;
				this.directLoad();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directAbsolute(): DirectAbsoluteContext {
		let _localctx: DirectAbsoluteContext = new DirectAbsoluteContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, basmParser.RULE_directAbsolute);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case basmParser.DECIMAL:
			case basmParser.HEX:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.address();
				}
				break;
			case basmParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.match(basmParser.T__1);
				this.state = 171;
				this.label();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indirect(): IndirectContext {
		let _localctx: IndirectContext = new IndirectContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, basmParser.RULE_indirect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(basmParser.T__3);
			this.state = 175;
			this.label();
			this.state = 176;
			this.match(basmParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postIncrement(): PostIncrementContext {
		let _localctx: PostIncrementContext = new PostIncrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, basmParser.RULE_postIncrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(basmParser.T__3);
			this.state = 179;
			this.label();
			this.state = 180;
			this.match(basmParser.T__4);
			this.state = 181;
			this.match(basmParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preDecrement(): PreDecrementContext {
		let _localctx: PreDecrementContext = new PreDecrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, basmParser.RULE_preDecrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(basmParser.T__7);
			this.state = 184;
			this.match(basmParser.T__3);
			this.state = 185;
			this.label();
			this.state = 186;
			this.match(basmParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public displacementSP(): DisplacementSPContext {
		let _localctx: DisplacementSPContext = new DisplacementSPContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, basmParser.RULE_displacementSP);
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case basmParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.match(basmParser.T__8);
				this.state = 189;
				this.number();
				}
				break;
			case basmParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 190;
				this.match(basmParser.T__3);
				this.state = 191;
				this.sp();
				this.state = 192;
				this.match(basmParser.T__6);
				this.state = 193;
				this.number();
				this.state = 194;
				this.match(basmParser.T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directRelative(): DirectRelativeContext {
		let _localctx: DirectRelativeContext = new DirectRelativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, basmParser.RULE_directRelative);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.label();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directLoad(): DirectLoadContext {
		let _localctx: DirectLoadContext = new DirectLoadContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, basmParser.RULE_directLoad);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(basmParser.T__9);
			this.state = 201;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public address(): AddressContext {
		let _localctx: AddressContext = new AddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, basmParser.RULE_address);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, basmParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(basmParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, basmParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(basmParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, basmParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			_la = this._input.LA(1);
			if (!(_la === basmParser.DECIMAL || _la === basmParser.HEX)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, basmParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(basmParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addr(): AddrContext {
		let _localctx: AddrContext = new AddrContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, basmParser.RULE_addr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << basmParser.AND) | (1 << basmParser.OR) | (1 << basmParser.ADD) | (1 << basmParser.ADC) | (1 << basmParser.SUB) | (1 << basmParser.CMP) | (1 << basmParser.LOOP) | (1 << basmParser.LD) | (1 << basmParser.SWAM) | (1 << basmParser.JUMP) | (1 << basmParser.CALL) | (1 << basmParser.ST))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonaddr(): NonaddrContext {
		let _localctx: NonaddrContext = new NonaddrContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, basmParser.RULE_nonaddr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << basmParser.NOP) | (1 << basmParser.HLT) | (1 << basmParser.CLA) | (1 << basmParser.NOT) | (1 << basmParser.CLC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (basmParser.CMC - 32)) | (1 << (basmParser.ROL - 32)) | (1 << (basmParser.ROR - 32)) | (1 << (basmParser.ASL - 32)) | (1 << (basmParser.ASR - 32)) | (1 << (basmParser.SXTB - 32)) | (1 << (basmParser.SWAB - 32)) | (1 << (basmParser.INC - 32)) | (1 << (basmParser.DEC - 32)) | (1 << (basmParser.NEG - 32)) | (1 << (basmParser.POP - 32)) | (1 << (basmParser.POPF - 32)) | (1 << (basmParser.RET - 32)) | (1 << (basmParser.IRET - 32)) | (1 << (basmParser.PUSH - 32)) | (1 << (basmParser.PUSHF - 32)) | (1 << (basmParser.SWAP - 32)) | (1 << (basmParser.DI - 32)) | (1 << (basmParser.EI - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public branch(): BranchContext {
		let _localctx: BranchContext = new BranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, basmParser.RULE_branch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			_la = this._input.LA(1);
			if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (basmParser.BEQ - 49)) | (1 << (basmParser.BNE - 49)) | (1 << (basmParser.BMI - 49)) | (1 << (basmParser.BPL - 49)) | (1 << (basmParser.BCS - 49)) | (1 << (basmParser.BCC - 49)) | (1 << (basmParser.BVS - 49)) | (1 << (basmParser.BVC - 49)) | (1 << (basmParser.BLT - 49)) | (1 << (basmParser.BGE - 49)) | (1 << (basmParser.BR - 49)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public io(): IoContext {
		let _localctx: IoContext = new IoContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, basmParser.RULE_io);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (basmParser.IN - 62)) | (1 << (basmParser.OUT - 62)) | (1 << (basmParser.INT - 62)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sp(): SpContext {
		let _localctx: SpContext = new SpContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, basmParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(basmParser.SP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ip(): IpContext {
		let _localctx: IpContext = new IpContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, basmParser.RULE_ip);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(basmParser.IP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public org(): OrgContext {
		let _localctx: OrgContext = new OrgContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, basmParser.RULE_org);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(basmParser.ORG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public word(): WordContext {
		let _localctx: WordContext = new WordContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, basmParser.RULE_word);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(basmParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dup(): DupContext {
		let _localctx: DupContext = new DupContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, basmParser.RULE_dup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(basmParser.DUP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, basmParser.RULE_end);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(basmParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\xEC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x05\x02N\n\x02\x03\x02\x07\x02Q\n" +
		"\x02\f\x02\x0E\x02T\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03Z\n\x03" +
		"\x03\x04\x05\x04]\n\x04\x03\x04\x03\x04\x05\x04a\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"m\n\x05\x03\x06\x03\x06\x03\x06\x05\x06r\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06w\n\x06\x05\x06y\n\x06\x03\x07\x03\x07\x03\b\x05\b~\n\b\x03\b" +
		"\x03\b\x03\b\x05\b\x83\n\b\x03\t\x03\t\x03\t\x07\t\x88\n\t\f\t\x0E\t\x8B" +
		"\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x92\n\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xAA" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\xAF\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\xC7\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03" +
		"!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x02\x02\x02" +
		"\'\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02\x02\x07\x03\x02GH\x03\x02\x11\x1C\x04\x02\x1D2>?\x03\x02" +
		"3=\x03\x02@B\x02\xE2\x02R\x03\x02\x02\x02\x04Y\x03\x02\x02\x02\x06\\\x03" +
		"\x02\x02\x02\bl\x03\x02\x02\x02\nx\x03\x02\x02\x02\fz\x03\x02\x02\x02" +
		"\x0E}\x03\x02\x02\x02\x10\x84\x03\x02\x02\x02\x12\x91\x03\x02\x02\x02" +
		"\x14\x93\x03\x02\x02\x02\x16\x99\x03\x02\x02\x02\x18\x9B\x03\x02\x02\x02" +
		"\x1A\x9E\x03\x02\x02\x02\x1C\xA0\x03\x02\x02\x02\x1E\xA9\x03\x02\x02\x02" +
		" \xAE\x03\x02\x02\x02\"\xB0\x03\x02\x02\x02$\xB4\x03\x02\x02\x02&\xB9" +
		"\x03\x02\x02\x02(\xC6\x03\x02\x02\x02*\xC8\x03\x02\x02\x02,\xCA\x03\x02" +
		"\x02\x02.\xCD\x03\x02\x02\x020\xCF\x03\x02\x02\x022\xD1\x03\x02\x02\x02" +
		"4\xD3\x03\x02\x02\x026\xD5\x03\x02\x02\x028\xD7\x03\x02\x02\x02:\xD9\x03" +
		"\x02\x02\x02<\xDB\x03\x02\x02\x02>\xDD\x03\x02\x02\x02@\xDF\x03\x02\x02" +
		"\x02B\xE1\x03\x02\x02\x02D\xE3\x03\x02\x02\x02F\xE5\x03\x02\x02\x02H\xE7" +
		"\x03\x02\x02\x02J\xE9\x03\x02\x02\x02LN\x05\x04\x03\x02ML\x03\x02\x02" +
		"\x02MN\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x07K\x02\x02PM\x03\x02\x02" +
		"\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\x03\x03\x02" +
		"\x02\x02TR\x03\x02\x02\x02UZ\x056\x1C\x02VZ\x05\x06\x04\x02WZ\x05\n\x06" +
		"\x02XZ\x05\x18\r\x02YU\x03\x02\x02\x02YV\x03\x02\x02\x02YW\x03\x02\x02" +
		"\x02YX\x03\x02\x02\x02Z\x05\x03\x02\x02\x02[]\x05\x18\r\x02\\[\x03\x02" +
		"\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x05\b\x05\x02_a\x056\x1C" +
		"\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02a\x07\x03\x02\x02\x02bc\x058\x1D" +
		"\x02cd\x05\x1E\x10\x02dm\x03\x02\x02\x02em\x05:\x1E\x02fg\x05<\x1F\x02" +
		"gh\x05\x1A\x0E\x02hm\x03\x02\x02\x02ij\x05> \x02jk\x05\x1C\x0F\x02km\x03" +
		"\x02\x02\x02lb\x03\x02\x02\x02le\x03\x02\x02\x02lf\x03\x02\x02\x02li\x03" +
		"\x02\x02\x02m\t\x03\x02\x02\x02no\x05D#\x02oq\x05\f\x07\x02pr\x056\x1C" +
		"\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02ry\x03\x02\x02\x02sy\x05\x0E\b" +
		"\x02tv\x05J&\x02uw\x056\x1C\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wy" +
		"\x03\x02\x02\x02xn\x03\x02\x02\x02xs\x03\x02\x02\x02xt\x03\x02\x02\x02" +
		"y\v\x03\x02\x02\x02z{\x05.\x18\x02{\r\x03\x02\x02\x02|~\x05\x18\r\x02" +
		"}|\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x05" +
		"F$\x02\x80\x82\x05\x10\t\x02\x81\x83\x056\x1C\x02\x82\x81\x03\x02\x02" +
		"\x02\x82\x83\x03\x02\x02\x02\x83\x0F\x03\x02\x02\x02\x84\x89\x05\x12\n" +
		"\x02\x85\x86\x07\x03\x02\x02\x86\x88\x05\x12\n\x02\x87\x85\x03\x02\x02" +
		"\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02" +
		"\x02\x8A\x11\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x92\x054\x1B" +
		"\x02\x8D\x8E\x07\x04\x02\x02\x8E\x92\x05\x1A\x0E\x02\x8F\x92\x05\x14\v" +
		"\x02\x90\x92\x07\x05\x02\x02\x91\x8C\x03\x02\x02\x02\x91\x8D\x03\x02\x02" +
		"\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92\x13\x03\x02\x02" +
		"\x02\x93\x94\x05\x16\f\x02\x94\x95\x05H%\x02\x95\x96\x07\x06\x02\x02\x96" +
		"\x97\x05\x12\n\x02\x97\x98\x07\x07\x02\x02\x98\x15\x03\x02\x02\x02\x99" +
		"\x9A\x054\x1B\x02\x9A\x17\x03\x02\x02\x02\x9B\x9C\x05\x1A\x0E\x02\x9C" +
		"\x9D\x07\b\x02\x02\x9D\x19\x03\x02\x02\x02\x9E\x9F\x052\x1A\x02\x9F\x1B" +
		"\x03\x02\x02\x02\xA0\xA1\x054\x1B\x02\xA1\x1D\x03\x02\x02\x02\xA2\xAA" +
		"\x05 \x11\x02\xA3\xAA\x05\"\x12\x02\xA4\xAA\x05$\x13\x02\xA5\xAA\x05&" +
		"\x14\x02\xA6\xAA\x05(\x15\x02\xA7\xAA\x05*\x16\x02\xA8\xAA\x05,\x17\x02" +
		"\xA9\xA2\x03\x02\x02\x02\xA9\xA3\x03\x02\x02\x02\xA9\xA4\x03\x02\x02\x02" +
		"\xA9\xA5\x03\x02\x02\x02\xA9\xA6\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02" +
		"\xA9\xA8\x03\x02\x02\x02\xAA\x1F\x03\x02\x02\x02\xAB\xAF\x05.\x18\x02" +
		"\xAC\xAD\x07\x04\x02\x02\xAD\xAF\x05\x1A\x0E\x02\xAE\xAB\x03\x02\x02\x02" +
		"\xAE\xAC\x03\x02\x02\x02\xAF!\x03\x02\x02\x02\xB0\xB1\x07\x06\x02\x02" +
		"\xB1\xB2\x05\x1A\x0E\x02\xB2\xB3\x07\x07\x02\x02\xB3#\x03\x02\x02\x02" +
		"\xB4\xB5\x07\x06\x02\x02\xB5\xB6\x05\x1A\x0E\x02\xB6\xB7\x07\x07\x02\x02" +
		"\xB7\xB8\x07\t\x02\x02\xB8%\x03\x02\x02\x02\xB9\xBA\x07\n\x02\x02\xBA" +
		"\xBB\x07\x06\x02\x02\xBB\xBC\x05\x1A\x0E\x02\xBC\xBD\x07\x07\x02\x02\xBD" +
		"\'\x03\x02\x02\x02\xBE\xBF\x07\v\x02\x02\xBF\xC7\x054\x1B\x02\xC0\xC1" +
		"\x07\x06\x02\x02\xC1\xC2\x05@!\x02\xC2\xC3\x07\t\x02\x02\xC3\xC4\x054" +
		"\x1B\x02\xC4\xC5\x07\x07\x02\x02\xC5\xC7\x03\x02\x02\x02\xC6\xBE\x03\x02" +
		"\x02\x02\xC6\xC0\x03\x02\x02\x02\xC7)\x03\x02\x02\x02\xC8\xC9\x05\x1A" +
		"\x0E\x02\xC9+\x03\x02\x02\x02\xCA\xCB\x07\f\x02\x02\xCB\xCC\x054\x1B\x02" +
		"\xCC-\x03\x02\x02\x02\xCD\xCE\x054\x1B\x02\xCE/\x03\x02\x02\x02\xCF\xD0" +
		"\x07J\x02\x02\xD01\x03\x02\x02\x02\xD1\xD2\x07F\x02\x02\xD23\x03\x02\x02" +
		"\x02\xD3\xD4\t\x02\x02\x02\xD45\x03\x02\x02\x02\xD5\xD6\x07I\x02\x02\xD6" +
		"7\x03\x02\x02\x02\xD7\xD8\t\x03\x02\x02\xD89\x03\x02\x02\x02\xD9\xDA\t" +
		"\x04\x02\x02\xDA;\x03\x02\x02\x02\xDB\xDC\t\x05\x02\x02\xDC=\x03\x02\x02" +
		"\x02\xDD\xDE\t\x06\x02\x02\xDE?\x03\x02\x02\x02\xDF\xE0\x07C\x02\x02\xE0" +
		"A\x03\x02\x02\x02\xE1\xE2\x07D\x02\x02\xE2C\x03\x02\x02\x02\xE3\xE4\x07" +
		"\r\x02\x02\xE4E\x03\x02\x02\x02\xE5\xE6\x07\x0E\x02\x02\xE6G\x03\x02\x02" +
		"\x02\xE7\xE8\x07\x10\x02\x02\xE8I\x03\x02\x02\x02\xE9\xEA\x07\x0F\x02" +
		"\x02\xEAK\x03\x02\x02\x02\x12MRY\\`lqvx}\x82\x89\x91\xA9\xAE\xC6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!basmParser.__ATN) {
			basmParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(basmParser._serializedATN));
		}

		return basmParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(basmParser.EOL);
		} else {
			return this.getToken(basmParser.EOL, i);
		}
	}
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_prog; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public instructionLine(): InstructionLineContext | undefined {
		return this.tryGetRuleContext(0, InstructionLineContext);
	}
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	public lbl(): LblContext | undefined {
		return this.tryGetRuleContext(0, LblContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_line; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class InstructionLineContext extends ParserRuleContext {
	public instruction(): InstructionContext {
		return this.getRuleContext(0, InstructionContext);
	}
	public lbl(): LblContext | undefined {
		return this.tryGetRuleContext(0, LblContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_instructionLine; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterInstructionLine) {
			listener.enterInstructionLine(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitInstructionLine) {
			listener.exitInstructionLine(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public addr(): AddrContext | undefined {
		return this.tryGetRuleContext(0, AddrContext);
	}
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	public nonaddr(): NonaddrContext | undefined {
		return this.tryGetRuleContext(0, NonaddrContext);
	}
	public branch(): BranchContext | undefined {
		return this.tryGetRuleContext(0, BranchContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public io(): IoContext | undefined {
		return this.tryGetRuleContext(0, IoContext);
	}
	public dev(): DevContext | undefined {
		return this.tryGetRuleContext(0, DevContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_instruction; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public org(): OrgContext | undefined {
		return this.tryGetRuleContext(0, OrgContext);
	}
	public orgAddress(): OrgAddressContext | undefined {
		return this.tryGetRuleContext(0, OrgAddressContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public wordDirective(): WordDirectiveContext | undefined {
		return this.tryGetRuleContext(0, WordDirectiveContext);
	}
	public end(): EndContext | undefined {
		return this.tryGetRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_directive; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
}


export class OrgAddressContext extends ParserRuleContext {
	public address(): AddressContext {
		return this.getRuleContext(0, AddressContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_orgAddress; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterOrgAddress) {
			listener.enterOrgAddress(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitOrgAddress) {
			listener.exitOrgAddress(this);
		}
	}
}


export class WordDirectiveContext extends ParserRuleContext {
	public word(): WordContext {
		return this.getRuleContext(0, WordContext);
	}
	public wordArguments(): WordArgumentsContext {
		return this.getRuleContext(0, WordArgumentsContext);
	}
	public lbl(): LblContext | undefined {
		return this.tryGetRuleContext(0, LblContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_wordDirective; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterWordDirective) {
			listener.enterWordDirective(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitWordDirective) {
			listener.exitWordDirective(this);
		}
	}
}


export class WordArgumentsContext extends ParserRuleContext {
	public wordArgument(): WordArgumentContext[];
	public wordArgument(i: number): WordArgumentContext;
	public wordArgument(i?: number): WordArgumentContext | WordArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordArgumentContext);
		} else {
			return this.getRuleContext(i, WordArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_wordArguments; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterWordArguments) {
			listener.enterWordArguments(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitWordArguments) {
			listener.exitWordArguments(this);
		}
	}
}


export class WordArgumentContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public dupArgument(): DupArgumentContext | undefined {
		return this.tryGetRuleContext(0, DupArgumentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_wordArgument; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterWordArgument) {
			listener.enterWordArgument(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitWordArgument) {
			listener.exitWordArgument(this);
		}
	}
}


export class DupArgumentContext extends ParserRuleContext {
	public count(): CountContext {
		return this.getRuleContext(0, CountContext);
	}
	public dup(): DupContext {
		return this.getRuleContext(0, DupContext);
	}
	public wordArgument(): WordArgumentContext {
		return this.getRuleContext(0, WordArgumentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_dupArgument; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterDupArgument) {
			listener.enterDupArgument(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitDupArgument) {
			listener.exitDupArgument(this);
		}
	}
}


export class CountContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_count; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterCount) {
			listener.enterCount(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitCount) {
			listener.exitCount(this);
		}
	}
}


export class LblContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_lbl; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterLbl) {
			listener.enterLbl(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitLbl) {
			listener.exitLbl(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_label; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class DevContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_dev; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterDev) {
			listener.enterDev(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitDev) {
			listener.exitDev(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public directAbsolute(): DirectAbsoluteContext | undefined {
		return this.tryGetRuleContext(0, DirectAbsoluteContext);
	}
	public indirect(): IndirectContext | undefined {
		return this.tryGetRuleContext(0, IndirectContext);
	}
	public postIncrement(): PostIncrementContext | undefined {
		return this.tryGetRuleContext(0, PostIncrementContext);
	}
	public preDecrement(): PreDecrementContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementContext);
	}
	public displacementSP(): DisplacementSPContext | undefined {
		return this.tryGetRuleContext(0, DisplacementSPContext);
	}
	public directRelative(): DirectRelativeContext | undefined {
		return this.tryGetRuleContext(0, DirectRelativeContext);
	}
	public directLoad(): DirectLoadContext | undefined {
		return this.tryGetRuleContext(0, DirectLoadContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_operand; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
}


export class DirectAbsoluteContext extends ParserRuleContext {
	public address(): AddressContext | undefined {
		return this.tryGetRuleContext(0, AddressContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_directAbsolute; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterDirectAbsolute) {
			listener.enterDirectAbsolute(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitDirectAbsolute) {
			listener.exitDirectAbsolute(this);
		}
	}
}


export class IndirectContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_indirect; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterIndirect) {
			listener.enterIndirect(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitIndirect) {
			listener.exitIndirect(this);
		}
	}
}


export class PostIncrementContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_postIncrement; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterPostIncrement) {
			listener.enterPostIncrement(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitPostIncrement) {
			listener.exitPostIncrement(this);
		}
	}
}


export class PreDecrementContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_preDecrement; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterPreDecrement) {
			listener.enterPreDecrement(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitPreDecrement) {
			listener.exitPreDecrement(this);
		}
	}
}


export class DisplacementSPContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public sp(): SpContext | undefined {
		return this.tryGetRuleContext(0, SpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_displacementSP; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterDisplacementSP) {
			listener.enterDisplacementSP(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitDisplacementSP) {
			listener.exitDisplacementSP(this);
		}
	}
}


export class DirectRelativeContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_directRelative; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterDirectRelative) {
			listener.enterDirectRelative(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitDirectRelative) {
			listener.exitDirectRelative(this);
		}
	}
}


export class DirectLoadContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_directLoad; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterDirectLoad) {
			listener.enterDirectLoad(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitDirectLoad) {
			listener.exitDirectLoad(this);
		}
	}
}


export class AddressContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_address; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterAddress) {
			listener.enterAddress(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitAddress) {
			listener.exitAddress(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(basmParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_string; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(basmParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_name; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(basmParser.DECIMAL, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(basmParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_number; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(basmParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_comment; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


export class AddrContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(basmParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(basmParser.OR, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(basmParser.ADD, 0); }
	public ADC(): TerminalNode | undefined { return this.tryGetToken(basmParser.ADC, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(basmParser.SUB, 0); }
	public CMP(): TerminalNode | undefined { return this.tryGetToken(basmParser.CMP, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(basmParser.LOOP, 0); }
	public LD(): TerminalNode | undefined { return this.tryGetToken(basmParser.LD, 0); }
	public SWAM(): TerminalNode | undefined { return this.tryGetToken(basmParser.SWAM, 0); }
	public JUMP(): TerminalNode | undefined { return this.tryGetToken(basmParser.JUMP, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(basmParser.CALL, 0); }
	public ST(): TerminalNode | undefined { return this.tryGetToken(basmParser.ST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_addr; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterAddr) {
			listener.enterAddr(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitAddr) {
			listener.exitAddr(this);
		}
	}
}


export class NonaddrContext extends ParserRuleContext {
	public NOP(): TerminalNode | undefined { return this.tryGetToken(basmParser.NOP, 0); }
	public HLT(): TerminalNode | undefined { return this.tryGetToken(basmParser.HLT, 0); }
	public CLA(): TerminalNode | undefined { return this.tryGetToken(basmParser.CLA, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(basmParser.NOT, 0); }
	public CLC(): TerminalNode | undefined { return this.tryGetToken(basmParser.CLC, 0); }
	public CMC(): TerminalNode | undefined { return this.tryGetToken(basmParser.CMC, 0); }
	public ROL(): TerminalNode | undefined { return this.tryGetToken(basmParser.ROL, 0); }
	public ROR(): TerminalNode | undefined { return this.tryGetToken(basmParser.ROR, 0); }
	public ASL(): TerminalNode | undefined { return this.tryGetToken(basmParser.ASL, 0); }
	public ASR(): TerminalNode | undefined { return this.tryGetToken(basmParser.ASR, 0); }
	public SXTB(): TerminalNode | undefined { return this.tryGetToken(basmParser.SXTB, 0); }
	public SWAB(): TerminalNode | undefined { return this.tryGetToken(basmParser.SWAB, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(basmParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(basmParser.DEC, 0); }
	public NEG(): TerminalNode | undefined { return this.tryGetToken(basmParser.NEG, 0); }
	public POP(): TerminalNode | undefined { return this.tryGetToken(basmParser.POP, 0); }
	public POPF(): TerminalNode | undefined { return this.tryGetToken(basmParser.POPF, 0); }
	public RET(): TerminalNode | undefined { return this.tryGetToken(basmParser.RET, 0); }
	public IRET(): TerminalNode | undefined { return this.tryGetToken(basmParser.IRET, 0); }
	public PUSH(): TerminalNode | undefined { return this.tryGetToken(basmParser.PUSH, 0); }
	public PUSHF(): TerminalNode | undefined { return this.tryGetToken(basmParser.PUSHF, 0); }
	public SWAP(): TerminalNode | undefined { return this.tryGetToken(basmParser.SWAP, 0); }
	public EI(): TerminalNode | undefined { return this.tryGetToken(basmParser.EI, 0); }
	public DI(): TerminalNode | undefined { return this.tryGetToken(basmParser.DI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_nonaddr; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterNonaddr) {
			listener.enterNonaddr(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitNonaddr) {
			listener.exitNonaddr(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	public BEQ(): TerminalNode | undefined { return this.tryGetToken(basmParser.BEQ, 0); }
	public BNE(): TerminalNode | undefined { return this.tryGetToken(basmParser.BNE, 0); }
	public BMI(): TerminalNode | undefined { return this.tryGetToken(basmParser.BMI, 0); }
	public BPL(): TerminalNode | undefined { return this.tryGetToken(basmParser.BPL, 0); }
	public BCS(): TerminalNode | undefined { return this.tryGetToken(basmParser.BCS, 0); }
	public BCC(): TerminalNode | undefined { return this.tryGetToken(basmParser.BCC, 0); }
	public BVS(): TerminalNode | undefined { return this.tryGetToken(basmParser.BVS, 0); }
	public BVC(): TerminalNode | undefined { return this.tryGetToken(basmParser.BVC, 0); }
	public BLT(): TerminalNode | undefined { return this.tryGetToken(basmParser.BLT, 0); }
	public BGE(): TerminalNode | undefined { return this.tryGetToken(basmParser.BGE, 0); }
	public BR(): TerminalNode | undefined { return this.tryGetToken(basmParser.BR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_branch; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterBranch) {
			listener.enterBranch(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitBranch) {
			listener.exitBranch(this);
		}
	}
}


export class IoContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(basmParser.IN, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(basmParser.OUT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(basmParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_io; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterIo) {
			listener.enterIo(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitIo) {
			listener.exitIo(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public SP(): TerminalNode { return this.getToken(basmParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_sp; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


export class IpContext extends ParserRuleContext {
	public IP(): TerminalNode { return this.getToken(basmParser.IP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_ip; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterIp) {
			listener.enterIp(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitIp) {
			listener.exitIp(this);
		}
	}
}


export class OrgContext extends ParserRuleContext {
	public ORG(): TerminalNode { return this.getToken(basmParser.ORG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_org; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterOrg) {
			listener.enterOrg(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitOrg) {
			listener.exitOrg(this);
		}
	}
}


export class WordContext extends ParserRuleContext {
	public WORD(): TerminalNode { return this.getToken(basmParser.WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_word; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterWord) {
			listener.enterWord(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitWord) {
			listener.exitWord(this);
		}
	}
}


export class DupContext extends ParserRuleContext {
	public DUP(): TerminalNode { return this.getToken(basmParser.DUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_dup; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterDup) {
			listener.enterDup(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitDup) {
			listener.exitDup(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(basmParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return basmParser.RULE_end; }
	// @Override
	public enterRule(listener: basmListener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: basmListener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
}


