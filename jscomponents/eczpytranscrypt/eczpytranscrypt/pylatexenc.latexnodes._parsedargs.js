/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:10:50
/* 000225 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsedargs';
/* 000039 */ export var _basestring = str;
/* 000072 */ export var ParsedMacroArgs =  __class__ ('ParsedMacroArgs', [object], {
/* 000072 */ 	__module__: __name__,
/* 000135 */ 	get __init__ () {return __get__ (this, function (self, argnlist, arguments_spec_list) {
/* 000135 */ 		if (typeof argnlist == 'undefined' || (argnlist != null && argnlist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000135 */ 			var argnlist = null;
/* 000135 */ 		};
/* 000135 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000135 */ 			var arguments_spec_list = null;
/* 000135 */ 		};
/* 000135 */ 		var kwargs = dict ();
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'argnlist': var argnlist = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 				delete kwargs.__kwargtrans__;
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000140 */ 		var __left0__ = tuple ([(function () {
/* 000140 */ 			var __accu0__ = kwargs;
/* 000140 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000140 */ 		}) (), (function () {
/* 000140 */ 			var __accu0__ = kwargs;
/* 000140 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000140 */ 		}) ()]);
/* 000140 */ 		var pos = __left0__ [0];
/* 000140 */ 		var pos_end = __left0__ [1];
/* 000141 */ 		var argspec = (function () {
/* 000141 */ 			var __accu0__ = kwargs;
/* 000141 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'argspec', null);
/* 000141 */ 		}) ();
/* 000142 */ 		__call__ (__call__ (__super__, null, ParsedMacroArgs, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000144 */ 		if (__t__ (__t__ (arguments_spec_list === null) && argspec !== null)) {
/* 000145 */ 			var arguments_spec_list = argspec;
/* 000145 */ 		}
/* 000147 */ 		self.argnlist = (__t__ (argnlist) ? argnlist : []);
/* 000149 */ 		self.arguments_spec_list = (__t__ (arguments_spec_list) ? arguments_spec_list : []);
/* 000151 */ 		var __left0__ = tuple ([pos, pos_end]);
/* 000151 */ 		self.pos = __left0__ [0];
/* 000151 */ 		self.pos_end = __left0__ [1];
/* 000151 */ 	});},
/* 000198 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000199 */ 		return __t__ (__eq__ (self.arguments_spec_list, other.arguments_spec_list)) && __t__ (__eq__ (self.argnlist, other.argnlist)) && __t__ (__eq__ (self.pos, other.pos)) && __eq__ (self.pos_end, other.pos_end);
/* 000199 */ 	});},
/* 000206 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000219 */ 		return __call__ (dict, null, __kwargtrans__ ({arguments_spec_list: self.arguments_spec_list, argnlist: self.argnlist}));
/* 000219 */ 	});},
/* 000224 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000225 */ 		return (function () {
/* 000225 */ 			var __accu0__ = '{}(arguments_spec_list={!r}, argnlist={!r})';
/* 000225 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.arguments_spec_list, self.argnlist);
/* 000225 */ 		}) ();
/* 000225 */ 	});}
/* 000225 */ });
/* 000225 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsedargs.map