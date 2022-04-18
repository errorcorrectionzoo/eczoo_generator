/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:05
/* 000039 */ var logging = {};
/* 000039 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000039 */ import * as __module_logging__ from './logging.js';
/* 000039 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._carryoverinfo';
/* 000040 */ export var logger = (function () {
/* 000040 */ 	var __accu0__ = logging;
/* 000040 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000040 */ }) ();
/* 000047 */ export var CarryoverInformation =  __class__ ('CarryoverInformation', [object], {
/* 000047 */ 	__module__: __name__,
/* 000073 */ 	get __init__ () {return __get__ (this, function (self, set_parsing_state, update_parsing_state_attributes, inner_parsing_state) {
/* 000073 */ 		if (typeof set_parsing_state == 'undefined' || (set_parsing_state != null && set_parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000073 */ 			var set_parsing_state = null;
/* 000073 */ 		};
/* 000073 */ 		if (typeof update_parsing_state_attributes == 'undefined' || (update_parsing_state_attributes != null && update_parsing_state_attributes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000073 */ 			var update_parsing_state_attributes = null;
/* 000073 */ 		};
/* 000073 */ 		if (typeof inner_parsing_state == 'undefined' || (inner_parsing_state != null && inner_parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000073 */ 			var inner_parsing_state = null;
/* 000073 */ 		};
/* 000073 */ 		var kwargs = dict ();
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'set_parsing_state': var set_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'update_parsing_state_attributes': var update_parsing_state_attributes = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'inner_parsing_state': var inner_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 				delete kwargs.__kwargtrans__;
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000080 */ 		self.set_parsing_state = set_parsing_state;
/* 000081 */ 		if (__t__ (update_parsing_state_attributes)) {
/* 000082 */ 			self.update_parsing_state_attributes = __call__ (dict, null, update_parsing_state_attributes);
/* 000082 */ 		}
/* 000083 */ 		else {
/* 000084 */ 			self.update_parsing_state_attributes = null;
/* 000084 */ 		}
/* 000086 */ 		self.inner_parsing_state = inner_parsing_state;
/* 000092 */ 		var __iterable0__ = (function () {
/* 000092 */ 			var __accu0__ = kwargs;
/* 000092 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000092 */ 		}) ();
/* 000092 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000092 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000092 */ 			var k = __left0__ [0];
/* 000092 */ 			var v = __left0__ [1];
/* 000093 */ 			__call__ (setattr, null, self, k, v);
/* 000093 */ 		}
/* 000093 */ 	});},
/* 000096 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000097 */ 		return __add__ (__add__ (__add__ (self.__class__.__name__, '('), (function () {
/* 000097 */ 			var __accu0__ = ', ';
/* 000097 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000097 */ 				var __accu1__ = [];
/* 000099 */ 				var __iterable0__ = (function () {
/* 000099 */ 					var __accu2__ = self.__dict__;
/* 000099 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000099 */ 				}) ();
/* 000099 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000099 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000099 */ 					var k = __left0__ [0];
/* 000099 */ 					var v = __left0__ [1];
/* 000099 */ 					if (__t__ (__t__ (__ne__ (__getslice__ (k, 0, 1, 1), '_')) && v !== null)) {
/* 000099 */ 						(function () {
/* 000099 */ 							var __accu2__ = __accu1__;
/* 000098 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000098 */ 								var __accu3__ = '{}={!r}';
/* 000098 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000098 */ 							}) ());
/* 000098 */ 						}) ();
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 				return py_iter (__accu1__);
/* 000098 */ 			}) ());
/* 000098 */ 		}) ()), ')');
/* 000098 */ 	});},
/* 000102 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state) {
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000104 */ 		var new_parsing_state = parsing_state;
/* 000106 */ 		if (__t__ (self.set_parsing_state !== null)) {
/* 000107 */ 			var new_parsing_state = self.set_parsing_state;
/* 000107 */ 		}
/* 000109 */ 		if (__t__ (self.update_parsing_state_attributes)) {
/* 000110 */ 			var new_parsing_state = (function () {
/* 000110 */ 				var __accu0__ = new_parsing_state;
/* 000110 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.update_parsing_state_attributes));
/* 000110 */ 			}) ();
/* 000110 */ 		}
/* 000122 */ 		return new_parsing_state;
/* 000122 */ 	});}
/* 000122 */ });
/* 000039 */ 
//# sourceMappingURL=pylatexenc.latexnodes._carryoverinfo.map