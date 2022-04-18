/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:10:53
/* 000035 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'bisect';
/* 000007 */ export var bisect_right = function (a, x) {
/* 000007 */ 	if (arguments.length) {
/* 000007 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000007 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000007 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000007 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000007 */ 				switch (__attrib0__) {
/* 000007 */ 					case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000007 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000007 */ 				}
/* 000007 */ 			}
/* 000007 */ 		}
/* 000007 */ 	}
/* 000007 */ 	else {
/* 000007 */ 	}
/* 000010 */ 	var lo = 0;
/* 000011 */ 	var hi = __call__ (len, null, a);
/* 000012 */ 	var mid = null;
/* 000014 */ 	while (__t__ (true)) {
/* 000018 */ 		if (__t__ (__gt__ (__getitem__ (a, lo), x))) {
/* 000019 */ 			return lo;
/* 000019 */ 		}
/* 000020 */ 		if (__t__ (__le__ (__getitem__ (a, __sub__ (hi, 1)), x))) {
/* 000021 */ 			return hi;
/* 000021 */ 		}
/* 000025 */ 		if (__t__ (__le__ (__sub__ (hi, lo), 2))) {
/* 000026 */ 			if (__t__ (__gt__ (__getitem__ (a, __add__ (lo, 1)), x))) {
/* 000027 */ 				return __add__ (lo, 1);
/* 000027 */ 			}
/* 000028 */ 			else {
/* 000029 */ 				return __add__ (lo, 2);
/* 000029 */ 			}
/* 000029 */ 		}
/* 000031 */ 		var mid = __floordiv__ ((__add__ (hi, lo)), 2);
/* 000032 */ 		if (__t__ (__gt__ (__getitem__ (a, mid), x))) {
/* 000033 */ 			var hi = __add__ (mid, 1);
/* 000033 */ 		}
/* 000034 */ 		else {
/* 000035 */ 			var lo = mid;
/* 000035 */ 		}
/* 000035 */ 	}
/* 000035 */ };
/* 000035 */ 
//# sourceMappingURL=bisect.map