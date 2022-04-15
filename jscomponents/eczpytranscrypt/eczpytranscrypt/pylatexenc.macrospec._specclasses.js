/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:54
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000043 */ import {LatexEnvironmentCallParser, LatexMacroCallParser, LatexSpecialsCallParser} from './pylatexenc.macrospec._macrocallparser.js';
/* 000042 */ import {LatexArgumentsParser, LatexNoArgumentsParser} from './pylatexenc.macrospec._argumentsparser.js';
/* 000040 */ import {CallableSpecBase} from './pylatexenc.latexnodes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexNoArgumentsParser, CallableSpecBase, LatexSpecialsCallParser, LatexArgumentsParser, LatexMacroCallParser, LatexEnvironmentCallParser};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._specclasses';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000049 */ export var _basestring = str;
/* 000059 */ export var _legacy_pyltxenc2_do = (function __lambda__ () {
/* 000059 */ 	if (arguments.length) {
/* 000059 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000059 */ 	}
/* 000059 */ 	else {
/* 000059 */ 		var args = tuple ();
/* 000059 */ 	}
/* 000059 */ 	return null;
/* 000059 */ });
/* 000062 */ export var _SpecBase =  __class__ ('_SpecBase', [CallableSpecBase], {
/* 000062 */ 	__module__: __name__,
/* 000063 */ 	get __init__ () {return __get__ (this, function (self, arguments_spec_list, make_carryover_info, finalize_node) {
/* 000063 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000063 */ 			var arguments_spec_list = null;
/* 000063 */ 		};
/* 000063 */ 		if (typeof make_carryover_info == 'undefined' || (make_carryover_info != null && make_carryover_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000063 */ 			var make_carryover_info = null;
/* 000063 */ 		};
/* 000063 */ 		if (typeof finalize_node == 'undefined' || (finalize_node != null && finalize_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000063 */ 			var finalize_node = null;
/* 000063 */ 		};
/* 000063 */ 		var kwargs = dict ();
/* 000063 */ 		if (arguments.length) {
/* 000063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 					switch (__attrib0__) {
/* 000063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'make_carryover_info': var make_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'finalize_node': var finalize_node = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 				delete kwargs.__kwargtrans__;
/* 000063 */ 			}
/* 000063 */ 		}
/* 000063 */ 		else {
/* 000063 */ 		}
/* 000066 */ 		self.arguments_spec_list = arguments_spec_list;
/* 000068 */ 		var use_legacy_args_parser = __call__ (_legacy_pyltxenc2_do, null, 'SpecBase_init_from_args_parser', self, arguments_spec_list, kwargs);
/* 000072 */ 		__call__ (__call__ (__super__, null, _SpecBase, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000074 */ 		if (__t__ (!__t__ ((use_legacy_args_parser)))) {
/* 000075 */ 			if (__t__ (self.arguments_spec_list)) {
/* 000076 */ 				self.arguments_parser = __call__ (LatexArgumentsParser, null, arguments_spec_list);
/* 000076 */ 			}
/* 000077 */ 			else {
/* 000078 */ 				self.arguments_parser = __call__ (LatexNoArgumentsParser, null);
/* 000078 */ 			}
/* 000078 */ 		}
/* 000080 */ 		if (__t__ (make_carryover_info !== null)) {
/* 000083 */ 			self.make_carryover_info = make_carryover_info;
/* 000083 */ 		}
/* 000085 */ 		if (__t__ (finalize_node !== null)) {
/* 000086 */ 			self.finalize_node = finalize_node;
/* 000086 */ 		}
/* 000086 */ 	});},
/* 000099 */ 	get make_carryover_info () {return __get__ (this, function (self, parsed_node) {
/* 000099 */ 		if (arguments.length) {
/* 000099 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 					switch (__attrib0__) {
/* 000099 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'parsed_node': var parsed_node = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					}
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 		else {
/* 000099 */ 		}
/* 000109 */ 		return null;
/* 000109 */ 	});},
/* 000111 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000112 */ 		return node;
/* 000112 */ 	});},
/* 000114 */ 	get needs_arguments () {return __get__ (this, function (self) {
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
/* 000115 */ 		var __iterable0__ = self.arguments_spec_list;
/* 000115 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000115 */ 			var arg = __getitem__ (__iterable0__, __index0__);
/* 000116 */ 			if (__t__ ((function () {
/* 000116 */ 				var __accu0__ = arg.spec;
/* 000116 */ 				return __call__ (__accu0__.is_required, __accu0__);
/* 000116 */ 			}) ())) {
/* 000117 */ 				return true;
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 	});},
/* 000119 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000122 */ 		return __add__ (__add__ (__add__ (self.__class__.__name__, '('), (function () {
/* 000122 */ 			var __accu0__ = ', ';
/* 000122 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000122 */ 				var __accu1__ = [];
/* 000123 */ 				var __iterable0__ = (function () {
/* 000123 */ 					var __accu2__ = self.__dict__;
/* 000123 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000123 */ 				}) ();
/* 000123 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000123 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000123 */ 					var k = __left0__ [0];
/* 000123 */ 					var v = __left0__ [1];
/* 000124 */ 					if (__t__ (!__t__ (((function () {
/* 000124 */ 						var __accu2__ = k;
/* 000124 */ 						return __call__ (__accu2__.startswith, __accu2__, '_');
/* 000124 */ 					}) ())))) {
/* 000124 */ 						(function () {
/* 000124 */ 							var __accu2__ = __accu1__;
/* 000122 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000122 */ 								var __accu3__ = '{}={!r}';
/* 000122 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000122 */ 							}) ());
/* 000122 */ 						}) ();
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 				return __accu1__;
/* 000122 */ 			}) ());
/* 000122 */ 		}) ()), ')');
/* 000122 */ 	});}
/* 000122 */ });
/* 000130 */ export var MacroSpec =  __class__ ('MacroSpec', [_SpecBase], {
/* 000130 */ 	__module__: __name__,
/* 000151 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000151 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 			var arguments_spec_list = null;
/* 000151 */ 		};
/* 000151 */ 		var kwargs = dict ();
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 				delete kwargs.__kwargtrans__;
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000152 */ 		var make_carryover_info = (function () {
/* 000152 */ 			var __accu0__ = kwargs;
/* 000152 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'make_carryover_info', null);
/* 000152 */ 		}) ();
/* 000153 */ 		__call__ (__call__ (__super__, null, MacroSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, make_carryover_info: make_carryover_info}, kwargs)));
/* 000157 */ 		self.macroname = macroname;
/* 000157 */ 	});},
/* 000159 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000160 */ 		return __call__ (LatexMacroCallParser, null, token, self);
/* 000160 */ 	});}
/* 000160 */ });
/* 000165 */ export var EnvironmentSpec =  __class__ ('EnvironmentSpec', [_SpecBase], {
/* 000165 */ 	__module__: __name__,
/* 000209 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000209 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000209 */ 			var arguments_spec_list = null;
/* 000209 */ 		};
/* 000209 */ 		var kwargs = dict ();
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 				delete kwargs.__kwargtrans__;
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000211 */ 		var is_math_mode = (function () {
/* 000211 */ 			var __accu0__ = kwargs;
/* 000211 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'is_math_mode', false);
/* 000211 */ 		}) ();
/* 000212 */ 		var body_parser = (function () {
/* 000212 */ 			var __accu0__ = kwargs;
/* 000212 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'body_parser', null);
/* 000212 */ 		}) ();
/* 000213 */ 		var make_carryover_info = (function () {
/* 000213 */ 			var __accu0__ = kwargs;
/* 000213 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'make_carryover_info', null);
/* 000213 */ 		}) ();
/* 000215 */ 		__call__ (__call__ (__super__, null, EnvironmentSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, make_carryover_info: make_carryover_info}, kwargs)));
/* 000221 */ 		self.environmentname = environmentname;
/* 000222 */ 		self.is_math_mode = is_math_mode;
/* 000223 */ 		self.body_parser = body_parser;
/* 000223 */ 	});},
/* 000225 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000225 */ 		if (arguments.length) {
/* 000225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 					switch (__attrib0__) {
/* 000225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 			}
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 		}
/* 000226 */ 		return __call__ (LatexEnvironmentCallParser, null, token, self);
/* 000226 */ 	});}
/* 000226 */ });
/* 000231 */ export var SpecialsSpec =  __class__ ('SpecialsSpec', [_SpecBase], {
/* 000231 */ 	__module__: __name__,
/* 000249 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000249 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000249 */ 			var arguments_spec_list = null;
/* 000249 */ 		};
/* 000249 */ 		var kwargs = dict ();
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 				delete kwargs.__kwargtrans__;
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		__call__ (__call__ (__super__, null, SpecialsSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list}, kwargs)));
/* 000252 */ 		self.specials_chars = specials_chars;
/* 000252 */ 	});},
/* 000254 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000255 */ 		return (function () {
/* 000255 */ 			var __accu0__ = 'SpecialsSpec(specials_chars={!r}, arguments_spec_list={!r})';
/* 000255 */ 			return __call__ (__accu0__.format, __accu0__, self.specials_chars, self.arguments_spec_list);
/* 000255 */ 		}) ();
/* 000255 */ 	});},
/* 000259 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000260 */ 		return __call__ (LatexSpecialsCallParser, null, token, self);
/* 000260 */ 	});}
/* 000260 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._specclasses.map