/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:37:13
/* 000045 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._callablespecbase';
/* 000039 */ export var CallableSpecBase =  __class__ ('CallableSpecBase', [object], {
/* 000039 */ 	__module__: __name__,
/* 000044 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000044 */ 		if (arguments.length) {
/* 000044 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000044 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000044 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000044 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000044 */ 					switch (__attrib0__) {
/* 000044 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 					}
/* 000044 */ 				}
/* 000044 */ 			}
/* 000044 */ 		}
/* 000044 */ 		else {
/* 000044 */ 		}
/* 000045 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement get_node_parser()');
/* 000045 */ 		__except0__.__cause__ = null;
/* 000045 */ 		throw __except0__;
/* 000045 */ 	});}
/* 000045 */ });
/* 000045 */ 
//# sourceMappingURL=pylatexenc.latexnodes._callablespecbase.map