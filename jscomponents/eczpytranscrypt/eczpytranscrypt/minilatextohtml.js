/* 000001 */ // Transcrypt'ed from Python, 2022-04-16 00:56:57
/* 000005 */ var html = {};
/* 000005 */ var logging = {};
/* 000005 */ var re = {};
/* 000005 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {LatexArgumentSpec} from './pylatexenc.macrospec.js';
/* 000024 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000017 */ import {LatexCharsCommaSeparatedListParser, LatexCharsGroupParser, LatexDelimitedVerbatimParser, LatexGeneralNodesParser, LatexVerbatimEnvironmentContentsParser} from './pylatexenc.latexnodes.parsers.js';
/* 000016 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000016 */ import * as latexwalker from './pylatexenc.latexwalker.js';
/* 000016 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000012 */ import * as __module_logging__ from './logging.js';
/* 000012 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_html__ from './html.js';
/* 000006 */ __nest__ (html, '', __module_html__);
/* 000005 */ import * as __module_re__ from './re.js';
/* 000005 */ __nest__ (re, '', __module_re__);
/* 000005 */ export {macrospec, LatexDelimitedVerbatimParser, latexnodes, nodes, LatexGeneralNodesParser, latexwalker, LatexArgumentSpec, LatexVerbatimEnvironmentContentsParser, LatexCharsGroupParser, LatexCharsCommaSeparatedListParser};
/* 000001 */ var __name__ = 'minilatextohtml';
/* 000008 */ export var htmlescape = function (x) {
/* 000008 */ 	if (arguments.length) {
/* 000008 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000008 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000008 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000008 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000008 */ 				switch (__attrib0__) {
/* 000008 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000008 */ 				}
/* 000008 */ 			}
/* 000008 */ 		}
/* 000008 */ 	}
/* 000008 */ 	else {
/* 000008 */ 	}
/* 000009 */ 	return __call__ (str, null, (function () {
/* 000009 */ 		var __accu0__ = html;
/* 000009 */ 		return __call__ (__accu0__.escape, __accu0__, x);
/* 000009 */ 	}) ());
/* 000009 */ };
/* 000013 */ export var logger = (function () {
/* 000013 */ 	var __accu0__ = logging;
/* 000013 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000013 */ }) ();
/* 000041 */ export var make_item_to_html = function (item_to_html) {
/* 000041 */ 	if (arguments.length) {
/* 000041 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 				switch (__attrib0__) {
/* 000041 */ 					case 'item_to_html': var item_to_html = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 	}
/* 000041 */ 	else {
/* 000041 */ 	}
/* 000042 */ 	if (__t__ (item_to_html === null)) {
/* 000043 */ 		return __call__ (ItemToHtmlVerbatim, null);
/* 000043 */ 	}
/* 000044 */ 	else if (__t__ (__call__ (isinstance, null, item_to_html, str))) {
/* 000045 */ 		return __call__ (ItemToHtmlConst, null, item_to_html);
/* 000045 */ 	}
/* 000046 */ 	else {
/* 000047 */ 		return item_to_html;
/* 000047 */ 	}
/* 000047 */ };
/* 000050 */ export var MiniHtmlMacroSpec =  __class__ ('MiniHtmlMacroSpec', [macrospec.MacroSpec], {
/* 000050 */ 	__module__: __name__,
/* 000051 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list, item_to_html) {
/* 000051 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000051 */ 			var arguments_spec_list = null;
/* 000051 */ 		};
/* 000051 */ 		if (typeof item_to_html == 'undefined' || (item_to_html != null && item_to_html.hasOwnProperty ("__kwargtrans__"))) {;
/* 000051 */ 			var item_to_html = null;
/* 000051 */ 		};
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'item_to_html': var item_to_html = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000052 */ 		__call__ (__call__ (__super__, null, MiniHtmlMacroSpec, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: arguments_spec_list}));
/* 000056 */ 		self.item_to_html = __call__ (make_item_to_html, null, item_to_html);
/* 000056 */ 	});}
/* 000056 */ });
/* 000058 */ export var MiniHtmlEnvironmentSpec =  __class__ ('MiniHtmlEnvironmentSpec', [macrospec.EnvironmentSpec], {
/* 000058 */ 	__module__: __name__,
/* 000059 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list, body_parser, item_to_html) {
/* 000059 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000059 */ 			var arguments_spec_list = null;
/* 000059 */ 		};
/* 000059 */ 		if (typeof body_parser == 'undefined' || (body_parser != null && body_parser.hasOwnProperty ("__kwargtrans__"))) {;
/* 000059 */ 			var body_parser = null;
/* 000059 */ 		};
/* 000059 */ 		if (typeof item_to_html == 'undefined' || (item_to_html != null && item_to_html.hasOwnProperty ("__kwargtrans__"))) {;
/* 000059 */ 			var item_to_html = null;
/* 000059 */ 		};
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'body_parser': var body_parser = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'item_to_html': var item_to_html = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000061 */ 		__call__ (__call__ (__super__, null, MiniHtmlEnvironmentSpec, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: arguments_spec_list, body_parser: body_parser}));
/* 000066 */ 		self.item_to_html = __call__ (make_item_to_html, null, item_to_html);
/* 000066 */ 	});}
/* 000066 */ });
/* 000068 */ export var MiniHtmlSpecialsSpec =  __class__ ('MiniHtmlSpecialsSpec', [macrospec.SpecialsSpec], {
/* 000068 */ 	__module__: __name__,
/* 000069 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list, item_to_html) {
/* 000069 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000069 */ 			var arguments_spec_list = null;
/* 000069 */ 		};
/* 000069 */ 		if (typeof item_to_html == 'undefined' || (item_to_html != null && item_to_html.hasOwnProperty ("__kwargtrans__"))) {;
/* 000069 */ 			var item_to_html = null;
/* 000069 */ 		};
/* 000069 */ 		if (arguments.length) {
/* 000069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 					switch (__attrib0__) {
/* 000069 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'item_to_html': var item_to_html = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 					}
/* 000069 */ 				}
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 		else {
/* 000069 */ 		}
/* 000070 */ 		__call__ (__call__ (__super__, null, MiniHtmlSpecialsSpec, '__init__'), null, self, specials_chars, __kwargtrans__ ({arguments_spec_list: arguments_spec_list}));
/* 000074 */ 		self.item_to_html = __call__ (make_item_to_html, null, item_to_html);
/* 000074 */ 	});}
/* 000074 */ });
/* 000081 */ export var html_wrap_in_tag = function (tagname, htmlcontent) {
/* 000081 */ 	var attrs = null;
/* 000081 */ 	var class_ = null;
/* 000081 */ 	if (arguments.length) {
/* 000081 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 				switch (__attrib0__) {
/* 000081 */ 					case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					case 'htmlcontent': var htmlcontent = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					case 'class_': var class_ = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 	}
/* 000081 */ 	else {
/* 000081 */ 	}
/* 000082 */ 	var s = '<{}'.format (tagname);
/* 000083 */ 	if (__t__ (attrs)) {
/* 000084 */ 		var __iterable0__ = (function () {
/* 000084 */ 			var __accu0__ = attrs;
/* 000084 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000084 */ 		}) ();
/* 000084 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000084 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000084 */ 			var aname = __left0__ [0];
/* 000084 */ 			var aval = __left0__ [1];
/* 000085 */ 			var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, __call__ (htmlescape, null, aval)));
/* 000085 */ 		}
/* 000085 */ 	}
/* 000086 */ 	if (__t__ (class_)) {
/* 000087 */ 		var s = __call__ (__iadd__, null, s, ' class="{}"'.format (__call__ (htmlescape, null, class_)));
/* 000087 */ 	}
/* 000088 */ 	var s = __call__ (__iadd__, null, s, '>');
/* 000089 */ 	var s = __call__ (__iadd__, null, s, __call__ (str, null, htmlcontent));
/* 000090 */ 	var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000092 */ 	return s;
/* 000092 */ };
/* 000096 */ export var ItemToHtmlBase =  __class__ ('ItemToHtmlBase', [object], {
/* 000096 */ 	__module__: __name__,
/* 000097 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000098 */ 		var __except0__ = __call__ (RuntimeError, null, 'subclasses should reimplement me!');
/* 000098 */ 		__except0__.__cause__ = null;
/* 000098 */ 		throw __except0__;
/* 000098 */ 	});},
/* 000100 */ 	get get_as () {return __get__ (this, function (self, node, doccontext, fmt) {
/* 000100 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000100 */ 			var fmt = 'html';
/* 000100 */ 		};
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000101 */ 		if (__t__ (__eq__ (fmt, 'html'))) {
/* 000102 */ 			return __call__ (self, null, node, doccontext);
/* 000102 */ 		}
/* 000103 */ 		if (__t__ (__eq__ (fmt, 'text'))) {
/* 000104 */ 			return (function () {
/* 000104 */ 				var __accu0__ = self;
/* 000104 */ 				return __call__ (__accu0__.as_text, __accu0__, node, doccontext);
/* 000104 */ 			}) ();
/* 000104 */ 		}
/* 000105 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid format ‘{}’'.format (fmt));
/* 000105 */ 		__except0__.__cause__ = null;
/* 000105 */ 		throw __except0__;
/* 000105 */ 	});},
/* 000107 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000108 */ 		return (function () {
/* 000108 */ 			var __accu0__ = html;
/* 000108 */ 			return __call__ (__accu0__.unescape, __accu0__, __call__ (self, null, node, doccontext));
/* 000108 */ 		}) ();
/* 000108 */ 	});}
/* 000108 */ });
/* 000110 */ export var ItemToHtmlConst =  __class__ ('ItemToHtmlConst', [ItemToHtmlBase], {
/* 000110 */ 	__module__: __name__,
/* 000111 */ 	get __init__ () {return __get__ (this, function (self, replacement) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'replacement': var replacement = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000112 */ 		self.replacement = replacement;
/* 000112 */ 	});},
/* 000113 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000114 */ 		return self.replacement;
/* 000114 */ 	});}
/* 000114 */ });
/* 000116 */ export var ItemToHtmlError =  __class__ ('ItemToHtmlError', [ItemToHtmlBase], {
/* 000116 */ 	__module__: __name__,
/* 000117 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000118 */ 		var __except0__ = __call__ (ValueError, null, 'The node {} cannot be placed here.'.format (node));
/* 000118 */ 		__except0__.__cause__ = null;
/* 000118 */ 		throw __except0__;
/* 000118 */ 	});}
/* 000118 */ });
/* 000122 */ export var ItemToHtmlVerbatim =  __class__ ('ItemToHtmlVerbatim', [ItemToHtmlBase], {
/* 000122 */ 	__module__: __name__,
/* 000123 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000124 */ 		return __call__ (htmlescape, null, (function () {
/* 000124 */ 			var __accu0__ = node;
/* 000124 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000124 */ 		}) ());
/* 000124 */ 	});}
/* 000124 */ });
/* 000126 */ export var ItemToHtmlWrapTag =  __class__ ('ItemToHtmlWrapTag', [ItemToHtmlBase], {
/* 000126 */ 	__module__: __name__,
/* 000127 */ 	get __init__ () {return __get__ (this, function (self, tagname, attrs, class_) {
/* 000127 */ 		if (typeof tagname == 'undefined' || (tagname != null && tagname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000127 */ 			var tagname = 'span';
/* 000127 */ 		};
/* 000127 */ 		if (typeof attrs == 'undefined' || (attrs != null && attrs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000127 */ 			var attrs = null;
/* 000127 */ 		};
/* 000127 */ 		if (typeof class_ == 'undefined' || (class_ != null && class_.hasOwnProperty ("__kwargtrans__"))) {;
/* 000127 */ 			var class_ = null;
/* 000127 */ 		};
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'class_': var class_ = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000128 */ 		self.tagname = tagname;
/* 000129 */ 		self.attrs = attrs;
/* 000130 */ 		self.class_ = class_;
/* 000130 */ 	});},
/* 000132 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000133 */ 		var arghtml = (function () {
/* 000133 */ 			var __accu0__ = doccontext;
/* 000133 */ 			return __call__ (__accu0__.nodearg_to_html, __accu0__, node, 0);
/* 000133 */ 		}) ();
/* 000134 */ 		return __call__ (html_wrap_in_tag, null, self.tagname, arghtml, __kwargtrans__ ({attrs: self.attrs, class_: self.class_}));
/* 000134 */ 	});},
/* 000141 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000142 */ 		var argtext = (function () {
/* 000142 */ 			var __accu0__ = doccontext;
/* 000142 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 0);
/* 000142 */ 		}) ();
/* 000143 */ 		return argtext;
/* 000143 */ 	});}
/* 000143 */ });
/* 000146 */ export var ItemToHtmlVerbatimWrapTag =  __class__ ('ItemToHtmlVerbatimWrapTag', [ItemToHtmlWrapTag], {
/* 000146 */ 	__module__: __name__,
/* 000147 */ 	get __init__ () {return __get__ (this, function (self, tagname, attrs, class_) {
/* 000147 */ 		if (typeof tagname == 'undefined' || (tagname != null && tagname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000147 */ 			var tagname = 'span';
/* 000147 */ 		};
/* 000147 */ 		if (typeof attrs == 'undefined' || (attrs != null && attrs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000147 */ 			var attrs = null;
/* 000147 */ 		};
/* 000147 */ 		if (typeof class_ == 'undefined' || (class_ != null && class_.hasOwnProperty ("__kwargtrans__"))) {;
/* 000147 */ 			var class_ = null;
/* 000147 */ 		};
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'class_': var class_ = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000148 */ 		self.tagname = tagname;
/* 000149 */ 		self.attrs = attrs;
/* 000150 */ 		self.class_ = class_;
/* 000150 */ 	});},
/* 000152 */ 	get get_verbatim_contents () {return __get__ (this, function (self, node, doccontext) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		return (function () {
/* 000153 */ 			var __accu0__ = node;
/* 000153 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000153 */ 		}) ();
/* 000153 */ 	});},
/* 000155 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000158 */ 		return __call__ (html_wrap_in_tag, null, __kwargtrans__ ({tagname: self.tagname, htmlcontent: __call__ (htmlescape, null, (function () {
/* 000158 */ 			var __accu0__ = self;
/* 000158 */ 			return __call__ (__accu0__.get_verbatim_contents, __accu0__, node, doccontext);
/* 000158 */ 		}) ()), attrs: self.attrs, class_: self.class_}));
/* 000158 */ 	});},
/* 000163 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000164 */ 		return (function () {
/* 000164 */ 			var __accu0__ = self;
/* 000164 */ 			return __call__ (__accu0__.get_verbatim_contents, __accu0__, node, doccontext);
/* 000164 */ 		}) ();
/* 000164 */ 	});}
/* 000164 */ });
/* 000166 */ export var ItemToHtmlVerbatimContentsWrapTag =  __class__ ('ItemToHtmlVerbatimContentsWrapTag', [ItemToHtmlVerbatimWrapTag], {
/* 000166 */ 	__module__: __name__,
/* 000167 */ 	get __init__ () {return __get__ (this, function (self, class_, is_environment) {
/* 000167 */ 		if (typeof class_ == 'undefined' || (class_ != null && class_.hasOwnProperty ("__kwargtrans__"))) {;
/* 000167 */ 			var class_ = 'verbatim';
/* 000167 */ 		};
/* 000167 */ 		if (typeof is_environment == 'undefined' || (is_environment != null && is_environment.hasOwnProperty ("__kwargtrans__"))) {;
/* 000167 */ 			var is_environment = false;
/* 000167 */ 		};
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'class_': var class_ = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'is_environment': var is_environment = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000168 */ 		__call__ (__call__ (__super__, null, ItemToHtmlVerbatimContentsWrapTag, '__init__'), null, self, __kwargtrans__ ({tagname: 'span', class_: class_}));
/* 000172 */ 		self.is_environment = is_environment;
/* 000172 */ 	});},
/* 000174 */ 	get get_verbatim_contents () {return __get__ (this, function (self, node, doccontext) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000175 */ 		if (__t__ (self.is_environment)) {
/* 000176 */ 			return (function () {
/* 000176 */ 				var __accu0__ = doccontext;
/* 000176 */ 				return __call__ (__accu0__.nodelist_to_chars, __accu0__, node.nodelist);
/* 000176 */ 			}) ();
/* 000176 */ 		}
/* 000177 */ 		return (function () {
/* 000177 */ 			var __accu0__ = doccontext;
/* 000177 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'verbatimcontent');
/* 000177 */ 		}) ();
/* 000177 */ 	});}
/* 000177 */ });
/* 000182 */ export var ItemToHtmlRef =  __class__ ('ItemToHtmlRef', [ItemToHtmlWrapTag], {
/* 000182 */ 	__module__: __name__,
/* 000183 */ 	get get_ref () {return __get__ (this, function (self, reftarget, doccontext) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'reftarget': var reftarget = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		var refprefix = null;
/* 000185 */ 		if (__t__ (__in__ (':', reftarget))) {
/* 000186 */ 			var __left0__ = (function () {
/* 000186 */ 				var __accu0__ = reftarget;
/* 000186 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000186 */ 			}) ();
/* 000186 */ 			var refprefix = __left0__ [0];
/* 000186 */ 			var reftarget = __left0__ [1];
/* 000186 */ 		}
/* 000190 */ 		var refprefix = (function () {
/* 000190 */ 			var __accu0__ = (function () {
/* 000190 */ 				var __accu1__ = refprefix;
/* 000190 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000190 */ 			}) ();
/* 000190 */ 			return __call__ (__accu0__.lower, __accu0__);
/* 000190 */ 		}) ();
/* 000192 */ 		if (__t__ (doccontext.get_ref === null)) {
/* 000193 */ 			(function () {
/* 000193 */ 				var __accu0__ = logger;
/* 000193 */ 				return __call__ (__accu0__.debug, __accu0__, 'Missing doc context to resolve reference %s', reftarget);
/* 000193 */ 			}) ();
/* 000194 */ 			return tuple (['&lt;{}&gt;'.format (reftarget), '#']);
/* 000194 */ 		}
/* 000196 */ 		var __left0__ = (function () {
/* 000196 */ 			var __accu0__ = doccontext;
/* 000196 */ 			return __call__ (__accu0__.get_ref, __accu0__, refprefix, reftarget);
/* 000196 */ 		}) ();
/* 000196 */ 		var target_html = __left0__ [0];
/* 000196 */ 		var target_href = __left0__ [1];
/* 000197 */ 		return tuple ([target_html, target_href]);
/* 000197 */ 	});},
/* 000199 */ 	get ref_to_html () {return __get__ (this, function (self, reftarget, doccontext, display_html) {
/* 000199 */ 		if (typeof display_html == 'undefined' || (display_html != null && display_html.hasOwnProperty ("__kwargtrans__"))) {;
/* 000199 */ 			var display_html = null;
/* 000199 */ 		};
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'reftarget': var reftarget = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000200 */ 		var __left0__ = (function () {
/* 000200 */ 			var __accu0__ = self;
/* 000200 */ 			return __call__ (__accu0__.get_ref, __accu0__, reftarget, doccontext);
/* 000200 */ 		}) ();
/* 000200 */ 		var target_html = __left0__ [0];
/* 000200 */ 		var target_href = __left0__ [1];
/* 000201 */ 		if (__t__ (display_html === null)) {
/* 000202 */ 			var display_html = target_html;
/* 000202 */ 		}
/* 000203 */ 		(function () {
/* 000203 */ 			var __accu0__ = logger;
/* 000203 */ 			return __call__ (__accu0__.debug, __accu0__, 'Ref: ‘{}’ → ‘{}’'.format (reftarget, display_html));
/* 000203 */ 		}) ();
/* 000207 */ 		return __call__ (html_wrap_in_tag, null, 'a', display_html, __kwargtrans__ ({attrs: dict ({'href': __call__ (htmlescape, null, target_href)}), class_: 'ref'}));
/* 000207 */ 	});},
/* 000211 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000212 */ 		var tgt = (function () {
/* 000212 */ 			var __accu0__ = doccontext;
/* 000212 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'reftarget');
/* 000212 */ 		}) ();
/* 000213 */ 		if (__t__ (__t__ (__ne__ (__call__ (len, null, tgt), 1)) || !__t__ (((function () {
/* 000213 */ 			var __accu0__ = __getitem__ (tgt, 0);
/* 000213 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000213 */ 		}) ())))) {
/* 000214 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid \\ref invocation: expected single braced argument');
/* 000214 */ 			__except0__.__cause__ = null;
/* 000214 */ 			throw __except0__;
/* 000214 */ 		}
/* 000215 */ 		var reftarget = __getitem__ (tgt, 0).chars;
/* 000216 */ 		return (function () {
/* 000216 */ 			var __accu0__ = self;
/* 000216 */ 			return __call__ (__accu0__.ref_to_html, __accu0__, reftarget, doccontext);
/* 000216 */ 		}) ();
/* 000216 */ 	});},
/* 000218 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000219 */ 		var tgt = (function () {
/* 000219 */ 			var __accu0__ = doccontext;
/* 000219 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'reftarget');
/* 000219 */ 		}) ();
/* 000220 */ 		return '<{}>'.format ((function () {
/* 000220 */ 			var __accu0__ = tgt;
/* 000220 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000220 */ 		}) ());
/* 000220 */ 	});}
/* 000220 */ });
/* 000222 */ export var ItemToHtmlEqRef =  __class__ ('ItemToHtmlEqRef', [ItemToHtmlWrapTag], {
/* 000222 */ 	__module__: __name__,
/* 000223 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000223 */ 		if (arguments.length) {
/* 000223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 					switch (__attrib0__) {
/* 000223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 		else {
/* 000223 */ 		}
/* 000225 */ 		var tgt = (function () {
/* 000225 */ 			var __accu0__ = doccontext;
/* 000225 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'reftarget');
/* 000225 */ 		}) ();
/* 000227 */ 		if (__t__ (__t__ (__ne__ (__call__ (len, null, tgt), 1)) || !__t__ (((function () {
/* 000227 */ 			var __accu0__ = __getitem__ (tgt, 0);
/* 000227 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000227 */ 		}) ())))) {
/* 000228 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid \\eqref invocation: expected single braced argument');
/* 000228 */ 			__except0__.__cause__ = null;
/* 000228 */ 			throw __except0__;
/* 000228 */ 		}
/* 000230 */ 		var eqref_target = __getitem__ (tgt, 0).chars;
/* 000234 */ 		return __call__ (html_wrap_in_tag, null, 'span', __add__ (__add__ ('\\eqref{', __call__ (htmlescape, null, eqref_target)), '}'), __kwargtrans__ ({class_: 'inline-math eqref'}));
/* 000234 */ 	});}
/* 000234 */ });
/* 000239 */ export var ItemToHtmlHyperref =  __class__ ('ItemToHtmlHyperref', [ItemToHtmlRef], {
/* 000239 */ 	__module__: __name__,
/* 000240 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000241 */ 		var reftarget = (function () {
/* 000241 */ 			var __accu0__ = doccontext;
/* 000241 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 0);
/* 000241 */ 		}) ();
/* 000242 */ 		var display_html = (function () {
/* 000242 */ 			var __accu0__ = doccontext;
/* 000242 */ 			return __call__ (__accu0__.nodearg_to_html, __accu0__, node, 1);
/* 000242 */ 		}) ();
/* 000243 */ 		return (function () {
/* 000243 */ 			var __accu0__ = self;
/* 000243 */ 			return __call__ (__accu0__.ref_to_html, __accu0__, reftarget, __kwargtrans__ ({doccontext: doccontext, display_html: display_html}));
/* 000243 */ 		}) ();
/* 000243 */ 	});},
/* 000246 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000247 */ 		var reftarget = (function () {
/* 000247 */ 			var __accu0__ = doccontext;
/* 000247 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 0);
/* 000247 */ 		}) ();
/* 000248 */ 		var display_text = (function () {
/* 000248 */ 			var __accu0__ = doccontext;
/* 000248 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 1);
/* 000248 */ 		}) ();
/* 000249 */ 		return '{}<{}>'.format (display_text, reftarget);
/* 000249 */ 	});}
/* 000249 */ });
/* 000251 */ export var ItemToHtmlCite =  __class__ ('ItemToHtmlCite', [ItemToHtmlWrapTag], {
/* 000251 */ 	__module__: __name__,
/* 000253 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000255 */ 		var optional_cite_extra_html_nodelist = (function () {
/* 000255 */ 			var __accu0__ = doccontext;
/* 000255 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'cite_pre_text');
/* 000255 */ 		}) ();
/* 000258 */ 		if (__t__ (__t__ (optional_cite_extra_html_nodelist) && __t__ (__call__ (len, null, optional_cite_extra_html_nodelist)) && __getitem__ (optional_cite_extra_html_nodelist, 0))) {
/* 000261 */ 			var optional_cite_extra_html = (function () {
/* 000261 */ 				var __accu0__ = doccontext;
/* 000261 */ 				return __call__ (__accu0__.nodelist_to_html, __accu0__, optional_cite_extra_html_nodelist);
/* 000261 */ 			}) ();
/* 000261 */ 		}
/* 000262 */ 		else {
/* 000263 */ 			var optional_cite_extra_html = null;
/* 000263 */ 		}
/* 000265 */ 		var citekeylist_nodelist = (function () {
/* 000265 */ 			var __accu0__ = doccontext;
/* 000265 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'citekey');
/* 000265 */ 		}) ();
/* 000273 */ 		var s_items = [];
/* 000274 */ 		var __iterable0__ = citekeylist_nodelist;
/* 000274 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000274 */ 			var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000276 */ 			if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000276 */ 				continue;
/* 000276 */ 			}
/* 000279 */ 			var citekey_verbatim = (function () {
/* 000279 */ 				var __accu0__ = citekeygroupnode;
/* 000279 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000279 */ 			}) ();
/* 000280 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000282 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000282 */ 			}
/* 000284 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000286 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000286 */ 			}
/* 000289 */ 			if (__t__ (doccontext.add_citation === null)) {
/* 000291 */ 				(function () {
/* 000291 */ 					var __accu0__ = s_items;
/* 000294 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (html_wrap_in_tag, null, 'span', __call__ (htmlescape, null, '[{}]'.format (citekey_verbatim)), __kwargtrans__ ({class_: 'cite'})));
/* 000294 */ 				}) ();
/* 000294 */ 				continue;
/* 000294 */ 			}
/* 000302 */ 			if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000303 */ 				var __left0__ = (function () {
/* 000303 */ 					var __accu0__ = citekey_verbatim;
/* 000303 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000303 */ 				}) ();
/* 000303 */ 				var citation_key_prefix = __left0__ [0];
/* 000303 */ 				var citation_key = __left0__ [1];
/* 000306 */ 				var citation_key_prefix = (function () {
/* 000306 */ 					var __accu0__ = (function () {
/* 000306 */ 						var __accu1__ = citation_key_prefix;
/* 000306 */ 						return __call__ (__accu1__.strip, __accu1__);
/* 000306 */ 					}) ();
/* 000306 */ 					return __call__ (__accu0__.lower, __accu0__);
/* 000306 */ 				}) ();
/* 000306 */ 			}
/* 000307 */ 			else {
/* 000308 */ 				var __left0__ = tuple ([null, citekey_verbatim]);
/* 000308 */ 				var citation_key_prefix = __left0__ [0];
/* 000308 */ 				var citation_key = __left0__ [1];
/* 000308 */ 			}
/* 000311 */ 			var __left0__ = (function () {
/* 000311 */ 				var __accu0__ = doccontext;
/* 000311 */ 				return __call__ (__accu0__.add_citation, __accu0__, citation_key_prefix, citation_key, optional_cite_extra_html);
/* 000311 */ 			}) ();
/* 000311 */ 			var citelabel_html = __left0__ [0];
/* 000311 */ 			var citehref = __left0__ [1];
/* 000314 */ 			(function () {
/* 000314 */ 				var __accu0__ = s_items;
/* 000318 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (html_wrap_in_tag, null, 'a', citelabel_html, __kwargtrans__ ({attrs: dict ({'href': __call__ (htmlescape, null, citehref)}), class_: 'cite'})));
/* 000318 */ 			}) ();
/* 000318 */ 		}
/* 000323 */ 		var s = (function () {
/* 000323 */ 			var __accu0__ = '';
/* 000323 */ 			return __call__ (__accu0__.join, __accu0__, s_items);
/* 000323 */ 		}) ();
/* 000326 */ 		return s;
/* 000326 */ 	});},
/* 000328 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000329 */ 		var optional_cite_extra_text = (function () {
/* 000329 */ 			var __accu0__ = doccontext;
/* 000329 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 'cite_pre_text');
/* 000329 */ 		}) ();
/* 000330 */ 		var citekeylist_nodelist = (function () {
/* 000330 */ 			var __accu0__ = doccontext;
/* 000330 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'citekey');
/* 000330 */ 		}) ();
/* 000332 */ 		var ckeys = (function () {
/* 000332 */ 			var __accu0__ = [];
/* 000332 */ 			var __iterable0__ = citekeylist_nodelist.nodelist;
/* 000332 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000334 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000334 */ 				if (__t__ (n !== null)) {
/* 000335 */ 					(function () {
/* 000335 */ 						var __accu1__ = __accu0__;
/* 000333 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000333 */ 							var __accu2__ = self;
/* 000333 */ 							return __call__ (__accu2__._pretty_citekey_as_text, __accu2__, n, doccontext);
/* 000333 */ 						}) ());
/* 000333 */ 					}) ();
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 			return __accu0__;
/* 000333 */ 		}) ();
/* 000338 */ 		var citekeys = (function () {
/* 000338 */ 			var __accu0__ = ',';
/* 000338 */ 			return __call__ (__accu0__.join, __accu0__, ckeys);
/* 000338 */ 		}) ();
/* 000340 */ 		if (__t__ (optional_cite_extra_text)) {
/* 000341 */ 			return '[{}; {}]'.format (citekeys, optional_cite_extra_text);
/* 000341 */ 		}
/* 000342 */ 		return '[{}]'.format (citekeys);
/* 000342 */ 	});},
/* 000344 */ 	get _pretty_citekey_as_text () {return __get__ (this, function (self, n, doccontext) {
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000345 */ 		var key = (function () {
/* 000345 */ 			var __accu0__ = doccontext;
/* 000345 */ 			return __call__ (__accu0__.nodelist_to_text, __accu0__, (function () {
/* 000345 */ 				var __accu1__ = nodes;
/* 000345 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, [n]);
/* 000345 */ 			}) ());
/* 000345 */ 		}) ();
/* 000346 */ 		var key = (function () {
/* 000346 */ 			var __accu0__ = re;
/* 000346 */ 			return __call__ (__accu0__.sub, __accu0__, '^[a-zA-Z]+:', '', key);
/* 000346 */ 		}) ();
/* 000347 */ 		return key;
/* 000347 */ 	});}
/* 000347 */ });
/* 000350 */ export var ItemToHtmlFootnote =  __class__ ('ItemToHtmlFootnote', [ItemToHtmlWrapTag], {
/* 000350 */ 	__module__: __name__,
/* 000351 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000352 */ 		var fntext_html = (function () {
/* 000352 */ 			var __accu0__ = doccontext;
/* 000352 */ 			return __call__ (__accu0__.nodearg_to_html, __accu0__, node, 'footnotetext');
/* 000352 */ 		}) ();
/* 000354 */ 		if (__t__ (doccontext.add_footnote === null)) {
/* 000356 */ 			return '&lt;footnote&gt;';
/* 000356 */ 		}
/* 000358 */ 		var __left0__ = (function () {
/* 000358 */ 			var __accu0__ = doccontext;
/* 000358 */ 			return __call__ (__accu0__.add_footnote, __accu0__, fntext_html);
/* 000358 */ 		}) ();
/* 000358 */ 		var fnlabel_html = __left0__ [0];
/* 000358 */ 		var fnhref = __left0__ [1];
/* 000364 */ 		return __call__ (html_wrap_in_tag, null, 'a', fnlabel_html, __kwargtrans__ ({attrs: dict ({'href': __call__ (htmlescape, null, fnhref)}), class_: 'footnote'}));
/* 000364 */ 	});},
/* 000369 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000369 */ 		if (arguments.length) {
/* 000369 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000369 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000369 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000369 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000369 */ 					switch (__attrib0__) {
/* 000369 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 					}
/* 000369 */ 				}
/* 000369 */ 			}
/* 000369 */ 		}
/* 000369 */ 		else {
/* 000369 */ 		}
/* 000370 */ 		var fntext_text = (function () {
/* 000370 */ 			var __accu0__ = doccontext;
/* 000370 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 'footnotetext');
/* 000370 */ 		}) ();
/* 000371 */ 		return __add__ (__add__ ('{', fntext_text), '}');
/* 000371 */ 	});}
/* 000371 */ });
/* 000373 */ export var ItemToHtmlHref =  __class__ ('ItemToHtmlHref', [ItemToHtmlWrapTag], {
/* 000373 */ 	__module__: __name__,
/* 000374 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000375 */ 		var url = (function () {
/* 000375 */ 			var __accu0__ = doccontext;
/* 000375 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'url');
/* 000375 */ 		}) ();
/* 000376 */ 		var disphtml = (function () {
/* 000376 */ 			var __accu0__ = doccontext;
/* 000376 */ 			return __call__ (__accu0__.nodearg_to_html, __accu0__, node, 'displaytext');
/* 000376 */ 		}) ();
/* 000378 */ 		return __call__ (html_wrap_in_tag, null, 'a', disphtml, __kwargtrans__ ({attrs: dict ({'href': url, 'target': '_blank'}), class_: 'href'}));
/* 000378 */ 	});},
/* 000385 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000386 */ 		var url = (function () {
/* 000386 */ 			var __accu0__ = doccontext;
/* 000386 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'url');
/* 000386 */ 		}) ();
/* 000387 */ 		var disptext = (function () {
/* 000387 */ 			var __accu0__ = doccontext;
/* 000387 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 'displaytext');
/* 000387 */ 		}) ();
/* 000388 */ 		return __add__ (disptext, ' <{}>'.format (url));
/* 000388 */ 	});}
/* 000388 */ });
/* 000390 */ export var ItemToHtmlUrl =  __class__ ('ItemToHtmlUrl', [ItemToHtmlWrapTag], {
/* 000390 */ 	__module__: __name__,
/* 000391 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000392 */ 		var url = (function () {
/* 000392 */ 			var __accu0__ = doccontext;
/* 000392 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'url');
/* 000392 */ 		}) ();
/* 000394 */ 		var url_display = url;
/* 000395 */ 		var __iterable0__ = tuple (['http://', 'https://']);
/* 000395 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000395 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000396 */ 			if (__t__ ((function () {
/* 000396 */ 				var __accu0__ = url_display;
/* 000396 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000396 */ 			}) ())) {
/* 000397 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000397 */ 				break;
/* 000397 */ 			}
/* 000397 */ 		}
/* 000399 */ 		var __iterable0__ = tuple (['/']);
/* 000399 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000399 */ 			var suffix = __getitem__ (__iterable0__, __index0__);
/* 000400 */ 			if (__t__ (__t__ (__call__ (len, null, suffix)) && (function () {
/* 000400 */ 				var __accu0__ = url_display;
/* 000400 */ 				return __call__ (__accu0__.endswith, __accu0__, suffix);
/* 000400 */ 			}) ())) {
/* 000401 */ 				var url_display = __getslice__ (url_display, 0, __neg__ (__call__ (len, null, suffix)), 1);
/* 000401 */ 			}
/* 000401 */ 		}
/* 000403 */ 		return __call__ (html_wrap_in_tag, null, 'a', url_display, __kwargtrans__ ({attrs: dict ({'href': url, 'target': '_blank'}), class_: 'href'}));
/* 000403 */ 	});},
/* 000410 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000410 */ 		if (arguments.length) {
/* 000410 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 					switch (__attrib0__) {
/* 000410 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 		}
/* 000411 */ 		var url = (function () {
/* 000411 */ 			var __accu0__ = doccontext;
/* 000411 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'url');
/* 000411 */ 		}) ();
/* 000412 */ 		return '<{}>'.format (url);
/* 000412 */ 	});}
/* 000412 */ });
/* 000415 */ export var ItemToHtmlFloat =  __class__ ('ItemToHtmlFloat', [ItemToHtmlBase], {
/* 000415 */ 	__module__: __name__,
/* 000416 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name) {
/* 000416 */ 		if (typeof float_type == 'undefined' || (float_type != null && float_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000416 */ 			var float_type = 'figure';
/* 000416 */ 		};
/* 000416 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000416 */ 			var float_caption_name = 'Figure';
/* 000416 */ 		};
/* 000416 */ 		if (arguments.length) {
/* 000416 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000416 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000416 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000416 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000416 */ 					switch (__attrib0__) {
/* 000416 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 					}
/* 000416 */ 				}
/* 000416 */ 			}
/* 000416 */ 		}
/* 000416 */ 		else {
/* 000416 */ 		}
/* 000417 */ 		self.float_type = float_type;
/* 000418 */ 		self.float_caption_name = float_caption_name;
/* 000418 */ 	});},
/* 000420 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000420 */ 		if (arguments.length) {
/* 000420 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000420 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000420 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000420 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000420 */ 					switch (__attrib0__) {
/* 000420 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 					}
/* 000420 */ 				}
/* 000420 */ 			}
/* 000420 */ 		}
/* 000420 */ 		else {
/* 000420 */ 		}
/* 000422 */ 		var figobj = __call__ (Float, null, __kwargtrans__ ({float_type: self.float_type, float_caption_name: self.float_caption_name}));
/* 000426 */ 		figobj.resource_parent = doccontext.resource_parent;
/* 000428 */ 		var body_nodelist = node.nodelist;
/* 000431 */ 		var __iterable0__ = body_nodelist;
/* 000431 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000431 */ 			var bodynode = __getitem__ (__iterable0__, __index0__);
/* 000432 */ 			if (__t__ (bodynode === null)) {
/* 000432 */ 				continue;
/* 000432 */ 			}
/* 000434 */ 			if (__t__ ((function () {
/* 000434 */ 				var __accu0__ = bodynode;
/* 000434 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000434 */ 			}) ())) {
/* 000435 */ 				if (__t__ (__eq__ (bodynode.macroname, 'includegraphics'))) {
/* 000436 */ 					if (__t__ (figobj.contents_image_filename !== null)) {
/* 000437 */ 						var __except0__ = __call__ (ValueError, null, "You can't use \\includegraphics twice in a figure");
/* 000437 */ 						__except0__.__cause__ = null;
/* 000437 */ 						throw __except0__;
/* 000437 */ 					}
/* 000441 */ 					var includegraphics_options = (function () {
/* 000441 */ 						var __accu0__ = doccontext;
/* 000441 */ 						return __call__ (__accu0__.nodearg_to_chars, __accu0__, bodynode, 'options');
/* 000441 */ 					}) ();
/* 000443 */ 					var includegraphics_filename = (function () {
/* 000443 */ 						var __accu0__ = doccontext;
/* 000443 */ 						return __call__ (__accu0__.nodearg_to_chars, __accu0__, bodynode, 'filename');
/* 000443 */ 					}) ();
/* 000446 */ 					if (__t__ (__t__ (includegraphics_options !== null) && (function () {
/* 000446 */ 						var __accu0__ = includegraphics_options;
/* 000446 */ 						return __call__ (__accu0__.strip, __accu0__);
/* 000446 */ 					}) ())) {
/* 000447 */ 						var __except0__ = __call__ (ValueError, null, 'Options to \\includegraphics[...] are not supported.  Please size and trim your figure directly in the source file.');
/* 000447 */ 						__except0__.__cause__ = null;
/* 000447 */ 						throw __except0__;
/* 000447 */ 					}
/* 000452 */ 					figobj.contentstype = 'image_filename';
/* 000453 */ 					figobj.contents_image_filename = includegraphics_filename;
/* 000453 */ 					continue;
/* 000453 */ 				}
/* 000456 */ 				if (__t__ (__eq__ (bodynode.macroname, 'caption'))) {
/* 000457 */ 					if (__t__ (figobj.caption !== null)) {
/* 000458 */ 						var __except0__ = __call__ (ValueError, null, "You can't use \\caption twice in a figure");
/* 000458 */ 						__except0__.__cause__ = null;
/* 000458 */ 						throw __except0__;
/* 000458 */ 					}
/* 000461 */ 					var caption_html = (function () {
/* 000461 */ 						var __accu0__ = doccontext;
/* 000461 */ 						return __call__ (__accu0__.nodearg_to_html, __accu0__, bodynode, 'captiontext');
/* 000461 */ 					}) ();
/* 000462 */ 					figobj.caption = caption_html;
/* 000462 */ 					continue;
/* 000462 */ 				}
/* 000465 */ 				if (__t__ (__eq__ (bodynode.macroname, 'label'))) {
/* 000466 */ 					if (__t__ (figobj.label !== null)) {
/* 000467 */ 						var __except0__ = __call__ (ValueError, null, "You can't use \\label twice in a figure");
/* 000467 */ 						__except0__.__cause__ = null;
/* 000467 */ 						throw __except0__;
/* 000467 */ 					}
/* 000470 */ 					var label = (function () {
/* 000470 */ 						var __accu0__ = doccontext;
/* 000470 */ 						return __call__ (__accu0__.nodearg_to_chars, __accu0__, bodynode, 'reftarget');
/* 000470 */ 					}) ();
/* 000472 */ 					if (__t__ (!__t__ (((function () {
/* 000472 */ 						var __accu0__ = label;
/* 000472 */ 						return __call__ (__accu0__.startswith, __accu0__, __add__ (self.float_type, ':'));
/* 000472 */ 					}) ())))) {
/* 000473 */ 						var __except0__ = __call__ (ValueError, null, 'Float labels must have a prefix that is equal to the float type; e.g., figure labels must have the form \\label{figure:XYZ}.');
/* 000473 */ 						__except0__.__cause__ = null;
/* 000473 */ 						throw __except0__;
/* 000473 */ 					}
/* 000478 */ 					var label = __getslice__ (label, __add__ (__call__ (len, null, self.float_type), 1), null, 1);
/* 000479 */ 					figobj.label = label;
/* 000479 */ 					continue;
/* 000479 */ 				}
/* 000479 */ 			}
/* 000482 */ 			if (__t__ ((function () {
/* 000482 */ 				var __accu0__ = bodynode;
/* 000482 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000482 */ 			}) ())) {
/* 000483 */ 				if (__t__ (!__t__ (((function () {
/* 000483 */ 					var __accu0__ = bodynode.chars;
/* 000483 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000483 */ 				}) ())))) {
/* 000483 */ 					continue;
/* 000483 */ 				}
/* 000483 */ 			}
/* 000489 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Encountered invalid node in float environment body that is not one of \\includegraphics, \\caption, or \\label:', __call__ (repr, null, bodynode)));
/* 000489 */ 			__except0__.__cause__ = null;
/* 000489 */ 			throw __except0__;
/* 000489 */ 		}
/* 000492 */ 		if (__t__ (doccontext.add_float === null)) {
/* 000493 */ 			return __add__ (__add__ ('&lt;', self.float_caption_name), '&gt;');
/* 000493 */ 		}
/* 000495 */ 		var float_html = (function () {
/* 000495 */ 			var __accu0__ = doccontext;
/* 000495 */ 			return __call__ (__accu0__.add_float, __accu0__, figobj);
/* 000495 */ 		}) ();
/* 000496 */ 		return float_html;
/* 000496 */ 	});}
/* 000496 */ });
/* 000504 */ export var _make_lw_context = function () {
/* 000504 */ 	if (arguments.length) {
/* 000504 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000504 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000504 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000504 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000504 */ 			}
/* 000504 */ 		}
/* 000504 */ 	}
/* 000504 */ 	else {
/* 000504 */ 	}
/* 000505 */ 	var lw_context = (function () {
/* 000505 */ 		var __accu0__ = macrospec;
/* 000505 */ 		return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000505 */ 	}) ();
/* 000506 */ 	(function () {
/* 000506 */ 		var __accu0__ = lw_context;
/* 000537 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'base-formatting', __kwargtrans__ ({macros: [__call__ (MiniHtmlMacroSpec, null, 'textbackslash', '', __kwargtrans__ ({item_to_html: '\\'})), __call__ (MiniHtmlMacroSpec, null, '%', '', __kwargtrans__ ({item_to_html: '%'})), __call__ (MiniHtmlMacroSpec, null, '#', '', __kwargtrans__ ({item_to_html: '#'})), __call__ (MiniHtmlMacroSpec, null, '&', '', __kwargtrans__ ({item_to_html: '&amp;'})), __call__ (MiniHtmlMacroSpec, null, '$', '', __kwargtrans__ ({item_to_html: '$'})), __call__ (MiniHtmlMacroSpec, null, ' ', '', __kwargtrans__ ({item_to_html: ' '})), __call__ (MiniHtmlMacroSpec, null, '{', '', __kwargtrans__ ({item_to_html: '{'})), __call__ (MiniHtmlMacroSpec, null, '}', '', __kwargtrans__ ({item_to_html: '}'})), __call__ (MiniHtmlMacroSpec, null, 'emph', '{', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlWrapTag, null, __kwargtrans__ ({class_: 'emph'}))})), __call__ (MiniHtmlMacroSpec, null, 'textit', '{', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlWrapTag, null, __kwargtrans__ ({class_: 'textit'}))})), __call__ (MiniHtmlMacroSpec, null, 'textbf', '{', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlWrapTag, null, __kwargtrans__ ({class_: 'textbf'}))}))], specials: [__call__ (MiniHtmlSpecialsSpec, null, '~', __kwargtrans__ ({item_to_html: '\xa0'})), __call__ (MiniHtmlSpecialsSpec, null, '\n\n')]}));
/* 000537 */ 	}) ();
/* 000542 */ 	(function () {
/* 000542 */ 		var __accu0__ = lw_context;
/* 000542 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'math-environments', __kwargtrans__ ({environments: (function () {
/* 000542 */ 			var __accu1__ = [];
/* 000544 */ 			var __iterable0__ = tuple (['align', 'align*', 'gather', 'gather*', 'split', 'split*']);
/* 000544 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000559 */ 				var math_environment_name = __getitem__ (__iterable0__, __index0__);
/* 000553 */ 				(function () {
/* 000553 */ 					var __accu2__ = __accu1__;
/* 000550 */ 					return __call__ (__accu2__.append, __accu2__, __call__ (MiniHtmlEnvironmentSpec, null, math_environment_name, '', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlVerbatimWrapTag, null, __kwargtrans__ ({tagname: 'span', class_: 'display-math env-{}'.format ((function () {
/* 000550 */ 						var __accu3__ = math_environment_name;
/* 000550 */ 						return __call__ (__accu3__.py_replace, __accu3__, '*', '-star');
/* 000550 */ 					}) ())}))})));
/* 000550 */ 				}) ();
/* 000550 */ 			}
/* 000550 */ 			return __accu1__;
/* 000550 */ 		}) ()}));
/* 000550 */ 	}) ();
/* 000563 */ 	(function () {
/* 000563 */ 		var __accu0__ = lw_context;
/* 000648 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'x-refs', __kwargtrans__ ({macros: [__call__ (MiniHtmlMacroSpec, null, 'ref', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexCharsGroupParser, null), __kwargtrans__ ({argname: 'reftarget'}))], item_to_html: __call__ (ItemToHtmlRef, null)})), __call__ (MiniHtmlMacroSpec, null, 'eqref', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexCharsGroupParser, null), __kwargtrans__ ({argname: 'reftarget'}))], item_to_html: __call__ (ItemToHtmlEqRef, null)})), __call__ (MiniHtmlMacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexCharsGroupParser, null), __kwargtrans__ ({argname: 'reftarget'}))], item_to_html: __call__ (ItemToHtmlError, null)})), __call__ (MiniHtmlMacroSpec, null, 'cite', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (LatexArgumentSpec, null, __call__ (LatexCharsCommaSeparatedListParser, null, __kwargtrans__ ({enable_comments: false})), __kwargtrans__ ({argname: 'citekey'}))], item_to_html: __call__ (ItemToHtmlCite, null)})), __call__ (MiniHtmlMacroSpec, null, 'footnote', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '{', __kwargtrans__ ({argname: 'footnotetext'}))], item_to_html: __call__ (ItemToHtmlFootnote, null)})), __call__ (MiniHtmlMacroSpec, null, 'href', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexDelimitedVerbatimParser, null, tuple (['{', '}'])), __kwargtrans__ ({argname: 'url'})), __call__ (LatexArgumentSpec, null, '{', __kwargtrans__ ({argname: 'displaytext'}))], item_to_html: __call__ (ItemToHtmlHref, null)})), __call__ (MiniHtmlMacroSpec, null, 'hyperref', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '[', __kwargtrans__ ({argname: 'target'})), __call__ (LatexArgumentSpec, null, '{', __kwargtrans__ ({argname: 'displaytext'}))], item_to_html: __call__ (ItemToHtmlHyperref, null)})), __call__ (MiniHtmlMacroSpec, null, 'url', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexDelimitedVerbatimParser, null, tuple (['{', '}'])), __kwargtrans__ ({argname: 'url'}))], item_to_html: __call__ (ItemToHtmlUrl, null)}))]}));
/* 000648 */ 	}) ();
/* 000652 */ 	(function () {
/* 000652 */ 		var __accu0__ = lw_context;
/* 000684 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'floats', __kwargtrans__ ({macros: [__call__ (MiniHtmlMacroSpec, null, 'includegraphics', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '[', 'options'), __call__ (LatexArgumentSpec, null, __call__ (LatexCharsGroupParser, null), 'filename')]})), __call__ (MiniHtmlMacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '[', 'shortcaptiontext'), __call__ (LatexArgumentSpec, null, '{', 'captiontext')]}))], environments: [__call__ (MiniHtmlEnvironmentSpec, null, 'figure', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlFloat, null, 'figure', 'Figure')})), __call__ (MiniHtmlEnvironmentSpec, null, 'table', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlFloat, null, 'table', 'Table')}))]}));
/* 000684 */ 	}) ();
/* 000688 */ 	(function () {
/* 000688 */ 		var __accu0__ = lw_context;
/* 000697 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'verbatim-input', __kwargtrans__ ({environments: new set ([__call__ (MiniHtmlEnvironmentSpec, null, 'verbatiminput', __kwargtrans__ ({arguments_spec_list: [], body_parser: __call__ (LatexVerbatimEnvironmentContentsParser, null, __kwargtrans__ ({environment_name: 'verbatiminput'})), item_to_html: __call__ (ItemToHtmlVerbatimContentsWrapTag, null, __kwargtrans__ ({class_: 'verbatiminput', is_environment: true}))}))])}));
/* 000697 */ 	}) ();
/* 000707 */ 	(function () {
/* 000707 */ 		var __accu0__ = lw_context;
/* 000707 */ 		return __call__ (__accu0__.set_unknown_macro_spec, __accu0__, __call__ (MiniHtmlMacroSpec, null, ''));
/* 000707 */ 	}) ();
/* 000708 */ 	(function () {
/* 000708 */ 		var __accu0__ = lw_context;
/* 000708 */ 		return __call__ (__accu0__.set_unknown_environment_spec, __accu0__, __call__ (MiniHtmlEnvironmentSpec, null, ''));
/* 000708 */ 	}) ();
/* 000710 */ 	return lw_context;
/* 000710 */ };
/* 000718 */ export var _minilatex_context_db = __call__ (_make_lw_context, null);
/* 000724 */ export var Float =  __class__ ('Float', [object], {
/* 000724 */ 	__module__: __name__,
/* 000725 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, caption, label, contentstype, contents_image_filename, resource_parent) {
/* 000725 */ 		if (typeof float_type == 'undefined' || (float_type != null && float_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var float_type = 'figure';
/* 000725 */ 		};
/* 000725 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var float_caption_name = 'Figure';
/* 000725 */ 		};
/* 000725 */ 		if (typeof caption == 'undefined' || (caption != null && caption.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var caption = null;
/* 000725 */ 		};
/* 000725 */ 		if (typeof label == 'undefined' || (label != null && label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var label = null;
/* 000725 */ 		};
/* 000725 */ 		if (typeof contentstype == 'undefined' || (contentstype != null && contentstype.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var contentstype = null;
/* 000725 */ 		};
/* 000725 */ 		if (typeof contents_image_filename == 'undefined' || (contents_image_filename != null && contents_image_filename.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var contents_image_filename = null;
/* 000725 */ 		};
/* 000725 */ 		if (typeof resource_parent == 'undefined' || (resource_parent != null && resource_parent.hasOwnProperty ("__kwargtrans__"))) {;
/* 000725 */ 			var resource_parent = null;
/* 000725 */ 		};
/* 000725 */ 		if (arguments.length) {
/* 000725 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000725 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000725 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000725 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000725 */ 					switch (__attrib0__) {
/* 000725 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'caption': var caption = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'label': var label = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'contentstype': var contentstype = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'contents_image_filename': var contents_image_filename = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 						case 'resource_parent': var resource_parent = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 					}
/* 000725 */ 				}
/* 000725 */ 			}
/* 000725 */ 		}
/* 000725 */ 		else {
/* 000725 */ 		}
/* 000735 */ 		self.float_type = float_type;
/* 000736 */ 		self.float_caption_name = float_caption_name;
/* 000737 */ 		self.caption = caption;
/* 000738 */ 		self.label = label;
/* 000739 */ 		self.contentstype = contentstype;
/* 000740 */ 		self.contents_image_filename = contents_image_filename;
/* 000741 */ 		self.resource_parent = resource_parent;
/* 000741 */ 	});}
/* 000741 */ });
/* 000744 */ export var HtmlRefContext =  __class__ ('HtmlRefContext', [object], {
/* 000744 */ 	__module__: __name__,
/* 000745 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000745 */ 		if (arguments.length) {
/* 000745 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000745 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000745 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000745 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000745 */ 					switch (__attrib0__) {
/* 000745 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000745 */ 					}
/* 000745 */ 				}
/* 000745 */ 			}
/* 000745 */ 		}
/* 000745 */ 		else {
/* 000745 */ 		}
/* 000746 */ 		__call__ (__call__ (__super__, null, HtmlRefContext, '__init__'), null, self);
/* 000746 */ 	});},
/* 000752 */ 	get get_ref () {return __get__ (this, function (self, ref_key_prefix, ref_key) {
/* 000752 */ 		if (arguments.length) {
/* 000752 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000752 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000752 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000752 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000752 */ 					switch (__attrib0__) {
/* 000752 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000752 */ 						case 'ref_key_prefix': var ref_key_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000752 */ 						case 'ref_key': var ref_key = __allkwargs0__ [__attrib0__]; break;
/* 000752 */ 					}
/* 000752 */ 				}
/* 000752 */ 			}
/* 000752 */ 		}
/* 000752 */ 		else {
/* 000752 */ 		}
/* 000754 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclass must reimplement get_ref()');
/* 000754 */ 		__except0__.__cause__ = null;
/* 000754 */ 		throw __except0__;
/* 000754 */ 	});},
/* 000756 */ 	get add_footnote () {return __get__ (this, function (self, footnotetext) {
/* 000756 */ 		if (arguments.length) {
/* 000756 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000756 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000756 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000756 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000756 */ 					switch (__attrib0__) {
/* 000756 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000756 */ 						case 'footnotetext': var footnotetext = __allkwargs0__ [__attrib0__]; break;
/* 000756 */ 					}
/* 000756 */ 				}
/* 000756 */ 			}
/* 000756 */ 		}
/* 000756 */ 		else {
/* 000756 */ 		}
/* 000758 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclass must reimplement add_footnote()');
/* 000758 */ 		__except0__.__cause__ = null;
/* 000758 */ 		throw __except0__;
/* 000758 */ 	});},
/* 000760 */ 	get add_citation () {return __get__ (this, function (self, citation_key_prefix, citation_key, optional_cite_extra_html) {
/* 000760 */ 		if (typeof optional_cite_extra_html == 'undefined' || (optional_cite_extra_html != null && optional_cite_extra_html.hasOwnProperty ("__kwargtrans__"))) {;
/* 000760 */ 			var optional_cite_extra_html = null;
/* 000760 */ 		};
/* 000760 */ 		if (arguments.length) {
/* 000760 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000760 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000760 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000760 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000760 */ 					switch (__attrib0__) {
/* 000760 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000760 */ 						case 'citation_key_prefix': var citation_key_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000760 */ 						case 'citation_key': var citation_key = __allkwargs0__ [__attrib0__]; break;
/* 000760 */ 						case 'optional_cite_extra_html': var optional_cite_extra_html = __allkwargs0__ [__attrib0__]; break;
/* 000760 */ 					}
/* 000760 */ 				}
/* 000760 */ 			}
/* 000760 */ 		}
/* 000760 */ 		else {
/* 000760 */ 		}
/* 000763 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclass must reimplement add_citation()');
/* 000763 */ 		__except0__.__cause__ = null;
/* 000763 */ 		throw __except0__;
/* 000763 */ 	});},
/* 000765 */ 	get add_float () {return __get__ (this, function (self, float_obj) {
/* 000765 */ 		if (arguments.length) {
/* 000765 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000765 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000765 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000765 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000765 */ 					switch (__attrib0__) {
/* 000765 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000765 */ 						case 'float_obj': var float_obj = __allkwargs0__ [__attrib0__]; break;
/* 000765 */ 					}
/* 000765 */ 				}
/* 000765 */ 			}
/* 000765 */ 		}
/* 000765 */ 		else {
/* 000765 */ 		}
/* 000767 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclass must reimplement add_float()');
/* 000767 */ 		__except0__.__cause__ = null;
/* 000767 */ 		throw __except0__;
/* 000767 */ 	});}
/* 000767 */ });
/* 000773 */ export var MiniLatex =  __class__ ('MiniLatex', [object], {
/* 000773 */ 	__module__: __name__,
/* 000774 */ 	get __init__ () {return __get__ (this, function (self, minilatex, what, resource_parent, minilatex_context_db, _silent) {
/* 000774 */ 		if (typeof what == 'undefined' || (what != null && what.hasOwnProperty ("__kwargtrans__"))) {;
/* 000774 */ 			var what = '(unknown)';
/* 000774 */ 		};
/* 000774 */ 		if (typeof resource_parent == 'undefined' || (resource_parent != null && resource_parent.hasOwnProperty ("__kwargtrans__"))) {;
/* 000774 */ 			var resource_parent = null;
/* 000774 */ 		};
/* 000774 */ 		if (typeof minilatex_context_db == 'undefined' || (minilatex_context_db != null && minilatex_context_db.hasOwnProperty ("__kwargtrans__"))) {;
/* 000774 */ 			var minilatex_context_db = _minilatex_context_db;
/* 000774 */ 		};
/* 000774 */ 		if (typeof _silent == 'undefined' || (_silent != null && _silent.hasOwnProperty ("__kwargtrans__"))) {;
/* 000774 */ 			var _silent = false;
/* 000774 */ 		};
/* 000774 */ 		if (arguments.length) {
/* 000774 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000774 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000774 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000774 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000774 */ 					switch (__attrib0__) {
/* 000774 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case 'minilatex': var minilatex = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case 'resource_parent': var resource_parent = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case 'minilatex_context_db': var minilatex_context_db = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case '_silent': var _silent = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 					}
/* 000774 */ 				}
/* 000774 */ 			}
/* 000774 */ 		}
/* 000774 */ 		else {
/* 000774 */ 		}
/* 000783 */ 		self.minilatex = minilatex;
/* 000784 */ 		self.what = what;
/* 000787 */ 		self.resource_parent = resource_parent;
/* 000789 */ 		self.minilatex_context_db = minilatex_context_db;
/* 000791 */ 		self._silent = _silent;
/* 000793 */ 		try {
/* 000795 */ 			var __left0__ = (function () {
/* 000795 */ 				var __accu0__ = MiniLatex;
/* 000795 */ 				return __call__ (__accu0__.parse, __accu0__, self.minilatex, self.minilatex_context_db);
/* 000795 */ 			}) ();
/* 000795 */ 			self._latex_walker = __left0__ [0];
/* 000795 */ 			self.nodes = __left0__ [1];
/* 000795 */ 			var _ = __left0__ [2];
/* 000795 */ 		}
/* 000795 */ 		catch (__except0__) {
/* 000795 */ 			if (isinstance (__except0__, Exception)) {
/* 000795 */ 				var e = __except0__;
/* 000797 */ 				if (__t__ (!__t__ ((self._silent)))) {
/* 000798 */ 					(function () {
/* 000798 */ 						var __accu0__ = logger;
/* 000798 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like minilanguage ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.minilatex));
/* 000798 */ 					}) ();
/* 000798 */ 				}
/* 000800 */ 				__except0__.__cause__ = null;
/* 000800 */ 				throw __except0__;
/* 000800 */ 			}
/* 000800 */ 			else {
/* 000800 */ 				throw __except0__;
/* 000800 */ 			}
/* 000800 */ 		}
/* 000808 */ 		self._math_node_to_html = dict ({'inline': __call__ (ItemToHtmlVerbatimWrapTag, null, __kwargtrans__ ({tagname: 'span', class_: 'inline-math'})), 'display': __call__ (ItemToHtmlVerbatimWrapTag, null, __kwargtrans__ ({tagname: 'span', class_: 'display-math'}))});
/* 000814 */ 		self.text = (function () {
/* 000814 */ 			var __accu0__ = self;
/* 000814 */ 			return __call__ (__accu0__._to_text, __accu0__);
/* 000814 */ 		}) ();
/* 000814 */ 	});},
/* 000818 */ 	get parse () {return __getcm__ (this, function (cls, minilatex, minilatex_context_db) {
/* 000818 */ 		if (typeof minilatex_context_db == 'undefined' || (minilatex_context_db != null && minilatex_context_db.hasOwnProperty ("__kwargtrans__"))) {;
/* 000818 */ 			var minilatex_context_db = _minilatex_context_db;
/* 000818 */ 		};
/* 000818 */ 		if (arguments.length) {
/* 000818 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000818 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000818 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000818 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000818 */ 					switch (__attrib0__) {
/* 000818 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 						case 'minilatex': var minilatex = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 						case 'minilatex_context_db': var minilatex_context_db = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 					}
/* 000818 */ 				}
/* 000818 */ 			}
/* 000818 */ 		}
/* 000818 */ 		else {
/* 000818 */ 		}
/* 000820 */ 		var latex_walker = (function () {
/* 000820 */ 			var __accu0__ = latexwalker;
/* 000820 */ 			return __call__ (__accu0__.LatexWalker, __accu0__, minilatex, __kwargtrans__ ({latex_context: minilatex_context_db, tolerant_parsing: false}));
/* 000820 */ 		}) ();
/* 000826 */ 		var __left0__ = (function () {
/* 000826 */ 			var __accu0__ = latex_walker;
/* 000826 */ 			return __call__ (__accu0__.parse_content, __accu0__, __call__ (LatexGeneralNodesParser, null));
/* 000826 */ 		}) ();
/* 000826 */ 		var nodes = __left0__ [0];
/* 000826 */ 		var carryover_info = __left0__ [1];
/* 000828 */ 		return tuple ([latex_walker, nodes, carryover_info]);
/* 000828 */ 	});},
/* 000832 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000832 */ 		if (arguments.length) {
/* 000832 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000832 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000832 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000832 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000832 */ 					switch (__attrib0__) {
/* 000832 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 					}
/* 000832 */ 				}
/* 000832 */ 			}
/* 000832 */ 		}
/* 000832 */ 		else {
/* 000832 */ 		}
/* 000836 */ 		var nodelists_paragraphs = (function () {
/* 000836 */ 			var __accu0__ = self.nodes;
/* 000836 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000836 */ 				if (arguments.length) {
/* 000836 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000836 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000836 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000836 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000836 */ 							switch (__attrib0__) {
/* 000836 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 							}
/* 000836 */ 						}
/* 000836 */ 					}
/* 000836 */ 				}
/* 000836 */ 				else {
/* 000836 */ 				}
/* 000837 */ 				return __t__ ((function () {
/* 000837 */ 					var __accu1__ = n;
/* 000837 */ 					return __call__ (__accu1__.isNodeType, __accu1__, nodes.LatexSpecialsNode);
/* 000837 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000837 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000837 */ 		}) ();
/* 000840 */ 		return __call__ (MiniLatex, null, (function () {
/* 000840 */ 			var __accu0__ = __getitem__ (nodelists_paragraphs, 0);
/* 000840 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000840 */ 		}) (), __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000844 */ 	});},
/* 000844 */ 	DocContext: __class__ ('DocContext', [object], {
/* 000844 */ 		__module__: __name__,
/* 000845 */ 		get __init__ () {return __get__ (this, function (self, minilatexobj, refcontext) {
/* 000845 */ 			if (arguments.length) {
/* 000845 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000845 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000845 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000845 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000845 */ 						switch (__attrib0__) {
/* 000845 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000845 */ 							case 'minilatexobj': var minilatexobj = __allkwargs0__ [__attrib0__]; break;
/* 000845 */ 							case 'refcontext': var refcontext = __allkwargs0__ [__attrib0__]; break;
/* 000845 */ 						}
/* 000845 */ 					}
/* 000845 */ 				}
/* 000845 */ 			}
/* 000845 */ 			else {
/* 000845 */ 			}
/* 000846 */ 			self.minilatexobj = minilatexobj;
/* 000847 */ 			self.refcontext = refcontext;
/* 000849 */ 			self.what = self.minilatexobj.what;
/* 000850 */ 			self.resource_parent = self.minilatexobj.resource_parent;
/* 000852 */ 			self.get_nodearglist = self.minilatexobj.get_nodearglist;
/* 000854 */ 			if (__t__ (self.refcontext !== null)) {
/* 000855 */ 				self.get_ref = self.refcontext.get_ref;
/* 000856 */ 				self.add_footnote = self.refcontext.add_footnote;
/* 000857 */ 				self.add_citation = self.refcontext.add_citation;
/* 000858 */ 				self.add_float = self.refcontext.add_float;
/* 000858 */ 			}
/* 000859 */ 			else {
/* 000860 */ 				self.get_ref = null;
/* 000861 */ 				self.add_footnote = null;
/* 000862 */ 				self.add_citation = null;
/* 000863 */ 				self.add_float = null;
/* 000863 */ 			}
/* 000863 */ 		});},
/* 000865 */ 		get warning () {return __get__ (this, function (self) {
/* 000865 */ 			var kwargs = dict ();
/* 000865 */ 			if (arguments.length) {
/* 000865 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000865 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000865 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000865 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000865 */ 						switch (__attrib0__) {
/* 000865 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000865 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000865 */ 						}
/* 000865 */ 					}
/* 000865 */ 					delete kwargs.__kwargtrans__;
/* 000865 */ 				}
/* 000865 */ 				var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000865 */ 			}
/* 000865 */ 			else {
/* 000865 */ 				var args = tuple ();
/* 000865 */ 			}
/* 000866 */ 			if (__t__ (self.minilatexobj._silent)) {
/* 000867 */ 				return ;
/* 000867 */ 			}
/* 000868 */ 			(function () {
/* 000868 */ 				var __accu0__ = logger;
/* 000868 */ 				return __call__ (__accu0__.warning, __accu0__, ...args, __kwargtrans__ (kwargs));
/* 000868 */ 			}) ();
/* 000868 */ 		});},
/* 000870 */ 		get nodelist_to_html () {return __get__ (this, function (self, nodelist) {
/* 000870 */ 			if (arguments.length) {
/* 000870 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000870 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000870 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000870 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000870 */ 						switch (__attrib0__) {
/* 000870 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000870 */ 							case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000870 */ 						}
/* 000870 */ 					}
/* 000870 */ 				}
/* 000870 */ 			}
/* 000870 */ 			else {
/* 000870 */ 			}
/* 000871 */ 			return (function () {
/* 000871 */ 				var __accu0__ = self.minilatexobj;
/* 000871 */ 				return __call__ (__accu0__._nodelist_to_html, __accu0__, nodelist, self);
/* 000871 */ 			}) ();
/* 000871 */ 		});},
/* 000873 */ 		get nodelist_to_chars () {return __get__ (this, function (self, nodelist) {
/* 000873 */ 			if (arguments.length) {
/* 000873 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000873 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000873 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000873 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000873 */ 						switch (__attrib0__) {
/* 000873 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 							case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 						}
/* 000873 */ 					}
/* 000873 */ 				}
/* 000873 */ 			}
/* 000873 */ 			else {
/* 000873 */ 			}
/* 000874 */ 			return (function () {
/* 000874 */ 				var __accu0__ = self.minilatexobj;
/* 000874 */ 				return __call__ (__accu0__._nodelist_to_chars, __accu0__, nodelist, self);
/* 000874 */ 			}) ();
/* 000874 */ 		});},
/* 000876 */ 		get nodelist_to_text () {return __get__ (this, function (self, nodelist) {
/* 000876 */ 			if (arguments.length) {
/* 000876 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000876 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000876 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000876 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000876 */ 						switch (__attrib0__) {
/* 000876 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000876 */ 							case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000876 */ 						}
/* 000876 */ 					}
/* 000876 */ 				}
/* 000876 */ 			}
/* 000876 */ 			else {
/* 000876 */ 			}
/* 000877 */ 			return (function () {
/* 000877 */ 				var __accu0__ = self.minilatexobj;
/* 000877 */ 				return __call__ (__accu0__._nodelist_to_text, __accu0__, nodelist, self);
/* 000877 */ 			}) ();
/* 000877 */ 		});},
/* 000879 */ 		get nodearg_to_html () {return __get__ (this, function (self, node, arg_i) {
/* 000879 */ 			if (arguments.length) {
/* 000879 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000879 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000879 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000879 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000879 */ 						switch (__attrib0__) {
/* 000879 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000879 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000879 */ 							case 'arg_i': var arg_i = __allkwargs0__ [__attrib0__]; break;
/* 000879 */ 						}
/* 000879 */ 					}
/* 000879 */ 				}
/* 000879 */ 			}
/* 000879 */ 			else {
/* 000879 */ 			}
/* 000880 */ 			var nodelist = (function () {
/* 000880 */ 				var __accu0__ = self;
/* 000880 */ 				return __call__ (__accu0__.get_nodearglist, __accu0__, node, arg_i);
/* 000880 */ 			}) ();
/* 000881 */ 			return (function () {
/* 000881 */ 				var __accu0__ = self.minilatexobj;
/* 000881 */ 				return __call__ (__accu0__._nodelist_to_html, __accu0__, nodelist, self);
/* 000881 */ 			}) ();
/* 000881 */ 		});},
/* 000883 */ 		get nodearg_to_chars () {return __get__ (this, function (self, node, arg_i) {
/* 000883 */ 			if (arguments.length) {
/* 000883 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000883 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000883 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000883 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000883 */ 						switch (__attrib0__) {
/* 000883 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000883 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000883 */ 							case 'arg_i': var arg_i = __allkwargs0__ [__attrib0__]; break;
/* 000883 */ 						}
/* 000883 */ 					}
/* 000883 */ 				}
/* 000883 */ 			}
/* 000883 */ 			else {
/* 000883 */ 			}
/* 000884 */ 			var nodelist = (function () {
/* 000884 */ 				var __accu0__ = self;
/* 000884 */ 				return __call__ (__accu0__.get_nodearglist, __accu0__, node, arg_i);
/* 000884 */ 			}) ();
/* 000885 */ 			return (function () {
/* 000885 */ 				var __accu0__ = self.minilatexobj;
/* 000885 */ 				return __call__ (__accu0__._nodelist_to_chars, __accu0__, nodelist, self);
/* 000885 */ 			}) ();
/* 000885 */ 		});},
/* 000887 */ 		get nodearg_to_text () {return __get__ (this, function (self, node, arg_i) {
/* 000887 */ 			if (arguments.length) {
/* 000887 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000887 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000887 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000887 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000887 */ 						switch (__attrib0__) {
/* 000887 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 							case 'arg_i': var arg_i = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 						}
/* 000887 */ 					}
/* 000887 */ 				}
/* 000887 */ 			}
/* 000887 */ 			else {
/* 000887 */ 			}
/* 000888 */ 			var nodelist = (function () {
/* 000888 */ 				var __accu0__ = self;
/* 000888 */ 				return __call__ (__accu0__.get_nodearglist, __accu0__, node, arg_i);
/* 000888 */ 			}) ();
/* 000889 */ 			return (function () {
/* 000889 */ 				var __accu0__ = self.minilatexobj;
/* 000889 */ 				return __call__ (__accu0__._nodelist_to_text, __accu0__, nodelist, self);
/* 000889 */ 			}) ();
/* 000889 */ 		});}
/* 000889 */ 	}),
/* 000892 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000892 */ 		if (arguments.length) {
/* 000892 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000892 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000892 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000892 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000892 */ 					switch (__attrib0__) {
/* 000892 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000892 */ 					}
/* 000892 */ 				}
/* 000892 */ 			}
/* 000892 */ 		}
/* 000892 */ 		else {
/* 000892 */ 		}
/* 000893 */ 		return self.minilatex;
/* 000893 */ 	});},
/* 000895 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000895 */ 		if (arguments.length) {
/* 000895 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000895 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000895 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000895 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000895 */ 					switch (__attrib0__) {
/* 000895 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 					}
/* 000895 */ 				}
/* 000895 */ 			}
/* 000895 */ 		}
/* 000895 */ 		else {
/* 000895 */ 		}
/* 000896 */ 		return '{}({})'.format (self.__class__.__name__, self.minilatex);
/* 000896 */ 	});},
/* 000898 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000898 */ 		if (arguments.length) {
/* 000898 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000898 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000898 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000898 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000898 */ 					switch (__attrib0__) {
/* 000898 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 					}
/* 000898 */ 				}
/* 000898 */ 			}
/* 000898 */ 		}
/* 000898 */ 		else {
/* 000898 */ 		}
/* 000900 */ 		return (__t__ (self.minilatex) ? true : false);
/* 000900 */ 	});},
/* 000902 */ 	get to_html () {return __get__ (this, function (self, refcontext) {
/* 000902 */ 		if (typeof refcontext == 'undefined' || (refcontext != null && refcontext.hasOwnProperty ("__kwargtrans__"))) {;
/* 000902 */ 			var refcontext = null;
/* 000902 */ 		};
/* 000902 */ 		if (arguments.length) {
/* 000902 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000902 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000902 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000902 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000902 */ 					switch (__attrib0__) {
/* 000902 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 						case 'refcontext': var refcontext = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 					}
/* 000902 */ 				}
/* 000902 */ 			}
/* 000902 */ 		}
/* 000902 */ 		else {
/* 000902 */ 		}
/* 000903 */ 		return (function () {
/* 000903 */ 			var __accu0__ = self;
/* 000903 */ 			return __call__ (__accu0__._to_x, __accu0__, __kwargtrans__ ({refcontext: refcontext, fmt: 'html'}));
/* 000903 */ 		}) ();
/* 000903 */ 	});},
/* 000905 */ 	get _to_text () {return __get__ (this, function (self, refcontext) {
/* 000905 */ 		if (typeof refcontext == 'undefined' || (refcontext != null && refcontext.hasOwnProperty ("__kwargtrans__"))) {;
/* 000905 */ 			var refcontext = null;
/* 000905 */ 		};
/* 000905 */ 		if (arguments.length) {
/* 000905 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000905 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000905 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000905 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000905 */ 					switch (__attrib0__) {
/* 000905 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000905 */ 						case 'refcontext': var refcontext = __allkwargs0__ [__attrib0__]; break;
/* 000905 */ 					}
/* 000905 */ 				}
/* 000905 */ 			}
/* 000905 */ 		}
/* 000905 */ 		else {
/* 000905 */ 		}
/* 000909 */ 		return (function () {
/* 000909 */ 			var __accu0__ = self;
/* 000909 */ 			return __call__ (__accu0__._to_x, __accu0__, __kwargtrans__ ({refcontext: refcontext, fmt: 'text'}));
/* 000909 */ 		}) ();
/* 000909 */ 	});},
/* 000911 */ 	get _to_x () {return __get__ (this, function (self, refcontext, fmt) {
/* 000911 */ 		if (typeof refcontext == 'undefined' || (refcontext != null && refcontext.hasOwnProperty ("__kwargtrans__"))) {;
/* 000911 */ 			var refcontext = null;
/* 000911 */ 		};
/* 000911 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000911 */ 			var fmt = 'html';
/* 000911 */ 		};
/* 000911 */ 		if (arguments.length) {
/* 000911 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000911 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000911 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000911 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000911 */ 					switch (__attrib0__) {
/* 000911 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000911 */ 						case 'refcontext': var refcontext = __allkwargs0__ [__attrib0__]; break;
/* 000911 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 000911 */ 					}
/* 000911 */ 				}
/* 000911 */ 			}
/* 000911 */ 		}
/* 000911 */ 		else {
/* 000911 */ 		}
/* 000912 */ 		try {
/* 000913 */ 			var doccontext = (function () {
/* 000913 */ 				var __accu0__ = MiniLatex;
/* 000913 */ 				return __call__ (__accu0__.DocContext, __accu0__, self, refcontext);
/* 000913 */ 			}) ();
/* 000914 */ 			return (function () {
/* 000914 */ 				var __accu0__ = self;
/* 000914 */ 				return __call__ (__accu0__._nodelist_to_x, __accu0__, self.nodes, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 000914 */ 			}) ();
/* 000914 */ 		}
/* 000914 */ 		catch (__except0__) {
/* 000914 */ 			if (isinstance (__except0__, Exception)) {
/* 000914 */ 				var e = __except0__;
/* 000916 */ 				if (__t__ (!__t__ ((self._silent)))) {
/* 000917 */ 					(function () {
/* 000917 */ 						var __accu0__ = logger;
/* 000918 */ 						return __call__ (__accu0__.error, __accu0__, 'Error producing {} from latex-like minilanguage ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format ((function () {
/* 000918 */ 							var __accu1__ = fmt;
/* 000918 */ 							return __call__ (__accu1__.upper, __accu1__);
/* 000918 */ 						}) (), self.what, e, self.minilatex));
/* 000918 */ 					}) ();
/* 000918 */ 				}
/* 000922 */ 				__except0__.__cause__ = null;
/* 000922 */ 				throw __except0__;
/* 000922 */ 			}
/* 000922 */ 			else {
/* 000922 */ 				throw __except0__;
/* 000922 */ 			}
/* 000922 */ 		}
/* 000922 */ 	});},
/* 000925 */ 	get __html__ () {return __get__ (this, function (self) {
/* 000925 */ 		if (arguments.length) {
/* 000925 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000925 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000925 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000925 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000925 */ 					switch (__attrib0__) {
/* 000925 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000925 */ 					}
/* 000925 */ 				}
/* 000925 */ 			}
/* 000925 */ 		}
/* 000925 */ 		else {
/* 000925 */ 		}
/* 000926 */ 		return (function () {
/* 000926 */ 			var __accu0__ = self;
/* 000926 */ 			return __call__ (__accu0__.to_html, __accu0__);
/* 000926 */ 		}) ();
/* 000926 */ 	});},
/* 000928 */ 	get __jsonobject__ () {return __get__ (this, function (self) {
/* 000928 */ 		if (arguments.length) {
/* 000928 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000928 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000928 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000928 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000928 */ 					switch (__attrib0__) {
/* 000928 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000928 */ 					}
/* 000928 */ 				}
/* 000928 */ 			}
/* 000928 */ 		}
/* 000928 */ 		else {
/* 000928 */ 		}
/* 000932 */ 		return dict ({'minilatex': self.minilatex, 'text': self.text, 'html_norefs': (function () {
/* 000932 */ 			var __accu0__ = self;
/* 000932 */ 			return __call__ (__accu0__.to_html, __accu0__);
/* 000932 */ 		}) ()});
/* 000932 */ 	});},
/* 000935 */ 	get _nodelist_to_chars () {return __get__ (this, function (self, nodelist, doccontext) {
/* 000935 */ 		if (arguments.length) {
/* 000935 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000935 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000935 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000935 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000935 */ 					switch (__attrib0__) {
/* 000935 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000935 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000935 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000935 */ 					}
/* 000935 */ 				}
/* 000935 */ 			}
/* 000935 */ 		}
/* 000935 */ 		else {
/* 000935 */ 		}
/* 000936 */ 		var charslist = [];
/* 000937 */ 		var __iterable0__ = nodelist;
/* 000937 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000937 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000938 */ 			if (__t__ (n === null)) {
/* 000938 */ 				continue;
/* 000938 */ 			}
/* 000940 */ 			if (__t__ (!__t__ (((function () {
/* 000940 */ 				var __accu0__ = n;
/* 000940 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000940 */ 			}) ())))) {
/* 000942 */ 				var __except0__ = __call__ (ValueError, null, 'Expected chars-only nodes, got ‘{}<{}>’ in ‘{}’'.format ((function () {
/* 000942 */ 					var __accu0__ = n;
/* 000942 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000942 */ 				}) (), n.__class__.__name__, (function () {
/* 000942 */ 					var __accu0__ = nodelist;
/* 000942 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000942 */ 				}) ()));
/* 000942 */ 				__except0__.__cause__ = null;
/* 000942 */ 				throw __except0__;
/* 000942 */ 			}
/* 000944 */ 			(function () {
/* 000944 */ 				var __accu0__ = charslist;
/* 000944 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 000944 */ 			}) ();
/* 000944 */ 		}
/* 000945 */ 		return (function () {
/* 000945 */ 			var __accu0__ = '';
/* 000945 */ 			return __call__ (__accu0__.join, __accu0__, charslist);
/* 000945 */ 		}) ();
/* 000945 */ 	});},
/* 000947 */ 	get _nodelist_to_html () {return __get__ (this, function (self, nodelist, doccontext) {
/* 000947 */ 		if (arguments.length) {
/* 000947 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000947 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000947 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000947 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000947 */ 					switch (__attrib0__) {
/* 000947 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000947 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000947 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000947 */ 					}
/* 000947 */ 				}
/* 000947 */ 			}
/* 000947 */ 		}
/* 000947 */ 		else {
/* 000947 */ 		}
/* 000948 */ 		return (function () {
/* 000948 */ 			var __accu0__ = self;
/* 000948 */ 			return __call__ (__accu0__._nodelist_to_x, __accu0__, nodelist, doccontext, __kwargtrans__ ({fmt: 'html'}));
/* 000948 */ 		}) ();
/* 000948 */ 	});},
/* 000949 */ 	get _nodelist_to_text () {return __get__ (this, function (self, nodelist, doccontext) {
/* 000949 */ 		if (arguments.length) {
/* 000949 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000949 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000949 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000949 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000949 */ 					switch (__attrib0__) {
/* 000949 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 					}
/* 000949 */ 				}
/* 000949 */ 			}
/* 000949 */ 		}
/* 000949 */ 		else {
/* 000949 */ 		}
/* 000950 */ 		return (function () {
/* 000950 */ 			var __accu0__ = self;
/* 000950 */ 			return __call__ (__accu0__._nodelist_to_x, __accu0__, nodelist, doccontext, __kwargtrans__ ({fmt: 'text'}));
/* 000950 */ 		}) ();
/* 000950 */ 	});},
/* 000952 */ 	get _nodelist_to_x () {return __get__ (this, function (self, nodelist, doccontext, fmt) {
/* 000952 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000952 */ 			var fmt = 'html';
/* 000952 */ 		};
/* 000952 */ 		if (arguments.length) {
/* 000952 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000952 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000952 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000952 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000952 */ 					switch (__attrib0__) {
/* 000952 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000952 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000952 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000952 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 000952 */ 					}
/* 000952 */ 				}
/* 000952 */ 			}
/* 000952 */ 		}
/* 000952 */ 		else {
/* 000952 */ 		}
/* 000959 */ 		var nodelists_paragraphs = (function () {
/* 000959 */ 			var __accu0__ = nodelist;
/* 000959 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000959 */ 				if (arguments.length) {
/* 000959 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000959 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000959 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000959 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000959 */ 							switch (__attrib0__) {
/* 000959 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000959 */ 							}
/* 000959 */ 						}
/* 000959 */ 					}
/* 000959 */ 				}
/* 000959 */ 				else {
/* 000959 */ 				}
/* 000960 */ 				return __t__ ((function () {
/* 000960 */ 					var __accu1__ = n;
/* 000960 */ 					return __call__ (__accu1__.isNodeType, __accu1__, nodes.LatexSpecialsNode);
/* 000960 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000960 */ 			}));
/* 000960 */ 		}) ();
/* 000964 */ 		var html_paragraphs = (function () {
/* 000964 */ 			var __accu0__ = [];
/* 000964 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000964 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000968 */ 				var para_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000968 */ 				(function () {
/* 000968 */ 					var __accu1__ = __accu0__;
/* 000965 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000965 */ 						var __accu2__ = '';
/* 000965 */ 						return __call__ (__accu2__.join, __accu2__, (function () {
/* 000965 */ 							var __accu3__ = [];
/* 000965 */ 							var __iterable1__ = para_nodelist;
/* 000965 */ 							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000966 */ 								var node = __getitem__ (__iterable1__, __index1__);
/* 000966 */ 								(function () {
/* 000966 */ 									var __accu4__ = __accu3__;
/* 000966 */ 									return __call__ (__accu4__.append, __accu4__, (function () {
/* 000966 */ 										var __accu5__ = self;
/* 000966 */ 										return __call__ (__accu5__._node_to_x, __accu5__, node, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 000966 */ 									}) ());
/* 000966 */ 								}) ();
/* 000966 */ 							}
/* 000966 */ 							return __accu3__;
/* 000966 */ 						}) ());
/* 000966 */ 					}) ());
/* 000966 */ 				}) ();
/* 000966 */ 			}
/* 000966 */ 			return __accu0__;
/* 000966 */ 		}) ();
/* 000973 */ 		if (__t__ (__eq__ (__call__ (len, null, html_paragraphs), 1))) {
/* 000974 */ 			return __getitem__ (html_paragraphs, 0);
/* 000974 */ 		}
/* 000977 */ 		if (__t__ (__eq__ (fmt, 'html'))) {
/* 000978 */ 			var para_wrapper = (function __lambda__ (p) {
/* 000978 */ 				if (arguments.length) {
/* 000978 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000978 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000978 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000978 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000978 */ 							switch (__attrib0__) {
/* 000978 */ 								case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000978 */ 							}
/* 000978 */ 						}
/* 000978 */ 					}
/* 000978 */ 				}
/* 000978 */ 				else {
/* 000978 */ 				}
/* 000978 */ 				return __call__ (html_wrap_in_tag, null, 'p', (function () {
/* 000978 */ 					var __accu0__ = p;
/* 000978 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000978 */ 				}) ());
/* 000978 */ 			});
/* 000978 */ 		}
/* 000979 */ 		else if (__t__ (__eq__ (fmt, 'text'))) {
/* 000980 */ 			var para_wrapper = (function __lambda__ (p) {
/* 000980 */ 				if (arguments.length) {
/* 000980 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000980 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000980 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000980 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000980 */ 							switch (__attrib0__) {
/* 000980 */ 								case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000980 */ 							}
/* 000980 */ 						}
/* 000980 */ 					}
/* 000980 */ 				}
/* 000980 */ 				else {
/* 000980 */ 				}
/* 000980 */ 				return __add__ ((function () {
/* 000980 */ 					var __accu0__ = p;
/* 000980 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000980 */ 				}) (), '\n');
/* 000980 */ 			});
/* 000980 */ 		}
/* 000981 */ 		else {
/* 000982 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid format fmt={}'.format (fmt));
/* 000982 */ 			__except0__.__cause__ = null;
/* 000982 */ 			throw __except0__;
/* 000982 */ 		}
/* 000985 */ 		var full_html = (function () {
/* 000985 */ 			var __accu0__ = '\n';
/* 000985 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000985 */ 				var __accu1__ = [];
/* 000985 */ 				var __iterable0__ = html_paragraphs;
/* 000985 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000987 */ 					var p = __getitem__ (__iterable0__, __index0__);
/* 000988 */ 					if (__t__ ((function () {
/* 000988 */ 						var __accu2__ = p;
/* 000988 */ 						return __call__ (__accu2__.strip, __accu2__);
/* 000988 */ 					}) ())) {
/* 000988 */ 						(function () {
/* 000988 */ 							var __accu2__ = __accu1__;
/* 000986 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (para_wrapper, null, p));
/* 000986 */ 						}) ();
/* 000986 */ 					}
/* 000986 */ 				}
/* 000986 */ 				return __accu1__;
/* 000986 */ 			}) ());
/* 000986 */ 		}) ();
/* 000991 */ 		return full_html;
/* 000991 */ 	});},
/* 000993 */ 	get _charsnode_to_x () {return __get__ (this, function (self, node, fmt) {
/* 000993 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000993 */ 			var fmt = 'html';
/* 000993 */ 		};
/* 000993 */ 		if (arguments.length) {
/* 000993 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000993 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000993 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000993 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000993 */ 					switch (__attrib0__) {
/* 000993 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000993 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000993 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 000993 */ 					}
/* 000993 */ 				}
/* 000993 */ 			}
/* 000993 */ 		}
/* 000993 */ 		else {
/* 000993 */ 		}
/* 000994 */ 		if (__t__ (__eq__ (fmt, 'html'))) {
/* 000995 */ 			return __call__ (htmlescape, null, node.chars);
/* 000995 */ 		}
/* 000996 */ 		return node.chars;
/* 000996 */ 	});},
/* 000998 */ 	get _node_to_x () {return __get__ (this, function (self, node, doccontext, fmt) {
/* 000998 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000998 */ 			var fmt = 'html';
/* 000998 */ 		};
/* 000998 */ 		if (arguments.length) {
/* 000998 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000998 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000998 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000998 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000998 */ 					switch (__attrib0__) {
/* 000998 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000998 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000998 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000998 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 000998 */ 					}
/* 000998 */ 				}
/* 000998 */ 			}
/* 000998 */ 		}
/* 000998 */ 		else {
/* 000998 */ 		}
/* 001000 */ 		if (__t__ (node === null)) {
/* 001001 */ 			return '';
/* 001001 */ 		}
/* 001005 */ 		if (__t__ ((function () {
/* 001005 */ 			var __accu0__ = node;
/* 001005 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 001005 */ 		}) ())) {
/* 001006 */ 			return (function () {
/* 001006 */ 				var __accu0__ = self;
/* 001006 */ 				return __call__ (__accu0__._charsnode_to_x, __accu0__, node, __kwargtrans__ ({fmt: fmt}));
/* 001006 */ 			}) ();
/* 001006 */ 		}
/* 001008 */ 		if (__t__ ((function () {
/* 001008 */ 			var __accu0__ = node;
/* 001008 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 001008 */ 		}) ())) {
/* 001009 */ 			if (__t__ (!__t__ ((self._silent)))) {
/* 001010 */ 				(function () {
/* 001010 */ 					var __accu0__ = logger;
/* 001010 */ 					return __call__ (__accu0__.error, __accu0__, 'You cannot use LaTeX comments (‘%{}’). To type a percent sign, use ‘\\%’'.format (node.comment));
/* 001010 */ 				}) ();
/* 001010 */ 			}
/* 001014 */ 			var __except0__ = __call__ (ValueError, null, 'LaTeX comments not supported: ‘%{}’. To type a percent sign, use ‘\\%’'.format (node.comment));
/* 001014 */ 			__except0__.__cause__ = null;
/* 001014 */ 			throw __except0__;
/* 001014 */ 		}
/* 001017 */ 		if (__t__ ((function () {
/* 001017 */ 			var __accu0__ = node;
/* 001017 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 001017 */ 		}) ())) {
/* 001019 */ 			return (function () {
/* 001019 */ 				var __accu0__ = self;
/* 001019 */ 				return __call__ (__accu0__._nodelist_to_x, __accu0__, node.nodelist, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 001019 */ 			}) ();
/* 001019 */ 		}
/* 001022 */ 		if (__t__ (__t__ ((function () {
/* 001022 */ 			var __accu0__ = node;
/* 001022 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 001023 */ 		}) ()) || __t__ ((function () {
/* 001023 */ 			var __accu0__ = node;
/* 001023 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 001024 */ 		}) ()) || (function () {
/* 001024 */ 			var __accu0__ = node;
/* 001024 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 001024 */ 		}) ())) {
/* 001026 */ 			return (function () {
/* 001026 */ 				var __accu0__ = node.spec.item_to_html;
/* 001026 */ 				return __call__ (__accu0__.get_as, __accu0__, node, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 001026 */ 			}) ();
/* 001026 */ 		}
/* 001028 */ 		if (__t__ ((function () {
/* 001028 */ 			var __accu0__ = node;
/* 001028 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 001028 */ 		}) ())) {
/* 001029 */ 			return (function () {
/* 001029 */ 				var __accu0__ = __getitem__ (self._math_node_to_html, node.displaytype);
/* 001029 */ 				return __call__ (__accu0__.get_as, __accu0__, node, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 001029 */ 			}) ();
/* 001029 */ 		}
/* 001031 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 001031 */ 		__except0__.__cause__ = null;
/* 001031 */ 		throw __except0__;
/* 001031 */ 	});},
/* 001033 */ 	get get_nodearglist () {return __get__ (this, function (self, node, arg_i) {
/* 001033 */ 		if (arguments.length) {
/* 001033 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001033 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001033 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001033 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001033 */ 					switch (__attrib0__) {
/* 001033 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001033 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001033 */ 						case 'arg_i': var arg_i = __allkwargs0__ [__attrib0__]; break;
/* 001033 */ 					}
/* 001033 */ 				}
/* 001033 */ 			}
/* 001033 */ 		}
/* 001033 */ 		else {
/* 001033 */ 		}
/* 001034 */ 		if (__t__ (node.nodeargd === null)) {
/* 001035 */ 			return (function () {
/* 001035 */ 				var __accu0__ = nodes;
/* 001035 */ 				return __call__ (__accu0__.LatexNodeList, __accu0__, []);
/* 001035 */ 			}) ();
/* 001035 */ 		}
/* 001036 */ 		if (__t__ (node.nodeargd.argnlist === null)) {
/* 001037 */ 			return (function () {
/* 001037 */ 				var __accu0__ = nodes;
/* 001037 */ 				return __call__ (__accu0__.LatexNodeList, __accu0__, []);
/* 001037 */ 			}) ();
/* 001037 */ 		}
/* 001038 */ 		if (__t__ (__call__ (isinstance, null, arg_i, str))) {
/* 001040 */ 			var __break0__ = false;
/* 001040 */ 			var __iterable0__ = __call__ (enumerate, null, node.nodeargd.arguments_spec_list);
/* 001040 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001040 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001040 */ 				var j = __left0__ [0];
/* 001040 */ 				var arg_spec = __left0__ [1];
/* 001041 */ 				if (__t__ (__eq__ (arg_spec.argname, arg_i))) {
/* 001041 */ 					__break0__ = true;
/* 001041 */ 					break;
/* 001041 */ 				}
/* 001041 */ 			}
/* 001043 */ 			if (!__break0__) {
/* 001044 */ 				var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ found in node node={}'.format (arg_i, node));
/* 001044 */ 				__except0__.__cause__ = null;
/* 001044 */ 				throw __except0__;
/* 001044 */ 			}
/* 001045 */ 			var arg_i = j;
/* 001045 */ 		}
/* 001046 */ 		if (__t__ (__ge__ (arg_i, __call__ (len, null, node.nodeargd.argnlist)))) {
/* 001047 */ 			(function () {
/* 001047 */ 				var __accu0__ = logger;
/* 001047 */ 				return __call__ (__accu0__.error, __accu0__, 'Invalid argument #{} for macro ‘\\{}’'.format (arg_i, node.macroname));
/* 001047 */ 			}) ();
/* 001048 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid argument #{} for macro ‘\\{}’'.format (arg_i, node.macroname));
/* 001048 */ 			__except0__.__cause__ = null;
/* 001048 */ 			throw __except0__;
/* 001048 */ 		}
/* 001049 */ 		var argnode = __getitem__ (node.nodeargd.argnlist, arg_i);
/* 001050 */ 		if (__t__ (argnode === null)) {
/* 001051 */ 			return (function () {
/* 001051 */ 				var __accu0__ = nodes;
/* 001051 */ 				return __call__ (__accu0__.LatexNodeList, __accu0__, [null]);
/* 001051 */ 			}) ();
/* 001051 */ 		}
/* 001052 */ 		if (__t__ ((function () {
/* 001052 */ 			var __accu0__ = argnode;
/* 001052 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 001052 */ 		}) ())) {
/* 001053 */ 			return argnode.nodelist;
/* 001053 */ 		}
/* 001054 */ 		return (function () {
/* 001054 */ 			var __accu0__ = nodes;
/* 001054 */ 			return __call__ (__accu0__.LatexNodeList, __accu0__, [argnode]);
/* 001054 */ 		}) ();
/* 001054 */ 	});}
/* 001054 */ });
/* 000005 */ 
//# sourceMappingURL=minilatextohtml.map