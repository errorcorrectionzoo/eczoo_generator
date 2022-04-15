/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:52
/* 000073 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._walkerbase';
/* 000038 */ export var LatexWalkerBase =  __class__ ('LatexWalkerBase', [object], {
/* 000038 */ 	__module__: __name__,
/* 000039 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000039 */ 		var kwargs = dict ();
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 				delete kwargs.__kwargtrans__;
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000040 */ 		__call__ (__call__ (__super__, null, LatexWalkerBase, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000040 */ 	});},
/* 000042 */ 	get parse_content () {return __get__ (this, function (self, parser, token_reader, parsing_state, open_context) {
/* 000042 */ 		if (typeof token_reader == 'undefined' || (token_reader != null && token_reader.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var token_reader = null;
/* 000042 */ 		};
/* 000042 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var parsing_state = null;
/* 000042 */ 		};
/* 000042 */ 		if (typeof open_context == 'undefined' || (open_context != null && open_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var open_context = null;
/* 000042 */ 		};
/* 000042 */ 		var kwargs = dict ();
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 				delete kwargs.__kwargtrans__;
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000044 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexWalkerBase subclasses must reimplement parse_content()');
/* 000044 */ 		__except0__.__cause__ = null;
/* 000044 */ 		throw __except0__;
/* 000044 */ 	});},
/* 000046 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000046 */ 		var kwargs = dict ();
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 				delete kwargs.__kwargtrans__;
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000047 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexWalkerBase subclasses must reimplement make_node()');
/* 000047 */ 		__except0__.__cause__ = null;
/* 000047 */ 		throw __except0__;
/* 000047 */ 	});},
/* 000049 */ 	get make_nodes_collector () {return __get__ (this, function (self, token_reader, parsing_state) {
/* 000049 */ 		var kwargs = dict ();
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 				delete kwargs.__kwargtrans__;
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000053 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexWalkerBase subclasses must reimplement make_nodes_collector()');
/* 000053 */ 		__except0__.__cause__ = null;
/* 000053 */ 		throw __except0__;
/* 000053 */ 	});},
/* 000056 */ 	get make_latex_group_parser () {return __get__ (this, function (self, delimiters) {
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000057 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexWalkerBase subclasses must reimplement make_latex_group_parser()');
/* 000057 */ 		__except0__.__cause__ = null;
/* 000057 */ 		throw __except0__;
/* 000057 */ 	});},
/* 000060 */ 	get make_latex_math_parser () {return __get__ (this, function (self, math_mode_delimiters) {
/* 000060 */ 		if (arguments.length) {
/* 000060 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000060 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000060 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000060 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000060 */ 					switch (__attrib0__) {
/* 000060 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'math_mode_delimiters': var math_mode_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 					}
/* 000060 */ 				}
/* 000060 */ 			}
/* 000060 */ 		}
/* 000060 */ 		else {
/* 000060 */ 		}
/* 000061 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexWalkerBase subclasses must reimplement make_latex_math_parser()');
/* 000061 */ 		__except0__.__cause__ = null;
/* 000061 */ 		throw __except0__;
/* 000061 */ 	});},
/* 000064 */ 	get check_tolerant_parsing_ignore_error () {return __get__ (this, function (self, exc) {
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000073 */ 		return exc;
/* 000073 */ 	});}
/* 000073 */ });
/* 000073 */ 
//# sourceMappingURL=pylatexenc.latexnodes._walkerbase.map