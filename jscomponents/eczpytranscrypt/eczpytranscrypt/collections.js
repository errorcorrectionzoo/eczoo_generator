/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:05
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'collections';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000011 */ export var ChainMap =  __class__ ('ChainMap', [object], {
/* 000011 */ 	__module__: __name__,
/* 000025 */ 	get __init__ () {return __get__ (this, function (self) {
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
/* 000025 */ 			var maps = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000025 */ 		}
/* 000025 */ 		else {
/* 000025 */ 			var maps = tuple ();
/* 000025 */ 		}
/* 000030 */ 		self.maps = __t__ (__call__ (list, null, maps)) || [dict ({})];
/* 000030 */ 	});},
/* 000032 */ 	get __missing__ () {return __get__ (this, function (self, key) {
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000033 */ 		var __except0__ = __call__ (KeyError, null, key);
/* 000033 */ 		__except0__.__cause__ = null;
/* 000033 */ 		throw __except0__;
/* 000034 */ 		return null;
/* 000034 */ 	});},
/* 000036 */ 	get __getitem__ () {return __get__ (this, function (self, key) {
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000038 */ 		var __iterable0__ = self.maps;
/* 000038 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000038 */ 			var mapping = __getitem__ (__iterable0__, __index0__);
/* 000040 */ 			if (__t__ (!__in__ (key, mapping))) {
/* 000040 */ 				continue;
/* 000040 */ 			}
/* 000043 */ 			return __getitem__ (mapping, key);
/* 000043 */ 		}
/* 000045 */ 		return (function () {
/* 000045 */ 			var __accu0__ = self;
/* 000045 */ 			return __call__ (__accu0__.__missing__, __accu0__, key);
/* 000045 */ 		}) ();
/* 000045 */ 	});},
/* 000047 */ 	get py_get () {return __get__ (this, function (self, key, py_default) {
/* 000047 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000047 */ 			var py_default = null;
/* 000047 */ 		};
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000048 */ 		return (__t__ (__in__ (key, self)) ? __getitem__ (self, key) : py_default);
/* 000048 */ 	});},
/* 000050 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000050 */ 		if (arguments.length) {
/* 000050 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 					switch (__attrib0__) {
/* 000050 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 		}
/* 000050 */ 		else {
/* 000050 */ 		}
/* 000051 */ 		return __call__ (len, null, (function () {
/* 000051 */ 			var __accu0__ = __call__ (set, null);
/* 000051 */ 			return __call__ (__accu0__.union, __accu0__, ...self.maps);
/* 000051 */ 		}) ());
/* 000051 */ 	});},
/* 000053 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000054 */ 		var d = dict ({});
/* 000055 */ 		var __iterable0__ = __call__ (py_reversed, null, self.maps);
/* 000055 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000055 */ 			var mapping = __getitem__ (__iterable0__, __index0__);
/* 000056 */ 			(function () {
/* 000056 */ 				var __accu0__ = d;
/* 000056 */ 				return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000056 */ 					var __accu1__ = dict;
/* 000056 */ 					return __call__ (__accu1__.fromkeys, __accu1__, mapping);
/* 000056 */ 				}) ());
/* 000056 */ 			}) ();
/* 000056 */ 		}
/* 000057 */ 		return __call__ (py_iter, null, d);
/* 000057 */ 	});},
/* 000057 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000059 */ 	get __contains__ () {return __get__ (this, function (self, key) {
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000060 */ 		return __call__ (any, null, (function () {
/* 000060 */ 			var __accu0__ = [];
/* 000060 */ 			var __iterable0__ = self.maps;
/* 000060 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000060 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000060 */ 				(function () {
/* 000060 */ 					var __accu1__ = __accu0__;
/* 000060 */ 					return __call__ (__accu1__.append, __accu1__, __in__ (key, m));
/* 000060 */ 				}) ();
/* 000060 */ 			}
/* 000060 */ 			return py_iter (__accu0__);
/* 000060 */ 		}) ());
/* 000060 */ 	});},
/* 000062 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		return __call__ (any, null, self.maps);
/* 000063 */ 	});},
/* 000065 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000066 */ 		return (function () {
/* 000066 */ 			var __accu0__ = '{!r}({!r})';
/* 000066 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.maps);
/* 000066 */ 		}) ();
/* 000066 */ 	});},
/* 000070 */ 	get fromkeys () {return __getcm__ (this, function (cls, iterable) {
/* 000070 */ 		if (arguments.length) {
/* 000070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 					switch (__attrib0__) {
/* 000070 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 					}
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 			var args = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
/* 000070 */ 		}
/* 000070 */ 		else {
/* 000070 */ 			var args = tuple ();
/* 000070 */ 		}
/* 000072 */ 		return __call__ (cls, null, (function () {
/* 000072 */ 			var __accu0__ = dict;
/* 000072 */ 			return __call__ (__accu0__.fromkeys, __accu0__, iterable, ...args);
/* 000072 */ 		}) ());
/* 000072 */ 	});},
/* 000074 */ 	get copy () {return __get__ (this, function (self) {
/* 000074 */ 		if (arguments.length) {
/* 000074 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000074 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000074 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000074 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000074 */ 					switch (__attrib0__) {
/* 000074 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 					}
/* 000074 */ 				}
/* 000074 */ 			}
/* 000074 */ 		}
/* 000074 */ 		else {
/* 000074 */ 		}
/* 000076 */ 		return (function () {
/* 000076 */ 			var __accu0__ = self;
/* 000076 */ 			return __call__ (__accu0__.__class__, __accu0__, (function () {
/* 000076 */ 				var __accu1__ = __getitem__ (self.maps, 0);
/* 000076 */ 				return __call__ (__accu1__.copy, __accu1__);
/* 000076 */ 			}) (), ...__getslice__ (self.maps, 1, null, 1));
/* 000076 */ 		}) ();
/* 000076 */ 	});},
/* 000078 */ 	__copy__: copy,
/* 000080 */ 	get new_child () {return __get__ (this, function (self, m) {
/* 000080 */ 		if (typeof m == 'undefined' || (m != null && m.hasOwnProperty ("__kwargtrans__"))) {;
/* 000080 */ 			var m = null;
/* 000080 */ 		};
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000084 */ 		if (__t__ (m === null)) {
/* 000085 */ 			var m = dict ({});
/* 000085 */ 		}
/* 000086 */ 		return (function () {
/* 000086 */ 			var __accu0__ = self;
/* 000086 */ 			return __call__ (__accu0__.__class__, __accu0__, m, ...self.maps);
/* 000086 */ 		}) ();
/* 000086 */ 	});},
/* 000089 */ 	get _get_parents () {return __get__ (this, function (self) {
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000091 */ 		return (function () {
/* 000091 */ 			var __accu0__ = self;
/* 000091 */ 			return __call__ (__accu0__.__class__, __accu0__, ...__getslice__ (self.maps, 1, null, 1));
/* 000091 */ 		}) ();
/* 000091 */ 	});},
/* 000093 */ 	get __setitem__ () {return __get__ (this, function (self, key, value) {
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000094 */ 		__setitem__ (__getitem__ (self.maps, 0), key, value);
/* 000094 */ 	});},
/* 000096 */ 	get __delitem__ () {return __get__ (this, function (self, key) {
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000097 */ 		try {
/* 000097 */ 			delete __getitem__ (__getitem__ (self.maps, 0), key);
/* 000097 */ 		}
/* 000097 */ 		catch (__except0__) {
/* 000097 */ 			if (isinstance (__except0__, KeyError)) {
/* 000100 */ 				var __except1__ = __call__ (KeyError, null, 'Key not found in the first mapping: {}'.format (key));
/* 000100 */ 				__except1__.__cause__ = null;
/* 000100 */ 				throw __except1__;
/* 000100 */ 			}
/* 000100 */ 			else {
/* 000100 */ 				throw __except0__;
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 	});},
/* 000102 */ 	get py_popitem () {return __get__ (this, function (self) {
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000104 */ 		try {
/* 000105 */ 			return (function () {
/* 000105 */ 				var __accu0__ = __getitem__ (self.maps, 0);
/* 000105 */ 				return __call__ (__accu0__.py_popitem, __accu0__);
/* 000105 */ 			}) ();
/* 000105 */ 		}
/* 000105 */ 		catch (__except0__) {
/* 000105 */ 			if (isinstance (__except0__, KeyError)) {
/* 000107 */ 				var __except1__ = __call__ (KeyError, null, 'No keys found in the first mapping.');
/* 000107 */ 				__except1__.__cause__ = null;
/* 000107 */ 				throw __except1__;
/* 000107 */ 			}
/* 000107 */ 			else {
/* 000107 */ 				throw __except0__;
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 	});},
/* 000109 */ 	get py_pop () {return __get__ (this, function (self, key) {
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 			var args = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 			var args = tuple ();
/* 000109 */ 		}
/* 000111 */ 		try {
/* 000112 */ 			return (function () {
/* 000112 */ 				var __accu0__ = __getitem__ (self.maps, 0);
/* 000112 */ 				return __call__ (__accu0__.py_pop, __accu0__, key, ...args);
/* 000112 */ 			}) ();
/* 000112 */ 		}
/* 000112 */ 		catch (__except0__) {
/* 000112 */ 			if (isinstance (__except0__, KeyError)) {
/* 000114 */ 				var __except1__ = __call__ (KeyError, null, 'Key not found in the first mapping: {}'.format (key));
/* 000114 */ 				__except1__.__cause__ = null;
/* 000114 */ 				throw __except1__;
/* 000114 */ 			}
/* 000114 */ 			else {
/* 000114 */ 				throw __except0__;
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 	});},
/* 000116 */ 	get py_clear () {return __get__ (this, function (self) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000118 */ 		(function () {
/* 000118 */ 			var __accu0__ = __getitem__ (self.maps, 0);
/* 000118 */ 			return __call__ (__accu0__.py_clear, __accu0__);
/* 000118 */ 		}) ();
/* 000118 */ 	});},
/* 000120 */ 	get __ior__ () {return __get__ (this, function (self, other) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000121 */ 		(function () {
/* 000121 */ 			var __accu0__ = __getitem__ (self.maps, 0);
/* 000121 */ 			return __call__ (__accu0__.py_update, __accu0__, other);
/* 000121 */ 		}) ();
/* 000122 */ 		return self;
/* 000122 */ 	});},
/* 000124 */ 	get __or__ () {return __get__ (this, function (self, other) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000125 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, other, _collections_abc.Mapping))))) {
/* 000126 */ 			return NotImplemented;
/* 000126 */ 		}
/* 000127 */ 		var m = (function () {
/* 000127 */ 			var __accu0__ = self;
/* 000127 */ 			return __call__ (__accu0__.copy, __accu0__);
/* 000127 */ 		}) ();
/* 000128 */ 		(function () {
/* 000128 */ 			var __accu0__ = __getitem__ (m.maps, 0);
/* 000128 */ 			return __call__ (__accu0__.py_update, __accu0__, other);
/* 000128 */ 		}) ();
/* 000129 */ 		return m;
/* 000129 */ 	});},
/* 000131 */ 	get __ror__ () {return __get__ (this, function (self, other) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000132 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, other, _collections_abc.Mapping))))) {
/* 000133 */ 			return NotImplemented;
/* 000133 */ 		}
/* 000134 */ 		var m = __call__ (dict, null, other);
/* 000135 */ 		var __iterable0__ = __call__ (py_reversed, null, self.maps);
/* 000135 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000135 */ 			var child = __getitem__ (__iterable0__, __index0__);
/* 000136 */ 			(function () {
/* 000136 */ 				var __accu0__ = m;
/* 000136 */ 				return __call__ (__accu0__.py_update, __accu0__, child);
/* 000136 */ 			}) ();
/* 000136 */ 		}
/* 000137 */ 		return (function () {
/* 000137 */ 			var __accu0__ = self;
/* 000137 */ 			return __call__ (__accu0__.__class__, __accu0__, m);
/* 000137 */ 		}) ();
/* 000137 */ 	});}
/* 000137 */ });
/* 000137 */ Object.defineProperty (ChainMap, 'parents', property.call (ChainMap, ChainMap._get_parents));;
/* 000006 */ 
//# sourceMappingURL=collections.map