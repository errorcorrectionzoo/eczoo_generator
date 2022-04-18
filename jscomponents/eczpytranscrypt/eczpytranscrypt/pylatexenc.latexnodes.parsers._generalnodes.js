/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:10:51
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000045 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, __all__, _unicode_from_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerTokenParseError, _unicode_from_str, nodes, LatexWalkerParseError, LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexParserBase, __all__, LatexWalkerParseErrorFormatter};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._generalnodes';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000048 */ export var _basestring = str;
/* 000062 */ export var LatexGeneralNodesParser =  __class__ ('LatexGeneralNodesParser', [LatexParserBase], {
/* 000062 */ 	__module__: __name__,
/* 000111 */ 	get __init__ () {return __get__ (this, function (self, stop_token_condition, stop_nodelist_condition, require_stop_condition_met, stop_condition_message, make_child_parsing_state, handle_stop_condition_token, include_stop_token_pre_space_chars, handle_stop_data) {
/* 000111 */ 		if (typeof stop_token_condition == 'undefined' || (stop_token_condition != null && stop_token_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var stop_token_condition = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof stop_nodelist_condition == 'undefined' || (stop_nodelist_condition != null && stop_nodelist_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var stop_nodelist_condition = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof require_stop_condition_met == 'undefined' || (require_stop_condition_met != null && require_stop_condition_met.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var require_stop_condition_met = true;
/* 000111 */ 		};
/* 000111 */ 		if (typeof stop_condition_message == 'undefined' || (stop_condition_message != null && stop_condition_message.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var stop_condition_message = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof make_child_parsing_state == 'undefined' || (make_child_parsing_state != null && make_child_parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var make_child_parsing_state = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof handle_stop_condition_token == 'undefined' || (handle_stop_condition_token != null && handle_stop_condition_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var handle_stop_condition_token = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof include_stop_token_pre_space_chars == 'undefined' || (include_stop_token_pre_space_chars != null && include_stop_token_pre_space_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var include_stop_token_pre_space_chars = true;
/* 000111 */ 		};
/* 000111 */ 		if (typeof handle_stop_data == 'undefined' || (handle_stop_data != null && handle_stop_data.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var handle_stop_data = null;
/* 000111 */ 		};
/* 000111 */ 		var kwargs = dict ();
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'stop_token_condition': var stop_token_condition = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'stop_nodelist_condition': var stop_nodelist_condition = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'require_stop_condition_met': var require_stop_condition_met = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'stop_condition_message': var stop_condition_message = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'make_child_parsing_state': var make_child_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'handle_stop_condition_token': var handle_stop_condition_token = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'include_stop_token_pre_space_chars': var include_stop_token_pre_space_chars = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'handle_stop_data': var handle_stop_data = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 				delete kwargs.__kwargtrans__;
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000121 */ 		__call__ (__call__ (__super__, null, LatexGeneralNodesParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000122 */ 		self.stop_token_condition = stop_token_condition;
/* 000123 */ 		self.stop_nodelist_condition = stop_nodelist_condition;
/* 000125 */ 		self.require_stop_condition_met = require_stop_condition_met;
/* 000126 */ 		self.stop_condition_message = stop_condition_message;
/* 000128 */ 		self.make_child_parsing_state = make_child_parsing_state;
/* 000130 */ 		self.handle_stop_condition_token = handle_stop_condition_token;
/* 000131 */ 		self.handle_stop_data = handle_stop_data;
/* 000133 */ 		self.include_stop_token_pre_space_chars = include_stop_token_pre_space_chars;
/* 000133 */ 	});},
/* 000136 */ 	get make_nodes_collector () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000136 */ 		if (arguments.length) {
/* 000136 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 					switch (__attrib0__) {
/* 000136 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 		else {
/* 000136 */ 		}
/* 000140 */ 		return (function () {
/* 000140 */ 			var __accu0__ = latex_walker;
/* 000140 */ 			return __call__ (__accu0__.make_nodes_collector, __accu0__, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state, stop_token_condition: self.stop_token_condition, stop_nodelist_condition: self.stop_nodelist_condition, make_child_parsing_state: self.make_child_parsing_state, include_stop_token_pre_space_chars: self.include_stop_token_pre_space_chars}));
/* 000140 */ 		}) ();
/* 000140 */ 	});},
/* 000149 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000149 */ 		var kwargs = dict ();
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 				delete kwargs.__kwargtrans__;
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000158 */ 		var collector = (function () {
/* 000158 */ 			var __accu0__ = self;
/* 000158 */ 			return __call__ (__accu0__.make_nodes_collector, __accu0__, latex_walker, token_reader, parsing_state);
/* 000158 */ 		}) ();
/* 000160 */ 		try {
/* 000162 */ 			(function () {
/* 000162 */ 				var __accu0__ = collector;
/* 000162 */ 				return __call__ (__accu0__.process_tokens, __accu0__);
/* 000162 */ 			}) ();
/* 000162 */ 		}
/* 000162 */ 		catch (__except0__) {
/* 000162 */ 			if (isinstance (__except0__, LatexWalkerParseError)) {
/* 000162 */ 				var e = __except0__;
/* 000171 */ 				// pass;
/* 000178 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, pos: e.pos, recovery_nodes: (function () {
/* 000178 */ 					var __accu0__ = collector;
/* 000178 */ 					return __call__ (__accu0__.get_final_nodelist, __accu0__);
/* 000179 */ 				}) (), recovery_carryover_info: (function () {
/* 000179 */ 					var __accu0__ = collector;
/* 000179 */ 					return __call__ (__accu0__.get_parser_carryover_info, __accu0__);
/* 000179 */ 				}) ()}));
/* 000179 */ 				__except1__.__cause__ = null;
/* 000179 */ 				throw __except1__;
/* 000179 */ 			}
/* 000179 */ 			else {
/* 000179 */ 				throw __except0__;
/* 000179 */ 			}
/* 000179 */ 		}
/* 000184 */ 		var stop_token_condition_met = (function () {
/* 000184 */ 			var __accu0__ = collector;
/* 000184 */ 			return __call__ (__accu0__.stop_token_condition_met, __accu0__);
/* 000184 */ 		}) ();
/* 000185 */ 		var stop_nodelist_condition_met = (function () {
/* 000185 */ 			var __accu0__ = collector;
/* 000185 */ 			return __call__ (__accu0__.stop_nodelist_condition_met, __accu0__);
/* 000185 */ 		}) ();
/* 000187 */ 		if (__t__ (!__t__ ((self.require_stop_condition_met)))) {
/* 000189 */ 			var met_a_required_stop_condition = true;
/* 000189 */ 		}
/* 000190 */ 		else {
/* 000191 */ 			var met_a_required_stop_condition = false;
/* 000192 */ 			if (__t__ (self.stop_token_condition !== null)) {
/* 000193 */ 				if (__t__ (stop_token_condition_met)) {
/* 000194 */ 					var met_a_required_stop_condition = true;
/* 000194 */ 				}
/* 000194 */ 			}
/* 000195 */ 			else if (__t__ (self.stop_nodelist_condition !== null)) {
/* 000196 */ 				if (__t__ (stop_nodelist_condition_met)) {
/* 000197 */ 					var met_a_required_stop_condition = true;
/* 000197 */ 				}
/* 000197 */ 			}
/* 000198 */ 			else {
/* 000200 */ 				var met_a_required_stop_condition = true;
/* 000200 */ 			}
/* 000200 */ 		}
/* 000202 */ 		// pass;
/* 000214 */ 		if (__t__ (!__t__ ((met_a_required_stop_condition)))) {
/* 000216 */ 			var message = self.stop_condition_message;
/* 000217 */ 			if (__t__ (message === null)) {
/* 000218 */ 				var message = 'End of stream encountered while parsing nodes without stop condition being met [reporting starting position]';
/* 000218 */ 			}
/* 000224 */ 			var exc = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: message, pos: (function () {
/* 000224 */ 				var __accu0__ = collector;
/* 000224 */ 				return __call__ (__accu0__.pos_start, __accu0__);
/* 000225 */ 			}) (), recovery_nodes: (function () {
/* 000225 */ 				var __accu0__ = collector;
/* 000225 */ 				return __call__ (__accu0__.get_final_nodelist, __accu0__);
/* 000226 */ 			}) (), recovery_carryover_info: (function () {
/* 000226 */ 				var __accu0__ = collector;
/* 000226 */ 				return __call__ (__accu0__.get_parser_carryover_info, __accu0__);
/* 000226 */ 			}) ()}));
/* 000228 */ 			var __except0__ = exc;
/* 000228 */ 			__except0__.__cause__ = null;
/* 000228 */ 			throw __except0__;
/* 000228 */ 		}
/* 000230 */ 		if (__t__ (__t__ (stop_token_condition_met) && self.handle_stop_condition_token !== null)) {
/* 000232 */ 			var stoptoken = (function () {
/* 000232 */ 				var __accu0__ = collector;
/* 000232 */ 				return __call__ (__accu0__.stop_token_condition_met_token, __accu0__);
/* 000232 */ 			}) ();
/* 000234 */ 			if (__t__ (stoptoken !== null)) {
/* 000235 */ 				(function () {
/* 000235 */ 					var __accu0__ = self;
/* 000235 */ 					return __call__ (__accu0__.handle_stop_condition_token, __accu0__, stoptoken, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, parsing_state: parsing_state}));
/* 000235 */ 				}) ();
/* 000235 */ 			}
/* 000235 */ 		}
/* 000242 */ 		var stop_data = (function () {
/* 000242 */ 			var __accu0__ = collector;
/* 000242 */ 			return __call__ (__accu0__.stop_condition_stop_data, __accu0__);
/* 000242 */ 		}) ();
/* 000243 */ 		if (__t__ (__t__ (stop_data !== null) && self.handle_stop_data !== null)) {
/* 000244 */ 			(function () {
/* 000244 */ 				var __accu0__ = self;
/* 000244 */ 				return __call__ (__accu0__.handle_stop_data, __accu0__, stop_data, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, parsing_state: parsing_state}));
/* 000244 */ 			}) ();
/* 000244 */ 		}
/* 000251 */ 		var nodelist = (function () {
/* 000251 */ 			var __accu0__ = collector;
/* 000251 */ 			return __call__ (__accu0__.get_final_nodelist, __accu0__);
/* 000251 */ 		}) ();
/* 000252 */ 		var carryover_info = (function () {
/* 000252 */ 			var __accu0__ = collector;
/* 000252 */ 			return __call__ (__accu0__.get_parser_carryover_info, __accu0__);
/* 000252 */ 		}) ();
/* 000254 */ 		// pass;
/* 000258 */ 		return tuple ([nodelist, carryover_info]);
/* 000258 */ 	});}
/* 000258 */ });
/* 000265 */ export var LatexSingleNodeParser =  __class__ ('LatexSingleNodeParser', [LatexGeneralNodesParser], {
/* 000265 */ 	__module__: __name__,
/* 000283 */ 	get __init__ () {return __get__ (this, function (self, stop_on_comment) {
/* 000283 */ 		if (typeof stop_on_comment == 'undefined' || (stop_on_comment != null && stop_on_comment.hasOwnProperty ("__kwargtrans__"))) {;
/* 000283 */ 			var stop_on_comment = true;
/* 000283 */ 		};
/* 000283 */ 		var kwargs = dict ();
/* 000283 */ 		if (arguments.length) {
/* 000283 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000283 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000283 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000283 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000283 */ 					switch (__attrib0__) {
/* 000283 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'stop_on_comment': var stop_on_comment = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000283 */ 					}
/* 000283 */ 				}
/* 000283 */ 				delete kwargs.__kwargtrans__;
/* 000283 */ 			}
/* 000283 */ 		}
/* 000283 */ 		else {
/* 000283 */ 		}
/* 000284 */ 		__call__ (__call__ (__super__, null, LatexSingleNodeParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({stop_nodelist_condition: self._stop_nodelist_condition, require_stop_condition_met: false}, kwargs)));
/* 000289 */ 		self.stop_on_comment = stop_on_comment;
/* 000289 */ 	});},
/* 000291 */ 	get _stop_nodelist_condition () {return __get__ (this, function (self, nodelist) {
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000292 */ 		var nl = nodelist;
/* 000293 */ 		if (__t__ (!__t__ ((self.stop_on_comment)))) {
/* 000294 */ 			var nl = (function () {
/* 000294 */ 				var __accu0__ = [];
/* 000294 */ 				var __iterable0__ = nl;
/* 000294 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000294 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000294 */ 					if (__t__ (!__t__ (((function () {
/* 000294 */ 						var __accu1__ = n;
/* 000294 */ 						return __call__ (__accu1__.isNodeType, __accu1__, nodes.LatexCommentNode);
/* 000294 */ 					}) ())))) {
/* 000294 */ 						(function () {
/* 000294 */ 							var __accu1__ = __accu0__;
/* 000294 */ 							return __call__ (__accu1__.append, __accu1__, n);
/* 000294 */ 						}) ();
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 				return __accu0__;
/* 000294 */ 			}) ();
/* 000294 */ 		}
/* 000295 */ 		if (__t__ (__ge__ (__call__ (len, null, nl), 1))) {
/* 000296 */ 			return true;
/* 000296 */ 		}
/* 000297 */ 		return false;
/* 000297 */ 	});},
/* 000299 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000299 */ 		if (arguments.length) {
/* 000299 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 					switch (__attrib0__) {
/* 000299 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 			}
/* 000299 */ 		}
/* 000299 */ 		else {
/* 000299 */ 		}
/* 000300 */ 		return false;
/* 000300 */ 	});}
/* 000300 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._generalnodes.map