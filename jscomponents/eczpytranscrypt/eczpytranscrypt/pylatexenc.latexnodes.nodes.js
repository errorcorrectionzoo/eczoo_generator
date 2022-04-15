/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 00:56:58
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
/* 000230 */ 			else {
/* 000231 */ 				__setitem__ (d, fld, __getitem__ (self.__dict__, fld));
/* 000231 */ 			}
/* 000231 */ 		}
/* 000232 */ 		(function () {
/* 000232 */ 			var __accu0__ = d;
/* 000232 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000232 */ 				var __accu1__ = latexwalker;
/* 000232 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000232 */ 			}) ());
/* 000232 */ 		}) ();
/* 000233 */ 		return d;
/* 000233 */ 	});}
/* 000233 */ });
/* 000233 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000237 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000237 */ 	__module__: __name__,
/* 000246 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000246 */ 		var kwargs = dict ();
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 				delete kwargs.__kwargtrans__;
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000247 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000251 */ 		self.chars = chars;
/* 000251 */ 	});},
/* 000253 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000254 */ 		return LatexCharsNode;
/* 000254 */ 	});}
/* 000254 */ });
/* 000259 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000259 */ 	__module__: __name__,
/* 000284 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000284 */ 		var kwargs = dict ();
/* 000284 */ 		if (arguments.length) {
/* 000284 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 					switch (__attrib0__) {
/* 000284 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 				delete kwargs.__kwargtrans__;
/* 000284 */ 			}
/* 000284 */ 		}
/* 000284 */ 		else {
/* 000284 */ 		}
/* 000285 */ 		var delimiters = (function () {
/* 000285 */ 			var __accu0__ = kwargs;
/* 000285 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000285 */ 		}) ();
/* 000286 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000290 */ 		self.nodelist = nodelist;
/* 000291 */ 		self.delimiters = delimiters;
/* 000291 */ 	});},
/* 000293 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000293 */ 		if (arguments.length) {
/* 000293 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000293 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000293 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000293 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000293 */ 					switch (__attrib0__) {
/* 000293 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 					}
/* 000293 */ 				}
/* 000293 */ 			}
/* 000293 */ 		}
/* 000293 */ 		else {
/* 000293 */ 		}
/* 000294 */ 		return LatexGroupNode;
/* 000294 */ 	});}
/* 000294 */ });
/* 000297 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000297 */ 	__module__: __name__,
/* 000311 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000311 */ 		var kwargs = dict ();
/* 000311 */ 		if (arguments.length) {
/* 000311 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000311 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000311 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000311 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000311 */ 					switch (__attrib0__) {
/* 000311 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 				delete kwargs.__kwargtrans__;
/* 000311 */ 			}
/* 000311 */ 		}
/* 000311 */ 		else {
/* 000311 */ 		}
/* 000312 */ 		var comment_post_space = (function () {
/* 000312 */ 			var __accu0__ = kwargs;
/* 000312 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000312 */ 		}) ();
/* 000314 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000319 */ 		self.comment = comment;
/* 000320 */ 		self.comment_post_space = comment_post_space;
/* 000320 */ 	});},
/* 000322 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000323 */ 		return LatexCommentNode;
/* 000323 */ 	});}
/* 000323 */ });
/* 000326 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000326 */ 	__module__: __name__,
/* 000390 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000390 */ 		var kwargs = dict ();
/* 000390 */ 		if (arguments.length) {
/* 000390 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000390 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000390 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000390 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000390 */ 					switch (__attrib0__) {
/* 000390 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000390 */ 					}
/* 000390 */ 				}
/* 000390 */ 				delete kwargs.__kwargtrans__;
/* 000390 */ 			}
/* 000390 */ 		}
/* 000390 */ 		else {
/* 000390 */ 		}
/* 000391 */ 		var nodeargd = (function () {
/* 000391 */ 			var __accu0__ = kwargs;
/* 000391 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedMacroArgs, null));
/* 000391 */ 		}) ();
/* 000392 */ 		var macro_post_space = (function () {
/* 000392 */ 			var __accu0__ = kwargs;
/* 000392 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000392 */ 		}) ();
/* 000393 */ 		var spec = (function () {
/* 000393 */ 			var __accu0__ = kwargs;
/* 000393 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000393 */ 		}) ();
/* 000395 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000400 */ 		self.macroname = macroname;
/* 000401 */ 		self.spec = spec;
/* 000402 */ 		self.nodeargd = nodeargd;
/* 000403 */ 		self.macro_post_space = macro_post_space;
/* 000403 */ 	});},
/* 000405 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000406 */ 		return LatexMacroNode;
/* 000406 */ 	});}
/* 000406 */ });
/* 000429 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000429 */ 	__module__: __name__,
/* 000495 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000495 */ 		var kwargs = dict ();
/* 000495 */ 		if (arguments.length) {
/* 000495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 					switch (__attrib0__) {
/* 000495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 				delete kwargs.__kwargtrans__;
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 		else {
/* 000495 */ 		}
/* 000496 */ 		var nodeargd = (function () {
/* 000496 */ 			var __accu0__ = kwargs;
/* 000496 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedMacroArgs, null));
/* 000496 */ 		}) ();
/* 000497 */ 		var spec = (function () {
/* 000497 */ 			var __accu0__ = kwargs;
/* 000497 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000497 */ 		}) ();
/* 000502 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000507 */ 		self.environmentname = environmentname;
/* 000508 */ 		self.spec = spec;
/* 000509 */ 		self.nodelist = nodelist;
/* 000510 */ 		self.nodeargd = nodeargd;
/* 000510 */ 	});},
/* 000517 */ 	get _get_envname () {return __get__ (this, function (self) {
/* 000517 */ 		if (arguments.length) {
/* 000517 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000517 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000517 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000517 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000517 */ 					switch (__attrib0__) {
/* 000517 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 					}
/* 000517 */ 				}
/* 000517 */ 			}
/* 000517 */ 		}
/* 000517 */ 		else {
/* 000517 */ 		}
/* 000519 */ 		return self.environmentname;
/* 000519 */ 	});},
/* 000528 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000529 */ 		return LatexEnvironmentNode;
/* 000529 */ 	});}
/* 000529 */ });
/* 000529 */ Object.defineProperty (LatexEnvironmentNode, 'envname', property.call (LatexEnvironmentNode, LatexEnvironmentNode._get_envname));;
/* 000532 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000532 */ 	__module__: __name__,
/* 000570 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000570 */ 		var kwargs = dict ();
/* 000570 */ 		if (arguments.length) {
/* 000570 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000570 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000570 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000570 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000570 */ 					switch (__attrib0__) {
/* 000570 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000570 */ 					}
/* 000570 */ 				}
/* 000570 */ 				delete kwargs.__kwargtrans__;
/* 000570 */ 			}
/* 000570 */ 		}
/* 000570 */ 		else {
/* 000570 */ 		}
/* 000572 */ 		var spec = (function () {
/* 000572 */ 			var __accu0__ = kwargs;
/* 000572 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000572 */ 		}) ();
/* 000573 */ 		var nodeargd = (function () {
/* 000573 */ 			var __accu0__ = kwargs;
/* 000573 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000573 */ 		}) ();
/* 000575 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000579 */ 		self.specials_chars = specials_chars;
/* 000580 */ 		self.spec = spec;
/* 000581 */ 		self.nodeargd = nodeargd;
/* 000581 */ 	});},
/* 000583 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000583 */ 		if (arguments.length) {
/* 000583 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000583 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000583 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000583 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000583 */ 					switch (__attrib0__) {
/* 000583 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 					}
/* 000583 */ 				}
/* 000583 */ 			}
/* 000583 */ 		}
/* 000583 */ 		else {
/* 000583 */ 		}
/* 000584 */ 		return LatexSpecialsNode;
/* 000584 */ 	});}
/* 000584 */ });
/* 000587 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000587 */ 	__module__: __name__,
/* 000613 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000613 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000613 */ 			var nodelist = [];
/* 000613 */ 		};
/* 000613 */ 		var kwargs = dict ();
/* 000613 */ 		if (arguments.length) {
/* 000613 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000613 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000613 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000613 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000613 */ 					switch (__attrib0__) {
/* 000613 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000613 */ 					}
/* 000613 */ 				}
/* 000613 */ 				delete kwargs.__kwargtrans__;
/* 000613 */ 			}
/* 000613 */ 		}
/* 000613 */ 		else {
/* 000613 */ 		}
/* 000614 */ 		var delimiters = (function () {
/* 000614 */ 			var __accu0__ = kwargs;
/* 000614 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000614 */ 		}) ();
/* 000616 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000621 */ 		self.displaytype = displaytype;
/* 000622 */ 		self.nodelist = nodelist;
/* 000623 */ 		self.delimiters = delimiters;
/* 000623 */ 	});},
/* 000625 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000625 */ 		if (arguments.length) {
/* 000625 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000625 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000625 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000625 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000625 */ 					switch (__attrib0__) {
/* 000625 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 					}
/* 000625 */ 				}
/* 000625 */ 			}
/* 000625 */ 		}
/* 000625 */ 		else {
/* 000625 */ 		}
/* 000626 */ 		return LatexMathNode;
/* 000626 */ 	});}
/* 000626 */ });
/* 000634 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000634 */ 	__module__: __name__,
/* 000664 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000664 */ 		var kwargs = dict ();
/* 000664 */ 		if (arguments.length) {
/* 000664 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000664 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000664 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000664 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000664 */ 					switch (__attrib0__) {
/* 000664 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000664 */ 					}
/* 000664 */ 				}
/* 000664 */ 				delete kwargs.__kwargtrans__;
/* 000664 */ 			}
/* 000664 */ 		}
/* 000664 */ 		else {
/* 000664 */ 		}
/* 000666 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000667 */ 			var obj = nodelist;
/* 000668 */ 			self.nodelist = obj.nodelist;
/* 000669 */ 			self.parsing_state = obj.parsing_state;
/* 000670 */ 			self.latex_walker = obj.latex_walker;
/* 000671 */ 			self.pos = obj.pos;
/* 000672 */ 			self.pos_end = obj.pos_end;
/* 000673 */ 			return ;
/* 000673 */ 		}
/* 000675 */ 		self.nodelist = nodelist;
/* 000677 */ 		self.parsing_state = (function () {
/* 000677 */ 			var __accu0__ = kwargs;
/* 000677 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000677 */ 		}) ();
/* 000678 */ 		self.latex_walker = (function () {
/* 000678 */ 			var __accu0__ = kwargs;
/* 000678 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000678 */ 		}) ();
/* 000679 */ 		self.pos = (function () {
/* 000679 */ 			var __accu0__ = kwargs;
/* 000679 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000679 */ 		}) ();
/* 000680 */ 		self.pos_end = (function () {
/* 000680 */ 			var __accu0__ = kwargs;
/* 000680 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000680 */ 		}) ();
/* 000682 */ 		if (__t__ (kwargs)) {
/* 000684 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000684 */ 			__except0__.__cause__ = null;
/* 000684 */ 			throw __except0__;
/* 000684 */ 		}
/* 000687 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000687 */ 		self.pos = __left0__ [0];
/* 000687 */ 		self.pos_end = __left0__ [1];
/* 000687 */ 	});},
/* 000691 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000691 */ 		if (arguments.length) {
/* 000691 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000691 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000691 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000691 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000691 */ 					switch (__attrib0__) {
/* 000691 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 					}
/* 000691 */ 				}
/* 000691 */ 			}
/* 000691 */ 		}
/* 000691 */ 		else {
/* 000691 */ 		}
/* 000692 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000693 */ 			return null;
/* 000693 */ 		}
/* 000694 */ 		return __sub__ (self.pos_end, self.pos);
/* 000694 */ 	});},
/* 000696 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000696 */ 		if (arguments.length) {
/* 000696 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000696 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000696 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000696 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000696 */ 					switch (__attrib0__) {
/* 000696 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 					}
/* 000696 */ 				}
/* 000696 */ 			}
/* 000696 */ 		}
/* 000696 */ 		else {
/* 000696 */ 		}
/* 000698 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000701 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000701 */ 		}
/* 000702 */ 		return __getitem__ (self.nodelist, index);
/* 000702 */ 	});},
/* 000704 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000704 */ 		if (arguments.length) {
/* 000704 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000704 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000704 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000704 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000704 */ 					switch (__attrib0__) {
/* 000704 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000704 */ 					}
/* 000704 */ 				}
/* 000704 */ 			}
/* 000704 */ 		}
/* 000704 */ 		else {
/* 000704 */ 		}
/* 000705 */ 		return __call__ (len, null, self.nodelist);
/* 000705 */ 	});},
/* 000708 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000708 */ 		if (arguments.length) {
/* 000708 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000708 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000708 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000708 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000708 */ 					switch (__attrib0__) {
/* 000708 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000708 */ 					}
/* 000708 */ 				}
/* 000708 */ 			}
/* 000708 */ 		}
/* 000708 */ 		else {
/* 000708 */ 		}
/* 000715 */ 		return (function () {
/* 000715 */ 			var __accu0__ = '';
/* 000715 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000715 */ 				var __accu1__ = [];
/* 000715 */ 				var __iterable0__ = self.nodelist;
/* 000715 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000717 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000717 */ 					if (__t__ (n !== null)) {
/* 000718 */ 						(function () {
/* 000718 */ 							var __accu2__ = __accu1__;
/* 000716 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000716 */ 								var __accu3__ = n;
/* 000716 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000716 */ 							}) ());
/* 000716 */ 						}) ();
/* 000716 */ 					}
/* 000716 */ 				}
/* 000716 */ 				return __accu1__;
/* 000716 */ 			}) ());
/* 000716 */ 		}) ();
/* 000716 */ 	});},
/* 000722 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000722 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000722 */ 			var skip_none = true;
/* 000722 */ 		};
/* 000722 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000722 */ 			var keep_separators = false;
/* 000722 */ 		};
/* 000722 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000722 */ 			var max_split = null;
/* 000722 */ 		};
/* 000722 */ 		if (arguments.length) {
/* 000722 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000722 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000722 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000722 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000722 */ 					switch (__attrib0__) {
/* 000722 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 					}
/* 000722 */ 				}
/* 000722 */ 			}
/* 000722 */ 		}
/* 000722 */ 		else {
/* 000722 */ 		}
/* 000725 */ 		var nodelists_list = [[]];
/* 000727 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000728 */ 			var no_more_splits = true;
/* 000728 */ 		}
/* 000729 */ 		else {
/* 000730 */ 			var no_more_splits = false;
/* 000730 */ 		}
/* 000732 */ 		var __iterable0__ = self.nodelist;
/* 000732 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000732 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000733 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000733 */ 				continue;
/* 000733 */ 			}
/* 000735 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000736 */ 				if (__t__ (keep_separators)) {
/* 000737 */ 					(function () {
/* 000737 */ 						var __accu0__ = nodelists_list;
/* 000737 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000737 */ 					}) ();
/* 000737 */ 				}
/* 000738 */ 				else {
/* 000739 */ 					(function () {
/* 000739 */ 						var __accu0__ = nodelists_list;
/* 000739 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000739 */ 					}) ();
/* 000739 */ 				}
/* 000741 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000742 */ 					var no_more_splits = true;
/* 000742 */ 				}
/* 000742 */ 			}
/* 000743 */ 			else {
/* 000744 */ 				(function () {
/* 000744 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000744 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000744 */ 				}) ();
/* 000744 */ 			}
/* 000744 */ 		}
/* 000746 */ 		return (function () {
/* 000746 */ 			var __accu0__ = [];
/* 000746 */ 			var __iterable0__ = nodelists_list;
/* 000746 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000746 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000746 */ 				(function () {
/* 000746 */ 					var __accu1__ = __accu0__;
/* 000746 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (LatexNodeList, null, nl));
/* 000746 */ 				}) ();
/* 000746 */ 			}
/* 000746 */ 			return __accu0__;
/* 000746 */ 		}) ();
/* 000746 */ 	});},
/* 000748 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars) {
/* 000748 */ 		if (arguments.length) {
/* 000748 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000748 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000748 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000748 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000748 */ 					switch (__attrib0__) {
/* 000748 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 					}
/* 000748 */ 				}
/* 000748 */ 			}
/* 000748 */ 		}
/* 000748 */ 		else {
/* 000748 */ 		}
/* 000780 */ 		var split_node_lists = [];
/* 000782 */ 		if (__t__ (__call__ (callable, null, sep_chars))) {
/* 000783 */ 			var sep_chars_fn = sep_chars;
/* 000783 */ 		}
/* 000784 */ 		else {
/* 000785 */ 			var sep_chars_fn = (function __lambda__ (chars, sep_chars) {
/* 000785 */ 				if (typeof sep_chars == 'undefined' || (sep_chars != null && sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000785 */ 					var sep_chars = sep_chars;
/* 000785 */ 				};
/* 000785 */ 				if (arguments.length) {
/* 000785 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000785 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000785 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000785 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000785 */ 							switch (__attrib0__) {
/* 000785 */ 								case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000785 */ 								case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000785 */ 							}
/* 000785 */ 						}
/* 000785 */ 					}
/* 000785 */ 				}
/* 000785 */ 				else {
/* 000785 */ 				}
/* 000785 */ 				return (function () {
/* 000785 */ 					var __accu0__ = chars;
/* 000785 */ 					return __call__ (__accu0__.py_split, __accu0__, sep_chars);
/* 000785 */ 				}) ();
/* 000785 */ 			});
/* 000785 */ 		}
/* 000787 */ 		var lw = self.latex_walker;
/* 000788 */ 		if (__t__ (lw !== null)) {
/* 000789 */ 			var make_node = lw.make_node;
/* 000789 */ 		}
/* 000790 */ 		else {
/* 000791 */ 			var make_node = (function __lambda__ (cls) {
/* 000791 */ 				var kwargs = dict ();
/* 000791 */ 				if (arguments.length) {
/* 000791 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000791 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000791 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000791 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000791 */ 							switch (__attrib0__) {
/* 000791 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000791 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000791 */ 							}
/* 000791 */ 						}
/* 000791 */ 						delete kwargs.__kwargtrans__;
/* 000791 */ 					}
/* 000791 */ 				}
/* 000791 */ 				else {
/* 000791 */ 				}
/* 000791 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 000791 */ 			});
/* 000791 */ 		}
/* 000793 */ 		var chars_to_node = function (chars, orig_node, rel_pos) {
/* 000793 */ 			if (arguments.length) {
/* 000793 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000793 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000793 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000793 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000793 */ 						switch (__attrib0__) {
/* 000793 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 							case 'orig_node': var orig_node = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 						}
/* 000793 */ 					}
/* 000793 */ 				}
/* 000793 */ 			}
/* 000793 */ 			else {
/* 000793 */ 			}
/* 000794 */ 			var pos = __add__ (orig_node.pos, rel_pos);
/* 000798 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: pos, pos_end: __add__ (pos, __call__ (len, null, chars)), chars: chars}));
/* 000798 */ 		};
/* 000801 */ 		var pending_nodes = [];
/* 000803 */ 		var __iterable0__ = self.nodelist;
/* 000803 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000803 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000804 */ 			if (__t__ ((function () {
/* 000804 */ 				var __accu0__ = n;
/* 000804 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexwalker.LatexCharsNode);
/* 000804 */ 			}) ())) {
/* 000805 */ 				var parts = __call__ (sep_chars_fn, null, n.chars);
/* 000806 */ 				var rel_pos = 0;
/* 000807 */ 				if (__t__ (__getitem__ (parts, 0))) {
/* 000808 */ 					(function () {
/* 000808 */ 						var __accu0__ = pending_nodes;
/* 000808 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, __getitem__ (parts, 0), n, 0));
/* 000808 */ 					}) ();
/* 000809 */ 					var rel_pos = __call__ (len, null, __getitem__ (parts, 0));
/* 000810 */ 					var parts = __getslice__ (parts, 1, null, 1);
/* 000810 */ 				}
/* 000811 */ 				if (__t__ (!__t__ ((parts)))) {
/* 000811 */ 					continue;
/* 000811 */ 				}
/* 000814 */ 				if (__t__ (pending_nodes)) {
/* 000815 */ 					(function () {
/* 000815 */ 						var __accu0__ = split_node_lists;
/* 000815 */ 						return __call__ (__accu0__.append, __accu0__, pending_nodes);
/* 000815 */ 					}) ();
/* 000816 */ 					var pending_nodes = [];
/* 000816 */ 				}
/* 000817 */ 				var __iterable1__ = parts;
/* 000817 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000817 */ 					var p = __getitem__ (__iterable1__, __index1__);
/* 000818 */ 					(function () {
/* 000818 */ 						var __accu0__ = split_node_lists;
/* 000818 */ 						return __call__ (__accu0__.append, __accu0__, [__call__ (chars_to_node, null, p, n, rel_pos)]);
/* 000818 */ 					}) ();
/* 000819 */ 					var rel_pos = __call__ (__iadd__, null, rel_pos, __call__ (len, null, p));
/* 000819 */ 				}
/* 000819 */ 				continue;
/* 000819 */ 			}
/* 000823 */ 			(function () {
/* 000823 */ 				var __accu0__ = pending_nodes;
/* 000823 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000823 */ 			}) ();
/* 000823 */ 		}
/* 000825 */ 		if (__t__ (pending_nodes)) {
/* 000826 */ 			(function () {
/* 000826 */ 				var __accu0__ = split_node_lists;
/* 000826 */ 				return __call__ (__accu0__.append, __accu0__, pending_nodes);
/* 000826 */ 			}) ();
/* 000826 */ 		}
/* 000828 */ 		return split_node_lists;
/* 000828 */ 	});},
/* 000833 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000833 */ 		if (arguments.length) {
/* 000833 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000833 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000833 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000833 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000833 */ 					switch (__attrib0__) {
/* 000833 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000833 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000833 */ 					}
/* 000833 */ 				}
/* 000833 */ 			}
/* 000833 */ 		}
/* 000833 */ 		else {
/* 000833 */ 		}
/* 000834 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ (__eq__ (self.pos, other.pos)) && __eq__ (self.pos_end, other.pos_end);
/* 000834 */ 	});},
/* 000841 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000841 */ 		if (arguments.length) {
/* 000841 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000841 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000841 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000841 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000841 */ 					switch (__attrib0__) {
/* 000841 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 					}
/* 000841 */ 				}
/* 000841 */ 			}
/* 000841 */ 		}
/* 000841 */ 		else {
/* 000841 */ 		}
/* 000842 */ 		return self.nodelist;
/* 000842 */ 	});},
/* 000844 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000845 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 000845 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 000845 */ 		}) ();
/* 000845 */ 	});}
/* 000845 */ });
/* 000845 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 000857 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 000857 */ 	if (arguments.length) {
/* 000857 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000857 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000857 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000857 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000857 */ 				switch (__attrib0__) {
/* 000857 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000857 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000857 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000857 */ 				}
/* 000857 */ 			}
/* 000857 */ 		}
/* 000857 */ 	}
/* 000857 */ 	else {
/* 000857 */ 	}
/* 000859 */ 	if (__t__ (pos === null)) {
/* 000860 */ 		var __break0__ = false;
/* 000860 */ 		var __iterable0__ = nodelist;
/* 000860 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000860 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000861 */ 			if (__t__ (n !== null)) {
/* 000862 */ 				var pos = n.pos;
/* 000862 */ 				__break0__ = true;
/* 000862 */ 				break;
/* 000862 */ 			}
/* 000862 */ 		}
/* 000864 */ 		if (!__break0__) {
/* 000865 */ 			var pos = null;
/* 000865 */ 		}
/* 000865 */ 	}
/* 000867 */ 	if (__t__ (pos_end === null)) {
/* 000868 */ 		var __break0__ = false;
/* 000868 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 000868 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000868 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000869 */ 			if (__t__ (n !== null)) {
/* 000870 */ 				var pos_end = n.pos_end;
/* 000870 */ 				__break0__ = true;
/* 000870 */ 				break;
/* 000870 */ 			}
/* 000870 */ 		}
/* 000872 */ 		if (!__break0__) {
/* 000873 */ 			var pos_end = null;
/* 000873 */ 		}
/* 000873 */ 	}
/* 000875 */ 	return tuple ([pos, pos_end]);
/* 000875 */ };
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map