/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 00:56:58
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
/* 000060 */ export var __all__ = ['LatexWalkerError', 'LatexWalkerParseError', 'LatexWalkerNodesParseError', 'LatexWalkerTokenParseError', 'LatexWalkerEndOfStream'];
/* 000070 */ export var LatexWalkerError =  __class__ ('LatexWalkerError', [Exception], {
/* 000070 */ 	__module__: __name__,
/* 000070 */ });
/* 000077 */ export var LatexWalkerParseError =  __class__ ('LatexWalkerParseError', [LatexWalkerError], {
/* 000077 */ 	__module__: __name__,
/* 000106 */ 	get __init__ () {return __get__ (this, function (self, msg, s, pos, lineno, colno) {
/* 000106 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000106 */ 			var s = null;
/* 000106 */ 		};
/* 000106 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000106 */ 			var pos = null;
/* 000106 */ 		};
/* 000106 */ 		if (typeof lineno == 'undefined' || (lineno != null && lineno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000106 */ 			var lineno = null;
/* 000106 */ 		};
/* 000106 */ 		if (typeof colno == 'undefined' || (colno != null && colno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000106 */ 			var colno = null;
/* 000106 */ 		};
/* 000106 */ 		var kwargs = dict ();
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 				delete kwargs.__kwargtrans__;
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000107 */ 		self.input_source = (function () {
/* 000107 */ 			var __accu0__ = kwargs;
/* 000107 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'input_source', null);
/* 000107 */ 		}) ();
/* 000108 */ 		self.msg = msg;
/* 000109 */ 		self.s = s;
/* 000110 */ 		self.pos = pos;
/* 000111 */ 		self.lineno = lineno;
/* 000112 */ 		self.colno = colno;
/* 000113 */ 		self.open_contexts = (function () {
/* 000113 */ 			var __accu0__ = kwargs;
/* 000113 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'open_contexts', []);
/* 000113 */ 		}) ();
/* 000115 */ 		if (__t__ (kwargs)) {
/* 000117 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword argument(s) to LatexWalkerParseError(): ', __call__ (repr, null, kwargs)));
/* 000117 */ 			__except0__.__cause__ = null;
/* 000117 */ 			throw __except0__;
/* 000117 */ 		}
/* 000119 */ 		__call__ (__call__ (__super__, null, LatexWalkerParseError, '__init__'), null, self, (function () {
/* 000119 */ 			var __accu0__ = self;
/* 000119 */ 			return __call__ (__accu0__._dispstr, __accu0__);
/* 000119 */ 		}) ());
/* 000119 */ 	});},
/* 000121 */ 	get _dispstr () {return __get__ (this, function (self) {
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
/* 000122 */ 		var msg = self.msg;
/* 000123 */ 		if (__t__ (self.input_source)) {
/* 000124 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000124 */ 				var __accu0__ = '  in {}';
/* 000124 */ 				return __call__ (__accu0__.format, __accu0__, self.input_source);
/* 000124 */ 			}) ());
/* 000124 */ 		}
/* 000125 */ 		var disp = __add__ (msg, (function () {
/* 000125 */ 			var __accu0__ = ' {}';
/* 000125 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000125 */ 				var __accu1__ = self;
/* 000125 */ 				return __call__ (__accu1__._fmt_pos, __accu1__, self.pos, self.lineno, self.colno);
/* 000125 */ 			}) ());
/* 000125 */ 		}) ());
/* 000126 */ 		if (__t__ (self.open_contexts)) {
/* 000127 */ 			var disp = __call__ (__iadd__, null, disp, '\nOpen LaTeX blocks:\n');
/* 000128 */ 			var __iterable0__ = __call__ (py_reversed, null, self.open_contexts);
/* 000128 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000128 */ 				var context = __getitem__ (__iterable0__, __index0__);
/* 000129 */ 				var __left0__ = context;
/* 000129 */ 				var what = __left0__ [0];
/* 000129 */ 				var pos = __left0__ [1];
/* 000129 */ 				var lineno = __left0__ [2];
/* 000129 */ 				var colno = __left0__ [3];
/* 000130 */ 				var disp = __call__ (__iadd__, null, disp, (function () {
/* 000130 */ 					var __accu0__ = '{empty:8}{loc:>10}  {what}\n';
/* 000131 */ 					return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({empty: '', loc: (function () {
/* 000131 */ 						var __accu1__ = self;
/* 000131 */ 						return __call__ (__accu1__._fmt_pos, __accu1__, pos, lineno, colno);
/* 000131 */ 					}) (), what: what}));
/* 000131 */ 				}) ());
/* 000131 */ 			}
/* 000131 */ 		}
/* 000133 */ 		return disp;
/* 000133 */ 	});},
/* 000135 */ 	get _fmt_pos () {return __get__ (this, function (self, pos, lineno, colno) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000136 */ 		if (__t__ (lineno !== null)) {
/* 000137 */ 			if (__t__ (colno !== null)) {
/* 000138 */ 				return (function () {
/* 000138 */ 					var __accu0__ = '@({},{})';
/* 000138 */ 					return __call__ (__accu0__.format, __accu0__, lineno, colno);
/* 000138 */ 				}) ();
/* 000138 */ 			}
/* 000139 */ 			return (function () {
/* 000139 */ 				var __accu0__ = '@{}';
/* 000139 */ 				return __call__ (__accu0__.format, __accu0__, lineno);
/* 000139 */ 			}) ();
/* 000139 */ 		}
/* 000140 */ 		if (__t__ (pos !== null)) {
/* 000141 */ 			return (function () {
/* 000141 */ 				var __accu0__ = '@ char pos {}';
/* 000141 */ 				return __call__ (__accu0__.format, __accu0__, pos);
/* 000141 */ 			}) ();
/* 000141 */ 		}
/* 000142 */ 		return '@ <unknown>';
/* 000142 */ 	});},
/* 000144 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000145 */ 		return (function () {
/* 000145 */ 			var __accu0__ = self;
/* 000145 */ 			return __call__ (__accu0__._dispstr, __accu0__);
/* 000145 */ 		}) ();
/* 000145 */ 	});}
/* 000145 */ });
/* 000169 */ export var LatexWalkerTokenParseError =  __class__ ('LatexWalkerTokenParseError', [LatexWalkerParseError], {
/* 000169 */ 	__module__: __name__,
/* 000193 */ 	get __init__ () {return __get__ (this, function (self, recovery_token_placeholder, recovery_token_at_pos) {
/* 000193 */ 		var kwargs = dict ();
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'recovery_token_placeholder': var recovery_token_placeholder = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'recovery_token_at_pos': var recovery_token_at_pos = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 				delete kwargs.__kwargtrans__;
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000194 */ 		__call__ (__call__ (__super__, null, LatexWalkerTokenParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000195 */ 		self.recovery_token_placeholder = recovery_token_placeholder;
/* 000196 */ 		self.recovery_token_at_pos = recovery_token_at_pos;
/* 000196 */ 	});}
/* 000196 */ });
/* 000199 */ export var LatexWalkerNodesParseError =  __class__ ('LatexWalkerNodesParseError', [LatexWalkerParseError], {
/* 000199 */ 	__module__: __name__,
/* 000239 */ 	get __init__ () {return __get__ (this, function (self, recovery_nodes, recovery_carryover_info, recovery_at_token, recovery_past_token) {
/* 000239 */ 		if (typeof recovery_nodes == 'undefined' || (recovery_nodes != null && recovery_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var recovery_nodes = null;
/* 000239 */ 		};
/* 000239 */ 		if (typeof recovery_carryover_info == 'undefined' || (recovery_carryover_info != null && recovery_carryover_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var recovery_carryover_info = null;
/* 000239 */ 		};
/* 000239 */ 		if (typeof recovery_at_token == 'undefined' || (recovery_at_token != null && recovery_at_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var recovery_at_token = null;
/* 000239 */ 		};
/* 000239 */ 		if (typeof recovery_past_token == 'undefined' || (recovery_past_token != null && recovery_past_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var recovery_past_token = null;
/* 000239 */ 		};
/* 000239 */ 		var kwargs = dict ();
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'recovery_nodes': var recovery_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'recovery_carryover_info': var recovery_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'recovery_at_token': var recovery_at_token = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'recovery_past_token': var recovery_past_token = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 				delete kwargs.__kwargtrans__;
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000245 */ 		__call__ (__call__ (__super__, null, LatexWalkerNodesParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000246 */ 		self.recovery_nodes = recovery_nodes;
/* 000247 */ 		self.recovery_carryover_info = recovery_carryover_info;
/* 000248 */ 		self.recovery_at_token = recovery_at_token;
/* 000249 */ 		self.recovery_past_token = recovery_past_token;
/* 000249 */ 	});}
/* 000249 */ });
/* 000254 */ export var LatexWalkerEndOfStream =  __class__ ('LatexWalkerEndOfStream', [LatexWalkerError], {
/* 000254 */ 	__module__: __name__,
/* 000267 */ 	get __init__ () {return __get__ (this, function (self, final_space) {
/* 000267 */ 		if (typeof final_space == 'undefined' || (final_space != null && final_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000267 */ 			var final_space = '';
/* 000267 */ 		};
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'final_space': var final_space = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000268 */ 		__call__ (__call__ (__super__, null, LatexWalkerEndOfStream, '__init__'), null, self);
/* 000269 */ 		self.final_space = final_space;
/* 000269 */ 	});}
/* 000269 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._exctypes.map