/* 000001 */ // Transcrypt'ed from Python, 2022-04-15 23:06:52
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
/* 000038 */ export {LatexOptionalCharsMarkerParser, LatexDelimitedVerbatimParser, LatexEnvironmentNode, LatexNode, LatexNodeList, __all__, LatexGroupNode, _update_posposend_from_nodelist, LatexMacroNode, LatexSpecialsNode, LatexGeneralNodesParser, LatexDelimitedExpressionParserInfo, LatexWalkerTokenParseError, LatexCommentNode, LatexMathNode, LatexDelimitedGroupParser, LatexParserBase, LatexExpressionParser, _unicode_from_str, LatexCharsNode, LatexDelimitedGroupParserInfo, LatexWalkerParseError, ParsedMacroArgs};
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
/* 000317 */ 	get __init__ () {return __get__ (this, function (self, comma_char, delimiters, enable_comments, enable_groups) {
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
/* 000317 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 				delete kwargs.__kwargtrans__;
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000319 */ 		__call__ (__call__ (__super__, null, LatexCharsCommaSeparatedListParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsCommaSeparatedListParser.CommaSepParserInfo}, kwargs)));
/* 000326 */ 		self.comma_char = comma_char;
/* 000327 */ 		self.enable_comments = enable_comments;
/* 000328 */ 		self.enable_groups = enable_groups;
/* 000330 */ 	});},
/* 000330 */ 	CommaSepParserInfo: __class__ ('CommaSepParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000330 */ 		__module__: __name__,
/* 000331 */ 		get initialize () {return __get__ (this, function (self) {
/* 000331 */ 			if (arguments.length) {
/* 000331 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 						switch (__attrib0__) {
/* 000331 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						}
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 			}
/* 000331 */ 			else {
/* 000331 */ 			}
/* 000332 */ 			self.comma_char = self.delimited_expression_parser.comma_char;
/* 000334 */ 			self.contents_parsing_state = (function () {
/* 000334 */ 				var __accu0__ = self.group_parsing_state;
/* 000334 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000334 */ 			}) ();
/* 000342 */ 			self.child_parsing_state = self.parsing_state;
/* 000344 */ 			self.parsed_delimiters = (function () {
/* 000344 */ 				var __accu0__ = self;
/* 000344 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000344 */ 			}) ();
/* 000346 */ 			// pass;
/* 000346 */ 		});},
/* 000350 */ 		get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000350 */ 			if (arguments.length) {
/* 000350 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 						switch (__attrib0__) {
/* 000350 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						}
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 			else {
/* 000350 */ 			}
/* 000351 */ 			return __call__ (_CommaSepContentCustomParser, null, self);
/* 000351 */ 		});}
/* 000351 */ 	})
/* 000351 */ });
/* 000354 */ export var _CommaSepContentCustomParser =  __class__ ('_CommaSepContentCustomParser', [LatexParserBase], {
/* 000354 */ 	__module__: __name__,
/* 000355 */ 	get __init__ () {return __get__ (this, function (self, contents_parser_info) {
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'contents_parser_info': var contents_parser_info = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000356 */ 		__call__ (__call__ (__super__, null, _CommaSepContentCustomParser, '__init__'), null, self);
/* 000357 */ 		self.contents_parser_info = contents_parser_info;
/* 000358 */ 		self.main_content_parser = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: self.stop_token_condition, make_child_parsing_state: contents_parser_info.make_child_parsing_state, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token}));
/* 000366 */ 		self.current_parsing_state = self.contents_parser_info.contents_parsing_state;
/* 000367 */ 		self.comma_sep_arg_list = [];
/* 000368 */ 		self.carryover_info = null;
/* 000369 */ 		self.parse_more = true;
/* 000370 */ 		self.last_delimiter_token = null;
/* 000371 */ 		self.last_element_pos_end = null;
/* 000371 */ 	});},
/* 000373 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000374 */ 		// pass;
/* 000377 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000379 */ 			return true;
/* 000379 */ 		}
/* 000380 */ 		if (__t__ (__eq__ (token.tok, 'char'))) {
/* 000381 */ 			if (__t__ (__eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000382 */ 				return true;
/* 000382 */ 			}
/* 000383 */ 			else if (__t__ (__eq__ (token.arg, self.contents_parser_info.comma_char))) {
/* 000384 */ 				return true;
/* 000384 */ 			}
/* 000385 */ 			return false;
/* 000385 */ 		}
/* 000386 */ 		return false;
/* 000386 */ 	});},
/* 000388 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000390 */ 		(function () {
/* 000390 */ 			var __accu0__ = token_reader;
/* 000390 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000390 */ 		}) ();
/* 000391 */ 		if (__t__ (__eq__ (token.tok, 'brace_close'))) {
/* 000393 */ 			self.last_delimiter_token = null;
/* 000394 */ 			self.last_element_pos_end = token.pos;
/* 000395 */ 			self.parse_more = false;
/* 000395 */ 		}
/* 000396 */ 		else {
/* 000397 */ 			self.last_delimiter_token = token;
/* 000398 */ 			self.last_element_pos_end = token.pos_end;
/* 000399 */ 			self.parse_more = true;
/* 000399 */ 		}
/* 000399 */ 	});},
/* 000402 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000402 */ 		if (arguments.length) {
/* 000402 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 					switch (__attrib0__) {
/* 000402 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 					}
/* 000402 */ 				}
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 		else {
/* 000402 */ 		}
/* 000404 */ 		// pass;
/* 000408 */ 		self.parse_more = true;
/* 000409 */ 		while (__t__ (self.parse_more)) {
/* 000411 */ 			(function () {
/* 000411 */ 				var __accu0__ = self;
/* 000411 */ 				return __call__ (__accu0__._parse_one_commasep_arg, __accu0__, latex_walker, token_reader);
/* 000411 */ 			}) ();
/* 000413 */ 			if (__t__ (__t__ (self.parse_more) && self.carryover_info !== null)) {
/* 000416 */ 				self.current_parsing_state = (function () {
/* 000416 */ 					var __accu0__ = self.carryover_info;
/* 000416 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.current_parsing_state);
/* 000416 */ 				}) ();
/* 000416 */ 			}
/* 000416 */ 		}
/* 000420 */ 		return tuple ([__call__ (LatexNodeList, null, self.comma_sep_arg_list), self.carryover_info]);
/* 000420 */ 	});},
/* 000423 */ 	get _parse_one_commasep_arg () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000425 */ 		// pass;
/* 000429 */ 		self.last_element_pos_end = null;
/* 000430 */ 		self.last_delimiter_token = null;
/* 000432 */ 		var __left0__ = (function () {
/* 000432 */ 			var __accu0__ = latex_walker;
/* 000437 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.main_content_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: self.current_parsing_state, open_context: tuple ([(function () {
/* 000437 */ 				var __accu1__ = 'Element {} of list separated by ‘{}’';
/* 000438 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (len, null, self.comma_sep_arg_list), self.contents_parser_info.comma_char);
/* 000438 */ 			}) (), self.contents_parser_info.first_token])}));
/* 000438 */ 		}) ();
/* 000438 */ 		var nodelist = __left0__ [0];
/* 000438 */ 		var carryover_info = __left0__ [1];
/* 000445 */ 		// pass;
/* 000450 */ 		var pos_end = self.last_element_pos_end;
/* 000451 */ 		if (__t__ (pos_end === null)) {
/* 000452 */ 			// pass;
/* 000456 */ 			var pos_end = (function () {
/* 000456 */ 				var __accu0__ = token_reader;
/* 000456 */ 				return __call__ (__accu0__.final_pos, __accu0__);
/* 000456 */ 			}) ();
/* 000457 */ 			self.parse_more = false;
/* 000457 */ 		}
/* 000459 */ 		if (__t__ (self.last_delimiter_token === null)) {
/* 000460 */ 			var this_close_delim = '';
/* 000460 */ 		}
/* 000461 */ 		else {
/* 000462 */ 			var this_close_delim = self.last_delimiter_token.arg;
/* 000462 */ 		}
/* 000464 */ 		var this_group_node = (function () {
/* 000464 */ 			var __accu0__ = latex_walker;
/* 000464 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.current_parsing_state, delimiters: tuple (['', this_close_delim]), pos: nodelist.pos, pos_end: pos_end}));
/* 000464 */ 		}) ();
/* 000473 */ 		(function () {
/* 000473 */ 			var __accu0__ = self.comma_sep_arg_list;
/* 000473 */ 			return __call__ (__accu0__.append, __accu0__, this_group_node);
/* 000473 */ 		}) ();
/* 000475 */ 		self.carryover_info = carryover_info;
/* 000477 */ 		// pass;
/* 000477 */ 	});}
/* 000477 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._stdarg.map