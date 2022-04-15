/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:52
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000045 */ import {LatexCharsNode, LatexNodeList} from './pylatexenc.latexnodes.nodes.js';
/* 000042 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000039 */ import {LatexGeneralNodesParser, LatexSingleNodeParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000038 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000038 */ export {LatexGeneralNodesParser, LatexSingleNodeParser, LatexParserBase, LatexCharsNode, LatexNodeList, LatexDelimitedGroupParser};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._optionals';
/* 000057 */ export var LatexOptionalSquareBracketsParser =  __class__ ('LatexOptionalSquareBracketsParser', [LatexDelimitedGroupParser], {
/* 000057 */ 	__module__: __name__,
/* 000061 */ 	get __init__ () {return __get__ (this, function (self, delimiters, optional) {
/* 000061 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000061 */ 			var delimiters = tuple (['[', ']']);
/* 000061 */ 		};
/* 000061 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000061 */ 			var optional = true;
/* 000061 */ 		};
/* 000061 */ 		var kwargs = dict ();
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 				delete kwargs.__kwargtrans__;
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000062 */ 		__call__ (__call__ (__super__, null, LatexOptionalSquareBracketsParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, optional: optional}, kwargs)));
/* 000062 */ 	});}
/* 000062 */ });
/* 000073 */ export var LatexOptionalCharsMarkerParser =  __class__ ('LatexOptionalCharsMarkerParser', [LatexParserBase], {
/* 000073 */ 	__module__: __name__,
/* 000075 */ 	get __init__ () {return __get__ (this, function (self, chars, following_arg_parser, include_chars_node_before_following_arg, return_none_instead_of_empty, allow_pre_space) {
/* 000075 */ 		if (typeof following_arg_parser == 'undefined' || (following_arg_parser != null && following_arg_parser.hasOwnProperty ("__kwargtrans__"))) {;
/* 000075 */ 			var following_arg_parser = null;
/* 000075 */ 		};
/* 000075 */ 		if (typeof include_chars_node_before_following_arg == 'undefined' || (include_chars_node_before_following_arg != null && include_chars_node_before_following_arg.hasOwnProperty ("__kwargtrans__"))) {;
/* 000075 */ 			var include_chars_node_before_following_arg = true;
/* 000075 */ 		};
/* 000075 */ 		if (typeof return_none_instead_of_empty == 'undefined' || (return_none_instead_of_empty != null && return_none_instead_of_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000075 */ 			var return_none_instead_of_empty = false;
/* 000075 */ 		};
/* 000075 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000075 */ 			var allow_pre_space = true;
/* 000075 */ 		};
/* 000075 */ 		var kwargs = dict ();
/* 000075 */ 		if (arguments.length) {
/* 000075 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 					switch (__attrib0__) {
/* 000075 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'following_arg_parser': var following_arg_parser = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'include_chars_node_before_following_arg': var include_chars_node_before_following_arg = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'return_none_instead_of_empty': var return_none_instead_of_empty = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 				delete kwargs.__kwargtrans__;
/* 000075 */ 			}
/* 000075 */ 		}
/* 000075 */ 		else {
/* 000075 */ 		}
/* 000082 */ 		__call__ (__call__ (__super__, null, LatexOptionalCharsMarkerParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000084 */ 		self.chars = (function () {
/* 000084 */ 			var __accu0__ = ' ';
/* 000084 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000084 */ 				var __accu1__ = (function () {
/* 000084 */ 					var __accu2__ = chars;
/* 000084 */ 					return __call__ (__accu2__.strip, __accu2__);
/* 000084 */ 				}) ();
/* 000084 */ 				return __call__ (__accu1__.py_split, __accu1__);
/* 000084 */ 			}) ());
/* 000084 */ 		}) ();
/* 000085 */ 		self.following_arg_parser = following_arg_parser;
/* 000086 */ 		self.include_chars_node_before_following_arg = include_chars_node_before_following_arg;
/* 000088 */ 		self.return_none_instead_of_empty = return_none_instead_of_empty;
/* 000089 */ 		self.allow_pre_space = allow_pre_space;
/* 000091 */ 		if (__t__ (!__t__ ((self.chars)))) {
/* 000092 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000092 */ 				var __accu0__ = 'Invalid chars={!r}, needs to be non-empty string (after stripping whitespce)';
/* 000092 */ 				return __call__ (__accu0__.format, __accu0__, chars);
/* 000092 */ 			}) ());
/* 000092 */ 			__except0__.__cause__ = null;
/* 000092 */ 			throw __except0__;
/* 000092 */ 		}
/* 000092 */ 	});},
/* 000096 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000097 */ 		return true;
/* 000097 */ 	});},
/* 000100 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000100 */ 		var kwargs = dict ();
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 				delete kwargs.__kwargtrans__;
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000102 */ 		var orig_pos_tok = (function () {
/* 000102 */ 			var __accu0__ = token_reader;
/* 000102 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000102 */ 		}) ();
/* 000103 */ 		var pos_end = null;
/* 000104 */ 		var read_s = '';
/* 000105 */ 		var match_found = false;
/* 000106 */ 		var first_token = null;
/* 000107 */ 		try {
/* 000108 */ 			while (__t__ (true)) {
/* 000109 */ 				var tok = (function () {
/* 000109 */ 					var __accu0__ = token_reader;
/* 000109 */ 					return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000109 */ 				}) ();
/* 000110 */ 				if (__t__ (first_token === null)) {
/* 000111 */ 					var first_token = tok;
/* 000112 */ 					if (__t__ (__t__ (first_token.pre_space) && !__t__ ((self.allow_pre_space)))) {
/* 000114 */ 						return tuple ([null, null]);
/* 000114 */ 					}
/* 000114 */ 				}
/* 000115 */ 				if (__t__ (__ne__ (tok.tok, 'char'))) {
/* 000115 */ 					break;
/* 000115 */ 				}
/* 000117 */ 				if (__t__ (__t__ (read_s) && tok.pre_space)) {
/* 000118 */ 					var read_s = __call__ (__iadd__, null, read_s, ' ');
/* 000118 */ 				}
/* 000119 */ 				var read_s = __call__ (__iadd__, null, read_s, tok.arg);
/* 000120 */ 				if (__t__ (__eq__ (read_s, self.chars))) {
/* 000121 */ 					var match_found = true;
/* 000122 */ 					var pos_end = tok.pos_end;
/* 000122 */ 					break;
/* 000122 */ 				}
/* 000124 */ 				if (__t__ (!__t__ (((function () {
/* 000124 */ 					var __accu0__ = self.chars;
/* 000124 */ 					return __call__ (__accu0__.startswith, __accu0__, read_s);
/* 000124 */ 				}) ())))) {
/* 000124 */ 					break;
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		finally {
/* 000129 */ 			if (__t__ (!__t__ ((match_found)))) {
/* 000130 */ 				(function () {
/* 000130 */ 					var __accu0__ = token_reader;
/* 000130 */ 					return __call__ (__accu0__.move_to_token, __accu0__, orig_pos_tok);
/* 000130 */ 				}) ();
/* 000130 */ 			}
/* 000130 */ 		}
/* 000132 */ 		if (__t__ (!__t__ ((match_found)))) {
/* 000134 */ 			if (__t__ (self.return_none_instead_of_empty)) {
/* 000135 */ 				return tuple ([null, null]);
/* 000135 */ 			}
/* 000136 */ 			return tuple ([__call__ (LatexNodeList, null, []), null]);
/* 000136 */ 		}
/* 000138 */ 		var nodes = [];
/* 000139 */ 		if (__t__ (self.include_chars_node_before_following_arg)) {
/* 000141 */ 			var nodes = __call__ (__iadd__, null, nodes, [(function () {
/* 000141 */ 				var __accu0__ = latex_walker;
/* 000141 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: self.chars, pos: orig_pos_tok.pos, pos_end: pos_end}));
/* 000141 */ 			}) ()]);
/* 000141 */ 		}
/* 000150 */ 		var carryover_info = null;
/* 000152 */ 		if (__t__ (self.following_arg_parser !== null)) {
/* 000153 */ 			var __left0__ = (function () {
/* 000153 */ 				var __accu0__ = latex_walker;
/* 000153 */ 				return __call__ (__accu0__.parse_content, __accu0__, self.following_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000153 */ 			}) ();
/* 000153 */ 			var following_nodes = __left0__ [0];
/* 000153 */ 			var carryover_info = __left0__ [1];
/* 000159 */ 			var nodes = __call__ (__iadd__, null, nodes, following_nodes);
/* 000159 */ 		}
/* 000161 */ 		var nodes = __call__ (LatexNodeList, null, nodes);
/* 000163 */ 		return tuple ([nodes, carryover_info]);
/* 000163 */ 	});}
/* 000163 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._optionals.map