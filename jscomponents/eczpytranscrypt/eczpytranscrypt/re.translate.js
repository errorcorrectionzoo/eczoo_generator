/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:53
/* 000008 */ var re = {};
/* 000008 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000008 */ import * as __module_re__ from './re.js';
/* 000008 */ __nest__ (re, '', __module_re__);
/* 000001 */ var __name__ = 're.translate';
/* 000012 */ export var VERBOSE = false;
/* 000014 */ export var MAX_SHIFTREDUCE_LOOPS = 1000;
/* 000016 */ export var stringFlags = 'aiLmsux';
/* 000020 */ export var Group =  __class__ ('Group', [object], {
/* 000020 */ 	__module__: __name__,
/* 000021 */ 	get __init__ () {return __get__ (this, function (self, start, end, klass) {
/* 000021 */ 		if (arguments.length) {
/* 000021 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000021 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000021 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000021 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000021 */ 					switch (__attrib0__) {
/* 000021 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000021 */ 						case 'start': var start = __allkwargs0__ [__attrib0__]; break;
/* 000021 */ 						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
/* 000021 */ 						case 'klass': var klass = __allkwargs0__ [__attrib0__]; break;
/* 000021 */ 					}
/* 000021 */ 				}
/* 000021 */ 			}
/* 000021 */ 		}
/* 000021 */ 		else {
/* 000021 */ 		}
/* 000022 */ 		self.start = start;
/* 000023 */ 		self.end = end;
/* 000024 */ 		self.klass = klass;
/* 000024 */ 	});},
/* 000026 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000026 */ 		if (arguments.length) {
/* 000026 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000026 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000026 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000026 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000026 */ 					switch (__attrib0__) {
/* 000026 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					}
/* 000026 */ 				}
/* 000026 */ 			}
/* 000026 */ 		}
/* 000026 */ 		else {
/* 000026 */ 		}
/* 000027 */ 		return __call__ (str, null, tuple ([self.start, self.end, self.klass]));
/* 000027 */ 	});}
/* 000027 */ });
/* 000031 */ export var generateGroupSpans = function (tokens) {
/* 000031 */ 	if (arguments.length) {
/* 000031 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000031 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000031 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000031 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000031 */ 				switch (__attrib0__) {
/* 000031 */ 					case 'tokens': var tokens = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 				}
/* 000031 */ 			}
/* 000031 */ 		}
/* 000031 */ 	}
/* 000031 */ 	else {
/* 000031 */ 	}
/* 000032 */ 	var groupInfo = [];
/* 000034 */ 	var idx = 0;
/* 000035 */ 	var __iterable0__ = tokens;
/* 000035 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000035 */ 		var token = __getitem__ (__iterable0__, __index0__);
/* 000036 */ 		if (__t__ ((function () {
/* 000036 */ 			var __accu0__ = token.py_name;
/* 000036 */ 			return __call__ (__accu0__.startswith, __accu0__, '(');
/* 000036 */ 		}) ())) {
/* 000037 */ 			(function () {
/* 000037 */ 				var __accu0__ = groupInfo;
/* 000037 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (Group, null, idx, null, token.py_name));
/* 000037 */ 			}) ();
/* 000037 */ 		}
/* 000038 */ 		else if (__t__ (__eq__ (token.py_name, ')'))) {
/* 000039 */ 			var __iterable1__ = __call__ (py_reversed, null, groupInfo);
/* 000039 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000039 */ 				var group = __getitem__ (__iterable1__, __index1__);
/* 000040 */ 				if (__t__ (group.end === null)) {
/* 000041 */ 					group.end = idx;
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000042 */ 		var idx = __call__ (__iadd__, null, idx, 1);
/* 000042 */ 	}
/* 000043 */ 	return groupInfo;
/* 000043 */ };
/* 000046 */ export var countCaptureGroups = function (tokens) {
/* 000046 */ 	if (arguments.length) {
/* 000046 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 				switch (__attrib0__) {
/* 000046 */ 					case 'tokens': var tokens = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 				}
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 	}
/* 000046 */ 	else {
/* 000046 */ 	}
/* 000047 */ 	var groupInfo = __call__ (generateGroupSpans, null, tokens);
/* 000048 */ 	var count = 0;
/* 000050 */ 	var __iterable0__ = tokens;
/* 000050 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000050 */ 		var token = __getitem__ (__iterable0__, __index0__);
/* 000051 */ 		if (__t__ (__eq__ (token.py_name, '('))) {
/* 000052 */ 			var count = __call__ (__iadd__, null, count, 1);
/* 000052 */ 		}
/* 000052 */ 	}
/* 000054 */ 	return count;
/* 000054 */ };
/* 000058 */ export var getCaptureGroup = function (groupInfo, namedGroups, groupRef) {
/* 000058 */ 	if (arguments.length) {
/* 000058 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 				switch (__attrib0__) {
/* 000058 */ 					case 'groupInfo': var groupInfo = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 					case 'namedGroups': var namedGroups = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 					case 'groupRef': var groupRef = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 	}
/* 000058 */ 	else {
/* 000058 */ 	}
/* 000059 */ 	try {
/* 000060 */ 		var id = __call__ (int, null, groupRef);
/* 000060 */ 	}
/* 000060 */ 	catch (__except0__) {
/* 000062 */ 		var id = __getitem__ (namedGroups, groupRef);
/* 000062 */ 	}
/* 000063 */ 	var search = 0;
/* 000064 */ 	var __iterable0__ = groupInfo;
/* 000064 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000064 */ 		var group = __getitem__ (__iterable0__, __index0__);
/* 000065 */ 		if (__t__ (__eq__ (group.klass, '('))) {
/* 000066 */ 			var search = __call__ (__iadd__, null, search, 1);
/* 000067 */ 			if (__t__ (__eq__ (search, id))) {
/* 000068 */ 				return group;
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 	}
/* 000068 */ };
/* 000080 */ export var splitIfElse = function (tokens, namedGroups) {
/* 000080 */ 	if (arguments.length) {
/* 000080 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 				switch (__attrib0__) {
/* 000080 */ 					case 'tokens': var tokens = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					case 'namedGroups': var namedGroups = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 	}
/* 000080 */ 	else {
/* 000080 */ 	}
/* 000081 */ 	var variants = [];
/* 000082 */ 	var groupInfo = __call__ (generateGroupSpans, null, tokens);
/* 000084 */ 	var __iterable0__ = groupInfo;
/* 000084 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000084 */ 		var group = __getitem__ (__iterable0__, __index0__);
/* 000085 */ 		if (__t__ (__eq__ (group.klass, '(?<'))) {
/* 000086 */ 			var iff = __getslice__ (tokens, 0, null, 1);
/* 000087 */ 			var els = __getslice__ (tokens, 0, null, 1);
/* 000088 */ 			var conStart = group.start;
/* 000089 */ 			var conEnd = group.end;
/* 000091 */ 			var ref = __getitem__ (tokens, __add__ (conStart, 1)).py_name;
/* 000092 */ 			var captureGroup = __call__ (getCaptureGroup, null, groupInfo, namedGroups, ref);
/* 000093 */ 			var captureGroupModifier = __getitem__ (tokens, __add__ (captureGroup.end, 1));
/* 000095 */ 			if (__t__ (__t__ (__in__ (captureGroupModifier.py_name, ['?', '*'])) || (function () {
/* 000095 */ 				var __accu0__ = captureGroupModifier.py_name;
/* 000095 */ 				return __call__ (__accu0__.startswith, __accu0__, '{0,');
/* 000095 */ 			}) ())) {
/* 000096 */ 				if (__t__ (__eq__ (captureGroupModifier.py_name, '?'))) {
/* 000097 */ 					__setitem__ (iff, __add__ (captureGroup.end, 1), null);
/* 000097 */ 				}
/* 000098 */ 				else if (__t__ (__eq__ (captureGroupModifier.py_name, '*'))) {
/* 000099 */ 					__setitem__ (iff, __add__ (captureGroup.end, 1), __call__ (Token, null, '+'));
/* 000099 */ 				}
/* 000100 */ 				else if (__t__ ((function () {
/* 000100 */ 					var __accu0__ = captureGroupModifier.py_name;
/* 000100 */ 					return __call__ (__accu0__.startswith, __accu0__, '{0,');
/* 000100 */ 				}) ())) {
/* 000101 */ 					__setslice__ (__getitem__ (iff, __add__ (captureGroup.end, 1)).py_name, 0, 3, null, '{1,');
/* 000101 */ 				}
/* 000102 */ 				__setitem__ (els, __add__ (captureGroup.end, 1), null);
/* 000104 */ 				var hasElse = false;
/* 000105 */ 				for (var idx = conStart; idx < conEnd; idx++) {
/* 000106 */ 					if (__t__ (__eq__ (__getitem__ (tokens, idx).py_name, '|'))) {
/* 000107 */ 						var hasElse = true;
/* 000108 */ 						(function () {
/* 000108 */ 							var __accu0__ = els;
/* 000108 */ 							return __call__ (__accu0__.py_pop, __accu0__, conEnd);
/* 000108 */ 						}) ();
/* 000109 */ 						__setslice__ (iff, idx, __add__ (conEnd, 1), null, []);
/* 000110 */ 						__setslice__ (els, conStart, __add__ (idx, 1), null, []);
/* 000110 */ 						break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000113 */ 				if (__t__ (!__t__ ((hasElse)))) {
/* 000114 */ 					__setslice__ (els, conStart, __add__ (conEnd, 1), null, []);
/* 000115 */ 					(function () {
/* 000115 */ 						var __accu0__ = iff;
/* 000115 */ 						return __call__ (__accu0__.py_pop, __accu0__, conEnd);
/* 000115 */ 					}) ();
/* 000115 */ 				}
/* 000117 */ 				__setslice__ (iff, conStart, __add__ (conStart, 3), null, []);
/* 000118 */ 				__setslice__ (els, captureGroup.start, __add__ (captureGroup.end, 1), null, [__call__ (Token, null, '('), __call__ (Token, null, ')')]);
/* 000119 */ 				(function () {
/* 000119 */ 					var __accu0__ = iff;
/* 000119 */ 					return __call__ (__accu0__.remove, __accu0__, null);
/* 000119 */ 				}) ();
/* 000120 */ 				(function () {
/* 000120 */ 					var __accu0__ = els;
/* 000120 */ 					return __call__ (__accu0__.remove, __accu0__, null);
/* 000120 */ 				}) ();
/* 000121 */ 				(function () {
/* 000121 */ 					var __accu0__ = variants;
/* 000121 */ 					return __call__ (__accu0__.append, __accu0__, iff);
/* 000121 */ 				}) ();
/* 000122 */ 				(function () {
/* 000122 */ 					var __accu0__ = variants;
/* 000122 */ 					return __call__ (__accu0__.append, __accu0__, els);
/* 000122 */ 				}) ();
/* 000122 */ 			}
/* 000123 */ 			else {
/* 000125 */ 				var pastIff = false;
/* 000126 */ 				for (var idx = conStart; idx < conEnd; idx++) {
/* 000127 */ 					if (__t__ (__eq__ (__getitem__ (iff, idx).py_name, '|'))) {
/* 000128 */ 						var iff = __getslice__ (tokens, 0, idx, 1);
/* 000129 */ 						(function () {
/* 000129 */ 							var __accu0__ = iff;
/* 000129 */ 							return __call__ (__accu0__.extend, __accu0__, __getslice__ (tokens, __add__ (conEnd, 1), null, 1));
/* 000129 */ 						}) ();
/* 000129 */ 						break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000131 */ 				__setslice__ (iff, conStart, __add__ (conStart, 3), null, []);
/* 000132 */ 				(function () {
/* 000132 */ 					var __accu0__ = variants;
/* 000132 */ 					return __call__ (__accu0__.append, __accu0__, iff);
/* 000132 */ 				}) ();
/* 000132 */ 			}
/* 000132 */ 			break;
/* 000132 */ 		}
/* 000132 */ 	}
/* 000135 */ 	if (__t__ (!__t__ ((variants)))) {
/* 000136 */ 		return [tokens];
/* 000136 */ 	}
/* 000138 */ 	var allVariants = [];
/* 000139 */ 	var __iterable0__ = variants;
/* 000139 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000139 */ 		var variant = __getitem__ (__iterable0__, __index0__);
/* 000140 */ 		(function () {
/* 000140 */ 			var __accu0__ = allVariants;
/* 000140 */ 			return __call__ (__accu0__.extend, __accu0__, __call__ (splitIfElse, null, variant, namedGroups));
/* 000140 */ 		}) ();
/* 000140 */ 	}
/* 000141 */ 	return allVariants;
/* 000141 */ };
/* 000144 */ export var Token =  __class__ ('Token', [object], {
/* 000144 */ 	__module__: __name__,
/* 000145 */ 	get __init__ () {return __get__ (this, function (self, py_name, paras, pure) {
/* 000145 */ 		if (typeof paras == 'undefined' || (paras != null && paras.hasOwnProperty ("__kwargtrans__"))) {;
/* 000145 */ 			var paras = null;
/* 000145 */ 		};
/* 000145 */ 		if (typeof pure == 'undefined' || (pure != null && pure.hasOwnProperty ("__kwargtrans__"))) {;
/* 000145 */ 			var pure = false;
/* 000145 */ 		};
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'paras': var paras = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'pure': var pure = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000146 */ 		if (__t__ (paras === null)) {
/* 000147 */ 			var paras = [];
/* 000147 */ 		}
/* 000148 */ 		self.py_name = py_name;
/* 000149 */ 		self.paras = paras;
/* 000150 */ 		self.pure = pure;
/* 000152 */ 		self.isModeGroup = false;
/* 000152 */ 	});},
/* 000154 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000155 */ 		return self.py_name;
/* 000155 */ 	});},
/* 000157 */ 	get resolve () {return __get__ (this, function (self) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000158 */ 		var paras = '';
/* 000159 */ 		var __iterable0__ = self.paras;
/* 000159 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000159 */ 			var para = __getitem__ (__iterable0__, __index0__);
/* 000160 */ 			var paras = __call__ (__iadd__, null, paras, __call__ (str, null, para));
/* 000160 */ 		}
/* 000162 */ 		return __add__ (self.py_name, paras);
/* 000162 */ 	});}
/* 000162 */ });
/* 000165 */ export var shift = function (stack, queue) {
/* 000165 */ 	if (arguments.length) {
/* 000165 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 				switch (__attrib0__) {
/* 000165 */ 					case 'stack': var stack = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					case 'queue': var queue = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 	}
/* 000165 */ 	else {
/* 000165 */ 	}
/* 000166 */ 	var done = !__t__ ((__call__ (bool, null, queue)));
/* 000167 */ 	if (__t__ (!__t__ ((done)))) {
/* 000168 */ 		(function () {
/* 000168 */ 			var __accu0__ = stack;
/* 000168 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (Token, null, __getitem__ (queue, 0), [], true));
/* 000168 */ 		}) ();
/* 000169 */ 		var queue = __getslice__ (queue, 1, null, 1);
/* 000169 */ 	}
/* 000170 */ 	return tuple ([stack, queue, done]);
/* 000170 */ };
/* 000174 */ export var shiftReduce = function (stack, queue, namedGroups, flags) {
/* 000174 */ 	if (arguments.length) {
/* 000174 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 				switch (__attrib0__) {
/* 000174 */ 					case 'stack': var stack = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					case 'queue': var queue = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					case 'namedGroups': var namedGroups = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 	}
/* 000174 */ 	else {
/* 000174 */ 	}
/* 000175 */ 	var done = false;
/* 000176 */ 	var high = __sub__ (__call__ (len, null, stack), 1);
/* 000178 */ 	if (__t__ (__lt__ (__call__ (len, null, stack), 2))) {
/* 000179 */ 		var __left0__ = __call__ (shift, null, stack, queue);
/* 000179 */ 		var stack = __left0__ [0];
/* 000179 */ 		var queue = __left0__ [1];
/* 000179 */ 		var done = __left0__ [2];
/* 000180 */ 		return tuple ([stack, queue, flags, done]);
/* 000180 */ 	}
/* 000182 */ 	var s0 = (__t__ (__gt__ (__call__ (len, null, stack), 0)) ? __getitem__ (stack, high) : __call__ (Token, null, ''));
/* 000183 */ 	var s1 = (__t__ (__gt__ (__call__ (len, null, stack), 1)) ? __getitem__ (stack, __sub__ (high, 1)) : __call__ (Token, null, ''));
/* 000185 */ 	if (__t__ (VERBOSE)) {
/* 000186 */ 		var __iterable0__ = stack;
/* 000186 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000186 */ 			var token = __getitem__ (__iterable0__, __index0__);
/* 000187 */ 			(function () {
/* 000187 */ 				var __accu0__ = console;
/* 000187 */ 				return __call__ (__accu0__.log, __accu0__, (function () {
/* 000187 */ 					var __accu1__ = token;
/* 000187 */ 					return __call__ (__accu1__.resolve, __accu1__);
/* 000187 */ 				}) (), '\t', __kwargtrans__ ({end: ''}));
/* 000187 */ 			}) ();
/* 000187 */ 		}
/* 000188 */ 		(function () {
/* 000188 */ 			var __accu0__ = console;
/* 000188 */ 			return __call__ (__accu0__.log, __accu0__, '');
/* 000188 */ 		}) ();
/* 000188 */ 	}
/* 000190 */ 	if (__t__ (__eq__ (s1.py_name, '\\'))) {
/* 000191 */ 		if (__t__ (__eq__ (s0.py_name, 'A'))) {
/* 000192 */ 			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '^')]);
/* 000192 */ 		}
/* 000194 */ 		else if (__t__ (__eq__ (s0.py_name, 'a'))) {
/* 000195 */ 			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '\\07')]);
/* 000195 */ 		}
/* 000197 */ 		else if (__t__ (__eq__ (s0.py_name, 'Z'))) {
/* 000198 */ 			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '$')]);
/* 000198 */ 		}
/* 000199 */ 		else {
/* 000201 */ 			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, __add__ ('\\', s0.py_name))]);
/* 000201 */ 		}
/* 000201 */ 	}
/* 000203 */ 	else if (__t__ (__t__ (__eq__ (s0.py_name, '$')) && s0.pure)) {
/* 000204 */ 		(function () {
/* 000204 */ 			var __accu0__ = stack;
/* 000204 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000204 */ 		}) ();
/* 000205 */ 		(function () {
/* 000205 */ 			var __accu0__ = stack;
/* 000205 */ 			return __call__ (__accu0__.extend, __accu0__, [__call__ (Token, null, '(?='), __call__ (Token, null, '\\n'), __call__ (Token, null, '?'), __call__ (Token, null, '$'), __call__ (Token, null, ')')]);
/* 000205 */ 		}) ();
/* 000205 */ 	}
/* 000207 */ 	else if (__t__ (__eq__ (s1.py_name, '{'))) {
/* 000208 */ 		if (__t__ (__t__ (__eq__ (s0.py_name, ',')) && __eq__ (__call__ (len, null, s1.paras), 0))) {
/* 000209 */ 			(function () {
/* 000209 */ 				var __accu0__ = s1.paras;
/* 000209 */ 				return __call__ (__accu0__.append, __accu0__, '0');
/* 000209 */ 			}) ();
/* 000210 */ 			(function () {
/* 000210 */ 				var __accu0__ = s1.paras;
/* 000210 */ 				return __call__ (__accu0__.append, __accu0__, ',');
/* 000210 */ 			}) ();
/* 000210 */ 		}
/* 000212 */ 		else if (__t__ (__eq__ (s0.py_name, '}'))) {
/* 000213 */ 			(function () {
/* 000213 */ 				var __accu0__ = s1.paras;
/* 000213 */ 				return __call__ (__accu0__.append, __accu0__, '}');
/* 000213 */ 			}) ();
/* 000214 */ 			s1.py_name = (function () {
/* 000214 */ 				var __accu0__ = s1;
/* 000214 */ 				return __call__ (__accu0__.resolve, __accu0__);
/* 000214 */ 			}) ();
/* 000215 */ 			s1.paras = [];
/* 000215 */ 		}
/* 000216 */ 		else {
/* 000217 */ 			(function () {
/* 000217 */ 				var __accu0__ = s1.paras;
/* 000217 */ 				return __call__ (__accu0__.append, __accu0__, s0.py_name);
/* 000217 */ 			}) ();
/* 000217 */ 		}
/* 000219 */ 		var stack = __getslice__ (stack, 0, __neg__ (1), 1);
/* 000219 */ 	}
/* 000221 */ 	else if (__t__ (__t__ (__eq__ (s1.py_name, '[')) && __eq__ (s0.py_name, '^'))) {
/* 000222 */ 		__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '[^')]);
/* 000222 */ 	}
/* 000224 */ 	else if (__t__ (__t__ (__eq__ (s1.py_name, '(')) && __eq__ (s0.py_name, '?'))) {
/* 000225 */ 		__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '(?')]);
/* 000225 */ 	}
/* 000227 */ 	else if (__t__ (__t__ (__in__ (s1.py_name, ['*', '+', '?'])) && __eq__ (s0.py_name, '?'))) {
/* 000228 */ 		__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, __add__ (s1.py_name, '?'))]);
/* 000228 */ 	}
/* 000230 */ 	else if (__t__ (__t__ (s1.isModeGroup) && __eq__ (s0.py_name, ')'))) {
/* 000231 */ 		var stack = __getslice__ (stack, 0, __neg__ (2), 1);
/* 000231 */ 	}
/* 000233 */ 	else if (__t__ (__eq__ (s1.py_name, '(?'))) {
/* 000234 */ 		if (__t__ (__in__ (s0.py_name, stringFlags))) {
/* 000235 */ 			if (__t__ (__eq__ (s0.py_name, 'i'))) {
/* 000236 */ 				var flags = __call__ (__ior__, null, flags, re.IGNORECASE);
/* 000236 */ 			}
/* 000237 */ 			else if (__t__ (__eq__ (s0.py_name, 'L'))) {
/* 000238 */ 				var flags = __call__ (__ior__, null, flags, re.LOCALE);
/* 000238 */ 			}
/* 000239 */ 			else if (__t__ (__eq__ (s0.py_name, 'm'))) {
/* 000240 */ 				var flags = __call__ (__ior__, null, flags, re.MULTILINE);
/* 000240 */ 			}
/* 000241 */ 			else if (__t__ (__eq__ (s0.py_name, 's'))) {
/* 000242 */ 				var flags = __call__ (__ior__, null, flags, re.DOTALL);
/* 000242 */ 			}
/* 000243 */ 			else if (__t__ (__eq__ (s0.py_name, 'u'))) {
/* 000244 */ 				var flags = __call__ (__ior__, null, flags, re.UNICODE);
/* 000244 */ 			}
/* 000245 */ 			else if (__t__ (__eq__ (s0.py_name, 'x'))) {
/* 000246 */ 				var flags = __call__ (__ior__, null, flags, re.VERBOSE);
/* 000246 */ 			}
/* 000247 */ 			else if (__t__ (__eq__ (s0.py_name, 'a'))) {
/* 000248 */ 				var flags = __call__ (__ior__, null, flags, re.ASCII);
/* 000248 */ 			}
/* 000250 */ 			(function () {
/* 000250 */ 				var __accu0__ = stack;
/* 000250 */ 				return __call__ (__accu0__.py_pop, __accu0__);
/* 000250 */ 			}) ();
/* 000251 */ 			s1.isModeGroup = true;
/* 000251 */ 		}
/* 000252 */ 		else {
/* 000254 */ 			if (__t__ (__eq__ (s0.py_name, '('))) {
/* 000255 */ 				s0.py_name = '<';
/* 000255 */ 			}
/* 000257 */ 			var newToken = __call__ (Token, null, __add__ ('(?', s0.py_name));
/* 000258 */ 			__setslice__ (stack, __neg__ (2), null, null, [newToken]);
/* 000258 */ 		}
/* 000258 */ 	}
/* 000260 */ 	else if (__t__ (__eq__ (s1.py_name, '(?<'))) {
/* 000261 */ 		if (__t__ (__eq__ (s0.py_name, ')'))) {
/* 000262 */ 			__setslice__ (stack, __neg__ (1), null, null, [__call__ (Token, null, (function () {
/* 000262 */ 				var __accu0__ = '';
/* 000262 */ 				return __call__ (__accu0__.join, __accu0__, s1.paras);
/* 000262 */ 			}) ()), __call__ (Token, null, '>')]);
/* 000263 */ 			s1.paras = [];
/* 000263 */ 		}
/* 000264 */ 		else {
/* 000265 */ 			(function () {
/* 000265 */ 				var __accu0__ = s1.paras;
/* 000265 */ 				return __call__ (__accu0__.append, __accu0__, s0.py_name);
/* 000265 */ 			}) ();
/* 000266 */ 			(function () {
/* 000266 */ 				var __accu0__ = stack;
/* 000266 */ 				return __call__ (__accu0__.py_pop, __accu0__);
/* 000266 */ 			}) ();
/* 000266 */ 		}
/* 000266 */ 	}
/* 000268 */ 	else if (__t__ (__eq__ (s1.py_name, '(?P'))) {
/* 000269 */ 		__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, __add__ ('(?P', s0.py_name))]);
/* 000269 */ 	}
/* 000271 */ 	else if (__t__ (__eq__ (s1.py_name, '(?P<'))) {
/* 000272 */ 		if (__t__ (__eq__ (s0.py_name, '>'))) {
/* 000274 */ 			__setitem__ (namedGroups, (function () {
/* 000274 */ 				var __accu0__ = '';
/* 000274 */ 				return __call__ (__accu0__.join, __accu0__, s1.paras);
/* 000274 */ 			}) (), __add__ (__call__ (countCaptureGroups, null, stack), 1));
/* 000275 */ 			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '(')]);
/* 000275 */ 		}
/* 000276 */ 		else {
/* 000277 */ 			(function () {
/* 000277 */ 				var __accu0__ = s1.paras;
/* 000277 */ 				return __call__ (__accu0__.append, __accu0__, s0.py_name);
/* 000277 */ 			}) ();
/* 000278 */ 			(function () {
/* 000278 */ 				var __accu0__ = stack;
/* 000278 */ 				return __call__ (__accu0__.py_pop, __accu0__);
/* 000278 */ 			}) ();
/* 000278 */ 		}
/* 000278 */ 	}
/* 000280 */ 	else if (__t__ (__eq__ (s1.py_name, '(?P='))) {
/* 000281 */ 		if (__t__ (__eq__ (s0.py_name, ')'))) {
/* 000282 */ 			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, __add__ ('\\', __call__ (str, null, __getitem__ (namedGroups, __getitem__ (s1.paras, 0)))))]);
/* 000282 */ 		}
/* 000283 */ 		else if (__t__ (!__t__ ((s1.paras)))) {
/* 000284 */ 			(function () {
/* 000284 */ 				var __accu0__ = s1.paras;
/* 000284 */ 				return __call__ (__accu0__.append, __accu0__, s0.py_name);
/* 000284 */ 			}) ();
/* 000285 */ 			(function () {
/* 000285 */ 				var __accu0__ = stack;
/* 000285 */ 				return __call__ (__accu0__.py_pop, __accu0__);
/* 000285 */ 			}) ();
/* 000285 */ 		}
/* 000286 */ 		else {
/* 000287 */ 			__setitem__ (s1.paras, 0, __call__ (__iadd__, null, __getitem__ (s1.paras, 0), s0.py_name));
/* 000288 */ 			(function () {
/* 000288 */ 				var __accu0__ = stack;
/* 000288 */ 				return __call__ (__accu0__.py_pop, __accu0__);
/* 000288 */ 			}) ();
/* 000288 */ 		}
/* 000288 */ 	}
/* 000290 */ 	else if (__t__ (__eq__ (s1.py_name, '(?#'))) {
/* 000291 */ 		if (__t__ (__eq__ (s0.py_name, ')'))) {
/* 000292 */ 			var stack = __getslice__ (stack, 0, __neg__ (2), 1);
/* 000292 */ 		}
/* 000293 */ 		else {
/* 000294 */ 			var stack = __getslice__ (stack, 0, __neg__ (1), 1);
/* 000294 */ 		}
/* 000294 */ 	}
/* 000295 */ 	else {
/* 000297 */ 		var __left0__ = __call__ (shift, null, stack, queue);
/* 000297 */ 		var stack = __left0__ [0];
/* 000297 */ 		var queue = __left0__ [1];
/* 000297 */ 		var done = __left0__ [2];
/* 000297 */ 	}
/* 000299 */ 	return tuple ([stack, queue, flags, done]);
/* 000299 */ };
/* 000304 */ export var translate = function (rgx) {
/* 000304 */ 	if (arguments.length) {
/* 000304 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 				switch (__attrib0__) {
/* 000304 */ 					case 'rgx': var rgx = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 	}
/* 000304 */ 	else {
/* 000304 */ 	}
/* 000306 */ 	var stack = [];
/* 000307 */ 	var queue = __call__ (list, null, rgx);
/* 000309 */ 	var flags = 0;
/* 000310 */ 	var namedGroups = __call__ (dict, null);
/* 000312 */ 	var nloop = 0;
/* 000314 */ 	while (__t__ (true)) {
/* 000315 */ 		var nloop = __call__ (__iadd__, null, nloop, 1);
/* 000316 */ 		if (__t__ (__gt__ (nloop, MAX_SHIFTREDUCE_LOOPS))) {
/* 000317 */ 			var __except0__ = __call__ (Exception, null, 'Too many iterations in converting regex from Python to JavaScript');
/* 000317 */ 			__except0__.__cause__ = null;
/* 000317 */ 			throw __except0__;
/* 000317 */ 		}
/* 000319 */ 		var __left0__ = __call__ (shiftReduce, null, stack, queue, namedGroups, flags);
/* 000319 */ 		var stack = __left0__ [0];
/* 000319 */ 		var queue = __left0__ [1];
/* 000319 */ 		var flags = __left0__ [2];
/* 000319 */ 		var done = __left0__ [3];
/* 000320 */ 		if (__t__ (done)) {
/* 000320 */ 			break;
/* 000320 */ 		}
/* 000320 */ 	}
/* 000323 */ 	var variants = __call__ (splitIfElse, null, stack, namedGroups);
/* 000324 */ 	var n_splits = __call__ (len, null, variants);
/* 000326 */ 	var final = [];
/* 000327 */ 	for (var i = 0; i < __call__ (len, null, variants); i++) {
/* 000328 */ 		(function () {
/* 000328 */ 			var __accu0__ = final;
/* 000328 */ 			return __call__ (__accu0__.extend, __accu0__, __getitem__ (variants, i));
/* 000328 */ 		}) ();
/* 000329 */ 		if (__t__ (__lt__ (i, __sub__ (__call__ (len, null, variants), 1)))) {
/* 000330 */ 			(function () {
/* 000330 */ 				var __accu0__ = final;
/* 000330 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (Token, null, '|'));
/* 000330 */ 			}) ();
/* 000330 */ 		}
/* 000330 */ 	}
/* 000331 */ 	var stack = final;
/* 000333 */ 	var groupInfo = __call__ (generateGroupSpans, null, stack);
/* 000334 */ 	var resolvedTokens = [];
/* 000336 */ 	var __iterable0__ = stack;
/* 000336 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000336 */ 		var token = __getitem__ (__iterable0__, __index0__);
/* 000337 */ 		var stringed = (function () {
/* 000337 */ 			var __accu0__ = token;
/* 000337 */ 			return __call__ (__accu0__.resolve, __accu0__);
/* 000337 */ 		}) ();
/* 000338 */ 		if (__t__ (__t__ (__and__ (flags, re.DOTALL)) && __eq__ (stringed, '.'))) {
/* 000339 */ 			var stringed = '[\\s\\S]';
/* 000339 */ 		}
/* 000340 */ 		(function () {
/* 000340 */ 			var __accu0__ = resolvedTokens;
/* 000340 */ 			return __call__ (__accu0__.append, __accu0__, stringed);
/* 000340 */ 		}) ();
/* 000340 */ 	}
/* 000341 */ 	return tuple ([resolvedTokens, flags, namedGroups, __call__ (countCaptureGroups, null, stack), n_splits]);
/* 000341 */ };
/* 000008 */ 
//# sourceMappingURL=re.translate.map