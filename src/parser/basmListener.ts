// Generated from grammar/basm.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./basmParser";
import { LineContext } from "./basmParser";
import { InstructionLineContext } from "./basmParser";
import { InstructionContext } from "./basmParser";
import { DirectiveContext } from "./basmParser";
import { OrgAddressContext } from "./basmParser";
import { WordDirectiveContext } from "./basmParser";
import { WordArgumentsContext } from "./basmParser";
import { WordArgumentContext } from "./basmParser";
import { DupArgumentContext } from "./basmParser";
import { CountContext } from "./basmParser";
import { LblContext } from "./basmParser";
import { LabelContext } from "./basmParser";
import { DevContext } from "./basmParser";
import { OperandContext } from "./basmParser";
import { DirectAbsoluteContext } from "./basmParser";
import { IndirectContext } from "./basmParser";
import { PostIncrementContext } from "./basmParser";
import { PreDecrementContext } from "./basmParser";
import { DisplacementSPContext } from "./basmParser";
import { DirectRelativeContext } from "./basmParser";
import { DirectLoadContext } from "./basmParser";
import { AddressContext } from "./basmParser";
import { StringContext } from "./basmParser";
import { NameContext } from "./basmParser";
import { NumberContext } from "./basmParser";
import { CommentContext } from "./basmParser";
import { AddrContext } from "./basmParser";
import { NonaddrContext } from "./basmParser";
import { BranchContext } from "./basmParser";
import { IoContext } from "./basmParser";
import { SpContext } from "./basmParser";
import { IpContext } from "./basmParser";
import { OrgContext } from "./basmParser";
import { WordContext } from "./basmParser";
import { DupContext } from "./basmParser";
import { EndContext } from "./basmParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `basmParser`.
 */
export interface basmListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `basmParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.instructionLine`.
	 * @param ctx the parse tree
	 */
	enterInstructionLine?: (ctx: InstructionLineContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.instructionLine`.
	 * @param ctx the parse tree
	 */
	exitInstructionLine?: (ctx: InstructionLineContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.orgAddress`.
	 * @param ctx the parse tree
	 */
	enterOrgAddress?: (ctx: OrgAddressContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.orgAddress`.
	 * @param ctx the parse tree
	 */
	exitOrgAddress?: (ctx: OrgAddressContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.wordDirective`.
	 * @param ctx the parse tree
	 */
	enterWordDirective?: (ctx: WordDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.wordDirective`.
	 * @param ctx the parse tree
	 */
	exitWordDirective?: (ctx: WordDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.wordArguments`.
	 * @param ctx the parse tree
	 */
	enterWordArguments?: (ctx: WordArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.wordArguments`.
	 * @param ctx the parse tree
	 */
	exitWordArguments?: (ctx: WordArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.wordArgument`.
	 * @param ctx the parse tree
	 */
	enterWordArgument?: (ctx: WordArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.wordArgument`.
	 * @param ctx the parse tree
	 */
	exitWordArgument?: (ctx: WordArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.dupArgument`.
	 * @param ctx the parse tree
	 */
	enterDupArgument?: (ctx: DupArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.dupArgument`.
	 * @param ctx the parse tree
	 */
	exitDupArgument?: (ctx: DupArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.count`.
	 * @param ctx the parse tree
	 */
	enterCount?: (ctx: CountContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.count`.
	 * @param ctx the parse tree
	 */
	exitCount?: (ctx: CountContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.lbl`.
	 * @param ctx the parse tree
	 */
	enterLbl?: (ctx: LblContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.lbl`.
	 * @param ctx the parse tree
	 */
	exitLbl?: (ctx: LblContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.dev`.
	 * @param ctx the parse tree
	 */
	enterDev?: (ctx: DevContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.dev`.
	 * @param ctx the parse tree
	 */
	exitDev?: (ctx: DevContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.directAbsolute`.
	 * @param ctx the parse tree
	 */
	enterDirectAbsolute?: (ctx: DirectAbsoluteContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.directAbsolute`.
	 * @param ctx the parse tree
	 */
	exitDirectAbsolute?: (ctx: DirectAbsoluteContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.indirect`.
	 * @param ctx the parse tree
	 */
	enterIndirect?: (ctx: IndirectContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.indirect`.
	 * @param ctx the parse tree
	 */
	exitIndirect?: (ctx: IndirectContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.postIncrement`.
	 * @param ctx the parse tree
	 */
	enterPostIncrement?: (ctx: PostIncrementContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.postIncrement`.
	 * @param ctx the parse tree
	 */
	exitPostIncrement?: (ctx: PostIncrementContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.preDecrement`.
	 * @param ctx the parse tree
	 */
	enterPreDecrement?: (ctx: PreDecrementContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.preDecrement`.
	 * @param ctx the parse tree
	 */
	exitPreDecrement?: (ctx: PreDecrementContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.displacementSP`.
	 * @param ctx the parse tree
	 */
	enterDisplacementSP?: (ctx: DisplacementSPContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.displacementSP`.
	 * @param ctx the parse tree
	 */
	exitDisplacementSP?: (ctx: DisplacementSPContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.directRelative`.
	 * @param ctx the parse tree
	 */
	enterDirectRelative?: (ctx: DirectRelativeContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.directRelative`.
	 * @param ctx the parse tree
	 */
	exitDirectRelative?: (ctx: DirectRelativeContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.directLoad`.
	 * @param ctx the parse tree
	 */
	enterDirectLoad?: (ctx: DirectLoadContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.directLoad`.
	 * @param ctx the parse tree
	 */
	exitDirectLoad?: (ctx: DirectLoadContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.address`.
	 * @param ctx the parse tree
	 */
	enterAddress?: (ctx: AddressContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.address`.
	 * @param ctx the parse tree
	 */
	exitAddress?: (ctx: AddressContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.addr`.
	 * @param ctx the parse tree
	 */
	enterAddr?: (ctx: AddrContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.addr`.
	 * @param ctx the parse tree
	 */
	exitAddr?: (ctx: AddrContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.nonaddr`.
	 * @param ctx the parse tree
	 */
	enterNonaddr?: (ctx: NonaddrContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.nonaddr`.
	 * @param ctx the parse tree
	 */
	exitNonaddr?: (ctx: NonaddrContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.io`.
	 * @param ctx the parse tree
	 */
	enterIo?: (ctx: IoContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.io`.
	 * @param ctx the parse tree
	 */
	exitIo?: (ctx: IoContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.ip`.
	 * @param ctx the parse tree
	 */
	enterIp?: (ctx: IpContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.ip`.
	 * @param ctx the parse tree
	 */
	exitIp?: (ctx: IpContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.org`.
	 * @param ctx the parse tree
	 */
	enterOrg?: (ctx: OrgContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.org`.
	 * @param ctx the parse tree
	 */
	exitOrg?: (ctx: OrgContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.word`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.word`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.dup`.
	 * @param ctx the parse tree
	 */
	enterDup?: (ctx: DupContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.dup`.
	 * @param ctx the parse tree
	 */
	exitDup?: (ctx: DupContext) => void;

	/**
	 * Enter a parse tree produced by `basmParser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `basmParser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;
}

