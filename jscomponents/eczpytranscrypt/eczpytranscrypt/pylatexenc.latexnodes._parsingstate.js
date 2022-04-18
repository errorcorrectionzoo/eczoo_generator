/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:05
/* 000038 */ var logging = {};
/* 000038 */ var unique_object_id = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000064 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000064 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
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
/* 000053 */ 	});},
/* 000058 */ 	get __jsonobject__ () {return __get__ (this, function (self) {
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000059 */ 		return (function () {
/* 000059 */ 			var __accu0__ = self;
/* 000059 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000059 */ 		}) ();
/* 000059 */ 	});}
/* 000059 */ });
/* 000065 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000073 */ export var ParsingState =  __class__ ('ParsingState', [object], {
/* 000073 */ 	__module__: __name__,
/* 000173 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000173 */ 		var kwargs = dict ();
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 				delete kwargs.__kwargtrans__;
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000174 */ 		__call__ (__call__ (__super__, null, ParsingState, '__init__'), null, self);
/* 000176 */ 		self.s = null;
/* 000178 */ 		self.latex_context = null;
/* 000180 */ 		self.in_math_mode = false;
/* 000181 */ 		self.math_mode_delimiter = null;
/* 000184 */ 		self.latex_group_delimiters = [tuple (['{', '}'])];
/* 000185 */ 		self.latex_inline_math_delimiters = [tuple (['$', '$']), tuple (['\\(', '\\)'])];
/* 000186 */ 		self.latex_display_math_delimiters = [tuple (['$$', '$$']), tuple (['\\[', '\\]'])];
/* 000187 */ 		self.enable_double_newline_paragraphs = true;
/* 000188 */ 		self.enable_macros = true;
/* 000189 */ 		self.enable_environments = true;
/* 000190 */ 		self.enable_comments = true;
/* 000191 */ 		self.enable_groups = true;
/* 000192 */ 		self.enable_specials = true;
/* 000193 */ 		self.enable_math = true;
/* 000194 */ 		self.macro_alpha_chars = __call__ (_StrictAsciiAlphaChars, null);
/* 000198 */ 		self.macro_escape_char = '\\';
/* 000199 */ 		self.comment_char = '%';
/* 000202 */ 		self._latex_group_delimchars_by_open = dict ({});
/* 000203 */ 		self._latex_group_delimchars_close = __call__ (set, null);
/* 000205 */ 		self._math_delims_info_startchars = '';
/* 000207 */ 		self._math_all_delims_by_len = __call__ (set, null);
/* 000208 */ 		self._math_delims_info_by_open = dict ({});
/* 000209 */ 		self._math_delims_close = __call__ (set, null);
/* 000210 */ 		self._math_expecting_close_delim_info = null;
/* 000212 */ 		self._fields = tuple (['s', 'latex_context', 'in_math_mode', 'math_mode_delimiter', 'latex_group_delimiters', 'latex_inline_math_delimiters', 'latex_display_math_delimiters', 'enable_double_newline_paragraphs', 'enable_macros', 'enable_environments', 'enable_comments', 'enable_groups', 'enable_specials', 'enable_math', 'macro_alpha_chars', 'macro_escape_char', 'comment_char']);
/* 000230 */ 		self._parent_parsing_state_info = tuple ([null, dict ({})]);
/* 000232 */ 		var do_postprocess = (function () {
/* 000232 */ 			var __accu0__ = kwargs;
/* 000232 */ 			return __call__ (__accu0__.py_pop, __accu0__, '_do_postprocess', true);
/* 000232 */ 		}) ();
/* 000234 */ 		(function () {
/* 000234 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__._set_fields, __accu0__, kwargs, __kwargtrans__ ({do_postprocess: do_postprocess}));
/* 000234 */ 		}) ();
/* 000234 */ 	});},
/* 000236 */ 	get _set_derivative_fields () {return __get__ (this, function (self) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000241 */ 		var __left0__ = __call__ (zip, null, ...self.latex_group_delimiters);
/* 000241 */ 		var a = __left0__ [0];
/* 000241 */ 		var b = __left0__ [1];
/* 000242 */ 		self._latex_group_delimchars_by_open = __call__ (dict, null, self.latex_group_delimiters);
/* 000243 */ 		self._latex_group_delimchars_close = __call__ (set, null, b);
/* 000245 */ 		self._math_delims_info_startchars = (function () {
/* 000245 */ 			var __accu0__ = '';
/* 000245 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000245 */ 				var __accu1__ = [];
/* 000245 */ 				var __iterable0__ = __add__ (self.latex_inline_math_delimiters, self.latex_display_math_delimiters);
/* 000245 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000248 */ 					var pair = __getitem__ (__iterable0__, __index0__);
/* 000247 */ 					var __iterable1__ = pair;
/* 000247 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000249 */ 						var x = __getitem__ (__iterable1__, __index1__);
/* 000249 */ 						(function () {
/* 000249 */ 							var __accu2__ = __accu1__;
/* 000249 */ 							return __call__ (__accu2__.append, __accu2__, __getslice__ (x, 0, 1, 1));
/* 000249 */ 						}) ();
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 				return __accu1__;
/* 000249 */ 			}) ());
/* 000249 */ 		}) ();
/* 000251 */ 		self._math_all_delims_by_len = __call__ (sorted, null, (function () {
/* 000251 */ 			var __accu0__ = [];
/* 000252 */ 			var __iterable0__ = tuple ([tuple ([self.latex_inline_math_delimiters, 'mathmode_inline']), tuple ([self.latex_display_math_delimiters, 'mathmode_display'])]);
/* 000252 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000256 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000256 */ 				var delimlist = __left0__ [0];
/* 000256 */ 				var tok_type = __left0__ [1];
/* 000258 */ 				var __iterable1__ = __call__ (set, null, (function () {
/* 000258 */ 					var __accu1__ = [];
/* 000258 */ 					var __iterable2__ = delimlist;
/* 000258 */ 					for (var __index1__ = 0; __index1__ < len (__iterable2__); __index1__++) {
/* 000258 */ 						var dlmpair = __getitem__ (__iterable2__, __index1__);
/* 000258 */ 						var __iterable3__ = dlmpair;
/* 000258 */ 						for (var __index2__ = 0; __index2__ < len (__iterable3__); __index2__++) {
/* 000258 */ 							var dlm = __getitem__ (__iterable3__, __index2__);
/* 000258 */ 							(function () {
/* 000258 */ 								var __accu2__ = __accu1__;
/* 000258 */ 								return __call__ (__accu2__.append, __accu2__, dlm);
/* 000258 */ 							}) ();
/* 000258 */ 						}
/* 000258 */ 					}
/* 000258 */ 					return __accu1__;
/* 000258 */ 				}) ());
/* 000258 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000258 */ 					var delim = __getitem__ (__iterable1__, __index1__);
/* 000258 */ 					(function () {
/* 000258 */ 						var __accu1__ = __accu0__;
/* 000258 */ 						return __call__ (__accu1__.append, __accu1__, tuple ([delim, tok_type]));
/* 000258 */ 					}) ();
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 			return __accu0__;
/* 000258 */ 		}) (), __kwargtrans__ ({key: (function __lambda__ (x) {
/* 000258 */ 			if (arguments.length) {
/* 000258 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 						switch (__attrib0__) {
/* 000258 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						}
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 			else {
/* 000258 */ 			}
/* 000260 */ 			return __call__ (len, null, __getitem__ (x, 0));
/* 000260 */ 		}), reverse: true}));
/* 000269 */ 		self._math_delims_info_by_open = __call__ (dict, null, __add__ ((function () {
/* 000269 */ 			var __accu0__ = [];
/* 000270 */ 			var __iterable0__ = self.latex_inline_math_delimiters;
/* 000270 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000271 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000271 */ 				var open_delim = __left0__ [0];
/* 000271 */ 				var close_delim = __left0__ [1];
/* 000271 */ 				(function () {
/* 000271 */ 					var __accu1__ = __accu0__;
/* 000270 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_inline'}))]));
/* 000270 */ 				}) ();
/* 000270 */ 			}
/* 000270 */ 			return __accu0__;
/* 000270 */ 		}) (), (function () {
/* 000270 */ 			var __accu0__ = [];
/* 000272 */ 			var __iterable0__ = self.latex_display_math_delimiters;
/* 000272 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000273 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000273 */ 				var open_delim = __left0__ [0];
/* 000273 */ 				var close_delim = __left0__ [1];
/* 000273 */ 				(function () {
/* 000273 */ 					var __accu1__ = __accu0__;
/* 000272 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_display'}))]));
/* 000272 */ 				}) ();
/* 000272 */ 			}
/* 000272 */ 			return __accu0__;
/* 000272 */ 		}) ()));
/* 000275 */ 		self._math_delims_close = __call__ (set, null, (function () {
/* 000275 */ 			var __accu0__ = [];
/* 000277 */ 			var __iterable0__ = (function () {
/* 000277 */ 				var __accu1__ = self._math_delims_info_by_open;
/* 000277 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000277 */ 			}) ();
/* 000277 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000277 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000277 */ 				var opendelim = __left0__ [0];
/* 000277 */ 				var info = __left0__ [1];
/* 000277 */ 				(function () {
/* 000277 */ 					var __accu1__ = __accu0__;
/* 000277 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (info, 'close_delim'));
/* 000277 */ 				}) ();
/* 000277 */ 			}
/* 000277 */ 			return __accu0__;
/* 000277 */ 		}) ());
/* 000279 */ 		if (__t__ (!__t__ ((self.in_math_mode)))) {
/* 000280 */ 			self._math_expecting_close_delim_info = null;
/* 000280 */ 		}
/* 000281 */ 		else if (__t__ (__in__ (self.math_mode_delimiter, self._math_delims_info_by_open))) {
/* 000282 */ 			self._math_expecting_close_delim_info = __getitem__ (self._math_delims_info_by_open, self.math_mode_delimiter);
/* 000282 */ 		}
/* 000284 */ 		else {
/* 000288 */ 			self._math_expecting_close_delim_info = null;
/* 000288 */ 		}
/* 000288 */ 	});},
/* 000292 */ 	get sub_context () {return __get__ (this, function (self) {
/* 000292 */ 		var kwargs = dict ();
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 				delete kwargs.__kwargtrans__;
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000306 */ 		var p = (function () {
/* 000306 */ 			var __accu0__ = self;
/* 000306 */ 			return __call__ (__accu0__.__class__, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({_do_postprocess: false}, (function () {
/* 000306 */ 				var __accu1__ = self;
/* 000306 */ 				return __call__ (__accu1__.get_fields, __accu1__);
/* 000306 */ 			}) ())));
/* 000306 */ 		}) ();
/* 000309 */ 		p._parent_parsing_state_info = tuple ([self, kwargs]);
/* 000311 */ 		(function () {
/* 000311 */ 			var __accu0__ = p;
/* 000311 */ 			return __call__ (__accu0__._set_fields, __accu0__, kwargs);
/* 000311 */ 		}) ();
/* 000313 */ 		return p;
/* 000313 */ 	});},
/* 000315 */ 	get get_fields () {return __get__ (this, function (self) {
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000320 */ 		return __call__ (dict, null, (function () {
/* 000320 */ 			var __accu0__ = [];
/* 000320 */ 			var __iterable0__ = self._fields;
/* 000320 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000320 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000320 */ 				(function () {
/* 000320 */ 					var __accu1__ = __accu0__;
/* 000320 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([f, __call__ (getattr, null, self, f)]));
/* 000320 */ 				}) ();
/* 000320 */ 			}
/* 000320 */ 			return __accu0__;
/* 000320 */ 		}) ());
/* 000320 */ 	});},
/* 000323 */ 	get _set_fields () {return __get__ (this, function (self, kwargs, do_postprocess) {
/* 000323 */ 		if (typeof do_postprocess == 'undefined' || (do_postprocess != null && do_postprocess.hasOwnProperty ("__kwargtrans__"))) {;
/* 000323 */ 			var do_postprocess = true;
/* 000323 */ 		};
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'do_postprocess': var do_postprocess = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000325 */ 		var __iterable0__ = (function () {
/* 000325 */ 			var __accu0__ = kwargs;
/* 000325 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000325 */ 		}) ();
/* 000325 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000325 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000325 */ 			var k = __left0__ [0];
/* 000325 */ 			var v = __left0__ [1];
/* 000326 */ 			if (__t__ (!__in__ (k, self._fields))) {
/* 000327 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000327 */ 					var __accu0__ = 'Invalid field for ParsingState: {}={!r}';
/* 000327 */ 					return __call__ (__accu0__.format, __accu0__, k, v);
/* 000327 */ 				}) ());
/* 000327 */ 				__except0__.__cause__ = null;
/* 000327 */ 				throw __except0__;
/* 000327 */ 			}
/* 000328 */ 			__call__ (setattr, null, self, k, v);
/* 000328 */ 		}
/* 000330 */ 		if (__t__ (do_postprocess)) {
/* 000333 */ 			(function () {
/* 000333 */ 				var __accu0__ = self;
/* 000333 */ 				return __call__ (__accu0__._sanitize, __accu0__, __kwargtrans__ ({given_fields: kwargs}));
/* 000333 */ 			}) ();
/* 000338 */ 			(function () {
/* 000338 */ 				var __accu0__ = self;
/* 000338 */ 				return __call__ (__accu0__._set_derivative_fields, __accu0__);
/* 000338 */ 			}) ();
/* 000338 */ 		}
/* 000338 */ 	});},
/* 000341 */ 	get _sanitize () {return __get__ (this, function (self, given_fields) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'given_fields': var given_fields = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000350 */ 		if (__t__ (__t__ (!__t__ ((self.in_math_mode))) && self.math_mode_delimiter)) {
/* 000351 */ 			self.math_mode_delimiter = null;
/* 000352 */ 			if (__t__ (__in__ ('math_mode_delimiter', given_fields))) {
/* 000353 */ 				(function () {
/* 000353 */ 					var __accu0__ = logger;
/* 000353 */ 					return __call__ (__accu0__.warning, __accu0__, 'ParsingState: You set math_mode_delimiter=%r but in_math_mode is False', self.math_mode_delimiter);
/* 000353 */ 				}) ();
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 	});},
/* 000359 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000359 */ 		if (arguments.length) {
/* 000359 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 					switch (__attrib0__) {
/* 000359 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 		}
/* 000359 */ 		else {
/* 000359 */ 		}
/* 000364 */ 		var clsname = self.__class__.__name__;
/* 000365 */ 		var pswid = (function () {
/* 000365 */ 			var __accu0__ = '{}<{:#x}>';
/* 000365 */ 			return __call__ (__accu0__.format, __accu0__, clsname, __call__ (fn_unique_object_id, null, self));
/* 000365 */ 		}) ();
/* 000367 */ 		var __left0__ = self._parent_parsing_state_info;
/* 000367 */ 		var parent_obj = __left0__ [0];
/* 000367 */ 		var diff_kwargs = __left0__ [1];
/* 000369 */ 		if (__t__ (!__t__ ((parent_obj)))) {
/* 000372 */ 			return pswid;
/* 000372 */ 		}
/* 000375 */ 		return __add__ (__add__ (__add__ (pswid, (function () {
/* 000375 */ 			var __accu0__ = '(<{:#x}> → ';
/* 000375 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, parent_obj));
/* 000375 */ 		}) ()), (function () {
/* 000375 */ 			var __accu0__ = ', ';
/* 000375 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000375 */ 				var __accu1__ = [];
/* 000376 */ 				var __iterable0__ = (function () {
/* 000376 */ 					var __accu2__ = diff_kwargs;
/* 000376 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000376 */ 				}) ();
/* 000376 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000376 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000376 */ 					var k = __left0__ [0];
/* 000376 */ 					var v = __left0__ [1];
/* 000376 */ 					(function () {
/* 000376 */ 						var __accu2__ = __accu1__;
/* 000376 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000376 */ 							var __accu3__ = '{}={!r}';
/* 000376 */ 							return __call__ (__accu3__.format, __accu3__, k, v);
/* 000376 */ 						}) ());
/* 000376 */ 					}) ();
/* 000376 */ 				}
/* 000376 */ 				return py_iter (__accu1__);
/* 000376 */ 			}) ());
/* 000376 */ 		}) ()), ')');
/* 000376 */ 	});},
/* 000380 */ 	get __jsonobject__ () {return __get__ (this, function (self) {
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 		}
/* 000381 */ 		return (function () {
/* 000381 */ 			var __accu0__ = [];
/* 000382 */ 			var __iterable0__ = (function () {
/* 000382 */ 				var __accu1__ = (function () {
/* 000382 */ 					var __accu2__ = self;
/* 000382 */ 					return __call__ (__accu2__.get_fields, __accu2__);
/* 000382 */ 				}) ();
/* 000382 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000382 */ 			}) ();
/* 000382 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000382 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000382 */ 				var k = __left0__ [0];
/* 000382 */ 				var v = __left0__ [1];
/* 000382 */ 				if (__t__ (!__in__ (k, tuple (['latex_context'])))) {
/* 000383 */ 					(function () {
/* 000383 */ 						var __accu1__ = __accu0__;
/* 000383 */ 						return __call__ (__accu1__.append, __accu1__, [k, v]);
/* 000383 */ 					}) ();
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 			return dict (__accu0__);
/* 000383 */ 		}) ();
/* 000383 */ 	});}
/* 000383 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsingstate.map