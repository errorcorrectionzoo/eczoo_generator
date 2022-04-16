/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 19:37:14
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {CarryoverInformation} from './pylatexenc.latexnodes._carryoverinfo.js';
/* 000041 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexSpecialsNode, ParsedMacroArgs, __all__, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, _basestring} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexGroupNode, LatexCommentNode, LatexWalkerError, LatexNodeList, LatexMathNode, LatexWalkerParseError, LatexMacroNode, CarryoverInformation, LatexWalkerTokenParseError, _unicode_from_str, LatexWalkerEndOfStream, LatexCharsNode, LatexSpecialsNode, LatexNode, LatexWalkerNodesParseError, _basestring, __all__, LatexEnvironmentNode, ParsedMacroArgs, _update_posposend_from_nodelist};
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
/* 000176 */ 		var p = __call__ (py_next, null, (function () {
/* 000176 */ 			var __accu0__ = [];
/* 000176 */ 			var __iterable0__ = self._nodelist;
/* 000176 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000176 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000176 */ 				if (__t__ (n !== null)) {
/* 000176 */ 					(function () {
/* 000176 */ 						var __accu1__ = __accu0__;
/* 000176 */ 						return __call__ (__accu1__.append, __accu1__, n.pos);
/* 000176 */ 					}) ();
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 			return py_iter (__accu0__);
/* 000176 */ 		}) (), null);
/* 000177 */ 		if (__t__ (p !== null)) {
/* 000178 */ 			return p;
/* 000178 */ 		}
/* 000179 */ 		return self._pending_chars_pos;
/* 000179 */ 	});},
/* 000181 */ 	get pos_end () {return __get__ (this, function (self) {
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
/* 000186 */ 		var lastnode = __call__ (py_next, null, (function () {
/* 000186 */ 			var __accu0__ = [];
/* 000186 */ 			var __iterable0__ = __call__ (py_reversed, null, self._nodelist);
/* 000186 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000186 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000186 */ 				if (__t__ (n !== null)) {
/* 000186 */ 					(function () {
/* 000186 */ 						var __accu1__ = __accu0__;
/* 000186 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000186 */ 					}) ();
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 			return py_iter (__accu0__);
/* 000186 */ 		}) (), null);
/* 000187 */ 		if (__t__ (lastnode === null)) {
/* 000188 */ 			return null;
/* 000188 */ 		}
/* 000189 */ 		return lastnode.pos_end;
/* 000189 */ 	});},
/* 000192 */ 	get stop_token_condition_met () {return __get__ (this, function (self) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000197 */ 		return self._stop_token_condition_met;
/* 000197 */ 	});},
/* 000199 */ 	get stop_token_condition_met_token () {return __get__ (this, function (self) {
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000203 */ 		return self._stop_token_condition_met_token;
/* 000203 */ 	});},
/* 000205 */ 	get stop_nodelist_condition_met () {return __get__ (this, function (self) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000210 */ 		return self._stop_nodelist_condition_met;
/* 000210 */ 	});},
/* 000212 */ 	get stop_condition_stop_data () {return __get__ (this, function (self) {
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
/* 000217 */ 		return self._stop_condition_stop_data;
/* 000217 */ 	});},
/* 000219 */ 	get reached_end_of_stream () {return __get__ (this, function (self) {
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000223 */ 		return self._reached_end_of_stream;
/* 000223 */ 	});},
/* 000226 */ 	get is_finalized () {return __get__ (this, function (self) {
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000233 */ 		return self._finalized;
/* 000233 */ 	});},
/* 000235 */ 	get finalize () {return __get__ (this, function (self) {
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
/* 000249 */ 		if (__t__ (self._finalized)) {
/* 000250 */ 			return ;
/* 000250 */ 		}
/* 000252 */ 		var exc = (function () {
/* 000252 */ 			var __accu0__ = self;
/* 000252 */ 			return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000252 */ 		}) ();
/* 000254 */ 		self._finalized = true;
/* 000256 */ 		if (__t__ (exc !== null)) {
/* 000257 */ 			var __except0__ = exc;
/* 000257 */ 			__except0__.__cause__ = null;
/* 000257 */ 			throw __except0__;
/* 000257 */ 		}
/* 000257 */ 	});},
/* 000267 */ 	get push_pending_chars () {return __get__ (this, function (self, chars, pos) {
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000275 */ 		self._pending_chars = __call__ (__iadd__, null, self._pending_chars, chars);
/* 000276 */ 		if (__t__ (self._pending_chars_pos === null)) {
/* 000277 */ 			self._pending_chars_pos = pos;
/* 000277 */ 		}
/* 000277 */ 	});},
/* 000279 */ 	get flush_pending_chars () {return __get__ (this, function (self) {
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000287 */ 		if (__t__ (!__t__ ((self._pending_chars)))) {
/* 000289 */ 			return null;
/* 000289 */ 		}
/* 000291 */ 		var __left0__ = tuple ([self._pending_chars_pos, self._pending_chars]);
/* 000291 */ 		var charspos = __left0__ [0];
/* 000291 */ 		var chars = __left0__ [1];
/* 000292 */ 		self._pending_chars = '';
/* 000293 */ 		self._pending_chars_pos = null;
/* 000295 */ 		var strnode = (function () {
/* 000295 */ 			var __accu0__ = self.latex_walker;
/* 000300 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: chars, pos: charspos, pos_end: __add__ (charspos, __call__ (len, null, chars))}));
/* 000300 */ 		}) ();
/* 000302 */ 		return (function () {
/* 000302 */ 			var __accu0__ = self;
/* 000302 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, strnode);
/* 000302 */ 		}) ();
/* 000302 */ 	});},
/* 000304 */ 	get push_to_nodelist () {return __get__ (this, function (self, node) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000311 */ 		if (__t__ (self._finalized)) {
/* 000312 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000312 */ 			__except0__.__cause__ = null;
/* 000312 */ 			throw __except0__;
/* 000312 */ 		}
/* 000314 */ 		(function () {
/* 000314 */ 			var __accu0__ = self._nodelist;
/* 000314 */ 			return __call__ (__accu0__.append, __accu0__, node);
/* 000314 */ 		}) ();
/* 000316 */ 		var exc = (function () {
/* 000316 */ 			var __accu0__ = self;
/* 000316 */ 			return __call__ (__accu0__._check_nodelist_stop_condition, __accu0__);
/* 000316 */ 		}) ();
/* 000317 */ 		if (__t__ (exc !== null)) {
/* 000318 */ 			return exc;
/* 000318 */ 		}
/* 000319 */ 		return null;
/* 000319 */ 	});},
/* 000322 */ 	get update_state_from_carryover_info () {return __get__ (this, function (self, carryover_info) {
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'carryover_info': var carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000331 */ 		if (__t__ (carryover_info !== null)) {
/* 000332 */ 			var ps = self.parsing_state;
/* 000335 */ 			self.parsing_state = (function () {
/* 000335 */ 				var __accu0__ = carryover_info;
/* 000335 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.parsing_state);
/* 000335 */ 			}) ();
/* 000337 */ 			// pass;
/* 000337 */ 		}
/* 000337 */ 	});},
/* 000347 */ 	get _check_nodelist_stop_condition () {return __get__ (this, function (self) {
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 		}
/* 000348 */ 		var stop_nodelist_condition = self.stop_nodelist_condition;
/* 000349 */ 		if (__t__ (stop_nodelist_condition !== null)) {
/* 000350 */ 			var stop_data = __call__ (stop_nodelist_condition, null, self._nodelist);
/* 000351 */ 			if (__t__ (stop_data)) {
/* 000352 */ 				self._stop_nodelist_condition_met = true;
/* 000353 */ 				// pass;
/* 000357 */ 				return (function () {
/* 000357 */ 					var __accu0__ = LatexNodesCollector;
/* 000357 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000357 */ 				}) ();
/* 000357 */ 			}
/* 000357 */ 		}
/* 000358 */ 		return null;
/* 000358 */ 	});},
/* 000360 */ 	get _check_token_stop_condition () {return __get__ (this, function (self, tok) {
/* 000360 */ 		if (arguments.length) {
/* 000360 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 					switch (__attrib0__) {
/* 000360 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000360 */ 		else {
/* 000360 */ 		}
/* 000361 */ 		var stop_token_condition = self.stop_token_condition;
/* 000362 */ 		if (__t__ (stop_token_condition !== null)) {
/* 000363 */ 			var stop_data = __call__ (stop_token_condition, null, tok);
/* 000364 */ 			if (__t__ (stop_data)) {
/* 000365 */ 				self._stop_token_condition_met = true;
/* 000366 */ 				self._stop_token_condition_met_token = tok;
/* 000367 */ 				// pass;
/* 000372 */ 				return (function () {
/* 000372 */ 					var __accu0__ = LatexNodesCollector;
/* 000372 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000372 */ 				}) ();
/* 000372 */ 			}
/* 000372 */ 		}
/* 000373 */ 		return null;
/* 000373 */ 	});},
/* 000376 */ 	get process_tokens () {return __get__ (this, function (self) {
/* 000376 */ 		if (arguments.length) {
/* 000376 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000376 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000376 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000376 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000376 */ 					switch (__attrib0__) {
/* 000376 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 					}
/* 000376 */ 				}
/* 000376 */ 			}
/* 000376 */ 		}
/* 000376 */ 		else {
/* 000376 */ 		}
/* 000397 */ 		try {
/* 000399 */ 			while (__t__ (true)) {
/* 000400 */ 				(function () {
/* 000400 */ 					var __accu0__ = self;
/* 000400 */ 					return __call__ (__accu0__.process_one_token, __accu0__);
/* 000400 */ 				}) ();
/* 000400 */ 			}
/* 000400 */ 		}
/* 000400 */ 		catch (__except0__) {
/* 000400 */ 			if (isinstance (__except0__, LatexNodesCollector.ReachedStoppingCondition)) {
/* 000400 */ 				var e = __except0__;
/* 000404 */ 				self._stop_condition_stop_data = e.stop_data;
/* 000405 */ 				// pass;
/* 000408 */ 				return ;
/* 000408 */ 			}
/* 000408 */ 			else if (isinstance (__except0__, LatexNodesCollector.ReachedEndOfStream)) {
/* 000408 */ 				var e = __except0__;
/* 000413 */ 				self._reached_end_of_stream = true;
/* 000414 */ 				// pass;
/* 000417 */ 				return ;
/* 000417 */ 			}
/* 000417 */ 			else if (isinstance (__except0__, LatexWalkerError)) {
/* 000417 */ 				var e = __except0__;
/* 000421 */ 				__except0__.__cause__ = null;
/* 000421 */ 				throw __except0__;
/* 000421 */ 			}
/* 000421 */ 			else {
/* 000421 */ 				throw __except0__;
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		finally {
/* 000424 */ 			(function () {
/* 000424 */ 				var __accu0__ = self;
/* 000424 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000424 */ 			}) ();
/* 000424 */ 		}
/* 000424 */ 	});},
/* 000429 */ 	get process_one_token () {return __get__ (this, function (self) {
/* 000429 */ 		if (arguments.length) {
/* 000429 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 					switch (__attrib0__) {
/* 000429 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					}
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		else {
/* 000429 */ 		}
/* 000468 */ 		if (__t__ (self._finalized)) {
/* 000469 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000469 */ 			__except0__.__cause__ = null;
/* 000469 */ 			throw __except0__;
/* 000469 */ 		}
/* 000471 */ 		var latex_walker = self.latex_walker;
/* 000472 */ 		var token_reader = self.token_reader;
/* 000474 */ 		try {
/* 000476 */ 			var tok = (function () {
/* 000476 */ 				var __accu0__ = token_reader;
/* 000476 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 000476 */ 			}) ();
/* 000477 */ 			// pass;
/* 000477 */ 		}
/* 000477 */ 		catch (__except0__) {
/* 000477 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000477 */ 				var e = __except0__;
/* 000482 */ 				var final_space = __call__ (getattr, null, e, 'final_space', null);
/* 000483 */ 				if (__t__ (final_space)) {
/* 000485 */ 					var final_space_pos = __add__ ((function () {
/* 000485 */ 						var __accu0__ = token_reader;
/* 000485 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000485 */ 					}) (), __call__ (len, null, final_space));
/* 000486 */ 					var tok = (function () {
/* 000486 */ 						var __accu0__ = token_reader;
/* 000486 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pre_space: final_space, pos: final_space_pos, pos_end: final_space_pos}));
/* 000486 */ 					}) ();
/* 000493 */ 					(function () {
/* 000493 */ 						var __accu0__ = token_reader;
/* 000493 */ 						return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000493 */ 					}) ();
/* 000493 */ 				}
/* 000494 */ 				else {
/* 000496 */ 					var exc = (function () {
/* 000496 */ 						var __accu0__ = LatexNodesCollector;
/* 000496 */ 						return __call__ (__accu0__.ReachedEndOfStream, __accu0__);
/* 000496 */ 					}) ();
/* 000497 */ 					exc.pos_end = (function () {
/* 000497 */ 						var __accu0__ = token_reader;
/* 000497 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000497 */ 					}) ();
/* 000498 */ 					var __except1__ = exc;
/* 000498 */ 					__except1__.__cause__ = null;
/* 000498 */ 					throw __except1__;
/* 000498 */ 				}
/* 000498 */ 			}
/* 000498 */ 			else {
/* 000498 */ 				throw __except0__;
/* 000498 */ 			}
/* 000498 */ 		}
/* 000503 */ 		var stop_exc = (function () {
/* 000503 */ 			var __accu0__ = self;
/* 000503 */ 			return __call__ (__accu0__._check_token_stop_condition, __accu0__, tok);
/* 000503 */ 		}) ();
/* 000504 */ 		if (__t__ (stop_exc !== null)) {
/* 000505 */ 			if (__t__ (self.include_stop_token_pre_space_chars)) {
/* 000508 */ 				(function () {
/* 000508 */ 					var __accu0__ = self;
/* 000510 */ 					return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000510 */ 				}) ();
/* 000512 */ 				var rewind_pre_space = false;
/* 000512 */ 			}
/* 000513 */ 			else {
/* 000514 */ 				var rewind_pre_space = true;
/* 000514 */ 			}
/* 000517 */ 			(function () {
/* 000517 */ 				var __accu0__ = token_reader;
/* 000517 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: rewind_pre_space}));
/* 000517 */ 			}) ();
/* 000518 */ 			stop_exc.pos_end = tok.pos_end;
/* 000519 */ 			var __except0__ = stop_exc;
/* 000519 */ 			__except0__.__cause__ = null;
/* 000519 */ 			throw __except0__;
/* 000519 */ 		}
/* 000523 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000524 */ 			(function () {
/* 000524 */ 				var __accu0__ = self;
/* 000526 */ 				return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: __add__ (tok.pre_space, tok.arg), pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000526 */ 			}) ();
/* 000528 */ 			return ;
/* 000528 */ 		}
/* 000532 */ 		if (__t__ (self._pending_chars)) {
/* 000533 */ 			self._pending_chars = __call__ (__iadd__, null, self._pending_chars, tok.pre_space);
/* 000534 */ 			tok.pre_space = '';
/* 000535 */ 			var stop_exc = (function () {
/* 000535 */ 				var __accu0__ = self;
/* 000535 */ 				return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000535 */ 			}) ();
/* 000536 */ 			if (__t__ (stop_exc !== null)) {
/* 000540 */ 				(function () {
/* 000540 */ 					var __accu0__ = token_reader;
/* 000540 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000540 */ 				}) ();
/* 000541 */ 				stop_exc.pos_end = tok.pos;
/* 000542 */ 				var __except0__ = stop_exc;
/* 000542 */ 				__except0__.__cause__ = null;
/* 000542 */ 				throw __except0__;
/* 000542 */ 			}
/* 000542 */ 		}
/* 000549 */ 		else if (__t__ (tok.pre_space)) {
/* 000550 */ 			var spacestrnode = (function () {
/* 000550 */ 				var __accu0__ = latex_walker;
/* 000553 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), pos_end: tok.pos}));
/* 000553 */ 			}) ();
/* 000555 */ 			tok.pre_space = '';
/* 000556 */ 			var stop_exc = (function () {
/* 000556 */ 				var __accu0__ = self;
/* 000556 */ 				return __call__ (__accu0__.push_to_nodelist, __accu0__, spacestrnode);
/* 000556 */ 			}) ();
/* 000557 */ 			if (__t__ (stop_exc !== null)) {
/* 000561 */ 				(function () {
/* 000561 */ 					var __accu0__ = token_reader;
/* 000561 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000561 */ 				}) ();
/* 000562 */ 				stop_exc.pos_end = tok.pos;
/* 000563 */ 				var __except0__ = stop_exc;
/* 000563 */ 				__except0__.__cause__ = null;
/* 000563 */ 				throw __except0__;
/* 000563 */ 			}
/* 000563 */ 		}
/* 000570 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000572 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000572 */ 				var __accu0__ = 'Unexpected mismatching closing delimiter ‘{}’';
/* 000572 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000572 */ 			}) (), pos: tok.pos, recovery_past_token: tok}));
/* 000572 */ 			__except0__.__cause__ = null;
/* 000572 */ 			throw __except0__;
/* 000572 */ 		}
/* 000577 */ 		if (__t__ (__eq__ (tok.tok, 'end_environment'))) {
/* 000579 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000579 */ 				var __accu0__ = 'Unexpected closing environment: ‘{}’';
/* 000579 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000579 */ 			}) (), pos: tok.pos, recovery_past_token: tok}));
/* 000579 */ 			__except0__.__cause__ = null;
/* 000579 */ 			throw __except0__;
/* 000579 */ 		}
/* 000584 */ 		if (__t__ (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display']))) && !__in__ (tok.arg, self.parsing_state._math_delims_info_by_open))) {
/* 000588 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000588 */ 				var __accu0__ = 'Unexpected closing math mode token ‘{}’';
/* 000588 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000588 */ 			}) (), pos: tok.pos, recovery_past_token: tok}));
/* 000588 */ 			__except0__.__cause__ = null;
/* 000588 */ 			throw __except0__;
/* 000588 */ 		}
/* 000597 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000598 */ 			(function () {
/* 000598 */ 				var __accu0__ = self;
/* 000598 */ 				return __call__ (__accu0__.parse_comment_node, __accu0__, tok);
/* 000598 */ 			}) ();
/* 000599 */ 			return ;
/* 000599 */ 		}
/* 000601 */ 		else if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000603 */ 			(function () {
/* 000603 */ 				var __accu0__ = self;
/* 000603 */ 				return __call__ (__accu0__.parse_latex_group, __accu0__, tok);
/* 000603 */ 			}) ();
/* 000604 */ 			return ;
/* 000604 */ 		}
/* 000606 */ 		else if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000608 */ 			(function () {
/* 000608 */ 				var __accu0__ = self;
/* 000608 */ 				return __call__ (__accu0__.parse_macro, __accu0__, tok);
/* 000608 */ 			}) ();
/* 000609 */ 			return ;
/* 000609 */ 		}
/* 000611 */ 		else if (__t__ (__eq__ (tok.tok, 'begin_environment'))) {
/* 000613 */ 			(function () {
/* 000613 */ 				var __accu0__ = self;
/* 000613 */ 				return __call__ (__accu0__.parse_environment, __accu0__, tok);
/* 000613 */ 			}) ();
/* 000614 */ 			return ;
/* 000614 */ 		}
/* 000616 */ 		else if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000618 */ 			(function () {
/* 000618 */ 				var __accu0__ = self;
/* 000618 */ 				return __call__ (__accu0__.parse_specials, __accu0__, tok);
/* 000618 */ 			}) ();
/* 000619 */ 			return ;
/* 000619 */ 		}
/* 000621 */ 		else if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000623 */ 			(function () {
/* 000623 */ 				var __accu0__ = self;
/* 000623 */ 				return __call__ (__accu0__.parse_math, __accu0__, tok);
/* 000623 */ 			}) ();
/* 000624 */ 			return ;
/* 000624 */ 		}
/* 000625 */ 		else {
/* 000629 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000629 */ 				var __accu0__ = 'Unknown token type: {}';
/* 000629 */ 				return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000629 */ 			}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000629 */ 			__except0__.__cause__ = null;
/* 000629 */ 			throw __except0__;
/* 000629 */ 		}
/* 000629 */ 	});},
/* 000641 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000641 */ 		if (arguments.length) {
/* 000641 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000641 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000641 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000641 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000641 */ 					switch (__attrib0__) {
/* 000641 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000641 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000641 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000641 */ 					}
/* 000641 */ 				}
/* 000641 */ 			}
/* 000641 */ 		}
/* 000641 */ 		else {
/* 000641 */ 		}
/* 000648 */ 		if (__t__ (self._make_child_parsing_state_fn !== null)) {
/* 000649 */ 			return (function () {
/* 000649 */ 				var __accu0__ = self;
/* 000649 */ 				return __call__ (__accu0__._make_child_parsing_state_fn, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, node_class: node_class}));
/* 000649 */ 			}) ();
/* 000649 */ 		}
/* 000651 */ 		return self.parsing_state;
/* 000651 */ 	});},
/* 000654 */ 	get parse_comment_node () {return __get__ (this, function (self, tok) {
/* 000654 */ 		if (arguments.length) {
/* 000654 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000654 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000654 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000654 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000654 */ 					switch (__attrib0__) {
/* 000654 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000654 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000654 */ 					}
/* 000654 */ 				}
/* 000654 */ 			}
/* 000654 */ 		}
/* 000654 */ 		else {
/* 000654 */ 		}
/* 000668 */ 		var commentnode = (function () {
/* 000668 */ 			var __accu0__ = self.latex_walker;
/* 000668 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: self.parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000668 */ 		}) ();
/* 000677 */ 		var stop_exc = (function () {
/* 000677 */ 			var __accu0__ = self;
/* 000677 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, commentnode);
/* 000677 */ 		}) ();
/* 000678 */ 		if (__t__ (stop_exc !== null)) {
/* 000679 */ 			stop_exc.pos_end = tok.pos_end;
/* 000680 */ 			var __except0__ = stop_exc;
/* 000680 */ 			__except0__.__cause__ = null;
/* 000680 */ 			throw __except0__;
/* 000680 */ 		}
/* 000680 */ 	});},
/* 000683 */ 	get parse_latex_group () {return __get__ (this, function (self, tok) {
/* 000683 */ 		if (arguments.length) {
/* 000683 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000683 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000683 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000683 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000683 */ 					switch (__attrib0__) {
/* 000683 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 					}
/* 000683 */ 				}
/* 000683 */ 			}
/* 000683 */ 		}
/* 000683 */ 		else {
/* 000683 */ 		}
/* 000699 */ 		// pass;
/* 000703 */ 		(function () {
/* 000703 */ 			var __accu0__ = self.token_reader;
/* 000703 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000703 */ 		}) ();
/* 000706 */ 		var __left0__ = (function () {
/* 000706 */ 			var __accu0__ = self.latex_walker;
/* 000707 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000707 */ 				var __accu1__ = self.latex_walker;
/* 000707 */ 				return __call__ (__accu1__.make_latex_group_parser, __accu1__, __kwargtrans__ ({delimiters: tok.arg}));
/* 000711 */ 			}) (), __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000711 */ 				var __accu1__ = self;
/* 000711 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, LatexGroupNode);
/* 000711 */ 			}) ()}));
/* 000711 */ 		}) ();
/* 000711 */ 		var groupnode = __left0__ [0];
/* 000711 */ 		var carryover_info = __left0__ [1];
/* 000715 */ 		if (__t__ (carryover_info !== null)) {
/* 000716 */ 			(function () {
/* 000716 */ 				var __accu0__ = logger;
/* 000716 */ 				return __call__ (__accu0__.warning, __accu0__, 'carryover_info is ignored after parsing a LaTeX group: %r', carryover_info);
/* 000716 */ 			}) ();
/* 000716 */ 		}
/* 000719 */ 		var stop_exc = (function () {
/* 000719 */ 			var __accu0__ = self;
/* 000719 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, groupnode);
/* 000719 */ 		}) ();
/* 000720 */ 		if (__t__ (stop_exc !== null)) {
/* 000721 */ 			stop_exc.pos_end = groupnode.pos_end;
/* 000722 */ 			var __except0__ = stop_exc;
/* 000722 */ 			__except0__.__cause__ = null;
/* 000722 */ 			throw __except0__;
/* 000722 */ 		}
/* 000724 */ 		// pass;
/* 000724 */ 	});},
/* 000729 */ 	get parse_macro () {return __get__ (this, function (self, tok) {
/* 000729 */ 		if (arguments.length) {
/* 000729 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000729 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000729 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000729 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000729 */ 					switch (__attrib0__) {
/* 000729 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 					}
/* 000729 */ 				}
/* 000729 */ 			}
/* 000729 */ 		}
/* 000729 */ 		else {
/* 000729 */ 		}
/* 000744 */ 		var macroname = tok.arg;
/* 000746 */ 		var mspec = null;
/* 000747 */ 		if (__t__ (self.parsing_state.latex_context !== null)) {
/* 000748 */ 			var mspec = (function () {
/* 000748 */ 				var __accu0__ = self.parsing_state.latex_context;
/* 000748 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000748 */ 			}) ();
/* 000748 */ 		}
/* 000750 */ 		if (__t__ (mspec === null)) {
/* 000751 */ 			var exc = (function () {
/* 000751 */ 				var __accu0__ = self.latex_walker;
/* 000753 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000753 */ 					var __accu1__ = 'Encountered unknown macro ‘\\{}’';
/* 000753 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000753 */ 				}) (), pos: tok.pos})));
/* 000753 */ 			}) ();
/* 000757 */ 			if (__t__ (exc !== null)) {
/* 000758 */ 				var __except0__ = exc;
/* 000758 */ 				__except0__.__cause__ = null;
/* 000758 */ 				throw __except0__;
/* 000758 */ 			}
/* 000759 */ 			var mspec = null;
/* 000759 */ 		}
/* 000761 */ 		var node_class = LatexMacroNode;
/* 000762 */ 		var what = (function () {
/* 000762 */ 			var __accu0__ = 'macro ‘\\{}’';
/* 000762 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000762 */ 		}) ();
/* 000764 */ 		return (function () {
/* 000764 */ 			var __accu0__ = self;
/* 000764 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, mspec, node_class, what);
/* 000764 */ 		}) ();
/* 000764 */ 	});},
/* 000766 */ 	get parse_environment () {return __get__ (this, function (self, tok) {
/* 000766 */ 		if (arguments.length) {
/* 000766 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000766 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000766 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000766 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000766 */ 					switch (__attrib0__) {
/* 000766 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000766 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000766 */ 					}
/* 000766 */ 				}
/* 000766 */ 			}
/* 000766 */ 		}
/* 000766 */ 		else {
/* 000766 */ 		}
/* 000782 */ 		var latex_walker = self.latex_walker;
/* 000785 */ 		var environmentname = tok.arg;
/* 000789 */ 		var envspec = (function () {
/* 000789 */ 			var __accu0__ = self.parsing_state.latex_context;
/* 000789 */ 			return __call__ (__accu0__.get_environment_spec, __accu0__, environmentname);
/* 000789 */ 		}) ();
/* 000791 */ 		if (__t__ (envspec === null)) {
/* 000792 */ 			var exc = (function () {
/* 000792 */ 				var __accu0__ = latex_walker;
/* 000794 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000794 */ 					var __accu1__ = 'Encountered unknown environment ‘{{{}}}’';
/* 000794 */ 					return __call__ (__accu1__.format, __accu1__, environmentname);
/* 000794 */ 				}) (), pos: tok.pos})));
/* 000794 */ 			}) ();
/* 000798 */ 			if (__t__ (exc !== null)) {
/* 000799 */ 				var __except0__ = exc;
/* 000799 */ 				__except0__.__cause__ = null;
/* 000799 */ 				throw __except0__;
/* 000799 */ 			}
/* 000800 */ 			var envspec = null;
/* 000800 */ 		}
/* 000802 */ 		var node_class = LatexEnvironmentNode;
/* 000803 */ 		var what = (function () {
/* 000803 */ 			var __accu0__ = 'environment ‘{{{}}}’';
/* 000803 */ 			return __call__ (__accu0__.format, __accu0__, environmentname);
/* 000803 */ 		}) ();
/* 000805 */ 		return (function () {
/* 000805 */ 			var __accu0__ = self;
/* 000805 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, envspec, node_class, what);
/* 000805 */ 		}) ();
/* 000805 */ 	});},
/* 000807 */ 	get parse_specials () {return __get__ (this, function (self, tok) {
/* 000807 */ 		if (arguments.length) {
/* 000807 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000807 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000807 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000807 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000807 */ 					switch (__attrib0__) {
/* 000807 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 					}
/* 000807 */ 				}
/* 000807 */ 			}
/* 000807 */ 		}
/* 000807 */ 		else {
/* 000807 */ 		}
/* 000821 */ 		var specials_spec = tok.arg;
/* 000823 */ 		var node_class = LatexSpecialsNode;
/* 000824 */ 		var what = (function () {
/* 000824 */ 			var __accu0__ = 'specials ‘{}’';
/* 000824 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (getattr, null, specials_spec, 'specials_chars', '<unkonwn>'));
/* 000824 */ 		}) ();
/* 000826 */ 		return (function () {
/* 000826 */ 			var __accu0__ = self;
/* 000826 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, specials_spec, node_class, what);
/* 000826 */ 		}) ();
/* 000826 */ 	});},
/* 000828 */ 	get parse_invocable_token_type () {return __get__ (this, function (self, tok, spec, node_class, what) {
/* 000828 */ 		if (arguments.length) {
/* 000828 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000828 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000828 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000828 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000828 */ 					switch (__attrib0__) {
/* 000828 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000828 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000828 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000828 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000828 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000828 */ 					}
/* 000828 */ 				}
/* 000828 */ 			}
/* 000828 */ 		}
/* 000828 */ 		else {
/* 000828 */ 		}
/* 000848 */ 		var latex_walker = self.latex_walker;
/* 000849 */ 		var token_reader = self.token_reader;
/* 000851 */ 		if (__t__ (spec !== null)) {
/* 000852 */ 			var node_parser = (function () {
/* 000852 */ 				var __accu0__ = spec;
/* 000852 */ 				return __call__ (__accu0__.get_node_parser, __accu0__, tok);
/* 000852 */ 			}) ();
/* 000852 */ 		}
/* 000853 */ 		else {
/* 000854 */ 			var node_parser = null;
/* 000854 */ 		}
/* 000856 */ 		if (__t__ (node_parser === null)) {
/* 000858 */ 			var exc = (function () {
/* 000858 */ 				var __accu0__ = latex_walker;
/* 000860 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000860 */ 					var __accu1__ = 'No parser found for callable token {!r}';
/* 000860 */ 					return __call__ (__accu1__.format, __accu1__, tok);
/* 000860 */ 				}) (), pos: tok.pos})));
/* 000860 */ 			}) ();
/* 000864 */ 			if (__t__ (exc !== null)) {
/* 000865 */ 				var __except0__ = exc;
/* 000865 */ 				__except0__.__cause__ = null;
/* 000865 */ 				throw __except0__;
/* 000865 */ 			}
/* 000866 */ 			var result_node = null;
/* 000867 */ 			var carryover_info = null;
/* 000867 */ 		}
/* 000868 */ 		else {
/* 000871 */ 			var __left0__ = (function () {
/* 000871 */ 				var __accu0__ = latex_walker;
/* 000874 */ 				return __call__ (__accu0__.parse_content, __accu0__, node_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: (function () {
/* 000874 */ 					var __accu1__ = self;
/* 000874 */ 					return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, node_class);
/* 000874 */ 				}) (), open_context: tuple ([what, tok])}));
/* 000874 */ 			}) ();
/* 000874 */ 			var result_node = __left0__ [0];
/* 000874 */ 			var carryover_info = __left0__ [1];
/* 000874 */ 		}
/* 000878 */ 		(function () {
/* 000878 */ 			var __accu0__ = self;
/* 000878 */ 			return __call__ (__accu0__.update_state_from_carryover_info, __accu0__, carryover_info);
/* 000878 */ 		}) ();
/* 000880 */ 		if (__t__ (result_node === null)) {
/* 000881 */ 			(function () {
/* 000881 */ 				var __accu0__ = logger;
/* 000881 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parser %r produced no node (None) for token %r', node_parser, tok);
/* 000881 */ 			}) ();
/* 000882 */ 			return ;
/* 000882 */ 		}
/* 000884 */ 		var exc = (function () {
/* 000884 */ 			var __accu0__ = self;
/* 000884 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, result_node);
/* 000884 */ 		}) ();
/* 000885 */ 		if (__t__ (exc !== null)) {
/* 000886 */ 			exc.pos_end = result_node.pos_end;
/* 000887 */ 			var __except0__ = exc;
/* 000887 */ 			__except0__.__cause__ = null;
/* 000887 */ 			throw __except0__;
/* 000887 */ 		}
/* 000887 */ 	});},
/* 000890 */ 	get parse_math () {return __get__ (this, function (self, tok) {
/* 000890 */ 		if (arguments.length) {
/* 000890 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000890 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000890 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000890 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000890 */ 					switch (__attrib0__) {
/* 000890 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000890 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000890 */ 					}
/* 000890 */ 				}
/* 000890 */ 			}
/* 000890 */ 		}
/* 000890 */ 		else {
/* 000890 */ 		}
/* 000906 */ 		(function () {
/* 000906 */ 			var __accu0__ = self.token_reader;
/* 000906 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000906 */ 		}) ();
/* 000908 */ 		var math_parsing_state = (function () {
/* 000908 */ 			var __accu0__ = self.parsing_state;
/* 000908 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: tok.arg}));
/* 000908 */ 		}) ();
/* 000915 */ 		var __left0__ = (function () {
/* 000915 */ 			var __accu0__ = self.latex_walker;
/* 000916 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000916 */ 				var __accu1__ = self.latex_walker;
/* 000916 */ 				return __call__ (__accu1__.make_latex_math_parser, __accu1__, __kwargtrans__ ({math_mode_delimiters: tok.arg}));
/* 000920 */ 			}) (), __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000920 */ 				var __accu1__ = self;
/* 000920 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, math_parsing_state, LatexMathNode);
/* 000920 */ 			}) ()}));
/* 000920 */ 		}) ();
/* 000920 */ 		var mathnode = __left0__ [0];
/* 000920 */ 		var carryover_info = __left0__ [1];
/* 000924 */ 		if (__t__ (carryover_info !== null)) {
/* 000925 */ 			(function () {
/* 000925 */ 				var __accu0__ = logger;
/* 000925 */ 				return __call__ (__accu0__.warning, __accu0__, 'carryover_info is ignored after parsing a LaTeX math: %r', carryover_info);
/* 000925 */ 			}) ();
/* 000925 */ 		}
/* 000928 */ 		if (__t__ (mathnode === null)) {
/* 000929 */ 			(function () {
/* 000929 */ 				var __accu0__ = logger;
/* 000929 */ 				return __call__ (__accu0__.warning, __accu0__, 'Math parser produced no node (None) for token %r', tok);
/* 000929 */ 			}) ();
/* 000930 */ 			return ;
/* 000930 */ 		}
/* 000932 */ 		var stop_exc = (function () {
/* 000932 */ 			var __accu0__ = self;
/* 000932 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, mathnode);
/* 000932 */ 		}) ();
/* 000933 */ 		if (__t__ (stop_exc !== null)) {
/* 000934 */ 			stop_exc.pos_end = mathnode.pos_end;
/* 000935 */ 			var __except0__ = stop_exc;
/* 000935 */ 			__except0__.__cause__ = null;
/* 000935 */ 			throw __except0__;
/* 000935 */ 		}
/* 000935 */ 	});}
/* 000935 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._nodescollector.map