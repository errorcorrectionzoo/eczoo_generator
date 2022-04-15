/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:53
/* 000035 */ var logging = {};
/* 000035 */ var re = {};
/* 000035 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000041 */ import {LatexToken} from './pylatexenc.latexnodes._token.js';
/* 000040 */ import {LatexWalkerEndOfStream} from './pylatexenc.latexnodes._exctypes.js';
/* 000036 */ import * as __module_logging__ from './logging.js';
/* 000036 */ __nest__ (logging, '', __module_logging__);
/* 000035 */ import * as __module_re__ from './re.js';
/* 000035 */ __nest__ (re, '', __module_re__);
/* 000035 */ export {LatexToken, LatexWalkerEndOfStream};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._tokenreaderbase';
/* 000037 */ export var logger = (function () {
/* 000037 */ 	var __accu0__ = logging;
/* 000037 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000037 */ }) ();
/* 000044 */ export var LatexTokenReaderBase =  __class__ ('LatexTokenReaderBase', [object], {
/* 000044 */ 	__module__: __name__,
/* 000045 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000045 */ 		var kwargs = dict ();
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 				delete kwargs.__kwargtrans__;
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000046 */ 		__call__ (__call__ (__super__, null, LatexTokenReaderBase, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000046 */ 	});},
/* 000049 */ 	get make_token () {return __get__ (this, function (self) {
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
/* 000050 */ 		return __call__ (LatexToken, null, __kwargtrans__ (kwargs));
/* 000050 */ 	});},
/* 000052 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000052 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000052 */ 			var rewind_pre_space = true;
/* 000052 */ 		};
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000053 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement rewind_to_token()');
/* 000053 */ 		__except0__.__cause__ = null;
/* 000053 */ 		throw __except0__;
/* 000053 */ 	});},
/* 000057 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000057 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000057 */ 			var fastforward_post_space = true;
/* 000057 */ 		};
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000058 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement move_past_token()');
/* 000058 */ 		__except0__.__cause__ = null;
/* 000058 */ 		throw __except0__;
/* 000058 */ 	});},
/* 000062 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement peek_token()');
/* 000063 */ 		__except0__.__cause__ = null;
/* 000063 */ 		throw __except0__;
/* 000063 */ 	});},
/* 000067 */ 	get peek_token_or_none () {return __get__ (this, function (self, parsing_state) {
/* 000067 */ 		if (arguments.length) {
/* 000067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 					switch (__attrib0__) {
/* 000067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 		else {
/* 000067 */ 		}
/* 000068 */ 		try {
/* 000069 */ 			(function () {
/* 000069 */ 				var __accu0__ = self;
/* 000069 */ 				return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000069 */ 			}) ();
/* 000069 */ 		}
/* 000069 */ 		catch (__except0__) {
/* 000069 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000071 */ 				return null;
/* 000071 */ 			}
/* 000071 */ 			else {
/* 000071 */ 				throw __except0__;
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 	});},
/* 000073 */ 	get next_token () {return __get__ (this, function (self, parsing_state) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000074 */ 		var tok = (function () {
/* 000074 */ 			var __accu0__ = self;
/* 000074 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000074 */ 		}) ();
/* 000075 */ 		(function () {
/* 000075 */ 			var __accu0__ = self;
/* 000075 */ 			return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000075 */ 		}) ();
/* 000076 */ 		return tok;
/* 000076 */ 	});},
/* 000078 */ 	get cur_pos () {return __get__ (this, function (self) {
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
/* 000079 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement cur_pos()');
/* 000079 */ 		__except0__.__cause__ = null;
/* 000079 */ 		throw __except0__;
/* 000079 */ 	});},
/* 000081 */ 	get final_pos () {return __get__ (this, function (self) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement final_pos()');
/* 000082 */ 		__except0__.__cause__ = null;
/* 000082 */ 		throw __except0__;
/* 000082 */ 	});},
/* 000084 */ 	get skip_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000085 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000085 */ 		__except0__.__cause__ = null;
/* 000085 */ 		throw __except0__;
/* 000085 */ 	});},
/* 000087 */ 	get peek_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000087 */ 		if (arguments.length) {
/* 000087 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000087 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000087 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000087 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000087 */ 					switch (__attrib0__) {
/* 000087 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 					}
/* 000087 */ 				}
/* 000087 */ 			}
/* 000087 */ 		}
/* 000087 */ 		else {
/* 000087 */ 		}
/* 000088 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000088 */ 		__except0__.__cause__ = null;
/* 000088 */ 		throw __except0__;
/* 000088 */ 	});},
/* 000090 */ 	get next_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000091 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000091 */ 		__except0__.__cause__ = null;
/* 000091 */ 		throw __except0__;
/* 000091 */ 	});},
/* 000093 */ 	get move_to_pos_chars () {return __get__ (this, function (self, pos) {
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000094 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000094 */ 		__except0__.__cause__ = null;
/* 000094 */ 		throw __except0__;
/* 000094 */ 	});}
/* 000094 */ });
/* 000102 */ export var LatexTokenListTokenReader =  __class__ ('LatexTokenListTokenReader', [LatexTokenReaderBase], {
/* 000102 */ 	__module__: __name__,
/* 000110 */ 	get __init__ () {return __get__ (this, function (self, token_list) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'token_list': var token_list = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000111 */ 		self.token_list = token_list;
/* 000112 */ 		self._idx = 0;
/* 000112 */ 	});},
/* 000114 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000115 */ 		if (__t__ (__ge__ (self._idx, __call__ (len, null, self.token_list)))) {
/* 000116 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null);
/* 000116 */ 			__except0__.__cause__ = null;
/* 000116 */ 			throw __except0__;
/* 000116 */ 		}
/* 000117 */ 		return __getitem__ (self.token_list, self._idx);
/* 000117 */ 	});},
/* 000119 */ 	get next_token () {return __get__ (this, function (self, parsing_state) {
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000123 */ 		var tok = (function () {
/* 000123 */ 			var __accu0__ = self;
/* 000123 */ 			return __call__ (__accu0__.peek_token, __accu0__, parsing_state);
/* 000123 */ 		}) ();
/* 000124 */ 		self._idx = __call__ (__iadd__, null, self._idx, 1);
/* 000125 */ 		return tok;
/* 000125 */ 	});},
/* 000127 */ 	get _find_tok_idx () {return __get__ (this, function (self, tok, methname) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'methname': var methname = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000128 */ 		var i = __call__ (py_next, null, (function () {
/* 000128 */ 			var __accu0__ = [];
/* 000128 */ 			var __iterable0__ = __call__ (enumerate, null, self.token_list);
/* 000128 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000128 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000128 */ 				var j = __left0__ [0];
/* 000128 */ 				var t = __left0__ [1];
/* 000128 */ 				if (__t__ (t === tok)) {
/* 000128 */ 					(function () {
/* 000128 */ 						var __accu1__ = __accu0__;
/* 000128 */ 						return __call__ (__accu1__.append, __accu1__, j);
/* 000128 */ 					}) ();
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 			return py_iter (__accu0__);
/* 000128 */ 		}) (), null);
/* 000130 */ 		if (__t__ (i === null)) {
/* 000131 */ 			var __except0__ = __call__ (IndexError, null, (function () {
/* 000131 */ 				var __accu0__ = '{}({!r}): no such token in list';
/* 000131 */ 				return __call__ (__accu0__.format, __accu0__, methname, tok);
/* 000131 */ 			}) ());
/* 000131 */ 			__except0__.__cause__ = null;
/* 000131 */ 			throw __except0__;
/* 000131 */ 		}
/* 000132 */ 		return i;
/* 000132 */ 	});},
/* 000134 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000134 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000134 */ 			var rewind_pre_space = true;
/* 000134 */ 		};
/* 000134 */ 		if (arguments.length) {
/* 000134 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000134 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000134 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000134 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000134 */ 					switch (__attrib0__) {
/* 000134 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 					}
/* 000134 */ 				}
/* 000134 */ 			}
/* 000134 */ 		}
/* 000134 */ 		else {
/* 000134 */ 		}
/* 000135 */ 		self._idx = (function () {
/* 000135 */ 			var __accu0__ = self;
/* 000135 */ 			return __call__ (__accu0__._find_tok_idx, __accu0__, tok, 'move_to_token');
/* 000135 */ 		}) ();
/* 000135 */ 	});},
/* 000137 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000137 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000137 */ 			var fastforward_post_space = true;
/* 000137 */ 		};
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000138 */ 		self._idx = __add__ ((function () {
/* 000138 */ 			var __accu0__ = self;
/* 000138 */ 			return __call__ (__accu0__._find_tok_idx, __accu0__, tok, 'move_past_token');
/* 000138 */ 		}) (), 1);
/* 000138 */ 	});},
/* 000140 */ 	get cur_pos () {return __get__ (this, function (self) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000141 */ 		return (function () {
/* 000141 */ 			var __accu0__ = self;
/* 000141 */ 			return __call__ (__accu0__.peek_token, __accu0__, null);
/* 000141 */ 		}) ().pos;
/* 000141 */ 	});},
/* 000143 */ 	get final_pos () {return __get__ (this, function (self) {
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000144 */ 		return __getitem__ (self.token_list, __sub__ (__call__ (len, null, self.token_list), 1)).pos_end;
/* 000144 */ 	});}
/* 000144 */ });
/* 000035 */ 
//# sourceMappingURL=pylatexenc.latexnodes._tokenreaderbase.map