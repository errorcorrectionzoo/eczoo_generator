/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:54
/* 000036 */ var bisect = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000116 */ import {ChainMap} from './collections.js';
/* 000036 */ import * as __module_bisect__ from './bisect.js';
/* 000036 */ __nest__ (bisect, '', __module_bisect__);
/* 000036 */ export {ChainMap};
/* 000001 */ var __name__ = 'pylatexenc._util';
/* 000042 */ export var LineNumbersCalculator =  __class__ ('LineNumbersCalculator', [object], {
/* 000042 */ 	__module__: __name__,
/* 000046 */ 	get __init__ () {return __get__ (this, function (self, s) {
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000047 */ 		__call__ (__call__ (__super__, null, LineNumbersCalculator, '__init__'), null, self);
/* 000049 */ 		var find_all_new_lines = function* (x) {
/* 000049 */ 			if (arguments.length) {
/* 000049 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 						switch (__attrib0__) {
/* 000049 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						}
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 			else {
/* 000049 */ 			}
/* 000049 */ 			yield 0;
/* 000052 */ 			var k = 0;
/* 000053 */ 			while (__t__ (__lt__ (k, __call__ (len, null, x)))) {
/* 000054 */ 				var k = (function () {
/* 000054 */ 					var __accu0__ = x;
/* 000054 */ 					return __call__ (__accu0__.find, __accu0__, '\n', k);
/* 000054 */ 				}) ();
/* 000055 */ 				if (__t__ (__eq__ (k, __neg__ (1)))) {
/* 000056 */ 					return ;
/* 000056 */ 				}
/* 000057 */ 				var k = __call__ (__iadd__, null, k, 1);
/* 000057 */ 				yield k;
/* 000057 */ 			}
/* 000057 */ 			};
/* 000062 */ 		self._pos_new_lines = __call__ (list, null, __call__ (find_all_new_lines, null, s));
/* 000062 */ 	});},
/* 000065 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000065 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000065 */ 			var as_dict = false;
/* 000065 */ 		};
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000079 */ 		var line_no = __sub__ ((function () {
/* 000079 */ 			var __accu0__ = bisect;
/* 000079 */ 			return __call__ (__accu0__.bisect_right, __accu0__, self._pos_new_lines, pos);
/* 000079 */ 		}) (), 1);
/* 000080 */ 		assert (__t__ (__ge__ (line_no, 0)) && __lt__ (line_no, __call__ (len, null, self._pos_new_lines)));
/* 000082 */ 		var col_no = __sub__ (pos, __getitem__ (self._pos_new_lines, line_no));
/* 000084 */ 		if (__t__ (as_dict)) {
/* 000085 */ 			return dict ({'lineno': __add__ (1, line_no), 'colno': col_no});
/* 000085 */ 		}
/* 000086 */ 		return tuple ([__add__ (1, line_no), col_no]);
/* 000086 */ 	});}
/* 000086 */ });
/* 000093 */ export var PushPropOverride =  __class__ ('PushPropOverride', [object], {
/* 000093 */ 	__module__: __name__,
/* 000094 */ 	get __init__ () {return __get__ (this, function (self, obj, propname, new_value) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'new_value': var new_value = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000095 */ 		__call__ (__call__ (__super__, null, PushPropOverride, '__init__'), null, self);
/* 000096 */ 		self.obj = obj;
/* 000097 */ 		self.propname = propname;
/* 000098 */ 		self.new_value = new_value;
/* 000098 */ 	});},
/* 000100 */ 	get __enter__ () {return __get__ (this, function (self) {
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
/* 000101 */ 		if (__t__ (self.new_value !== null)) {
/* 000102 */ 			self.initval = __call__ (getattr, null, self.obj, self.propname);
/* 000103 */ 			__call__ (setattr, null, self.obj, self.propname, self.new_value);
/* 000103 */ 		}
/* 000104 */ 		return self;
/* 000104 */ 	});},
/* 000106 */ 	get __exit__ () {return __get__ (this, function (self, py_metatype, value, traceback) {
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'py_metatype': var py_metatype = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000108 */ 		if (__t__ (self.new_value !== null)) {
/* 000109 */ 			__call__ (setattr, null, self.obj, self.propname, self.initval);
/* 000109 */ 		}
/* 000109 */ 	});}
/* 000109 */ });
/* 000115 */ try {
/* 000115 */ }
/* 000115 */ catch (__except0__) {
/* 000115 */ 	if (isinstance (__except0__, ImportError)) {
/* 000118 */ 		// pass;
/* 000118 */ 	}
/* 000118 */ 	else {
/* 000118 */ 		throw __except0__;
/* 000118 */ 	}
/* 000118 */ }
/* 000130 */ export var pylatexenc_deprecated_ver = (function __lambda__ () {
/* 000130 */ 	if (arguments.length) {
/* 000130 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000130 */ 	}
/* 000130 */ 	else {
/* 000130 */ 		var args = tuple ();
/* 000130 */ 	}
/* 000130 */ 	return null;
/* 000130 */ });
/* 000131 */ export var pylatexenc_deprecated_2 = (function __lambda__ () {
/* 000131 */ 	if (arguments.length) {
/* 000131 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000131 */ 	}
/* 000131 */ 	else {
/* 000131 */ 		var args = tuple ();
/* 000131 */ 	}
/* 000131 */ 	return null;
/* 000131 */ });
/* 000132 */ export var pylatexenc_deprecated_3 = (function __lambda__ () {
/* 000132 */ 	if (arguments.length) {
/* 000132 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000132 */ 	}
/* 000132 */ 	else {
/* 000132 */ 		var args = tuple ();
/* 000132 */ 	}
/* 000132 */ 	return null;
/* 000132 */ });
/* 000133 */ export var LazyDict = null;
/* 000036 */ 
//# sourceMappingURL=pylatexenc._util.map