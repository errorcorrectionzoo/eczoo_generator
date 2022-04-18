/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:03
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000051 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000050 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000048 */ import {_update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000047 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexSpecialsNode, ParsedMacroArgs, __all__, _unicode_from_str} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {LatexWalkerEndOfStream, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerTokenParseError, LatexEnvironmentNode, __all__, LatexWalkerEndOfStream, LatexDelimitedGroupParser, LatexCharsNode, LatexNode, LatexMathNode, LatexGroupNode, LatexSpecialsNode, LatexMacroNode, LatexParserBase, LatexWalkerNodesParseError, LatexWalkerParseError, ParsedMacroArgs, LatexNodeList, LatexCommentNode, _unicode_from_str, _update_posposend_from_nodelist};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._expression';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000059 */ export var _TryAgainWithSkippedCommentNodes =  __class__ ('_TryAgainWithSkippedCommentNodes', [Exception], {
/* 000059 */ 	__module__: __name__,
/* 000060 */ 	get __init__ () {return __get__ (this, function (self, skipped_comment_nodes, pos) {
/* 000060 */ 		if (arguments.length) {
/* 000060 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000060 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000060 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000060 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000060 */ 					switch (__attrib0__) {
/* 000060 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'skipped_comment_nodes': var skipped_comment_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 					}
/* 000060 */ 				}
/* 000060 */ 			}
/* 000060 */ 		}
/* 000060 */ 		else {
/* 000060 */ 		}
/* 000061 */ 		__call__ (__call__ (__super__, null, _TryAgainWithSkippedCommentNodes, '__init__'), null, self, '<internal>');
/* 000062 */ 		self.skipped_comment_nodes = skipped_comment_nodes;
/* 000063 */ 		self.pos = pos;
/* 000063 */ 	});}
/* 000063 */ });
/* 000067 */ export var LatexExpressionParser =  __class__ ('LatexExpressionParser', [LatexParserBase], {
/* 000067 */ 	__module__: __name__,
/* 000068 */ 	get __init__ () {return __get__ (this, function (self, include_skipped_comments, single_token_requiring_arg_is_error) {
/* 000068 */ 		if (typeof include_skipped_comments == 'undefined' || (include_skipped_comments != null && include_skipped_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var include_skipped_comments = true;
/* 000068 */ 		};
/* 000068 */ 		if (typeof single_token_requiring_arg_is_error == 'undefined' || (single_token_requiring_arg_is_error != null && single_token_requiring_arg_is_error.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var single_token_requiring_arg_is_error = true;
/* 000068 */ 		};
/* 000068 */ 		var kwargs = dict ();
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'include_skipped_comments': var include_skipped_comments = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'single_token_requiring_arg_is_error': var single_token_requiring_arg_is_error = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 				delete kwargs.__kwargtrans__;
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000073 */ 		__call__ (__call__ (__super__, null, LatexExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000074 */ 		self.include_skipped_comments = include_skipped_comments;
/* 000075 */ 		self.single_token_requiring_arg_is_error = single_token_requiring_arg_is_error;
/* 000075 */ 	});},
/* 000078 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000079 */ 		return false;
/* 000079 */ 	});},
/* 000082 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000082 */ 		var kwargs = dict ();
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 				delete kwargs.__kwargtrans__;
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000084 */ 		var expr_parsing_state = (function () {
/* 000084 */ 			var __accu0__ = parsing_state;
/* 000084 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_environments: false}));
/* 000084 */ 		}) ();
/* 000086 */ 		var exprnodes = [];
/* 000087 */ 		while (__t__ (true)) {
/* 000088 */ 			try {
/* 000090 */ 				var moreexprnodes = (function () {
/* 000090 */ 					var __accu0__ = self;
/* 000090 */ 					return __call__ (__accu0__._parse_single_token, __accu0__, latex_walker, token_reader, expr_parsing_state, __kwargtrans__ (__mergekwargtrans__ ({parsing_state: parsing_state}, kwargs)));
/* 000090 */ 				}) ();
/* 000090 */ 			}
/* 000090 */ 			catch (__except0__) {
/* 000090 */ 				if (isinstance (__except0__, _TryAgainWithSkippedCommentNodes)) {
/* 000090 */ 					var e = __except0__;
/* 000096 */ 					var exprnodes = __call__ (__iadd__, null, exprnodes, e.skipped_comment_nodes);
/* 000096 */ 					continue;
/* 000096 */ 				}
/* 000096 */ 				else {
/* 000096 */ 					throw __except0__;
/* 000096 */ 				}
/* 000096 */ 			}
/* 000099 */ 			var exprnodes = __call__ (__iadd__, null, exprnodes, moreexprnodes);
/* 000101 */ 			if (__t__ (!__t__ ((exprnodes)))) {
/* 000105 */ 				var thenodelist = __call__ (LatexNodeList, null, [], __kwargtrans__ ({pos: (function () {
/* 000105 */ 					var __accu0__ = token_reader;
/* 000105 */ 					return __call__ (__accu0__.cur_pos, __accu0__);
/* 000106 */ 				}) (), pos_end: (function () {
/* 000106 */ 					var __accu0__ = token_reader;
/* 000106 */ 					return __call__ (__accu0__.cur_pos, __accu0__);
/* 000106 */ 				}) ()}));
/* 000106 */ 			}
/* 000108 */ 			else if (__t__ (__eq__ (__call__ (len, null, exprnodes), 1))) {
/* 000109 */ 				var thenodelist = __getitem__ (exprnodes, 0);
/* 000109 */ 			}
/* 000110 */ 			else {
/* 000112 */ 				var expr_nodelist = __call__ (LatexNodeList, null, exprnodes);
/* 000116 */ 				var thenodelist = (function () {
/* 000116 */ 					var __accu0__ = latex_walker;
/* 000116 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, nodelist: expr_nodelist, delimiters: tuple (['', '']), pos: expr_nodelist.pos, pos_end: expr_nodelist.pos_end}));
/* 000116 */ 				}) ();
/* 000116 */ 			}
/* 000125 */ 			// pass;
/* 000129 */ 			return tuple ([thenodelist, null]);
/* 000129 */ 		}
/* 000129 */ 	});},
/* 000132 */ 	get _parse_single_token () {return __get__ (this, function (self, latex_walker, token_reader, expr_parsing_state, parsing_state) {
/* 000132 */ 		var kwargs = dict ();
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'expr_parsing_state': var expr_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 				delete kwargs.__kwargtrans__;
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000135 */ 		try {
/* 000136 */ 			var tok = (function () {
/* 000136 */ 				var __accu0__ = token_reader;
/* 000136 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: expr_parsing_state}));
/* 000136 */ 			}) ();
/* 000136 */ 		}
/* 000136 */ 		catch (__except0__) {
/* 000136 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000136 */ 				var e = __except0__;
/* 000138 */ 				var exc = (function () {
/* 000138 */ 					var __accu0__ = latex_walker;
/* 000138 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000138 */ 				}) ();
/* 000139 */ 				if (__t__ (exc !== null)) {
/* 000140 */ 					var __except1__ = exc;
/* 000140 */ 					__except1__.__cause__ = null;
/* 000140 */ 					throw __except1__;
/* 000140 */ 				}
/* 000147 */ 				var tok = exc.recovery_token_placeholder;
/* 000148 */ 				(function () {
/* 000148 */ 					var __accu0__ = token_reader;
/* 000148 */ 					return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000148 */ 				}) ();
/* 000148 */ 			}
/* 000148 */ 			else if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000148 */ 				var e = __except0__;
/* 000150 */ 				var exc = (function () {
/* 000150 */ 					var __accu0__ = latex_walker;
/* 000153 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'End of input encountered but we expected an expression', __kwargtrans__ ({pos: (function () {
/* 000153 */ 						var __accu1__ = token_reader;
/* 000153 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000153 */ 					}) ()})));
/* 000153 */ 				}) ();
/* 000156 */ 				if (__t__ (exc !== null)) {
/* 000157 */ 					var __except1__ = exc;
/* 000157 */ 					__except1__.__cause__ = null;
/* 000157 */ 					throw __except1__;
/* 000157 */ 				}
/* 000158 */ 				return [];
/* 000158 */ 			}
/* 000158 */ 			else {
/* 000158 */ 				throw __except0__;
/* 000158 */ 			}
/* 000158 */ 		}
/* 000160 */ 		if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000162 */ 			var macroname = tok.arg;
/* 000164 */ 			if (__t__ (__t__ (self.single_token_requiring_arg_is_error) && __in__ (macroname, tuple (['begin', 'end'])))) {
/* 000167 */ 				var exc = (function () {
/* 000167 */ 					var __accu0__ = latex_walker;
/* 000169 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000169 */ 						var __accu1__ = 'Expected expression, got \\{}';
/* 000169 */ 						return __call__ (__accu1__.format, __accu1__, macroname);
/* 000169 */ 					}) (), __kwargtrans__ ({pos: tok.pos})));
/* 000169 */ 				}) ();
/* 000173 */ 				if (__t__ (exc !== null)) {
/* 000174 */ 					var __except0__ = exc;
/* 000174 */ 					__except0__.__cause__ = null;
/* 000174 */ 					throw __except0__;
/* 000174 */ 				}
/* 000178 */ 				return [(function () {
/* 000178 */ 					var __accu0__ = latex_walker;
/* 000178 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: macroname, spec: null, nodeargd: null, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000178 */ 				}) ()];
/* 000178 */ 			}
/* 000190 */ 			var mspec = (function () {
/* 000190 */ 				var __accu0__ = parsing_state.latex_context;
/* 000190 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000190 */ 			}) ();
/* 000192 */ 			(function () {
/* 000192 */ 				var __accu0__ = self;
/* 000193 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, mspec, tok, (function () {
/* 000193 */ 					var __accu1__ = 'a single macro ‘\\{}’';
/* 000193 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000193 */ 				}) ());
/* 000193 */ 			}) ();
/* 000196 */ 			return [(function () {
/* 000196 */ 				var __accu0__ = latex_walker;
/* 000196 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, spec: mspec, nodeargd: null, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000196 */ 			}) ()];
/* 000196 */ 		}
/* 000208 */ 		if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000210 */ 			var specialsspec = tok.arg;
/* 000212 */ 			(function () {
/* 000212 */ 				var __accu0__ = self;
/* 000213 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, specialsspec, tok, (function () {
/* 000213 */ 					var __accu1__ = 'specials ‘{}’';
/* 000213 */ 					return __call__ (__accu1__.format, __accu1__, specialsspec.specials_chars);
/* 000213 */ 				}) ());
/* 000213 */ 			}) ();
/* 000216 */ 			return [(function () {
/* 000216 */ 				var __accu0__ = latex_walker;
/* 000216 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexSpecialsNode, __kwargtrans__ ({parsing_state: parsing_state, specials_chars: specialsspec.specials_chars, spec: specialsspec, nodeargd: null, pos: tok.pos, pos_end: tok.pos_end}));
/* 000216 */ 			}) ()];
/* 000216 */ 		}
/* 000227 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000229 */ 			if (__t__ (self.include_skipped_comments)) {
/* 000231 */ 				var cnodes = [(function () {
/* 000231 */ 					var __accu0__ = latex_walker;
/* 000231 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000231 */ 				}) ()];
/* 000231 */ 			}
/* 000237 */ 			else {
/* 000239 */ 				var cnodes = [];
/* 000239 */ 			}
/* 000241 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentNodes, null, cnodes, tok.pos);
/* 000241 */ 			__except0__.__cause__ = null;
/* 000241 */ 			throw __except0__;
/* 000241 */ 		}
/* 000244 */ 		if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000248 */ 			(function () {
/* 000248 */ 				var __accu0__ = token_reader;
/* 000248 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000248 */ 			}) ();
/* 000250 */ 			var __left0__ = (function () {
/* 000250 */ 				var __accu0__ = latex_walker;
/* 000251 */ 				return __call__ (__accu0__.parse_content, __accu0__, __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tok.arg})), __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000251 */ 			}) ();
/* 000251 */ 			var groupnode = __left0__ [0];
/* 000251 */ 			var carryover_info = __left0__ [1];
/* 000258 */ 			// pass;
/* 000262 */ 			if (__t__ (carryover_info !== null)) {
/* 000263 */ 				(function () {
/* 000263 */ 					var __accu0__ = logger;
/* 000263 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring carryover_info after parsing an expression group!');
/* 000263 */ 				}) ();
/* 000263 */ 			}
/* 000265 */ 			return [groupnode];
/* 000265 */ 		}
/* 000267 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000271 */ 			(function () {
/* 000271 */ 				var __accu0__ = token_reader;
/* 000271 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000271 */ 			}) ();
/* 000274 */ 			var exc = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000274 */ 				var __accu0__ = 'Expected LaTeX expression, got closing brace ‘{}’';
/* 000274 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000276 */ 			}) (), pos: tok.pos, recovery_nodes: (function () {
/* 000276 */ 				var __accu0__ = latex_walker;
/* 000276 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: '', pos: tok.pos, pos_end: tok.pos}));
/* 000276 */ 			}) (), recovery_at_token: tok}));
/* 000286 */ 			exc._error_was_unexpected_closing_brace_in_expression = true;
/* 000287 */ 			var __except0__ = exc;
/* 000287 */ 			__except0__.__cause__ = null;
/* 000287 */ 			throw __except0__;
/* 000287 */ 		}
/* 000289 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000291 */ 			return [(function () {
/* 000291 */ 				var __accu0__ = latex_walker;
/* 000291 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000291 */ 			}) ()];
/* 000291 */ 		}
/* 000297 */ 		if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000305 */ 			if (__t__ ((function () {
/* 000305 */ 				var __accu0__ = tok.arg;
/* 000305 */ 				return __call__ (__accu0__.startswith, __accu0__, '\\');
/* 000305 */ 			}) ())) {
/* 000306 */ 				var recovery_nodes = (function () {
/* 000306 */ 					var __accu0__ = latex_walker;
/* 000306 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000306 */ 				}) ();
/* 000306 */ 			}
/* 000312 */ 			else {
/* 000313 */ 				var recovery_nodes = (function () {
/* 000313 */ 					var __accu0__ = latex_walker;
/* 000313 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000313 */ 				}) ();
/* 000313 */ 			}
/* 000320 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, (function () {
/* 000320 */ 				var __accu0__ = 'Unexpected math mode delimiter ‘{}’, was expecting a LaTeX expression';
/* 000320 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000320 */ 			}) (), __kwargtrans__ ({pos: tok.pos, recovery_nodes: recovery_nodes, recovery_past_token: tok}));
/* 000320 */ 			__except0__.__cause__ = null;
/* 000320 */ 			throw __except0__;
/* 000320 */ 		}
/* 000328 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000328 */ 			var __accu0__ = 'Unknown token type: ‘{}’';
/* 000328 */ 			return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000328 */ 		}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000328 */ 		__except0__.__cause__ = null;
/* 000328 */ 		throw __except0__;
/* 000328 */ 	});},
/* 000333 */ 	get _check_if_requires_args () {return __get__ (this, function (self, latex_walker, spec, got_token, what_we_got) {
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'got_token': var got_token = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'what_we_got': var what_we_got = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000335 */ 		if (__t__ (self.single_token_requiring_arg_is_error)) {
/* 000337 */ 			var arg_contents_empty_ok = (function () {
/* 000337 */ 				var __accu0__ = (function () {
/* 000337 */ 					var __accu1__ = spec;
/* 000337 */ 					return __call__ (__accu1__.get_node_parser, __accu1__, got_token);
/* 000337 */ 				}) ();
/* 000337 */ 				return __call__ (__accu0__.contents_can_be_empty, __accu0__);
/* 000337 */ 			}) ();
/* 000338 */ 			// pass;
/* 000343 */ 			if (__t__ (!__t__ ((arg_contents_empty_ok)))) {
/* 000344 */ 				var exc = (function () {
/* 000344 */ 					var __accu0__ = latex_walker;
/* 000346 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000346 */ 						var __accu1__ = 'Expected a LaTeX expression but got {} which expects arguments; did you mean to provide an expression in {{curly braces}} ?';
/* 000346 */ 						return __call__ (__accu1__.format, __accu1__, what_we_got);
/* 000346 */ 					}) ()));
/* 000346 */ 				}) ();
/* 000351 */ 				if (__t__ (exc !== null)) {
/* 000352 */ 					var __except0__ = exc;
/* 000352 */ 					__except0__.__cause__ = null;
/* 000352 */ 					throw __except0__;
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 	});}
/* 000352 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._expression.map