/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:51
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000040 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000038 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexSpecialsNode, ParsedMacroArgs, __all__, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000037 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, _basestring, logger} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ export {_basestring, LatexEnvironmentNode, LatexNode, LatexNodeList, __all__, logger, LatexGroupNode, _update_posposend_from_nodelist, LatexMacroNode, LatexWalkerError, LatexSpecialsNode, LatexWalkerTokenParseError, LatexCommentNode, LatexMathNode, LatexWalkerEndOfStream, LatexWalkerNodesParseError, LatexParserBase, _unicode_from_str, LatexCharsNode, LatexWalkerParseError, ParsedMacroArgs};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._verbatim';
/* 000043 */ export var LatexVerbatimBaseParser =  __class__ ('LatexVerbatimBaseParser', [LatexParserBase], {
/* 000043 */ 	__module__: __name__,
/* 000049 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000049 */ 		var kwargs = dict ();
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 				delete kwargs.__kwargtrans__;
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000050 */ 		__call__ (__call__ (__super__, null, LatexVerbatimBaseParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000052 */ 	});},
/* 000052 */ 	VerbatimInfo: __class__ ('VerbatimInfo', [object], {
/* 000052 */ 		__module__: __name__,
/* 000053 */ 		get __init__ () {return __get__ (this, function (self) {
/* 000053 */ 			if (arguments.length) {
/* 000053 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 						switch (__attrib0__) {
/* 000053 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						}
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 			else {
/* 000053 */ 			}
/* 000054 */ 			__call__ (__call__ (__super__, null, LatexVerbatimBaseParser.VerbatimInfo, '__init__'), null, self);
/* 000054 */ 		});}
/* 000054 */ 	}),
/* 000056 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000062 */ 		if (__t__ (verbatim_string)) {
/* 000063 */ 			return true;
/* 000063 */ 		}
/* 000064 */ 		return false;
/* 000064 */ 	});},
/* 000066 */ 	get error_end_of_stream () {return __get__ (this, function (self, pos, recovery_nodes, latex_walker, verbatim_info) {
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'recovery_nodes': var recovery_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000067 */ 		var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: 'End of stream reached while reading verbatim content', pos: pos, recovery_nodes: recovery_nodes}));
/* 000067 */ 		__except0__.__cause__ = null;
/* 000067 */ 		throw __except0__;
/* 000067 */ 	});},
/* 000074 */ 	get finalize_verbatim_string () {return __get__ (this, function (self, verbatim_string, verbatim_info) {
/* 000074 */ 		if (arguments.length) {
/* 000074 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000074 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000074 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000074 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000074 */ 					switch (__attrib0__) {
/* 000074 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 					}
/* 000074 */ 				}
/* 000074 */ 			}
/* 000074 */ 		}
/* 000074 */ 		else {
/* 000074 */ 		}
/* 000081 */ 		verbatim_info.pos_start = verbatim_info.content_pos_start;
/* 000082 */ 		verbatim_info.pos_end = __add__ (verbatim_info.content_pos_start, __call__ (len, null, verbatim_string));
/* 000083 */ 		return verbatim_string;
/* 000083 */ 	});},
/* 000086 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000086 */ 		var kwargs = dict ();
/* 000086 */ 		if (arguments.length) {
/* 000086 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 					switch (__attrib0__) {
/* 000086 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000086 */ 					}
/* 000086 */ 				}
/* 000086 */ 				delete kwargs.__kwargtrans__;
/* 000086 */ 			}
/* 000086 */ 		}
/* 000086 */ 		else {
/* 000086 */ 		}
/* 000088 */ 		var verbatim_info = (function () {
/* 000088 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000088 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000088 */ 		}) ();
/* 000089 */ 		verbatim_info.original_pos = (function () {
/* 000089 */ 			var __accu0__ = token_reader;
/* 000089 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000089 */ 		}) ();
/* 000091 */ 		return (function () {
/* 000091 */ 			var __accu0__ = self;
/* 000091 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (__mergekwargtrans__ ({verbatim_info: verbatim_info}, kwargs)));
/* 000091 */ 		}) ();
/* 000091 */ 	});},
/* 000095 */ 	get read_verbatim_content () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state, verbatim_info) {
/* 000095 */ 		var kwargs = dict ();
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 				delete kwargs.__kwargtrans__;
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000104 */ 		var verbatim_string = '';
/* 000105 */ 		var stop_condition_met = false;
/* 000107 */ 		var ended_with_eos = false;
/* 000109 */ 		verbatim_info.content_pos_start = (function () {
/* 000109 */ 			var __accu0__ = token_reader;
/* 000109 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000109 */ 		}) ();
/* 000111 */ 		try {
/* 000112 */ 			while (__t__ (!__t__ ((stop_condition_met)))) {
/* 000113 */ 				var char = (function () {
/* 000113 */ 					var __accu0__ = token_reader;
/* 000113 */ 					return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000113 */ 				}) ();
/* 000116 */ 				var stopinfo = (function () {
/* 000116 */ 					var __accu0__ = self;
/* 000116 */ 					return __call__ (__accu0__.new_char_check_stop_condition, __accu0__, char, verbatim_string, verbatim_info, parsing_state);
/* 000116 */ 				}) ();
/* 000118 */ 				if (__t__ (stopinfo)) {
/* 000120 */ 					var stop_condition_met = true;
/* 000121 */ 					if (__t__ (__t__ (stopinfo !== true) && __getitem__ (stopinfo, 'put_back_char'))) {
/* 000122 */ 						(function () {
/* 000122 */ 							var __accu0__ = token_reader;
/* 000122 */ 							return __call__ (__accu0__.move_to_pos_chars, __accu0__, __sub__ ((function () {
/* 000122 */ 								var __accu1__ = token_reader;
/* 000122 */ 								return __call__ (__accu1__.cur_pos, __accu1__);
/* 000122 */ 							}) (), 1));
/* 000122 */ 						}) ();
/* 000122 */ 					}
/* 000122 */ 				}
/* 000123 */ 				else {
/* 000124 */ 					var verbatim_string = __call__ (__iadd__, null, verbatim_string, char);
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		catch (__except0__) {
/* 000124 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000127 */ 				var ended_with_eos = true;
/* 000127 */ 			}
/* 000127 */ 			else {
/* 000127 */ 				throw __except0__;
/* 000127 */ 			}
/* 000127 */ 		}
/* 000130 */ 		var verbatim_string = (function () {
/* 000130 */ 			var __accu0__ = self;
/* 000130 */ 			return __call__ (__accu0__.finalize_verbatim_string, __accu0__, verbatim_string, verbatim_info);
/* 000130 */ 		}) ();
/* 000132 */ 		var pos_start = verbatim_info.pos_start;
/* 000133 */ 		var pos_end = verbatim_info.pos_end;
/* 000135 */ 		var nodes = (function () {
/* 000135 */ 			var __accu0__ = latex_walker;
/* 000135 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({chars: verbatim_string, pos: pos_start, pos_end: pos_end, parsing_state: parsing_state}));
/* 000135 */ 		}) ();
/* 000143 */ 		if (__t__ (ended_with_eos)) {
/* 000144 */ 			return (function () {
/* 000144 */ 				var __accu0__ = self;
/* 000144 */ 				return __call__ (__accu0__.error_end_of_stream, __accu0__, __kwargtrans__ ({pos: pos_end, recovery_nodes: nodes, latex_walker: latex_walker, verbatim_info: verbatim_info}));
/* 000144 */ 			}) ();
/* 000144 */ 		}
/* 000149 */ 		return tuple ([nodes, null]);
/* 000149 */ 	});}
/* 000149 */ });
/* 000154 */ export var LatexDelimitedVerbatimParser =  __class__ ('LatexDelimitedVerbatimParser', [LatexVerbatimBaseParser], {
/* 000154 */ 	__module__: __name__,
/* 000155 */ 	get __init__ () {return __get__ (this, function (self, delimiters, auto_delimiters) {
/* 000155 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000155 */ 			var delimiters = null;
/* 000155 */ 		};
/* 000155 */ 		if (typeof auto_delimiters == 'undefined' || (auto_delimiters != null && auto_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000155 */ 			var auto_delimiters = null;
/* 000155 */ 		};
/* 000155 */ 		var kwargs = dict ();
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'auto_delimiters': var auto_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 				delete kwargs.__kwargtrans__;
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000159 */ 		__call__ (__call__ (__super__, null, LatexDelimitedVerbatimParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000161 */ 		self.delimiters = delimiters;
/* 000163 */ 		if (__t__ (auto_delimiters !== null)) {
/* 000164 */ 			self.auto_delimiters = __call__ (dict, null, auto_delimiters);
/* 000164 */ 		}
/* 000165 */ 		else {
/* 000166 */ 			self.auto_delimiters = dict ({'{': '}', '[': ']', '<': '>', '(': ')'});
/* 000166 */ 		}
/* 000173 */ 		self.depth_counter = 1;
/* 000176 */ 		self.parsed_delimiters = null;
/* 000176 */ 	});},
/* 000179 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000185 */ 		if (__t__ (__eq__ (char, __getitem__ (verbatim_info.parsed_delimiters, 1)))) {
/* 000187 */ 			self.depth_counter = __call__ (__isub__, null, self.depth_counter, 1);
/* 000188 */ 			if (__t__ (__le__ (self.depth_counter, 0))) {
/* 000190 */ 				return true;
/* 000190 */ 			}
/* 000190 */ 		}
/* 000191 */ 		else if (__t__ (__eq__ (char, __getitem__ (verbatim_info.parsed_delimiters, 0)))) {
/* 000193 */ 			self.depth_counter = __call__ (__iadd__, null, self.depth_counter, 1);
/* 000193 */ 		}
/* 000195 */ 		return false;
/* 000195 */ 	});},
/* 000198 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000198 */ 		var kwargs = dict ();
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 				delete kwargs.__kwargtrans__;
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000200 */ 		var verbatim_info = (function () {
/* 000200 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000200 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000200 */ 		}) ();
/* 000202 */ 		(function () {
/* 000202 */ 			var __accu0__ = token_reader;
/* 000202 */ 			return __call__ (__accu0__.skip_space_chars, __accu0__, parsing_state);
/* 000202 */ 		}) ();
/* 000204 */ 		verbatim_info.original_pos = (function () {
/* 000204 */ 			var __accu0__ = token_reader;
/* 000204 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000204 */ 		}) ();
/* 000206 */ 		if (__t__ (self.delimiters === null)) {
/* 000209 */ 			var open_delim_char = (function () {
/* 000209 */ 				var __accu0__ = token_reader;
/* 000209 */ 				return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000209 */ 			}) ();
/* 000211 */ 			var close_delim_char = (function () {
/* 000211 */ 				var __accu0__ = self.auto_delimiters;
/* 000211 */ 				return __call__ (__accu0__.py_get, __accu0__, open_delim_char, open_delim_char);
/* 000211 */ 			}) ();
/* 000213 */ 			verbatim_info.parsed_delimiters = tuple ([open_delim_char, close_delim_char]);
/* 000213 */ 		}
/* 000214 */ 		else {
/* 000217 */ 			verbatim_info.parsed_delimiters = self.delimiters;
/* 000219 */ 			var first_char = (function () {
/* 000219 */ 				var __accu0__ = token_reader;
/* 000219 */ 				return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000219 */ 			}) ();
/* 000220 */ 			if (__t__ (__ne__ (first_char, __getitem__ (verbatim_info.parsed_delimiters, 0)))) {
/* 000222 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000222 */ 					var __accu0__ = 'Expected opening delimiter ‘{}’ for verbatim content';
/* 000222 */ 					return __call__ (__accu0__.format, __accu0__, __getitem__ (verbatim_info.parsed_delimiters, 0));
/* 000222 */ 				}) (), pos: pos}));
/* 000222 */ 				__except0__.__cause__ = null;
/* 000222 */ 				throw __except0__;
/* 000222 */ 			}
/* 000222 */ 		}
/* 000229 */ 		var __left0__ = (function () {
/* 000229 */ 			var __accu0__ = self;
/* 000229 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (__mergekwargtrans__ ({verbatim_info: verbatim_info}, kwargs)));
/* 000229 */ 		}) ();
/* 000229 */ 		var verbatim_node = __left0__ [0];
/* 000229 */ 		var _ = __left0__ [1];
/* 000232 */ 		var nodes = (function () {
/* 000232 */ 			var __accu0__ = latex_walker;
/* 000237 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({delimiters: verbatim_info.parsed_delimiters, nodelist: __call__ (LatexNodeList, null, [verbatim_node]), pos: verbatim_info.original_pos, pos_end: __add__ (verbatim_node.pos_end, __call__ (len, null, __getitem__ (verbatim_info.parsed_delimiters, 1))), parsing_state: parsing_state}));
/* 000237 */ 		}) ();
/* 000241 */ 		return tuple ([nodes, null]);
/* 000241 */ 	});}
/* 000241 */ });
/* 000245 */ export var LatexVerbatimEnvironmentContentsParser =  __class__ ('LatexVerbatimEnvironmentContentsParser', [LatexVerbatimBaseParser], {
/* 000245 */ 	__module__: __name__,
/* 000246 */ 	get __init__ () {return __get__ (this, function (self, environment_name) {
/* 000246 */ 		if (typeof environment_name == 'undefined' || (environment_name != null && environment_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000246 */ 			var environment_name = 'verbatim';
/* 000246 */ 		};
/* 000246 */ 		var kwargs = dict ();
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'environment_name': var environment_name = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 				delete kwargs.__kwargtrans__;
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000247 */ 		__call__ (__call__ (__super__, null, LatexVerbatimEnvironmentContentsParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000248 */ 		self.environment_name = environment_name;
/* 000248 */ 	});},
/* 000250 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000253 */ 		if (__t__ ((function () {
/* 000253 */ 			var __accu0__ = verbatim_string;
/* 000253 */ 			return __call__ (__accu0__.endswith, __accu0__, verbatim_info.end_environment_code);
/* 000253 */ 		}) ())) {
/* 000254 */ 			return dict ({'put_back_char': true});
/* 000254 */ 		}
/* 000255 */ 		return false;
/* 000255 */ 	});},
/* 000257 */ 	get finalize_verbatim_string () {return __get__ (this, function (self, verbatim_string, verbatim_info) {
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000259 */ 		var end_environment_code = verbatim_info.end_environment_code;
/* 000260 */ 		assert ((function () {
/* 000260 */ 			var __accu0__ = verbatim_string;
/* 000260 */ 			return __call__ (__accu0__.endswith, __accu0__, end_environment_code);
/* 000260 */ 		}) ());
/* 000262 */ 		var verbatim_string = __getslice__ (verbatim_string, 0, __neg__ (__call__ (len, null, end_environment_code)), 1);
/* 000264 */ 		var pos_start = verbatim_info.original_pos;
/* 000266 */ 		if (__t__ ((function () {
/* 000266 */ 			var __accu0__ = verbatim_string;
/* 000266 */ 			return __call__ (__accu0__.startswith, __accu0__, '\n');
/* 000266 */ 		}) ())) {
/* 000269 */ 			var verbatim_string = __getslice__ (verbatim_string, 1, null, 1);
/* 000270 */ 			var pos_start = __call__ (__iadd__, null, pos_start, 1);
/* 000270 */ 		}
/* 000272 */ 		verbatim_info.pos_start = pos_start;
/* 000273 */ 		verbatim_info.pos_end = __add__ (pos_start, __call__ (len, null, verbatim_string));
/* 000274 */ 		return verbatim_string;
/* 000274 */ 	});},
/* 000276 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000276 */ 		var kwargs = dict ();
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 				delete kwargs.__kwargtrans__;
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000278 */ 		var verbatim_info = (function () {
/* 000278 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000278 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000278 */ 		}) ();
/* 000279 */ 		verbatim_info.original_pos = (function () {
/* 000279 */ 			var __accu0__ = token_reader;
/* 000279 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000279 */ 		}) ();
/* 000281 */ 		verbatim_info.end_environment_code = __add__ (__add__ (__add__ (parsing_state.macro_escape_char, 'end{'), self.environment_name), '}');
/* 000286 */ 		var __left0__ = (function () {
/* 000286 */ 			var __accu0__ = self;
/* 000286 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, verbatim_info, __kwargtrans__ (kwargs));
/* 000286 */ 		}) ();
/* 000286 */ 		var verbatim_chars_node = __left0__ [0];
/* 000286 */ 		var _ = __left0__ [1];
/* 000289 */ 		var nodes = __call__ (LatexNodeList, null, [verbatim_chars_node]);
/* 000294 */ 		return tuple ([nodes, null]);
/* 000294 */ 	});}
/* 000294 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._verbatim.map