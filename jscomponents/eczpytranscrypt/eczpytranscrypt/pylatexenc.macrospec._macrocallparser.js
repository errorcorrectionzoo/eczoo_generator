/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 00:56:58
/* 000036 */ var logging = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000041 */ import {LatexGeneralNodesParser, LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000040 */ import {LatexEnvironmentNode, LatexMacroNode, LatexSpecialsNode} from './pylatexenc.latexnodes.nodes.js';
/* 000036 */ import * as __module_logging__ from './logging.js';
/* 000036 */ __nest__ (logging, '', __module_logging__);
/* 000036 */ export {LatexSpecialsNode, LatexEnvironmentNode, LatexGeneralNodesParser, LatexMacroNode, LatexParserBase};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._macrocallparser';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000045 */ export var _LatexCallableParserBase =  __class__ ('_LatexCallableParserBase', [LatexParserBase], {
/* 000045 */ 	__module__: __name__,
/* 000046 */ 	get __init__ () {return __get__ (this, function (self, token_call, spec_object, what, node_class, node_extra_kwargs, parse_body) {
/* 000046 */ 		if (typeof parse_body == 'undefined' || (parse_body != null && parse_body.hasOwnProperty ("__kwargtrans__"))) {;
/* 000046 */ 			var parse_body = false;
/* 000046 */ 		};
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'spec_object': var spec_object = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'node_extra_kwargs': var node_extra_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'parse_body': var parse_body = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000055 */ 		self.token_call = token_call;
/* 000056 */ 		self.spec_object = spec_object;
/* 000057 */ 		self.what = what;
/* 000058 */ 		self.node_class = node_class;
/* 000059 */ 		self.node_extra_kwargs = node_extra_kwargs;
/* 000061 */ 		self.arguments_parser = self.spec_object.arguments_parser;
/* 000063 */ 		self.parse_body = parse_body;
/* 000065 */ 		self.make_carryover_info = self.spec_object.make_carryover_info;
/* 000065 */ 	});},
/* 000068 */ 	get parse_call_arguments () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000068 */ 		var kwargs = dict ();
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 				delete kwargs.__kwargtrans__;
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000070 */ 		var __left0__ = (function () {
/* 000070 */ 			var __accu0__ = latex_walker;
/* 000070 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.arguments_parser, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000070 */ 		}) ();
/* 000070 */ 		var nodeargd = __left0__ [0];
/* 000070 */ 		var carryover_info = __left0__ [1];
/* 000080 */ 		return tuple ([nodeargd, carryover_info]);
/* 000080 */ 	});},
/* 000082 */ 	get make_body_parser_and_parsing_state () {return __get__ (this, function (self, nodeargd, arg_carryover_info, parsing_state) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'arg_carryover_info': var arg_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000083 */ 		var __except0__ = __call__ (RuntimeError, null, 'No default implementation of make_body_parser_and_parsing_state() in base class');
/* 000083 */ 		__except0__.__cause__ = null;
/* 000083 */ 		throw __except0__;
/* 000083 */ 	});},
/* 000086 */ 	get parse_call_body () {return __get__ (this, function (self, nodeargd, arg_carryover_info, latex_walker, token_reader, parsing_state) {
/* 000086 */ 		var kwargs = dict ();
/* 000086 */ 		if (arguments.length) {
/* 000086 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 					switch (__attrib0__) {
/* 000086 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'arg_carryover_info': var arg_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000086 */ 					}
/* 000086 */ 				}
/* 000086 */ 				delete kwargs.__kwargtrans__;
/* 000086 */ 			}
/* 000086 */ 		}
/* 000086 */ 		else {
/* 000086 */ 		}
/* 000090 */ 		var __left0__ = (function () {
/* 000090 */ 			var __accu0__ = self;
/* 000090 */ 			return __call__ (__accu0__.make_body_parser_and_parsing_state, __accu0__, nodeargd, arg_carryover_info, parsing_state);
/* 000090 */ 		}) ();
/* 000090 */ 		var body_parser = __left0__ [0];
/* 000090 */ 		var body_parsing_state = __left0__ [1];
/* 000092 */ 		var __left0__ = (function () {
/* 000092 */ 			var __accu0__ = latex_walker;
/* 000092 */ 			return __call__ (__accu0__.parse_content, __accu0__, body_parser, token_reader, body_parsing_state, __kwargtrans__ (kwargs));
/* 000092 */ 		}) ();
/* 000092 */ 		var nodelist = __left0__ [0];
/* 000092 */ 		var carryover_info = __left0__ [1];
/* 000102 */ 		return tuple ([nodelist, carryover_info]);
/* 000102 */ 	});},
/* 000105 */ 	get __call__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000105 */ 		var kwargs = dict ();
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 				delete kwargs.__kwargtrans__;
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000107 */ 		var pos_start = self.token_call.pos;
/* 000110 */ 		if (__t__ (self.arguments_parser !== null)) {
/* 000111 */ 			var __left0__ = (function () {
/* 000111 */ 				var __accu0__ = self;
/* 000111 */ 				return __call__ (__accu0__.parse_call_arguments, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000111 */ 			}) ();
/* 000111 */ 			var nodeargd = __left0__ [0];
/* 000111 */ 			var arg_carryover_info = __left0__ [1];
/* 000111 */ 		}
/* 000112 */ 		else {
/* 000115 */ 			var __left0__ = tuple ([null, null]);
/* 000115 */ 			var nodeargd = __left0__ [0];
/* 000115 */ 			var arg_carryover_info = __left0__ [1];
/* 000115 */ 		}
/* 000117 */ 		// pass;
/* 000123 */ 		if (__t__ (self.parse_body)) {
/* 000124 */ 			var __left0__ = (function () {
/* 000124 */ 				var __accu0__ = self;
/* 000124 */ 				return __call__ (__accu0__.parse_call_body, __accu0__, nodeargd, arg_carryover_info, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000124 */ 			}) ();
/* 000124 */ 			var body_nodelist = __left0__ [0];
/* 000124 */ 			var body_carryover_info = __left0__ [1];
/* 000124 */ 		}
/* 000125 */ 		else {
/* 000130 */ 			if (__t__ (arg_carryover_info !== null)) {
/* 000131 */ 				(function () {
/* 000131 */ 					var __accu0__ = logger;
/* 000131 */ 					return __call__ (__accu0__.warning, __accu0__, 'Parsing carry-over information (%r) ignored after arguments to %s!', arg_carryover_info, self.what);
/* 000131 */ 				}) ();
/* 000131 */ 			}
/* 000137 */ 			var body_nodelist = null;
/* 000138 */ 			var body_carryover_info = null;
/* 000138 */ 		}
/* 000140 */ 		if (__t__ (body_carryover_info !== null)) {
/* 000141 */ 			(function () {
/* 000141 */ 				var __accu0__ = logger;
/* 000141 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parsing carry-over information (%r) ignored after body!', body_carryover_info);
/* 000141 */ 			}) ();
/* 000141 */ 		}
/* 000147 */ 		var pos_end = (function () {
/* 000147 */ 			var __accu0__ = token_reader;
/* 000147 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000147 */ 		}) ();
/* 000149 */ 		var node_kwargs = __call__ (dict, null, self.node_extra_kwargs);
/* 000150 */ 		if (__t__ (self.parse_body)) {
/* 000151 */ 			__setitem__ (node_kwargs, 'nodelist', body_nodelist);
/* 000151 */ 		}
/* 000153 */ 		var node = (function () {
/* 000153 */ 			var __accu0__ = latex_walker;
/* 000153 */ 			return __call__ (__accu0__.make_node, __accu0__, self.node_class, __kwargtrans__ (__mergekwargtrans__ ({parsing_state: parsing_state, spec: self.spec_object, nodeargd: nodeargd, pos: pos_start, pos_end: pos_end}, node_kwargs)));
/* 000153 */ 		}) ();
/* 000167 */ 		(function () {
/* 000167 */ 			var __accu0__ = self.spec_object;
/* 000167 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000167 */ 		}) ();
/* 000169 */ 		var carryover_info = (function () {
/* 000169 */ 			var __accu0__ = self;
/* 000169 */ 			return __call__ (__accu0__.make_carryover_info, __accu0__, __kwargtrans__ ({parsed_node: node}));
/* 000169 */ 		}) ();
/* 000171 */ 		// pass;
/* 000176 */ 		return tuple ([node, carryover_info]);
/* 000176 */ 	});}
/* 000176 */ });
/* 000181 */ export var LatexMacroCallParser =  __class__ ('LatexMacroCallParser', [_LatexCallableParserBase], {
/* 000181 */ 	__module__: __name__,
/* 000183 */ 	get __init__ () {return __get__ (this, function (self, token_call, macrospec) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'macrospec': var macrospec = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		var macroname = token_call.arg;
/* 000185 */ 		var macro_post_space = token_call.post_space;
/* 000189 */ 		__call__ (__call__ (__super__, null, LatexMacroCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: macrospec, what: (function () {
/* 000189 */ 			var __accu0__ = 'macro call (\\{})';
/* 000189 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000191 */ 		}) (), node_class: LatexMacroNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({macroname: macroname, macro_post_space: macro_post_space}))}));
/* 000194 */ 		self.macroname = macroname;
/* 000195 */ 		self.macro_post_space = macro_post_space;
/* 000195 */ 	});}
/* 000195 */ });
/* 000198 */ export var LatexEnvironmentCallParser =  __class__ ('LatexEnvironmentCallParser', [_LatexCallableParserBase], {
/* 000198 */ 	__module__: __name__,
/* 000200 */ 	get __init__ () {return __get__ (this, function (self, token_call, environmentspec) {
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'environmentspec': var environmentspec = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000201 */ 		var environmentname = token_call.arg;
/* 000205 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: environmentspec, what: (function () {
/* 000205 */ 			var __accu0__ = 'environment {{{}}}';
/* 000205 */ 			return __call__ (__accu0__.format, __accu0__, environmentname);
/* 000208 */ 		}) (), parse_body: true, node_class: LatexEnvironmentNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({environmentname: environmentname}))}));
/* 000210 */ 		self.environmentname = environmentname;
/* 000210 */ 	});},
/* 000212 */ 	get make_body_parser_and_parsing_state () {return __get__ (this, function (self, nodeargd, arg_carryover_info, parsing_state) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'arg_carryover_info': var arg_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000213 */ 		if (__t__ (arg_carryover_info !== null)) {
/* 000214 */ 			(function () {
/* 000214 */ 				var __accu0__ = logger;
/* 000214 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parsing carry-over information (%r) ignored after arguments to %s!', arg_carryover_info, self.what);
/* 000214 */ 			}) ();
/* 000214 */ 		}
/* 000220 */ 		if (__t__ (self.spec_object.body_parser !== null)) {
/* 000221 */ 			var parser = self.spec_object.body_parser;
/* 000221 */ 		}
/* 000222 */ 		else {
/* 000225 */ 			var parser = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: self._parse_body_token_stop_condition, handle_stop_condition_token: self._handle_stop_condition_token}));
/* 000225 */ 		}
/* 000231 */ 		var body_parsing_state = (function () {
/* 000231 */ 			var __accu0__ = self;
/* 000231 */ 			return __call__ (__accu0__.make_body_parsing_state, __accu0__, nodeargd, arg_carryover_info, parsing_state);
/* 000231 */ 		}) ();
/* 000233 */ 		return tuple ([parser, body_parsing_state]);
/* 000233 */ 	});},
/* 000235 */ 	get make_body_parsing_state () {return __get__ (this, function (self, nodeargd, arg_carryover_info, parsing_state) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'arg_carryover_info': var arg_carryover_info = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000237 */ 		if (__t__ (__t__ (arg_carryover_info !== null) && arg_carryover_info.inner_parsing_state !== null)) {
/* 000240 */ 			var parsing_state = arg_carryover_info.inner_parsing_state;
/* 000240 */ 		}
/* 000242 */ 		var kw = dict ({});
/* 000243 */ 		if (__t__ (self.spec_object.is_math_mode !== null)) {
/* 000244 */ 			(function () {
/* 000244 */ 				var __accu0__ = kw;
/* 000244 */ 				return __call__ (__accu0__.py_update, __accu0__, __kwargtrans__ ({in_math_mode: self.spec_object.is_math_mode}));
/* 000244 */ 			}) ();
/* 000244 */ 		}
/* 000246 */ 		if (__t__ (kw)) {
/* 000247 */ 			return (function () {
/* 000247 */ 				var __accu0__ = parsing_state;
/* 000247 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kw));
/* 000247 */ 			}) ();
/* 000247 */ 		}
/* 000248 */ 		return parsing_state;
/* 000248 */ 	});},
/* 000250 */ 	get _handle_stop_condition_token () {return __get__ (this, function (self, t, latex_walker, token_reader, parsing_state) {
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000251 */ 		(function () {
/* 000251 */ 			var __accu0__ = token_reader;
/* 000251 */ 			return __call__ (__accu0__.move_past_token, __accu0__, t);
/* 000251 */ 		}) ();
/* 000251 */ 	});},
/* 000253 */ 	get _parse_body_token_stop_condition () {return __get__ (this, function (self, t) {
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000254 */ 		if (__t__ (__t__ (__eq__ (t.tok, 'end_environment')) && __eq__ (t.arg, self.environmentname))) {
/* 000255 */ 			return true;
/* 000255 */ 		}
/* 000256 */ 		return false;
/* 000256 */ 	});}
/* 000256 */ });
/* 000260 */ export var LatexSpecialsCallParser =  __class__ ('LatexSpecialsCallParser', [_LatexCallableParserBase], {
/* 000260 */ 	__module__: __name__,
/* 000262 */ 	get __init__ () {return __get__ (this, function (self, token_call, specialsspec) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'specialsspec': var specialsspec = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		var specials_chars = specialsspec.specials_chars;
/* 000267 */ 		__call__ (__call__ (__super__, null, LatexSpecialsCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: specialsspec, what: (function () {
/* 000267 */ 			var __accu0__ = 'specials ‘{}’';
/* 000267 */ 			return __call__ (__accu0__.format, __accu0__, specials_chars);
/* 000269 */ 		}) (), node_class: LatexSpecialsNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({specials_chars: specials_chars}))}));
/* 000271 */ 		self.specials_chars = specials_chars;
/* 000271 */ 	});}
/* 000271 */ });
/* 000036 */ 
//# sourceMappingURL=pylatexenc.macrospec._macrocallparser.map