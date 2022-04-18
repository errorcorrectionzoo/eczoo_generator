/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:10:53
/* 000036 */ var bisect = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000117 */ import {ChainMap} from './collections.js';
/* 000036 */ import * as __module_bisect__ from './bisect.js';
/* 000036 */ __nest__ (bisect, '', __module_bisect__);
/* 000036 */ export {ChainMap};
/* 000001 */ var __name__ = 'pylatexenc._util';
/* 000037 */ export var bisect_right = bisect.bisect_right;
/* 000043 */ export var LineNumbersCalculator =  __class__ ('LineNumbersCalculator', [object], {
/* 000043 */ 	__module__: __name__,
/* 000047 */ 	get __init__ () {return __get__ (this, function (self, s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000048 */ 		__call__ (__call__ (__super__, null, LineNumbersCalculator, '__init__'), null, self);
/* 000050 */ 		var find_all_new_lines = function* (x) {
/* 000050 */ 			if (arguments.length) {
/* 000050 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 						switch (__attrib0__) {
/* 000050 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						}
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 			else {
/* 000050 */ 			}
/* 000050 */ 			yield 0;
/* 000053 */ 			var k = 0;
/* 000054 */ 			while (__t__ (__lt__ (k, __call__ (len, null, x)))) {
/* 000055 */ 				var k = (function () {
/* 000055 */ 					var __accu0__ = x;
/* 000055 */ 					return __call__ (__accu0__.find, __accu0__, '\n', k);
/* 000055 */ 				}) ();
/* 000056 */ 				if (__t__ (__eq__ (k, __neg__ (1)))) {
/* 000057 */ 					return ;
/* 000057 */ 				}
/* 000058 */ 				var k = __call__ (__iadd__, null, k, 1);
/* 000058 */ 				yield k;
/* 000058 */ 			}
/* 000058 */ 			};
/* 000063 */ 		self._pos_new_lines = __call__ (list, null, __call__ (find_all_new_lines, null, s));
/* 000063 */ 	});},
/* 000066 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000066 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 			var as_dict = false;
/* 000066 */ 		};
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000080 */ 		var line_no = __sub__ (__call__ (bisect_right, null, self._pos_new_lines, pos), 1);
/* 000081 */ 		assert (__t__ (__ge__ (line_no, 0)) && __lt__ (line_no, __call__ (len, null, self._pos_new_lines)));
/* 000083 */ 		var col_no = __sub__ (pos, __getitem__ (self._pos_new_lines, line_no));
/* 000085 */ 		if (__t__ (as_dict)) {
/* 000086 */ 			return dict ({'lineno': __add__ (1, line_no), 'colno': col_no});
/* 000086 */ 		}
/* 000087 */ 		return tuple ([__add__ (1, line_no), col_no]);
/* 000087 */ 	});}
/* 000087 */ });
/* 000094 */ export var PushPropOverride =  __class__ ('PushPropOverride', [object], {
/* 000094 */ 	__module__: __name__,
/* 000095 */ 	get __init__ () {return __get__ (this, function (self, obj, propname, new_value) {
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'new_value': var new_value = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000096 */ 		__call__ (__call__ (__super__, null, PushPropOverride, '__init__'), null, self);
/* 000097 */ 		self.obj = obj;
/* 000098 */ 		self.propname = propname;
/* 000099 */ 		self.new_value = new_value;
/* 000099 */ 	});},
/* 000101 */ 	get __enter__ () {return __get__ (this, function (self) {
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
/* 000102 */ 		if (__t__ (self.new_value !== null)) {
/* 000103 */ 			self.initval = __call__ (getattr, null, self.obj, self.propname);
/* 000104 */ 			__call__ (setattr, null, self.obj, self.propname, self.new_value);
/* 000104 */ 		}
/* 000105 */ 		return self;
/* 000105 */ 	});},
/* 000107 */ 	get __exit__ () {return __get__ (this, function (self, py_metatype, value, traceback) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'py_metatype': var py_metatype = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000109 */ 		if (__t__ (self.new_value !== null)) {
/* 000110 */ 			__call__ (setattr, null, self.obj, self.propname, self.initval);
/* 000110 */ 		}
/* 000110 */ 	});}
/* 000110 */ });
/* 000116 */ try {
/* 000116 */ }
/* 000116 */ catch (__except0__) {
/* 000116 */ 	if (isinstance (__except0__, ImportError)) {
/* 000119 */ 		// pass;
/* 000119 */ 	}
/* 000119 */ 	else {
/* 000119 */ 		throw __except0__;
/* 000119 */ 	}
/* 000119 */ }
/* 000131 */ export var pylatexenc_deprecated_ver = (function __lambda__ () {
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
/* 000132 */ export var pylatexenc_deprecated_2 = (function __lambda__ () {
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
/* 000133 */ export var pylatexenc_deprecated_3 = (function __lambda__ () {
/* 000133 */ 	if (arguments.length) {
/* 000133 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000133 */ 	}
/* 000133 */ 	else {
/* 000133 */ 		var args = tuple ();
/* 000133 */ 	}
/* 000133 */ 	return null;
/* 000133 */ });
/* 000134 */ export var LazyDict = null;
/* 000036 */ 
//# sourceMappingURL=pylatexenc._util.map