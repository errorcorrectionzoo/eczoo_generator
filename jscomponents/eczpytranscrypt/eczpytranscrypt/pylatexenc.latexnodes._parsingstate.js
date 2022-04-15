/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 00:57:00
/* 000038 */ var logging = {};
/* 000038 */ var unique_object_id = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000063 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000063 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsingstate';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000042 */ export var _StrictAsciiAlphaChars =  __class__ ('_StrictAsciiAlphaChars', [object], {
/* 000042 */ 	__module__: __name__,
/* 000043 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000044 */ 		return __add__ ((function () {
/* 000044 */ 			var __accu0__ = '';
/* 000044 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000044 */ 				var __accu1__ = [];
/* 000044 */ 				for (var j = 0; j < 26; j++) {
/* 000045 */ 					(function () {
/* 000045 */ 						var __accu2__ = __accu1__;
/* 000045 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (chr, null, __add__ (__call__ (ord, null, 'a'), j)));
/* 000045 */ 					}) ();
/* 000045 */ 				}
/* 000045 */ 				return __accu1__;
/* 000045 */ 			}) ());
/* 000046 */ 		}) (), (function () {
/* 000046 */ 			var __accu0__ = '';
/* 000046 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000046 */ 				var __accu1__ = [];
/* 000046 */ 				for (var j = 0; j < 26; j++) {
/* 000047 */ 					(function () {
/* 000047 */ 						var __accu2__ = __accu1__;
/* 000047 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (chr, null, __add__ (__call__ (ord, null, 'A'), j)));
/* 000047 */ 					}) ();
/* 000047 */ 				}
/* 000047 */ 				return __accu1__;
/* 000047 */ 			}) ());
/* 000047 */ 		}) ());
/* 000047 */ 	});},
/* 000049 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000050 */ 		return __call__ (repr, null, (function () {
/* 000050 */ 			var __accu0__ = self;
/* 000050 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000050 */ 		}) ());
/* 000050 */ 	});},
/* 000051 */ 	get __contains__ () {return __get__ (this, function (self, c) {
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000052 */ 		var n = __call__ (ord, null, c);
/* 000053 */ 		return __t__ ((__le__ (97, n) && __le__ (n, 122))) || (__le__ (65, n) && __le__ (n, 90));
/* 000053 */ 	});}
/* 000053 */ });
/* 000064 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000072 */ export var ParsingState =  __class__ ('ParsingState', [object], {
/* 000072 */ 	__module__: __name__,
/* 000172 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000172 */ 		var kwargs = dict ();
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 				delete kwargs.__kwargtrans__;
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		__call__ (__call__ (__super__, null, ParsingState, '__init__'), null, self);
/* 000175 */ 		self.s = null;
/* 000177 */ 		self.latex_context = null;
/* 000179 */ 		self.in_math_mode = false;
/* 000180 */ 		self.math_mode_delimiter = null;
/* 000183 */ 		self.latex_group_delimiters = [tuple (['{', '}'])];
/* 000184 */ 		self.latex_inline_math_delimiters = [tuple (['$', '$']), tuple (['\\(', '\\)'])];
/* 000185 */ 		self.latex_display_math_delimiters = [tuple (['$$', '$$']), tuple (['\\[', '\\]'])];
/* 000186 */ 		self.enable_double_newline_paragraphs = true;
/* 000187 */ 		self.enable_macros = true;
/* 000188 */ 		self.enable_environments = true;
/* 000189 */ 		self.enable_comments = true;
/* 000190 */ 		self.enable_groups = true;
/* 000191 */ 		self.enable_specials = true;
/* 000192 */ 		self.enable_math = true;
/* 000193 */ 		self.macro_alpha_chars = __call__ (_StrictAsciiAlphaChars, null);
/* 000197 */ 		self.macro_escape_char = '\\';
/* 000198 */ 		self.comment_char = '%';
/* 000201 */ 		self._latex_group_delimchars_by_open = dict ({});
/* 000202 */ 		self._latex_group_delimchars_close = __call__ (set, null);
/* 000204 */ 		self._math_delims_info_startchars = '';
/* 000206 */ 		self._math_all_delims_by_len = __call__ (set, null);
/* 000207 */ 		self._math_delims_info_by_open = dict ({});
/* 000208 */ 		self._math_delims_close = __call__ (set, null);
/* 000209 */ 		self._math_expecting_close_delim_info = null;
/* 000211 */ 		self._fields = tuple (['s', 'latex_context', 'in_math_mode', 'math_mode_delimiter', 'latex_group_delimiters', 'latex_inline_math_delimiters', 'latex_display_math_delimiters', 'enable_double_newline_paragraphs', 'enable_macros', 'enable_environments', 'enable_comments', 'enable_groups', 'enable_specials', 'enable_math', 'macro_alpha_chars', 'macro_escape_char', 'comment_char']);
/* 000229 */ 		self._parent_parsing_state_info = tuple ([null, dict ({})]);
/* 000231 */ 		var do_postprocess = (function () {
/* 000231 */ 			var __accu0__ = kwargs;
/* 000231 */ 			return __call__ (__accu0__.py_pop, __accu0__, '_do_postprocess', true);
/* 000231 */ 		}) ();
/* 000233 */ 		(function () {
/* 000233 */ 			var __accu0__ = self;
/* 000233 */ 			return __call__ (__accu0__._set_fields, __accu0__, kwargs, __kwargtrans__ ({do_postprocess: do_postprocess}));
/* 000233 */ 		}) ();
/* 000233 */ 	});},
/* 000235 */ 	get _set_derivative_fields () {return __get__ (this, function (self) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000240 */ 		var __left0__ = __call__ (zip, null, ...self.latex_group_delimiters);
/* 000240 */ 		var a = __left0__ [0];
/* 000240 */ 		var b = __left0__ [1];
/* 000241 */ 		self._latex_group_delimchars_by_open = __call__ (dict, null, self.latex_group_delimiters);
/* 000242 */ 		self._latex_group_delimchars_close = __call__ (set, null, b);
/* 000244 */ 		self._math_delims_info_startchars = (function () {
/* 000244 */ 			var __accu0__ = '';
/* 000244 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000244 */ 				var __accu1__ = [];
/* 000244 */ 				var __iterable0__ = __add__ (self.latex_inline_math_delimiters, self.latex_display_math_delimiters);
/* 000244 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000247 */ 					var pair = __getitem__ (__iterable0__, __index0__);
/* 000246 */ 					var __iterable1__ = pair;
/* 000246 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000248 */ 						var x = __getitem__ (__iterable1__, __index1__);
/* 000248 */ 						(function () {
/* 000248 */ 							var __accu2__ = __accu1__;
/* 000248 */ 							return __call__ (__accu2__.append, __accu2__, __getslice__ (x, 0, 1, 1));
/* 000248 */ 						}) ();
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 				return __accu1__;
/* 000248 */ 			}) ());
/* 000248 */ 		}) ();
/* 000250 */ 		self._math_all_delims_by_len = __call__ (sorted, null, (function () {
/* 000250 */ 			var __accu0__ = [];
/* 000251 */ 			var __iterable0__ = tuple ([tuple ([self.latex_inline_math_delimiters, 'mathmode_inline']), tuple ([self.latex_display_math_delimiters, 'mathmode_display'])]);
/* 000251 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000255 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000255 */ 				var delimlist = __left0__ [0];
/* 000255 */ 				var tok_type = __left0__ [1];
/* 000257 */ 				var __iterable1__ = __call__ (set, null, (function () {
/* 000257 */ 					var __accu1__ = [];
/* 000257 */ 					var __iterable2__ = delimlist;
/* 000257 */ 					for (var __index1__ = 0; __index1__ < len (__iterable2__); __index1__++) {
/* 000257 */ 						var dlmpair = __getitem__ (__iterable2__, __index1__);
/* 000257 */ 						var __iterable3__ = dlmpair;
/* 000257 */ 						for (var __index2__ = 0; __index2__ < len (__iterable3__); __index2__++) {
/* 000257 */ 							var dlm = __getitem__ (__iterable3__, __index2__);
/* 000257 */ 							(function () {
/* 000257 */ 								var __accu2__ = __accu1__;
/* 000257 */ 								return __call__ (__accu2__.append, __accu2__, dlm);
/* 000257 */ 							}) ();
/* 000257 */ 						}
/* 000257 */ 					}
/* 000257 */ 					return __accu1__;
/* 000257 */ 				}) ());
/* 000257 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000257 */ 					var delim = __getitem__ (__iterable1__, __index1__);
/* 000257 */ 					(function () {
/* 000257 */ 						var __accu1__ = __accu0__;
/* 000257 */ 						return __call__ (__accu1__.append, __accu1__, tuple ([delim, tok_type]));
/* 000257 */ 					}) ();
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 			return __accu0__;
/* 000257 */ 		}) (), __kwargtrans__ ({key: (function __lambda__ (x) {
/* 000257 */ 			if (arguments.length) {
/* 000257 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 						switch (__attrib0__) {
/* 000257 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						}
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 			else {
/* 000257 */ 			}
/* 000259 */ 			return __call__ (len, null, __getitem__ (x, 0));
/* 000259 */ 		}), reverse: true}));
/* 000268 */ 		self._math_delims_info_by_open = __call__ (dict, null, __add__ ((function () {
/* 000268 */ 			var __accu0__ = [];
/* 000269 */ 			var __iterable0__ = self.latex_inline_math_delimiters;
/* 000269 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000270 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000270 */ 				var open_delim = __left0__ [0];
/* 000270 */ 				var close_delim = __left0__ [1];
/* 000270 */ 				(function () {
/* 000270 */ 					var __accu1__ = __accu0__;
/* 000269 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_inline'}))]));
/* 000269 */ 				}) ();
/* 000269 */ 			}
/* 000269 */ 			return __accu0__;
/* 000269 */ 		}) (), (function () {
/* 000269 */ 			var __accu0__ = [];
/* 000271 */ 			var __iterable0__ = self.latex_display_math_delimiters;
/* 000271 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000272 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000272 */ 				var open_delim = __left0__ [0];
/* 000272 */ 				var close_delim = __left0__ [1];
/* 000272 */ 				(function () {
/* 000272 */ 					var __accu1__ = __accu0__;
/* 000271 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_display'}))]));
/* 000271 */ 				}) ();
/* 000271 */ 			}
/* 000271 */ 			return __accu0__;
/* 000271 */ 		}) ()));
/* 000274 */ 		self._math_delims_close = __call__ (set, null, (function () {
/* 000274 */ 			var __accu0__ = [];
/* 000276 */ 			var __iterable0__ = (function () {
/* 000276 */ 				var __accu1__ = self._math_delims_info_by_open;
/* 000276 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000276 */ 			}) ();
/* 000276 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000276 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000276 */ 				var opendelim = __left0__ [0];
/* 000276 */ 				var info = __left0__ [1];
/* 000276 */ 				(function () {
/* 000276 */ 					var __accu1__ = __accu0__;
/* 000276 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (info, 'close_delim'));
/* 000276 */ 				}) ();
/* 000276 */ 			}
/* 000276 */ 			return __accu0__;
/* 000276 */ 		}) ());
/* 000278 */ 		if (__t__ (!__t__ ((self.in_math_mode)))) {
/* 000279 */ 			self._math_expecting_close_delim_info = null;
/* 000279 */ 		}
/* 000280 */ 		else if (__t__ (__in__ (self.math_mode_delimiter, self._math_delims_info_by_open))) {
/* 000281 */ 			self._math_expecting_close_delim_info = __getitem__ (self._math_delims_info_by_open, self.math_mode_delimiter);
/* 000281 */ 		}
/* 000283 */ 		else {
/* 000287 */ 			self._math_expecting_close_delim_info = null;
/* 000287 */ 		}
/* 000287 */ 	});},
/* 000291 */ 	get sub_context () {return __get__ (this, function (self) {
/* 000291 */ 		var kwargs = dict ();
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 				delete kwargs.__kwargtrans__;
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000305 */ 		var p = (function () {
/* 000305 */ 			var __accu0__ = self;
/* 000305 */ 			return __call__ (__accu0__.__class__, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({_do_postprocess: false}, (function () {
/* 000305 */ 				var __accu1__ = self;
/* 000305 */ 				return __call__ (__accu1__.get_fields, __accu1__);
/* 000305 */ 			}) ())));
/* 000305 */ 		}) ();
/* 000308 */ 		p._parent_parsing_state_info = tuple ([self, kwargs]);
/* 000310 */ 		(function () {
/* 000310 */ 			var __accu0__ = p;
/* 000310 */ 			return __call__ (__accu0__._set_fields, __accu0__, kwargs);
/* 000310 */ 		}) ();
/* 000312 */ 		return p;
/* 000312 */ 	});},
/* 000314 */ 	get get_fields () {return __get__ (this, function (self) {
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 					}
/* 000314 */ 				}
/* 000314 */ 			}
/* 000314 */ 		}
/* 000314 */ 		else {
/* 000314 */ 		}
/* 000319 */ 		return __call__ (dict, null, (function () {
/* 000319 */ 			var __accu0__ = [];
/* 000319 */ 			var __iterable0__ = self._fields;
/* 000319 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000319 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000319 */ 				(function () {
/* 000319 */ 					var __accu1__ = __accu0__;
/* 000319 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([f, __call__ (getattr, null, self, f)]));
/* 000319 */ 				}) ();
/* 000319 */ 			}
/* 000319 */ 			return __accu0__;
/* 000319 */ 		}) ());
/* 000319 */ 	});},
/* 000322 */ 	get _set_fields () {return __get__ (this, function (self, kwargs, do_postprocess) {
/* 000322 */ 		if (typeof do_postprocess == 'undefined' || (do_postprocess != null && do_postprocess.hasOwnProperty ("__kwargtrans__"))) {;
/* 000322 */ 			var do_postprocess = true;
/* 000322 */ 		};
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'do_postprocess': var do_postprocess = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000324 */ 		var __iterable0__ = (function () {
/* 000324 */ 			var __accu0__ = kwargs;
/* 000324 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000324 */ 		}) ();
/* 000324 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000324 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000324 */ 			var k = __left0__ [0];
/* 000324 */ 			var v = __left0__ [1];
/* 000325 */ 			if (__t__ (!__in__ (k, self._fields))) {
/* 000326 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000326 */ 					var __accu0__ = 'Invalid field for ParsingState: {}={!r}';
/* 000326 */ 					return __call__ (__accu0__.format, __accu0__, k, v);
/* 000326 */ 				}) ());
/* 000326 */ 				__except0__.__cause__ = null;
/* 000326 */ 				throw __except0__;
/* 000326 */ 			}
/* 000327 */ 			__call__ (setattr, null, self, k, v);
/* 000327 */ 		}
/* 000329 */ 		if (__t__ (do_postprocess)) {
/* 000332 */ 			(function () {
/* 000332 */ 				var __accu0__ = self;
/* 000332 */ 				return __call__ (__accu0__._sanitize, __accu0__, __kwargtrans__ ({given_fields: kwargs}));
/* 000332 */ 			}) ();
/* 000337 */ 			(function () {
/* 000337 */ 				var __accu0__ = self;
/* 000337 */ 				return __call__ (__accu0__._set_derivative_fields, __accu0__);
/* 000337 */ 			}) ();
/* 000337 */ 		}
/* 000337 */ 	});},
/* 000340 */ 	get _sanitize () {return __get__ (this, function (self, given_fields) {
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'given_fields': var given_fields = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000349 */ 		if (__t__ (__t__ (!__t__ ((self.in_math_mode))) && self.math_mode_delimiter)) {
/* 000350 */ 			self.math_mode_delimiter = null;
/* 000351 */ 			if (__t__ (__in__ ('math_mode_delimiter', given_fields))) {
/* 000352 */ 				(function () {
/* 000352 */ 					var __accu0__ = logger;
/* 000352 */ 					return __call__ (__accu0__.warning, __accu0__, 'ParsingState: You set math_mode_delimiter=%r but in_math_mode is False', self.math_mode_delimiter);
/* 000352 */ 				}) ();
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 	});},
/* 000358 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000363 */ 		var clsname = self.__class__.__name__;
/* 000364 */ 		var pswid = (function () {
/* 000364 */ 			var __accu0__ = '{}<{:#x}>';
/* 000364 */ 			return __call__ (__accu0__.format, __accu0__, clsname, __call__ (fn_unique_object_id, null, self));
/* 000364 */ 		}) ();
/* 000366 */ 		var __left0__ = self._parent_parsing_state_info;
/* 000366 */ 		var parent_obj = __left0__ [0];
/* 000366 */ 		var diff_kwargs = __left0__ [1];
/* 000368 */ 		if (__t__ (!__t__ ((parent_obj)))) {
/* 000371 */ 			return pswid;
/* 000371 */ 		}
/* 000374 */ 		return __add__ (__add__ (__add__ (pswid, (function () {
/* 000374 */ 			var __accu0__ = '(<{:#x}> → ';
/* 000374 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, parent_obj));
/* 000374 */ 		}) ()), (function () {
/* 000374 */ 			var __accu0__ = ', ';
/* 000374 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000374 */ 				var __accu1__ = [];
/* 000375 */ 				var __iterable0__ = (function () {
/* 000375 */ 					var __accu2__ = diff_kwargs;
/* 000375 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000375 */ 				}) ();
/* 000375 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000375 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000375 */ 					var k = __left0__ [0];
/* 000375 */ 					var v = __left0__ [1];
/* 000375 */ 					(function () {
/* 000375 */ 						var __accu2__ = __accu1__;
/* 000375 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000375 */ 							var __accu3__ = '{}={!r}';
/* 000375 */ 							return __call__ (__accu3__.format, __accu3__, k, v);
/* 000375 */ 						}) ());
/* 000375 */ 					}) ();
/* 000375 */ 				}
/* 000375 */ 				return py_iter (__accu1__);
/* 000375 */ 			}) ());
/* 000375 */ 		}) ()), ')');
/* 000375 */ 	});}
/* 000375 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsingstate.map