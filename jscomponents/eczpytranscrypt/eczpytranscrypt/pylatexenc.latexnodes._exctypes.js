/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:03
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._exctypes';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000042 */ export var _basestring = str;
/* 000043 */ export var _unicode_from_str = (function __lambda__ (x) {
/* 000043 */ 	if (arguments.length) {
/* 000043 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 				switch (__attrib0__) {
/* 000043 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 	}
/* 000043 */ 	else {
/* 000043 */ 	}
/* 000043 */ 	return x;
/* 000043 */ });
/* 000060 */ export var __all__ = ['LatexWalkerError', 'LatexWalkerParseError', 'LatexWalkerParseErrorFormatter', 'LatexWalkerNodesParseError', 'LatexWalkerTokenParseError', 'LatexWalkerEndOfStream'];
/* 000071 */ export var LatexWalkerError =  __class__ ('LatexWalkerError', [Exception], {
/* 000071 */ 	__module__: __name__,
/* 000071 */ });
/* 000078 */ export var LatexWalkerParseError =  __class__ ('LatexWalkerParseError', [LatexWalkerError], {
/* 000078 */ 	__module__: __name__,
/* 000107 */ 	get __init__ () {return __get__ (this, function (self, msg, s, pos, lineno, colno) {
/* 000107 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000107 */ 			var s = null;
/* 000107 */ 		};
/* 000107 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000107 */ 			var pos = null;
/* 000107 */ 		};
/* 000107 */ 		if (typeof lineno == 'undefined' || (lineno != null && lineno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000107 */ 			var lineno = null;
/* 000107 */ 		};
/* 000107 */ 		if (typeof colno == 'undefined' || (colno != null && colno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000107 */ 			var colno = null;
/* 000107 */ 		};
/* 000107 */ 		var kwargs = dict ();
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 				delete kwargs.__kwargtrans__;
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000108 */ 		self.input_source = (function () {
/* 000108 */ 			var __accu0__ = kwargs;
/* 000108 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'input_source', null);
/* 000108 */ 		}) ();
/* 000109 */ 		self.msg = msg;
/* 000110 */ 		self.s = s;
/* 000111 */ 		self.pos = pos;
/* 000112 */ 		self.lineno = lineno;
/* 000113 */ 		self.colno = colno;
/* 000114 */ 		self.open_contexts = (function () {
/* 000114 */ 			var __accu0__ = kwargs;
/* 000114 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'open_contexts', []);
/* 000114 */ 		}) ();
/* 000116 */ 		if (__t__ (kwargs)) {
/* 000118 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword argument(s) to LatexWalkerParseError(): ', __call__ (repr, null, kwargs)));
/* 000118 */ 			__except0__.__cause__ = null;
/* 000118 */ 			throw __except0__;
/* 000118 */ 		}
/* 000121 */ 		__call__ (__call__ (__super__, null, LatexWalkerParseError, '__init__'), null, self, (function () {
/* 000121 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, self);
/* 000121 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000121 */ 		}) ());
/* 000121 */ 	});},
/* 000124 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000125 */ 		return (function () {
/* 000125 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, self);
/* 000125 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000125 */ 		}) ();
/* 000125 */ 	});}
/* 000125 */ });
/* 000151 */ export var LatexWalkerParseErrorFormatter =  __class__ ('LatexWalkerParseErrorFormatter', [object], {
/* 000151 */ 	__module__: __name__,
/* 000152 */ 	get __init__ () {return __get__ (this, function (self, exc) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		__call__ (__call__ (__super__, null, LatexWalkerParseErrorFormatter, '__init__'), null, self);
/* 000154 */ 		self.exc = exc;
/* 000154 */ 	});},
/* 000156 */ 	get to_display_string () {return __get__ (this, function (self) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000157 */ 		var exc = self.exc;
/* 000159 */ 		var msg = exc.msg;
/* 000160 */ 		if (__t__ (exc.input_source)) {
/* 000161 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000161 */ 				var __accu0__ = '  in {}';
/* 000161 */ 				return __call__ (__accu0__.format, __accu0__, exc.input_source);
/* 000161 */ 			}) ());
/* 000161 */ 		}
/* 000162 */ 		var disp = __add__ (msg, (function () {
/* 000162 */ 			var __accu0__ = ' {}';
/* 000162 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000162 */ 				var __accu1__ = self;
/* 000162 */ 				return __call__ (__accu1__.format_pos, __accu1__, exc.pos, exc.lineno, exc.colno);
/* 000162 */ 			}) ());
/* 000162 */ 		}) ());
/* 000163 */ 		if (__t__ (exc.open_contexts)) {
/* 000164 */ 			var disp = __call__ (__iadd__, null, disp, '\nOpen LaTeX blocks:\n');
/* 000165 */ 			var __iterable0__ = __call__ (py_reversed, null, exc.open_contexts);
/* 000165 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000165 */ 				var context = __getitem__ (__iterable0__, __index0__);
/* 000166 */ 				var __left0__ = context;
/* 000166 */ 				var what = __left0__ [0];
/* 000166 */ 				var pos = __left0__ [1];
/* 000166 */ 				var lineno = __left0__ [2];
/* 000166 */ 				var colno = __left0__ [3];
/* 000167 */ 				var disp = __call__ (__iadd__, null, disp, (function () {
/* 000167 */ 					var __accu0__ = '{empty:8}{loc:>10}  {what}\n';
/* 000168 */ 					return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({empty: '', loc: (function () {
/* 000168 */ 						var __accu1__ = self;
/* 000168 */ 						return __call__ (__accu1__.format_pos, __accu1__, pos, lineno, colno);
/* 000168 */ 					}) (), what: what}));
/* 000168 */ 				}) ());
/* 000168 */ 			}
/* 000168 */ 		}
/* 000170 */ 		return disp;
/* 000170 */ 	});},
/* 000172 */ 	get format_pos () {return __get__ (this, function (self, pos, lineno, colno) {
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		if (__t__ (lineno !== null)) {
/* 000174 */ 			if (__t__ (colno !== null)) {
/* 000175 */ 				return (function () {
/* 000175 */ 					var __accu0__ = '@ (line {}, col {})';
/* 000175 */ 					return __call__ (__accu0__.format, __accu0__, lineno, colno);
/* 000175 */ 				}) ();
/* 000175 */ 			}
/* 000176 */ 			return (function () {
/* 000176 */ 				var __accu0__ = '@ line {}';
/* 000176 */ 				return __call__ (__accu0__.format, __accu0__, lineno);
/* 000176 */ 			}) ();
/* 000176 */ 		}
/* 000177 */ 		if (__t__ (pos !== null)) {
/* 000178 */ 			return (function () {
/* 000178 */ 				var __accu0__ = '@ char pos {}';
/* 000178 */ 				return __call__ (__accu0__.format, __accu0__, pos);
/* 000178 */ 			}) ();
/* 000178 */ 		}
/* 000179 */ 		return '@ <unknown>';
/* 000179 */ 	});}
/* 000179 */ });
/* 000184 */ export var LatexWalkerTokenParseError =  __class__ ('LatexWalkerTokenParseError', [LatexWalkerParseError], {
/* 000184 */ 	__module__: __name__,
/* 000208 */ 	get __init__ () {return __get__ (this, function (self, recovery_token_placeholder, recovery_token_at_pos) {
/* 000208 */ 		var kwargs = dict ();
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'recovery_token_placeholder': var recovery_token_placeholder = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'recovery_token_at_pos': var recovery_token_at_pos = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 				delete kwargs.__kwargtrans__;
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000209 */ 		__call__ (__call__ (__super__, null, LatexWalkerTokenParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000210 */ 		self.recovery_token_placeholder = recovery_token_placeholder;
/* 000211 */ 		self.recovery_token_at_pos = recovery_token_at_pos;
/* 000211 */ 	});}
/* 000211 */ });
/* 000214 */ export var LatexWalkerNodesParseError =  __class__ ('LatexWalkerNodesParseError', [LatexWalkerParseError], {
/* 000214 */ 	__module__: __name__,
/* 000254 */ 	get __init__ () {return __get__ (this, function (self, recovery_nodes, recovery_carryover_info, recovery_at_token, recovery_past_token) {
/* 000254 */ 		if (typeof recovery_nodes == 'undefined' || (recovery_nodes != null && recovery_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000254 */ 			var recovery_nodes = null;
/* 000254 */ 		};
/* 000254 */ 		if (typeof recovery_carryover_info == 'undefined' || (recovery_carryover_info != null && recovery_carryover_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000254 */ 			var recovery_carryover_info = null;
/* 000254 */ 		};
/* 000254 */ 		if (typeof recovery_at_token == 'undefined' || (recovery_at_token != null && recovery_at_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000254 */ 			var recovery_at_token = null;
/* 000254 */ 		};
/* 000254 */ 		if (typeof recovery_past_token == 'undefined' || (recovery_past_token != null && recovery_past_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000254 */ 			var recovery_past_token = null;
/* 000254 */ 		};
/* 000254 */ 		var kwargs = dict ();
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'recovery_nodes': var recovery_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'recovery_carryover_info': var recovery_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'recovery_at_token': var recovery_at_token = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'recovery_past_token': var recovery_past_token = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 				delete kwargs.__kwargtrans__;
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000260 */ 		__call__ (__call__ (__super__, null, LatexWalkerNodesParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000261 */ 		self.recovery_nodes = recovery_nodes;
/* 000262 */ 		self.recovery_carryover_info = recovery_carryover_info;
/* 000263 */ 		self.recovery_at_token = recovery_at_token;
/* 000264 */ 		self.recovery_past_token = recovery_past_token;
/* 000264 */ 	});}
/* 000264 */ });
/* 000269 */ export var LatexWalkerEndOfStream =  __class__ ('LatexWalkerEndOfStream', [LatexWalkerError], {
/* 000269 */ 	__module__: __name__,
/* 000282 */ 	get __init__ () {return __get__ (this, function (self, final_space) {
/* 000282 */ 		if (typeof final_space == 'undefined' || (final_space != null && final_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000282 */ 			var final_space = '';
/* 000282 */ 		};
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'final_space': var final_space = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000283 */ 		__call__ (__call__ (__super__, null, LatexWalkerEndOfStream, '__init__'), null, self);
/* 000284 */ 		self.final_space = final_space;
/* 000284 */ 	});}
/* 000284 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._exctypes.map