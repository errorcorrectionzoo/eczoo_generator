/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:37:13
/* 000037 */ var logging = {};
/* 000037 */ var re = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {LatexTokenReaderBase} from './pylatexenc.latexnodes._tokenreaderbase.js';
/* 000043 */ import {LatexToken} from './pylatexenc.latexnodes._token.js';
/* 000041 */ import {LatexWalkerEndOfStream, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ import * as __module_re__ from './re.js';
/* 000037 */ __nest__ (re, '', __module_re__);
/* 000037 */ export {LatexToken, LatexTokenReaderBase, LatexWalkerTokenParseError, LatexWalkerEndOfStream};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._tokenreader';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000052 */ export var _rx_environment_name = (function () {
/* 000052 */ 	var __accu0__ = re;
/* 000052 */ 	return __call__ (__accu0__.compile, __accu0__, '\\s*\\{(?P<environmentname>[A-Za-z0-9* ._-]+)\\}');
/* 000052 */ }) ();
/* 000054 */ export var _parse_latex_environment_name = function (s, pos, beginend, pos_envname) {
/* 000054 */ 	if (arguments.length) {
/* 000054 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 				switch (__attrib0__) {
/* 000054 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					case 'pos_envname': var pos_envname = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 	}
/* 000054 */ 	else {
/* 000054 */ 	}
/* 000058 */ 	var envmatch = (function () {
/* 000058 */ 		var __accu0__ = _rx_environment_name;
/* 000058 */ 		return __call__ (__accu0__.match, __accu0__, __getslice__ (s, pos_envname, null, 1));
/* 000058 */ 	}) ();
/* 000059 */ 	if (__t__ (envmatch === null)) {
/* 000060 */ 		return tuple ([null, null]);
/* 000060 */ 	}
/* 000062 */ 	var envmatch_end_pos = __add__ (pos_envname, (function () {
/* 000062 */ 		var __accu0__ = envmatch;
/* 000062 */ 		return __call__ (__accu0__.end, __accu0__);
/* 000062 */ 	}) ());
/* 000064 */ 	return tuple ([(function () {
/* 000064 */ 		var __accu0__ = envmatch;
/* 000064 */ 		return __call__ (__accu0__.group, __accu0__, 'environmentname');
/* 000064 */ 	}) (), envmatch_end_pos]);
/* 000064 */ };
/* 000069 */ export var LatexTokenReader =  __class__ ('LatexTokenReader', [LatexTokenReaderBase], {
/* 000069 */ 	__module__: __name__,
/* 000079 */ 	get __init__ () {return __get__ (this, function (self, s) {
/* 000079 */ 		var kwargs = dict ();
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 				delete kwargs.__kwargtrans__;
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000080 */ 		__call__ (__call__ (__super__, null, LatexTokenReader, '__init__'), null, self);
/* 000081 */ 		self.s = s;
/* 000083 */ 		self.tolerant_parsing = (function () {
/* 000083 */ 			var __accu0__ = kwargs;
/* 000083 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'tolerant_parsing', false);
/* 000083 */ 		}) ();
/* 000085 */ 		if (__t__ (kwargs)) {
/* 000086 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000086 */ 				var __accu0__ = 'Invalid argument(s) to LatexTokenReader: {!r}';
/* 000086 */ 				return __call__ (__accu0__.format, __accu0__, kwargs);
/* 000086 */ 			}) ());
/* 000086 */ 			__except0__.__cause__ = null;
/* 000086 */ 			throw __except0__;
/* 000086 */ 		}
/* 000089 */ 		self._pos = 0;
/* 000092 */ 		self._parse_latex_environment_name = _parse_latex_environment_name;
/* 000092 */ 	});},
/* 000094 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000094 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000094 */ 			var rewind_pre_space = true;
/* 000094 */ 		};
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000095 */ 		if (__t__ (rewind_pre_space)) {
/* 000096 */ 			var new_pos = __sub__ (tok.pos, __call__ (len, null, tok.pre_space));
/* 000096 */ 		}
/* 000097 */ 		else {
/* 000098 */ 			var new_pos = tok.pos;
/* 000098 */ 		}
/* 000099 */ 		(function () {
/* 000099 */ 			var __accu0__ = self;
/* 000099 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, new_pos);
/* 000099 */ 		}) ();
/* 000099 */ 	});},
/* 000101 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000101 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000101 */ 			var fastforward_post_space = true;
/* 000101 */ 		};
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000102 */ 		var new_pos = tok.pos_end;
/* 000105 */ 		if (__t__ (!__t__ ((fastforward_post_space)))) {
/* 000106 */ 			var post_space = __call__ (getattr, null, tok, 'post_space', null);
/* 000107 */ 			if (__t__ (post_space)) {
/* 000108 */ 				var new_pos = __call__ (__isub__, null, new_pos, __call__ (len, null, post_space));
/* 000108 */ 			}
/* 000108 */ 		}
/* 000110 */ 		(function () {
/* 000110 */ 			var __accu0__ = self;
/* 000110 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, new_pos);
/* 000110 */ 		}) ();
/* 000110 */ 	});},
/* 000113 */ 	get peek_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000114 */ 		if (__t__ (__ge__ (self._pos, __call__ (len, null, self.s)))) {
/* 000115 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null);
/* 000115 */ 			__except0__.__cause__ = null;
/* 000115 */ 			throw __except0__;
/* 000115 */ 		}
/* 000116 */ 		return __getslice__ (self.s, self._pos, __add__ (self._pos, num_chars), 1);
/* 000116 */ 	});},
/* 000118 */ 	get next_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		var chars = (function () {
/* 000119 */ 			var __accu0__ = self;
/* 000119 */ 			return __call__ (__accu0__.peek_chars, __accu0__, num_chars, parsing_state);
/* 000119 */ 		}) ();
/* 000120 */ 		self._pos = __call__ (__iadd__, null, self._pos, num_chars);
/* 000121 */ 		if (__t__ (__gt__ (self._pos, __call__ (len, null, self.s)))) {
/* 000122 */ 			self._pos = __call__ (len, null, self.s);
/* 000122 */ 		}
/* 000123 */ 		return chars;
/* 000123 */ 	});},
/* 000125 */ 	get cur_pos () {return __get__ (this, function (self) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000126 */ 		return self._pos;
/* 000126 */ 	});},
/* 000128 */ 	get final_pos () {return __get__ (this, function (self) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000129 */ 		return __call__ (len, null, self.s);
/* 000129 */ 	});},
/* 000131 */ 	get move_to_pos_chars () {return __get__ (this, function (self, pos) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000132 */ 		(function () {
/* 000132 */ 			var __accu0__ = self;
/* 000132 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, pos);
/* 000132 */ 		}) ();
/* 000132 */ 	});},
/* 000135 */ 	get _advance_to_pos () {return __get__ (this, function (self, pos) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000136 */ 		self._pos = pos;
/* 000136 */ 	});},
/* 000138 */ 	get rewind_to_pos () {return __get__ (this, function (self, pos) {
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000139 */ 		if (__t__ (__gt__ (pos, self._pos))) {
/* 000140 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000140 */ 				var __accu0__ = 'Internal error, rewind_to_pos() requires a position that is *before* the current position, got {} > {}';
/* 000140 */ 				return __call__ (__accu0__.format, __accu0__, pos, self._pos);
/* 000140 */ 			}) ());
/* 000140 */ 			__except0__.__cause__ = null;
/* 000140 */ 			throw __except0__;
/* 000140 */ 		}
/* 000143 */ 		(function () {
/* 000143 */ 			var __accu0__ = self;
/* 000143 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, pos);
/* 000143 */ 		}) ();
/* 000143 */ 	});},
/* 000146 */ 	get skip_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000159 */ 		var __left0__ = (function () {
/* 000159 */ 			var __accu0__ = self;
/* 000159 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, self.s, self._pos, parsing_state);
/* 000159 */ 		}) ();
/* 000159 */ 		var space = __left0__ [0];
/* 000159 */ 		var space_pos = __left0__ [1];
/* 000159 */ 		var space_pos_end = __left0__ [2];
/* 000161 */ 		(function () {
/* 000161 */ 			var __accu0__ = self;
/* 000161 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, space_pos_end);
/* 000161 */ 		}) ();
/* 000163 */ 		return tuple ([space, space_pos, space_pos_end]);
/* 000163 */ 	});},
/* 000165 */ 	get peek_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000165 */ 		if (arguments.length) {
/* 000165 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 					switch (__attrib0__) {
/* 000165 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 		else {
/* 000165 */ 		}
/* 000166 */ 		return (function () {
/* 000166 */ 			var __accu0__ = self;
/* 000166 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, self.s, self._pos, parsing_state);
/* 000166 */ 		}) ();
/* 000166 */ 	});},
/* 000169 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000171 */ 		try {
/* 000173 */ 			return (function () {
/* 000173 */ 				var __accu0__ = self;
/* 000173 */ 				return __call__ (__accu0__.impl_peek_token, __accu0__, parsing_state);
/* 000173 */ 			}) ();
/* 000173 */ 		}
/* 000173 */ 		catch (__except0__) {
/* 000173 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000173 */ 				var exc = __except0__;
/* 000176 */ 				if (__t__ (self.tolerant_parsing)) {
/* 000178 */ 					(function () {
/* 000178 */ 						var __accu0__ = self;
/* 000178 */ 						return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000178 */ 					}) ();
/* 000179 */ 					return exc.recovery_token_placeholder;
/* 000179 */ 				}
/* 000180 */ 				else {
/* 000182 */ 					__except0__.__cause__ = null;
/* 000182 */ 					throw __except0__;
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 			else {
/* 000182 */ 				throw __except0__;
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 	});},
/* 000184 */ 	get impl_peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000186 */ 		// pass;
/* 000191 */ 		var s = self.s;
/* 000192 */ 		var len_s = __call__ (len, null, s);
/* 000193 */ 		var pos = self._pos;
/* 000196 */ 		var __left0__ = (function () {
/* 000196 */ 			var __accu0__ = self;
/* 000196 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, pos, parsing_state);
/* 000196 */ 		}) ();
/* 000196 */ 		var pre_space = __left0__ [0];
/* 000196 */ 		var space_pos = __left0__ [1];
/* 000196 */ 		var space_pos_end = __left0__ [2];
/* 000198 */ 		var pos = space_pos_end;
/* 000199 */ 		if (__t__ (__ge__ (pos, len_s))) {
/* 000200 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null, __kwargtrans__ ({final_space: pre_space}));
/* 000200 */ 			__except0__.__cause__ = null;
/* 000200 */ 			throw __except0__;
/* 000200 */ 		}
/* 000203 */ 		if (__t__ (__t__ (__lt__ (pos, __sub__ (len_s, 2))) && __t__ (__eq__ (__getitem__ (s, pos), '\n')) && __t__ (__eq__ (__getitem__ (s, __add__ (pos, 1)), '\n')) && parsing_state.enable_double_newline_paragraphs)) {
/* 000207 */ 			if (__t__ (parsing_state.latex_context !== null)) {
/* 000208 */ 				try {
/* 000209 */ 					var sspec = (function () {
/* 000209 */ 						var __accu0__ = parsing_state.latex_context;
/* 000209 */ 						return __call__ (__accu0__.get_specials_spec, __accu0__, __kwargtrans__ ({specials_chars: '\n\n'}));
/* 000209 */ 					}) ();
/* 000209 */ 				}
/* 000209 */ 				catch (__except0__) {
/* 000209 */ 					if (isinstance (__except0__, KeyError)) {
/* 000213 */ 						var sspec = null;
/* 000213 */ 					}
/* 000213 */ 					else {
/* 000213 */ 						throw __except0__;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000214 */ 				if (__t__ (sspec !== null)) {
/* 000215 */ 					return (function () {
/* 000215 */ 						var __accu0__ = self;
/* 000215 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: pos, pos_end: __add__ (pos, 2), pre_space: pre_space}));
/* 000215 */ 					}) ();
/* 000215 */ 				}
/* 000215 */ 			}
/* 000220 */ 			return (function () {
/* 000220 */ 				var __accu0__ = self;
/* 000220 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '\n\n', pos: pos, pos_end: __add__ (pos, 2), pre_space: pre_space}));
/* 000220 */ 			}) ();
/* 000220 */ 		}
/* 000224 */ 		var c = __getitem__ (s, pos);
/* 000226 */ 		// pass;
/* 000231 */ 		if (__t__ (__t__ (__in__ (c, parsing_state._math_delims_info_startchars)) && parsing_state.enable_math)) {
/* 000232 */ 			var t = (function () {
/* 000232 */ 				var __accu0__ = self;
/* 000232 */ 				return __call__ (__accu0__.impl_maybe_read_math_mode_delimiter, __accu0__, s, pos, parsing_state, pre_space);
/* 000232 */ 			}) ();
/* 000233 */ 			if (__t__ (t !== null)) {
/* 000234 */ 				return t;
/* 000234 */ 			}
/* 000234 */ 		}
/* 000237 */ 		if (__t__ (__eq__ (c, parsing_state.macro_escape_char))) {
/* 000240 */ 			if (__t__ (parsing_state.enable_environments)) {
/* 000241 */ 				if (__t__ ((function () {
/* 000241 */ 					var __accu0__ = s;
/* 000241 */ 					return __call__ (__accu0__.startswith, __accu0__, 'begin', __add__ (pos, 1));
/* 000241 */ 				}) ())) {
/* 000242 */ 					var beginend = 'begin';
/* 000242 */ 				}
/* 000243 */ 				else if (__t__ ((function () {
/* 000243 */ 					var __accu0__ = s;
/* 000243 */ 					return __call__ (__accu0__.startswith, __accu0__, 'end', __add__ (pos, 1));
/* 000243 */ 				}) ())) {
/* 000244 */ 					var beginend = 'end';
/* 000244 */ 				}
/* 000245 */ 				else {
/* 000246 */ 					var beginend = null;
/* 000246 */ 				}
/* 000248 */ 				// pass;
/* 000253 */ 				if (__t__ (beginend)) {
/* 000254 */ 					var pastbeginendpos = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000255 */ 					if (__t__ (__t__ (__ge__ (pastbeginendpos, __call__ (len, null, s))) || !__in__ (__getitem__ (s, pastbeginendpos), parsing_state.macro_alpha_chars))) {
/* 000259 */ 						return (function () {
/* 000259 */ 							var __accu0__ = self;
/* 000259 */ 							return __call__ (__accu0__.impl_read_environment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, beginend: beginend, pre_space: pre_space}));
/* 000259 */ 						}) ();
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000266 */ 			if (__t__ (parsing_state.enable_macros)) {
/* 000267 */ 				return (function () {
/* 000267 */ 					var __accu0__ = self;
/* 000267 */ 					return __call__ (__accu0__.impl_read_macro, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000267 */ 				}) ();
/* 000267 */ 			}
/* 000267 */ 		}
/* 000272 */ 		if (__t__ (__t__ (__eq__ (c, parsing_state.comment_char)) && parsing_state.enable_comments)) {
/* 000273 */ 			return (function () {
/* 000273 */ 				var __accu0__ = self;
/* 000273 */ 				return __call__ (__accu0__.impl_read_comment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000273 */ 			}) ();
/* 000273 */ 		}
/* 000278 */ 		if (__t__ (parsing_state.enable_groups)) {
/* 000279 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_by_open))) {
/* 000280 */ 				return (function () {
/* 000280 */ 					var __accu0__ = self;
/* 000280 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_open', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000280 */ 				}) ();
/* 000280 */ 			}
/* 000282 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_close))) {
/* 000283 */ 				return (function () {
/* 000283 */ 					var __accu0__ = self;
/* 000283 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_close', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000283 */ 				}) ();
/* 000283 */ 			}
/* 000283 */ 		}
/* 000286 */ 		if (__t__ (__t__ (parsing_state.latex_context !== null) && parsing_state.enable_specials)) {
/* 000287 */ 			var sspec = (function () {
/* 000287 */ 				var __accu0__ = parsing_state.latex_context;
/* 000287 */ 				return __call__ (__accu0__.test_for_specials, __accu0__, s, pos, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000287 */ 			}) ();
/* 000290 */ 			if (__t__ (sspec !== null)) {
/* 000291 */ 				return (function () {
/* 000291 */ 					var __accu0__ = self;
/* 000292 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: pos, pos_end: __add__ (pos, __call__ (len, null, sspec.specials_chars)), pre_space: pre_space}));
/* 000292 */ 				}) ();
/* 000292 */ 			}
/* 000292 */ 		}
/* 000297 */ 		return (function () {
/* 000297 */ 			var __accu0__ = self;
/* 000297 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000297 */ 		}) ();
/* 000297 */ 	});},
/* 000302 */ 	get impl_peek_space_chars () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000302 */ 		if (arguments.length) {
/* 000302 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000302 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000302 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000302 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000302 */ 					switch (__attrib0__) {
/* 000302 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 			}
/* 000302 */ 		}
/* 000302 */ 		else {
/* 000302 */ 		}
/* 000317 */ 		var p2 = pos;
/* 000318 */ 		var enable_double_newline_paragraphs = parsing_state.enable_double_newline_paragraphs;
/* 000321 */ 		var space = '';
/* 000323 */ 		while (__t__ (true)) {
/* 000324 */ 			if (__t__ (__ge__ (p2, __call__ (len, null, s)))) {
/* 000324 */ 				break;
/* 000324 */ 			}
/* 000326 */ 			var c = __getitem__ (s, p2);
/* 000327 */ 			if (__t__ (!__t__ (((function () {
/* 000327 */ 				var __accu0__ = c;
/* 000327 */ 				return __call__ (__accu0__.isspace, __accu0__);
/* 000327 */ 			}) ())))) {
/* 000327 */ 				break;
/* 000327 */ 			}
/* 000329 */ 			var space = __call__ (__iadd__, null, space, c);
/* 000330 */ 			var p2 = __call__ (__iadd__, null, p2, 1);
/* 000332 */ 			if (__t__ (__t__ ((function () {
/* 000332 */ 				var __accu0__ = space;
/* 000332 */ 				return __call__ (__accu0__.endswith, __accu0__, '\n\n');
/* 000332 */ 			}) ()) && enable_double_newline_paragraphs)) {
/* 000334 */ 				var space = __getslice__ (space, 0, __neg__ (2), 1);
/* 000335 */ 				var p2 = __sub__ (p2, 2);
/* 000335 */ 				break;
/* 000335 */ 			}
/* 000335 */ 		}
/* 000339 */ 		return tuple ([space, pos, p2]);
/* 000339 */ 	});},
/* 000342 */ 	get impl_maybe_read_math_mode_delimiter () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000344 */ 		if (__t__ (parsing_state.in_math_mode)) {
/* 000346 */ 			var expecting_close = parsing_state._math_expecting_close_delim_info;
/* 000349 */ 			if (__t__ (expecting_close !== null)) {
/* 000350 */ 				var expecting_close_delim = __getitem__ (expecting_close, 'close_delim');
/* 000351 */ 				var expecting_close_tok = __getitem__ (expecting_close, 'tok');
/* 000352 */ 				// pass;
/* 000356 */ 				if (__t__ ((function () {
/* 000356 */ 					var __accu0__ = s;
/* 000356 */ 					return __call__ (__accu0__.startswith, __accu0__, expecting_close_delim, pos);
/* 000356 */ 				}) ())) {
/* 000357 */ 					// pass;
/* 000362 */ 					return (function () {
/* 000362 */ 						var __accu0__ = self;
/* 000365 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: expecting_close_tok, arg: expecting_close_delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, expecting_close_delim)), pre_space: pre_space}));
/* 000365 */ 					}) ();
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000377 */ 		var __iterable0__ = parsing_state._math_all_delims_by_len;
/* 000377 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000377 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000377 */ 			var delim = __left0__ [0];
/* 000377 */ 			var tok_type = __left0__ [1];
/* 000378 */ 			if (__t__ ((function () {
/* 000378 */ 				var __accu0__ = s;
/* 000378 */ 				return __call__ (__accu0__.startswith, __accu0__, delim, pos);
/* 000378 */ 			}) ())) {
/* 000379 */ 				// pass;
/* 000384 */ 				return (function () {
/* 000384 */ 					var __accu0__ = self;
/* 000385 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: tok_type, arg: delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, delim)), pre_space: pre_space}));
/* 000385 */ 				}) ();
/* 000385 */ 			}
/* 000385 */ 		}
/* 000388 */ 		return null;
/* 000388 */ 	});},
/* 000391 */ 	get impl_read_macro () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000393 */ 		if (__t__ (__ne__ (__getitem__ (s, pos), '\\'))) {
/* 000394 */ 			var __except0__ = __call__ (ValueError, null, "Internal error, expected '\\' in impl_read_macro()");
/* 000394 */ 			__except0__.__cause__ = null;
/* 000394 */ 			throw __except0__;
/* 000394 */ 		}
/* 000398 */ 		if (__t__ (__ge__ (__add__ (pos, 1), __call__ (len, null, s)))) {
/* 000403 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, pos: __add__ (pos, 1), msg: 'Expected macro name after ‘\\’ escape character', recovery_token_placeholder: (function () {
/* 000403 */ 				var __accu0__ = self;
/* 000403 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pos: pos, pos_end: pos, pre_space: pre_space}));
/* 000410 */ 			}) (), recovery_token_at_pos: __call__ (len, null, s)}));
/* 000410 */ 			__except0__.__cause__ = null;
/* 000410 */ 			throw __except0__;
/* 000410 */ 		}
/* 000413 */ 		var c = __getitem__ (s, __add__ (pos, 1));
/* 000414 */ 		var macro = c;
/* 000417 */ 		var isalphamacro = __in__ (c, parsing_state.macro_alpha_chars);
/* 000418 */ 		var posi = __add__ (pos, 2);
/* 000419 */ 		if (__t__ (isalphamacro)) {
/* 000420 */ 			while (__t__ (__t__ (__lt__ (posi, __call__ (len, null, s))) && __in__ (__getitem__ (s, posi), parsing_state.macro_alpha_chars))) {
/* 000421 */ 				var macro = __call__ (__iadd__, null, macro, __getitem__ (s, posi));
/* 000422 */ 				var posi = __call__ (__iadd__, null, posi, 1);
/* 000422 */ 			}
/* 000422 */ 		}
/* 000425 */ 		var post_space = '';
/* 000426 */ 		if (__t__ (isalphamacro)) {
/* 000428 */ 			var __left0__ = (function () {
/* 000428 */ 				var __accu0__ = self;
/* 000428 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, posi, parsing_state);
/* 000428 */ 			}) ();
/* 000428 */ 			var post_space = __left0__ [0];
/* 000428 */ 			var post_space_pos = __left0__ [1];
/* 000428 */ 			var post_space_pos_end = __left0__ [2];
/* 000429 */ 			var posi = post_space_pos_end;
/* 000429 */ 		}
/* 000431 */ 		return (function () {
/* 000431 */ 			var __accu0__ = self;
/* 000431 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'macro', arg: macro, pos: pos, pos_end: posi, pre_space: pre_space, post_space: post_space}));
/* 000431 */ 		}) ();
/* 000431 */ 	});},
/* 000436 */ 	get impl_read_environment () {return __get__ (this, function (self, s, pos, parsing_state, beginend, pre_space) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000438 */ 		if (__t__ (__ne__ (__getslice__ (s, pos, __add__ (__add__ (pos, 1), __call__ (len, null, beginend)), 1), __add__ (parsing_state.macro_escape_char, beginend)))) {
/* 000440 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000440 */ 				var __accu0__ = 'Internal error, expected ‘\\{}’ in read_environment()';
/* 000440 */ 				return __call__ (__accu0__.format, __accu0__, beginend);
/* 000440 */ 			}) ());
/* 000440 */ 			__except0__.__cause__ = null;
/* 000440 */ 			throw __except0__;
/* 000440 */ 		}
/* 000444 */ 		var pos_envname = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000447 */ 		var __left0__ = (function () {
/* 000447 */ 			var __accu0__ = self;
/* 000447 */ 			return __call__ (__accu0__._parse_latex_environment_name, __accu0__, s, pos, beginend, pos_envname);
/* 000447 */ 		}) ();
/* 000447 */ 		var environment_name = __left0__ [0];
/* 000447 */ 		var environment_pos_end = __left0__ [1];
/* 000449 */ 		// pass;
/* 000457 */ 		if (__t__ (environment_name === null)) {
/* 000458 */ 			var tokarg = __add__ (parsing_state.macro_escape_char, beginend);
/* 000460 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({msg: (function () {
/* 000460 */ 				var __accu0__ = 'Bad ‘\\{}’ call: expected {{environmentname}}';
/* 000460 */ 				return __call__ (__accu0__.format, __accu0__, beginend);
/* 000469 */ 			}) (), pos: pos, recovery_token_placeholder: __call__ (LatexToken, null, __kwargtrans__ ({tok: 'char', arg: tokarg, pos: pos, pos_end: __add__ (pos, __call__ (len, null, tokarg)), pre_space: pre_space})), recovery_token_at_pos: __add__ (pos, __call__ (len, null, tokarg))}));
/* 000469 */ 			__except0__.__cause__ = null;
/* 000469 */ 			throw __except0__;
/* 000469 */ 		}
/* 000472 */ 		var env_token = (function () {
/* 000472 */ 			var __accu0__ = self;
/* 000472 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: __add__ (beginend, '_environment'), arg: environment_name, pos: pos, pos_end: environment_pos_end, pre_space: pre_space}));
/* 000472 */ 		}) ();
/* 000479 */ 		// pass;
/* 000482 */ 		return env_token;
/* 000482 */ 	});},
/* 000484 */ 	get impl_read_comment () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000484 */ 		if (arguments.length) {
/* 000484 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000484 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000484 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000484 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000484 */ 					switch (__attrib0__) {
/* 000484 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000484 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000484 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000484 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000484 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000484 */ 					}
/* 000484 */ 				}
/* 000484 */ 			}
/* 000484 */ 		}
/* 000484 */ 		else {
/* 000484 */ 		}
/* 000486 */ 		if (__t__ (__ne__ (__getitem__ (s, pos), parsing_state.comment_char))) {
/* 000487 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000487 */ 				var __accu0__ = 'Internal error, expected comment char ‘{}’ in read_comment()';
/* 000487 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.comment_char);
/* 000487 */ 			}) ());
/* 000487 */ 			__except0__.__cause__ = null;
/* 000487 */ 			throw __except0__;
/* 000487 */ 		}
/* 000490 */ 		var sppos = (function () {
/* 000490 */ 			var __accu0__ = s;
/* 000490 */ 			return __call__ (__accu0__.find, __accu0__, '\n', pos);
/* 000490 */ 		}) ();
/* 000491 */ 		if (__t__ (__eq__ (sppos, __neg__ (1)))) {
/* 000493 */ 			var comment_pos_end = __call__ (len, null, s);
/* 000494 */ 			var comment_with_whitespace_pos_end = __call__ (len, null, s);
/* 000495 */ 			var post_space = '';
/* 000495 */ 		}
/* 000496 */ 		else {
/* 000500 */ 			var __left0__ = (function () {
/* 000500 */ 				var __accu0__ = self;
/* 000500 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, sppos, parsing_state);
/* 000500 */ 			}) ();
/* 000500 */ 			var post_space = __left0__ [0];
/* 000500 */ 			var post_space_pos = __left0__ [1];
/* 000500 */ 			var post_space_pos_end = __left0__ [2];
/* 000501 */ 			var comment_pos_end = sppos;
/* 000502 */ 			var comment_with_whitespace_pos_end = post_space_pos_end;
/* 000502 */ 		}
/* 000504 */ 		return (function () {
/* 000504 */ 			var __accu0__ = self;
/* 000504 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'comment', arg: __getslice__ (s, __add__ (pos, 1), comment_pos_end, 1), pos: pos, pos_end: comment_with_whitespace_pos_end, pre_space: pre_space, post_space: post_space}));
/* 000504 */ 		}) ();
/* 000504 */ 	});}
/* 000504 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._tokenreader.map