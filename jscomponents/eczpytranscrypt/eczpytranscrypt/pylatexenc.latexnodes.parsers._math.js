/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:37:13
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000045 */ import {LatexDelimitedExpressionParser, LatexDelimitedExpressionParserInfo} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000044 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, __all__, _unicode_from_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerEndOfStream, LatexDelimitedExpressionParserInfo, LatexDelimitedExpressionParser, LatexWalkerNodesParseError, __all__, LatexWalkerParseError, LatexGeneralNodesParser, nodes, _unicode_from_str, LatexWalkerTokenParseError, LatexWalkerError};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._math';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000053 */ export var _basestring = str;
/* 000066 */ export var LatexMathParserInfo =  __class__ ('LatexMathParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000066 */ 	__module__: __name__,
/* 000069 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser) {
/* 000069 */ 		if (arguments.length) {
/* 000069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 					switch (__attrib0__) {
/* 000069 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 					}
/* 000069 */ 				}
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 		else {
/* 000069 */ 		}
/* 000072 */ 		if (__t__ (!__in__ (first_token.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000073 */ 			return false;
/* 000073 */ 		}
/* 000075 */ 		if (__t__ (!__t__ (((function () {
/* 000075 */ 			var __accu0__ = cls;
/* 000075 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, delimiters, first_token.arg);
/* 000075 */ 		}) ())))) {
/* 000076 */ 			return false;
/* 000076 */ 		}
/* 000078 */ 		return true;
/* 000078 */ 	});},
/* 000081 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000083 */ 		if (__t__ (delimiters !== null)) {
/* 000084 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000085 */ 				return [delimiters];
/* 000085 */ 			}
/* 000086 */ 			else {
/* 000087 */ 				return [__getitem__ (delimiters, 0)];
/* 000087 */ 			}
/* 000087 */ 		}
/* 000089 */ 		return (function () {
/* 000089 */ 			var __accu0__ = [];
/* 000089 */ 			var __iterable0__ = __add__ (group_parsing_state.latex_inline_math_delimiters, group_parsing_state.latex_display_math_delimiters);
/* 000089 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000093 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000093 */ 				var od = __left0__ [0];
/* 000093 */ 				var cd = __left0__ [1];
/* 000091 */ 				(function () {
/* 000091 */ 					var __accu1__ = __accu0__;
/* 000091 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000091 */ 				}) ();
/* 000091 */ 			}
/* 000091 */ 			return __accu0__;
/* 000091 */ 		}) ();
/* 000091 */ 	});},
/* 000100 */ 	get initialize () {return __get__ (this, function (self) {
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000103 */ 		self.math_mode_type = self.first_token.tok;
/* 000104 */ 		self.math_mode_delimiter = self.first_token.arg;
/* 000106 */ 		self.math_parsing_state = (function () {
/* 000106 */ 			var __accu0__ = self.parsing_state;
/* 000106 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: self.math_mode_delimiter}));
/* 000106 */ 		}) ();
/* 000111 */ 		self.contents_parsing_state = self.math_parsing_state;
/* 000112 */ 		self.child_parsing_state = self.math_parsing_state;
/* 000113 */ 		self.parsed_delimiters = (function () {
/* 000113 */ 			var __accu0__ = self;
/* 000113 */ 			return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000113 */ 		}) ();
/* 000113 */ 	});},
/* 000115 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		if (__t__ (__t__ (__eq__ (token.tok, self.math_mode_type)) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000117 */ 			return true;
/* 000117 */ 		}
/* 000118 */ 		return false;
/* 000118 */ 	});},
/* 000120 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000121 */ 		return __getitem__ (self.math_parsing_state._math_expecting_close_delim_info, 'close_delim');
/* 000121 */ 	});},
/* 000124 */ 	get make_group_node_carryover_info () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, carryover_info) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'carryover_info': var carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000129 */ 		var pos_end = (function () {
/* 000129 */ 			var __accu0__ = token_reader;
/* 000129 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000129 */ 		}) ();
/* 000133 */ 		if (__t__ (__eq__ (self.math_mode_type, 'mathmode_inline'))) {
/* 000134 */ 			var displaytype = 'inline';
/* 000134 */ 		}
/* 000135 */ 		else if (__t__ (__eq__ (self.math_mode_type, 'mathmode_display'))) {
/* 000136 */ 			var displaytype = 'display';
/* 000136 */ 		}
/* 000137 */ 		else {
/* 000138 */ 			var displaytype = '<unknown>';
/* 000138 */ 		}
/* 000140 */ 		var math_node = (function () {
/* 000140 */ 			var __accu0__ = latex_walker;
/* 000140 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexMathNode, __kwargtrans__ ({displaytype: displaytype, nodelist: nodelist, parsing_state: self.parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000140 */ 		}) ();
/* 000150 */ 		return tuple ([math_node, carryover_info]);
/* 000150 */ 	});}
/* 000150 */ });
/* 000155 */ export var LatexMathParser =  __class__ ('LatexMathParser', [LatexDelimitedExpressionParser], {
/* 000155 */ 	__module__: __name__,
/* 000156 */ 	get __init__ () {return __get__ (this, function (self, math_mode_delimiters) {
/* 000156 */ 		var kwargs = dict ();
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'math_mode_delimiters': var math_mode_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 				delete kwargs.__kwargtrans__;
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000159 */ 		__call__ (__call__ (__super__, null, LatexMathParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: math_mode_delimiters, discard_carryover_info: false, delimited_expression_parser_info_class: LatexMathParserInfo}, kwargs)));
/* 000159 */ 	});}
/* 000159 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._math.map