/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:04
/* 000014 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000015 */ import {translate} from './re.translate.js';
/* 000014 */ export {translate};
/* 000001 */ var __name__ = 're';
/* 000019 */ export var T = __lshift__ (1, 0);
/* 000020 */ export var TEMPLATE = T;
/* 000022 */ export var I = __lshift__ (1, 1);
/* 000023 */ export var IGNORECASE = I;
/* 000026 */ export var L = __lshift__ (1, 2);
/* 000027 */ export var LOCALE = L;
/* 000029 */ export var M = __lshift__ (1, 3);
/* 000030 */ export var MULTILINE = M;
/* 000032 */ export var S = __lshift__ (1, 4);
/* 000033 */ export var DOTALL = S;
/* 000035 */ export var U = __lshift__ (1, 5);
/* 000036 */ export var UNICODE = U;
/* 000037 */ export var X = __lshift__ (1, 6);
/* 000038 */ export var VERBOSE = X;
/* 000039 */ export var DEBUG = __lshift__ (1, 7);
/* 000041 */ export var A = __lshift__ (1, 8);
/* 000042 */ export var ASCII = A;
/* 000045 */ export var Y = __lshift__ (1, 16);
/* 000046 */ export var STICKY = Y;
/* 000047 */ export var G = __lshift__ (1, 17);
/* 000048 */ export var GLOBAL = G;
/* 000052 */ export var J = __lshift__ (1, 19);
/* 000053 */ export var JSSTRICT = J;
/* 000057 */ export var error =  __class__ ('error', [Exception], {
/* 000057 */ 	__module__: __name__,
/* 000060 */ 	get __init__ () {return __get__ (this, function (self, msg, error, pattern, flags, pos) {
/* 000060 */ 		if (typeof pattern == 'undefined' || (pattern != null && pattern.hasOwnProperty ("__kwargtrans__"))) {;
/* 000060 */ 			var pattern = null;
/* 000060 */ 		};
/* 000060 */ 		if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000060 */ 			var flags = 0;
/* 000060 */ 		};
/* 000060 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000060 */ 			var pos = null;
/* 000060 */ 		};
/* 000060 */ 		if (arguments.length) {
/* 000060 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000060 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000060 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000060 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000060 */ 					switch (__attrib0__) {
/* 000060 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'error': var error = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 					}
/* 000060 */ 				}
/* 000060 */ 			}
/* 000060 */ 		}
/* 000060 */ 		else {
/* 000060 */ 		}
/* 000063 */ 		(function () {
/* 000063 */ 			var __accu0__ = Exception;
/* 000063 */ 			return __call__ (__accu0__.__init__, __accu0__, self, msg, __kwargtrans__ ({error: error}));
/* 000063 */ 		}) ();
/* 000064 */ 		self.pattern = pattern;
/* 000065 */ 		self.flags = flags;
/* 000066 */ 		self.pos = pos;
/* 000066 */ 	});}
/* 000066 */ });
/* 000069 */ export var ReIndexError =  __class__ ('ReIndexError', [IndexError], {
/* 000069 */ 	__module__: __name__,
/* 000073 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000074 */ 		(function () {
/* 000074 */ 			var __accu0__ = IndexError;
/* 000074 */ 			return __call__ (__accu0__.__init__, __accu0__, self, 'no such group');
/* 000074 */ 		}) ();
/* 000074 */ 	});}
/* 000074 */ });
/* 000076 */ export var Match =  __class__ ('Match', [object], {
/* 000076 */ 	__module__: __name__,
/* 000079 */ 	get __init__ () {return __get__ (this, function (self, mObj, string, pos, endpos, rObj, namedGroups) {
/* 000079 */ 		if (typeof namedGroups == 'undefined' || (namedGroups != null && namedGroups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000079 */ 			var namedGroups = null;
/* 000079 */ 		};
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'mObj': var mObj = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'endpos': var endpos = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'rObj': var rObj = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'namedGroups': var namedGroups = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000087 */ 		var __iterable0__ = __call__ (enumerate, null, mObj);
/* 000087 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000087 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000087 */ 			var index = __left0__ [0];
/* 000087 */ 			var match = __left0__ [1];
/* 000088 */ 			__setitem__ (mObj, index, (__t__ (__eq__ (__getitem__ (mObj, index), undefined)) ? null : __getitem__ (mObj, index)));
/* 000088 */ 		}
/* 000089 */ 		self._obj = mObj;
/* 000091 */ 		self._pos = pos;
/* 000092 */ 		self._endpos = endpos;
/* 000093 */ 		self._re = rObj;
/* 000094 */ 		self._string = string;
/* 000096 */ 		self._namedGroups = namedGroups;
/* 000098 */ 		self._lastindex = (function () {
/* 000098 */ 			var __accu0__ = self;
/* 000098 */ 			return __call__ (__accu0__._lastMatchGroup, __accu0__);
/* 000098 */ 		}) ();
/* 000099 */ 		if (__t__ (self._namedGroups !== null)) {
/* 000100 */ 			self._lastgroup = __getitem__ (self._namedGroups, self._lastindex);
/* 000100 */ 		}
/* 000101 */ 		else {
/* 000105 */ 			self._lastgroup = null;
/* 000105 */ 		}
/* 000105 */ 	});},
/* 000108 */ 	get _getPos () {return __get__ (this, function (self) {
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
/* 000109 */ 		return self._pos;
/* 000109 */ 	});},
/* 000110 */ 	get _setPos () {return __get__ (this, function (self, val) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000111 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000111 */ 		__except0__.__cause__ = null;
/* 000111 */ 		throw __except0__;
/* 000111 */ 	});},
/* 000114 */ 	get _getEndPos () {return __get__ (this, function (self) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000115 */ 		return self._endpos;
/* 000115 */ 	});},
/* 000116 */ 	get _setEndPos () {return __get__ (this, function (self, val) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000117 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000117 */ 		__except0__.__cause__ = null;
/* 000117 */ 		throw __except0__;
/* 000117 */ 	});},
/* 000120 */ 	get _getRe () {return __get__ (this, function (self) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000121 */ 		return self._re;
/* 000121 */ 	});},
/* 000122 */ 	get _setRe () {return __get__ (this, function (self, val) {
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000123 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000123 */ 		__except0__.__cause__ = null;
/* 000123 */ 		throw __except0__;
/* 000123 */ 	});},
/* 000126 */ 	get _getString () {return __get__ (this, function (self) {
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000127 */ 		return self._string;
/* 000127 */ 	});},
/* 000128 */ 	get _setString () {return __get__ (this, function (self, val) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000129 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000129 */ 		__except0__.__cause__ = null;
/* 000129 */ 		throw __except0__;
/* 000129 */ 	});},
/* 000132 */ 	get _getLastGroup () {return __get__ (this, function (self) {
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000133 */ 		return self._lastgroup;
/* 000133 */ 	});},
/* 000134 */ 	get _setLastGroup () {return __get__ (this, function (self, val) {
/* 000134 */ 		if (arguments.length) {
/* 000134 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000134 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000134 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000134 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000134 */ 					switch (__attrib0__) {
/* 000134 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 					}
/* 000134 */ 				}
/* 000134 */ 			}
/* 000134 */ 		}
/* 000134 */ 		else {
/* 000134 */ 		}
/* 000135 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000135 */ 		__except0__.__cause__ = null;
/* 000135 */ 		throw __except0__;
/* 000135 */ 	});},
/* 000138 */ 	get _getLastIndex () {return __get__ (this, function (self) {
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000139 */ 		return self._lastindex;
/* 000139 */ 	});},
/* 000140 */ 	get _setLastIndex () {return __get__ (this, function (self, val) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000141 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000141 */ 		__except0__.__cause__ = null;
/* 000141 */ 		throw __except0__;
/* 000141 */ 	});},
/* 000144 */ 	get _lastMatchGroup () {return __get__ (this, function (self) {
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
/* 000147 */ 		if (__t__ (__gt__ (__call__ (len, null, self._obj), 1))) {
/* 000148 */ 			for (var i = __sub__ (__call__ (len, null, self._obj), 1); i > 0; i--) {
/* 000149 */ 				if (__t__ (__getitem__ (self._obj, i) !== null)) {
/* 000150 */ 					return i;
/* 000150 */ 				}
/* 000150 */ 			}
/* 000153 */ 			return null;
/* 000153 */ 		}
/* 000154 */ 		else {
/* 000156 */ 			return null;
/* 000156 */ 		}
/* 000156 */ 	});},
/* 000158 */ 	get expand () {return __get__ (this, function (self, template) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'template': var template = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000161 */ 		var __except0__ = __call__ (NotImplementedError, null);
/* 000161 */ 		__except0__.__cause__ = null;
/* 000161 */ 		throw __except0__;
/* 000161 */ 	});},
/* 000163 */ 	get group () {return __get__ (this, function (self) {
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 			var args = tuple ();
/* 000163 */ 		}
/* 000168 */ 		var ret = [];
/* 000169 */ 		if (__t__ (__gt__ (__call__ (len, null, args), 0))) {
/* 000170 */ 			var __iterable0__ = args;
/* 000170 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000170 */ 				var index = __getitem__ (__iterable0__, __index0__);
/* 000171 */ 				if (__t__ (py_typeof (index) === str)) {
/* 000172 */ 					if (__t__ (self._namedGroups !== null)) {
/* 000173 */ 						if (__t__ (!__in__ (index, (function () {
/* 000173 */ 							var __accu0__ = self._namedGroups;
/* 000173 */ 							return __call__ (__accu0__.py_keys, __accu0__);
/* 000173 */ 						}) ()))) {
/* 000174 */ 							var __except0__ = __call__ (ReIndexError, null);
/* 000174 */ 							__except0__.__cause__ = null;
/* 000174 */ 							throw __except0__;
/* 000174 */ 						}
/* 000175 */ 						(function () {
/* 000175 */ 							var __accu0__ = ret;
/* 000175 */ 							return __call__ (__accu0__.append, __accu0__, __getitem__ (self._obj, __getitem__ (self._namedGroups, index)));
/* 000175 */ 						}) ();
/* 000175 */ 					}
/* 000176 */ 					else {
/* 000177 */ 						var __except0__ = __call__ (NotImplementedError, null, 'No NamedGroups Available');
/* 000177 */ 						__except0__.__cause__ = null;
/* 000177 */ 						throw __except0__;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000178 */ 				else {
/* 000179 */ 					if (__t__ (__ge__ (index, __call__ (len, null, self._obj)))) {
/* 000183 */ 						var __except0__ = __call__ (ReIndexError, null);
/* 000183 */ 						__except0__.__cause__ = null;
/* 000183 */ 						throw __except0__;
/* 000183 */ 					}
/* 000184 */ 					(function () {
/* 000184 */ 						var __accu0__ = ret;
/* 000184 */ 						return __call__ (__accu0__.append, __accu0__, __getitem__ (self._obj, index));
/* 000184 */ 					}) ();
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000185 */ 		else {
/* 000186 */ 			(function () {
/* 000186 */ 				var __accu0__ = ret;
/* 000186 */ 				return __call__ (__accu0__.append, __accu0__, __getitem__ (self._obj, 0));
/* 000186 */ 			}) ();
/* 000186 */ 		}
/* 000188 */ 		if (__t__ (__eq__ (__call__ (len, null, ret), 1))) {
/* 000189 */ 			return __getitem__ (ret, 0);
/* 000189 */ 		}
/* 000190 */ 		else {
/* 000191 */ 			return __call__ (tuple, null, ret);
/* 000191 */ 		}
/* 000191 */ 	});},
/* 000193 */ 	get groups () {return __get__ (this, function (self, py_default) {
/* 000193 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000193 */ 			var py_default = null;
/* 000193 */ 		};
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000198 */ 		if (__t__ (__gt__ (__call__ (len, null, self._obj), 1))) {
/* 000199 */ 			var ret = __getslice__ (self._obj, 1, null, 1);
/* 000200 */ 			return __call__ (tuple, null, (function () {
/* 000200 */ 				var __accu0__ = [];
/* 000200 */ 				var __iterable0__ = ret;
/* 000200 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000200 */ 					var x = __getitem__ (__iterable0__, __index0__);
/* 000200 */ 					(function () {
/* 000200 */ 						var __accu1__ = __accu0__;
/* 000200 */ 						return __call__ (__accu1__.append, __accu1__, (__t__ (x !== null) ? x : py_default));
/* 000200 */ 					}) ();
/* 000200 */ 				}
/* 000200 */ 				return __accu0__;
/* 000200 */ 			}) ());
/* 000200 */ 		}
/* 000201 */ 		else {
/* 000202 */ 			return __call__ (tuple, null);
/* 000202 */ 		}
/* 000202 */ 	});},
/* 000204 */ 	get groupdict () {return __get__ (this, function (self, py_default) {
/* 000204 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000204 */ 			var py_default = null;
/* 000204 */ 		};
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000210 */ 		if (__t__ (self._namedGroups !== null)) {
/* 000211 */ 			var ret = dict ({});
/* 000212 */ 			var __iterable0__ = (function () {
/* 000212 */ 				var __accu0__ = self._namedGroups;
/* 000212 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000212 */ 			}) ();
/* 000212 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000212 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000212 */ 				var gName = __left0__ [0];
/* 000212 */ 				var gId = __left0__ [1];
/* 000213 */ 				var value = __getitem__ (self._obj, gId);
/* 000214 */ 				__setitem__ (ret, gName, (__t__ (value !== null) ? value : py_default));
/* 000214 */ 			}
/* 000215 */ 			return ret;
/* 000215 */ 		}
/* 000216 */ 		else {
/* 000218 */ 			var __except0__ = __call__ (NotImplementedError, null, 'No NamedGroups Available');
/* 000218 */ 			__except0__.__cause__ = null;
/* 000218 */ 			throw __except0__;
/* 000218 */ 		}
/* 000218 */ 	});},
/* 000220 */ 	get start () {return __get__ (this, function (self, group) {
/* 000220 */ 		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {;
/* 000220 */ 			var group = 0;
/* 000220 */ 		};
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'group': var group = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000230 */ 		var gId = 0;
/* 000231 */ 		if (__t__ (py_typeof (group) === str)) {
/* 000232 */ 			if (__t__ (self._namedGroups !== null)) {
/* 000233 */ 				if (__t__ (!__in__ (group, (function () {
/* 000233 */ 					var __accu0__ = self._namedGroups;
/* 000233 */ 					return __call__ (__accu0__.py_keys, __accu0__);
/* 000233 */ 				}) ()))) {
/* 000234 */ 					var __except0__ = __call__ (ReIndexError, null);
/* 000234 */ 					__except0__.__cause__ = null;
/* 000234 */ 					throw __except0__;
/* 000234 */ 				}
/* 000235 */ 				var gId = __getitem__ (self._namedGroups, group);
/* 000235 */ 			}
/* 000236 */ 			else {
/* 000237 */ 				var __except0__ = __call__ (NotImplementedError, null, 'No NamedGroups Available');
/* 000237 */ 				__except0__.__cause__ = null;
/* 000237 */ 				throw __except0__;
/* 000237 */ 			}
/* 000237 */ 		}
/* 000238 */ 		else {
/* 000239 */ 			var gId = group;
/* 000239 */ 		}
/* 000241 */ 		if (__t__ (__ge__ (gId, __call__ (len, null, self._obj)))) {
/* 000242 */ 			var __except0__ = __call__ (ReIndexError, null);
/* 000242 */ 			__except0__.__cause__ = null;
/* 000242 */ 			throw __except0__;
/* 000242 */ 		}
/* 000244 */ 		if (__t__ (__eq__ (gId, 0))) {
/* 000245 */ 			return self._obj.index;
/* 000245 */ 		}
/* 000256 */ 		else if (__t__ (__getitem__ (self._obj, gId) !== null)) {
/* 000257 */ 			var r = __call__ (compile, null, __call__ (escape, null, __getitem__ (self._obj, gId)), self._re.flags);
/* 000258 */ 			var m = (function () {
/* 000258 */ 				var __accu0__ = r;
/* 000258 */ 				return __call__ (__accu0__.search, __accu0__, __getitem__ (self._obj, 0));
/* 000258 */ 			}) ();
/* 000259 */ 			if (__t__ (m)) {
/* 000260 */ 				return __add__ (self._obj.index, (function () {
/* 000260 */ 					var __accu0__ = m;
/* 000260 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000260 */ 				}) ());
/* 000260 */ 			}
/* 000261 */ 			else {
/* 000262 */ 				var __except0__ = __call__ (Exception, null, 'Failed to find capture group');
/* 000262 */ 				__except0__.__cause__ = null;
/* 000262 */ 				throw __except0__;
/* 000262 */ 			}
/* 000262 */ 		}
/* 000263 */ 		else {
/* 000265 */ 			return __neg__ (1);
/* 000265 */ 		}
/* 000265 */ 	});},
/* 000267 */ 	get end () {return __get__ (this, function (self, group) {
/* 000267 */ 		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {;
/* 000267 */ 			var group = 0;
/* 000267 */ 		};
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'group': var group = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000277 */ 		var gId = 0;
/* 000278 */ 		if (__t__ (py_typeof (group) === str)) {
/* 000279 */ 			if (__t__ (self._namedGroups !== null)) {
/* 000280 */ 				if (__t__ (!__in__ (group, (function () {
/* 000280 */ 					var __accu0__ = self._namedGroups;
/* 000280 */ 					return __call__ (__accu0__.py_keys, __accu0__);
/* 000280 */ 				}) ()))) {
/* 000281 */ 					var __except0__ = __call__ (ReIndexError, null);
/* 000281 */ 					__except0__.__cause__ = null;
/* 000281 */ 					throw __except0__;
/* 000281 */ 				}
/* 000282 */ 				var gId = __getitem__ (self._namedGroups, group);
/* 000282 */ 			}
/* 000283 */ 			else {
/* 000284 */ 				var __except0__ = __call__ (NotImplementedError, null, 'No NamedGroups Available');
/* 000284 */ 				__except0__.__cause__ = null;
/* 000284 */ 				throw __except0__;
/* 000284 */ 			}
/* 000284 */ 		}
/* 000285 */ 		else {
/* 000286 */ 			var gId = group;
/* 000286 */ 		}
/* 000288 */ 		if (__t__ (__ge__ (gId, __call__ (len, null, self._obj)))) {
/* 000289 */ 			var __except0__ = __call__ (ReIndexError, null);
/* 000289 */ 			__except0__.__cause__ = null;
/* 000289 */ 			throw __except0__;
/* 000289 */ 		}
/* 000291 */ 		if (__t__ (__eq__ (gId, 0))) {
/* 000292 */ 			return __add__ (self._obj.index, __call__ (len, null, __getitem__ (self._obj, 0)));
/* 000292 */ 		}
/* 000303 */ 		else if (__t__ (__getitem__ (self._obj, gId) !== null)) {
/* 000304 */ 			var r = __call__ (compile, null, __call__ (escape, null, __getitem__ (self._obj, gId)), self._re.flags);
/* 000305 */ 			var m = (function () {
/* 000305 */ 				var __accu0__ = r;
/* 000305 */ 				return __call__ (__accu0__.search, __accu0__, __getitem__ (self._obj, 0));
/* 000305 */ 			}) ();
/* 000306 */ 			if (__t__ (m)) {
/* 000307 */ 				return __add__ (self._obj.index, (function () {
/* 000307 */ 					var __accu0__ = m;
/* 000307 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000307 */ 				}) ());
/* 000307 */ 			}
/* 000308 */ 			else {
/* 000309 */ 				var __except0__ = __call__ (Exception, null, 'Failed to find capture group');
/* 000309 */ 				__except0__.__cause__ = null;
/* 000309 */ 				throw __except0__;
/* 000309 */ 			}
/* 000309 */ 		}
/* 000310 */ 		else {
/* 000312 */ 			return __neg__ (1);
/* 000312 */ 		}
/* 000312 */ 	});},
/* 000314 */ 	get span () {return __get__ (this, function (self, group) {
/* 000314 */ 		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {;
/* 000314 */ 			var group = 0;
/* 000314 */ 		};
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'group': var group = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 					}
/* 000314 */ 				}
/* 000314 */ 			}
/* 000314 */ 		}
/* 000314 */ 		else {
/* 000314 */ 		}
/* 000325 */ 		return tuple ([(function () {
/* 000325 */ 			var __accu0__ = self;
/* 000325 */ 			return __call__ (__accu0__.start, __accu0__, group);
/* 000325 */ 		}) (), (function () {
/* 000325 */ 			var __accu0__ = self;
/* 000325 */ 			return __call__ (__accu0__.end, __accu0__, group);
/* 000325 */ 		}) ()]);
/* 000325 */ 	});}
/* 000325 */ });
/* 000112 */ Object.defineProperty (Match, 'pos', property.call (Match, Match._getPos, Match._setPos));
/* 000118 */ Object.defineProperty (Match, 'endpos', property.call (Match, Match._getEndPos, Match._setEndPos));
/* 000124 */ Object.defineProperty (Match, 're', property.call (Match, Match._getRe, Match._setRe));
/* 000130 */ Object.defineProperty (Match, 'string', property.call (Match, Match._getString, Match._setString));
/* 000136 */ Object.defineProperty (Match, 'lastgroup', property.call (Match, Match._getLastGroup, Match._setLastGroup));
/* 000142 */ Object.defineProperty (Match, 'lastindex', property.call (Match, Match._getLastIndex, Match._setLastIndex));
/* 000327 */ export var Regex =  __class__ ('Regex', [object], {
/* 000327 */ 	__module__: __name__,
/* 000330 */ 	get __init__ () {return __get__ (this, function (self, pattern, flags) {
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000336 */ 		if (__t__ (!__t__ ((__gt__ ((__and__ (flags, ASCII)), 0))))) {
/* 000337 */ 			var flags = __call__ (__ior__, null, flags, UNICODE);
/* 000337 */ 		}
/* 000339 */ 		self._flags = flags;
/* 000340 */ 		var __left0__ = (function () {
/* 000340 */ 			var __accu0__ = self;
/* 000340 */ 			return __call__ (__accu0__._compileWrapper, __accu0__, pattern, flags);
/* 000340 */ 		}) ();
/* 000340 */ 		self._jsFlags = __left0__ [0];
/* 000340 */ 		self._obj = __left0__ [1];
/* 000341 */ 		self._jspattern = pattern;
/* 000344 */ 		self._pypattern = pattern;
/* 000348 */ 		var __left0__ = (function () {
/* 000348 */ 			var __accu0__ = self;
/* 000348 */ 			return __call__ (__accu0__._compileWrapper, __accu0__, __add__ (pattern, '|'), flags);
/* 000348 */ 		}) ();
/* 000348 */ 		var _ = __left0__ [0];
/* 000348 */ 		var groupCounterRegex = __left0__ [1];
/* 000349 */ 		self._groups = __sub__ ((function () {
/* 000349 */ 			var __accu0__ = groupCounterRegex;
/* 000349 */ 			return __call__ (__accu0__.exec, __accu0__, '');
/* 000349 */ 		}) ().length, 1);
/* 000352 */ 		self._groupindex = null;
/* 000352 */ 	});},
/* 000355 */ 	get _getPattern () {return __get__ (this, function (self) {
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000356 */ 		var ret = (function () {
/* 000356 */ 			var __accu0__ = self._pypattern;
/* 000356 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\\', '\\\\');
/* 000356 */ 		}) ();
/* 000357 */ 		return ret;
/* 000357 */ 	});},
/* 000358 */ 	get _setPattern () {return __get__ (this, function (self, val) {
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000359 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000359 */ 		__except0__.__cause__ = null;
/* 000359 */ 		throw __except0__;
/* 000359 */ 	});},
/* 000362 */ 	get _getFlags () {return __get__ (this, function (self) {
/* 000362 */ 		if (arguments.length) {
/* 000362 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 					switch (__attrib0__) {
/* 000362 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 		else {
/* 000362 */ 		}
/* 000363 */ 		return self._flags;
/* 000363 */ 	});},
/* 000364 */ 	get _setFlags () {return __get__ (this, function (self, val) {
/* 000364 */ 		if (arguments.length) {
/* 000364 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000364 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000364 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000364 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000364 */ 					switch (__attrib0__) {
/* 000364 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 					}
/* 000364 */ 				}
/* 000364 */ 			}
/* 000364 */ 		}
/* 000364 */ 		else {
/* 000364 */ 		}
/* 000365 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000365 */ 		__except0__.__cause__ = null;
/* 000365 */ 		throw __except0__;
/* 000365 */ 	});},
/* 000368 */ 	get _getGroups () {return __get__ (this, function (self) {
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000369 */ 		return self._groups;
/* 000369 */ 	});},
/* 000370 */ 	get _setGroups () {return __get__ (this, function (self, val) {
/* 000370 */ 		if (arguments.length) {
/* 000370 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000370 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000370 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000370 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000370 */ 					switch (__attrib0__) {
/* 000370 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 					}
/* 000370 */ 				}
/* 000370 */ 			}
/* 000370 */ 		}
/* 000370 */ 		else {
/* 000370 */ 		}
/* 000371 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000371 */ 		__except0__.__cause__ = null;
/* 000371 */ 		throw __except0__;
/* 000371 */ 	});},
/* 000374 */ 	get _getGroupIndex () {return __get__ (this, function (self) {
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000375 */ 		if (__t__ (self._groupindex === null)) {
/* 000376 */ 			return dict ({});
/* 000376 */ 		}
/* 000377 */ 		else {
/* 000378 */ 			return self._groupindex;
/* 000378 */ 		}
/* 000378 */ 	});},
/* 000379 */ 	get _setGroupIndex () {return __get__ (this, function (self, val) {
/* 000379 */ 		if (arguments.length) {
/* 000379 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 					switch (__attrib0__) {
/* 000379 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 		}
/* 000379 */ 		else {
/* 000379 */ 		}
/* 000380 */ 		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
/* 000380 */ 		__except0__.__cause__ = null;
/* 000380 */ 		throw __except0__;
/* 000380 */ 	});},
/* 000383 */ 	get _compileWrapper () {return __get__ (this, function (self, pattern, flags) {
/* 000383 */ 		if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000383 */ 			var flags = 0;
/* 000383 */ 		};
/* 000383 */ 		if (arguments.length) {
/* 000383 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 					switch (__attrib0__) {
/* 000383 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		else {
/* 000383 */ 		}
/* 000389 */ 		var jsFlags = (function () {
/* 000389 */ 			var __accu0__ = self;
/* 000389 */ 			return __call__ (__accu0__._convertFlags, __accu0__, flags);
/* 000389 */ 		}) ();
/* 000391 */ 		var rObj = null;
/* 000392 */ 		var errObj = null;
/* 000395 */ 		
/* 000395 */ 		                   try {
/* 000395 */ 		                     rObj = new RegExp(pattern, jsFlags)
/* 000395 */ 		                   } catch( err ) {
/* 000395 */ 		                     errObj = err
/* 000395 */ 		                   }
/* 000395 */ 		                   
/* 000404 */ 		if (__t__ (errObj !== null)) {
/* 000405 */ 			var __except0__ = __call__ (error, null, errObj.message, errObj, pattern, flags);
/* 000405 */ 			__except0__.__cause__ = null;
/* 000405 */ 			throw __except0__;
/* 000405 */ 		}
/* 000407 */ 		return tuple ([jsFlags, rObj]);
/* 000407 */ 	});},
/* 000409 */ 	get _convertFlags () {return __get__ (this, function (self, flags) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000413 */ 		var bitmaps = [tuple ([DEBUG, '']), tuple ([IGNORECASE, 'i']), tuple ([MULTILINE, 'm']), tuple ([STICKY, 'y']), tuple ([GLOBAL, 'g']), tuple ([UNICODE, 'u'])];
/* 000421 */ 		var ret = (function () {
/* 000421 */ 			var __accu0__ = '';
/* 000421 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000421 */ 				var __accu1__ = [];
/* 000421 */ 				var __iterable0__ = bitmaps;
/* 000421 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000421 */ 					var x = __getitem__ (__iterable0__, __index0__);
/* 000421 */ 					if (__t__ (__gt__ ((__and__ (__getitem__ (x, 0), flags)), 0))) {
/* 000421 */ 						(function () {
/* 000421 */ 							var __accu2__ = __accu1__;
/* 000421 */ 							return __call__ (__accu2__.append, __accu2__, __getitem__ (x, 1));
/* 000421 */ 						}) ();
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 				return __accu1__;
/* 000421 */ 			}) ());
/* 000421 */ 		}) ();
/* 000422 */ 		return ret;
/* 000422 */ 	});},
/* 000424 */ 	get _getTargetStr () {return __get__ (this, function (self, string, pos, endpos) {
/* 000424 */ 		if (arguments.length) {
/* 000424 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000424 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000424 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000424 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000424 */ 					switch (__attrib0__) {
/* 000424 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'endpos': var endpos = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 			}
/* 000424 */ 		}
/* 000424 */ 		else {
/* 000424 */ 		}
/* 000427 */ 		var endPtr = __call__ (len, null, string);
/* 000428 */ 		if (__t__ (endpos !== null)) {
/* 000429 */ 			if (__t__ (__lt__ (endpos, endPtr))) {
/* 000430 */ 				var endPtr = endpos;
/* 000430 */ 			}
/* 000430 */ 		}
/* 000431 */ 		if (__t__ (__lt__ (endPtr, 0))) {
/* 000432 */ 			var endPtr = 0;
/* 000432 */ 		}
/* 000433 */ 		var ret = __getslice__ (string, pos, endPtr, 1);
/* 000434 */ 		return ret;
/* 000434 */ 	});},
/* 000436 */ 	get _patternHasCaptures () {return __get__ (this, function (self) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000440 */ 		return __gt__ (self._groups, 0);
/* 000440 */ 	});},
/* 000442 */ 	get search () {return __get__ (this, function (self, string, pos, endpos) {
/* 000442 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000442 */ 			var pos = 0;
/* 000442 */ 		};
/* 000442 */ 		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000442 */ 			var endpos = null;
/* 000442 */ 		};
/* 000442 */ 		if (arguments.length) {
/* 000442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000442 */ 					switch (__attrib0__) {
/* 000442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'endpos': var endpos = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 					}
/* 000442 */ 				}
/* 000442 */ 			}
/* 000442 */ 		}
/* 000442 */ 		else {
/* 000442 */ 		}
/* 000446 */ 		if (__t__ (endpos === null)) {
/* 000447 */ 			var endpos = __call__ (len, null, string);
/* 000447 */ 		}
/* 000451 */ 		var rObj = self._obj;
/* 000452 */ 		var m = (function () {
/* 000452 */ 			var __accu0__ = rObj;
/* 000452 */ 			return __call__ (__accu0__.exec, __accu0__, string);
/* 000452 */ 		}) ();
/* 000453 */ 		if (__t__ (m)) {
/* 000454 */ 			if (__t__ (__t__ (__lt__ (m.index, pos)) || __gt__ (m.index, endpos))) {
/* 000455 */ 				return null;
/* 000455 */ 			}
/* 000456 */ 			else {
/* 000458 */ 				return __call__ (Match, null, m, string, pos, endpos, self, self._groupindex);
/* 000458 */ 			}
/* 000458 */ 		}
/* 000459 */ 		else {
/* 000460 */ 			return null;
/* 000460 */ 		}
/* 000460 */ 	});},
/* 000462 */ 	get match () {return __get__ (this, function (self, string, pos, endpos) {
/* 000462 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000462 */ 			var pos = 0;
/* 000462 */ 		};
/* 000462 */ 		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000462 */ 			var endpos = null;
/* 000462 */ 		};
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'endpos': var endpos = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000466 */ 		var target = string;
/* 000467 */ 		if (__t__ (endpos !== null)) {
/* 000468 */ 			var target = __getslice__ (target, 0, endpos, 1);
/* 000468 */ 		}
/* 000469 */ 		else {
/* 000470 */ 			var endpos = __call__ (len, null, string);
/* 000470 */ 		}
/* 000472 */ 		var rObj = self._obj;
/* 000473 */ 		var m = (function () {
/* 000473 */ 			var __accu0__ = rObj;
/* 000473 */ 			return __call__ (__accu0__.exec, __accu0__, target);
/* 000473 */ 		}) ();
/* 000474 */ 		if (__t__ (m)) {
/* 000476 */ 			if (__t__ (__eq__ (m.index, pos))) {
/* 000477 */ 				return __call__ (Match, null, m, string, pos, endpos, self, self._groupindex);
/* 000477 */ 			}
/* 000478 */ 			else {
/* 000479 */ 				return null;
/* 000479 */ 			}
/* 000479 */ 		}
/* 000480 */ 		else {
/* 000481 */ 			return null;
/* 000481 */ 		}
/* 000481 */ 	});},
/* 000483 */ 	get fullmatch () {return __get__ (this, function (self, string, pos, endpos) {
/* 000483 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 			var pos = 0;
/* 000483 */ 		};
/* 000483 */ 		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 			var endpos = null;
/* 000483 */ 		};
/* 000483 */ 		if (arguments.length) {
/* 000483 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000483 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000483 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000483 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000483 */ 					switch (__attrib0__) {
/* 000483 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 						case 'endpos': var endpos = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 					}
/* 000483 */ 				}
/* 000483 */ 			}
/* 000483 */ 		}
/* 000483 */ 		else {
/* 000483 */ 		}
/* 000487 */ 		var target = string;
/* 000488 */ 		var strEndPos = __call__ (len, null, string);
/* 000489 */ 		if (__t__ (endpos !== null)) {
/* 000490 */ 			var target = __getslice__ (target, 0, endpos, 1);
/* 000491 */ 			var strEndPos = endpos;
/* 000491 */ 		}
/* 000493 */ 		var rObj = self._obj;
/* 000494 */ 		var m = (function () {
/* 000494 */ 			var __accu0__ = rObj;
/* 000494 */ 			return __call__ (__accu0__.exec, __accu0__, target);
/* 000494 */ 		}) ();
/* 000495 */ 		if (__t__ (m)) {
/* 000496 */ 			var obsEndPos = __add__ (m.index, __call__ (len, null, __getitem__ (m, 0)));
/* 000497 */ 			if (__t__ (__t__ (__eq__ (m.index, pos)) && __eq__ (obsEndPos, strEndPos))) {
/* 000498 */ 				return __call__ (Match, null, m, string, pos, strEndPos, self, self._groupindex);
/* 000498 */ 			}
/* 000499 */ 			else {
/* 000500 */ 				return null;
/* 000500 */ 			}
/* 000500 */ 		}
/* 000501 */ 		else {
/* 000502 */ 			return null;
/* 000502 */ 		}
/* 000502 */ 	});},
/* 000504 */ 	get py_split () {return __get__ (this, function (self, string, maxsplit) {
/* 000504 */ 		if (typeof maxsplit == 'undefined' || (maxsplit != null && maxsplit.hasOwnProperty ("__kwargtrans__"))) {;
/* 000504 */ 			var maxsplit = 0;
/* 000504 */ 		};
/* 000504 */ 		if (arguments.length) {
/* 000504 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000504 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000504 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000504 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000504 */ 					switch (__attrib0__) {
/* 000504 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'maxsplit': var maxsplit = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 					}
/* 000504 */ 				}
/* 000504 */ 			}
/* 000504 */ 		}
/* 000504 */ 		else {
/* 000504 */ 		}
/* 000519 */ 		if (__t__ (__lt__ (maxsplit, 0))) {
/* 000520 */ 			return [string];
/* 000520 */ 		}
/* 000522 */ 		var mObj = null;
/* 000523 */ 		var rObj = self._obj;
/* 000524 */ 		if (__t__ (__eq__ (maxsplit, 0))) {
/* 000525 */ 			var mObj = (function () {
/* 000525 */ 				var __accu0__ = string;
/* 000525 */ 				return __call__ (__accu0__.py_split, __accu0__, rObj);
/* 000525 */ 			}) ();
/* 000526 */ 			return mObj;
/* 000526 */ 		}
/* 000527 */ 		else {
/* 000532 */ 			var flags = self._flags;
/* 000533 */ 			var flags = __call__ (__ior__, null, flags, GLOBAL);
/* 000535 */ 			var __left0__ = (function () {
/* 000535 */ 				var __accu0__ = self;
/* 000535 */ 				return __call__ (__accu0__._compileWrapper, __accu0__, self._jspattern, flags);
/* 000535 */ 			}) ();
/* 000535 */ 			var _ = __left0__ [0];
/* 000535 */ 			var rObj = __left0__ [1];
/* 000536 */ 			var ret = [];
/* 000537 */ 			var lastM = null;
/* 000538 */ 			var cnt = 0;
/* 000539 */ 			for (var i = 0; i < maxsplit; i++) {
/* 000540 */ 				var m = (function () {
/* 000540 */ 					var __accu0__ = rObj;
/* 000540 */ 					return __call__ (__accu0__.exec, __accu0__, string);
/* 000540 */ 				}) ();
/* 000541 */ 				if (__t__ (m)) {
/* 000542 */ 					var cnt = __call__ (__iadd__, null, cnt, 1);
/* 000543 */ 					if (__t__ (lastM !== null)) {
/* 000545 */ 						var start = __add__ (lastM.index, __call__ (len, null, __getitem__ (lastM, 0)));
/* 000546 */ 						var head = __getslice__ (string, start, m.index, 1);
/* 000547 */ 						(function () {
/* 000547 */ 							var __accu0__ = ret;
/* 000547 */ 							return __call__ (__accu0__.append, __accu0__, head);
/* 000547 */ 						}) ();
/* 000548 */ 						if (__t__ (__gt__ (__call__ (len, null, m), 1))) {
/* 000549 */ 							(function () {
/* 000549 */ 								var __accu0__ = ret;
/* 000549 */ 								return __call__ (__accu0__.extend, __accu0__, __getslice__ (m, 1, null, 1));
/* 000549 */ 							}) ();
/* 000549 */ 						}
/* 000549 */ 					}
/* 000550 */ 					else {
/* 000552 */ 						var head = __getslice__ (string, 0, m.index, 1);
/* 000553 */ 						(function () {
/* 000553 */ 							var __accu0__ = ret;
/* 000553 */ 							return __call__ (__accu0__.append, __accu0__, head);
/* 000553 */ 						}) ();
/* 000554 */ 						if (__t__ (__gt__ (__call__ (len, null, m), 1))) {
/* 000555 */ 							(function () {
/* 000555 */ 								var __accu0__ = ret;
/* 000555 */ 								return __call__ (__accu0__.extend, __accu0__, __getslice__ (m, 1, null, 1));
/* 000555 */ 							}) ();
/* 000555 */ 						}
/* 000555 */ 					}
/* 000556 */ 					var lastM = m;
/* 000556 */ 				}
/* 000557 */ 				else {
/* 000557 */ 					break;
/* 000557 */ 				}
/* 000557 */ 			}
/* 000560 */ 			if (__t__ (lastM !== null)) {
/* 000561 */ 				var endPos = __add__ (lastM.index, __call__ (len, null, __getitem__ (lastM, 0)));
/* 000562 */ 				var end = __getslice__ (string, endPos, null, 1);
/* 000563 */ 				(function () {
/* 000563 */ 					var __accu0__ = ret;
/* 000563 */ 					return __call__ (__accu0__.append, __accu0__, end);
/* 000563 */ 				}) ();
/* 000563 */ 			}
/* 000565 */ 			return ret;
/* 000565 */ 		}
/* 000565 */ 	});},
/* 000567 */ 	get _findAllMatches () {return __get__ (this, function (self, string, pos, endpos) {
/* 000567 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000567 */ 			var pos = 0;
/* 000567 */ 		};
/* 000567 */ 		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000567 */ 			var endpos = null;
/* 000567 */ 		};
/* 000567 */ 		if (arguments.length) {
/* 000567 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000567 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000567 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000567 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000567 */ 					switch (__attrib0__) {
/* 000567 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						case 'endpos': var endpos = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 					}
/* 000567 */ 				}
/* 000567 */ 			}
/* 000567 */ 		}
/* 000567 */ 		else {
/* 000567 */ 		}
/* 000568 */ 		var target = (function () {
/* 000568 */ 			var __accu0__ = self;
/* 000568 */ 			return __call__ (__accu0__._getTargetStr, __accu0__, string, pos, endpos);
/* 000568 */ 		}) ();
/* 000574 */ 		var flags = self._flags;
/* 000575 */ 		var flags = __call__ (__ior__, null, flags, GLOBAL);
/* 000577 */ 		var __left0__ = (function () {
/* 000577 */ 			var __accu0__ = self;
/* 000577 */ 			return __call__ (__accu0__._compileWrapper, __accu0__, self._jspattern, flags);
/* 000577 */ 		}) ();
/* 000577 */ 		var _ = __left0__ [0];
/* 000577 */ 		var rObj = __left0__ [1];
/* 000578 */ 		var ret = [];
/* 000579 */ 		while (__t__ (true)) {
/* 000580 */ 			var m = (function () {
/* 000580 */ 				var __accu0__ = rObj;
/* 000580 */ 				return __call__ (__accu0__.exec, __accu0__, target);
/* 000580 */ 			}) ();
/* 000581 */ 			if (__t__ (m)) {
/* 000582 */ 				(function () {
/* 000582 */ 					var __accu0__ = ret;
/* 000582 */ 					return __call__ (__accu0__.append, __accu0__, m);
/* 000582 */ 				}) ();
/* 000582 */ 			}
/* 000583 */ 			else {
/* 000583 */ 				break;
/* 000583 */ 			}
/* 000583 */ 		}
/* 000585 */ 		return ret;
/* 000585 */ 	});},
/* 000587 */ 	get findall () {return __get__ (this, function (self, string, pos, endpos) {
/* 000587 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000587 */ 			var pos = 0;
/* 000587 */ 		};
/* 000587 */ 		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000587 */ 			var endpos = null;
/* 000587 */ 		};
/* 000587 */ 		if (arguments.length) {
/* 000587 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000587 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000587 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000587 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000587 */ 					switch (__attrib0__) {
/* 000587 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'endpos': var endpos = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 					}
/* 000587 */ 				}
/* 000587 */ 			}
/* 000587 */ 		}
/* 000587 */ 		else {
/* 000587 */ 		}
/* 000596 */ 		var mlist = (function () {
/* 000596 */ 			var __accu0__ = self;
/* 000596 */ 			return __call__ (__accu0__._findAllMatches, __accu0__, string, pos, endpos);
/* 000596 */ 		}) ();
/* 000598 */ 		var mSelect = function (m) {
/* 000598 */ 			if (arguments.length) {
/* 000598 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000598 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000598 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000598 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000598 */ 						switch (__attrib0__) {
/* 000598 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000598 */ 						}
/* 000598 */ 					}
/* 000598 */ 				}
/* 000598 */ 			}
/* 000598 */ 			else {
/* 000598 */ 			}
/* 000599 */ 			if (__t__ (__gt__ (__call__ (len, null, m), 2))) {
/* 000602 */ 				return __call__ (tuple, null, __getslice__ (m, 1, null, 1));
/* 000602 */ 			}
/* 000603 */ 			else if (__t__ (__eq__ (__call__ (len, null, m), 2))) {
/* 000605 */ 				return __getitem__ (m, 1);
/* 000605 */ 			}
/* 000606 */ 			else {
/* 000608 */ 				return __getitem__ (m, 0);
/* 000608 */ 			}
/* 000608 */ 		};
/* 000610 */ 		var ret = __call__ (map, null, mSelect, mlist);
/* 000612 */ 		return ret;
/* 000612 */ 	});},
/* 000614 */ 	get finditer () {return __get__ (this, function (self, string, pos, endpos) {
/* 000614 */ 		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000614 */ 			var endpos = null;
/* 000614 */ 		};
/* 000614 */ 		if (arguments.length) {
/* 000614 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000614 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000614 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000614 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000614 */ 					switch (__attrib0__) {
/* 000614 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000614 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000614 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000614 */ 						case 'endpos': var endpos = __allkwargs0__ [__attrib0__]; break;
/* 000614 */ 					}
/* 000614 */ 				}
/* 000614 */ 			}
/* 000614 */ 		}
/* 000614 */ 		else {
/* 000614 */ 		}
/* 000619 */ 		var mlist = (function () {
/* 000619 */ 			var __accu0__ = self;
/* 000619 */ 			return __call__ (__accu0__._findAllMatches, __accu0__, string, pos, endpos);
/* 000619 */ 		}) ();
/* 000620 */ 		var ret = __call__ (map, null, (function __lambda__ (m) {
/* 000620 */ 			if (arguments.length) {
/* 000620 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000620 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000620 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000620 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000620 */ 						switch (__attrib0__) {
/* 000620 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000620 */ 						}
/* 000620 */ 					}
/* 000620 */ 				}
/* 000620 */ 			}
/* 000620 */ 			else {
/* 000620 */ 			}
/* 000620 */ 			return __call__ (Match, null, m, string, 0, __call__ (len, null, string), self, self._groupindex);
/* 000620 */ 		}), mlist);
/* 000621 */ 		return __call__ (py_iter, null, ret);
/* 000621 */ 	});},
/* 000623 */ 	get sub () {return __get__ (this, function (self, repl, string, count) {
/* 000623 */ 		if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {;
/* 000623 */ 			var count = 0;
/* 000623 */ 		};
/* 000623 */ 		if (arguments.length) {
/* 000623 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000623 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000623 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000623 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000623 */ 					switch (__attrib0__) {
/* 000623 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'count': var count = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 					}
/* 000623 */ 				}
/* 000623 */ 			}
/* 000623 */ 		}
/* 000623 */ 		else {
/* 000623 */ 		}
/* 000634 */ 		var __left0__ = (function () {
/* 000634 */ 			var __accu0__ = self;
/* 000634 */ 			return __call__ (__accu0__.subn, __accu0__, repl, string, count);
/* 000634 */ 		}) ();
/* 000634 */ 		var ret = __left0__ [0];
/* 000634 */ 		var _ = __left0__ [1];
/* 000635 */ 		return ret;
/* 000635 */ 	});},
/* 000637 */ 	get subn () {return __get__ (this, function (self, repl, string, count) {
/* 000637 */ 		if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {;
/* 000637 */ 			var count = 0;
/* 000637 */ 		};
/* 000637 */ 		if (arguments.length) {
/* 000637 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000637 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000637 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000637 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000637 */ 					switch (__attrib0__) {
/* 000637 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000637 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000637 */ 						case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000637 */ 						case 'count': var count = __allkwargs0__ [__attrib0__]; break;
/* 000637 */ 					}
/* 000637 */ 				}
/* 000637 */ 			}
/* 000637 */ 		}
/* 000637 */ 		else {
/* 000637 */ 		}
/* 000648 */ 		var flags = self._flags;
/* 000649 */ 		var flags = __call__ (__ior__, null, flags, GLOBAL);
/* 000651 */ 		var __left0__ = (function () {
/* 000651 */ 			var __accu0__ = self;
/* 000651 */ 			return __call__ (__accu0__._compileWrapper, __accu0__, self._jspattern, flags);
/* 000651 */ 		}) ();
/* 000651 */ 		var _ = __left0__ [0];
/* 000651 */ 		var rObj = __left0__ [1];
/* 000652 */ 		var ret = '';
/* 000653 */ 		var totalMatch = 0;
/* 000654 */ 		var lastEnd = __neg__ (1);
/* 000655 */ 		while (__t__ (true)) {
/* 000656 */ 			if (__t__ (__gt__ (count, 0))) {
/* 000657 */ 				if (__t__ (__ge__ (totalMatch, count))) {
/* 000658 */ 					if (__t__ (__lt__ (lastEnd, 0))) {
/* 000661 */ 						return tuple ([ret, totalMatch]);
/* 000661 */ 					}
/* 000662 */ 					else {
/* 000663 */ 						var ret = __call__ (__iadd__, null, ret, __getslice__ (string, lastEnd, m.index, 1));
/* 000664 */ 						return tuple ([ret, totalMatch]);
/* 000664 */ 					}
/* 000664 */ 				}
/* 000664 */ 			}
/* 000666 */ 			var m = (function () {
/* 000666 */ 				var __accu0__ = rObj;
/* 000666 */ 				return __call__ (__accu0__.exec, __accu0__, string);
/* 000666 */ 			}) ();
/* 000667 */ 			if (__t__ (m)) {
/* 000668 */ 				if (__t__ (__lt__ (lastEnd, 0))) {
/* 000670 */ 					var ret = __call__ (__iadd__, null, ret, __getslice__ (string, 0, m.index, 1));
/* 000670 */ 				}
/* 000671 */ 				else {
/* 000673 */ 					var ret = __call__ (__iadd__, null, ret, __getslice__ (string, lastEnd, m.index, 1));
/* 000673 */ 				}
/* 000675 */ 				if (__t__ (__call__ (callable, null, repl))) {
/* 000676 */ 					var content = __call__ (repl, null, __call__ (Match, null, m, string, 0, __call__ (len, null, string), self, self._groupindex));
/* 000677 */ 					var ret = __call__ (__iadd__, null, ret, content);
/* 000677 */ 				}
/* 000678 */ 				else {
/* 000679 */ 					var ret = __call__ (__iadd__, null, ret, repl);
/* 000679 */ 				}
/* 000681 */ 				var totalMatch = __call__ (__iadd__, null, totalMatch, 1);
/* 000684 */ 				var lastEnd = __add__ (m.index, __call__ (len, null, __getitem__ (m, 0)));
/* 000684 */ 			}
/* 000688 */ 			else if (__t__ (__lt__ (lastEnd, 0))) {
/* 000691 */ 				return tuple ([string, 0]);
/* 000691 */ 			}
/* 000692 */ 			else {
/* 000693 */ 				var ret = __call__ (__iadd__, null, ret, __getslice__ (string, lastEnd, null, 1));
/* 000694 */ 				return tuple ([ret, totalMatch]);
/* 000694 */ 			}
/* 000694 */ 		}
/* 000694 */ 	});}
/* 000694 */ });
/* 000360 */ Object.defineProperty (Regex, 'pattern', property.call (Regex, Regex._getPattern, Regex._setPattern));
/* 000366 */ Object.defineProperty (Regex, 'flags', property.call (Regex, Regex._getFlags, Regex._setFlags));
/* 000372 */ Object.defineProperty (Regex, 'groups', property.call (Regex, Regex._getGroups, Regex._setGroups));
/* 000381 */ Object.defineProperty (Regex, 'groupindex', property.call (Regex, Regex._getGroupIndex, Regex._setGroupIndex));
/* 000697 */ export var PyRegExp =  __class__ ('PyRegExp', [Regex], {
/* 000697 */ 	__module__: __name__,
/* 000702 */ 	get __init__ () {return __get__ (this, function (self, pyPattern, flags) {
/* 000702 */ 		if (arguments.length) {
/* 000702 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000702 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000702 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000702 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000702 */ 					switch (__attrib0__) {
/* 000702 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'pyPattern': var pyPattern = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 					}
/* 000702 */ 				}
/* 000702 */ 			}
/* 000702 */ 		}
/* 000702 */ 		else {
/* 000702 */ 		}
/* 000707 */ 		var __left0__ = __call__ (translate, null, pyPattern);
/* 000707 */ 		var jsTokens = __left0__ [0];
/* 000707 */ 		var inlineFlags = __left0__ [1];
/* 000707 */ 		var namedGroups = __left0__ [2];
/* 000707 */ 		var nCapGroups = __left0__ [3];
/* 000707 */ 		var n_splits = __left0__ [4];
/* 000708 */ 		var flags = __call__ (__ior__, null, flags, inlineFlags);
/* 000710 */ 		var jsPattern = (function () {
/* 000710 */ 			var __accu0__ = '';
/* 000710 */ 			return __call__ (__accu0__.join, __accu0__, jsTokens);
/* 000710 */ 		}) ();
/* 000711 */ 		(function () {
/* 000711 */ 			var __accu0__ = Regex;
/* 000711 */ 			return __call__ (__accu0__.__init__, __accu0__, self, jsPattern, flags);
/* 000711 */ 		}) ();
/* 000712 */ 		self._pypattern = pyPattern;
/* 000714 */ 		self._nsplits = n_splits;
/* 000715 */ 		self._jsTokens = jsTokens;
/* 000718 */ 		self._capgroups = nCapGroups;
/* 000719 */ 		self._groupindex = namedGroups;
/* 000719 */ 	});}
/* 000719 */ });
/* 000721 */ export var compile = function (pattern, flags) {
/* 000721 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000721 */ 		var flags = 0;
/* 000721 */ 	};
/* 000721 */ 	if (arguments.length) {
/* 000721 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000721 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000721 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000721 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000721 */ 				switch (__attrib0__) {
/* 000721 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000721 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000721 */ 				}
/* 000721 */ 			}
/* 000721 */ 		}
/* 000721 */ 	}
/* 000721 */ 	else {
/* 000721 */ 	}
/* 000725 */ 	if (__t__ (__and__ (flags, JSSTRICT))) {
/* 000726 */ 		var p = __call__ (Regex, null, pattern, flags);
/* 000726 */ 	}
/* 000727 */ 	else {
/* 000728 */ 		var p = __call__ (PyRegExp, null, pattern, flags);
/* 000728 */ 	}
/* 000729 */ 	return p;
/* 000729 */ };
/* 000731 */ export var search = function (pattern, string, flags) {
/* 000731 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000731 */ 		var flags = 0;
/* 000731 */ 	};
/* 000731 */ 	if (arguments.length) {
/* 000731 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000731 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000731 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000731 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000731 */ 				switch (__attrib0__) {
/* 000731 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000731 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000731 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000731 */ 				}
/* 000731 */ 			}
/* 000731 */ 		}
/* 000731 */ 	}
/* 000731 */ 	else {
/* 000731 */ 	}
/* 000734 */ 	var p = __call__ (compile, null, pattern, flags);
/* 000735 */ 	return (function () {
/* 000735 */ 		var __accu0__ = p;
/* 000735 */ 		return __call__ (__accu0__.search, __accu0__, string);
/* 000735 */ 	}) ();
/* 000735 */ };
/* 000737 */ export var match = function (pattern, string, flags) {
/* 000737 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000737 */ 		var flags = 0;
/* 000737 */ 	};
/* 000737 */ 	if (arguments.length) {
/* 000737 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000737 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000737 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000737 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000737 */ 				switch (__attrib0__) {
/* 000737 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 				}
/* 000737 */ 			}
/* 000737 */ 		}
/* 000737 */ 	}
/* 000737 */ 	else {
/* 000737 */ 	}
/* 000740 */ 	var p = __call__ (compile, null, pattern, flags);
/* 000741 */ 	return (function () {
/* 000741 */ 		var __accu0__ = p;
/* 000741 */ 		return __call__ (__accu0__.match, __accu0__, string);
/* 000741 */ 	}) ();
/* 000741 */ };
/* 000743 */ export var fullmatch = function (pattern, string, flags) {
/* 000743 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000743 */ 		var flags = 0;
/* 000743 */ 	};
/* 000743 */ 	if (arguments.length) {
/* 000743 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000743 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000743 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000743 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000743 */ 				switch (__attrib0__) {
/* 000743 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000743 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000743 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000743 */ 				}
/* 000743 */ 			}
/* 000743 */ 		}
/* 000743 */ 	}
/* 000743 */ 	else {
/* 000743 */ 	}
/* 000746 */ 	var p = __call__ (compile, null, pattern, flags);
/* 000747 */ 	return (function () {
/* 000747 */ 		var __accu0__ = p;
/* 000747 */ 		return __call__ (__accu0__.fullmatch, __accu0__, string);
/* 000747 */ 	}) ();
/* 000747 */ };
/* 000749 */ export var py_split = function (pattern, string, maxsplit, flags) {
/* 000749 */ 	if (typeof maxsplit == 'undefined' || (maxsplit != null && maxsplit.hasOwnProperty ("__kwargtrans__"))) {;
/* 000749 */ 		var maxsplit = 0;
/* 000749 */ 	};
/* 000749 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000749 */ 		var flags = 0;
/* 000749 */ 	};
/* 000749 */ 	if (arguments.length) {
/* 000749 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000749 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000749 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000749 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000749 */ 				switch (__attrib0__) {
/* 000749 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 					case 'maxsplit': var maxsplit = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 				}
/* 000749 */ 			}
/* 000749 */ 		}
/* 000749 */ 	}
/* 000749 */ 	else {
/* 000749 */ 	}
/* 000752 */ 	var p = __call__ (compile, null, pattern, flags);
/* 000753 */ 	return (function () {
/* 000753 */ 		var __accu0__ = p;
/* 000753 */ 		return __call__ (__accu0__.py_split, __accu0__, string, maxsplit);
/* 000753 */ 	}) ();
/* 000753 */ };
/* 000755 */ export var findall = function (pattern, string, flags) {
/* 000755 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000755 */ 		var flags = 0;
/* 000755 */ 	};
/* 000755 */ 	if (arguments.length) {
/* 000755 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000755 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000755 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000755 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000755 */ 				switch (__attrib0__) {
/* 000755 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000755 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000755 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000755 */ 				}
/* 000755 */ 			}
/* 000755 */ 		}
/* 000755 */ 	}
/* 000755 */ 	else {
/* 000755 */ 	}
/* 000758 */ 	var p = __call__ (compile, null, pattern, flags);
/* 000759 */ 	return (function () {
/* 000759 */ 		var __accu0__ = p;
/* 000759 */ 		return __call__ (__accu0__.findall, __accu0__, string);
/* 000759 */ 	}) ();
/* 000759 */ };
/* 000761 */ export var finditer = function (pattern, string, flags) {
/* 000761 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000761 */ 		var flags = 0;
/* 000761 */ 	};
/* 000761 */ 	if (arguments.length) {
/* 000761 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000761 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000761 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000761 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000761 */ 				switch (__attrib0__) {
/* 000761 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000761 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000761 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000761 */ 				}
/* 000761 */ 			}
/* 000761 */ 		}
/* 000761 */ 	}
/* 000761 */ 	else {
/* 000761 */ 	}
/* 000764 */ 	var p = __call__ (compile, null, pattern, flags);
/* 000765 */ 	return (function () {
/* 000765 */ 		var __accu0__ = p;
/* 000765 */ 		return __call__ (__accu0__.finditer, __accu0__, string);
/* 000765 */ 	}) ();
/* 000765 */ };
/* 000767 */ export var sub = function (pattern, repl, string, count, flags) {
/* 000767 */ 	if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {;
/* 000767 */ 		var count = 0;
/* 000767 */ 	};
/* 000767 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000767 */ 		var flags = 0;
/* 000767 */ 	};
/* 000767 */ 	if (arguments.length) {
/* 000767 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000767 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000767 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000767 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000767 */ 				switch (__attrib0__) {
/* 000767 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 					case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 					case 'count': var count = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 				}
/* 000767 */ 			}
/* 000767 */ 		}
/* 000767 */ 	}
/* 000767 */ 	else {
/* 000767 */ 	}
/* 000770 */ 	var p = __call__ (compile, null, pattern, flags);
/* 000771 */ 	return (function () {
/* 000771 */ 		var __accu0__ = p;
/* 000771 */ 		return __call__ (__accu0__.sub, __accu0__, repl, string, count);
/* 000771 */ 	}) ();
/* 000771 */ };
/* 000773 */ export var subn = function (pattern, repl, string, count, flags) {
/* 000773 */ 	if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {;
/* 000773 */ 		var count = 0;
/* 000773 */ 	};
/* 000773 */ 	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
/* 000773 */ 		var flags = 0;
/* 000773 */ 	};
/* 000773 */ 	if (arguments.length) {
/* 000773 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000773 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000773 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000773 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000773 */ 				switch (__attrib0__) {
/* 000773 */ 					case 'pattern': var pattern = __allkwargs0__ [__attrib0__]; break;
/* 000773 */ 					case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000773 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000773 */ 					case 'count': var count = __allkwargs0__ [__attrib0__]; break;
/* 000773 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000773 */ 				}
/* 000773 */ 			}
/* 000773 */ 		}
/* 000773 */ 	}
/* 000773 */ 	else {
/* 000773 */ 	}
/* 000776 */ 	var p = __call__ (compile, null, pattern, flags);
/* 000777 */ 	return (function () {
/* 000777 */ 		var __accu0__ = p;
/* 000777 */ 		return __call__ (__accu0__.subn, __accu0__, repl, string, count);
/* 000777 */ 	}) ();
/* 000777 */ };
/* 000779 */ export var escape = function (string) {
/* 000779 */ 	if (arguments.length) {
/* 000779 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000779 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000779 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000779 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000779 */ 				switch (__attrib0__) {
/* 000779 */ 					case 'string': var string = __allkwargs0__ [__attrib0__]; break;
/* 000779 */ 				}
/* 000779 */ 			}
/* 000779 */ 		}
/* 000779 */ 	}
/* 000779 */ 	else {
/* 000779 */ 	}
/* 000783 */ 	var ret = null;
/* 000784 */ 	var replfunc = function (m) {
/* 000784 */ 		if (arguments.length) {
/* 000784 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000784 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000784 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000784 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000784 */ 					switch (__attrib0__) {
/* 000784 */ 						case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000784 */ 					}
/* 000784 */ 				}
/* 000784 */ 			}
/* 000784 */ 		}
/* 000784 */ 		else {
/* 000784 */ 		}
/* 000785 */ 		if (__t__ (__eq__ (__getitem__ (m, 0), '\\'))) {
/* 000786 */ 			return '\\\\\\\\';
/* 000786 */ 		}
/* 000787 */ 		else {
/* 000788 */ 			return __add__ ('\\\\', __getitem__ (m, 0));
/* 000788 */ 		}
/* 000788 */ 	};
/* 000793 */ 	
/* 000793 */ 	        var r = /[^A-Za-z:;\d]/g;
/* 000793 */ 	        ret = string.replace(r, replfunc);
/* 000793 */ 	        
/* 000799 */ 	if (__t__ (ret !== null)) {
/* 000800 */ 		return ret;
/* 000800 */ 	}
/* 000801 */ 	else {
/* 000802 */ 		var __except0__ = __call__ (Exception, null, 'Failed to escape the passed string');
/* 000802 */ 		__except0__.__cause__ = null;
/* 000802 */ 		throw __except0__;
/* 000802 */ 	}
/* 000802 */ };
/* 000804 */ export var purge = function () {
/* 000804 */ 	if (arguments.length) {
/* 000804 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000804 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000804 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000804 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000804 */ 			}
/* 000804 */ 		}
/* 000804 */ 	}
/* 000804 */ 	else {
/* 000804 */ 	}
/* 000808 */ 	// pass;
/* 000808 */ };
/* 000014 */ 
//# sourceMappingURL=re.map