// Generated from c:\Coding\BasicComputerVSCodeSupport\bcomp-asm\grammar\basm.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class basmParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, ORG=11, WORD=12, END=13, DUP=14, AND=15, OR=16, ADD=17, ADC=18, 
		SUB=19, CMP=20, LOOP=21, LD=22, SWAM=23, JUMP=24, CALL=25, ST=26, NOP=27, 
		HLT=28, CLA=29, NOT=30, CLC=31, CMC=32, ROL=33, ROR=34, ASL=35, ASR=36, 
		SXTB=37, SWAB=38, INC=39, DEC=40, NEG=41, POP=42, POPF=43, RET=44, IRET=45, 
		PUSH=46, PUSHF=47, SWAP=48, BEQ=49, BNE=50, BMI=51, BPL=52, BCS=53, BCC=54, 
		BVS=55, BVC=56, BLT=57, BGE=58, BR=59, DI=60, EI=61, IN=62, OUT=63, INT=64, 
		SP=65, IP=66, NAME=67, DECIMAL=68, HEX=69, COMMENT=70, STRING=71, EOL=72, 
		WS=73;
	public static final int
		RULE_prog = 0, RULE_line = 1, RULE_instructionLine = 2, RULE_instruction = 3, 
		RULE_directive = 4, RULE_orgAddress = 5, RULE_wordDirective = 6, RULE_wordArguments = 7, 
		RULE_wordArgument = 8, RULE_dupArgument = 9, RULE_count = 10, RULE_lbl = 11, 
		RULE_label = 12, RULE_dev = 13, RULE_operand = 14, RULE_directAbsolute = 15, 
		RULE_indirect = 16, RULE_postIncrement = 17, RULE_preDecrement = 18, RULE_displacementSP = 19, 
		RULE_directRelative = 20, RULE_directLoad = 21, RULE_address = 22, RULE_string = 23, 
		RULE_name = 24, RULE_number = 25, RULE_comment = 26, RULE_addr = 27, RULE_nonaddr = 28, 
		RULE_branch = 29, RULE_io = 30, RULE_sp = 31, RULE_ip = 32, RULE_org = 33, 
		RULE_word = 34, RULE_dup = 35, RULE_end = 36;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "line", "instructionLine", "instruction", "directive", "orgAddress", 
			"wordDirective", "wordArguments", "wordArgument", "dupArgument", "count", 
			"lbl", "label", "dev", "operand", "directAbsolute", "indirect", "postIncrement", 
			"preDecrement", "displacementSP", "directRelative", "directLoad", "address", 
			"string", "name", "number", "comment", "addr", "nonaddr", "branch", "io", 
			"sp", "ip", "org", "word", "dup", "end"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "','", "'$'", "'?'", "'('", "')'", "':'", "'+'", "'-'", "'&'", 
			"'#'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "ORG", 
			"WORD", "END", "DUP", "AND", "OR", "ADD", "ADC", "SUB", "CMP", "LOOP", 
			"LD", "SWAM", "JUMP", "CALL", "ST", "NOP", "HLT", "CLA", "NOT", "CLC", 
			"CMC", "ROL", "ROR", "ASL", "ASR", "SXTB", "SWAB", "INC", "DEC", "NEG", 
			"POP", "POPF", "RET", "IRET", "PUSH", "PUSHF", "SWAP", "BEQ", "BNE", 
			"BMI", "BPL", "BCS", "BCC", "BVS", "BVC", "BLT", "BGE", "BR", "DI", "EI", 
			"IN", "OUT", "INT", "SP", "IP", "NAME", "DECIMAL", "HEX", "COMMENT", 
			"STRING", "EOL", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "basm.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public basmParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgContext extends ParserRuleContext {
		public List<TerminalNode> EOL() { return getTokens(basmParser.EOL); }
		public TerminalNode EOL(int i) {
			return getToken(basmParser.EOL, i);
		}
		public List<LineContext> line() {
			return getRuleContexts(LineContext.class);
		}
		public LineContext line(int i) {
			return getRuleContext(LineContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 11)) & ~0x3f) == 0 && ((1L << (_la - 11)) & ((1L << (ORG - 11)) | (1L << (WORD - 11)) | (1L << (END - 11)) | (1L << (AND - 11)) | (1L << (OR - 11)) | (1L << (ADD - 11)) | (1L << (ADC - 11)) | (1L << (SUB - 11)) | (1L << (CMP - 11)) | (1L << (LOOP - 11)) | (1L << (LD - 11)) | (1L << (SWAM - 11)) | (1L << (JUMP - 11)) | (1L << (CALL - 11)) | (1L << (ST - 11)) | (1L << (NOP - 11)) | (1L << (HLT - 11)) | (1L << (CLA - 11)) | (1L << (NOT - 11)) | (1L << (CLC - 11)) | (1L << (CMC - 11)) | (1L << (ROL - 11)) | (1L << (ROR - 11)) | (1L << (ASL - 11)) | (1L << (ASR - 11)) | (1L << (SXTB - 11)) | (1L << (SWAB - 11)) | (1L << (INC - 11)) | (1L << (DEC - 11)) | (1L << (NEG - 11)) | (1L << (POP - 11)) | (1L << (POPF - 11)) | (1L << (RET - 11)) | (1L << (IRET - 11)) | (1L << (PUSH - 11)) | (1L << (PUSHF - 11)) | (1L << (SWAP - 11)) | (1L << (BEQ - 11)) | (1L << (BNE - 11)) | (1L << (BMI - 11)) | (1L << (BPL - 11)) | (1L << (BCS - 11)) | (1L << (BCC - 11)) | (1L << (BVS - 11)) | (1L << (BVC - 11)) | (1L << (BLT - 11)) | (1L << (BGE - 11)) | (1L << (BR - 11)) | (1L << (DI - 11)) | (1L << (EI - 11)) | (1L << (IN - 11)) | (1L << (OUT - 11)) | (1L << (INT - 11)) | (1L << (NAME - 11)) | (1L << (COMMENT - 11)) | (1L << (EOL - 11)))) != 0)) {
				{
				{
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 11)) & ~0x3f) == 0 && ((1L << (_la - 11)) & ((1L << (ORG - 11)) | (1L << (WORD - 11)) | (1L << (END - 11)) | (1L << (AND - 11)) | (1L << (OR - 11)) | (1L << (ADD - 11)) | (1L << (ADC - 11)) | (1L << (SUB - 11)) | (1L << (CMP - 11)) | (1L << (LOOP - 11)) | (1L << (LD - 11)) | (1L << (SWAM - 11)) | (1L << (JUMP - 11)) | (1L << (CALL - 11)) | (1L << (ST - 11)) | (1L << (NOP - 11)) | (1L << (HLT - 11)) | (1L << (CLA - 11)) | (1L << (NOT - 11)) | (1L << (CLC - 11)) | (1L << (CMC - 11)) | (1L << (ROL - 11)) | (1L << (ROR - 11)) | (1L << (ASL - 11)) | (1L << (ASR - 11)) | (1L << (SXTB - 11)) | (1L << (SWAB - 11)) | (1L << (INC - 11)) | (1L << (DEC - 11)) | (1L << (NEG - 11)) | (1L << (POP - 11)) | (1L << (POPF - 11)) | (1L << (RET - 11)) | (1L << (IRET - 11)) | (1L << (PUSH - 11)) | (1L << (PUSHF - 11)) | (1L << (SWAP - 11)) | (1L << (BEQ - 11)) | (1L << (BNE - 11)) | (1L << (BMI - 11)) | (1L << (BPL - 11)) | (1L << (BCS - 11)) | (1L << (BCC - 11)) | (1L << (BVS - 11)) | (1L << (BVC - 11)) | (1L << (BLT - 11)) | (1L << (BGE - 11)) | (1L << (BR - 11)) | (1L << (DI - 11)) | (1L << (EI - 11)) | (1L << (IN - 11)) | (1L << (OUT - 11)) | (1L << (INT - 11)) | (1L << (NAME - 11)) | (1L << (COMMENT - 11)))) != 0)) {
					{
					setState(74);
					line();
					}
				}

				setState(77);
				match(EOL);
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LineContext extends ParserRuleContext {
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public InstructionLineContext instructionLine() {
			return getRuleContext(InstructionLineContext.class,0);
		}
		public DirectiveContext directive() {
			return getRuleContext(DirectiveContext.class,0);
		}
		public LblContext lbl() {
			return getRuleContext(LblContext.class,0);
		}
		public LineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_line; }
	}

	public final LineContext line() throws RecognitionException {
		LineContext _localctx = new LineContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_line);
		try {
			setState(87);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(83);
				comment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(84);
				instructionLine();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(85);
				directive();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(86);
				lbl();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstructionLineContext extends ParserRuleContext {
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public LblContext lbl() {
			return getRuleContext(LblContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public InstructionLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instructionLine; }
	}

	public final InstructionLineContext instructionLine() throws RecognitionException {
		InstructionLineContext _localctx = new InstructionLineContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_instructionLine);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NAME) {
				{
				setState(89);
				lbl();
				}
			}

			setState(92);
			instruction();
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMENT) {
				{
				setState(93);
				comment();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstructionContext extends ParserRuleContext {
		public AddrContext addr() {
			return getRuleContext(AddrContext.class,0);
		}
		public OperandContext operand() {
			return getRuleContext(OperandContext.class,0);
		}
		public NonaddrContext nonaddr() {
			return getRuleContext(NonaddrContext.class,0);
		}
		public BranchContext branch() {
			return getRuleContext(BranchContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public IoContext io() {
			return getRuleContext(IoContext.class,0);
		}
		public DevContext dev() {
			return getRuleContext(DevContext.class,0);
		}
		public InstructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruction; }
	}

	public final InstructionContext instruction() throws RecognitionException {
		InstructionContext _localctx = new InstructionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_instruction);
		try {
			setState(106);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AND:
			case OR:
			case ADD:
			case ADC:
			case SUB:
			case CMP:
			case LOOP:
			case LD:
			case SWAM:
			case JUMP:
			case CALL:
			case ST:
				enterOuterAlt(_localctx, 1);
				{
				setState(96);
				addr();
				setState(97);
				operand();
				}
				break;
			case NOP:
			case HLT:
			case CLA:
			case NOT:
			case CLC:
			case CMC:
			case ROL:
			case ROR:
			case ASL:
			case ASR:
			case SXTB:
			case SWAB:
			case INC:
			case DEC:
			case NEG:
			case POP:
			case POPF:
			case RET:
			case IRET:
			case PUSH:
			case PUSHF:
			case SWAP:
			case DI:
			case EI:
				enterOuterAlt(_localctx, 2);
				{
				setState(99);
				nonaddr();
				}
				break;
			case BEQ:
			case BNE:
			case BMI:
			case BPL:
			case BCS:
			case BCC:
			case BVS:
			case BVC:
			case BLT:
			case BGE:
			case BR:
				enterOuterAlt(_localctx, 3);
				{
				setState(100);
				branch();
				setState(101);
				label();
				}
				break;
			case IN:
			case OUT:
			case INT:
				enterOuterAlt(_localctx, 4);
				{
				setState(103);
				io();
				setState(104);
				dev();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DirectiveContext extends ParserRuleContext {
		public OrgContext org() {
			return getRuleContext(OrgContext.class,0);
		}
		public OrgAddressContext orgAddress() {
			return getRuleContext(OrgAddressContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public WordDirectiveContext wordDirective() {
			return getRuleContext(WordDirectiveContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public DirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directive; }
	}

	public final DirectiveContext directive() throws RecognitionException {
		DirectiveContext _localctx = new DirectiveContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_directive);
		int _la;
		try {
			setState(118);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ORG:
				enterOuterAlt(_localctx, 1);
				{
				setState(108);
				org();
				setState(109);
				orgAddress();
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMENT) {
					{
					setState(110);
					comment();
					}
				}

				}
				break;
			case WORD:
			case NAME:
				enterOuterAlt(_localctx, 2);
				{
				setState(113);
				wordDirective();
				}
				break;
			case END:
				enterOuterAlt(_localctx, 3);
				{
				setState(114);
				end();
				setState(116);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMENT) {
					{
					setState(115);
					comment();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrgAddressContext extends ParserRuleContext {
		public AddressContext address() {
			return getRuleContext(AddressContext.class,0);
		}
		public OrgAddressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orgAddress; }
	}

	public final OrgAddressContext orgAddress() throws RecognitionException {
		OrgAddressContext _localctx = new OrgAddressContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_orgAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			address();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WordDirectiveContext extends ParserRuleContext {
		public WordContext word() {
			return getRuleContext(WordContext.class,0);
		}
		public WordArgumentsContext wordArguments() {
			return getRuleContext(WordArgumentsContext.class,0);
		}
		public LblContext lbl() {
			return getRuleContext(LblContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public WordDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wordDirective; }
	}

	public final WordDirectiveContext wordDirective() throws RecognitionException {
		WordDirectiveContext _localctx = new WordDirectiveContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_wordDirective);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NAME) {
				{
				setState(122);
				lbl();
				}
			}

			setState(125);
			word();
			setState(126);
			wordArguments();
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMENT) {
				{
				setState(127);
				comment();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WordArgumentsContext extends ParserRuleContext {
		public List<WordArgumentContext> wordArgument() {
			return getRuleContexts(WordArgumentContext.class);
		}
		public WordArgumentContext wordArgument(int i) {
			return getRuleContext(WordArgumentContext.class,i);
		}
		public WordArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wordArguments; }
	}

	public final WordArgumentsContext wordArguments() throws RecognitionException {
		WordArgumentsContext _localctx = new WordArgumentsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_wordArguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			wordArgument();
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(131);
				match(T__0);
				setState(132);
				wordArgument();
				}
				}
				setState(137);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WordArgumentContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public DupArgumentContext dupArgument() {
			return getRuleContext(DupArgumentContext.class,0);
		}
		public WordArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wordArgument; }
	}

	public final WordArgumentContext wordArgument() throws RecognitionException {
		WordArgumentContext _localctx = new WordArgumentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_wordArgument);
		try {
			setState(143);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(138);
				number();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(139);
				match(T__1);
				setState(140);
				label();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(141);
				dupArgument();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(142);
				match(T__2);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DupArgumentContext extends ParserRuleContext {
		public CountContext count() {
			return getRuleContext(CountContext.class,0);
		}
		public DupContext dup() {
			return getRuleContext(DupContext.class,0);
		}
		public WordArgumentContext wordArgument() {
			return getRuleContext(WordArgumentContext.class,0);
		}
		public DupArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dupArgument; }
	}

	public final DupArgumentContext dupArgument() throws RecognitionException {
		DupArgumentContext _localctx = new DupArgumentContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_dupArgument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			count();
			setState(146);
			dup();
			setState(147);
			match(T__3);
			setState(148);
			wordArgument();
			setState(149);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CountContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public CountContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_count; }
	}

	public final CountContext count() throws RecognitionException {
		CountContext _localctx = new CountContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_count);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LblContext extends ParserRuleContext {
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public LblContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lbl; }
	}

	public final LblContext lbl() throws RecognitionException {
		LblContext _localctx = new LblContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_lbl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			label();
			setState(154);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabelContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public LabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label; }
	}

	public final LabelContext label() throws RecognitionException {
		LabelContext _localctx = new LabelContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			name();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DevContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public DevContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dev; }
	}

	public final DevContext dev() throws RecognitionException {
		DevContext _localctx = new DevContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_dev);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperandContext extends ParserRuleContext {
		public DirectAbsoluteContext directAbsolute() {
			return getRuleContext(DirectAbsoluteContext.class,0);
		}
		public IndirectContext indirect() {
			return getRuleContext(IndirectContext.class,0);
		}
		public PostIncrementContext postIncrement() {
			return getRuleContext(PostIncrementContext.class,0);
		}
		public PreDecrementContext preDecrement() {
			return getRuleContext(PreDecrementContext.class,0);
		}
		public DisplacementSPContext displacementSP() {
			return getRuleContext(DisplacementSPContext.class,0);
		}
		public DirectRelativeContext directRelative() {
			return getRuleContext(DirectRelativeContext.class,0);
		}
		public DirectLoadContext directLoad() {
			return getRuleContext(DirectLoadContext.class,0);
		}
		public OperandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operand; }
	}

	public final OperandContext operand() throws RecognitionException {
		OperandContext _localctx = new OperandContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_operand);
		try {
			setState(167);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(160);
				directAbsolute();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(161);
				indirect();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(162);
				postIncrement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(163);
				preDecrement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(164);
				displacementSP();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(165);
				directRelative();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(166);
				directLoad();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DirectAbsoluteContext extends ParserRuleContext {
		public AddressContext address() {
			return getRuleContext(AddressContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public DirectAbsoluteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directAbsolute; }
	}

	public final DirectAbsoluteContext directAbsolute() throws RecognitionException {
		DirectAbsoluteContext _localctx = new DirectAbsoluteContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_directAbsolute);
		try {
			setState(172);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL:
			case HEX:
				enterOuterAlt(_localctx, 1);
				{
				setState(169);
				address();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(170);
				match(T__1);
				setState(171);
				label();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndirectContext extends ParserRuleContext {
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public IndirectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indirect; }
	}

	public final IndirectContext indirect() throws RecognitionException {
		IndirectContext _localctx = new IndirectContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_indirect);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			match(T__3);
			setState(175);
			label();
			setState(176);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostIncrementContext extends ParserRuleContext {
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public PostIncrementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postIncrement; }
	}

	public final PostIncrementContext postIncrement() throws RecognitionException {
		PostIncrementContext _localctx = new PostIncrementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_postIncrement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(T__3);
			setState(179);
			label();
			setState(180);
			match(T__4);
			setState(181);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PreDecrementContext extends ParserRuleContext {
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public PreDecrementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_preDecrement; }
	}

	public final PreDecrementContext preDecrement() throws RecognitionException {
		PreDecrementContext _localctx = new PreDecrementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_preDecrement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(T__7);
			setState(184);
			match(T__3);
			setState(185);
			label();
			setState(186);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DisplacementSPContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public SpContext sp() {
			return getRuleContext(SpContext.class,0);
		}
		public DisplacementSPContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_displacementSP; }
	}

	public final DisplacementSPContext displacementSP() throws RecognitionException {
		DisplacementSPContext _localctx = new DisplacementSPContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_displacementSP);
		try {
			setState(196);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				enterOuterAlt(_localctx, 1);
				{
				setState(188);
				match(T__8);
				setState(189);
				number();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(190);
				match(T__3);
				setState(191);
				sp();
				setState(192);
				match(T__6);
				setState(193);
				number();
				setState(194);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DirectRelativeContext extends ParserRuleContext {
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public DirectRelativeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directRelative; }
	}

	public final DirectRelativeContext directRelative() throws RecognitionException {
		DirectRelativeContext _localctx = new DirectRelativeContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_directRelative);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			label();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DirectLoadContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public DirectLoadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directLoad; }
	}

	public final DirectLoadContext directLoad() throws RecognitionException {
		DirectLoadContext _localctx = new DirectLoadContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_directLoad);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			match(T__9);
			setState(201);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddressContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public AddressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_address; }
	}

	public final AddressContext address() throws RecognitionException {
		AddressContext _localctx = new AddressContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_address);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(basmParser.STRING, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(basmParser.NAME, 0); }
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			match(NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode DECIMAL() { return getToken(basmParser.DECIMAL, 0); }
		public TerminalNode HEX() { return getToken(basmParser.HEX, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			_la = _input.LA(1);
			if ( !(_la==DECIMAL || _la==HEX) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentContext extends ParserRuleContext {
		public TerminalNode COMMENT() { return getToken(basmParser.COMMENT, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_comment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(COMMENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddrContext extends ParserRuleContext {
		public TerminalNode AND() { return getToken(basmParser.AND, 0); }
		public TerminalNode OR() { return getToken(basmParser.OR, 0); }
		public TerminalNode ADD() { return getToken(basmParser.ADD, 0); }
		public TerminalNode ADC() { return getToken(basmParser.ADC, 0); }
		public TerminalNode SUB() { return getToken(basmParser.SUB, 0); }
		public TerminalNode CMP() { return getToken(basmParser.CMP, 0); }
		public TerminalNode LOOP() { return getToken(basmParser.LOOP, 0); }
		public TerminalNode LD() { return getToken(basmParser.LD, 0); }
		public TerminalNode SWAM() { return getToken(basmParser.SWAM, 0); }
		public TerminalNode JUMP() { return getToken(basmParser.JUMP, 0); }
		public TerminalNode CALL() { return getToken(basmParser.CALL, 0); }
		public TerminalNode ST() { return getToken(basmParser.ST, 0); }
		public AddrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addr; }
	}

	public final AddrContext addr() throws RecognitionException {
		AddrContext _localctx = new AddrContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_addr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AND) | (1L << OR) | (1L << ADD) | (1L << ADC) | (1L << SUB) | (1L << CMP) | (1L << LOOP) | (1L << LD) | (1L << SWAM) | (1L << JUMP) | (1L << CALL) | (1L << ST))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonaddrContext extends ParserRuleContext {
		public TerminalNode NOP() { return getToken(basmParser.NOP, 0); }
		public TerminalNode HLT() { return getToken(basmParser.HLT, 0); }
		public TerminalNode CLA() { return getToken(basmParser.CLA, 0); }
		public TerminalNode NOT() { return getToken(basmParser.NOT, 0); }
		public TerminalNode CLC() { return getToken(basmParser.CLC, 0); }
		public TerminalNode CMC() { return getToken(basmParser.CMC, 0); }
		public TerminalNode ROL() { return getToken(basmParser.ROL, 0); }
		public TerminalNode ROR() { return getToken(basmParser.ROR, 0); }
		public TerminalNode ASL() { return getToken(basmParser.ASL, 0); }
		public TerminalNode ASR() { return getToken(basmParser.ASR, 0); }
		public TerminalNode SXTB() { return getToken(basmParser.SXTB, 0); }
		public TerminalNode SWAB() { return getToken(basmParser.SWAB, 0); }
		public TerminalNode INC() { return getToken(basmParser.INC, 0); }
		public TerminalNode DEC() { return getToken(basmParser.DEC, 0); }
		public TerminalNode NEG() { return getToken(basmParser.NEG, 0); }
		public TerminalNode POP() { return getToken(basmParser.POP, 0); }
		public TerminalNode POPF() { return getToken(basmParser.POPF, 0); }
		public TerminalNode RET() { return getToken(basmParser.RET, 0); }
		public TerminalNode IRET() { return getToken(basmParser.IRET, 0); }
		public TerminalNode PUSH() { return getToken(basmParser.PUSH, 0); }
		public TerminalNode PUSHF() { return getToken(basmParser.PUSHF, 0); }
		public TerminalNode SWAP() { return getToken(basmParser.SWAP, 0); }
		public TerminalNode EI() { return getToken(basmParser.EI, 0); }
		public TerminalNode DI() { return getToken(basmParser.DI, 0); }
		public NonaddrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonaddr; }
	}

	public final NonaddrContext nonaddr() throws RecognitionException {
		NonaddrContext _localctx = new NonaddrContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_nonaddr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOP) | (1L << HLT) | (1L << CLA) | (1L << NOT) | (1L << CLC) | (1L << CMC) | (1L << ROL) | (1L << ROR) | (1L << ASL) | (1L << ASR) | (1L << SXTB) | (1L << SWAB) | (1L << INC) | (1L << DEC) | (1L << NEG) | (1L << POP) | (1L << POPF) | (1L << RET) | (1L << IRET) | (1L << PUSH) | (1L << PUSHF) | (1L << SWAP) | (1L << DI) | (1L << EI))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BranchContext extends ParserRuleContext {
		public TerminalNode BEQ() { return getToken(basmParser.BEQ, 0); }
		public TerminalNode BNE() { return getToken(basmParser.BNE, 0); }
		public TerminalNode BMI() { return getToken(basmParser.BMI, 0); }
		public TerminalNode BPL() { return getToken(basmParser.BPL, 0); }
		public TerminalNode BCS() { return getToken(basmParser.BCS, 0); }
		public TerminalNode BCC() { return getToken(basmParser.BCC, 0); }
		public TerminalNode BVS() { return getToken(basmParser.BVS, 0); }
		public TerminalNode BVC() { return getToken(basmParser.BVC, 0); }
		public TerminalNode BLT() { return getToken(basmParser.BLT, 0); }
		public TerminalNode BGE() { return getToken(basmParser.BGE, 0); }
		public TerminalNode BR() { return getToken(basmParser.BR, 0); }
		public BranchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_branch; }
	}

	public final BranchContext branch() throws RecognitionException {
		BranchContext _localctx = new BranchContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_branch);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(217);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BEQ) | (1L << BNE) | (1L << BMI) | (1L << BPL) | (1L << BCS) | (1L << BCC) | (1L << BVS) | (1L << BVC) | (1L << BLT) | (1L << BGE) | (1L << BR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IoContext extends ParserRuleContext {
		public TerminalNode IN() { return getToken(basmParser.IN, 0); }
		public TerminalNode OUT() { return getToken(basmParser.OUT, 0); }
		public TerminalNode INT() { return getToken(basmParser.INT, 0); }
		public IoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_io; }
	}

	public final IoContext io() throws RecognitionException {
		IoContext _localctx = new IoContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_io);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			_la = _input.LA(1);
			if ( !(((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & ((1L << (IN - 62)) | (1L << (OUT - 62)) | (1L << (INT - 62)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SpContext extends ParserRuleContext {
		public TerminalNode SP() { return getToken(basmParser.SP, 0); }
		public SpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sp; }
	}

	public final SpContext sp() throws RecognitionException {
		SpContext _localctx = new SpContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_sp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(SP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IpContext extends ParserRuleContext {
		public TerminalNode IP() { return getToken(basmParser.IP, 0); }
		public IpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ip; }
	}

	public final IpContext ip() throws RecognitionException {
		IpContext _localctx = new IpContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_ip);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(IP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrgContext extends ParserRuleContext {
		public TerminalNode ORG() { return getToken(basmParser.ORG, 0); }
		public OrgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_org; }
	}

	public final OrgContext org() throws RecognitionException {
		OrgContext _localctx = new OrgContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_org);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			match(ORG);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WordContext extends ParserRuleContext {
		public TerminalNode WORD() { return getToken(basmParser.WORD, 0); }
		public WordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_word; }
	}

	public final WordContext word() throws RecognitionException {
		WordContext _localctx = new WordContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_word);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			match(WORD);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DupContext extends ParserRuleContext {
		public TerminalNode DUP() { return getToken(basmParser.DUP, 0); }
		public DupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dup; }
	}

	public final DupContext dup() throws RecognitionException {
		DupContext _localctx = new DupContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_dup);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(DUP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EndContext extends ParserRuleContext {
		public TerminalNode END() { return getToken(basmParser.END, 0); }
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_end);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(231);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3K\u00ec\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\3\2\5\2N\n\2\3\2\7\2Q\n\2\f\2\16\2"+
		"T\13\2\3\3\3\3\3\3\3\3\5\3Z\n\3\3\4\5\4]\n\4\3\4\3\4\5\4a\n\4\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5m\n\5\3\6\3\6\3\6\5\6r\n\6\3\6\3\6"+
		"\3\6\5\6w\n\6\5\6y\n\6\3\7\3\7\3\b\5\b~\n\b\3\b\3\b\3\b\5\b\u0083\n\b"+
		"\3\t\3\t\3\t\7\t\u0088\n\t\f\t\16\t\u008b\13\t\3\n\3\n\3\n\3\n\3\n\5\n"+
		"\u0092\n\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\16\3\16"+
		"\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u00aa\n\20\3\21\3\21"+
		"\3\21\5\21\u00af\n\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\24"+
		"\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\5\25\u00c7"+
		"\n\25\3\26\3\26\3\27\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33"+
		"\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$"+
		"\3$\3%\3%\3&\3&\3&\2\2\'\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&("+
		"*,.\60\62\64\668:<>@BDFHJ\2\7\3\2FG\3\2\21\34\4\2\35\62>?\3\2\63=\3\2"+
		"@B\2\u00e2\2R\3\2\2\2\4Y\3\2\2\2\6\\\3\2\2\2\bl\3\2\2\2\nx\3\2\2\2\fz"+
		"\3\2\2\2\16}\3\2\2\2\20\u0084\3\2\2\2\22\u0091\3\2\2\2\24\u0093\3\2\2"+
		"\2\26\u0099\3\2\2\2\30\u009b\3\2\2\2\32\u009e\3\2\2\2\34\u00a0\3\2\2\2"+
		"\36\u00a9\3\2\2\2 \u00ae\3\2\2\2\"\u00b0\3\2\2\2$\u00b4\3\2\2\2&\u00b9"+
		"\3\2\2\2(\u00c6\3\2\2\2*\u00c8\3\2\2\2,\u00ca\3\2\2\2.\u00cd\3\2\2\2\60"+
		"\u00cf\3\2\2\2\62\u00d1\3\2\2\2\64\u00d3\3\2\2\2\66\u00d5\3\2\2\28\u00d7"+
		"\3\2\2\2:\u00d9\3\2\2\2<\u00db\3\2\2\2>\u00dd\3\2\2\2@\u00df\3\2\2\2B"+
		"\u00e1\3\2\2\2D\u00e3\3\2\2\2F\u00e5\3\2\2\2H\u00e7\3\2\2\2J\u00e9\3\2"+
		"\2\2LN\5\4\3\2ML\3\2\2\2MN\3\2\2\2NO\3\2\2\2OQ\7J\2\2PM\3\2\2\2QT\3\2"+
		"\2\2RP\3\2\2\2RS\3\2\2\2S\3\3\2\2\2TR\3\2\2\2UZ\5\66\34\2VZ\5\6\4\2WZ"+
		"\5\n\6\2XZ\5\30\r\2YU\3\2\2\2YV\3\2\2\2YW\3\2\2\2YX\3\2\2\2Z\5\3\2\2\2"+
		"[]\5\30\r\2\\[\3\2\2\2\\]\3\2\2\2]^\3\2\2\2^`\5\b\5\2_a\5\66\34\2`_\3"+
		"\2\2\2`a\3\2\2\2a\7\3\2\2\2bc\58\35\2cd\5\36\20\2dm\3\2\2\2em\5:\36\2"+
		"fg\5<\37\2gh\5\32\16\2hm\3\2\2\2ij\5> \2jk\5\34\17\2km\3\2\2\2lb\3\2\2"+
		"\2le\3\2\2\2lf\3\2\2\2li\3\2\2\2m\t\3\2\2\2no\5D#\2oq\5\f\7\2pr\5\66\34"+
		"\2qp\3\2\2\2qr\3\2\2\2ry\3\2\2\2sy\5\16\b\2tv\5J&\2uw\5\66\34\2vu\3\2"+
		"\2\2vw\3\2\2\2wy\3\2\2\2xn\3\2\2\2xs\3\2\2\2xt\3\2\2\2y\13\3\2\2\2z{\5"+
		".\30\2{\r\3\2\2\2|~\5\30\r\2}|\3\2\2\2}~\3\2\2\2~\177\3\2\2\2\177\u0080"+
		"\5F$\2\u0080\u0082\5\20\t\2\u0081\u0083\5\66\34\2\u0082\u0081\3\2\2\2"+
		"\u0082\u0083\3\2\2\2\u0083\17\3\2\2\2\u0084\u0089\5\22\n\2\u0085\u0086"+
		"\7\3\2\2\u0086\u0088\5\22\n\2\u0087\u0085\3\2\2\2\u0088\u008b\3\2\2\2"+
		"\u0089\u0087\3\2\2\2\u0089\u008a\3\2\2\2\u008a\21\3\2\2\2\u008b\u0089"+
		"\3\2\2\2\u008c\u0092\5\64\33\2\u008d\u008e\7\4\2\2\u008e\u0092\5\32\16"+
		"\2\u008f\u0092\5\24\13\2\u0090\u0092\7\5\2\2\u0091\u008c\3\2\2\2\u0091"+
		"\u008d\3\2\2\2\u0091\u008f\3\2\2\2\u0091\u0090\3\2\2\2\u0092\23\3\2\2"+
		"\2\u0093\u0094\5\26\f\2\u0094\u0095\5H%\2\u0095\u0096\7\6\2\2\u0096\u0097"+
		"\5\22\n\2\u0097\u0098\7\7\2\2\u0098\25\3\2\2\2\u0099\u009a\5\64\33\2\u009a"+
		"\27\3\2\2\2\u009b\u009c\5\32\16\2\u009c\u009d\7\b\2\2\u009d\31\3\2\2\2"+
		"\u009e\u009f\5\62\32\2\u009f\33\3\2\2\2\u00a0\u00a1\5\64\33\2\u00a1\35"+
		"\3\2\2\2\u00a2\u00aa\5 \21\2\u00a3\u00aa\5\"\22\2\u00a4\u00aa\5$\23\2"+
		"\u00a5\u00aa\5&\24\2\u00a6\u00aa\5(\25\2\u00a7\u00aa\5*\26\2\u00a8\u00aa"+
		"\5,\27\2\u00a9\u00a2\3\2\2\2\u00a9\u00a3\3\2\2\2\u00a9\u00a4\3\2\2\2\u00a9"+
		"\u00a5\3\2\2\2\u00a9\u00a6\3\2\2\2\u00a9\u00a7\3\2\2\2\u00a9\u00a8\3\2"+
		"\2\2\u00aa\37\3\2\2\2\u00ab\u00af\5.\30\2\u00ac\u00ad\7\4\2\2\u00ad\u00af"+
		"\5\32\16\2\u00ae\u00ab\3\2\2\2\u00ae\u00ac\3\2\2\2\u00af!\3\2\2\2\u00b0"+
		"\u00b1\7\6\2\2\u00b1\u00b2\5\32\16\2\u00b2\u00b3\7\7\2\2\u00b3#\3\2\2"+
		"\2\u00b4\u00b5\7\6\2\2\u00b5\u00b6\5\32\16\2\u00b6\u00b7\7\7\2\2\u00b7"+
		"\u00b8\7\t\2\2\u00b8%\3\2\2\2\u00b9\u00ba\7\n\2\2\u00ba\u00bb\7\6\2\2"+
		"\u00bb\u00bc\5\32\16\2\u00bc\u00bd\7\7\2\2\u00bd\'\3\2\2\2\u00be\u00bf"+
		"\7\13\2\2\u00bf\u00c7\5\64\33\2\u00c0\u00c1\7\6\2\2\u00c1\u00c2\5@!\2"+
		"\u00c2\u00c3\7\t\2\2\u00c3\u00c4\5\64\33\2\u00c4\u00c5\7\7\2\2\u00c5\u00c7"+
		"\3\2\2\2\u00c6\u00be\3\2\2\2\u00c6\u00c0\3\2\2\2\u00c7)\3\2\2\2\u00c8"+
		"\u00c9\5\32\16\2\u00c9+\3\2\2\2\u00ca\u00cb\7\f\2\2\u00cb\u00cc\5\64\33"+
		"\2\u00cc-\3\2\2\2\u00cd\u00ce\5\64\33\2\u00ce/\3\2\2\2\u00cf\u00d0\7I"+
		"\2\2\u00d0\61\3\2\2\2\u00d1\u00d2\7E\2\2\u00d2\63\3\2\2\2\u00d3\u00d4"+
		"\t\2\2\2\u00d4\65\3\2\2\2\u00d5\u00d6\7H\2\2\u00d6\67\3\2\2\2\u00d7\u00d8"+
		"\t\3\2\2\u00d89\3\2\2\2\u00d9\u00da\t\4\2\2\u00da;\3\2\2\2\u00db\u00dc"+
		"\t\5\2\2\u00dc=\3\2\2\2\u00dd\u00de\t\6\2\2\u00de?\3\2\2\2\u00df\u00e0"+
		"\7C\2\2\u00e0A\3\2\2\2\u00e1\u00e2\7D\2\2\u00e2C\3\2\2\2\u00e3\u00e4\7"+
		"\r\2\2\u00e4E\3\2\2\2\u00e5\u00e6\7\16\2\2\u00e6G\3\2\2\2\u00e7\u00e8"+
		"\7\20\2\2\u00e8I\3\2\2\2\u00e9\u00ea\7\17\2\2\u00eaK\3\2\2\2\22MRY\\`"+
		"lqvx}\u0082\u0089\u0091\u00a9\u00ae\u00c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}