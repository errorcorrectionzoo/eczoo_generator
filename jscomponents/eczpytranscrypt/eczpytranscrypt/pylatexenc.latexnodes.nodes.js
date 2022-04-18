/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:03
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000037 */ import {ParsedMacroArgs} from './pylatexenc.latexnodes._parsedargs.js';
/* 000037 */ export {ParsedMacroArgs};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.nodes';
/* 000041 */ export var _unicode_from_str = (function __lambda__ (x) {
/* 000041 */ 	if (arguments.length) {
/* 000041 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 				switch (__attrib0__) {
/* 000041 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 	}
/* 000041 */ 	else {
/* 000041 */ 	}
/* 000041 */ 	return x;
/* 000041 */ });
/* 000056 */ export var __all__ = ['LatexNode', 'LatexCharsNode', 'LatexGroupNode', 'LatexCommentNode', 'LatexMacroNode', 'LatexEnvironmentNode', 'LatexSpecialsNode', 'LatexMathNode', 'LatexNodeList'];
/* 000074 */ export var LatexNode =  __class__ ('LatexNode', [object], {
/* 000074 */ 	__module__: __name__,
/* 000130 */ 	get __init__ () {return __get__ (this, function (self, _fields, _redundant_fields, parsing_state, pos, pos_end, latex_walker) {
/* 000130 */ 		if (typeof _redundant_fields == 'undefined' || (_redundant_fields != null && _redundant_fields.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var _redundant_fields = null;
/* 000130 */ 		};
/* 000130 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var parsing_state = null;
/* 000130 */ 		};
/* 000130 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var pos = null;
/* 000130 */ 		};
/* 000130 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var pos_end = null;
/* 000130 */ 		};
/* 000130 */ 		if (typeof latex_walker == 'undefined' || (latex_walker != null && latex_walker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var latex_walker = null;
/* 000130 */ 		};
/* 000130 */ 		var kwargs = dict ();
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case '_fields': var _fields = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case '_redundant_fields': var _redundant_fields = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 				delete kwargs.__kwargtrans__;
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000134 */ 		var len_ = (function () {
/* 000134 */ 			var __accu0__ = kwargs;
/* 000134 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000134 */ 		}) ();
/* 000140 */ 		__call__ (__call__ (__super__, null, LatexNode, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000142 */ 		self.parsing_state = parsing_state;
/* 000143 */ 		self.latex_walker = latex_walker;
/* 000144 */ 		self.pos = pos;
/* 000145 */ 		self.pos_end = pos_end;
/* 000147 */ 		if (__t__ (__t__ (pos_end === null) && len_ !== null)) {
/* 000148 */ 			self.pos_end = __add__ (self.pos, len_);
/* 000148 */ 		}
/* 000151 */ 		self._fields = __call__ (tuple, null, __add__ (['pos', 'pos_end', 'parsing_state', 'latex_walker'], __call__ (list, null, _fields)));
/* 000152 */ 		if (__t__ (_redundant_fields !== null)) {
/* 000154 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__add__ (__call__ (list, null, self._fields), ['len']), __call__ (list, null, _redundant_fields)));
/* 000154 */ 		}
/* 000155 */ 		else {
/* 000156 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__call__ (list, null, self._fields), ['len']));
/* 000156 */ 		}
/* 000156 */ 	});},
/* 000158 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000165 */ 		return LatexNode;
/* 000165 */ 	});},
/* 000167 */ 	get isNodeType () {return __get__ (this, function (self, t) {
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000173 */ 		return __call__ (isinstance, null, self, t);
/* 000173 */ 	});},
/* 000176 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000176 */ 		if (arguments.length) {
/* 000176 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 					switch (__attrib0__) {
/* 000176 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 		else {
/* 000176 */ 		}
/* 000177 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000178 */ 			return null;
/* 000178 */ 		}
/* 000179 */ 		return __sub__ (self.pos_end, self.pos);
/* 000179 */ 	});},
/* 000181 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000187 */ 		if (__t__ (self.parsing_state === null)) {
/* 000188 */ 			var __except0__ = __call__ (py_TypeError, null, "Can't use latex_verbatim() on node because we don't have any parsing_state set");
/* 000188 */ 			__except0__.__cause__ = null;
/* 000188 */ 			throw __except0__;
/* 000188 */ 		}
/* 000190 */ 		return __getslice__ (self.parsing_state.s, self.pos, self.pos_end, 1);
/* 000190 */ 	});},
/* 000192 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000194 */ 		return __t__ (other !== null) && __t__ ((function () {
/* 000194 */ 			var __accu0__ = self;
/* 000194 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000194 */ 		}) () === (function () {
/* 000194 */ 			var __accu0__ = other;
/* 000194 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000199 */ 		}) ()) && __t__ (other.parsing_state === self.parsing_state) && __t__ (other.latex_walker === self.latex_walker) && __t__ (__eq__ (other.pos, self.pos)) && __t__ (__eq__ (other.pos_end, self.pos_end)) && __call__ (all, null, (function () {
/* 000199 */ 			var __accu0__ = [];
/* 000200 */ 			var __iterable0__ = self._fields;
/* 000200 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000200 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000200 */ 				(function () {
/* 000200 */ 					var __accu1__ = __accu0__;
/* 000200 */ 					return __call__ (__accu1__.append, __accu1__, __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000200 */ 				}) ();
/* 000200 */ 			}
/* 000200 */ 			return py_iter (__accu0__);
/* 000200 */ 		}) ());
/* 000200 */ 	});},
/* 000204 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000204 */ 		return NotImplemented;
/* 000204 */ 	});},
/* 000206 */ 	__hash__: null,
/* 000208 */ 	get __unicode__ () {return __get__ (this, function (self) {
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000209 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000209 */ 			var __accu0__ = self;
/* 000209 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000209 */ 		}) ());
/* 000209 */ 	});},
/* 000210 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000211 */ 		return (function () {
/* 000211 */ 			var __accu0__ = self;
/* 000211 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000211 */ 		}) ();
/* 000211 */ 	});},
/* 000212 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000214 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000214 */ 			var __accu0__ = self;
/* 000214 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000215 */ 		}) ().__name__, '('), (function () {
/* 000215 */ 			var __accu0__ = ', ';
/* 000215 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000215 */ 				var __accu1__ = [];
/* 000215 */ 				var __iterable0__ = self._fields;
/* 000215 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000215 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000215 */ 					(function () {
/* 000215 */ 						var __accu2__ = __accu1__;
/* 000215 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000215 */ 							var __accu3__ = '{}={!r}';
/* 000215 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000215 */ 						}) ());
/* 000215 */ 					}) ();
/* 000215 */ 				}
/* 000215 */ 				return __accu1__;
/* 000215 */ 			}) ());
/* 000215 */ 		}) ()), ')');
/* 000215 */ 	});},
/* 000220 */ 	get to_json_object_with_latexwalker () {return __get__ (this, function (self, latexwalker) {
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'latexwalker': var latexwalker = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000222 */ 		var d = dict ({'nodetype': self.__class__.__name__});
/* 000226 */ 		var __iterable0__ = self._fields;
/* 000226 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000226 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000227 */ 			if (__t__ (__eq__ (fld, 'spec'))) {
/* 000229 */ 				__setitem__ (d, fld, __call__ (repr, null, self.spec));
/* 000229 */ 			}
/* 000230 */ 			else if (__t__ (__eq__ (fld, 'latex_walker'))) {
/* 000232 */ 				// pass;
/* 000232 */ 			}
/* 000233 */ 			else {
/* 000234 */ 				__setitem__ (d, fld, __call__ (getattr, null, self, fld));
/* 000234 */ 			}
/* 000234 */ 		}
/* 000235 */ 		(function () {
/* 000235 */ 			var __accu0__ = d;
/* 000235 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000235 */ 				var __accu1__ = latexwalker;
/* 000235 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000235 */ 			}) ());
/* 000235 */ 		}) ();
/* 000236 */ 		return d;
/* 000236 */ 	});}
/* 000236 */ });
/* 000236 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000240 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000240 */ 	__module__: __name__,
/* 000249 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000249 */ 		var kwargs = dict ();
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 				delete kwargs.__kwargtrans__;
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000254 */ 		self.chars = chars;
/* 000254 */ 	});},
/* 000256 */ 	get nodeType () {return __get__ (this, function (self) {
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
/* 000257 */ 		return LatexCharsNode;
/* 000257 */ 	});}
/* 000257 */ });
/* 000262 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000262 */ 	__module__: __name__,
/* 000287 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000287 */ 		var kwargs = dict ();
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 				delete kwargs.__kwargtrans__;
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000288 */ 		var delimiters = (function () {
/* 000288 */ 			var __accu0__ = kwargs;
/* 000288 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000288 */ 		}) ();
/* 000289 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000293 */ 		self.nodelist = nodelist;
/* 000294 */ 		self.delimiters = delimiters;
/* 000294 */ 	});},
/* 000296 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000297 */ 		return LatexGroupNode;
/* 000297 */ 	});}
/* 000297 */ });
/* 000300 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000300 */ 	__module__: __name__,
/* 000314 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000314 */ 		var kwargs = dict ();
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000314 */ 					}
/* 000314 */ 				}
/* 000314 */ 				delete kwargs.__kwargtrans__;
/* 000314 */ 			}
/* 000314 */ 		}
/* 000314 */ 		else {
/* 000314 */ 		}
/* 000315 */ 		var comment_post_space = (function () {
/* 000315 */ 			var __accu0__ = kwargs;
/* 000315 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000315 */ 		}) ();
/* 000317 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000322 */ 		self.comment = comment;
/* 000323 */ 		self.comment_post_space = comment_post_space;
/* 000323 */ 	});},
/* 000325 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000326 */ 		return LatexCommentNode;
/* 000326 */ 	});}
/* 000326 */ });
/* 000329 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000329 */ 	__module__: __name__,
/* 000393 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000393 */ 		var kwargs = dict ();
/* 000393 */ 		if (arguments.length) {
/* 000393 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 					switch (__attrib0__) {
/* 000393 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 				delete kwargs.__kwargtrans__;
/* 000393 */ 			}
/* 000393 */ 		}
/* 000393 */ 		else {
/* 000393 */ 		}
/* 000394 */ 		var nodeargd = (function () {
/* 000394 */ 			var __accu0__ = kwargs;
/* 000394 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedMacroArgs, null));
/* 000394 */ 		}) ();
/* 000395 */ 		var macro_post_space = (function () {
/* 000395 */ 			var __accu0__ = kwargs;
/* 000395 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000395 */ 		}) ();
/* 000396 */ 		var spec = (function () {
/* 000396 */ 			var __accu0__ = kwargs;
/* 000396 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000396 */ 		}) ();
/* 000398 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000403 */ 		self.macroname = macroname;
/* 000404 */ 		self.spec = spec;
/* 000405 */ 		self.nodeargd = nodeargd;
/* 000406 */ 		self.macro_post_space = macro_post_space;
/* 000406 */ 	});},
/* 000408 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000408 */ 		if (arguments.length) {
/* 000408 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 					switch (__attrib0__) {
/* 000408 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		else {
/* 000408 */ 		}
/* 000409 */ 		return LatexMacroNode;
/* 000409 */ 	});}
/* 000409 */ });
/* 000432 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000432 */ 	__module__: __name__,
/* 000498 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000498 */ 		var kwargs = dict ();
/* 000498 */ 		if (arguments.length) {
/* 000498 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000498 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000498 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000498 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000498 */ 					switch (__attrib0__) {
/* 000498 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000498 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000498 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000498 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000498 */ 					}
/* 000498 */ 				}
/* 000498 */ 				delete kwargs.__kwargtrans__;
/* 000498 */ 			}
/* 000498 */ 		}
/* 000498 */ 		else {
/* 000498 */ 		}
/* 000499 */ 		var nodeargd = (function () {
/* 000499 */ 			var __accu0__ = kwargs;
/* 000499 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedMacroArgs, null));
/* 000499 */ 		}) ();
/* 000500 */ 		var spec = (function () {
/* 000500 */ 			var __accu0__ = kwargs;
/* 000500 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000500 */ 		}) ();
/* 000505 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000510 */ 		self.environmentname = environmentname;
/* 000511 */ 		self.spec = spec;
/* 000512 */ 		self.nodelist = nodelist;
/* 000513 */ 		self.nodeargd = nodeargd;
/* 000513 */ 	});},
/* 000520 */ 	get _get_envname () {return __get__ (this, function (self) {
/* 000520 */ 		if (arguments.length) {
/* 000520 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000520 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000520 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000520 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000520 */ 					switch (__attrib0__) {
/* 000520 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 					}
/* 000520 */ 				}
/* 000520 */ 			}
/* 000520 */ 		}
/* 000520 */ 		else {
/* 000520 */ 		}
/* 000522 */ 		return self.environmentname;
/* 000522 */ 	});},
/* 000531 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000531 */ 		if (arguments.length) {
/* 000531 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000531 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000531 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000531 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000531 */ 					switch (__attrib0__) {
/* 000531 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 					}
/* 000531 */ 				}
/* 000531 */ 			}
/* 000531 */ 		}
/* 000531 */ 		else {
/* 000531 */ 		}
/* 000532 */ 		return LatexEnvironmentNode;
/* 000532 */ 	});}
/* 000532 */ });
/* 000532 */ Object.defineProperty (LatexEnvironmentNode, 'envname', property.call (LatexEnvironmentNode, LatexEnvironmentNode._get_envname));;
/* 000535 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000535 */ 	__module__: __name__,
/* 000573 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000573 */ 		var kwargs = dict ();
/* 000573 */ 		if (arguments.length) {
/* 000573 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000573 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000573 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000573 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000573 */ 					switch (__attrib0__) {
/* 000573 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000573 */ 					}
/* 000573 */ 				}
/* 000573 */ 				delete kwargs.__kwargtrans__;
/* 000573 */ 			}
/* 000573 */ 		}
/* 000573 */ 		else {
/* 000573 */ 		}
/* 000575 */ 		var spec = (function () {
/* 000575 */ 			var __accu0__ = kwargs;
/* 000575 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000575 */ 		}) ();
/* 000576 */ 		var nodeargd = (function () {
/* 000576 */ 			var __accu0__ = kwargs;
/* 000576 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000576 */ 		}) ();
/* 000578 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000582 */ 		self.specials_chars = specials_chars;
/* 000583 */ 		self.spec = spec;
/* 000584 */ 		self.nodeargd = nodeargd;
/* 000584 */ 	});},
/* 000586 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000586 */ 		if (arguments.length) {
/* 000586 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000586 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000586 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000586 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000586 */ 					switch (__attrib0__) {
/* 000586 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 					}
/* 000586 */ 				}
/* 000586 */ 			}
/* 000586 */ 		}
/* 000586 */ 		else {
/* 000586 */ 		}
/* 000587 */ 		return LatexSpecialsNode;
/* 000587 */ 	});}
/* 000587 */ });
/* 000590 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000590 */ 	__module__: __name__,
/* 000616 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000616 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000616 */ 			var nodelist = [];
/* 000616 */ 		};
/* 000616 */ 		var kwargs = dict ();
/* 000616 */ 		if (arguments.length) {
/* 000616 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 					switch (__attrib0__) {
/* 000616 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 				delete kwargs.__kwargtrans__;
/* 000616 */ 			}
/* 000616 */ 		}
/* 000616 */ 		else {
/* 000616 */ 		}
/* 000617 */ 		var delimiters = (function () {
/* 000617 */ 			var __accu0__ = kwargs;
/* 000617 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000617 */ 		}) ();
/* 000619 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000624 */ 		self.displaytype = displaytype;
/* 000625 */ 		self.nodelist = nodelist;
/* 000626 */ 		self.delimiters = delimiters;
/* 000626 */ 	});},
/* 000628 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000628 */ 		if (arguments.length) {
/* 000628 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000628 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000628 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000628 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000628 */ 					switch (__attrib0__) {
/* 000628 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000628 */ 					}
/* 000628 */ 				}
/* 000628 */ 			}
/* 000628 */ 		}
/* 000628 */ 		else {
/* 000628 */ 		}
/* 000629 */ 		return LatexMathNode;
/* 000629 */ 	});}
/* 000629 */ });
/* 000637 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000637 */ 	__module__: __name__,
/* 000667 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000667 */ 		var kwargs = dict ();
/* 000667 */ 		if (arguments.length) {
/* 000667 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000667 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000667 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000667 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000667 */ 					switch (__attrib0__) {
/* 000667 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000667 */ 					}
/* 000667 */ 				}
/* 000667 */ 				delete kwargs.__kwargtrans__;
/* 000667 */ 			}
/* 000667 */ 		}
/* 000667 */ 		else {
/* 000667 */ 		}
/* 000669 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000670 */ 			var obj = nodelist;
/* 000671 */ 			self.nodelist = obj.nodelist;
/* 000672 */ 			self.parsing_state = obj.parsing_state;
/* 000673 */ 			self.latex_walker = obj.latex_walker;
/* 000674 */ 			self.pos = obj.pos;
/* 000675 */ 			self.pos_end = obj.pos_end;
/* 000676 */ 			return ;
/* 000676 */ 		}
/* 000678 */ 		self.nodelist = nodelist;
/* 000680 */ 		self.parsing_state = (function () {
/* 000680 */ 			var __accu0__ = kwargs;
/* 000680 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000680 */ 		}) ();
/* 000681 */ 		self.latex_walker = (function () {
/* 000681 */ 			var __accu0__ = kwargs;
/* 000681 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000681 */ 		}) ();
/* 000682 */ 		self.pos = (function () {
/* 000682 */ 			var __accu0__ = kwargs;
/* 000682 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000682 */ 		}) ();
/* 000683 */ 		self.pos_end = (function () {
/* 000683 */ 			var __accu0__ = kwargs;
/* 000683 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000683 */ 		}) ();
/* 000685 */ 		if (__t__ (kwargs)) {
/* 000687 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000687 */ 			__except0__.__cause__ = null;
/* 000687 */ 			throw __except0__;
/* 000687 */ 		}
/* 000690 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000690 */ 		self.pos = __left0__ [0];
/* 000690 */ 		self.pos_end = __left0__ [1];
/* 000690 */ 	});},
/* 000694 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000694 */ 		if (arguments.length) {
/* 000694 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000694 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000694 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000694 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000694 */ 					switch (__attrib0__) {
/* 000694 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 					}
/* 000694 */ 				}
/* 000694 */ 			}
/* 000694 */ 		}
/* 000694 */ 		else {
/* 000694 */ 		}
/* 000695 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000696 */ 			return null;
/* 000696 */ 		}
/* 000697 */ 		return __sub__ (self.pos_end, self.pos);
/* 000697 */ 	});},
/* 000699 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000699 */ 		if (arguments.length) {
/* 000699 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000699 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000699 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000699 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000699 */ 					switch (__attrib0__) {
/* 000699 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000699 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000699 */ 					}
/* 000699 */ 				}
/* 000699 */ 			}
/* 000699 */ 		}
/* 000699 */ 		else {
/* 000699 */ 		}
/* 000701 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000704 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000704 */ 		}
/* 000705 */ 		return __getitem__ (self.nodelist, index);
/* 000705 */ 	});},
/* 000707 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000707 */ 		if (arguments.length) {
/* 000707 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000707 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000707 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000707 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000707 */ 					switch (__attrib0__) {
/* 000707 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000707 */ 					}
/* 000707 */ 				}
/* 000707 */ 			}
/* 000707 */ 		}
/* 000707 */ 		else {
/* 000707 */ 		}
/* 000708 */ 		return __call__ (len, null, self.nodelist);
/* 000708 */ 	});},
/* 000711 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000711 */ 		if (arguments.length) {
/* 000711 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000711 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000711 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000711 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000711 */ 					switch (__attrib0__) {
/* 000711 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 					}
/* 000711 */ 				}
/* 000711 */ 			}
/* 000711 */ 		}
/* 000711 */ 		else {
/* 000711 */ 		}
/* 000718 */ 		return (function () {
/* 000718 */ 			var __accu0__ = '';
/* 000718 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000718 */ 				var __accu1__ = [];
/* 000718 */ 				var __iterable0__ = self.nodelist;
/* 000718 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000720 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000720 */ 					if (__t__ (n !== null)) {
/* 000721 */ 						(function () {
/* 000721 */ 							var __accu2__ = __accu1__;
/* 000719 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000719 */ 								var __accu3__ = n;
/* 000719 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000719 */ 							}) ());
/* 000719 */ 						}) ();
/* 000719 */ 					}
/* 000719 */ 				}
/* 000719 */ 				return __accu1__;
/* 000719 */ 			}) ());
/* 000719 */ 		}) ();
/* 000719 */ 	});},
/* 000725 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000725 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var skip_none = true;
/* 000725 */ 		};
/* 000725 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var keep_separators = false;
/* 000725 */ 		};
/* 000725 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var max_split = null;
/* 000725 */ 		};
/* 000725 */ 		if (arguments.length) {
/* 000725 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000725 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000725 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000725 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000725 */ 					switch (__attrib0__) {
/* 000725 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 					}
/* 000725 */ 				}
/* 000725 */ 			}
/* 000725 */ 		}
/* 000725 */ 		else {
/* 000725 */ 		}
/* 000728 */ 		var nodelists_list = [[]];
/* 000730 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000731 */ 			var no_more_splits = true;
/* 000731 */ 		}
/* 000732 */ 		else {
/* 000733 */ 			var no_more_splits = false;
/* 000733 */ 		}
/* 000735 */ 		var __iterable0__ = self.nodelist;
/* 000735 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000735 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000736 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000736 */ 				continue;
/* 000736 */ 			}
/* 000738 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000739 */ 				if (__t__ (keep_separators)) {
/* 000740 */ 					(function () {
/* 000740 */ 						var __accu0__ = nodelists_list;
/* 000740 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000740 */ 					}) ();
/* 000740 */ 				}
/* 000741 */ 				else {
/* 000742 */ 					(function () {
/* 000742 */ 						var __accu0__ = nodelists_list;
/* 000742 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000742 */ 					}) ();
/* 000742 */ 				}
/* 000744 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000745 */ 					var no_more_splits = true;
/* 000745 */ 				}
/* 000745 */ 			}
/* 000746 */ 			else {
/* 000747 */ 				(function () {
/* 000747 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000747 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000747 */ 				}) ();
/* 000747 */ 			}
/* 000747 */ 		}
/* 000749 */ 		return (function () {
/* 000749 */ 			var __accu0__ = [];
/* 000749 */ 			var __iterable0__ = nodelists_list;
/* 000749 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000749 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000749 */ 				(function () {
/* 000749 */ 					var __accu1__ = __accu0__;
/* 000749 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (LatexNodeList, null, nl));
/* 000749 */ 				}) ();
/* 000749 */ 			}
/* 000749 */ 			return __accu0__;
/* 000749 */ 		}) ();
/* 000749 */ 	});},
/* 000751 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars) {
/* 000751 */ 		if (arguments.length) {
/* 000751 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000751 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000751 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000751 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000751 */ 					switch (__attrib0__) {
/* 000751 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000751 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000751 */ 					}
/* 000751 */ 				}
/* 000751 */ 			}
/* 000751 */ 		}
/* 000751 */ 		else {
/* 000751 */ 		}
/* 000783 */ 		var split_node_lists = [];
/* 000785 */ 		if (__t__ (__call__ (callable, null, sep_chars))) {
/* 000786 */ 			var sep_chars_fn = sep_chars;
/* 000786 */ 		}
/* 000787 */ 		else {
/* 000788 */ 			var sep_chars_fn = (function __lambda__ (chars, sep_chars) {
/* 000788 */ 				if (typeof sep_chars == 'undefined' || (sep_chars != null && sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000788 */ 					var sep_chars = sep_chars;
/* 000788 */ 				};
/* 000788 */ 				if (arguments.length) {
/* 000788 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000788 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000788 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000788 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000788 */ 							switch (__attrib0__) {
/* 000788 */ 								case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 								case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 							}
/* 000788 */ 						}
/* 000788 */ 					}
/* 000788 */ 				}
/* 000788 */ 				else {
/* 000788 */ 				}
/* 000788 */ 				return (function () {
/* 000788 */ 					var __accu0__ = chars;
/* 000788 */ 					return __call__ (__accu0__.py_split, __accu0__, sep_chars);
/* 000788 */ 				}) ();
/* 000788 */ 			});
/* 000788 */ 		}
/* 000790 */ 		var lw = self.latex_walker;
/* 000791 */ 		if (__t__ (lw !== null)) {
/* 000792 */ 			var make_node = lw.make_node;
/* 000792 */ 		}
/* 000793 */ 		else {
/* 000794 */ 			var make_node = (function __lambda__ (cls) {
/* 000794 */ 				var kwargs = dict ();
/* 000794 */ 				if (arguments.length) {
/* 000794 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000794 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000794 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000794 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000794 */ 							switch (__attrib0__) {
/* 000794 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000794 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000794 */ 							}
/* 000794 */ 						}
/* 000794 */ 						delete kwargs.__kwargtrans__;
/* 000794 */ 					}
/* 000794 */ 				}
/* 000794 */ 				else {
/* 000794 */ 				}
/* 000794 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 000794 */ 			});
/* 000794 */ 		}
/* 000796 */ 		var chars_to_node = function (chars, orig_node, rel_pos) {
/* 000796 */ 			if (arguments.length) {
/* 000796 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000796 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000796 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000796 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000796 */ 						switch (__attrib0__) {
/* 000796 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 							case 'orig_node': var orig_node = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						}
/* 000796 */ 					}
/* 000796 */ 				}
/* 000796 */ 			}
/* 000796 */ 			else {
/* 000796 */ 			}
/* 000797 */ 			var pos = __add__ (orig_node.pos, rel_pos);
/* 000801 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: pos, pos_end: __add__ (pos, __call__ (len, null, chars)), chars: chars}));
/* 000801 */ 		};
/* 000804 */ 		var pending_nodes = [];
/* 000806 */ 		var __iterable0__ = self.nodelist;
/* 000806 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000806 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000807 */ 			if (__t__ ((function () {
/* 000807 */ 				var __accu0__ = n;
/* 000807 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexwalker.LatexCharsNode);
/* 000807 */ 			}) ())) {
/* 000808 */ 				var parts = __call__ (sep_chars_fn, null, n.chars);
/* 000809 */ 				var rel_pos = 0;
/* 000810 */ 				if (__t__ (__getitem__ (parts, 0))) {
/* 000811 */ 					(function () {
/* 000811 */ 						var __accu0__ = pending_nodes;
/* 000811 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, __getitem__ (parts, 0), n, 0));
/* 000811 */ 					}) ();
/* 000812 */ 					var rel_pos = __call__ (len, null, __getitem__ (parts, 0));
/* 000813 */ 					var parts = __getslice__ (parts, 1, null, 1);
/* 000813 */ 				}
/* 000814 */ 				if (__t__ (!__t__ ((parts)))) {
/* 000814 */ 					continue;
/* 000814 */ 				}
/* 000817 */ 				if (__t__ (pending_nodes)) {
/* 000818 */ 					(function () {
/* 000818 */ 						var __accu0__ = split_node_lists;
/* 000818 */ 						return __call__ (__accu0__.append, __accu0__, pending_nodes);
/* 000818 */ 					}) ();
/* 000819 */ 					var pending_nodes = [];
/* 000819 */ 				}
/* 000820 */ 				var __iterable1__ = parts;
/* 000820 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000820 */ 					var p = __getitem__ (__iterable1__, __index1__);
/* 000821 */ 					(function () {
/* 000821 */ 						var __accu0__ = split_node_lists;
/* 000821 */ 						return __call__ (__accu0__.append, __accu0__, [__call__ (chars_to_node, null, p, n, rel_pos)]);
/* 000821 */ 					}) ();
/* 000822 */ 					var rel_pos = __call__ (__iadd__, null, rel_pos, __call__ (len, null, p));
/* 000822 */ 				}
/* 000822 */ 				continue;
/* 000822 */ 			}
/* 000826 */ 			(function () {
/* 000826 */ 				var __accu0__ = pending_nodes;
/* 000826 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000826 */ 			}) ();
/* 000826 */ 		}
/* 000828 */ 		if (__t__ (pending_nodes)) {
/* 000829 */ 			(function () {
/* 000829 */ 				var __accu0__ = split_node_lists;
/* 000829 */ 				return __call__ (__accu0__.append, __accu0__, pending_nodes);
/* 000829 */ 			}) ();
/* 000829 */ 		}
/* 000831 */ 		return split_node_lists;
/* 000831 */ 	});},
/* 000836 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000836 */ 		if (arguments.length) {
/* 000836 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000836 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000836 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000836 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000836 */ 					switch (__attrib0__) {
/* 000836 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 					}
/* 000836 */ 				}
/* 000836 */ 			}
/* 000836 */ 		}
/* 000836 */ 		else {
/* 000836 */ 		}
/* 000837 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ (__eq__ (self.pos, other.pos)) && __eq__ (self.pos_end, other.pos_end);
/* 000837 */ 	});},
/* 000844 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000844 */ 		if (arguments.length) {
/* 000844 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000844 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000844 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000844 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000844 */ 					switch (__attrib0__) {
/* 000844 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000844 */ 					}
/* 000844 */ 				}
/* 000844 */ 			}
/* 000844 */ 		}
/* 000844 */ 		else {
/* 000844 */ 		}
/* 000845 */ 		return (function () {
/* 000845 */ 			var __accu0__ = self;
/* 000845 */ 			return __call__ (__accu0__.__jsonobject__, __accu0__);
/* 000845 */ 		}) ();
/* 000845 */ 	});},
/* 000847 */ 	get __jsonobject__ () {return __get__ (this, function (self) {
/* 000847 */ 		if (arguments.length) {
/* 000847 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000847 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000847 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000847 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000847 */ 					switch (__attrib0__) {
/* 000847 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000847 */ 					}
/* 000847 */ 				}
/* 000847 */ 			}
/* 000847 */ 		}
/* 000847 */ 		else {
/* 000847 */ 		}
/* 000848 */ 		return self.nodelist;
/* 000848 */ 	});},
/* 000850 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000850 */ 		if (arguments.length) {
/* 000850 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000850 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000850 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000850 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000850 */ 					switch (__attrib0__) {
/* 000850 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000850 */ 					}
/* 000850 */ 				}
/* 000850 */ 			}
/* 000850 */ 		}
/* 000850 */ 		else {
/* 000850 */ 		}
/* 000851 */ 		return (function () {
/* 000851 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 000851 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 000851 */ 		}) ();
/* 000851 */ 	});}
/* 000851 */ });
/* 000851 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 000863 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 000863 */ 	if (arguments.length) {
/* 000863 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000863 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000863 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000863 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000863 */ 				switch (__attrib0__) {
/* 000863 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000863 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000863 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000863 */ 				}
/* 000863 */ 			}
/* 000863 */ 		}
/* 000863 */ 	}
/* 000863 */ 	else {
/* 000863 */ 	}
/* 000865 */ 	if (__t__ (pos === null)) {
/* 000866 */ 		var __break0__ = false;
/* 000866 */ 		var __iterable0__ = nodelist;
/* 000866 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000866 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000867 */ 			if (__t__ (n !== null)) {
/* 000868 */ 				var pos = n.pos;
/* 000868 */ 				__break0__ = true;
/* 000868 */ 				break;
/* 000868 */ 			}
/* 000868 */ 		}
/* 000870 */ 		if (!__break0__) {
/* 000871 */ 			var pos = null;
/* 000871 */ 		}
/* 000871 */ 	}
/* 000873 */ 	if (__t__ (pos_end === null)) {
/* 000874 */ 		var __break0__ = false;
/* 000874 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 000874 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000874 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000875 */ 			if (__t__ (n !== null)) {
/* 000876 */ 				var pos_end = n.pos_end;
/* 000876 */ 				__break0__ = true;
/* 000876 */ 				break;
/* 000876 */ 			}
/* 000876 */ 		}
/* 000878 */ 		if (!__break0__) {
/* 000879 */ 			var pos_end = null;
/* 000879 */ 		}
/* 000879 */ 	}
/* 000881 */ 	return tuple ([pos, pos_end]);
/* 000881 */ };
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map