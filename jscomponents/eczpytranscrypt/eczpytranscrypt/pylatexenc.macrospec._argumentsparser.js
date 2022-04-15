/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:52
/* 000036 */ var logging = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000041 */ import {CarryoverInformation, ParsedMacroArgs} from './pylatexenc.latexnodes.js';
/* 000039 */ import {LatexParserBase, get_standard_argument_parser} from './pylatexenc.latexnodes.parsers.js';
/* 000036 */ import * as __module_logging__ from './logging.js';
/* 000036 */ __nest__ (logging, '', __module_logging__);
/* 000036 */ export {get_standard_argument_parser, CarryoverInformation, ParsedMacroArgs, LatexParserBase};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._argumentsparser';
/* 000037 */ export var logger = (function () {
/* 000037 */ 	var __accu0__ = logging;
/* 000037 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000037 */ }) ();
/* 000047 */ export var _basestring = str;
/* 000060 */ export var LatexArgumentSpec =  __class__ ('LatexArgumentSpec', [object], {
/* 000060 */ 	__module__: __name__,
/* 000089 */ 	get __init__ () {return __get__ (this, function (self, parser, argname) {
/* 000089 */ 		if (typeof argname == 'undefined' || (argname != null && argname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000089 */ 			var argname = null;
/* 000089 */ 		};
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000091 */ 		self.parser = parser;
/* 000093 */ 		if (__t__ (__call__ (isinstance, null, parser, _basestring))) {
/* 000094 */ 			self.arg_node_parser = __call__ (get_standard_argument_parser, null, parser);
/* 000094 */ 		}
/* 000095 */ 		else {
/* 000096 */ 			self.arg_node_parser = parser;
/* 000096 */ 		}
/* 000098 */ 		self.argname = argname;
/* 000098 */ 	});},
/* 000101 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000102 */ 		return (function () {
/* 000102 */ 			var __accu0__ = '{cls}(argname={argname!r}, parser={parser!r})';
/* 000102 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({cls: self.__class__.__name__, argname: self.argname, parser: self.parser}));
/* 000102 */ 		}) ();
/* 000102 */ 	});},
/* 000108 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000109 */ 		if (__t__ (self.argname)) {
/* 000110 */ 			return __call__ (dict, null, __kwargtrans__ ({argname: self.argname, parser: self.parser}));
/* 000110 */ 		}
/* 000111 */ 		return __call__ (dict, null, __kwargtrans__ ({parser: self.parser}));
/* 000111 */ 	});}
/* 000111 */ });
/* 000115 */ export var LatexNoArgumentsParser =  __class__ ('LatexNoArgumentsParser', [LatexParserBase], {
/* 000115 */ 	__module__: __name__,
/* 000121 */ 	get _get_argspec () {return __get__ (this, function (self) {
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000122 */ 		return '';
/* 000122 */ 	});},
/* 000124 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000124 */ 		var kwargs = dict ();
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 				delete kwargs.__kwargtrans__;
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000129 */ 		var parsed = __call__ (ParsedMacroArgs, null, __kwargtrans__ ({arguments_spec_list: [], argnlist: [], pos: (function () {
/* 000129 */ 			var __accu0__ = token_reader;
/* 000129 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000130 */ 		}) (), pos_end: (function () {
/* 000130 */ 			var __accu0__ = token_reader;
/* 000130 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000130 */ 		}) ()}));
/* 000133 */ 		return tuple ([parsed, null]);
/* 000133 */ 	});}
/* 000133 */ });
/* 000133 */ Object.defineProperty (LatexNoArgumentsParser, 'argspec', property.call (LatexNoArgumentsParser, LatexNoArgumentsParser._get_argspec));;
/* 000137 */ export var LatexArgumentsParser =  __class__ ('LatexArgumentsParser', [LatexParserBase], {
/* 000137 */ 	__module__: __name__,
/* 000162 */ 	get __init__ () {return __get__ (this, function (self, arguments_spec_list) {
/* 000162 */ 		var kwargs = dict ();
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 				delete kwargs.__kwargtrans__;
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000166 */ 		__call__ (__call__ (__super__, null, LatexArgumentsParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000168 */ 		if (__t__ (arguments_spec_list === null)) {
/* 000169 */ 			var arguments_spec_list = [];
/* 000169 */ 		}
/* 000171 */ 		self.arguments_spec_list = (function () {
/* 000171 */ 			var __accu0__ = [];
/* 000171 */ 			var __iterable0__ = arguments_spec_list;
/* 000171 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000173 */ 				var arg = __getitem__ (__iterable0__, __index0__);
/* 000173 */ 				(function () {
/* 000173 */ 					var __accu1__ = __accu0__;
/* 000172 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (!__t__ ((__call__ (isinstance, null, arg, LatexArgumentSpec)))) ? __call__ (LatexArgumentSpec, null, arg) : arg));
/* 000172 */ 				}) ();
/* 000172 */ 			}
/* 000172 */ 			return __accu0__;
/* 000172 */ 		}) ();
/* 000172 */ 	});},
/* 000184 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000184 */ 		var kwargs = dict ();
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 				delete kwargs.__kwargtrans__;
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000186 */ 		var argnlist = [];
/* 000188 */ 		var pos_start_default = (function () {
/* 000188 */ 			var __accu0__ = token_reader;
/* 000188 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000188 */ 		}) ();
/* 000189 */ 		var pos_start = null;
/* 000190 */ 		var last_arg_node = null;
/* 000192 */ 		var __iterable0__ = __call__ (enumerate, null, self.arguments_spec_list);
/* 000192 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000192 */ 			var argj = __left0__ [0];
/* 000192 */ 			var arg = __left0__ [1];
/* 000194 */ 			// pass;
/* 000199 */ 			var peeked_token = (function () {
/* 000199 */ 				var __accu0__ = token_reader;
/* 000199 */ 				return __call__ (__accu0__.peek_token_or_none, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000199 */ 			}) ();
/* 000201 */ 			var arg_node_parser = arg.arg_node_parser;
/* 000202 */ 			var __left0__ = (function () {
/* 000202 */ 				var __accu0__ = latex_walker;
/* 000207 */ 				return __call__ (__accu0__.parse_content, __accu0__, arg_node_parser, token_reader, parsing_state, __kwargtrans__ ({open_context: tuple ([(function () {
/* 000207 */ 					var __accu1__ = 'Argument {}';
/* 000207 */ 					return __call__ (__accu1__.format, __accu1__, argj);
/* 000207 */ 				}) (), peeked_token])}));
/* 000207 */ 			}) ();
/* 000207 */ 			var argnodes = __left0__ [0];
/* 000207 */ 			var carryover_info = __left0__ [1];
/* 000211 */ 			if (__t__ (carryover_info !== null)) {
/* 000212 */ 				(function () {
/* 000212 */ 					var __accu0__ = logger;
/* 000212 */ 					return __call__ (__accu0__.warning, __accu0__, 'Parsing carry-over information (%r) ignored when parsing arguments!', carryover_info);
/* 000212 */ 				}) ();
/* 000212 */ 			}
/* 000216 */ 			(function () {
/* 000216 */ 				var __accu0__ = argnlist;
/* 000216 */ 				return __call__ (__accu0__.append, __accu0__, argnodes);
/* 000216 */ 			}) ();
/* 000218 */ 			if (__t__ (argnodes !== null)) {
/* 000219 */ 				if (__t__ (pos_start === null)) {
/* 000220 */ 					var pos_start = argnodes.pos;
/* 000220 */ 				}
/* 000221 */ 				var last_arg_node = argnodes;
/* 000221 */ 			}
/* 000221 */ 		}
/* 000223 */ 		if (__t__ (__t__ (pos_start !== null) && last_arg_node !== null)) {
/* 000224 */ 			var pos = pos_start;
/* 000225 */ 			var pos_end = last_arg_node.pos_end;
/* 000225 */ 		}
/* 000226 */ 		else {
/* 000227 */ 			var pos = pos_start_default;
/* 000228 */ 			var pos_end = pos;
/* 000228 */ 		}
/* 000230 */ 		var parsed = __call__ (ParsedMacroArgs, null, __kwargtrans__ ({arguments_spec_list: self.arguments_spec_list, argnlist: argnlist, pos: pos, pos_end: pos_end}));
/* 000237 */ 		// pass;
/* 000241 */ 		return tuple ([parsed, null]);
/* 000241 */ 	});}
/* 000241 */ });
/* 000036 */ 
//# sourceMappingURL=pylatexenc.macrospec._argumentsparser.map