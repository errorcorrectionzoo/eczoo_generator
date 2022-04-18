/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:03
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000045 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000044 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, __all__, _unicode_from_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {_unicode_from_str, LatexWalkerTokenParseError, LatexParserBase, LatexWalkerNodesParseError, __all__, nodes, LatexWalkerEndOfStream, LatexWalkerParseError, LatexWalkerParseErrorFormatter, LatexGeneralNodesParser, LatexWalkerError};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._delimited';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000050 */ export var _basestring = str;
/* 000067 */ export var LatexDelimitedExpressionParserOpeningDelimiterNotFound =  __class__ ('LatexDelimitedExpressionParserOpeningDelimiterNotFound', [Exception], {
/* 000067 */ 	__module__: __name__,
/* 000077 */ 	get __init__ () {return __get__ (this, function (self, first_tokens, msg) {
/* 000077 */ 		var kwargs = dict ();
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'first_tokens': var first_tokens = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 				delete kwargs.__kwargtrans__;
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000078 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParserOpeningDelimiterNotFound, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000079 */ 		self.first_tokens = first_tokens;
/* 000080 */ 		self.msg = msg;
/* 000080 */ 	});}
/* 000080 */ });
/* 000086 */ export var LatexDelimitedExpressionParserInfo =  __class__ ('LatexDelimitedExpressionParserInfo', [object], {
/* 000086 */ 	__module__: __name__,
/* 000247 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser) {
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000256 */ 		return parsing_state;
/* 000256 */ 	});},
/* 000260 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser) {
/* 000260 */ 		if (arguments.length) {
/* 000260 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 					switch (__attrib0__) {
/* 000260 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 					}
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 		}
/* 000260 */ 		else {
/* 000260 */ 		}
/* 000268 */ 		return [];
/* 000268 */ 	});},
/* 000272 */ 	get parse_initial () {return __getcm__ (this, function (cls, delimiters, allow_pre_space, latex_walker, token_reader, group_parsing_state, delimited_expression_parser) {
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000311 */ 		var first_token = (function () {
/* 000311 */ 			var __accu0__ = token_reader;
/* 000311 */ 			return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: group_parsing_state}));
/* 000311 */ 		}) ();
/* 000313 */ 		var ok = true;
/* 000314 */ 		if (__t__ (__t__ (!__t__ ((allow_pre_space))) && first_token.pre_space)) {
/* 000315 */ 			var ok = false;
/* 000315 */ 		}
/* 000316 */ 		else if (__t__ (!__t__ (((function () {
/* 000316 */ 			var __accu0__ = cls;
/* 000316 */ 			return __call__ (__accu0__.is_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, first_token: first_token, group_parsing_state: group_parsing_state, delimited_expression_parser: delimited_expression_parser}));
/* 000316 */ 		}) ())))) {
/* 000322 */ 			var ok = false;
/* 000322 */ 		}
/* 000324 */ 		if (__t__ (!__t__ ((ok)))) {
/* 000329 */ 			var acceptable_opening_delimiters = (function () {
/* 000329 */ 				var __accu0__ = cls;
/* 000329 */ 				return __call__ (__accu0__.get_acceptable_open_delimiter_list, __accu0__, __kwargtrans__ ({delimiters: delimiters, group_parsing_state: group_parsing_state, delimited_expression_parser: delimited_expression_parser}));
/* 000329 */ 			}) ();
/* 000334 */ 			if (__t__ (!__t__ ((acceptable_opening_delimiters)))) {
/* 000335 */ 				var acceptable_delimiters_msg = '??';
/* 000335 */ 			}
/* 000336 */ 			else {
/* 000337 */ 				var acceptable_delimiters_msg = (function () {
/* 000337 */ 					var __accu0__ = ', ';
/* 000337 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000337 */ 						var __accu1__ = [];
/* 000337 */ 						var __iterable0__ = acceptable_opening_delimiters;
/* 000337 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000339 */ 							var od = __getitem__ (__iterable0__, __index0__);
/* 000339 */ 							(function () {
/* 000339 */ 								var __accu2__ = __accu1__;
/* 000338 */ 								return __call__ (__accu2__.append, __accu2__, (function () {
/* 000338 */ 									var __accu3__ = '‘{}’';
/* 000338 */ 									return __call__ (__accu3__.format, __accu3__, od);
/* 000338 */ 								}) ());
/* 000338 */ 							}) ();
/* 000338 */ 						}
/* 000338 */ 						return __accu1__;
/* 000338 */ 					}) ());
/* 000338 */ 				}) ();
/* 000338 */ 			}
/* 000342 */ 			var __except0__ = __call__ (LatexDelimitedExpressionParserOpeningDelimiterNotFound, null, __kwargtrans__ ({msg: __mod__ ('Expected an opening LaTeX delimiter (%s), got %s/‘%s’%s', tuple ([acceptable_delimiters_msg, first_token.tok, first_token.arg, (__t__ (first_token.pre_space) ? ' with leading whitespace' : '')])), first_tokens: [first_token]}));
/* 000342 */ 			__except0__.__cause__ = null;
/* 000342 */ 			throw __except0__;
/* 000342 */ 		}
/* 000352 */ 		return [first_token];
/* 000352 */ 	});},
/* 000356 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser) {
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000364 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement is_opening_delimiter()');
/* 000364 */ 		__except0__.__cause__ = null;
/* 000364 */ 		throw __except0__;
/* 000364 */ 	});},
/* 000368 */ 	get check_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, parsed_opening_delimiter) {
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'parsed_opening_delimiter': var parsed_opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000383 */ 		if (__t__ (delimiters === null)) {
/* 000384 */ 			return true;
/* 000384 */ 		}
/* 000386 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000387 */ 			var open_delim = delimiters;
/* 000387 */ 		}
/* 000388 */ 		else {
/* 000389 */ 			var open_delim = __getitem__ (delimiters, 0);
/* 000389 */ 		}
/* 000390 */ 		if (__t__ (__ne__ (parsed_opening_delimiter, open_delim))) {
/* 000391 */ 			return false;
/* 000391 */ 		}
/* 000392 */ 		return true;
/* 000392 */ 	});},
/* 000396 */ 	get __init__ () {return __get__ (this, function (self, delimited_expression_parser, opening_delimiter_tokens, group_parsing_state, parsing_state, delimiters) {
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'opening_delimiter_tokens': var opening_delimiter_tokens = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000398 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParserInfo, '__init__'), null, self);
/* 000401 */ 		self.delimited_expression_parser = delimited_expression_parser;
/* 000402 */ 		self.opening_delimiter_tokens = opening_delimiter_tokens;
/* 000403 */ 		self.first_token = __getitem__ (opening_delimiter_tokens, 0);
/* 000404 */ 		self.group_parsing_state = group_parsing_state;
/* 000405 */ 		self.parsing_state = parsing_state;
/* 000406 */ 		self.delimiters = delimiters;
/* 000408 */ 		self.contents_parsing_state = self.group_parsing_state;
/* 000409 */ 		self.child_parsing_state = self.parsing_state;
/* 000410 */ 		self.parsed_delimiters = tuple ([null, null]);
/* 000410 */ 	});},
/* 000412 */ 	get initialize () {return __get__ (this, function (self) {
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000420 */ 		self.contents_parsing_state = self.group_parsing_state;
/* 000421 */ 		self.child_parsing_state = self.parsing_state;
/* 000422 */ 		self.parsed_delimiters = (function () {
/* 000422 */ 			var __accu0__ = self;
/* 000422 */ 			return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000422 */ 		}) ();
/* 000422 */ 	});},
/* 000424 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000424 */ 		if (arguments.length) {
/* 000424 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000424 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000424 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000424 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000424 */ 					switch (__attrib0__) {
/* 000424 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 			}
/* 000424 */ 		}
/* 000424 */ 		else {
/* 000424 */ 		}
/* 000429 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement stop_token_condition()');
/* 000429 */ 		__except0__.__cause__ = null;
/* 000429 */ 		throw __except0__;
/* 000429 */ 	});},
/* 000431 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000431 */ 		if (arguments.length) {
/* 000431 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000431 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000431 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000431 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000431 */ 					switch (__attrib0__) {
/* 000431 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 					}
/* 000431 */ 				}
/* 000431 */ 			}
/* 000431 */ 		}
/* 000431 */ 		else {
/* 000431 */ 		}
/* 000438 */ 		(function () {
/* 000438 */ 			var __accu0__ = token_reader;
/* 000438 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000438 */ 		}) ();
/* 000439 */ 		// pass;
/* 000439 */ 	});},
/* 000446 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000446 */ 		if (arguments.length) {
/* 000446 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000446 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000446 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000446 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000446 */ 					switch (__attrib0__) {
/* 000446 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 					}
/* 000446 */ 				}
/* 000446 */ 			}
/* 000446 */ 		}
/* 000446 */ 		else {
/* 000446 */ 		}
/* 000465 */ 		return self.child_parsing_state;
/* 000465 */ 	});},
/* 000468 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000468 */ 		if (arguments.length) {
/* 000468 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000468 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000468 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000468 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000468 */ 					switch (__attrib0__) {
/* 000468 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 					}
/* 000468 */ 				}
/* 000468 */ 			}
/* 000468 */ 		}
/* 000468 */ 		else {
/* 000468 */ 		}
/* 000478 */ 		return opening_delimiter;
/* 000478 */ 	});},
/* 000481 */ 	get get_parsed_delimiters () {return __get__ (this, function (self) {
/* 000481 */ 		if (arguments.length) {
/* 000481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 					switch (__attrib0__) {
/* 000481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 		}
/* 000481 */ 		else {
/* 000481 */ 		}
/* 000515 */ 		var first_token = self.first_token;
/* 000516 */ 		var delimiters = self.delimiters;
/* 000518 */ 		if (__t__ (delimiters === null)) {
/* 000519 */ 			var delimiters = first_token.arg;
/* 000519 */ 		}
/* 000521 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000522 */ 			var opening_delimiter = delimiters;
/* 000523 */ 			var closing_delimiter = (function () {
/* 000523 */ 				var __accu0__ = self;
/* 000523 */ 				return __call__ (__accu0__.get_matching_delimiter, __accu0__, opening_delimiter);
/* 000523 */ 			}) ();
/* 000524 */ 			return tuple ([opening_delimiter, closing_delimiter]);
/* 000524 */ 		}
/* 000526 */ 		return delimiters;
/* 000526 */ 	});},
/* 000528 */ 	get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000543 */ 		if (__t__ (__getitem__ (self.parsed_delimiters, 1))) {
/* 000544 */ 			var expected_matching = (function () {
/* 000544 */ 				var __accu0__ = 'matching ‘{}’';
/* 000544 */ 				return __call__ (__accu0__.format, __accu0__, __getitem__ (self.parsed_delimiters, 1));
/* 000544 */ 			}) ();
/* 000544 */ 		}
/* 000545 */ 		else {
/* 000546 */ 			var expected_matching = 'matching closing delimiter';
/* 000546 */ 		}
/* 000553 */ 		return __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({make_child_parsing_state: self.make_child_parsing_state, stop_token_condition: self.stop_token_condition, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000553 */ 			var __accu0__ = 'Expected {} after ‘{}’';
/* 000553 */ 			return __call__ (__accu0__.format, __accu0__, expected_matching, __getitem__ (self.parsed_delimiters, 0));
/* 000553 */ 		}) ()}));
/* 000553 */ 	});},
/* 000556 */ 	get get_open_context_description () {return __get__ (this, function (self) {
/* 000556 */ 		if (arguments.length) {
/* 000556 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000556 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000556 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000556 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000556 */ 					switch (__attrib0__) {
/* 000556 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 					}
/* 000556 */ 				}
/* 000556 */ 			}
/* 000556 */ 		}
/* 000556 */ 		else {
/* 000556 */ 		}
/* 000563 */ 		return tuple ([(function () {
/* 000563 */ 			var __accu0__ = 'Delimited expression ‘{}…{}’';
/* 000563 */ 			return __call__ (__accu0__.format, __accu0__, ...self.parsed_delimiters);
/* 000563 */ 		}) (), self.first_token]);
/* 000563 */ 	});},
/* 000568 */ 	get make_group_node_carryover_info () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, carryover_info) {
/* 000568 */ 		if (arguments.length) {
/* 000568 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000568 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000568 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000568 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000568 */ 					switch (__attrib0__) {
/* 000568 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'carryover_info': var carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 					}
/* 000568 */ 				}
/* 000568 */ 			}
/* 000568 */ 		}
/* 000568 */ 		else {
/* 000568 */ 		}
/* 000580 */ 		var pos_end = (function () {
/* 000580 */ 			var __accu0__ = token_reader;
/* 000580 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000580 */ 		}) ();
/* 000582 */ 		var group_node = (function () {
/* 000582 */ 			var __accu0__ = latex_walker;
/* 000582 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.group_parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000582 */ 		}) ();
/* 000591 */ 		return tuple ([group_node, carryover_info]);
/* 000591 */ 	});}
/* 000591 */ });
/* 000601 */ export var LatexDelimitedExpressionParser =  __class__ ('LatexDelimitedExpressionParser', [LatexParserBase], {
/* 000601 */ 	__module__: __name__,
/* 000639 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class, optional, allow_pre_space, discard_carryover_info) {
/* 000639 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000639 */ 			var optional = false;
/* 000639 */ 		};
/* 000639 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000639 */ 			var allow_pre_space = false;
/* 000639 */ 		};
/* 000639 */ 		if (typeof discard_carryover_info == 'undefined' || (discard_carryover_info != null && discard_carryover_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000639 */ 			var discard_carryover_info = true;
/* 000639 */ 		};
/* 000639 */ 		var kwargs = dict ();
/* 000639 */ 		if (arguments.length) {
/* 000639 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000639 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000639 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000639 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000639 */ 					switch (__attrib0__) {
/* 000639 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'discard_carryover_info': var discard_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000639 */ 					}
/* 000639 */ 				}
/* 000639 */ 				delete kwargs.__kwargtrans__;
/* 000639 */ 			}
/* 000639 */ 		}
/* 000639 */ 		else {
/* 000639 */ 		}
/* 000646 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000647 */ 		self.delimiters = delimiters;
/* 000648 */ 		self.optional = optional;
/* 000649 */ 		self.allow_pre_space = allow_pre_space;
/* 000653 */ 		self.discard_carryover_info = discard_carryover_info;
/* 000655 */ 		self.delimited_expression_parser_info_class = delimited_expression_parser_info_class;
/* 000655 */ 	});},
/* 000658 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000658 */ 		if (arguments.length) {
/* 000658 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000658 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000658 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000658 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000658 */ 					switch (__attrib0__) {
/* 000658 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 					}
/* 000658 */ 				}
/* 000658 */ 			}
/* 000658 */ 		}
/* 000658 */ 		else {
/* 000658 */ 		}
/* 000659 */ 		return self.optional;
/* 000659 */ 	});},
/* 000662 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000662 */ 		var kwargs = dict ();
/* 000662 */ 		if (arguments.length) {
/* 000662 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000662 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000662 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000662 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000662 */ 					switch (__attrib0__) {
/* 000662 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000662 */ 					}
/* 000662 */ 				}
/* 000662 */ 				delete kwargs.__kwargtrans__;
/* 000662 */ 			}
/* 000662 */ 		}
/* 000662 */ 		else {
/* 000662 */ 		}
/* 000665 */ 		var group_parsing_state = (function () {
/* 000665 */ 			var __accu0__ = self.delimited_expression_parser_info_class;
/* 000665 */ 			return __call__ (__accu0__.get_group_parsing_state, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, delimiters: self.delimiters, delimited_expression_parser: self}));
/* 000665 */ 		}) ();
/* 000671 */ 		var opening_delimiter_tokens = null;
/* 000673 */ 		try {
/* 000675 */ 			var opening_delimiter_tokens = (function () {
/* 000675 */ 				var __accu0__ = self.delimited_expression_parser_info_class;
/* 000675 */ 				return __call__ (__accu0__.parse_initial, __accu0__, __kwargtrans__ ({delimiters: self.delimiters, allow_pre_space: self.allow_pre_space, latex_walker: latex_walker, token_reader: token_reader, group_parsing_state: group_parsing_state, delimited_expression_parser: self}));
/* 000675 */ 			}) ();
/* 000675 */ 		}
/* 000675 */ 		catch (__except0__) {
/* 000675 */ 			if (isinstance (__except0__, LatexDelimitedExpressionParserOpeningDelimiterNotFound)) {
/* 000675 */ 				var e = __except0__;
/* 000685 */ 				var recovery_token = null;
/* 000686 */ 				if (__t__ (e.first_tokens)) {
/* 000687 */ 					var recovery_token = __getitem__ (e.first_tokens, 0);
/* 000687 */ 				}
/* 000689 */ 				if (__t__ (self.optional)) {
/* 000691 */ 					if (__t__ (e.first_tokens)) {
/* 000692 */ 						(function () {
/* 000692 */ 							var __accu0__ = token_reader;
/* 000692 */ 							return __call__ (__accu0__.move_to_token, __accu0__, recovery_token);
/* 000692 */ 						}) ();
/* 000692 */ 					}
/* 000693 */ 					return tuple ([null, null]);
/* 000693 */ 				}
/* 000698 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, recovery_nodes: (function () {
/* 000698 */ 					var __accu0__ = nodes;
/* 000698 */ 					return __call__ (__accu0__.LatexNodeList, __accu0__, []);
/* 000698 */ 				}) (), recovery_at_token: recovery_token}));
/* 000698 */ 				__except1__.__cause__ = null;
/* 000698 */ 				throw __except1__;
/* 000698 */ 			}
/* 000698 */ 			else {
/* 000698 */ 				throw __except0__;
/* 000698 */ 			}
/* 000698 */ 		}
/* 000703 */ 		var contents_parser_info = (function () {
/* 000703 */ 			var __accu0__ = self;
/* 000703 */ 			return __call__ (__accu0__.delimited_expression_parser_info_class, __accu0__, self, __kwargtrans__ ({opening_delimiter_tokens: opening_delimiter_tokens, group_parsing_state: group_parsing_state, parsing_state: parsing_state, delimiters: self.delimiters}));
/* 000703 */ 		}) ();
/* 000711 */ 		(function () {
/* 000711 */ 			var __accu0__ = contents_parser_info;
/* 000711 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000711 */ 		}) ();
/* 000714 */ 		var contents_parser = (function () {
/* 000714 */ 			var __accu0__ = contents_parser_info;
/* 000714 */ 			return __call__ (__accu0__.make_content_parser, __accu0__, latex_walker, token_reader);
/* 000714 */ 		}) ();
/* 000716 */ 		var __left0__ = (function () {
/* 000716 */ 			var __accu0__ = latex_walker;
/* 000720 */ 			return __call__ (__accu0__.parse_content, __accu0__, contents_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: contents_parser_info.contents_parsing_state, open_context: (function () {
/* 000720 */ 				var __accu1__ = contents_parser_info;
/* 000720 */ 				return __call__ (__accu1__.get_open_context_description, __accu1__);
/* 000720 */ 			}) ()}));
/* 000720 */ 		}) ();
/* 000720 */ 		var nodelist = __left0__ [0];
/* 000720 */ 		var carryover_info = __left0__ [1];
/* 000725 */ 		if (__t__ (__t__ (self.discard_carryover_info) && carryover_info !== null)) {
/* 000726 */ 			// pass;
/* 000730 */ 			var carryover_info = null;
/* 000730 */ 		}
/* 000732 */ 		var __left0__ = (function () {
/* 000732 */ 			var __accu0__ = contents_parser_info;
/* 000732 */ 			return __call__ (__accu0__.make_group_node_carryover_info, __accu0__, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, nodelist: nodelist, carryover_info: carryover_info}));
/* 000732 */ 		}) ();
/* 000732 */ 		var groupnode = __left0__ [0];
/* 000732 */ 		var carryover_info = __left0__ [1];
/* 000739 */ 		return tuple ([groupnode, carryover_info]);
/* 000739 */ 	});}
/* 000739 */ });
/* 000749 */ export var LatexDelimitedGroupParserInfo =  __class__ ('LatexDelimitedGroupParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000749 */ 	__module__: __name__,
/* 000753 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser) {
/* 000753 */ 		if (arguments.length) {
/* 000753 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000753 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000753 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000753 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000753 */ 					switch (__attrib0__) {
/* 000753 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000753 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000753 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000753 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000753 */ 					}
/* 000753 */ 				}
/* 000753 */ 			}
/* 000753 */ 		}
/* 000753 */ 		else {
/* 000753 */ 		}
/* 000778 */ 		if (__t__ (delimiters === null)) {
/* 000779 */ 			return parsing_state;
/* 000779 */ 		}
/* 000781 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000782 */ 			if (__t__ (!__in__ (delimiters, parsing_state._latex_group_delimchars_by_open))) {
/* 000784 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000784 */ 					var __accu0__ = 'Delimiter ‘{}’ not a valid latex group delimiter ({!r})';
/* 000784 */ 					return __call__ (__accu0__.format, __accu0__, delimiters, parsing_state.latex_group_delimiters);
/* 000784 */ 				}) ());
/* 000784 */ 				__except0__.__cause__ = null;
/* 000784 */ 				throw __except0__;
/* 000784 */ 			}
/* 000787 */ 			return parsing_state;
/* 000787 */ 		}
/* 000789 */ 		var delimiters_t = __call__ (tuple, null, delimiters);
/* 000794 */ 		var __iterable0__ = parsing_state.latex_group_delimiters;
/* 000794 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000794 */ 			var odcd = __getitem__ (__iterable0__, __index0__);
/* 000795 */ 			if (__t__ (__eq__ (delimiters_t, odcd))) {
/* 000797 */ 				return parsing_state;
/* 000797 */ 			}
/* 000797 */ 		}
/* 000800 */ 		return (function () {
/* 000800 */ 			var __accu0__ = parsing_state;
/* 000800 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: __add__ (parsing_state.latex_group_delimiters, [delimiters_t])}));
/* 000800 */ 		}) ();
/* 000800 */ 	});},
/* 000807 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser) {
/* 000807 */ 		if (arguments.length) {
/* 000807 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000807 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000807 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000807 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000807 */ 					switch (__attrib0__) {
/* 000807 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 					}
/* 000807 */ 				}
/* 000807 */ 			}
/* 000807 */ 		}
/* 000807 */ 		else {
/* 000807 */ 		}
/* 000812 */ 		if (__t__ (delimiters !== null)) {
/* 000813 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000814 */ 				return [delimiters];
/* 000814 */ 			}
/* 000815 */ 			else {
/* 000816 */ 				return [__getitem__ (delimiters, 0)];
/* 000816 */ 			}
/* 000816 */ 		}
/* 000818 */ 		return (function () {
/* 000818 */ 			var __accu0__ = [];
/* 000818 */ 			var __iterable0__ = group_parsing_state.latex_group_delimiters;
/* 000818 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000820 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000820 */ 				var od = __left0__ [0];
/* 000820 */ 				var cd = __left0__ [1];
/* 000820 */ 				(function () {
/* 000820 */ 					var __accu1__ = __accu0__;
/* 000820 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000820 */ 				}) ();
/* 000820 */ 			}
/* 000820 */ 			return __accu0__;
/* 000820 */ 		}) ();
/* 000820 */ 	});},
/* 000824 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser) {
/* 000824 */ 		if (arguments.length) {
/* 000824 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000824 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000824 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000824 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000824 */ 					switch (__attrib0__) {
/* 000824 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 					}
/* 000824 */ 				}
/* 000824 */ 			}
/* 000824 */ 		}
/* 000824 */ 		else {
/* 000824 */ 		}
/* 000827 */ 		if (__t__ (__ne__ (first_token.tok, 'brace_open'))) {
/* 000828 */ 			return false;
/* 000828 */ 		}
/* 000830 */ 		if (__t__ (!__t__ (((function () {
/* 000830 */ 			var __accu0__ = cls;
/* 000830 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, delimiters, first_token.arg);
/* 000830 */ 		}) ())))) {
/* 000831 */ 			return false;
/* 000831 */ 		}
/* 000833 */ 		return true;
/* 000833 */ 	});},
/* 000839 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000839 */ 		if (arguments.length) {
/* 000839 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000839 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000839 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000839 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000839 */ 					switch (__attrib0__) {
/* 000839 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000839 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000839 */ 					}
/* 000839 */ 				}
/* 000839 */ 			}
/* 000839 */ 		}
/* 000839 */ 		else {
/* 000839 */ 		}
/* 000840 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000841 */ 			// pass;
/* 000847 */ 			return true;
/* 000847 */ 		}
/* 000848 */ 		return false;
/* 000848 */ 	});},
/* 000851 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000851 */ 		if (arguments.length) {
/* 000851 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000851 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000851 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000851 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000851 */ 					switch (__attrib0__) {
/* 000851 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000851 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000851 */ 					}
/* 000851 */ 				}
/* 000851 */ 			}
/* 000851 */ 		}
/* 000851 */ 		else {
/* 000851 */ 		}
/* 000859 */ 		return __getitem__ (self.group_parsing_state._latex_group_delimchars_by_open, opening_delimiter);
/* 000859 */ 	});}
/* 000859 */ });
/* 000863 */ export var LatexDelimitedGroupParser =  __class__ ('LatexDelimitedGroupParser', [LatexDelimitedExpressionParser], {
/* 000863 */ 	__module__: __name__,
/* 000882 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class) {
/* 000882 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000882 */ 			var delimited_expression_parser_info_class = LatexDelimitedGroupParserInfo;
/* 000882 */ 		};
/* 000882 */ 		var kwargs = dict ();
/* 000882 */ 		if (arguments.length) {
/* 000882 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000882 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000882 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000882 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000882 */ 					switch (__attrib0__) {
/* 000882 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000882 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000882 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000882 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000882 */ 					}
/* 000882 */ 				}
/* 000882 */ 				delete kwargs.__kwargtrans__;
/* 000882 */ 			}
/* 000882 */ 		}
/* 000882 */ 		else {
/* 000882 */ 		}
/* 000886 */ 		__call__ (__call__ (__super__, null, LatexDelimitedGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 000886 */ 	});}
/* 000886 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._delimited.map