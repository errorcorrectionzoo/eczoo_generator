/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:37:13
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000037 */ import {ParsedMacroArgs} from './pylatexenc.latexnodes._parsedargs.js';
/* 000037 */ export {ParsedMacroArgs};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._token';
/* 000041 */ export var _unicode_from_str = (function __lambda__ (x) {
/* 000041 */ 	if (arguments.length) {
/* 000041 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 				switch (__attrib0__) {
/* 000041 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 	}
/* 000041 */ 	else {
/* 000041 */ 	}
/* 000041 */ 	return x;
/* 000041 */ });
/* 000052 */ export var LatexToken =  __class__ ('LatexToken', [object], {
/* 000052 */ 	__module__: __name__,
/* 000155 */ 	get __init__ () {return __get__ (this, function (self, tok, arg, pos, pos_end, pre_space, post_space) {
/* 000155 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000155 */ 			var pos_end = null;
/* 000155 */ 		};
/* 000155 */ 		if (typeof pre_space == 'undefined' || (pre_space != null && pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000155 */ 			var pre_space = '';
/* 000155 */ 		};
/* 000155 */ 		if (typeof post_space == 'undefined' || (post_space != null && post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000155 */ 			var post_space = '';
/* 000155 */ 		};
/* 000155 */ 		var kwargs = dict ();
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'post_space': var post_space = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 				delete kwargs.__kwargtrans__;
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000157 */ 		var len_ = (function () {
/* 000157 */ 			var __accu0__ = kwargs;
/* 000157 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000157 */ 		}) ();
/* 000159 */ 		self.tok = tok;
/* 000160 */ 		self.arg = arg;
/* 000161 */ 		self.pos = pos;
/* 000162 */ 		self.pos_end = pos_end;
/* 000163 */ 		self.pre_space = pre_space;
/* 000164 */ 		self.post_space = post_space;
/* 000166 */ 		if (__t__ (__t__ (pos_end === null) && __t__ (len_ !== null) && pos !== null)) {
/* 000167 */ 			self.pos_end = __add__ (pos, len_);
/* 000167 */ 		}
/* 000169 */ 		if (__t__ (kwargs)) {
/* 000170 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected arguments to LatexToken(): ', __call__ (repr, null, kwargs)));
/* 000170 */ 			__except0__.__cause__ = null;
/* 000170 */ 			throw __except0__;
/* 000170 */ 		}
/* 000172 */ 		self._fields = ['tok', 'arg', 'pos', 'pos_end', 'pre_space'];
/* 000173 */ 		if (__t__ (__in__ (self.tok, tuple (['macro', 'comment'])))) {
/* 000174 */ 			(function () {
/* 000174 */ 				var __accu0__ = self._fields;
/* 000174 */ 				return __call__ (__accu0__.append, __accu0__, 'post_space');
/* 000174 */ 			}) ();
/* 000174 */ 		}
/* 000175 */ 		__call__ (__call__ (__super__, null, LatexToken, '__init__'), null, self);
/* 000175 */ 	});},
/* 000178 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000178 */ 		if (arguments.length) {
/* 000178 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 					switch (__attrib0__) {
/* 000178 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 		}
/* 000178 */ 		else {
/* 000178 */ 		}
/* 000179 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000180 */ 			return null;
/* 000180 */ 		}
/* 000181 */ 		return __sub__ (self.pos_end, self.pos);
/* 000181 */ 	});},
/* 000183 */ 	get __unicode__ () {return __get__ (this, function (self) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000184 */ 			var __accu0__ = self;
/* 000184 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000184 */ 		}) ());
/* 000184 */ 	});},
/* 000186 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000189 */ 		return __add__ (__add__ ('LatexToken(', (function () {
/* 000189 */ 			var __accu0__ = ', ';
/* 000189 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000189 */ 				var __accu1__ = [];
/* 000189 */ 				var __iterable0__ = self._fields;
/* 000189 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000190 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000190 */ 					(function () {
/* 000190 */ 						var __accu2__ = __accu1__;
/* 000189 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000189 */ 							var __accu3__ = '{}={!r}';
/* 000189 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000189 */ 						}) ());
/* 000189 */ 					}) ();
/* 000189 */ 				}
/* 000189 */ 				return __accu1__;
/* 000189 */ 			}) ());
/* 000189 */ 		}) ()), ')');
/* 000189 */ 	});},
/* 000194 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000195 */ 		return (function () {
/* 000195 */ 			var __accu0__ = self;
/* 000195 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000195 */ 		}) ();
/* 000195 */ 	});},
/* 000197 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000198 */ 		return __call__ (all, null, (function () {
/* 000198 */ 			var __accu0__ = [];
/* 000198 */ 			var __iterable0__ = self._fields;
/* 000198 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000198 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000198 */ 				(function () {
/* 000198 */ 					var __accu1__ = __accu0__;
/* 000198 */ 					return __call__ (__accu1__.append, __accu1__, __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000198 */ 				}) ();
/* 000198 */ 			}
/* 000198 */ 			return py_iter (__accu0__);
/* 000198 */ 		}) ());
/* 000198 */ 	});},
/* 000201 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000201 */ 		return NotImplemented;
/* 000201 */ 	});},
/* 000203 */ 	__hash__: null
/* 000203 */ });
/* 000203 */ Object.defineProperty (LatexToken, 'len', property.call (LatexToken, LatexToken._get_len));;
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._token.map