/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:03
/* 000038 */ var logging = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000053 */ import {LatexDelimitedVerbatimParser} from './pylatexenc.latexnodes.parsers._verbatim.js';
/* 000052 */ import {LatexExpressionParser} from './pylatexenc.latexnodes.parsers._expression.js';
/* 000051 */ import {LatexOptionalCharsMarkerParser} from './pylatexenc.latexnodes.parsers._optionals.js';
/* 000046 */ import {LatexDelimitedExpressionParserInfo, LatexDelimitedGroupParser, LatexDelimitedGroupParserInfo} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000045 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000044 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000042 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexSpecialsNode, ParsedMacroArgs, __all__, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {LatexWalkerParseError, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000038 */ export {LatexWalkerTokenParseError, LatexEnvironmentNode, __all__, LatexDelimitedGroupParser, LatexCharsNode, LatexDelimitedGroupParserInfo, LatexDelimitedVerbatimParser, LatexNode, LatexMathNode, LatexGroupNode, LatexSpecialsNode, LatexMacroNode, LatexExpressionParser, LatexOptionalCharsMarkerParser, LatexParserBase, LatexWalkerParseError, ParsedMacroArgs, LatexGeneralNodesParser, LatexNodeList, LatexCommentNode, LatexDelimitedExpressionParserInfo, _unicode_from_str, _update_posposend_from_nodelist};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._stdarg';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000058 */ export var _basestring = str;
/* 000074 */ export var _std_arg_parser_instances = dict ({});
/* 000076 */ export var get_standard_argument_parser = function (arg_spec) {
/* 000076 */ 	var kwargs = dict ();
/* 000076 */ 	if (arguments.length) {
/* 000076 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 				switch (__attrib0__) {
/* 000076 */ 					case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 			delete kwargs.__kwargtrans__;
/* 000076 */ 		}
/* 000076 */ 	}
/* 000076 */ 	else {
/* 000076 */ 	}
/* 000078 */ 	var d = dict ({'arg_spec': arg_spec});
/* 000079 */ 	(function () {
/* 000079 */ 		var __accu0__ = d;
/* 000079 */ 		return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000079 */ 	}) ();
/* 000080 */ 	var k = __call__ (tuple, null, __call__ (list, null, (function () {
/* 000080 */ 		var __accu0__ = d;
/* 000080 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000080 */ 	}) ()));
/* 000081 */ 	if (__t__ (!__in__ (k, _std_arg_parser_instances))) {
/* 000082 */ 		var instance = __call__ (LatexStandardArgumentParser, null, arg_spec, __kwargtrans__ (kwargs));
/* 000083 */ 		__setitem__ (_std_arg_parser_instances, k, instance);
/* 000084 */ 		return instance;
/* 000084 */ 	}
/* 000086 */ 	return __getitem__ (_std_arg_parser_instances, k);
/* 000086 */ };
/* 000094 */ export var LatexStandardArgumentParser =  __class__ ('LatexStandardArgumentParser', [LatexParserBase], {
/* 000094 */ 	__module__: __name__,
/* 000103 */ 	get __init__ () {return __get__ (this, function (self, arg_spec, include_skipped_comments, expression_single_token_requiring_arg_is_error, is_math_mode, allow_pre_space, set_arg_parsing_state_kwargs) {
/* 000103 */ 		if (typeof arg_spec == 'undefined' || (arg_spec != null && arg_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var arg_spec = '{';
/* 000103 */ 		};
/* 000103 */ 		if (typeof include_skipped_comments == 'undefined' || (include_skipped_comments != null && include_skipped_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var include_skipped_comments = true;
/* 000103 */ 		};
/* 000103 */ 		if (typeof expression_single_token_requiring_arg_is_error == 'undefined' || (expression_single_token_requiring_arg_is_error != null && expression_single_token_requiring_arg_is_error.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var expression_single_token_requiring_arg_is_error = true;
/* 000103 */ 		};
/* 000103 */ 		if (typeof is_math_mode == 'undefined' || (is_math_mode != null && is_math_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var is_math_mode = null;
/* 000103 */ 		};
/* 000103 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var allow_pre_space = true;
/* 000103 */ 		};
/* 000103 */ 		if (typeof set_arg_parsing_state_kwargs == 'undefined' || (set_arg_parsing_state_kwargs != null && set_arg_parsing_state_kwargs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var set_arg_parsing_state_kwargs = null;
/* 000103 */ 		};
/* 000103 */ 		var kwargs = dict ();
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'include_skipped_comments': var include_skipped_comments = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'expression_single_token_requiring_arg_is_error': var expression_single_token_requiring_arg_is_error = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'is_math_mode': var is_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'set_arg_parsing_state_kwargs': var set_arg_parsing_state_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 				delete kwargs.__kwargtrans__;
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000112 */ 		__call__ (__call__ (__super__, null, LatexStandardArgumentParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000114 */ 		self.arg_spec = arg_spec;
/* 000116 */ 		self.include_skipped_comments = include_skipped_comments;
/* 000117 */ 		self.expression_single_token_requiring_arg_is_error = expression_single_token_requiring_arg_is_error;
/* 000119 */ 		self.is_math_mode = is_math_mode;
/* 000120 */ 		self.allow_pre_space = allow_pre_space;
/* 000121 */ 		self.set_arg_parsing_state_kwargs = set_arg_parsing_state_kwargs;
/* 000123 */ 		self._arg_parsing_state_kwargs = null;
/* 000124 */ 		self._arg_parser = null;
/* 000124 */ 	});},
/* 000127 */ 	get get_arg_parsing_state_kwargs () {return __get__ (this, function (self) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000129 */ 		var arg_parsing_state_kwargs = dict ({});
/* 000130 */ 		if (__t__ (self.is_math_mode !== null)) {
/* 000131 */ 			__setitem__ (arg_parsing_state_kwargs, 'in_math_mode', self.is_math_mode);
/* 000131 */ 		}
/* 000132 */ 		if (__t__ (self.set_arg_parsing_state_kwargs)) {
/* 000133 */ 			(function () {
/* 000133 */ 				var __accu0__ = arg_parsing_state_kwargs;
/* 000133 */ 				return __call__ (__accu0__.py_update, __accu0__, self.set_arg_parsing_state_kwargs);
/* 000133 */ 			}) ();
/* 000133 */ 		}
/* 000135 */ 		return arg_parsing_state_kwargs;
/* 000135 */ 	});},
/* 000138 */ 	get get_arg_parser_instance () {return __get__ (this, function (self, arg_spec) {
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000140 */ 		if (__t__ (__in__ (arg_spec, tuple (['m', '{'])))) {
/* 000142 */ 			return __call__ (LatexExpressionParser, null, __kwargtrans__ ({include_skipped_comments: self.include_skipped_comments, single_token_requiring_arg_is_error: self.expression_single_token_requiring_arg_is_error}));
/* 000142 */ 		}
/* 000148 */ 		else if (__t__ (__in__ (arg_spec, tuple (['o', '['])))) {
/* 000150 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: self.allow_pre_space}));
/* 000150 */ 		}
/* 000156 */ 		else if (__t__ (__in__ (arg_spec, tuple (['s', '*'])))) {
/* 000158 */ 			return __call__ (LatexOptionalCharsMarkerParser, null, __kwargtrans__ ({chars: '*', allow_pre_space: self.allow_pre_space}));
/* 000158 */ 		}
/* 000163 */ 		else if (__t__ ((function () {
/* 000163 */ 			var __accu0__ = arg_spec;
/* 000163 */ 			return __call__ (__accu0__.startswith, __accu0__, 't');
/* 000163 */ 		}) ())) {
/* 000165 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 2))) {
/* 000166 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for an optional char argument should be of the form ‘t<char>’');
/* 000166 */ 				__except0__.__cause__ = null;
/* 000166 */ 				throw __except0__;
/* 000166 */ 			}
/* 000168 */ 			var the_char = __getitem__ (arg_spec, 1);
/* 000170 */ 			return __call__ (LatexOptionalCharsMarkerParser, null, __kwargtrans__ ({chars: the_char, allow_pre_space: self.allow_pre_space}));
/* 000170 */ 		}
/* 000175 */ 		else if (__t__ ((function () {
/* 000175 */ 			var __accu0__ = arg_spec;
/* 000175 */ 			return __call__ (__accu0__.startswith, __accu0__, 'r');
/* 000175 */ 		}) ())) {
/* 000177 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 3))) {
/* 000178 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for a required delimited argument should be of the form ‘r<char1><char2>’');
/* 000178 */ 				__except0__.__cause__ = null;
/* 000178 */ 				throw __except0__;
/* 000178 */ 			}
/* 000180 */ 			var open_char = __getitem__ (arg_spec, 1);
/* 000181 */ 			var close_char = __getitem__ (arg_spec, 2);
/* 000183 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple ([open_char, close_char]), optional: false, allow_pre_space: self.allow_pre_space}));
/* 000183 */ 		}
/* 000189 */ 		else if (__t__ ((function () {
/* 000189 */ 			var __accu0__ = arg_spec;
/* 000189 */ 			return __call__ (__accu0__.startswith, __accu0__, 'd');
/* 000189 */ 		}) ())) {
/* 000191 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 3))) {
/* 000192 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for an optional delimited argument should be of the form ‘d<char1><char2>’');
/* 000192 */ 				__except0__.__cause__ = null;
/* 000192 */ 				throw __except0__;
/* 000192 */ 			}
/* 000194 */ 			var open_char = __getitem__ (arg_spec, 1);
/* 000195 */ 			var close_char = __getitem__ (arg_spec, 2);
/* 000197 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple ([open_char, close_char]), optional: true, allow_pre_space: self.allow_pre_space}));
/* 000197 */ 		}
/* 000203 */ 		else if (__t__ ((function () {
/* 000203 */ 			var __accu0__ = arg_spec;
/* 000203 */ 			return __call__ (__accu0__.startswith, __accu0__, 'v');
/* 000203 */ 		}) ())) {
/* 000206 */ 			if (__t__ (__eq__ (__call__ (len, null, arg_spec), 1))) {
/* 000207 */ 				var delimiter_chars = null;
/* 000207 */ 			}
/* 000208 */ 			else if (__t__ (__eq__ (__call__ (len, null, arg_spec), 3))) {
/* 000209 */ 				var delimiter_chars = tuple ([__getitem__ (arg_spec, 1), __getitem__ (arg_spec, 2)]);
/* 000209 */ 			}
/* 000210 */ 			else {
/* 000211 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for a verbatim argument should be either ‘v’ or ‘v<char1><char2>’');
/* 000211 */ 				__except0__.__cause__ = null;
/* 000211 */ 				throw __except0__;
/* 000211 */ 			}
/* 000213 */ 			return __call__ (LatexDelimitedVerbatimParser, null, __kwargtrans__ ({delimiter_chars: delimiter_chars}));
/* 000213 */ 		}
/* 000215 */ 		else {
/* 000219 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000219 */ 				var __accu0__ = 'Unknown argument specification: {!r}';
/* 000219 */ 				return __call__ (__accu0__.format, __accu0__, arg_spec);
/* 000219 */ 			}) ());
/* 000219 */ 			__except0__.__cause__ = null;
/* 000219 */ 			throw __except0__;
/* 000219 */ 		}
/* 000219 */ 	});},
/* 000222 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000222 */ 		var kwargs = dict ();
/* 000222 */ 		if (arguments.length) {
/* 000222 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 					switch (__attrib0__) {
/* 000222 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 				delete kwargs.__kwargtrans__;
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 		else {
/* 000222 */ 		}
/* 000224 */ 		if (__t__ (self._arg_parsing_state_kwargs === null)) {
/* 000225 */ 			self._arg_parsing_state_kwargs = (function () {
/* 000225 */ 				var __accu0__ = self;
/* 000225 */ 				return __call__ (__accu0__.get_arg_parsing_state_kwargs, __accu0__);
/* 000225 */ 			}) ();
/* 000225 */ 		}
/* 000226 */ 		if (__t__ (self._arg_parser === null)) {
/* 000227 */ 			self._arg_parser = (function () {
/* 000227 */ 				var __accu0__ = self;
/* 000227 */ 				return __call__ (__accu0__.get_arg_parser_instance, __accu0__, self.arg_spec);
/* 000227 */ 			}) ();
/* 000227 */ 		}
/* 000229 */ 		var arg_parsing_state = parsing_state;
/* 000231 */ 		if (__t__ (self._arg_parsing_state_kwargs)) {
/* 000232 */ 			var arg_parsing_state = (function () {
/* 000232 */ 				var __accu0__ = parsing_state;
/* 000232 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self._arg_parsing_state_kwargs));
/* 000232 */ 			}) ();
/* 000235 */ 			// pass;
/* 000235 */ 		}
/* 000239 */ 		var arg_parser = self._arg_parser;
/* 000241 */ 		var __left0__ = (function () {
/* 000241 */ 			var __accu0__ = latex_walker;
/* 000241 */ 			return __call__ (__accu0__.parse_content, __accu0__, arg_parser, __kwargtrans__ (__mergekwargtrans__ ({token_reader: token_reader, parsing_state: arg_parsing_state}, kwargs)));
/* 000241 */ 		}) ();
/* 000241 */ 		var nodes = __left0__ [0];
/* 000241 */ 		var carryover_info = __left0__ [1];
/* 000248 */ 		return tuple ([nodes, carryover_info]);
/* 000248 */ 	});}
/* 000248 */ });
/* 000258 */ export var LatexCharsGroupParser =  __class__ ('LatexCharsGroupParser', [LatexDelimitedGroupParser], {
/* 000258 */ 	__module__: __name__,
/* 000265 */ 	get __init__ () {return __get__ (this, function (self, delimiters, enable_comments, enable_groups) {
/* 000265 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000265 */ 			var delimiters = tuple (['{', '}']);
/* 000265 */ 		};
/* 000265 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000265 */ 			var enable_comments = true;
/* 000265 */ 		};
/* 000265 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000265 */ 			var enable_groups = true;
/* 000265 */ 		};
/* 000265 */ 		var kwargs = dict ();
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 				delete kwargs.__kwargtrans__;
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000267 */ 		__call__ (__call__ (__super__, null, LatexCharsGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsGroupParser.CharsContentsParserInfo}, kwargs)));
/* 000273 */ 		self.enable_comments = enable_comments;
/* 000274 */ 		self.enable_groups = enable_groups;
/* 000277 */ 	});},
/* 000277 */ 	CharsContentsParserInfo: __class__ ('CharsContentsParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000277 */ 		__module__: __name__,
/* 000278 */ 		get initialize () {return __get__ (this, function (self) {
/* 000278 */ 			if (arguments.length) {
/* 000278 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 						switch (__attrib0__) {
/* 000278 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						}
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 			else {
/* 000278 */ 			}
/* 000279 */ 			self.contents_parsing_state = (function () {
/* 000279 */ 				var __accu0__ = self.group_parsing_state;
/* 000279 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000279 */ 			}) ();
/* 000287 */ 			self.child_parsing_state = self.parsing_state;
/* 000289 */ 			self.current_parsing_state = self.contents_parsing_state;
/* 000291 */ 			self.parsed_delimiters = (function () {
/* 000291 */ 				var __accu0__ = self;
/* 000291 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000291 */ 			}) ();
/* 000293 */ 			// pass;
/* 000293 */ 		});},
/* 000297 */ 		get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000297 */ 			if (arguments.length) {
/* 000297 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 						switch (__attrib0__) {
/* 000297 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 							case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						}
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 			}
/* 000297 */ 			else {
/* 000297 */ 			}
/* 000298 */ 			// pass;
/* 000301 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000302 */ 				return true;
/* 000302 */ 			}
/* 000304 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'char')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000305 */ 				return true;
/* 000305 */ 			}
/* 000306 */ 			return null;
/* 000306 */ 		});}
/* 000306 */ 	})
/* 000306 */ });
/* 000314 */ export var LatexCharsCommaSeparatedListParser =  __class__ ('LatexCharsCommaSeparatedListParser', [LatexDelimitedGroupParser], {
/* 000314 */ 	__module__: __name__,
/* 000317 */ 	get __init__ () {return __get__ (this, function (self, comma_char, delimiters, enable_comments, enable_groups, keep_empty_parts) {
/* 000317 */ 		if (typeof comma_char == 'undefined' || (comma_char != null && comma_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000317 */ 			var comma_char = ',';
/* 000317 */ 		};
/* 000317 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000317 */ 			var delimiters = tuple (['{', '}']);
/* 000317 */ 		};
/* 000317 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000317 */ 			var enable_comments = true;
/* 000317 */ 		};
/* 000317 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000317 */ 			var enable_groups = true;
/* 000317 */ 		};
/* 000317 */ 		if (typeof keep_empty_parts == 'undefined' || (keep_empty_parts != null && keep_empty_parts.hasOwnProperty ("__kwargtrans__"))) {;
/* 000317 */ 			var keep_empty_parts = false;
/* 000317 */ 		};
/* 000317 */ 		var kwargs = dict ();
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'comma_char': var comma_char = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'keep_empty_parts': var keep_empty_parts = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 				delete kwargs.__kwargtrans__;
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000320 */ 		__call__ (__call__ (__super__, null, LatexCharsCommaSeparatedListParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsCommaSeparatedListParser.CommaSepParserInfo}, kwargs)));
/* 000327 */ 		self.comma_char = comma_char;
/* 000328 */ 		self.enable_comments = enable_comments;
/* 000329 */ 		self.enable_groups = enable_groups;
/* 000330 */ 		self.keep_empty_parts = keep_empty_parts;
/* 000332 */ 	});},
/* 000332 */ 	CommaSepParserInfo: __class__ ('CommaSepParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000332 */ 		__module__: __name__,
/* 000333 */ 		get initialize () {return __get__ (this, function (self) {
/* 000333 */ 			if (arguments.length) {
/* 000333 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 						switch (__attrib0__) {
/* 000333 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						}
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 			else {
/* 000333 */ 			}
/* 000334 */ 			self.comma_char = self.delimited_expression_parser.comma_char;
/* 000336 */ 			self.contents_parsing_state = (function () {
/* 000336 */ 				var __accu0__ = self.group_parsing_state;
/* 000336 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000336 */ 			}) ();
/* 000344 */ 			self.child_parsing_state = self.parsing_state;
/* 000346 */ 			self.parsed_delimiters = (function () {
/* 000346 */ 				var __accu0__ = self;
/* 000346 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000346 */ 			}) ();
/* 000348 */ 			// pass;
/* 000348 */ 		});},
/* 000352 */ 		get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000352 */ 			if (arguments.length) {
/* 000352 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 						switch (__attrib0__) {
/* 000352 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						}
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 			else {
/* 000352 */ 			}
/* 000353 */ 			return __call__ (_CommaSepContentCustomParser, null, self);
/* 000353 */ 		});}
/* 000353 */ 	})
/* 000353 */ });
/* 000356 */ export var _CommaSepContentCustomParser =  __class__ ('_CommaSepContentCustomParser', [LatexParserBase], {
/* 000356 */ 	__module__: __name__,
/* 000357 */ 	get __init__ () {return __get__ (this, function (self, contents_parser_info) {
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'contents_parser_info': var contents_parser_info = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000358 */ 		__call__ (__call__ (__super__, null, _CommaSepContentCustomParser, '__init__'), null, self);
/* 000359 */ 		self.contents_parser_info = contents_parser_info;
/* 000366 */ 		self.main_content_parser = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: self.stop_token_condition, make_child_parsing_state: contents_parser_info.make_child_parsing_state, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000366 */ 			var __accu0__ = 'Expected matching ‘{}’ of ‘{}’-separated group initiated by ‘{}’';
/* 000366 */ 			return __call__ (__accu0__.format, __accu0__, __getitem__ (contents_parser_info.parsed_delimiters, 1), self.contents_parser_info.comma_char, __getitem__ (contents_parser_info.parsed_delimiters, 0));
/* 000366 */ 		}) ()}));
/* 000376 */ 		self.current_parsing_state = self.contents_parser_info.contents_parsing_state;
/* 000377 */ 		self.comma_sep_arg_list = [];
/* 000378 */ 		self.carryover_info = null;
/* 000379 */ 		self.parse_more = true;
/* 000380 */ 		self.pos_start = null;
/* 000381 */ 		self.is_very_first_element = true;
/* 000382 */ 		self.last_element_pos_start = null;
/* 000383 */ 		self.last_delimiter_token = null;
/* 000384 */ 		self.last_element_pos_end = null;
/* 000384 */ 	});},
/* 000386 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000386 */ 		if (arguments.length) {
/* 000386 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 					switch (__attrib0__) {
/* 000386 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 			}
/* 000386 */ 		}
/* 000386 */ 		else {
/* 000386 */ 		}
/* 000387 */ 		// pass;
/* 000390 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000392 */ 			return true;
/* 000392 */ 		}
/* 000393 */ 		if (__t__ (__eq__ (token.tok, 'char'))) {
/* 000394 */ 			if (__t__ (__eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000395 */ 				return true;
/* 000395 */ 			}
/* 000396 */ 			else if (__t__ (__eq__ (token.arg, self.contents_parser_info.comma_char))) {
/* 000397 */ 				return true;
/* 000397 */ 			}
/* 000398 */ 			return false;
/* 000398 */ 		}
/* 000399 */ 		return false;
/* 000399 */ 	});},
/* 000401 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000401 */ 		if (arguments.length) {
/* 000401 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 					switch (__attrib0__) {
/* 000401 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 					}
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 		else {
/* 000401 */ 		}
/* 000403 */ 		(function () {
/* 000403 */ 			var __accu0__ = token_reader;
/* 000403 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000403 */ 		}) ();
/* 000404 */ 		if (__t__ (__eq__ (token.tok, 'brace_close'))) {
/* 000406 */ 			self.last_delimiter_token = null;
/* 000407 */ 			self.last_element_pos_end = token.pos;
/* 000408 */ 			self.parse_more = false;
/* 000408 */ 		}
/* 000409 */ 		else {
/* 000410 */ 			self.last_delimiter_token = token;
/* 000411 */ 			self.last_element_pos_end = token.pos_end;
/* 000412 */ 			self.parse_more = true;
/* 000412 */ 		}
/* 000412 */ 	});},
/* 000415 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000415 */ 		if (arguments.length) {
/* 000415 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000415 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000415 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000415 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000415 */ 					switch (__attrib0__) {
/* 000415 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 					}
/* 000415 */ 				}
/* 000415 */ 			}
/* 000415 */ 		}
/* 000415 */ 		else {
/* 000415 */ 		}
/* 000417 */ 		// pass;
/* 000421 */ 		self.pos_start = (function () {
/* 000421 */ 			var __accu0__ = token_reader;
/* 000421 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000421 */ 		}) ();
/* 000423 */ 		self.parse_more = true;
/* 000424 */ 		while (__t__ (self.parse_more)) {
/* 000426 */ 			(function () {
/* 000426 */ 				var __accu0__ = self;
/* 000426 */ 				return __call__ (__accu0__._parse_one_commasep_arg, __accu0__, latex_walker, token_reader);
/* 000426 */ 			}) ();
/* 000428 */ 			if (__t__ (__t__ (self.parse_more) && self.carryover_info !== null)) {
/* 000431 */ 				self.current_parsing_state = (function () {
/* 000431 */ 					var __accu0__ = self.carryover_info;
/* 000431 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.current_parsing_state);
/* 000431 */ 				}) ();
/* 000431 */ 			}
/* 000431 */ 		}
/* 000435 */ 		var final_node_list = __call__ (LatexNodeList, null, self.comma_sep_arg_list, __kwargtrans__ ({pos: self.pos_start, pos_end: self.last_element_pos_end}));
/* 000441 */ 		return tuple ([final_node_list, self.carryover_info]);
/* 000441 */ 	});},
/* 000444 */ 	get _parse_one_commasep_arg () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000444 */ 		if (arguments.length) {
/* 000444 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000444 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000444 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000444 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000444 */ 					switch (__attrib0__) {
/* 000444 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 					}
/* 000444 */ 				}
/* 000444 */ 			}
/* 000444 */ 		}
/* 000444 */ 		else {
/* 000444 */ 		}
/* 000446 */ 		// pass;
/* 000450 */ 		self.last_element_pos_start = (function () {
/* 000450 */ 			var __accu0__ = token_reader;
/* 000450 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000450 */ 		}) ();
/* 000452 */ 		self.last_element_pos_end = null;
/* 000453 */ 		self.last_delimiter_token = null;
/* 000455 */ 		var __left0__ = (function () {
/* 000455 */ 			var __accu0__ = latex_walker;
/* 000460 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.main_content_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: self.current_parsing_state, open_context: tuple ([(function () {
/* 000460 */ 				var __accu1__ = 'Element {} of list separated by ‘{}’';
/* 000461 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (len, null, self.comma_sep_arg_list), self.contents_parser_info.comma_char);
/* 000461 */ 			}) (), self.contents_parser_info.first_token])}));
/* 000461 */ 		}) ();
/* 000461 */ 		var nodelist = __left0__ [0];
/* 000461 */ 		var carryover_info = __left0__ [1];
/* 000468 */ 		// pass;
/* 000473 */ 		var pos_end = self.last_element_pos_end;
/* 000474 */ 		if (__t__ (pos_end === null)) {
/* 000475 */ 			// pass;
/* 000478 */ 			var pos_end = (function () {
/* 000478 */ 				var __accu0__ = token_reader;
/* 000478 */ 				return __call__ (__accu0__.final_pos, __accu0__);
/* 000478 */ 			}) ();
/* 000479 */ 			self.parse_more = false;
/* 000479 */ 		}
/* 000481 */ 		if (__t__ (self.last_delimiter_token === null)) {
/* 000482 */ 			var this_close_delim = '';
/* 000482 */ 		}
/* 000483 */ 		else {
/* 000484 */ 			var this_close_delim = self.last_delimiter_token.arg;
/* 000484 */ 		}
/* 000486 */ 		var this_group_node = (function () {
/* 000486 */ 			var __accu0__ = latex_walker;
/* 000486 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.current_parsing_state, delimiters: tuple (['', this_close_delim]), pos: self.last_element_pos_start, pos_end: pos_end}));
/* 000486 */ 		}) ();
/* 000495 */ 		var add_group_node = true;
/* 000496 */ 		if (__t__ (!__t__ ((__call__ (len, null, nodelist))))) {
/* 000497 */ 			if (__t__ (__t__ (self.is_very_first_element) && self.last_delimiter_token === null)) {
/* 000503 */ 				var add_group_node = false;
/* 000503 */ 			}
/* 000504 */ 			else if (__t__ (self.keep_empty_parts)) {
/* 000505 */ 				var add_group_node = true;
/* 000505 */ 			}
/* 000506 */ 			else {
/* 000507 */ 				var add_group_node = false;
/* 000507 */ 			}
/* 000507 */ 		}
/* 000509 */ 		if (__t__ (add_group_node)) {
/* 000510 */ 			(function () {
/* 000510 */ 				var __accu0__ = self.comma_sep_arg_list;
/* 000510 */ 				return __call__ (__accu0__.append, __accu0__, this_group_node);
/* 000510 */ 			}) ();
/* 000510 */ 		}
/* 000512 */ 		self.carryover_info = carryover_info;
/* 000514 */ 		self.is_very_first_element = false;
/* 000516 */ 		// pass;
/* 000516 */ 	});}
/* 000516 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._stdarg.map