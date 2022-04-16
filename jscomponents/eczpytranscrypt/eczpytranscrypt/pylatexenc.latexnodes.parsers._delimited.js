/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:37:12
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000045 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000044 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, __all__, _unicode_from_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerEndOfStream, LatexWalkerNodesParseError, LatexWalkerTokenParseError, __all__, LatexWalkerParseError, LatexGeneralNodesParser, nodes, _unicode_from_str, LatexParserBase, LatexWalkerError};
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
/* 000549 */ 		return __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({make_child_parsing_state: self.make_child_parsing_state, stop_token_condition: self.stop_token_condition, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000549 */ 			var __accu0__ = 'Expected end of delimited expression ‘{}…{}’';
/* 000549 */ 			return __call__ (__accu0__.format, __accu0__, ...self.parsed_delimiters);
/* 000549 */ 		}) ()}));
/* 000549 */ 	});},
/* 000552 */ 	get get_open_context_description () {return __get__ (this, function (self) {
/* 000552 */ 		if (arguments.length) {
/* 000552 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000552 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000552 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000552 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000552 */ 					switch (__attrib0__) {
/* 000552 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 					}
/* 000552 */ 				}
/* 000552 */ 			}
/* 000552 */ 		}
/* 000552 */ 		else {
/* 000552 */ 		}
/* 000559 */ 		return tuple ([(function () {
/* 000559 */ 			var __accu0__ = 'Delimited expression ‘{}…{}’';
/* 000559 */ 			return __call__ (__accu0__.format, __accu0__, ...self.parsed_delimiters);
/* 000559 */ 		}) (), self.first_token]);
/* 000559 */ 	});},
/* 000564 */ 	get make_group_node_carryover_info () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, carryover_info) {
/* 000564 */ 		if (arguments.length) {
/* 000564 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000564 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000564 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000564 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000564 */ 					switch (__attrib0__) {
/* 000564 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000564 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000564 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000564 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000564 */ 						case 'carryover_info': var carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000564 */ 					}
/* 000564 */ 				}
/* 000564 */ 			}
/* 000564 */ 		}
/* 000564 */ 		else {
/* 000564 */ 		}
/* 000576 */ 		var pos_end = (function () {
/* 000576 */ 			var __accu0__ = token_reader;
/* 000576 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000576 */ 		}) ();
/* 000578 */ 		var group_node = (function () {
/* 000578 */ 			var __accu0__ = latex_walker;
/* 000578 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.group_parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000578 */ 		}) ();
/* 000587 */ 		return tuple ([group_node, carryover_info]);
/* 000587 */ 	});}
/* 000587 */ });
/* 000597 */ export var LatexDelimitedExpressionParser =  __class__ ('LatexDelimitedExpressionParser', [LatexParserBase], {
/* 000597 */ 	__module__: __name__,
/* 000635 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class, optional, allow_pre_space, discard_carryover_info) {
/* 000635 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000635 */ 			var optional = false;
/* 000635 */ 		};
/* 000635 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000635 */ 			var allow_pre_space = false;
/* 000635 */ 		};
/* 000635 */ 		if (typeof discard_carryover_info == 'undefined' || (discard_carryover_info != null && discard_carryover_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000635 */ 			var discard_carryover_info = true;
/* 000635 */ 		};
/* 000635 */ 		var kwargs = dict ();
/* 000635 */ 		if (arguments.length) {
/* 000635 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000635 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000635 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000635 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000635 */ 					switch (__attrib0__) {
/* 000635 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000635 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000635 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000635 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000635 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000635 */ 						case 'discard_carryover_info': var discard_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000635 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000635 */ 					}
/* 000635 */ 				}
/* 000635 */ 				delete kwargs.__kwargtrans__;
/* 000635 */ 			}
/* 000635 */ 		}
/* 000635 */ 		else {
/* 000635 */ 		}
/* 000642 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000643 */ 		self.delimiters = delimiters;
/* 000644 */ 		self.optional = optional;
/* 000645 */ 		self.allow_pre_space = allow_pre_space;
/* 000649 */ 		self.discard_carryover_info = discard_carryover_info;
/* 000651 */ 		self.delimited_expression_parser_info_class = delimited_expression_parser_info_class;
/* 000651 */ 	});},
/* 000654 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000654 */ 		if (arguments.length) {
/* 000654 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000654 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000654 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000654 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000654 */ 					switch (__attrib0__) {
/* 000654 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000654 */ 					}
/* 000654 */ 				}
/* 000654 */ 			}
/* 000654 */ 		}
/* 000654 */ 		else {
/* 000654 */ 		}
/* 000655 */ 		return self.optional;
/* 000655 */ 	});},
/* 000658 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000658 */ 		var kwargs = dict ();
/* 000658 */ 		if (arguments.length) {
/* 000658 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000658 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000658 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000658 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000658 */ 					switch (__attrib0__) {
/* 000658 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000658 */ 					}
/* 000658 */ 				}
/* 000658 */ 				delete kwargs.__kwargtrans__;
/* 000658 */ 			}
/* 000658 */ 		}
/* 000658 */ 		else {
/* 000658 */ 		}
/* 000661 */ 		var group_parsing_state = (function () {
/* 000661 */ 			var __accu0__ = self.delimited_expression_parser_info_class;
/* 000661 */ 			return __call__ (__accu0__.get_group_parsing_state, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, delimiters: self.delimiters, delimited_expression_parser: self}));
/* 000661 */ 		}) ();
/* 000667 */ 		var opening_delimiter_tokens = null;
/* 000669 */ 		try {
/* 000671 */ 			var opening_delimiter_tokens = (function () {
/* 000671 */ 				var __accu0__ = self.delimited_expression_parser_info_class;
/* 000671 */ 				return __call__ (__accu0__.parse_initial, __accu0__, __kwargtrans__ ({delimiters: self.delimiters, allow_pre_space: self.allow_pre_space, latex_walker: latex_walker, token_reader: token_reader, group_parsing_state: group_parsing_state, delimited_expression_parser: self}));
/* 000671 */ 			}) ();
/* 000671 */ 		}
/* 000671 */ 		catch (__except0__) {
/* 000671 */ 			if (isinstance (__except0__, LatexDelimitedExpressionParserOpeningDelimiterNotFound)) {
/* 000671 */ 				var e = __except0__;
/* 000681 */ 				var recovery_token = null;
/* 000682 */ 				if (__t__ (e.first_tokens)) {
/* 000683 */ 					var recovery_token = __getitem__ (e.first_tokens, 0);
/* 000683 */ 				}
/* 000685 */ 				if (__t__ (self.optional)) {
/* 000687 */ 					if (__t__ (e.first_tokens)) {
/* 000688 */ 						(function () {
/* 000688 */ 							var __accu0__ = token_reader;
/* 000688 */ 							return __call__ (__accu0__.move_to_token, __accu0__, recovery_token);
/* 000688 */ 						}) ();
/* 000688 */ 					}
/* 000689 */ 					return tuple ([null, null]);
/* 000689 */ 				}
/* 000694 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, recovery_nodes: (function () {
/* 000694 */ 					var __accu0__ = nodes;
/* 000694 */ 					return __call__ (__accu0__.LatexNodeList, __accu0__, []);
/* 000694 */ 				}) (), recovery_at_token: recovery_token}));
/* 000694 */ 				__except1__.__cause__ = null;
/* 000694 */ 				throw __except1__;
/* 000694 */ 			}
/* 000694 */ 			else {
/* 000694 */ 				throw __except0__;
/* 000694 */ 			}
/* 000694 */ 		}
/* 000699 */ 		var contents_parser_info = (function () {
/* 000699 */ 			var __accu0__ = self;
/* 000699 */ 			return __call__ (__accu0__.delimited_expression_parser_info_class, __accu0__, self, __kwargtrans__ ({opening_delimiter_tokens: opening_delimiter_tokens, group_parsing_state: group_parsing_state, parsing_state: parsing_state, delimiters: self.delimiters}));
/* 000699 */ 		}) ();
/* 000707 */ 		(function () {
/* 000707 */ 			var __accu0__ = contents_parser_info;
/* 000707 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000707 */ 		}) ();
/* 000710 */ 		var contents_parser = (function () {
/* 000710 */ 			var __accu0__ = contents_parser_info;
/* 000710 */ 			return __call__ (__accu0__.make_content_parser, __accu0__, latex_walker, token_reader);
/* 000710 */ 		}) ();
/* 000712 */ 		var __left0__ = (function () {
/* 000712 */ 			var __accu0__ = latex_walker;
/* 000716 */ 			return __call__ (__accu0__.parse_content, __accu0__, contents_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: contents_parser_info.contents_parsing_state, open_context: (function () {
/* 000716 */ 				var __accu1__ = contents_parser_info;
/* 000716 */ 				return __call__ (__accu1__.get_open_context_description, __accu1__);
/* 000716 */ 			}) ()}));
/* 000716 */ 		}) ();
/* 000716 */ 		var nodelist = __left0__ [0];
/* 000716 */ 		var carryover_info = __left0__ [1];
/* 000721 */ 		if (__t__ (__t__ (self.discard_carryover_info) && carryover_info !== null)) {
/* 000722 */ 			// pass;
/* 000726 */ 			var carryover_info = null;
/* 000726 */ 		}
/* 000728 */ 		var __left0__ = (function () {
/* 000728 */ 			var __accu0__ = contents_parser_info;
/* 000728 */ 			return __call__ (__accu0__.make_group_node_carryover_info, __accu0__, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, nodelist: nodelist, carryover_info: carryover_info}));
/* 000728 */ 		}) ();
/* 000728 */ 		var groupnode = __left0__ [0];
/* 000728 */ 		var carryover_info = __left0__ [1];
/* 000735 */ 		return tuple ([groupnode, carryover_info]);
/* 000735 */ 	});}
/* 000735 */ });
/* 000745 */ export var LatexDelimitedGroupParserInfo =  __class__ ('LatexDelimitedGroupParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000745 */ 	__module__: __name__,
/* 000749 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser) {
/* 000749 */ 		if (arguments.length) {
/* 000749 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000749 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000749 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000749 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000749 */ 					switch (__attrib0__) {
/* 000749 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 					}
/* 000749 */ 				}
/* 000749 */ 			}
/* 000749 */ 		}
/* 000749 */ 		else {
/* 000749 */ 		}
/* 000774 */ 		if (__t__ (delimiters === null)) {
/* 000775 */ 			return parsing_state;
/* 000775 */ 		}
/* 000777 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000778 */ 			if (__t__ (!__in__ (delimiters, parsing_state._latex_group_delimchars_by_open))) {
/* 000780 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000780 */ 					var __accu0__ = 'Delimiter ‘{}’ not a valid latex group delimiter ({!r})';
/* 000780 */ 					return __call__ (__accu0__.format, __accu0__, delimiters, parsing_state.latex_group_delimiters);
/* 000780 */ 				}) ());
/* 000780 */ 				__except0__.__cause__ = null;
/* 000780 */ 				throw __except0__;
/* 000780 */ 			}
/* 000783 */ 			return parsing_state;
/* 000783 */ 		}
/* 000785 */ 		var delimiters_t = __call__ (tuple, null, delimiters);
/* 000790 */ 		var __iterable0__ = parsing_state.latex_group_delimiters;
/* 000790 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000790 */ 			var odcd = __getitem__ (__iterable0__, __index0__);
/* 000791 */ 			if (__t__ (__eq__ (delimiters_t, odcd))) {
/* 000793 */ 				return parsing_state;
/* 000793 */ 			}
/* 000793 */ 		}
/* 000796 */ 		return (function () {
/* 000796 */ 			var __accu0__ = parsing_state;
/* 000796 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: __add__ (parsing_state.latex_group_delimiters, [delimiters_t])}));
/* 000796 */ 		}) ();
/* 000796 */ 	});},
/* 000803 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser) {
/* 000803 */ 		if (arguments.length) {
/* 000803 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000803 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000803 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000803 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000803 */ 					switch (__attrib0__) {
/* 000803 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 					}
/* 000803 */ 				}
/* 000803 */ 			}
/* 000803 */ 		}
/* 000803 */ 		else {
/* 000803 */ 		}
/* 000808 */ 		if (__t__ (delimiters !== null)) {
/* 000809 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000810 */ 				return [delimiters];
/* 000810 */ 			}
/* 000811 */ 			else {
/* 000812 */ 				return [__getitem__ (delimiters, 0)];
/* 000812 */ 			}
/* 000812 */ 		}
/* 000814 */ 		return (function () {
/* 000814 */ 			var __accu0__ = [];
/* 000814 */ 			var __iterable0__ = group_parsing_state.latex_group_delimiters;
/* 000814 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000816 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000816 */ 				var od = __left0__ [0];
/* 000816 */ 				var cd = __left0__ [1];
/* 000816 */ 				(function () {
/* 000816 */ 					var __accu1__ = __accu0__;
/* 000816 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000816 */ 				}) ();
/* 000816 */ 			}
/* 000816 */ 			return __accu0__;
/* 000816 */ 		}) ();
/* 000816 */ 	});},
/* 000820 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser) {
/* 000820 */ 		if (arguments.length) {
/* 000820 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000820 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000820 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000820 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000820 */ 					switch (__attrib0__) {
/* 000820 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000820 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000820 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000820 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000820 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000820 */ 					}
/* 000820 */ 				}
/* 000820 */ 			}
/* 000820 */ 		}
/* 000820 */ 		else {
/* 000820 */ 		}
/* 000823 */ 		if (__t__ (__ne__ (first_token.tok, 'brace_open'))) {
/* 000824 */ 			return false;
/* 000824 */ 		}
/* 000826 */ 		if (__t__ (!__t__ (((function () {
/* 000826 */ 			var __accu0__ = cls;
/* 000826 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, delimiters, first_token.arg);
/* 000826 */ 		}) ())))) {
/* 000827 */ 			return false;
/* 000827 */ 		}
/* 000829 */ 		return true;
/* 000829 */ 	});},
/* 000835 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000835 */ 		if (arguments.length) {
/* 000835 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000835 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000835 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000835 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000835 */ 					switch (__attrib0__) {
/* 000835 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 					}
/* 000835 */ 				}
/* 000835 */ 			}
/* 000835 */ 		}
/* 000835 */ 		else {
/* 000835 */ 		}
/* 000836 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000837 */ 			// pass;
/* 000843 */ 			return true;
/* 000843 */ 		}
/* 000844 */ 		return false;
/* 000844 */ 	});},
/* 000847 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000847 */ 		if (arguments.length) {
/* 000847 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000847 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000847 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000847 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000847 */ 					switch (__attrib0__) {
/* 000847 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000847 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000847 */ 					}
/* 000847 */ 				}
/* 000847 */ 			}
/* 000847 */ 		}
/* 000847 */ 		else {
/* 000847 */ 		}
/* 000855 */ 		return __getitem__ (self.group_parsing_state._latex_group_delimchars_by_open, opening_delimiter);
/* 000855 */ 	});}
/* 000855 */ });
/* 000859 */ export var LatexDelimitedGroupParser =  __class__ ('LatexDelimitedGroupParser', [LatexDelimitedExpressionParser], {
/* 000859 */ 	__module__: __name__,
/* 000878 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class) {
/* 000878 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000878 */ 			var delimited_expression_parser_info_class = LatexDelimitedGroupParserInfo;
/* 000878 */ 		};
/* 000878 */ 		var kwargs = dict ();
/* 000878 */ 		if (arguments.length) {
/* 000878 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000878 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000878 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000878 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000878 */ 					switch (__attrib0__) {
/* 000878 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000878 */ 					}
/* 000878 */ 				}
/* 000878 */ 				delete kwargs.__kwargtrans__;
/* 000878 */ 			}
/* 000878 */ 		}
/* 000878 */ 		else {
/* 000878 */ 		}
/* 000882 */ 		__call__ (__call__ (__super__, null, LatexDelimitedGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 000882 */ 	});}
/* 000882 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._delimited.map