/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:05
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {CarryoverInformation} from './pylatexenc.latexnodes._carryoverinfo.js';
/* 000041 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexSpecialsNode, ParsedMacroArgs, __all__, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, _basestring} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerTokenParseError, LatexEnvironmentNode, __all__, LatexWalkerEndOfStream, CarryoverInformation, LatexCharsNode, LatexNode, LatexWalkerError, LatexMathNode, LatexGroupNode, LatexSpecialsNode, LatexMacroNode, LatexWalkerNodesParseError, LatexWalkerParseError, ParsedMacroArgs, LatexNodeList, LatexCommentNode, _basestring, _unicode_from_str, LatexWalkerParseErrorFormatter, _update_posposend_from_nodelist};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._nodescollector';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000047 */ export var LatexNodesCollector =  __class__ ('LatexNodesCollector', [object], {
/* 000066 */ 	__module__: __name__,
/* 000066 */ 	ReachedEndOfStream: __class__ ('ReachedEndOfStream', [Exception], {
/* 000066 */ 		__module__: __name__,
/* 000079 */ 	}),
/* 000079 */ 	ReachedStoppingCondition: __class__ ('ReachedStoppingCondition', [Exception], {
/* 000079 */ 		__module__: __name__,
/* 000089 */ 		get __init__ () {return __get__ (this, function (self, stop_data) {
/* 000089 */ 			var kwargs = dict ();
/* 000089 */ 			if (arguments.length) {
/* 000089 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 						switch (__attrib0__) {
/* 000089 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 							case 'stop_data': var stop_data = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000089 */ 						}
/* 000089 */ 					}
/* 000089 */ 					delete kwargs.__kwargtrans__;
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 			else {
/* 000089 */ 			}
/* 000090 */ 			__call__ (__call__ (__super__, null, LatexNodesCollector.ReachedStoppingCondition, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000091 */ 			self.stop_data = stop_data;
/* 000091 */ 		});}
/* 000091 */ 	}),
/* 000094 */ 	get __init__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state, stop_token_condition, stop_nodelist_condition, make_child_parsing_state, include_stop_token_pre_space_chars) {
/* 000094 */ 		if (typeof stop_token_condition == 'undefined' || (stop_token_condition != null && stop_token_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000094 */ 			var stop_token_condition = null;
/* 000094 */ 		};
/* 000094 */ 		if (typeof stop_nodelist_condition == 'undefined' || (stop_nodelist_condition != null && stop_nodelist_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000094 */ 			var stop_nodelist_condition = null;
/* 000094 */ 		};
/* 000094 */ 		if (typeof make_child_parsing_state == 'undefined' || (make_child_parsing_state != null && make_child_parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000094 */ 			var make_child_parsing_state = null;
/* 000094 */ 		};
/* 000094 */ 		if (typeof include_stop_token_pre_space_chars == 'undefined' || (include_stop_token_pre_space_chars != null && include_stop_token_pre_space_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000094 */ 			var include_stop_token_pre_space_chars = true;
/* 000094 */ 		};
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'stop_token_condition': var stop_token_condition = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'stop_nodelist_condition': var stop_nodelist_condition = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'make_child_parsing_state': var make_child_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'include_stop_token_pre_space_chars': var include_stop_token_pre_space_chars = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000104 */ 		__call__ (__call__ (__super__, null, LatexNodesCollector, '__init__'), null, self);
/* 000106 */ 		self.latex_walker = latex_walker;
/* 000107 */ 		self.token_reader = token_reader;
/* 000109 */ 		self.stop_token_condition = stop_token_condition;
/* 000110 */ 		self.stop_nodelist_condition = stop_nodelist_condition;
/* 000112 */ 		self.include_stop_token_pre_space_chars = include_stop_token_pre_space_chars;
/* 000114 */ 		self._stop_token_condition_met = false;
/* 000116 */ 		self._stop_token_condition_met_token = null;
/* 000117 */ 		self._stop_nodelist_condition_met = false;
/* 000118 */ 		self._stop_condition_stop_data = null;
/* 000119 */ 		self._reached_end_of_stream = false;
/* 000123 */ 		self.parsing_state = parsing_state;
/* 000125 */ 		self.start_parsing_state = parsing_state;
/* 000128 */ 		self._nodelist = [];
/* 000131 */ 		self._pending_chars_pos = null;
/* 000132 */ 		self._pending_chars = '';
/* 000135 */ 		self._finalized = false;
/* 000138 */ 		self._make_child_parsing_state_fn = make_child_parsing_state;
/* 000138 */ 	});},
/* 000142 */ 	get get_final_nodelist () {return __get__ (this, function (self) {
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000148 */ 		if (__t__ (!__t__ ((self._finalized)))) {
/* 000149 */ 			var __except0__ = __call__ (RuntimeError, null, 'Call to get_final_nodelist() before finalize()');
/* 000149 */ 			__except0__.__cause__ = null;
/* 000149 */ 			throw __except0__;
/* 000149 */ 		}
/* 000151 */ 		return __call__ (LatexNodeList, null, __kwargtrans__ ({nodelist: self._nodelist, parsing_state: self.start_parsing_state}));
/* 000151 */ 	});},
/* 000157 */ 	get get_parser_carryover_info () {return __get__ (this, function (self) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000160 */ 		if (__t__ (!__t__ ((self._finalized)))) {
/* 000161 */ 			var __except0__ = __call__ (RuntimeError, null, 'Call to get_parser_carryover_info() before finalize()');
/* 000161 */ 			__except0__.__cause__ = null;
/* 000161 */ 			throw __except0__;
/* 000161 */ 		}
/* 000163 */ 		if (__t__ (self.start_parsing_state === self.parsing_state)) {
/* 000165 */ 			return null;
/* 000165 */ 		}
/* 000168 */ 		return __call__ (CarryoverInformation, null, __kwargtrans__ ({set_parsing_state: self.parsing_state}));
/* 000168 */ 	});},
/* 000171 */ 	get pos_start () {return __get__ (this, function (self) {
/* 000171 */ 		if (arguments.length) {
/* 000171 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 					switch (__attrib0__) {
/* 000171 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 		}
/* 000171 */ 		else {
/* 000171 */ 		}
/* 000176 */ 		try {
/* 000178 */ 			var p = __call__ (py_next, null, (function () {
/* 000178 */ 				var __accu0__ = [];
/* 000178 */ 				var __iterable0__ = self._nodelist;
/* 000178 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000178 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000178 */ 					if (__t__ (n !== null)) {
/* 000178 */ 						(function () {
/* 000178 */ 							var __accu1__ = __accu0__;
/* 000178 */ 							return __call__ (__accu1__.append, __accu1__, n.pos);
/* 000178 */ 						}) ();
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 				return py_iter (__accu0__);
/* 000178 */ 			}) ());
/* 000178 */ 		}
/* 000178 */ 		catch (__except0__) {
/* 000178 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000180 */ 				var p = null;
/* 000180 */ 			}
/* 000180 */ 			else {
/* 000180 */ 				throw __except0__;
/* 000180 */ 			}
/* 000180 */ 		}
/* 000181 */ 		if (__t__ (p !== null)) {
/* 000182 */ 			return p;
/* 000182 */ 		}
/* 000183 */ 		return self._pending_chars_pos;
/* 000183 */ 	});},
/* 000185 */ 	get pos_end () {return __get__ (this, function (self) {
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000190 */ 		try {
/* 000192 */ 			var lastnode = __call__ (py_next, null, (function () {
/* 000192 */ 				var __accu0__ = [];
/* 000192 */ 				var __iterable0__ = __call__ (py_reversed, null, self._nodelist);
/* 000192 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000192 */ 					if (__t__ (n !== null)) {
/* 000192 */ 						(function () {
/* 000192 */ 							var __accu1__ = __accu0__;
/* 000192 */ 							return __call__ (__accu1__.append, __accu1__, n);
/* 000192 */ 						}) ();
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 				return py_iter (__accu0__);
/* 000192 */ 			}) ());
/* 000192 */ 		}
/* 000192 */ 		catch (__except0__) {
/* 000192 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000194 */ 				var lastnode = null;
/* 000194 */ 			}
/* 000194 */ 			else {
/* 000194 */ 				throw __except0__;
/* 000194 */ 			}
/* 000194 */ 		}
/* 000195 */ 		if (__t__ (lastnode === null)) {
/* 000196 */ 			return null;
/* 000196 */ 		}
/* 000197 */ 		return lastnode.pos_end;
/* 000197 */ 	});},
/* 000200 */ 	get stop_token_condition_met () {return __get__ (this, function (self) {
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000205 */ 		return self._stop_token_condition_met;
/* 000205 */ 	});},
/* 000207 */ 	get stop_token_condition_met_token () {return __get__ (this, function (self) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000211 */ 		return self._stop_token_condition_met_token;
/* 000211 */ 	});},
/* 000213 */ 	get stop_nodelist_condition_met () {return __get__ (this, function (self) {
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000218 */ 		return self._stop_nodelist_condition_met;
/* 000218 */ 	});},
/* 000220 */ 	get stop_condition_stop_data () {return __get__ (this, function (self) {
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000225 */ 		return self._stop_condition_stop_data;
/* 000225 */ 	});},
/* 000227 */ 	get reached_end_of_stream () {return __get__ (this, function (self) {
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000231 */ 		return self._reached_end_of_stream;
/* 000231 */ 	});},
/* 000234 */ 	get is_finalized () {return __get__ (this, function (self) {
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000241 */ 		return self._finalized;
/* 000241 */ 	});},
/* 000243 */ 	get finalize () {return __get__ (this, function (self) {
/* 000243 */ 		if (arguments.length) {
/* 000243 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 					switch (__attrib0__) {
/* 000243 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 		}
/* 000243 */ 		else {
/* 000243 */ 		}
/* 000257 */ 		if (__t__ (self._finalized)) {
/* 000258 */ 			return ;
/* 000258 */ 		}
/* 000260 */ 		var exc = (function () {
/* 000260 */ 			var __accu0__ = self;
/* 000260 */ 			return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000260 */ 		}) ();
/* 000262 */ 		self._finalized = true;
/* 000264 */ 		if (__t__ (exc !== null)) {
/* 000265 */ 			var __except0__ = exc;
/* 000265 */ 			__except0__.__cause__ = null;
/* 000265 */ 			throw __except0__;
/* 000265 */ 		}
/* 000265 */ 	});},
/* 000275 */ 	get push_pending_chars () {return __get__ (this, function (self, chars, pos) {
/* 000275 */ 		if (arguments.length) {
/* 000275 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000275 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000275 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000275 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000275 */ 					switch (__attrib0__) {
/* 000275 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 					}
/* 000275 */ 				}
/* 000275 */ 			}
/* 000275 */ 		}
/* 000275 */ 		else {
/* 000275 */ 		}
/* 000283 */ 		self._pending_chars = __call__ (__iadd__, null, self._pending_chars, chars);
/* 000284 */ 		if (__t__ (self._pending_chars_pos === null)) {
/* 000285 */ 			self._pending_chars_pos = pos;
/* 000285 */ 		}
/* 000285 */ 	});},
/* 000287 */ 	get flush_pending_chars () {return __get__ (this, function (self) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000295 */ 		if (__t__ (!__t__ ((self._pending_chars)))) {
/* 000297 */ 			return null;
/* 000297 */ 		}
/* 000299 */ 		var __left0__ = tuple ([self._pending_chars_pos, self._pending_chars]);
/* 000299 */ 		var charspos = __left0__ [0];
/* 000299 */ 		var chars = __left0__ [1];
/* 000300 */ 		self._pending_chars = '';
/* 000301 */ 		self._pending_chars_pos = null;
/* 000303 */ 		var strnode = (function () {
/* 000303 */ 			var __accu0__ = self.latex_walker;
/* 000308 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: chars, pos: charspos, pos_end: __add__ (charspos, __call__ (len, null, chars))}));
/* 000308 */ 		}) ();
/* 000310 */ 		return (function () {
/* 000310 */ 			var __accu0__ = self;
/* 000310 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, strnode);
/* 000310 */ 		}) ();
/* 000310 */ 	});},
/* 000312 */ 	get push_to_nodelist () {return __get__ (this, function (self, node) {
/* 000312 */ 		if (arguments.length) {
/* 000312 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000312 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000312 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000312 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000312 */ 					switch (__attrib0__) {
/* 000312 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 					}
/* 000312 */ 				}
/* 000312 */ 			}
/* 000312 */ 		}
/* 000312 */ 		else {
/* 000312 */ 		}
/* 000319 */ 		if (__t__ (self._finalized)) {
/* 000320 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000320 */ 			__except0__.__cause__ = null;
/* 000320 */ 			throw __except0__;
/* 000320 */ 		}
/* 000322 */ 		(function () {
/* 000322 */ 			var __accu0__ = self._nodelist;
/* 000322 */ 			return __call__ (__accu0__.append, __accu0__, node);
/* 000322 */ 		}) ();
/* 000324 */ 		var exc = (function () {
/* 000324 */ 			var __accu0__ = self;
/* 000324 */ 			return __call__ (__accu0__._check_nodelist_stop_condition, __accu0__);
/* 000324 */ 		}) ();
/* 000325 */ 		if (__t__ (exc !== null)) {
/* 000326 */ 			return exc;
/* 000326 */ 		}
/* 000327 */ 		return null;
/* 000327 */ 	});},
/* 000330 */ 	get update_state_from_carryover_info () {return __get__ (this, function (self, carryover_info) {
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'carryover_info': var carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000339 */ 		if (__t__ (carryover_info !== null)) {
/* 000340 */ 			var ps = self.parsing_state;
/* 000343 */ 			self.parsing_state = (function () {
/* 000343 */ 				var __accu0__ = carryover_info;
/* 000343 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.parsing_state);
/* 000343 */ 			}) ();
/* 000345 */ 			// pass;
/* 000345 */ 		}
/* 000345 */ 	});},
/* 000355 */ 	get _check_nodelist_stop_condition () {return __get__ (this, function (self) {
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000356 */ 		var stop_nodelist_condition = self.stop_nodelist_condition;
/* 000357 */ 		if (__t__ (stop_nodelist_condition !== null)) {
/* 000358 */ 			var stop_data = __call__ (stop_nodelist_condition, null, self._nodelist);
/* 000359 */ 			if (__t__ (stop_data)) {
/* 000360 */ 				self._stop_nodelist_condition_met = true;
/* 000361 */ 				// pass;
/* 000365 */ 				return (function () {
/* 000365 */ 					var __accu0__ = LatexNodesCollector;
/* 000365 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000365 */ 				}) ();
/* 000365 */ 			}
/* 000365 */ 		}
/* 000366 */ 		return null;
/* 000366 */ 	});},
/* 000368 */ 	get _check_token_stop_condition () {return __get__ (this, function (self, tok) {
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000369 */ 		var stop_token_condition = self.stop_token_condition;
/* 000370 */ 		if (__t__ (stop_token_condition !== null)) {
/* 000371 */ 			var stop_data = __call__ (stop_token_condition, null, tok);
/* 000372 */ 			if (__t__ (stop_data)) {
/* 000373 */ 				self._stop_token_condition_met = true;
/* 000374 */ 				self._stop_token_condition_met_token = tok;
/* 000375 */ 				// pass;
/* 000380 */ 				return (function () {
/* 000380 */ 					var __accu0__ = LatexNodesCollector;
/* 000380 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000380 */ 				}) ();
/* 000380 */ 			}
/* 000380 */ 		}
/* 000381 */ 		return null;
/* 000381 */ 	});},
/* 000384 */ 	get process_tokens () {return __get__ (this, function (self) {
/* 000384 */ 		if (arguments.length) {
/* 000384 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000384 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000384 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000384 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000384 */ 					switch (__attrib0__) {
/* 000384 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 					}
/* 000384 */ 				}
/* 000384 */ 			}
/* 000384 */ 		}
/* 000384 */ 		else {
/* 000384 */ 		}
/* 000405 */ 		try {
/* 000407 */ 			while (__t__ (true)) {
/* 000408 */ 				(function () {
/* 000408 */ 					var __accu0__ = self;
/* 000408 */ 					return __call__ (__accu0__.process_one_token, __accu0__);
/* 000408 */ 				}) ();
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		catch (__except0__) {
/* 000408 */ 			if (isinstance (__except0__, LatexNodesCollector.ReachedStoppingCondition)) {
/* 000408 */ 				var e = __except0__;
/* 000412 */ 				self._stop_condition_stop_data = e.stop_data;
/* 000413 */ 				// pass;
/* 000416 */ 				return ;
/* 000416 */ 			}
/* 000416 */ 			else if (isinstance (__except0__, LatexNodesCollector.ReachedEndOfStream)) {
/* 000416 */ 				var e = __except0__;
/* 000421 */ 				self._reached_end_of_stream = true;
/* 000422 */ 				// pass;
/* 000425 */ 				return ;
/* 000425 */ 			}
/* 000425 */ 			else if (isinstance (__except0__, LatexWalkerError)) {
/* 000425 */ 				var e = __except0__;
/* 000429 */ 				__except0__.__cause__ = null;
/* 000429 */ 				throw __except0__;
/* 000429 */ 			}
/* 000429 */ 			else {
/* 000429 */ 				throw __except0__;
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		finally {
/* 000432 */ 			(function () {
/* 000432 */ 				var __accu0__ = self;
/* 000432 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000432 */ 			}) ();
/* 000432 */ 		}
/* 000432 */ 	});},
/* 000437 */ 	get process_one_token () {return __get__ (this, function (self) {
/* 000437 */ 		if (arguments.length) {
/* 000437 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000437 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000437 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000437 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000437 */ 					switch (__attrib0__) {
/* 000437 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 					}
/* 000437 */ 				}
/* 000437 */ 			}
/* 000437 */ 		}
/* 000437 */ 		else {
/* 000437 */ 		}
/* 000476 */ 		if (__t__ (self._finalized)) {
/* 000477 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000477 */ 			__except0__.__cause__ = null;
/* 000477 */ 			throw __except0__;
/* 000477 */ 		}
/* 000479 */ 		var latex_walker = self.latex_walker;
/* 000480 */ 		var token_reader = self.token_reader;
/* 000482 */ 		try {
/* 000484 */ 			var tok = (function () {
/* 000484 */ 				var __accu0__ = token_reader;
/* 000484 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 000484 */ 			}) ();
/* 000485 */ 			// pass;
/* 000485 */ 		}
/* 000485 */ 		catch (__except0__) {
/* 000485 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000485 */ 				var e = __except0__;
/* 000490 */ 				var final_space = __call__ (getattr, null, e, 'final_space', null);
/* 000491 */ 				if (__t__ (final_space)) {
/* 000493 */ 					var final_space_pos = __add__ ((function () {
/* 000493 */ 						var __accu0__ = token_reader;
/* 000493 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000493 */ 					}) (), __call__ (len, null, final_space));
/* 000494 */ 					var tok = (function () {
/* 000494 */ 						var __accu0__ = token_reader;
/* 000494 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pre_space: final_space, pos: final_space_pos, pos_end: final_space_pos}));
/* 000494 */ 					}) ();
/* 000501 */ 					(function () {
/* 000501 */ 						var __accu0__ = token_reader;
/* 000501 */ 						return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000501 */ 					}) ();
/* 000501 */ 				}
/* 000502 */ 				else {
/* 000504 */ 					var exc = (function () {
/* 000504 */ 						var __accu0__ = LatexNodesCollector;
/* 000504 */ 						return __call__ (__accu0__.ReachedEndOfStream, __accu0__);
/* 000504 */ 					}) ();
/* 000505 */ 					exc.pos_end = (function () {
/* 000505 */ 						var __accu0__ = token_reader;
/* 000505 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000505 */ 					}) ();
/* 000506 */ 					var __except1__ = exc;
/* 000506 */ 					__except1__.__cause__ = null;
/* 000506 */ 					throw __except1__;
/* 000506 */ 				}
/* 000506 */ 			}
/* 000506 */ 			else {
/* 000506 */ 				throw __except0__;
/* 000506 */ 			}
/* 000506 */ 		}
/* 000511 */ 		var stop_exc = (function () {
/* 000511 */ 			var __accu0__ = self;
/* 000511 */ 			return __call__ (__accu0__._check_token_stop_condition, __accu0__, tok);
/* 000511 */ 		}) ();
/* 000512 */ 		if (__t__ (stop_exc !== null)) {
/* 000513 */ 			if (__t__ (self.include_stop_token_pre_space_chars)) {
/* 000516 */ 				(function () {
/* 000516 */ 					var __accu0__ = self;
/* 000518 */ 					return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000518 */ 				}) ();
/* 000520 */ 				var rewind_pre_space = false;
/* 000520 */ 			}
/* 000521 */ 			else {
/* 000522 */ 				var rewind_pre_space = true;
/* 000522 */ 			}
/* 000525 */ 			(function () {
/* 000525 */ 				var __accu0__ = token_reader;
/* 000525 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: rewind_pre_space}));
/* 000525 */ 			}) ();
/* 000526 */ 			stop_exc.pos_end = tok.pos_end;
/* 000527 */ 			var __except0__ = stop_exc;
/* 000527 */ 			__except0__.__cause__ = null;
/* 000527 */ 			throw __except0__;
/* 000527 */ 		}
/* 000531 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000532 */ 			(function () {
/* 000532 */ 				var __accu0__ = self;
/* 000534 */ 				return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: __add__ (tok.pre_space, tok.arg), pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000534 */ 			}) ();
/* 000536 */ 			return ;
/* 000536 */ 		}
/* 000540 */ 		if (__t__ (self._pending_chars)) {
/* 000541 */ 			self._pending_chars = __call__ (__iadd__, null, self._pending_chars, tok.pre_space);
/* 000542 */ 			tok.pre_space = '';
/* 000543 */ 			var stop_exc = (function () {
/* 000543 */ 				var __accu0__ = self;
/* 000543 */ 				return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000543 */ 			}) ();
/* 000544 */ 			if (__t__ (stop_exc !== null)) {
/* 000548 */ 				(function () {
/* 000548 */ 					var __accu0__ = token_reader;
/* 000548 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000548 */ 				}) ();
/* 000549 */ 				stop_exc.pos_end = tok.pos;
/* 000550 */ 				var __except0__ = stop_exc;
/* 000550 */ 				__except0__.__cause__ = null;
/* 000550 */ 				throw __except0__;
/* 000550 */ 			}
/* 000550 */ 		}
/* 000557 */ 		else if (__t__ (tok.pre_space)) {
/* 000558 */ 			var spacestrnode = (function () {
/* 000558 */ 				var __accu0__ = latex_walker;
/* 000561 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), pos_end: tok.pos}));
/* 000561 */ 			}) ();
/* 000563 */ 			tok.pre_space = '';
/* 000564 */ 			var stop_exc = (function () {
/* 000564 */ 				var __accu0__ = self;
/* 000564 */ 				return __call__ (__accu0__.push_to_nodelist, __accu0__, spacestrnode);
/* 000564 */ 			}) ();
/* 000565 */ 			if (__t__ (stop_exc !== null)) {
/* 000569 */ 				(function () {
/* 000569 */ 					var __accu0__ = token_reader;
/* 000569 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000569 */ 				}) ();
/* 000570 */ 				stop_exc.pos_end = tok.pos;
/* 000571 */ 				var __except0__ = stop_exc;
/* 000571 */ 				__except0__.__cause__ = null;
/* 000571 */ 				throw __except0__;
/* 000571 */ 			}
/* 000571 */ 		}
/* 000578 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000580 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000580 */ 				var __accu0__ = 'Unexpected mismatching closing delimiter ‘{}’';
/* 000580 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000580 */ 			}) (), pos: tok.pos, recovery_past_token: tok}));
/* 000580 */ 			__except0__.__cause__ = null;
/* 000580 */ 			throw __except0__;
/* 000580 */ 		}
/* 000585 */ 		if (__t__ (__eq__ (tok.tok, 'end_environment'))) {
/* 000587 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000587 */ 				var __accu0__ = 'Unexpected closing environment: ‘{}’';
/* 000587 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000587 */ 			}) (), pos: tok.pos, recovery_past_token: tok}));
/* 000587 */ 			__except0__.__cause__ = null;
/* 000587 */ 			throw __except0__;
/* 000587 */ 		}
/* 000592 */ 		if (__t__ (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display']))) && !__in__ (tok.arg, self.parsing_state._math_delims_info_by_open))) {
/* 000596 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000596 */ 				var __accu0__ = 'Unexpected closing math mode token ‘{}’';
/* 000596 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000596 */ 			}) (), pos: tok.pos, recovery_past_token: tok}));
/* 000596 */ 			__except0__.__cause__ = null;
/* 000596 */ 			throw __except0__;
/* 000596 */ 		}
/* 000605 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000606 */ 			(function () {
/* 000606 */ 				var __accu0__ = self;
/* 000606 */ 				return __call__ (__accu0__.parse_comment_node, __accu0__, tok);
/* 000606 */ 			}) ();
/* 000607 */ 			return ;
/* 000607 */ 		}
/* 000609 */ 		else if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000611 */ 			(function () {
/* 000611 */ 				var __accu0__ = self;
/* 000611 */ 				return __call__ (__accu0__.parse_latex_group, __accu0__, tok);
/* 000611 */ 			}) ();
/* 000612 */ 			return ;
/* 000612 */ 		}
/* 000614 */ 		else if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000616 */ 			(function () {
/* 000616 */ 				var __accu0__ = self;
/* 000616 */ 				return __call__ (__accu0__.parse_macro, __accu0__, tok);
/* 000616 */ 			}) ();
/* 000617 */ 			return ;
/* 000617 */ 		}
/* 000619 */ 		else if (__t__ (__eq__ (tok.tok, 'begin_environment'))) {
/* 000621 */ 			(function () {
/* 000621 */ 				var __accu0__ = self;
/* 000621 */ 				return __call__ (__accu0__.parse_environment, __accu0__, tok);
/* 000621 */ 			}) ();
/* 000622 */ 			return ;
/* 000622 */ 		}
/* 000624 */ 		else if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000626 */ 			(function () {
/* 000626 */ 				var __accu0__ = self;
/* 000626 */ 				return __call__ (__accu0__.parse_specials, __accu0__, tok);
/* 000626 */ 			}) ();
/* 000627 */ 			return ;
/* 000627 */ 		}
/* 000629 */ 		else if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000631 */ 			(function () {
/* 000631 */ 				var __accu0__ = self;
/* 000631 */ 				return __call__ (__accu0__.parse_math, __accu0__, tok);
/* 000631 */ 			}) ();
/* 000632 */ 			return ;
/* 000632 */ 		}
/* 000633 */ 		else {
/* 000637 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000637 */ 				var __accu0__ = 'Unknown token type: {}';
/* 000637 */ 				return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000637 */ 			}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000637 */ 			__except0__.__cause__ = null;
/* 000637 */ 			throw __except0__;
/* 000637 */ 		}
/* 000637 */ 	});},
/* 000649 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000649 */ 		if (arguments.length) {
/* 000649 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000649 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000649 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000649 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000649 */ 					switch (__attrib0__) {
/* 000649 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 					}
/* 000649 */ 				}
/* 000649 */ 			}
/* 000649 */ 		}
/* 000649 */ 		else {
/* 000649 */ 		}
/* 000656 */ 		if (__t__ (self._make_child_parsing_state_fn !== null)) {
/* 000657 */ 			return (function () {
/* 000657 */ 				var __accu0__ = self;
/* 000657 */ 				return __call__ (__accu0__._make_child_parsing_state_fn, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, node_class: node_class}));
/* 000657 */ 			}) ();
/* 000657 */ 		}
/* 000659 */ 		return self.parsing_state;
/* 000659 */ 	});},
/* 000662 */ 	get parse_comment_node () {return __get__ (this, function (self, tok) {
/* 000662 */ 		if (arguments.length) {
/* 000662 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000662 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000662 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000662 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000662 */ 					switch (__attrib0__) {
/* 000662 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 					}
/* 000662 */ 				}
/* 000662 */ 			}
/* 000662 */ 		}
/* 000662 */ 		else {
/* 000662 */ 		}
/* 000676 */ 		var commentnode = (function () {
/* 000676 */ 			var __accu0__ = self.latex_walker;
/* 000676 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: self.parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000676 */ 		}) ();
/* 000685 */ 		var stop_exc = (function () {
/* 000685 */ 			var __accu0__ = self;
/* 000685 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, commentnode);
/* 000685 */ 		}) ();
/* 000686 */ 		if (__t__ (stop_exc !== null)) {
/* 000687 */ 			stop_exc.pos_end = tok.pos_end;
/* 000688 */ 			var __except0__ = stop_exc;
/* 000688 */ 			__except0__.__cause__ = null;
/* 000688 */ 			throw __except0__;
/* 000688 */ 		}
/* 000688 */ 	});},
/* 000691 */ 	get parse_latex_group () {return __get__ (this, function (self, tok) {
/* 000691 */ 		if (arguments.length) {
/* 000691 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000691 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000691 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000691 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000691 */ 					switch (__attrib0__) {
/* 000691 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 					}
/* 000691 */ 				}
/* 000691 */ 			}
/* 000691 */ 		}
/* 000691 */ 		else {
/* 000691 */ 		}
/* 000707 */ 		// pass;
/* 000711 */ 		(function () {
/* 000711 */ 			var __accu0__ = self.token_reader;
/* 000711 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000711 */ 		}) ();
/* 000714 */ 		var __left0__ = (function () {
/* 000714 */ 			var __accu0__ = self.latex_walker;
/* 000715 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000715 */ 				var __accu1__ = self.latex_walker;
/* 000715 */ 				return __call__ (__accu1__.make_latex_group_parser, __accu1__, __kwargtrans__ ({delimiters: tok.arg}));
/* 000719 */ 			}) (), __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000719 */ 				var __accu1__ = self;
/* 000719 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, LatexGroupNode);
/* 000719 */ 			}) ()}));
/* 000719 */ 		}) ();
/* 000719 */ 		var groupnode = __left0__ [0];
/* 000719 */ 		var carryover_info = __left0__ [1];
/* 000723 */ 		if (__t__ (carryover_info !== null)) {
/* 000724 */ 			(function () {
/* 000724 */ 				var __accu0__ = logger;
/* 000724 */ 				return __call__ (__accu0__.warning, __accu0__, 'carryover_info is ignored after parsing a LaTeX group: %r', carryover_info);
/* 000724 */ 			}) ();
/* 000724 */ 		}
/* 000727 */ 		var stop_exc = (function () {
/* 000727 */ 			var __accu0__ = self;
/* 000727 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, groupnode);
/* 000727 */ 		}) ();
/* 000728 */ 		if (__t__ (stop_exc !== null)) {
/* 000729 */ 			stop_exc.pos_end = groupnode.pos_end;
/* 000730 */ 			var __except0__ = stop_exc;
/* 000730 */ 			__except0__.__cause__ = null;
/* 000730 */ 			throw __except0__;
/* 000730 */ 		}
/* 000732 */ 		// pass;
/* 000732 */ 	});},
/* 000737 */ 	get parse_macro () {return __get__ (this, function (self, tok) {
/* 000737 */ 		if (arguments.length) {
/* 000737 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000737 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000737 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000737 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000737 */ 					switch (__attrib0__) {
/* 000737 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 					}
/* 000737 */ 				}
/* 000737 */ 			}
/* 000737 */ 		}
/* 000737 */ 		else {
/* 000737 */ 		}
/* 000752 */ 		var macroname = tok.arg;
/* 000754 */ 		var mspec = null;
/* 000755 */ 		if (__t__ (self.parsing_state.latex_context !== null)) {
/* 000756 */ 			var mspec = (function () {
/* 000756 */ 				var __accu0__ = self.parsing_state.latex_context;
/* 000756 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000756 */ 			}) ();
/* 000756 */ 		}
/* 000758 */ 		if (__t__ (mspec === null)) {
/* 000759 */ 			var exc = (function () {
/* 000759 */ 				var __accu0__ = self.latex_walker;
/* 000761 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000761 */ 					var __accu1__ = 'Encountered unknown macro ‘\\{}’';
/* 000761 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000761 */ 				}) (), pos: tok.pos})));
/* 000761 */ 			}) ();
/* 000765 */ 			if (__t__ (exc !== null)) {
/* 000766 */ 				var __except0__ = exc;
/* 000766 */ 				__except0__.__cause__ = null;
/* 000766 */ 				throw __except0__;
/* 000766 */ 			}
/* 000767 */ 			var mspec = null;
/* 000767 */ 		}
/* 000769 */ 		var node_class = LatexMacroNode;
/* 000770 */ 		var what = (function () {
/* 000770 */ 			var __accu0__ = 'macro ‘\\{}’';
/* 000770 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000770 */ 		}) ();
/* 000772 */ 		return (function () {
/* 000772 */ 			var __accu0__ = self;
/* 000772 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, mspec, node_class, what);
/* 000772 */ 		}) ();
/* 000772 */ 	});},
/* 000774 */ 	get parse_environment () {return __get__ (this, function (self, tok) {
/* 000774 */ 		if (arguments.length) {
/* 000774 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000774 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000774 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000774 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000774 */ 					switch (__attrib0__) {
/* 000774 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 					}
/* 000774 */ 				}
/* 000774 */ 			}
/* 000774 */ 		}
/* 000774 */ 		else {
/* 000774 */ 		}
/* 000790 */ 		var latex_walker = self.latex_walker;
/* 000793 */ 		var environmentname = tok.arg;
/* 000797 */ 		var envspec = (function () {
/* 000797 */ 			var __accu0__ = self.parsing_state.latex_context;
/* 000797 */ 			return __call__ (__accu0__.get_environment_spec, __accu0__, environmentname);
/* 000797 */ 		}) ();
/* 000799 */ 		if (__t__ (envspec === null)) {
/* 000800 */ 			var exc = (function () {
/* 000800 */ 				var __accu0__ = latex_walker;
/* 000802 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000802 */ 					var __accu1__ = 'Encountered unknown environment ‘{{{}}}’';
/* 000802 */ 					return __call__ (__accu1__.format, __accu1__, environmentname);
/* 000802 */ 				}) (), pos: tok.pos})));
/* 000802 */ 			}) ();
/* 000806 */ 			if (__t__ (exc !== null)) {
/* 000807 */ 				var __except0__ = exc;
/* 000807 */ 				__except0__.__cause__ = null;
/* 000807 */ 				throw __except0__;
/* 000807 */ 			}
/* 000808 */ 			var envspec = null;
/* 000808 */ 		}
/* 000810 */ 		var node_class = LatexEnvironmentNode;
/* 000811 */ 		var what = (function () {
/* 000811 */ 			var __accu0__ = 'environment ‘{{{}}}’';
/* 000811 */ 			return __call__ (__accu0__.format, __accu0__, environmentname);
/* 000811 */ 		}) ();
/* 000813 */ 		return (function () {
/* 000813 */ 			var __accu0__ = self;
/* 000813 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, envspec, node_class, what);
/* 000813 */ 		}) ();
/* 000813 */ 	});},
/* 000815 */ 	get parse_specials () {return __get__ (this, function (self, tok) {
/* 000815 */ 		if (arguments.length) {
/* 000815 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000815 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000815 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000815 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000815 */ 					switch (__attrib0__) {
/* 000815 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 					}
/* 000815 */ 				}
/* 000815 */ 			}
/* 000815 */ 		}
/* 000815 */ 		else {
/* 000815 */ 		}
/* 000829 */ 		var specials_spec = tok.arg;
/* 000831 */ 		var node_class = LatexSpecialsNode;
/* 000832 */ 		var what = (function () {
/* 000832 */ 			var __accu0__ = 'specials ‘{}’';
/* 000832 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (getattr, null, specials_spec, 'specials_chars', '<unkonwn>'));
/* 000832 */ 		}) ();
/* 000834 */ 		return (function () {
/* 000834 */ 			var __accu0__ = self;
/* 000834 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, specials_spec, node_class, what);
/* 000834 */ 		}) ();
/* 000834 */ 	});},
/* 000836 */ 	get parse_invocable_token_type () {return __get__ (this, function (self, tok, spec, node_class, what) {
/* 000836 */ 		if (arguments.length) {
/* 000836 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000836 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000836 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000836 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000836 */ 					switch (__attrib0__) {
/* 000836 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 					}
/* 000836 */ 				}
/* 000836 */ 			}
/* 000836 */ 		}
/* 000836 */ 		else {
/* 000836 */ 		}
/* 000856 */ 		var latex_walker = self.latex_walker;
/* 000857 */ 		var token_reader = self.token_reader;
/* 000859 */ 		if (__t__ (spec !== null)) {
/* 000860 */ 			var node_parser = (function () {
/* 000860 */ 				var __accu0__ = spec;
/* 000860 */ 				return __call__ (__accu0__.get_node_parser, __accu0__, tok);
/* 000860 */ 			}) ();
/* 000860 */ 		}
/* 000861 */ 		else {
/* 000862 */ 			var node_parser = null;
/* 000862 */ 		}
/* 000864 */ 		if (__t__ (node_parser === null)) {
/* 000866 */ 			var exc = (function () {
/* 000866 */ 				var __accu0__ = latex_walker;
/* 000868 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000868 */ 					var __accu1__ = 'No parser found for callable token {!r}';
/* 000868 */ 					return __call__ (__accu1__.format, __accu1__, tok);
/* 000868 */ 				}) (), pos: tok.pos})));
/* 000868 */ 			}) ();
/* 000872 */ 			if (__t__ (exc !== null)) {
/* 000873 */ 				var __except0__ = exc;
/* 000873 */ 				__except0__.__cause__ = null;
/* 000873 */ 				throw __except0__;
/* 000873 */ 			}
/* 000874 */ 			var result_node = null;
/* 000875 */ 			var carryover_info = null;
/* 000875 */ 		}
/* 000876 */ 		else {
/* 000879 */ 			var __left0__ = (function () {
/* 000879 */ 				var __accu0__ = latex_walker;
/* 000882 */ 				return __call__ (__accu0__.parse_content, __accu0__, node_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: (function () {
/* 000882 */ 					var __accu1__ = self;
/* 000882 */ 					return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, node_class);
/* 000882 */ 				}) (), open_context: tuple ([what, tok])}));
/* 000882 */ 			}) ();
/* 000882 */ 			var result_node = __left0__ [0];
/* 000882 */ 			var carryover_info = __left0__ [1];
/* 000882 */ 		}
/* 000886 */ 		(function () {
/* 000886 */ 			var __accu0__ = self;
/* 000886 */ 			return __call__ (__accu0__.update_state_from_carryover_info, __accu0__, carryover_info);
/* 000886 */ 		}) ();
/* 000888 */ 		if (__t__ (result_node === null)) {
/* 000889 */ 			(function () {
/* 000889 */ 				var __accu0__ = logger;
/* 000889 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parser %r produced no node (None) for token %r', node_parser, tok);
/* 000889 */ 			}) ();
/* 000890 */ 			return ;
/* 000890 */ 		}
/* 000892 */ 		var exc = (function () {
/* 000892 */ 			var __accu0__ = self;
/* 000892 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, result_node);
/* 000892 */ 		}) ();
/* 000893 */ 		if (__t__ (exc !== null)) {
/* 000894 */ 			exc.pos_end = result_node.pos_end;
/* 000895 */ 			var __except0__ = exc;
/* 000895 */ 			__except0__.__cause__ = null;
/* 000895 */ 			throw __except0__;
/* 000895 */ 		}
/* 000895 */ 	});},
/* 000898 */ 	get parse_math () {return __get__ (this, function (self, tok) {
/* 000898 */ 		if (arguments.length) {
/* 000898 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000898 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000898 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000898 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000898 */ 					switch (__attrib0__) {
/* 000898 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 					}
/* 000898 */ 				}
/* 000898 */ 			}
/* 000898 */ 		}
/* 000898 */ 		else {
/* 000898 */ 		}
/* 000914 */ 		(function () {
/* 000914 */ 			var __accu0__ = self.token_reader;
/* 000914 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000914 */ 		}) ();
/* 000916 */ 		var math_parsing_state = (function () {
/* 000916 */ 			var __accu0__ = self.parsing_state;
/* 000916 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: tok.arg}));
/* 000916 */ 		}) ();
/* 000923 */ 		var __left0__ = (function () {
/* 000923 */ 			var __accu0__ = self.latex_walker;
/* 000924 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000924 */ 				var __accu1__ = self.latex_walker;
/* 000924 */ 				return __call__ (__accu1__.make_latex_math_parser, __accu1__, __kwargtrans__ ({math_mode_delimiters: tok.arg}));
/* 000928 */ 			}) (), __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000928 */ 				var __accu1__ = self;
/* 000928 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, math_parsing_state, LatexMathNode);
/* 000928 */ 			}) ()}));
/* 000928 */ 		}) ();
/* 000928 */ 		var mathnode = __left0__ [0];
/* 000928 */ 		var carryover_info = __left0__ [1];
/* 000932 */ 		if (__t__ (carryover_info !== null)) {
/* 000933 */ 			(function () {
/* 000933 */ 				var __accu0__ = logger;
/* 000933 */ 				return __call__ (__accu0__.warning, __accu0__, 'carryover_info is ignored after parsing a LaTeX math: %r', carryover_info);
/* 000933 */ 			}) ();
/* 000933 */ 		}
/* 000936 */ 		if (__t__ (mathnode === null)) {
/* 000937 */ 			(function () {
/* 000937 */ 				var __accu0__ = logger;
/* 000937 */ 				return __call__ (__accu0__.warning, __accu0__, 'Math parser produced no node (None) for token %r', tok);
/* 000937 */ 			}) ();
/* 000938 */ 			return ;
/* 000938 */ 		}
/* 000940 */ 		var stop_exc = (function () {
/* 000940 */ 			var __accu0__ = self;
/* 000940 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, mathnode);
/* 000940 */ 		}) ();
/* 000941 */ 		if (__t__ (stop_exc !== null)) {
/* 000942 */ 			stop_exc.pos_end = mathnode.pos_end;
/* 000943 */ 			var __except0__ = stop_exc;
/* 000943 */ 			__except0__.__cause__ = null;
/* 000943 */ 			throw __except0__;
/* 000943 */ 		}
/* 000943 */ 	});}
/* 000943 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._nodescollector.map