/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:10:53
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000043 */ import {LatexEnvironmentCallParser, LatexMacroCallParser, LatexSpecialsCallParser} from './pylatexenc.macrospec._macrocallparser.js';
/* 000042 */ import {LatexArgumentsParser, LatexNoArgumentsParser} from './pylatexenc.macrospec._argumentsparser.js';
/* 000040 */ import {CallableSpecBase} from './pylatexenc.latexnodes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {CallableSpecBase, LatexArgumentsParser, LatexMacroCallParser, LatexNoArgumentsParser, LatexEnvironmentCallParser, LatexSpecialsCallParser};
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
/* 000080 */ 		self._fn_make_carryover_info = make_carryover_info;
/* 000081 */ 		self._fn_finalize_node = finalize_node;
/* 000081 */ 	});},
/* 000094 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000105 */ 		if (__t__ (self._fn_finalize_node !== null)) {
/* 000106 */ 			return (function () {
/* 000106 */ 				var __accu0__ = self;
/* 000106 */ 				return __call__ (__accu0__._fn_finalize_node, __accu0__, node);
/* 000106 */ 			}) ();
/* 000106 */ 		}
/* 000108 */ 		return node;
/* 000108 */ 	});},
/* 000111 */ 	get make_carryover_info () {return __get__ (this, function (self, parsed_node) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'parsed_node': var parsed_node = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000128 */ 		if (__t__ (self._fn_make_carryover_info !== null)) {
/* 000129 */ 			return (function () {
/* 000129 */ 				var __accu0__ = self;
/* 000129 */ 				return __call__ (__accu0__._fn_make_carryover_info, __accu0__, parsed_node);
/* 000129 */ 			}) ();
/* 000129 */ 		}
/* 000131 */ 		return null;
/* 000131 */ 	});},
/* 000134 */ 	get needs_arguments () {return __get__ (this, function (self) {
/* 000134 */ 		if (arguments.length) {
/* 000134 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000134 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000134 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000134 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000134 */ 					switch (__attrib0__) {
/* 000134 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 					}
/* 000134 */ 				}
/* 000134 */ 			}
/* 000134 */ 		}
/* 000134 */ 		else {
/* 000134 */ 		}
/* 000135 */ 		var __iterable0__ = self.arguments_spec_list;
/* 000135 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000135 */ 			var arg = __getitem__ (__iterable0__, __index0__);
/* 000136 */ 			if (__t__ ((function () {
/* 000136 */ 				var __accu0__ = arg.spec;
/* 000136 */ 				return __call__ (__accu0__.is_required, __accu0__);
/* 000136 */ 			}) ())) {
/* 000137 */ 				return true;
/* 000137 */ 			}
/* 000137 */ 		}
/* 000138 */ 		return false;
/* 000138 */ 	});},
/* 000140 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000143 */ 		return __add__ (__add__ (__add__ (self.__class__.__name__, '('), (function () {
/* 000143 */ 			var __accu0__ = ', ';
/* 000143 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000143 */ 				var __accu1__ = [];
/* 000144 */ 				var __iterable0__ = (function () {
/* 000144 */ 					var __accu2__ = self.__dict__;
/* 000144 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000144 */ 				}) ();
/* 000144 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000144 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000144 */ 					var k = __left0__ [0];
/* 000144 */ 					var v = __left0__ [1];
/* 000145 */ 					if (__t__ (!__t__ (((function () {
/* 000145 */ 						var __accu2__ = k;
/* 000145 */ 						return __call__ (__accu2__.startswith, __accu2__, '_');
/* 000145 */ 					}) ())))) {
/* 000145 */ 						(function () {
/* 000145 */ 							var __accu2__ = __accu1__;
/* 000143 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000143 */ 								var __accu3__ = '{}={!r}';
/* 000143 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000143 */ 							}) ());
/* 000143 */ 						}) ();
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 				return __accu1__;
/* 000143 */ 			}) ());
/* 000143 */ 		}) ()), ')');
/* 000143 */ 	});}
/* 000143 */ });
/* 000151 */ export var MacroSpec =  __class__ ('MacroSpec', [_SpecBase], {
/* 000151 */ 	__module__: __name__,
/* 000172 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000172 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000172 */ 			var arguments_spec_list = null;
/* 000172 */ 		};
/* 000172 */ 		var kwargs = dict ();
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 				delete kwargs.__kwargtrans__;
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		var make_carryover_info = (function () {
/* 000173 */ 			var __accu0__ = kwargs;
/* 000173 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'make_carryover_info', null);
/* 000173 */ 		}) ();
/* 000174 */ 		__call__ (__call__ (__super__, null, MacroSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, make_carryover_info: make_carryover_info}, kwargs)));
/* 000178 */ 		self.macroname = macroname;
/* 000178 */ 	});},
/* 000180 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000181 */ 		return __call__ (LatexMacroCallParser, null, token, self);
/* 000181 */ 	});}
/* 000181 */ });
/* 000186 */ export var EnvironmentSpec =  __class__ ('EnvironmentSpec', [_SpecBase], {
/* 000186 */ 	__module__: __name__,
/* 000230 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000230 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000230 */ 			var arguments_spec_list = null;
/* 000230 */ 		};
/* 000230 */ 		var kwargs = dict ();
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 				delete kwargs.__kwargtrans__;
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000232 */ 		var is_math_mode = (function () {
/* 000232 */ 			var __accu0__ = kwargs;
/* 000232 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'is_math_mode', false);
/* 000232 */ 		}) ();
/* 000233 */ 		var body_parser = (function () {
/* 000233 */ 			var __accu0__ = kwargs;
/* 000233 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'body_parser', null);
/* 000233 */ 		}) ();
/* 000234 */ 		var make_carryover_info = (function () {
/* 000234 */ 			var __accu0__ = kwargs;
/* 000234 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'make_carryover_info', null);
/* 000234 */ 		}) ();
/* 000236 */ 		__call__ (__call__ (__super__, null, EnvironmentSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, make_carryover_info: make_carryover_info}, kwargs)));
/* 000242 */ 		self.environmentname = environmentname;
/* 000243 */ 		self.is_math_mode = is_math_mode;
/* 000244 */ 		self.body_parser = body_parser;
/* 000244 */ 	});},
/* 000246 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000247 */ 		return __call__ (LatexEnvironmentCallParser, null, token, self);
/* 000247 */ 	});}
/* 000247 */ });
/* 000252 */ export var SpecialsSpec =  __class__ ('SpecialsSpec', [_SpecBase], {
/* 000252 */ 	__module__: __name__,
/* 000270 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000270 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000270 */ 			var arguments_spec_list = null;
/* 000270 */ 		};
/* 000270 */ 		var kwargs = dict ();
/* 000270 */ 		if (arguments.length) {
/* 000270 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000270 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000270 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000270 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000270 */ 					switch (__attrib0__) {
/* 000270 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000270 */ 					}
/* 000270 */ 				}
/* 000270 */ 				delete kwargs.__kwargtrans__;
/* 000270 */ 			}
/* 000270 */ 		}
/* 000270 */ 		else {
/* 000270 */ 		}
/* 000271 */ 		__call__ (__call__ (__super__, null, SpecialsSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list}, kwargs)));
/* 000273 */ 		self.specials_chars = specials_chars;
/* 000273 */ 	});},
/* 000275 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000275 */ 		if (arguments.length) {
/* 000275 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000275 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000275 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000275 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000275 */ 					switch (__attrib0__) {
/* 000275 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 					}
/* 000275 */ 				}
/* 000275 */ 			}
/* 000275 */ 		}
/* 000275 */ 		else {
/* 000275 */ 		}
/* 000276 */ 		return (function () {
/* 000276 */ 			var __accu0__ = 'SpecialsSpec(specials_chars={!r}, arguments_spec_list={!r})';
/* 000276 */ 			return __call__ (__accu0__.format, __accu0__, self.specials_chars, self.arguments_spec_list);
/* 000276 */ 		}) ();
/* 000276 */ 	});},
/* 000280 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000281 */ 		return __call__ (LatexSpecialsCallParser, null, token, self);
/* 000281 */ 	});}
/* 000281 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._specclasses.map