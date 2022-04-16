/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:37:14
/* 000037 */ var logging = {};
/* 000037 */ var re = {};
/* 000037 */ var unique_object_id = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000070 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000070 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000060 */ import * as __module_logging__ from './logging.js';
/* 000060 */ __nest__ (logging, '', __module_logging__);
/* 000057 */ import {ParsingState} from './pylatexenc.latexnodes.js';
/* 000046 */ import * as parsers from './pylatexenc.latexnodes.parsers.js';
/* 000045 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexSpecialsNode, ParsedMacroArgs, __all__, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000044 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, _basestring} from './pylatexenc.latexnodes._exctypes.js';
/* 000042 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000041 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000039 */ import * as _util from './pylatexenc._util.js';
/* 000037 */ import * as __module_re__ from './re.js';
/* 000037 */ __nest__ (re, '', __module_re__);
/* 000037 */ export {_util, LatexGroupNode, macrospec, LatexCommentNode, LatexWalkerError, LatexNodeList, LatexMathNode, LatexWalkerParseError, LatexMacroNode, parsers, _unicode_from_str, LatexWalkerTokenParseError, LatexWalkerEndOfStream, LatexCharsNode, LatexSpecialsNode, LatexNode, LatexWalkerNodesParseError, _basestring, ParsingState, __all__, LatexEnvironmentNode, ParsedMacroArgs, _update_posposend_from_nodelist, latexnodes};
/* 000001 */ var __name__ = 'pylatexenc.latexwalker._walker';
/* 000050 */ export var get_default_latex_context_db = macrospec.LatexContextDb;
/* 000061 */ export var logger = (function () {
/* 000061 */ 	var __accu0__ = logging;
/* 000061 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000061 */ }) ();
/* 000064 */ export var _maketuple = (function __lambda__ () {
/* 000064 */ 	if (arguments.length) {
/* 000064 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000064 */ 	}
/* 000064 */ 	else {
/* 000064 */ 		var args = tuple ();
/* 000064 */ 	}
/* 000064 */ 	return __call__ (tuple, null, args);
/* 000064 */ });
/* 000071 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000082 */ export var LatexWalker =  __class__ ('LatexWalker', [latexnodes.LatexWalkerBase], {
/* 000082 */ 	__module__: __name__,
/* 000165 */ 	get __init__ () {return __get__ (this, function (self, s, latex_context) {
/* 000165 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000165 */ 			var latex_context = null;
/* 000165 */ 		};
/* 000165 */ 		var kwargs = dict ();
/* 000165 */ 		if (arguments.length) {
/* 000165 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 					switch (__attrib0__) {
/* 000165 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 				delete kwargs.__kwargtrans__;
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 		else {
/* 000165 */ 		}
/* 000167 */ 		self.s = s;
/* 000170 */ 		self._line_no_calc = null;
/* 000172 */ 		self.debug_nodes = false;
/* 000174 */ 		if (__t__ (latex_context === null)) {
/* 000175 */ 			if (__t__ (__in__ ('macro_dict', kwargs))) {
/* 000177 */ 				(function () {
/* 000177 */ 					var __accu0__ = _util;
/* 000177 */ 					return __call__ (__accu0__.pylatexenc_deprecated_2, __accu0__, "The `macro_dict=...` option in LatexWalker() is obsolete since pylatexenc 2.  It'll still work, but please consider using instead the more versatile option `latex_context=...`.");
/* 000177 */ 				}) ();
/* 000183 */ 				var macro_dict = (function () {
/* 000183 */ 					var __accu0__ = kwargs;
/* 000183 */ 					return __call__ (__accu0__.py_pop, __accu0__, 'macro_dict', null);
/* 000183 */ 				}) ();
/* 000185 */ 				var default_latex_context = __call__ (get_default_latex_context_db, null);
/* 000187 */ 				var latex_context = (function () {
/* 000187 */ 					var __accu0__ = default_latex_context;
/* 000187 */ 					return __call__ (__accu0__.filter_context, __accu0__, __kwargtrans__ ({keep_which: ['environments']}));
/* 000187 */ 				}) ();
/* 000190 */ 				(function () {
/* 000190 */ 					var __accu0__ = latex_context;
/* 000192 */ 					return __call__ (__accu0__.add_context_category, __accu0__, 'custom', (function () {
/* 000192 */ 						var __accu1__ = macro_dict;
/* 000192 */ 						return __call__ (__accu1__.py_values, __accu1__);
/* 000193 */ 					}) (), (function () {
/* 000193 */ 						var __accu1__ = default_latex_context;
/* 000193 */ 						return __call__ (__accu1__.iter_environment_specs, __accu1__);
/* 000193 */ 					}) ());
/* 000193 */ 				}) ();
/* 000193 */ 			}
/* 000194 */ 			else {
/* 000198 */ 				var latex_context = __call__ (get_default_latex_context_db, null);
/* 000198 */ 			}
/* 000198 */ 		}
/* 000202 */ 		else if (__t__ (__in__ ('macro_dict', kwargs))) {
/* 000203 */ 			var __except0__ = __call__ (py_TypeError, null, 'Cannot specify both `latex_context=` and `macro_dict=` arguments');
/* 000203 */ 			__except0__.__cause__ = null;
/* 000203 */ 			throw __except0__;
/* 000203 */ 		}
/* 000211 */ 		(function () {
/* 000211 */ 			var __accu0__ = latex_context;
/* 000211 */ 			return __call__ (__accu0__.freeze, __accu0__);
/* 000211 */ 		}) ();
/* 000213 */ 		self.default_parsing_state = __call__ (ParsingState, null, __kwargtrans__ ({s: self.s, latex_context: latex_context}));
/* 000222 */ 		self.tolerant_parsing = (function () {
/* 000222 */ 			var __accu0__ = kwargs;
/* 000222 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'tolerant_parsing', true);
/* 000222 */ 		}) ();
/* 000223 */ 		self.strict_braces = (function () {
/* 000223 */ 			var __accu0__ = kwargs;
/* 000223 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'strict_braces', false);
/* 000223 */ 		}) ();
/* 000225 */ 		if (__t__ (__in__ ('keep_inline_math', kwargs))) {
/* 000226 */ 			(function () {
/* 000226 */ 				var __accu0__ = _util;
/* 000226 */ 				return __call__ (__accu0__.pylatexenc_deprecated_2, __accu0__, 'The keep_inline_math=... option in LatexWalker() has no effect in pylatexenc 2.  Please consider using the more versatile option math_mode=... in LatexNodes2Text() instead.');
/* 000226 */ 			}) ();
/* 000226 */ 			delete __getitem__ (kwargs, 'keep_inline_math');
/* 000226 */ 		}
/* 000233 */ 		if (__t__ (kwargs)) {
/* 000235 */ 			(function () {
/* 000235 */ 				var __accu0__ = logger;
/* 000235 */ 				return __call__ (__accu0__.warning, __accu0__, 'LatexWalker(): Unknown flag(s) encountered: %r', (function () {
/* 000235 */ 					var __accu1__ = kwargs;
/* 000235 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000235 */ 				}) ());
/* 000235 */ 			}) ();
/* 000235 */ 		}
/* 000237 */ 		__call__ (__call__ (__super__, null, LatexWalker, '__init__'), null, self);
/* 000237 */ 	});},
/* 000240 */ 	make_latex_group_parser: parsers.LatexDelimitedGroupParser,
/* 000242 */ 	make_latex_math_parser: parsers.LatexMathParser,
/* 000245 */ 	get make_parsing_state () {return __get__ (this, function (self) {
/* 000245 */ 		var kwargs = dict ();
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 				delete kwargs.__kwargtrans__;
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000260 */ 		return (function () {
/* 000260 */ 			var __accu0__ = self.default_parsing_state;
/* 000260 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000260 */ 		}) ();
/* 000260 */ 	});},
/* 000262 */ 	get parse_flags () {return __get__ (this, function (self) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000273 */ 		return dict ({'tolerant_parsing': self.tolerant_parsing, 'strict_braces': self.strict_braces, 'keep_inline_math': null});
/* 000273 */ 	});},
/* 000280 */ 	get _report_ignore_parse_error () {return __get__ (this, function (self, exc) {
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000281 */ 		(function () {
/* 000281 */ 			var __accu0__ = logger;
/* 000281 */ 			return __call__ (__accu0__.info, __accu0__, 'Ignoring parse error (tolerant parsing mode): %s', exc);
/* 000281 */ 		}) ();
/* 000281 */ 	});},
/* 000284 */ 	get check_tolerant_parsing_ignore_error () {return __get__ (this, function (self, exc) {
/* 000284 */ 		if (arguments.length) {
/* 000284 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 					switch (__attrib0__) {
/* 000284 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 			}
/* 000284 */ 		}
/* 000284 */ 		else {
/* 000284 */ 		}
/* 000299 */ 		if (__t__ (__t__ (!__t__ ((self.tolerant_parsing))) || !__t__ ((__call__ (isinstance, null, exc, LatexWalkerError))))) {
/* 000300 */ 			return exc;
/* 000300 */ 		}
/* 000303 */ 		(function () {
/* 000303 */ 			var __accu0__ = self;
/* 000303 */ 			return __call__ (__accu0__._report_ignore_parse_error, __accu0__, exc);
/* 000303 */ 		}) ();
/* 000305 */ 		return null;
/* 000308 */ 	});},
/* 000308 */ 	_ParsingContext: __class__ ('_ParsingContext', [object], {
/* 000308 */ 		__module__: __name__,
/* 000313 */ 		get __init__ () {return __get__ (this, function (self, latex_walker, open_context) {
/* 000313 */ 			if (arguments.length) {
/* 000313 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 						switch (__attrib0__) {
/* 000313 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 							case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						}
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 			else {
/* 000313 */ 			}
/* 000314 */ 			__call__ (__call__ (__super__, null, LatexWalker._ParsingContext, '__init__'), null, self);
/* 000316 */ 			self.latex_walker = latex_walker;
/* 000317 */ 			self.open_context = open_context;
/* 000319 */ 			self.recovery_from_exception = null;
/* 000319 */ 		});},
/* 000321 */ 		get __enter__ () {return __get__ (this, function (self) {
/* 000321 */ 			if (arguments.length) {
/* 000321 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000321 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000321 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000321 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000321 */ 						switch (__attrib0__) {
/* 000321 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						}
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 			}
/* 000321 */ 			else {
/* 000321 */ 			}
/* 000322 */ 			return self;
/* 000322 */ 		});},
/* 000324 */ 		get __exit__ () {return __get__ (this, function (self, exc_type, exc_value, exc_traceback) {
/* 000324 */ 			if (arguments.length) {
/* 000324 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 						switch (__attrib0__) {
/* 000324 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 							case 'exc_type': var exc_type = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 							case 'exc_value': var exc_value = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 							case 'exc_traceback': var exc_traceback = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						}
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 			}
/* 000324 */ 			else {
/* 000324 */ 			}
/* 000325 */ 			if (__t__ (__t__ (exc_value !== null) && __call__ (isinstance, null, exc_value, LatexWalkerParseError))) {
/* 000326 */ 				var e = exc_value;
/* 000327 */ 				if (__t__ (self.open_context)) {
/* 000328 */ 					var __left0__ = self.open_context;
/* 000328 */ 					var what = __left0__ [0];
/* 000328 */ 					var tok = __left0__ [1];
/* 000329 */ 					if (__t__ (what !== null)) {
/* 000330 */ 						if (__t__ (tok !== null)) {
/* 000331 */ 							(function () {
/* 000331 */ 								var __accu0__ = e.open_contexts;
/* 000333 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (_maketuple, null, what, tok.pos, ...(function () {
/* 000333 */ 									var __accu1__ = self.latex_walker;
/* 000333 */ 									return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, tok.pos);
/* 000333 */ 								}) ()));
/* 000333 */ 							}) ();
/* 000333 */ 						}
/* 000334 */ 						else {
/* 000336 */ 							(function () {
/* 000336 */ 								var __accu0__ = e.open_contexts;
/* 000337 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (_maketuple, null, what, null, __neg__ (1), __neg__ (1)));
/* 000337 */ 							}) ();
/* 000337 */ 						}
/* 000337 */ 					}
/* 000337 */ 				}
/* 000340 */ 				var epos = __call__ (getattr, null, e, 'pos', null);
/* 000341 */ 				if (__t__ (__t__ (epos !== null) && __t__ (e.lineno === null) && e.colno === null)) {
/* 000342 */ 					var __left0__ = (function () {
/* 000342 */ 						var __accu0__ = self.latex_walker;
/* 000342 */ 						return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, e.pos);
/* 000342 */ 					}) ();
/* 000342 */ 					e.lineno = __left0__ [0];
/* 000342 */ 					e.colno = __left0__ [1];
/* 000342 */ 				}
/* 000343 */ 				var e = (function () {
/* 000343 */ 					var __accu0__ = self.latex_walker;
/* 000343 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000343 */ 				}) ();
/* 000344 */ 				if (__t__ (e === null)) {
/* 000346 */ 					self.recovery_from_exception = e;
/* 000347 */ 					return true;
/* 000347 */ 				}
/* 000349 */ 				return null;
/* 000349 */ 			}
/* 000349 */ 		});},
/* 000351 */ 		get perform_recovery_nodes_and_carryoverinfo () {return __get__ (this, function (self, token_reader) {
/* 000351 */ 			if (arguments.length) {
/* 000351 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 						switch (__attrib0__) {
/* 000351 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						}
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 			else {
/* 000351 */ 			}
/* 000352 */ 			if (__t__ (self.recovery_from_exception === null)) {
/* 000353 */ 				var __except0__ = __call__ (RuntimeError, null, 'No exception had happened to try to recover nodes from');
/* 000353 */ 				__except0__.__cause__ = null;
/* 000353 */ 				throw __except0__;
/* 000353 */ 			}
/* 000356 */ 			var nodes = __call__ (getattr, null, self.recovery_from_exception, 'recovery_nodes', null);
/* 000358 */ 			var carryover_info = __call__ (getattr, null, self.recovery_from_exception, 'recovery_carryover_info', null);
/* 000362 */ 			var reset_at_tok = __call__ (getattr, null, self.recovery_from_exception, 'recovery_at_token', null);
/* 000363 */ 			if (__t__ (reset_at_tok !== null)) {
/* 000364 */ 				(function () {
/* 000364 */ 					var __accu0__ = token_reader;
/* 000364 */ 					return __call__ (__accu0__.move_to_token, __accu0__, reset_at_tok);
/* 000364 */ 				}) ();
/* 000364 */ 			}
/* 000365 */ 			else {
/* 000366 */ 				var reset_past_tok = __call__ (getattr, null, self.recovery_from_exception, 'recovery_past_token', null);
/* 000368 */ 				if (__t__ (reset_at_tok !== null)) {
/* 000369 */ 					(function () {
/* 000369 */ 						var __accu0__ = token_reader;
/* 000369 */ 						return __call__ (__accu0__.move_past_token, __accu0__, reset_past_tok);
/* 000369 */ 					}) ();
/* 000369 */ 				}
/* 000369 */ 			}
/* 000371 */ 			return tuple ([nodes, carryover_info]);
/* 000371 */ 		});}
/* 000371 */ 	}),
/* 000373 */ 	get new_parsing_open_context () {return __get__ (this, function (self, open_context_name, open_context_token) {
/* 000373 */ 		if (typeof open_context_name == 'undefined' || (open_context_name != null && open_context_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000373 */ 			var open_context_name = null;
/* 000373 */ 		};
/* 000373 */ 		if (typeof open_context_token == 'undefined' || (open_context_token != null && open_context_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000373 */ 			var open_context_token = null;
/* 000373 */ 		};
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'open_context_name': var open_context_name = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'open_context_token': var open_context_token = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000407 */ 		return (function () {
/* 000407 */ 			var __accu0__ = LatexWalker;
/* 000407 */ 			return __call__ (__accu0__._ParsingContext, __accu0__, self, tuple ([open_context_name, open_context_token]));
/* 000407 */ 		}) ();
/* 000407 */ 	});},
/* 000409 */ 	get make_token_reader () {return __get__ (this, function (self, pos) {
/* 000409 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000409 */ 			var pos = null;
/* 000409 */ 		};
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000416 */ 		var token_reader = (function () {
/* 000416 */ 			var __accu0__ = latexnodes;
/* 000416 */ 			return __call__ (__accu0__.LatexTokenReader, __accu0__, self.s, __kwargtrans__ ({tolerant_parsing: self.tolerant_parsing}));
/* 000416 */ 		}) ();
/* 000418 */ 		if (__t__ (pos !== null)) {
/* 000419 */ 			(function () {
/* 000419 */ 				var __accu0__ = token_reader;
/* 000419 */ 				return __call__ (__accu0__.move_to_pos_chars, __accu0__, pos);
/* 000419 */ 			}) ();
/* 000419 */ 		}
/* 000420 */ 		return token_reader;
/* 000420 */ 	});},
/* 000422 */ 	get parse_content () {return __get__ (this, function (self, parser, token_reader, parsing_state, open_context) {
/* 000422 */ 		if (typeof token_reader == 'undefined' || (token_reader != null && token_reader.hasOwnProperty ("__kwargtrans__"))) {;
/* 000422 */ 			var token_reader = null;
/* 000422 */ 		};
/* 000422 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000422 */ 			var parsing_state = null;
/* 000422 */ 		};
/* 000422 */ 		if (typeof open_context == 'undefined' || (open_context != null && open_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000422 */ 			var open_context = null;
/* 000422 */ 		};
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000465 */ 		if (__t__ (token_reader === null)) {
/* 000466 */ 			var token_reader = (function () {
/* 000466 */ 				var __accu0__ = self;
/* 000466 */ 				return __call__ (__accu0__.make_token_reader, __accu0__);
/* 000466 */ 			}) ();
/* 000466 */ 		}
/* 000467 */ 		if (__t__ (parsing_state === null)) {
/* 000468 */ 			var parsing_state = (function () {
/* 000468 */ 				var __accu0__ = self;
/* 000468 */ 				return __call__ (__accu0__.make_parsing_state, __accu0__);
/* 000468 */ 			}) ();
/* 000468 */ 		}
/* 000470 */ 		var nodes = null;
/* 000471 */ 		var info = null;
/* 000473 */ 		var __left0__ = tuple ([null, null]);
/* 000473 */ 		var open_context_name = __left0__ [0];
/* 000473 */ 		var open_context_tok = __left0__ [1];
/* 000474 */ 		if (__t__ (open_context)) {
/* 000475 */ 			var __left0__ = open_context;
/* 000475 */ 			var open_context_name = __left0__ [0];
/* 000475 */ 			var open_context_tok = __left0__ [1];
/* 000475 */ 		}
/* 000477 */ 		var start_pos = (function () {
/* 000477 */ 			var __accu0__ = token_reader;
/* 000477 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000477 */ 		}) ();
/* 000478 */ 		// pass;
/* 000483 */ 		var pc = (function () {
/* 000483 */ 			var __accu0__ = self;
/* 000483 */ 			return __call__ (__accu0__.new_parsing_open_context, __accu0__, open_context_name, open_context_tok);
/* 000483 */ 		}) ();
/* 000483 */ 		try {
/* 000483 */ 			pc.__enter__ ();
/* 000485 */ 			try {
/* 000487 */ 				var __left0__ = __call__ (parser, null, __kwargtrans__ ({latex_walker: self, token_reader: token_reader, parsing_state: parsing_state}));
/* 000487 */ 				var nodes = __left0__ [0];
/* 000487 */ 				var info = __left0__ [1];
/* 000487 */ 			}
/* 000487 */ 			catch (__except0__) {
/* 000487 */ 				if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000492 */ 					(function () {
/* 000492 */ 						var __accu0__ = logger;
/* 000492 */ 						return __call__ (__accu0__.warning, __accu0__, 'End of stream encountered when parsing content with %s (%s)', parser.__class__.__name__, open_context_name);
/* 000492 */ 					}) ();
/* 000494 */ 					var __left0__ = tuple ([null, null]);
/* 000494 */ 					var nodes = __left0__ [0];
/* 000494 */ 					var info = __left0__ [1];
/* 000495 */ 					// pass;
/* 000495 */ 				}
/* 000495 */ 				else {
/* 000495 */ 					throw __except0__;
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 			pc.__exit__ ();
/* 000495 */ 		}
/* 000495 */ 		catch (__except0__) {
/* 000495 */ 			if (! (pc.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000495 */ 				throw __except0__;
/* 000495 */ 			}
/* 000495 */ 		}
/* 000497 */ 		if (__t__ (pc.recovery_from_exception !== null)) {
/* 000498 */ 			var __left0__ = (function () {
/* 000498 */ 				var __accu0__ = pc;
/* 000498 */ 				return __call__ (__accu0__.perform_recovery_nodes_info, __accu0__, token_reader);
/* 000498 */ 			}) ();
/* 000498 */ 			var nodes = __left0__ [0];
/* 000498 */ 			var info = __left0__ [1];
/* 000498 */ 		}
/* 000500 */ 		// pass;
/* 000505 */ 		return tuple ([nodes, info]);
/* 000505 */ 	});},
/* 000508 */ 	get make_nodes_collector () {return __get__ (this, function (self, token_reader, parsing_state) {
/* 000508 */ 		var kwargs = dict ();
/* 000508 */ 		if (arguments.length) {
/* 000508 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000508 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000508 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000508 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000508 */ 					switch (__attrib0__) {
/* 000508 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000508 */ 					}
/* 000508 */ 				}
/* 000508 */ 				delete kwargs.__kwargtrans__;
/* 000508 */ 			}
/* 000508 */ 		}
/* 000508 */ 		else {
/* 000508 */ 		}
/* 000512 */ 		return (function () {
/* 000512 */ 			var __accu0__ = latexnodes;
/* 000512 */ 			return __call__ (__accu0__.LatexNodesCollector, __accu0__, self, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000512 */ 		}) ();
/* 000512 */ 	});},
/* 000519 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000519 */ 		var kwargs = dict ();
/* 000519 */ 		if (arguments.length) {
/* 000519 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000519 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000519 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000519 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000519 */ 					switch (__attrib0__) {
/* 000519 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000519 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000519 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000519 */ 					}
/* 000519 */ 				}
/* 000519 */ 				delete kwargs.__kwargtrans__;
/* 000519 */ 			}
/* 000519 */ 		}
/* 000519 */ 		else {
/* 000519 */ 		}
/* 000548 */ 		var __left0__ = tuple ([(function () {
/* 000548 */ 			var __accu0__ = kwargs;
/* 000548 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos');
/* 000548 */ 		}) (), (function () {
/* 000548 */ 			var __accu0__ = kwargs;
/* 000548 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000548 */ 		}) (), (function () {
/* 000548 */ 			var __accu0__ = kwargs;
/* 000548 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state');
/* 000548 */ 		}) ()]);
/* 000548 */ 		var pos = __left0__ [0];
/* 000548 */ 		var pos_end = __left0__ [1];
/* 000548 */ 		var parsing_state = __left0__ [2];
/* 000550 */ 		if (__t__ (__t__ (pos_end === null) && __t__ (pos !== null) && __in__ ('len', kwargs))) {
/* 000551 */ 			(function () {
/* 000551 */ 				var __accu0__ = _util;
/* 000551 */ 				return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, 'make_node(..., len=..., ...); use ‘pos_end=’ instead of ‘len=’');
/* 000551 */ 			}) ();
/* 000553 */ 			var len_ = __getitem__ (kwargs, 'len');
/* 000554 */ 			var pos_end = __add__ (pos, len_);
/* 000554 */ 		}
/* 000556 */ 		var node = __call__ (node_class, null, __kwargtrans__ (__mergekwargtrans__ ({pos: pos, pos_end: pos_end, parsing_state: parsing_state, latex_walker: self}, kwargs)));
/* 000558 */ 		if (__t__ (self.debug_nodes)) {
/* 000559 */ 			// pass;
/* 000559 */ 		}
/* 000562 */ 		return node;
/* 000562 */ 	});},
/* 000565 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000565 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000565 */ 			var as_dict = false;
/* 000565 */ 		};
/* 000565 */ 		if (arguments.length) {
/* 000565 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000565 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000565 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000565 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000565 */ 					switch (__attrib0__) {
/* 000565 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 					}
/* 000565 */ 				}
/* 000565 */ 			}
/* 000565 */ 		}
/* 000565 */ 		else {
/* 000565 */ 		}
/* 000581 */ 		if (__t__ (self._line_no_calc === null)) {
/* 000582 */ 			self._line_no_calc = (function () {
/* 000582 */ 				var __accu0__ = _util;
/* 000582 */ 				return __call__ (__accu0__.LineNumbersCalculator, __accu0__, self.s);
/* 000582 */ 			}) ();
/* 000582 */ 		}
/* 000584 */ 		return (function () {
/* 000584 */ 			var __accu0__ = self._line_no_calc;
/* 000584 */ 			return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, pos, __kwargtrans__ ({as_dict: as_dict}));
/* 000584 */ 		}) ();
/* 000584 */ 	});},
/* 000588 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000588 */ 		if (arguments.length) {
/* 000588 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000588 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000588 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000588 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000588 */ 					switch (__attrib0__) {
/* 000588 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 					}
/* 000588 */ 				}
/* 000588 */ 			}
/* 000588 */ 		}
/* 000588 */ 		else {
/* 000588 */ 		}
/* 000589 */ 		return (function () {
/* 000589 */ 			var __accu0__ = '<LatexWalker {}>';
/* 000589 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, self));
/* 000589 */ 		}) ();
/* 000589 */ 	});}
/* 000589 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexwalker._walker.map