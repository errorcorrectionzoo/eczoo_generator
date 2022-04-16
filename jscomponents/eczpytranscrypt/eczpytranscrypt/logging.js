/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:30:52
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'logging';
/* 000005 */ export var MinimalLogger =  __class__ ('MinimalLogger', [object], {
/* 000005 */ 	__module__: __name__,
/* 000006 */ 	get _emit () {return __get__ (this, function (self, m, args) {
/* 000006 */ 		if (arguments.length) {
/* 000006 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000006 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000006 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000006 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000006 */ 					switch (__attrib0__) {
/* 000006 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000006 */ 						case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000006 */ 						case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000006 */ 					}
/* 000006 */ 				}
/* 000006 */ 			}
/* 000006 */ 		}
/* 000006 */ 		else {
/* 000006 */ 		}
/* 000007 */ 		var s = (function () {
/* 000007 */ 			var __accu0__ = '{}{}';
/* 000007 */ 			return __call__ (__accu0__.format, __accu0__, m, __getitem__ (args, 0));
/* 000007 */ 		}) ();
/* 000008 */ 		if (__t__ (__gt__ (__call__ (len, null, args), 1))) {
/* 000009 */ 			var s = __call__ (__iadd__, null, s, '  //  ');
/* 000010 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000010 */ 				var __accu0__ = ' ; ';
/* 000010 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000010 */ 					var __accu1__ = [];
/* 000010 */ 					var __iterable0__ = __getslice__ (args, 1, null, 1);
/* 000010 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000010 */ 						var a = __getitem__ (__iterable0__, __index0__);
/* 000010 */ 						(function () {
/* 000010 */ 							var __accu2__ = __accu1__;
/* 000010 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (repr, null, a));
/* 000010 */ 						}) ();
/* 000010 */ 					}
/* 000010 */ 					return __accu1__;
/* 000010 */ 				}) ());
/* 000010 */ 			}) ());
/* 000010 */ 		}
/* 000011 */ 		__call__ (print, null, s);
/* 000011 */ 	});},
/* 000013 */ 	get error () {return __get__ (this, function (self) {
/* 000013 */ 		if (arguments.length) {
/* 000013 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000013 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000013 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000013 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000013 */ 					switch (__attrib0__) {
/* 000013 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000013 */ 					}
/* 000013 */ 				}
/* 000013 */ 			}
/* 000013 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000013 */ 		}
/* 000013 */ 		else {
/* 000013 */ 			var args = tuple ();
/* 000013 */ 		}
/* 000014 */ 		(function () {
/* 000014 */ 			var __accu0__ = self;
/* 000014 */ 			return __call__ (__accu0__._emit, __accu0__, 'ERROR !!  ', args);
/* 000014 */ 		}) ();
/* 000014 */ 	});},
/* 000016 */ 	get critical () {return __get__ (this, function (self) {
/* 000016 */ 		if (arguments.length) {
/* 000016 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000016 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000016 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000016 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000016 */ 					switch (__attrib0__) {
/* 000016 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000016 */ 					}
/* 000016 */ 				}
/* 000016 */ 			}
/* 000016 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000016 */ 		}
/* 000016 */ 		else {
/* 000016 */ 			var args = tuple ();
/* 000016 */ 		}
/* 000017 */ 		(function () {
/* 000017 */ 			var __accu0__ = self;
/* 000017 */ 			return __call__ (__accu0__._emit, __accu0__, 'CRITICAL !!  ', args);
/* 000017 */ 		}) ();
/* 000017 */ 	});},
/* 000019 */ 	get warning () {return __get__ (this, function (self) {
/* 000019 */ 		if (arguments.length) {
/* 000019 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000019 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000019 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000019 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000019 */ 					switch (__attrib0__) {
/* 000019 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000019 */ 					}
/* 000019 */ 				}
/* 000019 */ 			}
/* 000019 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000019 */ 		}
/* 000019 */ 		else {
/* 000019 */ 			var args = tuple ();
/* 000019 */ 		}
/* 000020 */ 		(function () {
/* 000020 */ 			var __accu0__ = self;
/* 000020 */ 			return __call__ (__accu0__._emit, __accu0__, 'WARNING !  ', args);
/* 000020 */ 		}) ();
/* 000020 */ 	});},
/* 000022 */ 	get info () {return __get__ (this, function (self) {
/* 000022 */ 		if (arguments.length) {
/* 000022 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000022 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000022 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000022 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000022 */ 					switch (__attrib0__) {
/* 000022 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 					}
/* 000022 */ 				}
/* 000022 */ 			}
/* 000022 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000022 */ 		}
/* 000022 */ 		else {
/* 000022 */ 			var args = tuple ();
/* 000022 */ 		}
/* 000023 */ 		(function () {
/* 000023 */ 			var __accu0__ = self;
/* 000023 */ 			return __call__ (__accu0__._emit, __accu0__, '', args);
/* 000023 */ 		}) ();
/* 000023 */ 	});},
/* 000025 */ 	get debug () {return __get__ (this, function (self) {
/* 000025 */ 		if (arguments.length) {
/* 000025 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000025 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000025 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000025 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000025 */ 					switch (__attrib0__) {
/* 000025 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 					}
/* 000025 */ 				}
/* 000025 */ 			}
/* 000025 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000025 */ 		}
/* 000025 */ 		else {
/* 000025 */ 			var args = tuple ();
/* 000025 */ 		}
/* 000026 */ 		(function () {
/* 000026 */ 			var __accu0__ = self;
/* 000026 */ 			return __call__ (__accu0__._emit, __accu0__, 'debug --- ', args);
/* 000026 */ 		}) ();
/* 000026 */ 	});}
/* 000026 */ });
/* 000029 */ export var single_logger_instance = __call__ (MinimalLogger, null);
/* 000031 */ export var getLogger = function () {
/* 000031 */ 	var kwargs = dict ();
/* 000031 */ 	if (arguments.length) {
/* 000031 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000031 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000031 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000031 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000031 */ 				switch (__attrib0__) {
/* 000031 */ 					default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000031 */ 				}
/* 000031 */ 			}
/* 000031 */ 			delete kwargs.__kwargtrans__;
/* 000031 */ 		}
/* 000031 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000031 */ 	}
/* 000031 */ 	else {
/* 000031 */ 		var args = tuple ();
/* 000031 */ 	}
/* 000032 */ 	return single_logger_instance;
/* 000032 */ };
/* 000035 */ export var basicConfig = function () {
/* 000035 */ 	var kwargs = dict ();
/* 000035 */ 	if (arguments.length) {
/* 000035 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 				switch (__attrib0__) {
/* 000035 */ 					default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 			delete kwargs.__kwargtrans__;
/* 000035 */ 		}
/* 000035 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000035 */ 	}
/* 000035 */ 	else {
/* 000035 */ 		var args = tuple ();
/* 000035 */ 	}
/* 000036 */ 	// pass;
/* 000036 */ };
/* 000036 */ 
//# sourceMappingURL=logging.map