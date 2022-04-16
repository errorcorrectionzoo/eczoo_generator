/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:37:14
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000040 */ import * as __module_logging__ from './logging.js';
/* 000040 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ import * as _util from './pylatexenc._util.js';
/* 000037 */ export {_util};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._latexcontextdb';
/* 000041 */ export var logger = (function () {
/* 000041 */ 	var __accu0__ = logging;
/* 000041 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000041 */ }) ();
/* 000045 */ export var _autogen_category_prefix = '__lctxdb_new_category_';
/* 000050 */ export var LatexContextDb =  __class__ ('LatexContextDb', [object], {
/* 000050 */ 	__module__: __name__,
/* 000097 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000097 */ 		var kwargs = dict ();
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 				delete kwargs.__kwargtrans__;
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000098 */ 		__call__ (__call__ (__super__, null, LatexContextDb, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000100 */ 		self.category_list = [];
/* 000101 */ 		self.d = dict ({});
/* 000103 */ 		self.frozen = false;
/* 000107 */ 		self.lookup_chain_maps = dict ({'macros': (function () {
/* 000107 */ 			var __accu0__ = _util;
/* 000107 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000108 */ 		}) (), 'environments': (function () {
/* 000108 */ 			var __accu0__ = _util;
/* 000108 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000109 */ 		}) (), 'specials': (function () {
/* 000109 */ 			var __accu0__ = _util;
/* 000109 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000109 */ 		}) ()});
/* 000112 */ 		self.unknown_macro_spec = null;
/* 000113 */ 		self.unknown_environment_spec = null;
/* 000114 */ 		self.unknown_specials_spec = null;
/* 000116 */ 		self._autogen_category_counter = 0;
/* 000116 */ 	});},
/* 000119 */ 	get freeze () {return __get__ (this, function (self) {
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000130 */ 		self.frozen = true;
/* 000130 */ 	});},
/* 000133 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000134 */ 		return (function () {
/* 000134 */ 			var __accu0__ = '<LatexContextDb {:#x}{}>';
/* 000135 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (id, null, self), (__t__ (self.frozen) ? '' : ' unfrozen'));
/* 000135 */ 		}) ();
/* 000135 */ 	});},
/* 000140 */ 	get add_context_category () {return __get__ (this, function (self, category, macros, environments, specials, prepend, insert_before, insert_after) {
/* 000140 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var macros = [];
/* 000140 */ 		};
/* 000140 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var environments = [];
/* 000140 */ 		};
/* 000140 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var specials = [];
/* 000140 */ 		};
/* 000140 */ 		if (typeof prepend == 'undefined' || (prepend != null && prepend.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var prepend = false;
/* 000140 */ 		};
/* 000140 */ 		if (typeof insert_before == 'undefined' || (insert_before != null && insert_before.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var insert_before = null;
/* 000140 */ 		};
/* 000140 */ 		if (typeof insert_after == 'undefined' || (insert_after != null && insert_after.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var insert_after = null;
/* 000140 */ 		};
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'prepend': var prepend = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'insert_before': var insert_before = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'insert_after': var insert_after = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000173 */ 		if (__t__ (self.frozen)) {
/* 000174 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000174 */ 			__except0__.__cause__ = null;
/* 000174 */ 			throw __except0__;
/* 000174 */ 		}
/* 000176 */ 		if (__t__ (__t__ (category !== null) && (function () {
/* 000176 */ 			var __accu0__ = category;
/* 000176 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000176 */ 		}) ())) {
/* 000177 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000177 */ 				var __accu0__ = 'Category name {} is unfortunately reserved for internal use';
/* 000177 */ 				return __call__ (__accu0__.format, __accu0__, category);
/* 000177 */ 			}) ());
/* 000177 */ 			__except0__.__cause__ = null;
/* 000177 */ 			throw __except0__;
/* 000177 */ 		}
/* 000180 */ 		if (__t__ (category === null)) {
/* 000181 */ 			var __left0__ = (function () {
/* 000181 */ 				var __accu0__ = self;
/* 000181 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000181 */ 			}) ();
/* 000181 */ 			var _autogen_category_counter = __left0__ [0];
/* 000181 */ 			var category = __left0__ [1];
/* 000182 */ 			self._autogen_category_counter = __add__ (_autogen_category_counter, 1);
/* 000182 */ 		}
/* 000184 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000185 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000185 */ 				var __accu0__ = 'Category {} is already registered in the context database';
/* 000185 */ 				return __call__ (__accu0__.format, __accu0__, category);
/* 000185 */ 			}) ());
/* 000185 */ 			__except0__.__cause__ = null;
/* 000185 */ 			throw __except0__;
/* 000185 */ 		}
/* 000189 */ 		if (__t__ (__gt__ (__call__ (len, null, (function () {
/* 000189 */ 			var __accu0__ = [];
/* 000189 */ 			var __iterable0__ = tuple ([prepend, insert_before, insert_after]);
/* 000189 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000189 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000189 */ 				if (__t__ (x)) {
/* 000189 */ 					(function () {
/* 000189 */ 						var __accu1__ = __accu0__;
/* 000189 */ 						return __call__ (__accu1__.append, __accu1__, x);
/* 000189 */ 					}) ();
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 			return __accu0__;
/* 000189 */ 		}) ()), 1))) {
/* 000190 */ 			var __except0__ = __call__ (py_TypeError, null, 'add_context_category(): You may only specify one of prepend=True, insert_before=... or insert_after=...');
/* 000190 */ 			__except0__.__cause__ = null;
/* 000190 */ 			throw __except0__;
/* 000190 */ 		}
/* 000194 */ 		var category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000194 */ 			var __accu0__ = [];
/* 000194 */ 			var __iterable0__ = macros;
/* 000194 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000194 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000194 */ 				(function () {
/* 000194 */ 					var __accu1__ = __accu0__;
/* 000194 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000194 */ 				}) ();
/* 000194 */ 			}
/* 000194 */ 			return __accu0__;
/* 000195 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000195 */ 			var __accu0__ = [];
/* 000195 */ 			var __iterable0__ = environments;
/* 000195 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 				(function () {
/* 000195 */ 					var __accu1__ = __accu0__;
/* 000195 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000195 */ 				}) ();
/* 000195 */ 			}
/* 000195 */ 			return __accu0__;
/* 000196 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000196 */ 			var __accu0__ = [];
/* 000196 */ 			var __iterable0__ = specials;
/* 000196 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 				(function () {
/* 000196 */ 					var __accu1__ = __accu0__;
/* 000196 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000196 */ 				}) ();
/* 000196 */ 			}
/* 000196 */ 			return __accu0__;
/* 000196 */ 		}) ())});
/* 000199 */ 		// pass;
/* 000203 */ 		if (__t__ (prepend)) {
/* 000204 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000204 */ 				if (arguments.length) {
/* 000204 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 							switch (__attrib0__) {
/* 000204 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 							}
/* 000204 */ 						}
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 				else {
/* 000204 */ 				}
/* 000204 */ 				return (function () {
/* 000204 */ 					var __accu0__ = listobj;
/* 000204 */ 					return __call__ (__accu0__.insert, __accu0__, 0, item);
/* 000204 */ 				}) ();
/* 000204 */ 			});
/* 000204 */ 		}
/* 000205 */ 		else if (__t__ (insert_before)) {
/* 000206 */ 			if (__t__ (__in__ (insert_before, self.category_list))) {
/* 000207 */ 				var i = (function () {
/* 000207 */ 					var __accu0__ = self.category_list;
/* 000207 */ 					return __call__ (__accu0__.index, __accu0__, insert_before);
/* 000207 */ 				}) ();
/* 000207 */ 			}
/* 000208 */ 			else {
/* 000209 */ 				var i = 0;
/* 000209 */ 			}
/* 000210 */ 			var insert_fn = (function __lambda__ (listobj, item, i) {
/* 000210 */ 				if (typeof i == 'undefined' || (i != null && i.hasOwnProperty ("__kwargtrans__"))) {;
/* 000210 */ 					var i = i;
/* 000210 */ 				};
/* 000210 */ 				if (arguments.length) {
/* 000210 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 							switch (__attrib0__) {
/* 000210 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 								case 'i': var i = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 							}
/* 000210 */ 						}
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 				else {
/* 000210 */ 				}
/* 000210 */ 				return (function () {
/* 000210 */ 					var __accu0__ = listobj;
/* 000210 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000210 */ 				}) ();
/* 000210 */ 			});
/* 000210 */ 		}
/* 000211 */ 		else if (__t__ (insert_after)) {
/* 000212 */ 			if (__t__ (__in__ (insert_after, self.category_list))) {
/* 000213 */ 				var i = __add__ ((function () {
/* 000213 */ 					var __accu0__ = self.category_list;
/* 000213 */ 					return __call__ (__accu0__.index, __accu0__, insert_after);
/* 000213 */ 				}) (), 1);
/* 000213 */ 			}
/* 000214 */ 			else {
/* 000215 */ 				var i = __call__ (len, null, self.category_list);
/* 000215 */ 			}
/* 000216 */ 			var insert_fn = (function __lambda__ (listobj, item, i) {
/* 000216 */ 				if (typeof i == 'undefined' || (i != null && i.hasOwnProperty ("__kwargtrans__"))) {;
/* 000216 */ 					var i = i;
/* 000216 */ 				};
/* 000216 */ 				if (arguments.length) {
/* 000216 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 							switch (__attrib0__) {
/* 000216 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 								case 'i': var i = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 							}
/* 000216 */ 						}
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 				else {
/* 000216 */ 				}
/* 000216 */ 				return (function () {
/* 000216 */ 					var __accu0__ = listobj;
/* 000216 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000216 */ 				}) ();
/* 000216 */ 			});
/* 000216 */ 		}
/* 000217 */ 		else {
/* 000218 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000218 */ 				if (arguments.length) {
/* 000218 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 							switch (__attrib0__) {
/* 000218 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 							}
/* 000218 */ 						}
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 				else {
/* 000218 */ 				}
/* 000218 */ 				return (function () {
/* 000218 */ 					var __accu0__ = listobj;
/* 000218 */ 					return __call__ (__accu0__.append, __accu0__, item);
/* 000218 */ 				}) ();
/* 000218 */ 			});
/* 000218 */ 		}
/* 000220 */ 		__call__ (insert_fn, null, self.category_list, category);
/* 000221 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000221 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000221 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000222 */ 			__call__ (insert_fn, null, __getitem__ (self.lookup_chain_maps, which).maps, __getitem__ (category_dicts, which));
/* 000222 */ 		}
/* 000224 */ 		__setitem__ (self.d, category, category_dicts);
/* 000224 */ 	});},
/* 000227 */ 	get set_unknown_macro_spec () {return __get__ (this, function (self, macrospec) {
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'macrospec': var macrospec = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000232 */ 		if (__t__ (self.frozen)) {
/* 000233 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000233 */ 			__except0__.__cause__ = null;
/* 000233 */ 			throw __except0__;
/* 000233 */ 		}
/* 000234 */ 		self.unknown_macro_spec = macrospec;
/* 000234 */ 	});},
/* 000236 */ 	get set_unknown_environment_spec () {return __get__ (this, function (self, environmentspec) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'environmentspec': var environmentspec = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000241 */ 		if (__t__ (self.frozen)) {
/* 000242 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000242 */ 			__except0__.__cause__ = null;
/* 000242 */ 			throw __except0__;
/* 000242 */ 		}
/* 000243 */ 		self.unknown_environment_spec = environmentspec;
/* 000243 */ 	});},
/* 000245 */ 	get set_unknown_specials_spec () {return __get__ (this, function (self, specialsspec) {
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'specialsspec': var specialsspec = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000252 */ 		if (__t__ (self.frozen)) {
/* 000253 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000253 */ 			__except0__.__cause__ = null;
/* 000253 */ 			throw __except0__;
/* 000253 */ 		}
/* 000254 */ 		self.unknown_specials_spec = specialsspec;
/* 000254 */ 	});},
/* 000256 */ 	get categories () {return __get__ (this, function (self) {
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000261 */ 		return __call__ (list, null, self.category_list);
/* 000261 */ 	});},
/* 000263 */ 	get get_macro_spec () {return __get__ (this, function (self, macroname, raise_if_not_found) {
/* 000263 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000263 */ 			var raise_if_not_found = false;
/* 000263 */ 		};
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000277 */ 		try {
/* 000278 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'macros'), macroname);
/* 000278 */ 		}
/* 000278 */ 		catch (__except0__) {
/* 000278 */ 			if (isinstance (__except0__, KeyError)) {
/* 000280 */ 				if (__t__ (raise_if_not_found)) {
/* 000281 */ 					__except0__.__cause__ = null;
/* 000281 */ 					throw __except0__;
/* 000281 */ 				}
/* 000282 */ 				return self.unknown_macro_spec;
/* 000282 */ 			}
/* 000282 */ 			else {
/* 000282 */ 				throw __except0__;
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 	});},
/* 000284 */ 	get get_environment_spec () {return __get__ (this, function (self, environmentname, raise_if_not_found) {
/* 000284 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000284 */ 			var raise_if_not_found = false;
/* 000284 */ 		};
/* 000284 */ 		if (arguments.length) {
/* 000284 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 					switch (__attrib0__) {
/* 000284 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 			}
/* 000284 */ 		}
/* 000284 */ 		else {
/* 000284 */ 		}
/* 000299 */ 		try {
/* 000300 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'environments'), environmentname);
/* 000300 */ 		}
/* 000300 */ 		catch (__except0__) {
/* 000300 */ 			if (isinstance (__except0__, KeyError)) {
/* 000302 */ 				if (__t__ (raise_if_not_found)) {
/* 000303 */ 					__except0__.__cause__ = null;
/* 000303 */ 					throw __except0__;
/* 000303 */ 				}
/* 000304 */ 				return self.unknown_environment_spec;
/* 000304 */ 			}
/* 000304 */ 			else {
/* 000304 */ 				throw __except0__;
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 	});},
/* 000306 */ 	get get_specials_spec () {return __get__ (this, function (self, specials_chars, raise_if_not_found) {
/* 000306 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000306 */ 			var raise_if_not_found = false;
/* 000306 */ 		};
/* 000306 */ 		if (arguments.length) {
/* 000306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000306 */ 					switch (__attrib0__) {
/* 000306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 			}
/* 000306 */ 		}
/* 000306 */ 		else {
/* 000306 */ 		}
/* 000329 */ 		try {
/* 000330 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'specials'), specials_chars);
/* 000330 */ 		}
/* 000330 */ 		catch (__except0__) {
/* 000330 */ 			if (isinstance (__except0__, KeyError)) {
/* 000332 */ 				if (__t__ (raise_if_not_found)) {
/* 000333 */ 					__except0__.__cause__ = null;
/* 000333 */ 					throw __except0__;
/* 000333 */ 				}
/* 000334 */ 				return self.unknown_specials_spec;
/* 000334 */ 			}
/* 000334 */ 			else {
/* 000334 */ 				throw __except0__;
/* 000334 */ 			}
/* 000334 */ 		}
/* 000334 */ 	});},
/* 000336 */ 	get test_for_specials () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000336 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000336 */ 			var parsing_state = null;
/* 000336 */ 		};
/* 000336 */ 		if (arguments.length) {
/* 000336 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000336 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000336 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000336 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000336 */ 					switch (__attrib0__) {
/* 000336 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 					}
/* 000336 */ 				}
/* 000336 */ 			}
/* 000336 */ 		}
/* 000336 */ 		else {
/* 000336 */ 		}
/* 000347 */ 		var best_match_len = 0;
/* 000348 */ 		var best_match_s = null;
/* 000349 */ 		var __iterable0__ = self.category_list;
/* 000349 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000349 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000351 */ 			var __iterable1__ = (function () {
/* 000351 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000351 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000351 */ 			}) ();
/* 000351 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000351 */ 				var specials_chars = __getitem__ (__iterable1__, __index1__);
/* 000352 */ 				if (__t__ (__t__ (__gt__ (__call__ (len, null, specials_chars), best_match_len)) && (function () {
/* 000352 */ 					var __accu0__ = s;
/* 000352 */ 					return __call__ (__accu0__.startswith, __accu0__, specials_chars, pos);
/* 000352 */ 				}) ())) {
/* 000353 */ 					var best_match_s = __getitem__ (__getitem__ (__getitem__ (self.d, cat), 'specials'), specials_chars);
/* 000354 */ 					var best_match_len = __call__ (len, null, specials_chars);
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000356 */ 		return best_match_s;
/* 000356 */ 	});},
/* 000358 */ 	get iter_macro_specs () {return __get__ (this, function* (self, categories) {
/* 000358 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000358 */ 			var categories = null;
/* 000358 */ 		};
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000371 */ 		if (__t__ (categories === null)) {
/* 000372 */ 			var categories = self.category_list;
/* 000372 */ 		}
/* 000374 */ 		var __iterable0__ = categories;
/* 000374 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000374 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000375 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000377 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000377 */ 					var __accu0__ = 'Invalid latex macro spec db category: {!r} (Expected one of {!r})';
/* 000377 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000377 */ 				}) ());
/* 000377 */ 				__except0__.__cause__ = null;
/* 000377 */ 				throw __except0__;
/* 000377 */ 			}
/* 000380 */ 			var __iterable1__ = (function () {
/* 000380 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'macros');
/* 000380 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000380 */ 			}) ();
/* 000380 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000380 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000380 */ 				yield spec;
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		});},
/* 000383 */ 	get iter_environment_specs () {return __get__ (this, function* (self, categories) {
/* 000383 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000383 */ 			var categories = null;
/* 000383 */ 		};
/* 000383 */ 		if (arguments.length) {
/* 000383 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 					switch (__attrib0__) {
/* 000383 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		else {
/* 000383 */ 		}
/* 000397 */ 		if (__t__ (categories === null)) {
/* 000398 */ 			var categories = self.category_list;
/* 000398 */ 		}
/* 000400 */ 		var __iterable0__ = categories;
/* 000400 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000400 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000401 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000403 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000403 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000403 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000403 */ 				}) ());
/* 000403 */ 				__except0__.__cause__ = null;
/* 000403 */ 				throw __except0__;
/* 000403 */ 			}
/* 000406 */ 			var __iterable1__ = (function () {
/* 000406 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'environments');
/* 000406 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000406 */ 			}) ();
/* 000406 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000406 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000406 */ 				yield spec;
/* 000406 */ 			}
/* 000406 */ 		}
/* 000406 */ 		});},
/* 000409 */ 	get iter_specials_specs () {return __get__ (this, function* (self, categories) {
/* 000409 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000409 */ 			var categories = null;
/* 000409 */ 		};
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000423 */ 		if (__t__ (categories === null)) {
/* 000424 */ 			var categories = self.category_list;
/* 000424 */ 		}
/* 000426 */ 		var __iterable0__ = categories;
/* 000426 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000426 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000427 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000429 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000429 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000429 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000429 */ 				}) ());
/* 000429 */ 				__except0__.__cause__ = null;
/* 000429 */ 				throw __except0__;
/* 000429 */ 			}
/* 000432 */ 			var __iterable1__ = (function () {
/* 000432 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'specials');
/* 000432 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000432 */ 			}) ();
/* 000432 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000432 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000432 */ 				yield spec;
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		});},
/* 000436 */ 	get filter_context () {return __get__ (this, function (self) {
/* 000436 */ 		var kwargs = dict ();
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 				delete kwargs.__kwargtrans__;
/* 000436 */ 			}
/* 000436 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 			var args = tuple ();
/* 000436 */ 		}
/* 000443 */ 		(function () {
/* 000443 */ 			var __accu0__ = _util;
/* 000443 */ 			return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, '`LatexContextDb.filter_context()` was renamed to `filtered_context()`.');
/* 000443 */ 		}) ();
/* 000445 */ 		return (function () {
/* 000445 */ 			var __accu0__ = self;
/* 000445 */ 			return __call__ (__accu0__.filtered_context, __accu0__, ...args, __kwargtrans__ (kwargs));
/* 000445 */ 		}) ();
/* 000445 */ 	});},
/* 000448 */ 	get filtered_context () {return __get__ (this, function (self, keep_categories, exclude_categories, keep_which, create_class) {
/* 000448 */ 		if (typeof keep_categories == 'undefined' || (keep_categories != null && keep_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000448 */ 			var keep_categories = [];
/* 000448 */ 		};
/* 000448 */ 		if (typeof exclude_categories == 'undefined' || (exclude_categories != null && exclude_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000448 */ 			var exclude_categories = [];
/* 000448 */ 		};
/* 000448 */ 		if (typeof keep_which == 'undefined' || (keep_which != null && keep_which.hasOwnProperty ("__kwargtrans__"))) {;
/* 000448 */ 			var keep_which = [];
/* 000448 */ 		};
/* 000448 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000448 */ 			var create_class = null;
/* 000448 */ 		};
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'keep_categories': var keep_categories = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'exclude_categories': var exclude_categories = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'keep_which': var keep_which = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000476 */ 		if (__t__ (create_class === null)) {
/* 000477 */ 			var create_class = self.__class__;
/* 000477 */ 		}
/* 000479 */ 		var new_context = __call__ (create_class, null);
/* 000481 */ 		new_context.unknown_macro_spec = self.unknown_macro_spec;
/* 000482 */ 		new_context.unknown_environment_spec = self.unknown_environment_spec;
/* 000483 */ 		new_context.unknown_specials_spec = self.unknown_specials_spec;
/* 000485 */ 		var keep_macros = __t__ (!__t__ ((keep_which))) || __in__ ('macros', keep_which);
/* 000486 */ 		var keep_environments = __t__ (!__t__ ((keep_which))) || __in__ ('environments', keep_which);
/* 000487 */ 		var keep_specials = __t__ (!__t__ ((keep_which))) || __in__ ('specials', keep_which);
/* 000489 */ 		var __iterable0__ = self.category_list;
/* 000489 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000489 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000490 */ 			if (__t__ (__t__ (keep_categories) && !__in__ (cat, keep_categories))) {
/* 000490 */ 				continue;
/* 000490 */ 			}
/* 000492 */ 			if (__t__ (__t__ (exclude_categories) && __in__ (cat, exclude_categories))) {
/* 000492 */ 				continue;
/* 000492 */ 			}
/* 000496 */ 			(function () {
/* 000496 */ 				var __accu0__ = new_context;
/* 000498 */ 				return __call__ (__accu0__.add_context_category, __accu0__, cat, __kwargtrans__ ({macros: (__t__ (keep_macros) ? (function () {
/* 000498 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'macros');
/* 000498 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000499 */ 				}) () : []), environments: (__t__ (keep_environments) ? (function () {
/* 000499 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'environments');
/* 000499 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000500 */ 				}) () : []), specials: (__t__ (keep_specials) ? (function () {
/* 000500 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000500 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000500 */ 				}) () : [])}));
/* 000500 */ 			}) ();
/* 000500 */ 		}
/* 000503 */ 		return new_context;
/* 000503 */ 	});},
/* 000505 */ 	get _get_new_autogen_category () {return __get__ (this, function (self) {
/* 000505 */ 		if (arguments.length) {
/* 000505 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000505 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000505 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000505 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000505 */ 					switch (__attrib0__) {
/* 000505 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 					}
/* 000505 */ 				}
/* 000505 */ 			}
/* 000505 */ 		}
/* 000505 */ 		else {
/* 000505 */ 		}
/* 000506 */ 		var category = __add__ (_autogen_category_prefix, __call__ (str, null, self._autogen_category_counter));
/* 000506 */ 		assert (!__in__ (category, self.category_list));
/* 000508 */ 		return tuple ([self._autogen_category_counter, category]);
/* 000508 */ 	});},
/* 000510 */ 	get extended_with () {return __get__ (this, function (self, category, macros, environments, specials, create_class) {
/* 000510 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000510 */ 			var macros = [];
/* 000510 */ 		};
/* 000510 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000510 */ 			var environments = [];
/* 000510 */ 		};
/* 000510 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000510 */ 			var specials = [];
/* 000510 */ 		};
/* 000510 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000510 */ 			var create_class = null;
/* 000510 */ 		};
/* 000510 */ 		var kwargs = dict ();
/* 000510 */ 		if (arguments.length) {
/* 000510 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000510 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000510 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000510 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000510 */ 					switch (__attrib0__) {
/* 000510 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000510 */ 					}
/* 000510 */ 				}
/* 000510 */ 				delete kwargs.__kwargtrans__;
/* 000510 */ 			}
/* 000510 */ 		}
/* 000510 */ 		else {
/* 000510 */ 		}
/* 000524 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000525 */ 			var __except0__ = ValueError;
/* 000525 */ 			__except0__.__cause__ = null;
/* 000525 */ 			throw __except0__;
/* 000525 */ 		}
/* 000527 */ 		if (__t__ (!__t__ ((self.frozen)))) {
/* 000528 */ 			var __except0__ = __call__ (RuntimeError, null, "You can only call extended_with() on frozen objects, because extended objects keep references to the original objects' data");
/* 000528 */ 			__except0__.__cause__ = null;
/* 000528 */ 			throw __except0__;
/* 000528 */ 		}
/* 000533 */ 		if (__t__ (create_class === null)) {
/* 000534 */ 			var create_class = self.__class__;
/* 000534 */ 		}
/* 000536 */ 		var new_context = __call__ (create_class, null);
/* 000539 */ 		new_context.unknown_macro_spec = (function () {
/* 000539 */ 			var __accu0__ = kwargs;
/* 000539 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_macro_spec', self.unknown_macro_spec);
/* 000539 */ 		}) ();
/* 000541 */ 		new_context.unknown_environment_spec = (function () {
/* 000541 */ 			var __accu0__ = kwargs;
/* 000541 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_environment_spec', self.unknown_environment_spec);
/* 000541 */ 		}) ();
/* 000543 */ 		new_context.unknown_specials_spec = (function () {
/* 000543 */ 			var __accu0__ = kwargs;
/* 000543 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_specials_spec', self.unknown_specials_spec);
/* 000543 */ 		}) ();
/* 000546 */ 		var new_category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000546 */ 			var __accu0__ = [];
/* 000546 */ 			var __iterable0__ = macros;
/* 000546 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000546 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000546 */ 				(function () {
/* 000546 */ 					var __accu1__ = __accu0__;
/* 000546 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000546 */ 				}) ();
/* 000546 */ 			}
/* 000546 */ 			return __accu0__;
/* 000547 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000547 */ 			var __accu0__ = [];
/* 000547 */ 			var __iterable0__ = environments;
/* 000547 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000547 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000547 */ 				(function () {
/* 000547 */ 					var __accu1__ = __accu0__;
/* 000547 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000547 */ 				}) ();
/* 000547 */ 			}
/* 000547 */ 			return __accu0__;
/* 000548 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000548 */ 			var __accu0__ = [];
/* 000548 */ 			var __iterable0__ = specials;
/* 000548 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000548 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000548 */ 				(function () {
/* 000548 */ 					var __accu1__ = __accu0__;
/* 000548 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000548 */ 				}) ();
/* 000548 */ 			}
/* 000548 */ 			return __accu0__;
/* 000548 */ 		}) ())});
/* 000552 */ 		if (__t__ (__t__ (category === null) && __t__ (self.category_list) && (function () {
/* 000552 */ 			var __accu0__ = __getitem__ (self.category_list, 0);
/* 000552 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000552 */ 		}) ())) {
/* 000555 */ 			var cat = __getitem__ (self.category_list, 0);
/* 000556 */ 			var dd = __call__ (dict, null, self.d);
/* 000557 */ 			var d_cat = __getitem__ (dd, cat);
/* 000563 */ 			var d_cat = __call__ (dict, null, __kwargtrans__ ({macros: __call__ (dict, null, __getitem__ (d_cat, 'macros'), __kwargtrans__ (__getitem__ (new_category_dicts, 'macros'))), environments: __call__ (dict, null, __getitem__ (d_cat, 'environments'), __kwargtrans__ (__getitem__ (new_category_dicts, 'environments'))), specials: __call__ (dict, null, __getitem__ (d_cat, 'specials'), __kwargtrans__ (__getitem__ (new_category_dicts, 'specials')))}));
/* 000566 */ 			__setitem__ (dd, cat, d_cat);
/* 000567 */ 			new_context.d = dd;
/* 000569 */ 			new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000569 */ 				var __accu0__ = _util;
/* 000569 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'macros'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'macros').maps, 1, null, 1));
/* 000573 */ 			}) (), 'environments': (function () {
/* 000573 */ 				var __accu0__ = _util;
/* 000573 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'environments'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'environments').maps, 1, null, 1));
/* 000577 */ 			}) (), 'specials': (function () {
/* 000577 */ 				var __accu0__ = _util;
/* 000577 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'specials'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'specials').maps, 1, null, 1));
/* 000577 */ 			}) ()});
/* 000582 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000585 */ 			self.frozen = true;
/* 000586 */ 			return new_context;
/* 000586 */ 		}
/* 000588 */ 		if (__t__ (category === null)) {
/* 000589 */ 			var __left0__ = (function () {
/* 000589 */ 				var __accu0__ = self;
/* 000589 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000589 */ 			}) ();
/* 000589 */ 			var a = __left0__ [0];
/* 000589 */ 			var category = __left0__ [1];
/* 000590 */ 			new_context._autogen_category_counter = __add__ (a, 1);
/* 000590 */ 		}
/* 000591 */ 		else {
/* 000592 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000592 */ 		}
/* 000595 */ 		var dd = __call__ (dict, null, self.d);
/* 000596 */ 		__setitem__ (dd, category, new_category_dicts);
/* 000598 */ 		new_context.category_list = __add__ ([category], self.category_list);
/* 000600 */ 		new_context.d = dd;
/* 000605 */ 		new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000605 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'macros');
/* 000605 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000608 */ 		}) (), 'environments': (function () {
/* 000608 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'environments');
/* 000608 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000611 */ 		}) (), 'specials': (function () {
/* 000611 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'specials');
/* 000611 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000611 */ 		}) ()});
/* 000615 */ 		new_context.frozen = true;
/* 000616 */ 		return new_context;
/* 000616 */ 	});}
/* 000616 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._latexcontextdb.map