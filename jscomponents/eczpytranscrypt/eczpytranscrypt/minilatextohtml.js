/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:02
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
/* 000005 */ export {macrospec, LatexDelimitedVerbatimParser, nodes, LatexVerbatimEnvironmentContentsParser, LatexGeneralNodesParser, latexnodes, latexwalker, LatexCharsGroupParser, LatexArgumentSpec, LatexCharsCommaSeparatedListParser};
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
/* 000084 */ 			var __accu0__ = __call__ (dict, null, attrs);
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
/* 000204 */ 		if (__t__ (target_href === null)) {
/* 000205 */ 			return __call__ (html_wrap_in_tag, null, 'span', display_html, __kwargtrans__ ({class_: 'ref'}));
/* 000205 */ 		}
/* 000213 */ 		return __call__ (html_wrap_in_tag, null, 'a', display_html, __kwargtrans__ ({attrs: dict ({'href': __call__ (htmlescape, null, target_href)}), class_: 'ref'}));
/* 000213 */ 	});},
/* 000217 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000218 */ 		var tgt = (function () {
/* 000218 */ 			var __accu0__ = doccontext;
/* 000218 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'reftarget');
/* 000218 */ 		}) ();
/* 000219 */ 		if (__t__ (__t__ (__ne__ (__call__ (len, null, tgt), 1)) || !__t__ (((function () {
/* 000219 */ 			var __accu0__ = __getitem__ (tgt, 0);
/* 000219 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000219 */ 		}) ())))) {
/* 000220 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid \\ref invocation: expected single braced argument');
/* 000220 */ 			__except0__.__cause__ = null;
/* 000220 */ 			throw __except0__;
/* 000220 */ 		}
/* 000221 */ 		var reftarget = __getitem__ (tgt, 0).chars;
/* 000222 */ 		return (function () {
/* 000222 */ 			var __accu0__ = self;
/* 000222 */ 			return __call__ (__accu0__.ref_to_html, __accu0__, reftarget, doccontext);
/* 000222 */ 		}) ();
/* 000222 */ 	});},
/* 000224 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000225 */ 		var tgt = (function () {
/* 000225 */ 			var __accu0__ = doccontext;
/* 000225 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'reftarget');
/* 000225 */ 		}) ();
/* 000226 */ 		return '<{}>'.format ((function () {
/* 000226 */ 			var __accu0__ = tgt;
/* 000226 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000226 */ 		}) ());
/* 000226 */ 	});}
/* 000226 */ });
/* 000228 */ export var ItemToHtmlEqRef =  __class__ ('ItemToHtmlEqRef', [ItemToHtmlWrapTag], {
/* 000228 */ 	__module__: __name__,
/* 000229 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000231 */ 		var tgt = (function () {
/* 000231 */ 			var __accu0__ = doccontext;
/* 000231 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'reftarget');
/* 000231 */ 		}) ();
/* 000233 */ 		if (__t__ (__t__ (__ne__ (__call__ (len, null, tgt), 1)) || !__t__ (((function () {
/* 000233 */ 			var __accu0__ = __getitem__ (tgt, 0);
/* 000233 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000233 */ 		}) ())))) {
/* 000234 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid \\eqref invocation: expected single braced argument');
/* 000234 */ 			__except0__.__cause__ = null;
/* 000234 */ 			throw __except0__;
/* 000234 */ 		}
/* 000236 */ 		var eqref_target = __getitem__ (tgt, 0).chars;
/* 000240 */ 		return __call__ (html_wrap_in_tag, null, 'span', __add__ (__add__ ('\\eqref{', __call__ (htmlescape, null, eqref_target)), '}'), __kwargtrans__ ({class_: 'inline-math eqref'}));
/* 000240 */ 	});}
/* 000240 */ });
/* 000245 */ export var ItemToHtmlHyperref =  __class__ ('ItemToHtmlHyperref', [ItemToHtmlRef], {
/* 000245 */ 	__module__: __name__,
/* 000246 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
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
/* 000248 */ 		var display_html = (function () {
/* 000248 */ 			var __accu0__ = doccontext;
/* 000248 */ 			return __call__ (__accu0__.nodearg_to_html, __accu0__, node, 1);
/* 000248 */ 		}) ();
/* 000249 */ 		return (function () {
/* 000249 */ 			var __accu0__ = self;
/* 000249 */ 			return __call__ (__accu0__.ref_to_html, __accu0__, reftarget, __kwargtrans__ ({doccontext: doccontext, display_html: display_html}));
/* 000249 */ 		}) ();
/* 000249 */ 	});},
/* 000252 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000253 */ 		var reftarget = (function () {
/* 000253 */ 			var __accu0__ = doccontext;
/* 000253 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 0);
/* 000253 */ 		}) ();
/* 000254 */ 		var display_text = (function () {
/* 000254 */ 			var __accu0__ = doccontext;
/* 000254 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 1);
/* 000254 */ 		}) ();
/* 000255 */ 		return '{}<{}>'.format (display_text, reftarget);
/* 000255 */ 	});}
/* 000255 */ });
/* 000257 */ export var ItemToHtmlCite =  __class__ ('ItemToHtmlCite', [ItemToHtmlWrapTag], {
/* 000257 */ 	__module__: __name__,
/* 000259 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000261 */ 		var optional_cite_extra_html_nodelist = (function () {
/* 000261 */ 			var __accu0__ = doccontext;
/* 000261 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'cite_pre_text');
/* 000261 */ 		}) ();
/* 000264 */ 		if (__t__ (__t__ (optional_cite_extra_html_nodelist) && __t__ (__call__ (len, null, optional_cite_extra_html_nodelist)) && __getitem__ (optional_cite_extra_html_nodelist, 0))) {
/* 000267 */ 			var optional_cite_extra_html = (function () {
/* 000267 */ 				var __accu0__ = doccontext;
/* 000267 */ 				return __call__ (__accu0__.nodelist_to_html, __accu0__, optional_cite_extra_html_nodelist);
/* 000267 */ 			}) ();
/* 000267 */ 		}
/* 000268 */ 		else {
/* 000269 */ 			var optional_cite_extra_html = null;
/* 000269 */ 		}
/* 000271 */ 		var citekeylist_nodelist = (function () {
/* 000271 */ 			var __accu0__ = doccontext;
/* 000271 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'citekey');
/* 000271 */ 		}) ();
/* 000279 */ 		var s_items = [];
/* 000280 */ 		var __iterable0__ = citekeylist_nodelist;
/* 000280 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000280 */ 			var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000282 */ 			if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000282 */ 				continue;
/* 000282 */ 			}
/* 000285 */ 			var citekey_verbatim = (function () {
/* 000285 */ 				var __accu0__ = citekeygroupnode;
/* 000285 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000285 */ 			}) ();
/* 000286 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000288 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000288 */ 			}
/* 000290 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000292 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000292 */ 			}
/* 000295 */ 			if (__t__ (doccontext.add_citation === null)) {
/* 000297 */ 				(function () {
/* 000297 */ 					var __accu0__ = s_items;
/* 000300 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (html_wrap_in_tag, null, 'span', __call__ (htmlescape, null, '[{}]'.format (citekey_verbatim)), __kwargtrans__ ({class_: 'cite'})));
/* 000300 */ 				}) ();
/* 000300 */ 				continue;
/* 000300 */ 			}
/* 000308 */ 			if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000309 */ 				var __left0__ = (function () {
/* 000309 */ 					var __accu0__ = citekey_verbatim;
/* 000309 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000309 */ 				}) ();
/* 000309 */ 				var citation_key_prefix = __left0__ [0];
/* 000309 */ 				var citation_key = __left0__ [1];
/* 000312 */ 				var citation_key_prefix = (function () {
/* 000312 */ 					var __accu0__ = (function () {
/* 000312 */ 						var __accu1__ = citation_key_prefix;
/* 000312 */ 						return __call__ (__accu1__.strip, __accu1__);
/* 000312 */ 					}) ();
/* 000312 */ 					return __call__ (__accu0__.lower, __accu0__);
/* 000312 */ 				}) ();
/* 000312 */ 			}
/* 000313 */ 			else {
/* 000314 */ 				var __left0__ = tuple ([null, citekey_verbatim]);
/* 000314 */ 				var citation_key_prefix = __left0__ [0];
/* 000314 */ 				var citation_key = __left0__ [1];
/* 000314 */ 			}
/* 000317 */ 			var __left0__ = (function () {
/* 000317 */ 				var __accu0__ = doccontext;
/* 000317 */ 				return __call__ (__accu0__.add_citation, __accu0__, citation_key_prefix, citation_key, optional_cite_extra_html);
/* 000317 */ 			}) ();
/* 000317 */ 			var citelabel_html = __left0__ [0];
/* 000317 */ 			var citehref = __left0__ [1];
/* 000320 */ 			if (__t__ (citehref === null)) {
/* 000321 */ 				var item_cite_html = __call__ (html_wrap_in_tag, null, 'span', citelabel_html, __kwargtrans__ ({class_: 'cite'}));
/* 000321 */ 			}
/* 000325 */ 			else {
/* 000331 */ 				var item_cite_html = __call__ (html_wrap_in_tag, null, 'a', citelabel_html, __kwargtrans__ ({attrs: dict ({'href': __call__ (htmlescape, null, citehref)}), class_: 'cite'}));
/* 000331 */ 			}
/* 000337 */ 			(function () {
/* 000337 */ 				var __accu0__ = s_items;
/* 000337 */ 				return __call__ (__accu0__.append, __accu0__, item_cite_html);
/* 000337 */ 			}) ();
/* 000337 */ 		}
/* 000339 */ 		var s = (function () {
/* 000339 */ 			var __accu0__ = '';
/* 000339 */ 			return __call__ (__accu0__.join, __accu0__, s_items);
/* 000339 */ 		}) ();
/* 000342 */ 		return s;
/* 000342 */ 	});},
/* 000344 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000345 */ 		var optional_cite_extra_text = (function () {
/* 000345 */ 			var __accu0__ = doccontext;
/* 000345 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 'cite_pre_text');
/* 000345 */ 		}) ();
/* 000346 */ 		var citekeylist_nodelist = (function () {
/* 000346 */ 			var __accu0__ = doccontext;
/* 000346 */ 			return __call__ (__accu0__.get_nodearglist, __accu0__, node, 'citekey');
/* 000346 */ 		}) ();
/* 000348 */ 		var ckeys = (function () {
/* 000348 */ 			var __accu0__ = [];
/* 000348 */ 			var __iterable0__ = citekeylist_nodelist.nodelist;
/* 000348 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000350 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000350 */ 				if (__t__ (n !== null)) {
/* 000351 */ 					(function () {
/* 000351 */ 						var __accu1__ = __accu0__;
/* 000349 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000349 */ 							var __accu2__ = self;
/* 000349 */ 							return __call__ (__accu2__._pretty_citekey_as_text, __accu2__, n, doccontext);
/* 000349 */ 						}) ());
/* 000349 */ 					}) ();
/* 000349 */ 				}
/* 000349 */ 			}
/* 000349 */ 			return __accu0__;
/* 000349 */ 		}) ();
/* 000354 */ 		var citekeys = (function () {
/* 000354 */ 			var __accu0__ = ',';
/* 000354 */ 			return __call__ (__accu0__.join, __accu0__, ckeys);
/* 000354 */ 		}) ();
/* 000356 */ 		if (__t__ (optional_cite_extra_text)) {
/* 000357 */ 			return '[{}; {}]'.format (citekeys, optional_cite_extra_text);
/* 000357 */ 		}
/* 000358 */ 		return '[{}]'.format (citekeys);
/* 000358 */ 	});},
/* 000360 */ 	get _pretty_citekey_as_text () {return __get__ (this, function (self, n, doccontext) {
/* 000360 */ 		if (arguments.length) {
/* 000360 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 					switch (__attrib0__) {
/* 000360 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000360 */ 		else {
/* 000360 */ 		}
/* 000361 */ 		var key = (function () {
/* 000361 */ 			var __accu0__ = doccontext;
/* 000361 */ 			return __call__ (__accu0__.nodelist_to_text, __accu0__, (function () {
/* 000361 */ 				var __accu1__ = nodes;
/* 000361 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, [n]);
/* 000361 */ 			}) ());
/* 000361 */ 		}) ();
/* 000362 */ 		var key = (function () {
/* 000362 */ 			var __accu0__ = re;
/* 000362 */ 			return __call__ (__accu0__.sub, __accu0__, '^[a-zA-Z]+:', '', key);
/* 000362 */ 		}) ();
/* 000363 */ 		return key;
/* 000363 */ 	});}
/* 000363 */ });
/* 000366 */ export var ItemToHtmlFootnote =  __class__ ('ItemToHtmlFootnote', [ItemToHtmlWrapTag], {
/* 000366 */ 	__module__: __name__,
/* 000367 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000368 */ 		var fntext_html = (function () {
/* 000368 */ 			var __accu0__ = doccontext;
/* 000368 */ 			return __call__ (__accu0__.nodearg_to_html, __accu0__, node, 'footnotetext');
/* 000368 */ 		}) ();
/* 000370 */ 		if (__t__ (doccontext.add_footnote === null)) {
/* 000372 */ 			return '&lt;footnote&gt;';
/* 000372 */ 		}
/* 000374 */ 		var __left0__ = (function () {
/* 000374 */ 			var __accu0__ = doccontext;
/* 000374 */ 			return __call__ (__accu0__.add_footnote, __accu0__, fntext_html);
/* 000374 */ 		}) ();
/* 000374 */ 		var fnlabel_html = __left0__ [0];
/* 000374 */ 		var fnhref = __left0__ [1];
/* 000376 */ 		if (__t__ (fnhref === null)) {
/* 000377 */ 			return __call__ (html_wrap_in_tag, null, 'span', fnlabel_html, __kwargtrans__ ({class_: 'footnote'}));
/* 000377 */ 		}
/* 000387 */ 		return __call__ (html_wrap_in_tag, null, 'a', fnlabel_html, __kwargtrans__ ({attrs: dict ({'href': __call__ (htmlescape, null, fnhref)}), class_: 'footnote'}));
/* 000387 */ 	});},
/* 000392 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000393 */ 		var fntext_text = (function () {
/* 000393 */ 			var __accu0__ = doccontext;
/* 000393 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 'footnotetext');
/* 000393 */ 		}) ();
/* 000394 */ 		return __add__ (__add__ ('{', fntext_text), '}');
/* 000394 */ 	});}
/* 000394 */ });
/* 000396 */ export var ItemToHtmlHref =  __class__ ('ItemToHtmlHref', [ItemToHtmlWrapTag], {
/* 000396 */ 	__module__: __name__,
/* 000397 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000398 */ 		var url = (function () {
/* 000398 */ 			var __accu0__ = doccontext;
/* 000398 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'url');
/* 000398 */ 		}) ();
/* 000399 */ 		var disphtml = (function () {
/* 000399 */ 			var __accu0__ = doccontext;
/* 000399 */ 			return __call__ (__accu0__.nodearg_to_html, __accu0__, node, 'displaytext');
/* 000399 */ 		}) ();
/* 000401 */ 		return __call__ (html_wrap_in_tag, null, 'a', disphtml, __kwargtrans__ ({attrs: dict ({'href': url, 'target': '_blank'}), class_: 'href'}));
/* 000401 */ 	});},
/* 000408 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000408 */ 		if (arguments.length) {
/* 000408 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 					switch (__attrib0__) {
/* 000408 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		else {
/* 000408 */ 		}
/* 000409 */ 		var url = (function () {
/* 000409 */ 			var __accu0__ = doccontext;
/* 000409 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'url');
/* 000409 */ 		}) ();
/* 000410 */ 		var disptext = (function () {
/* 000410 */ 			var __accu0__ = doccontext;
/* 000410 */ 			return __call__ (__accu0__.nodearg_to_text, __accu0__, node, 'displaytext');
/* 000410 */ 		}) ();
/* 000411 */ 		return __add__ (disptext, ' <{}>'.format (url));
/* 000411 */ 	});}
/* 000411 */ });
/* 000413 */ export var ItemToHtmlUrl =  __class__ ('ItemToHtmlUrl', [ItemToHtmlWrapTag], {
/* 000413 */ 	__module__: __name__,
/* 000414 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000415 */ 		var url = (function () {
/* 000415 */ 			var __accu0__ = doccontext;
/* 000415 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'url');
/* 000415 */ 		}) ();
/* 000417 */ 		var url_display = url;
/* 000418 */ 		var __iterable0__ = tuple (['http://', 'https://']);
/* 000418 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000418 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000419 */ 			if (__t__ ((function () {
/* 000419 */ 				var __accu0__ = url_display;
/* 000419 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000419 */ 			}) ())) {
/* 000420 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000420 */ 				break;
/* 000420 */ 			}
/* 000420 */ 		}
/* 000422 */ 		var __iterable0__ = tuple (['/']);
/* 000422 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000422 */ 			var suffix = __getitem__ (__iterable0__, __index0__);
/* 000423 */ 			if (__t__ (__t__ (__call__ (len, null, suffix)) && (function () {
/* 000423 */ 				var __accu0__ = url_display;
/* 000423 */ 				return __call__ (__accu0__.endswith, __accu0__, suffix);
/* 000423 */ 			}) ())) {
/* 000424 */ 				var url_display = __getslice__ (url_display, 0, __neg__ (__call__ (len, null, suffix)), 1);
/* 000424 */ 			}
/* 000424 */ 		}
/* 000426 */ 		return __call__ (html_wrap_in_tag, null, 'a', url_display, __kwargtrans__ ({attrs: dict ({'href': url, 'target': '_blank'}), class_: 'href'}));
/* 000426 */ 	});},
/* 000433 */ 	get as_text () {return __get__ (this, function (self, node, doccontext) {
/* 000433 */ 		if (arguments.length) {
/* 000433 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000433 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000433 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000433 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000433 */ 					switch (__attrib0__) {
/* 000433 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 					}
/* 000433 */ 				}
/* 000433 */ 			}
/* 000433 */ 		}
/* 000433 */ 		else {
/* 000433 */ 		}
/* 000434 */ 		var url = (function () {
/* 000434 */ 			var __accu0__ = doccontext;
/* 000434 */ 			return __call__ (__accu0__.nodearg_to_chars, __accu0__, node, 'url');
/* 000434 */ 		}) ();
/* 000435 */ 		return '<{}>'.format (url);
/* 000435 */ 	});}
/* 000435 */ });
/* 000438 */ export var ItemToHtmlFloat =  __class__ ('ItemToHtmlFloat', [ItemToHtmlBase], {
/* 000438 */ 	__module__: __name__,
/* 000439 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name) {
/* 000439 */ 		if (typeof float_type == 'undefined' || (float_type != null && float_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var float_type = 'figure';
/* 000439 */ 		};
/* 000439 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var float_caption_name = 'Figure';
/* 000439 */ 		};
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000440 */ 		self.float_type = float_type;
/* 000441 */ 		self.float_caption_name = float_caption_name;
/* 000441 */ 	});},
/* 000443 */ 	get __call__ () {return __get__ (this, function (self, node, doccontext) {
/* 000443 */ 		if (arguments.length) {
/* 000443 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000443 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000443 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000443 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000443 */ 					switch (__attrib0__) {
/* 000443 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 					}
/* 000443 */ 				}
/* 000443 */ 			}
/* 000443 */ 		}
/* 000443 */ 		else {
/* 000443 */ 		}
/* 000445 */ 		var figobj = __call__ (Float, null, __kwargtrans__ ({float_type: self.float_type, float_caption_name: self.float_caption_name}));
/* 000449 */ 		figobj.resource_parent = doccontext.resource_parent;
/* 000451 */ 		var body_nodelist = node.nodelist;
/* 000454 */ 		var __iterable0__ = body_nodelist;
/* 000454 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000454 */ 			var bodynode = __getitem__ (__iterable0__, __index0__);
/* 000455 */ 			if (__t__ (bodynode === null)) {
/* 000455 */ 				continue;
/* 000455 */ 			}
/* 000457 */ 			if (__t__ ((function () {
/* 000457 */ 				var __accu0__ = bodynode;
/* 000457 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000457 */ 			}) ())) {
/* 000458 */ 				if (__t__ (__eq__ (bodynode.macroname, 'includegraphics'))) {
/* 000459 */ 					if (__t__ (figobj.contents_image_filename !== null)) {
/* 000460 */ 						var __except0__ = __call__ (ValueError, null, "You can't use \\includegraphics twice in a figure");
/* 000460 */ 						__except0__.__cause__ = null;
/* 000460 */ 						throw __except0__;
/* 000460 */ 					}
/* 000464 */ 					var includegraphics_options = (function () {
/* 000464 */ 						var __accu0__ = doccontext;
/* 000464 */ 						return __call__ (__accu0__.nodearg_to_chars, __accu0__, bodynode, 'options');
/* 000464 */ 					}) ();
/* 000466 */ 					var includegraphics_filename = (function () {
/* 000466 */ 						var __accu0__ = doccontext;
/* 000466 */ 						return __call__ (__accu0__.nodearg_to_chars, __accu0__, bodynode, 'filename');
/* 000466 */ 					}) ();
/* 000469 */ 					if (__t__ (__t__ (includegraphics_options !== null) && (function () {
/* 000469 */ 						var __accu0__ = includegraphics_options;
/* 000469 */ 						return __call__ (__accu0__.strip, __accu0__);
/* 000469 */ 					}) ())) {
/* 000470 */ 						var __except0__ = __call__ (ValueError, null, 'Options to \\includegraphics[...] are not supported.  Please size and trim your figure directly in the source file.');
/* 000470 */ 						__except0__.__cause__ = null;
/* 000470 */ 						throw __except0__;
/* 000470 */ 					}
/* 000475 */ 					figobj.contentstype = 'image_filename';
/* 000476 */ 					figobj.contents_image_filename = includegraphics_filename;
/* 000476 */ 					continue;
/* 000476 */ 				}
/* 000479 */ 				if (__t__ (__eq__ (bodynode.macroname, 'caption'))) {
/* 000480 */ 					if (__t__ (figobj.caption !== null)) {
/* 000481 */ 						var __except0__ = __call__ (ValueError, null, "You can't use \\caption twice in a figure");
/* 000481 */ 						__except0__.__cause__ = null;
/* 000481 */ 						throw __except0__;
/* 000481 */ 					}
/* 000484 */ 					var caption_html = (function () {
/* 000484 */ 						var __accu0__ = doccontext;
/* 000484 */ 						return __call__ (__accu0__.nodearg_to_html, __accu0__, bodynode, 'captiontext');
/* 000484 */ 					}) ();
/* 000485 */ 					figobj.caption = caption_html;
/* 000485 */ 					continue;
/* 000485 */ 				}
/* 000488 */ 				if (__t__ (__eq__ (bodynode.macroname, 'label'))) {
/* 000489 */ 					if (__t__ (figobj.label !== null)) {
/* 000490 */ 						var __except0__ = __call__ (ValueError, null, "You can't use \\label twice in a figure");
/* 000490 */ 						__except0__.__cause__ = null;
/* 000490 */ 						throw __except0__;
/* 000490 */ 					}
/* 000493 */ 					var label = (function () {
/* 000493 */ 						var __accu0__ = doccontext;
/* 000493 */ 						return __call__ (__accu0__.nodearg_to_chars, __accu0__, bodynode, 'reftarget');
/* 000493 */ 					}) ();
/* 000495 */ 					if (__t__ (!__t__ (((function () {
/* 000495 */ 						var __accu0__ = label;
/* 000495 */ 						return __call__ (__accu0__.startswith, __accu0__, __add__ (self.float_type, ':'));
/* 000495 */ 					}) ())))) {
/* 000496 */ 						var __except0__ = __call__ (ValueError, null, 'Float labels must have a prefix that is equal to the float type; e.g., figure labels must have the form \\label{figure:XYZ}.');
/* 000496 */ 						__except0__.__cause__ = null;
/* 000496 */ 						throw __except0__;
/* 000496 */ 					}
/* 000501 */ 					var label = __getslice__ (label, __add__ (__call__ (len, null, self.float_type), 1), null, 1);
/* 000502 */ 					figobj.label = label;
/* 000502 */ 					continue;
/* 000502 */ 				}
/* 000502 */ 			}
/* 000505 */ 			if (__t__ ((function () {
/* 000505 */ 				var __accu0__ = bodynode;
/* 000505 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000505 */ 			}) ())) {
/* 000506 */ 				if (__t__ (!__t__ (((function () {
/* 000506 */ 					var __accu0__ = bodynode.chars;
/* 000506 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000506 */ 				}) ())))) {
/* 000506 */ 					continue;
/* 000506 */ 				}
/* 000506 */ 			}
/* 000512 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Encountered invalid node in float environment body that is not one of \\includegraphics, \\caption, or \\label:', __call__ (repr, null, bodynode)));
/* 000512 */ 			__except0__.__cause__ = null;
/* 000512 */ 			throw __except0__;
/* 000512 */ 		}
/* 000515 */ 		if (__t__ (doccontext.add_float === null)) {
/* 000516 */ 			return __add__ (__add__ ('&lt;', self.float_caption_name), '&gt;');
/* 000516 */ 		}
/* 000518 */ 		var float_html = (function () {
/* 000518 */ 			var __accu0__ = doccontext;
/* 000518 */ 			return __call__ (__accu0__.add_float, __accu0__, figobj);
/* 000518 */ 		}) ();
/* 000519 */ 		return float_html;
/* 000519 */ 	});}
/* 000519 */ });
/* 000527 */ export var _make_lw_context = function () {
/* 000527 */ 	if (arguments.length) {
/* 000527 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000527 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000527 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000527 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000527 */ 			}
/* 000527 */ 		}
/* 000527 */ 	}
/* 000527 */ 	else {
/* 000527 */ 	}
/* 000528 */ 	var lw_context = (function () {
/* 000528 */ 		var __accu0__ = macrospec;
/* 000528 */ 		return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000528 */ 	}) ();
/* 000529 */ 	(function () {
/* 000529 */ 		var __accu0__ = lw_context;
/* 000560 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'base-formatting', __kwargtrans__ ({macros: [__call__ (MiniHtmlMacroSpec, null, 'textbackslash', '', __kwargtrans__ ({item_to_html: '\\'})), __call__ (MiniHtmlMacroSpec, null, '%', '', __kwargtrans__ ({item_to_html: '%'})), __call__ (MiniHtmlMacroSpec, null, '#', '', __kwargtrans__ ({item_to_html: '#'})), __call__ (MiniHtmlMacroSpec, null, '&', '', __kwargtrans__ ({item_to_html: '&amp;'})), __call__ (MiniHtmlMacroSpec, null, '$', '', __kwargtrans__ ({item_to_html: '$'})), __call__ (MiniHtmlMacroSpec, null, ' ', '', __kwargtrans__ ({item_to_html: ' '})), __call__ (MiniHtmlMacroSpec, null, '{', '', __kwargtrans__ ({item_to_html: '{'})), __call__ (MiniHtmlMacroSpec, null, '}', '', __kwargtrans__ ({item_to_html: '}'})), __call__ (MiniHtmlMacroSpec, null, 'emph', '{', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlWrapTag, null, __kwargtrans__ ({class_: 'emph'}))})), __call__ (MiniHtmlMacroSpec, null, 'textit', '{', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlWrapTag, null, __kwargtrans__ ({class_: 'textit'}))})), __call__ (MiniHtmlMacroSpec, null, 'textbf', '{', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlWrapTag, null, __kwargtrans__ ({class_: 'textbf'}))}))], specials: [__call__ (MiniHtmlSpecialsSpec, null, '~', __kwargtrans__ ({item_to_html: '\xa0'})), __call__ (MiniHtmlSpecialsSpec, null, '\n\n')]}));
/* 000560 */ 	}) ();
/* 000565 */ 	(function () {
/* 000565 */ 		var __accu0__ = lw_context;
/* 000565 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'math-environments', __kwargtrans__ ({environments: (function () {
/* 000565 */ 			var __accu1__ = [];
/* 000567 */ 			var __iterable0__ = tuple (['align', 'align*', 'gather', 'gather*', 'split', 'split*']);
/* 000567 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000582 */ 				var math_environment_name = __getitem__ (__iterable0__, __index0__);
/* 000576 */ 				(function () {
/* 000576 */ 					var __accu2__ = __accu1__;
/* 000573 */ 					return __call__ (__accu2__.append, __accu2__, __call__ (MiniHtmlEnvironmentSpec, null, math_environment_name, '', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlVerbatimWrapTag, null, __kwargtrans__ ({tagname: 'span', class_: 'display-math env-{}'.format ((function () {
/* 000573 */ 						var __accu3__ = math_environment_name;
/* 000573 */ 						return __call__ (__accu3__.py_replace, __accu3__, '*', '-star');
/* 000573 */ 					}) ())}))})));
/* 000573 */ 				}) ();
/* 000573 */ 			}
/* 000573 */ 			return __accu1__;
/* 000573 */ 		}) ()}));
/* 000573 */ 	}) ();
/* 000586 */ 	(function () {
/* 000586 */ 		var __accu0__ = lw_context;
/* 000671 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'x-refs', __kwargtrans__ ({macros: [__call__ (MiniHtmlMacroSpec, null, 'ref', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexCharsGroupParser, null), __kwargtrans__ ({argname: 'reftarget'}))], item_to_html: __call__ (ItemToHtmlRef, null)})), __call__ (MiniHtmlMacroSpec, null, 'eqref', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexCharsGroupParser, null), __kwargtrans__ ({argname: 'reftarget'}))], item_to_html: __call__ (ItemToHtmlEqRef, null)})), __call__ (MiniHtmlMacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexCharsGroupParser, null), __kwargtrans__ ({argname: 'reftarget'}))], item_to_html: __call__ (ItemToHtmlError, null)})), __call__ (MiniHtmlMacroSpec, null, 'cite', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (LatexArgumentSpec, null, __call__ (LatexCharsCommaSeparatedListParser, null, __kwargtrans__ ({enable_comments: false})), __kwargtrans__ ({argname: 'citekey'}))], item_to_html: __call__ (ItemToHtmlCite, null)})), __call__ (MiniHtmlMacroSpec, null, 'footnote', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '{', __kwargtrans__ ({argname: 'footnotetext'}))], item_to_html: __call__ (ItemToHtmlFootnote, null)})), __call__ (MiniHtmlMacroSpec, null, 'href', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexDelimitedVerbatimParser, null, tuple (['{', '}'])), __kwargtrans__ ({argname: 'url'})), __call__ (LatexArgumentSpec, null, '{', __kwargtrans__ ({argname: 'displaytext'}))], item_to_html: __call__ (ItemToHtmlHref, null)})), __call__ (MiniHtmlMacroSpec, null, 'hyperref', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '[', __kwargtrans__ ({argname: 'target'})), __call__ (LatexArgumentSpec, null, '{', __kwargtrans__ ({argname: 'displaytext'}))], item_to_html: __call__ (ItemToHtmlHyperref, null)})), __call__ (MiniHtmlMacroSpec, null, 'url', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, __call__ (LatexDelimitedVerbatimParser, null, tuple (['{', '}'])), __kwargtrans__ ({argname: 'url'}))], item_to_html: __call__ (ItemToHtmlUrl, null)}))]}));
/* 000671 */ 	}) ();
/* 000675 */ 	(function () {
/* 000675 */ 		var __accu0__ = lw_context;
/* 000707 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'floats', __kwargtrans__ ({macros: [__call__ (MiniHtmlMacroSpec, null, 'includegraphics', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '[', 'options'), __call__ (LatexArgumentSpec, null, __call__ (LatexCharsGroupParser, null), 'filename')]})), __call__ (MiniHtmlMacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '[', 'shortcaptiontext'), __call__ (LatexArgumentSpec, null, '{', 'captiontext')]}))], environments: [__call__ (MiniHtmlEnvironmentSpec, null, 'figure', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlFloat, null, 'figure', 'Figure')})), __call__ (MiniHtmlEnvironmentSpec, null, 'table', __kwargtrans__ ({item_to_html: __call__ (ItemToHtmlFloat, null, 'table', 'Table')}))]}));
/* 000707 */ 	}) ();
/* 000711 */ 	(function () {
/* 000711 */ 		var __accu0__ = lw_context;
/* 000720 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'verbatim-input', __kwargtrans__ ({environments: new set ([__call__ (MiniHtmlEnvironmentSpec, null, 'verbatiminput', __kwargtrans__ ({arguments_spec_list: [], body_parser: __call__ (LatexVerbatimEnvironmentContentsParser, null, __kwargtrans__ ({environment_name: 'verbatiminput'})), item_to_html: __call__ (ItemToHtmlVerbatimContentsWrapTag, null, __kwargtrans__ ({class_: 'verbatiminput', is_environment: true}))}))])}));
/* 000720 */ 	}) ();
/* 000730 */ 	(function () {
/* 000730 */ 		var __accu0__ = lw_context;
/* 000730 */ 		return __call__ (__accu0__.set_unknown_macro_spec, __accu0__, __call__ (MiniHtmlMacroSpec, null, ''));
/* 000730 */ 	}) ();
/* 000731 */ 	(function () {
/* 000731 */ 		var __accu0__ = lw_context;
/* 000731 */ 		return __call__ (__accu0__.set_unknown_environment_spec, __accu0__, __call__ (MiniHtmlEnvironmentSpec, null, ''));
/* 000731 */ 	}) ();
/* 000733 */ 	return lw_context;
/* 000733 */ };
/* 000741 */ export var _minilatex_context_db = __call__ (_make_lw_context, null);
/* 000747 */ export var Float =  __class__ ('Float', [object], {
/* 000747 */ 	__module__: __name__,
/* 000748 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, caption, label, contentstype, contents_image_filename, resource_parent) {
/* 000748 */ 		if (typeof float_type == 'undefined' || (float_type != null && float_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000748 */ 			var float_type = 'figure';
/* 000748 */ 		};
/* 000748 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000748 */ 			var float_caption_name = 'Figure';
/* 000748 */ 		};
/* 000748 */ 		if (typeof caption == 'undefined' || (caption != null && caption.hasOwnProperty ("__kwargtrans__"))) {;
/* 000748 */ 			var caption = null;
/* 000748 */ 		};
/* 000748 */ 		if (typeof label == 'undefined' || (label != null && label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000748 */ 			var label = null;
/* 000748 */ 		};
/* 000748 */ 		if (typeof contentstype == 'undefined' || (contentstype != null && contentstype.hasOwnProperty ("__kwargtrans__"))) {;
/* 000748 */ 			var contentstype = null;
/* 000748 */ 		};
/* 000748 */ 		if (typeof contents_image_filename == 'undefined' || (contents_image_filename != null && contents_image_filename.hasOwnProperty ("__kwargtrans__"))) {;
/* 000748 */ 			var contents_image_filename = null;
/* 000748 */ 		};
/* 000748 */ 		if (typeof resource_parent == 'undefined' || (resource_parent != null && resource_parent.hasOwnProperty ("__kwargtrans__"))) {;
/* 000748 */ 			var resource_parent = null;
/* 000748 */ 		};
/* 000748 */ 		if (arguments.length) {
/* 000748 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000748 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000748 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000748 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000748 */ 					switch (__attrib0__) {
/* 000748 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'caption': var caption = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'label': var label = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'contentstype': var contentstype = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'contents_image_filename': var contents_image_filename = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'resource_parent': var resource_parent = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 					}
/* 000748 */ 				}
/* 000748 */ 			}
/* 000748 */ 		}
/* 000748 */ 		else {
/* 000748 */ 		}
/* 000758 */ 		self.float_type = float_type;
/* 000759 */ 		self.float_caption_name = float_caption_name;
/* 000760 */ 		self.caption = caption;
/* 000761 */ 		self.label = label;
/* 000762 */ 		self.contentstype = contentstype;
/* 000763 */ 		self.contents_image_filename = contents_image_filename;
/* 000764 */ 		self.resource_parent = resource_parent;
/* 000764 */ 	});}
/* 000764 */ });
/* 000767 */ export var HtmlRefContext =  __class__ ('HtmlRefContext', [object], {
/* 000767 */ 	__module__: __name__,
/* 000768 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000768 */ 		if (arguments.length) {
/* 000768 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000768 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000768 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000768 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000768 */ 					switch (__attrib0__) {
/* 000768 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000768 */ 					}
/* 000768 */ 				}
/* 000768 */ 			}
/* 000768 */ 		}
/* 000768 */ 		else {
/* 000768 */ 		}
/* 000769 */ 		__call__ (__call__ (__super__, null, HtmlRefContext, '__init__'), null, self);
/* 000769 */ 	});},
/* 000775 */ 	get get_ref () {return __get__ (this, function (self, ref_key_prefix, ref_key) {
/* 000775 */ 		if (arguments.length) {
/* 000775 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000775 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000775 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000775 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000775 */ 					switch (__attrib0__) {
/* 000775 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000775 */ 						case 'ref_key_prefix': var ref_key_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000775 */ 						case 'ref_key': var ref_key = __allkwargs0__ [__attrib0__]; break;
/* 000775 */ 					}
/* 000775 */ 				}
/* 000775 */ 			}
/* 000775 */ 		}
/* 000775 */ 		else {
/* 000775 */ 		}
/* 000777 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclass must reimplement get_ref()');
/* 000777 */ 		__except0__.__cause__ = null;
/* 000777 */ 		throw __except0__;
/* 000777 */ 	});},
/* 000779 */ 	get add_footnote () {return __get__ (this, function (self, footnotetext) {
/* 000779 */ 		if (arguments.length) {
/* 000779 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000779 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000779 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000779 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000779 */ 					switch (__attrib0__) {
/* 000779 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000779 */ 						case 'footnotetext': var footnotetext = __allkwargs0__ [__attrib0__]; break;
/* 000779 */ 					}
/* 000779 */ 				}
/* 000779 */ 			}
/* 000779 */ 		}
/* 000779 */ 		else {
/* 000779 */ 		}
/* 000781 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclass must reimplement add_footnote()');
/* 000781 */ 		__except0__.__cause__ = null;
/* 000781 */ 		throw __except0__;
/* 000781 */ 	});},
/* 000783 */ 	get add_citation () {return __get__ (this, function (self, citation_key_prefix, citation_key, optional_cite_extra_html) {
/* 000783 */ 		if (typeof optional_cite_extra_html == 'undefined' || (optional_cite_extra_html != null && optional_cite_extra_html.hasOwnProperty ("__kwargtrans__"))) {;
/* 000783 */ 			var optional_cite_extra_html = null;
/* 000783 */ 		};
/* 000783 */ 		if (arguments.length) {
/* 000783 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000783 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000783 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000783 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000783 */ 					switch (__attrib0__) {
/* 000783 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000783 */ 						case 'citation_key_prefix': var citation_key_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000783 */ 						case 'citation_key': var citation_key = __allkwargs0__ [__attrib0__]; break;
/* 000783 */ 						case 'optional_cite_extra_html': var optional_cite_extra_html = __allkwargs0__ [__attrib0__]; break;
/* 000783 */ 					}
/* 000783 */ 				}
/* 000783 */ 			}
/* 000783 */ 		}
/* 000783 */ 		else {
/* 000783 */ 		}
/* 000786 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclass must reimplement add_citation()');
/* 000786 */ 		__except0__.__cause__ = null;
/* 000786 */ 		throw __except0__;
/* 000786 */ 	});},
/* 000788 */ 	get add_float () {return __get__ (this, function (self, float_obj) {
/* 000788 */ 		if (arguments.length) {
/* 000788 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000788 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000788 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000788 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000788 */ 					switch (__attrib0__) {
/* 000788 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'float_obj': var float_obj = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 					}
/* 000788 */ 				}
/* 000788 */ 			}
/* 000788 */ 		}
/* 000788 */ 		else {
/* 000788 */ 		}
/* 000790 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclass must reimplement add_float()');
/* 000790 */ 		__except0__.__cause__ = null;
/* 000790 */ 		throw __except0__;
/* 000790 */ 	});}
/* 000790 */ });
/* 000796 */ export var MiniLatex =  __class__ ('MiniLatex', [object], {
/* 000796 */ 	__module__: __name__,
/* 000797 */ 	get __init__ () {return __get__ (this, function (self, minilatex, what, resource_parent, minilatex_context_db, _silent) {
/* 000797 */ 		if (typeof what == 'undefined' || (what != null && what.hasOwnProperty ("__kwargtrans__"))) {;
/* 000797 */ 			var what = '(unknown)';
/* 000797 */ 		};
/* 000797 */ 		if (typeof resource_parent == 'undefined' || (resource_parent != null && resource_parent.hasOwnProperty ("__kwargtrans__"))) {;
/* 000797 */ 			var resource_parent = null;
/* 000797 */ 		};
/* 000797 */ 		if (typeof minilatex_context_db == 'undefined' || (minilatex_context_db != null && minilatex_context_db.hasOwnProperty ("__kwargtrans__"))) {;
/* 000797 */ 			var minilatex_context_db = _minilatex_context_db;
/* 000797 */ 		};
/* 000797 */ 		if (typeof _silent == 'undefined' || (_silent != null && _silent.hasOwnProperty ("__kwargtrans__"))) {;
/* 000797 */ 			var _silent = false;
/* 000797 */ 		};
/* 000797 */ 		if (arguments.length) {
/* 000797 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000797 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000797 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000797 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000797 */ 					switch (__attrib0__) {
/* 000797 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case 'minilatex': var minilatex = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case 'resource_parent': var resource_parent = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case 'minilatex_context_db': var minilatex_context_db = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case '_silent': var _silent = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 					}
/* 000797 */ 				}
/* 000797 */ 			}
/* 000797 */ 		}
/* 000797 */ 		else {
/* 000797 */ 		}
/* 000806 */ 		self.minilatex = minilatex;
/* 000807 */ 		self.what = what;
/* 000810 */ 		self.resource_parent = resource_parent;
/* 000812 */ 		self.minilatex_context_db = minilatex_context_db;
/* 000814 */ 		self._silent = _silent;
/* 000816 */ 		try {
/* 000818 */ 			var __left0__ = (function () {
/* 000818 */ 				var __accu0__ = MiniLatex;
/* 000818 */ 				return __call__ (__accu0__.parse, __accu0__, self.minilatex, self.minilatex_context_db);
/* 000818 */ 			}) ();
/* 000818 */ 			self._latex_walker = __left0__ [0];
/* 000818 */ 			self.nodes = __left0__ [1];
/* 000818 */ 			var _ = __left0__ [2];
/* 000818 */ 		}
/* 000818 */ 		catch (__except0__) {
/* 000818 */ 			if (isinstance (__except0__, Exception)) {
/* 000818 */ 				var e = __except0__;
/* 000820 */ 				if (__t__ (!__t__ ((self._silent)))) {
/* 000821 */ 					(function () {
/* 000821 */ 						var __accu0__ = logger;
/* 000821 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like minilanguage ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.minilatex));
/* 000821 */ 					}) ();
/* 000821 */ 				}
/* 000823 */ 				__except0__.__cause__ = null;
/* 000823 */ 				throw __except0__;
/* 000823 */ 			}
/* 000823 */ 			else {
/* 000823 */ 				throw __except0__;
/* 000823 */ 			}
/* 000823 */ 		}
/* 000831 */ 		self._math_node_to_html = dict ({'inline': __call__ (ItemToHtmlVerbatimWrapTag, null, __kwargtrans__ ({tagname: 'span', class_: 'inline-math'})), 'display': __call__ (ItemToHtmlVerbatimWrapTag, null, __kwargtrans__ ({tagname: 'span', class_: 'display-math'}))});
/* 000837 */ 		self.text = (function () {
/* 000837 */ 			var __accu0__ = self;
/* 000837 */ 			return __call__ (__accu0__._to_text, __accu0__);
/* 000837 */ 		}) ();
/* 000837 */ 	});},
/* 000841 */ 	get parse () {return __getcm__ (this, function (cls, minilatex, minilatex_context_db) {
/* 000841 */ 		if (typeof minilatex_context_db == 'undefined' || (minilatex_context_db != null && minilatex_context_db.hasOwnProperty ("__kwargtrans__"))) {;
/* 000841 */ 			var minilatex_context_db = _minilatex_context_db;
/* 000841 */ 		};
/* 000841 */ 		if (arguments.length) {
/* 000841 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000841 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000841 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000841 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000841 */ 					switch (__attrib0__) {
/* 000841 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 						case 'minilatex': var minilatex = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 						case 'minilatex_context_db': var minilatex_context_db = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 					}
/* 000841 */ 				}
/* 000841 */ 			}
/* 000841 */ 		}
/* 000841 */ 		else {
/* 000841 */ 		}
/* 000843 */ 		var latex_walker = (function () {
/* 000843 */ 			var __accu0__ = latexwalker;
/* 000843 */ 			return __call__ (__accu0__.LatexWalker, __accu0__, minilatex, __kwargtrans__ ({latex_context: minilatex_context_db, tolerant_parsing: false}));
/* 000843 */ 		}) ();
/* 000849 */ 		var __left0__ = (function () {
/* 000849 */ 			var __accu0__ = latex_walker;
/* 000849 */ 			return __call__ (__accu0__.parse_content, __accu0__, __call__ (LatexGeneralNodesParser, null));
/* 000849 */ 		}) ();
/* 000849 */ 		var nodes = __left0__ [0];
/* 000849 */ 		var carryover_info = __left0__ [1];
/* 000851 */ 		return tuple ([latex_walker, nodes, carryover_info]);
/* 000851 */ 	});},
/* 000855 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000855 */ 		if (arguments.length) {
/* 000855 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000855 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000855 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000855 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000855 */ 					switch (__attrib0__) {
/* 000855 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 					}
/* 000855 */ 				}
/* 000855 */ 			}
/* 000855 */ 		}
/* 000855 */ 		else {
/* 000855 */ 		}
/* 000859 */ 		var nodelists_paragraphs = (function () {
/* 000859 */ 			var __accu0__ = self.nodes;
/* 000859 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000859 */ 				if (arguments.length) {
/* 000859 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000859 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000859 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000859 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000859 */ 							switch (__attrib0__) {
/* 000859 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 							}
/* 000859 */ 						}
/* 000859 */ 					}
/* 000859 */ 				}
/* 000859 */ 				else {
/* 000859 */ 				}
/* 000860 */ 				return __t__ ((function () {
/* 000860 */ 					var __accu1__ = n;
/* 000860 */ 					return __call__ (__accu1__.isNodeType, __accu1__, nodes.LatexSpecialsNode);
/* 000860 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000860 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000860 */ 		}) ();
/* 000863 */ 		return __call__ (MiniLatex, null, (function () {
/* 000863 */ 			var __accu0__ = __getitem__ (nodelists_paragraphs, 0);
/* 000863 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000863 */ 		}) (), __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000867 */ 	});},
/* 000867 */ 	DocContext: __class__ ('DocContext', [object], {
/* 000867 */ 		__module__: __name__,
/* 000868 */ 		get __init__ () {return __get__ (this, function (self, minilatexobj, refcontext) {
/* 000868 */ 			if (arguments.length) {
/* 000868 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000868 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000868 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000868 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000868 */ 						switch (__attrib0__) {
/* 000868 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 							case 'minilatexobj': var minilatexobj = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 							case 'refcontext': var refcontext = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 						}
/* 000868 */ 					}
/* 000868 */ 				}
/* 000868 */ 			}
/* 000868 */ 			else {
/* 000868 */ 			}
/* 000869 */ 			self.minilatexobj = minilatexobj;
/* 000870 */ 			self.refcontext = refcontext;
/* 000872 */ 			self.what = self.minilatexobj.what;
/* 000873 */ 			self.resource_parent = self.minilatexobj.resource_parent;
/* 000875 */ 			self.get_nodearglist = self.minilatexobj.get_nodearglist;
/* 000877 */ 			if (__t__ (self.refcontext !== null)) {
/* 000878 */ 				self.get_ref = self.refcontext.get_ref;
/* 000879 */ 				self.add_footnote = self.refcontext.add_footnote;
/* 000880 */ 				self.add_citation = self.refcontext.add_citation;
/* 000881 */ 				self.add_float = self.refcontext.add_float;
/* 000881 */ 			}
/* 000882 */ 			else {
/* 000883 */ 				self.get_ref = null;
/* 000884 */ 				self.add_footnote = null;
/* 000885 */ 				self.add_citation = null;
/* 000886 */ 				self.add_float = null;
/* 000886 */ 			}
/* 000886 */ 		});},
/* 000888 */ 		get warning () {return __get__ (this, function (self) {
/* 000888 */ 			var kwargs = dict ();
/* 000888 */ 			if (arguments.length) {
/* 000888 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000888 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000888 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000888 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000888 */ 						switch (__attrib0__) {
/* 000888 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000888 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000888 */ 						}
/* 000888 */ 					}
/* 000888 */ 					delete kwargs.__kwargtrans__;
/* 000888 */ 				}
/* 000888 */ 				var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000888 */ 			}
/* 000888 */ 			else {
/* 000888 */ 				var args = tuple ();
/* 000888 */ 			}
/* 000889 */ 			if (__t__ (self.minilatexobj._silent)) {
/* 000890 */ 				return ;
/* 000890 */ 			}
/* 000891 */ 			(function () {
/* 000891 */ 				var __accu0__ = logger;
/* 000891 */ 				return __call__ (__accu0__.warning, __accu0__, ...args, __kwargtrans__ (kwargs));
/* 000891 */ 			}) ();
/* 000891 */ 		});},
/* 000893 */ 		get nodelist_to_html () {return __get__ (this, function (self, nodelist) {
/* 000893 */ 			if (arguments.length) {
/* 000893 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000893 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000893 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000893 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000893 */ 						switch (__attrib0__) {
/* 000893 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000893 */ 							case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000893 */ 						}
/* 000893 */ 					}
/* 000893 */ 				}
/* 000893 */ 			}
/* 000893 */ 			else {
/* 000893 */ 			}
/* 000894 */ 			return (function () {
/* 000894 */ 				var __accu0__ = self.minilatexobj;
/* 000894 */ 				return __call__ (__accu0__._nodelist_to_html, __accu0__, nodelist, self);
/* 000894 */ 			}) ();
/* 000894 */ 		});},
/* 000896 */ 		get nodelist_to_chars () {return __get__ (this, function (self, nodelist) {
/* 000896 */ 			if (arguments.length) {
/* 000896 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000896 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000896 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000896 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000896 */ 						switch (__attrib0__) {
/* 000896 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000896 */ 							case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000896 */ 						}
/* 000896 */ 					}
/* 000896 */ 				}
/* 000896 */ 			}
/* 000896 */ 			else {
/* 000896 */ 			}
/* 000897 */ 			return (function () {
/* 000897 */ 				var __accu0__ = self.minilatexobj;
/* 000897 */ 				return __call__ (__accu0__._nodelist_to_chars, __accu0__, nodelist, self);
/* 000897 */ 			}) ();
/* 000897 */ 		});},
/* 000899 */ 		get nodelist_to_text () {return __get__ (this, function (self, nodelist) {
/* 000899 */ 			if (arguments.length) {
/* 000899 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000899 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000899 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000899 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000899 */ 						switch (__attrib0__) {
/* 000899 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 							case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 						}
/* 000899 */ 					}
/* 000899 */ 				}
/* 000899 */ 			}
/* 000899 */ 			else {
/* 000899 */ 			}
/* 000900 */ 			return (function () {
/* 000900 */ 				var __accu0__ = self.minilatexobj;
/* 000900 */ 				return __call__ (__accu0__._nodelist_to_text, __accu0__, nodelist, self);
/* 000900 */ 			}) ();
/* 000900 */ 		});},
/* 000902 */ 		get nodearg_to_html () {return __get__ (this, function (self, node, arg_i) {
/* 000902 */ 			if (arguments.length) {
/* 000902 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000902 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000902 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000902 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000902 */ 						switch (__attrib0__) {
/* 000902 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 							case 'arg_i': var arg_i = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 						}
/* 000902 */ 					}
/* 000902 */ 				}
/* 000902 */ 			}
/* 000902 */ 			else {
/* 000902 */ 			}
/* 000903 */ 			var nodelist = (function () {
/* 000903 */ 				var __accu0__ = self;
/* 000903 */ 				return __call__ (__accu0__.get_nodearglist, __accu0__, node, arg_i);
/* 000903 */ 			}) ();
/* 000904 */ 			return (function () {
/* 000904 */ 				var __accu0__ = self.minilatexobj;
/* 000904 */ 				return __call__ (__accu0__._nodelist_to_html, __accu0__, nodelist, self);
/* 000904 */ 			}) ();
/* 000904 */ 		});},
/* 000906 */ 		get nodearg_to_chars () {return __get__ (this, function (self, node, arg_i) {
/* 000906 */ 			if (arguments.length) {
/* 000906 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000906 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000906 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000906 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000906 */ 						switch (__attrib0__) {
/* 000906 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000906 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000906 */ 							case 'arg_i': var arg_i = __allkwargs0__ [__attrib0__]; break;
/* 000906 */ 						}
/* 000906 */ 					}
/* 000906 */ 				}
/* 000906 */ 			}
/* 000906 */ 			else {
/* 000906 */ 			}
/* 000907 */ 			var nodelist = (function () {
/* 000907 */ 				var __accu0__ = self;
/* 000907 */ 				return __call__ (__accu0__.get_nodearglist, __accu0__, node, arg_i);
/* 000907 */ 			}) ();
/* 000908 */ 			return (function () {
/* 000908 */ 				var __accu0__ = self.minilatexobj;
/* 000908 */ 				return __call__ (__accu0__._nodelist_to_chars, __accu0__, nodelist, self);
/* 000908 */ 			}) ();
/* 000908 */ 		});},
/* 000910 */ 		get nodearg_to_text () {return __get__ (this, function (self, node, arg_i) {
/* 000910 */ 			if (arguments.length) {
/* 000910 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000910 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000910 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000910 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000910 */ 						switch (__attrib0__) {
/* 000910 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000910 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000910 */ 							case 'arg_i': var arg_i = __allkwargs0__ [__attrib0__]; break;
/* 000910 */ 						}
/* 000910 */ 					}
/* 000910 */ 				}
/* 000910 */ 			}
/* 000910 */ 			else {
/* 000910 */ 			}
/* 000911 */ 			var nodelist = (function () {
/* 000911 */ 				var __accu0__ = self;
/* 000911 */ 				return __call__ (__accu0__.get_nodearglist, __accu0__, node, arg_i);
/* 000911 */ 			}) ();
/* 000912 */ 			return (function () {
/* 000912 */ 				var __accu0__ = self.minilatexobj;
/* 000912 */ 				return __call__ (__accu0__._nodelist_to_text, __accu0__, nodelist, self);
/* 000912 */ 			}) ();
/* 000912 */ 		});}
/* 000912 */ 	}),
/* 000915 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000915 */ 		if (arguments.length) {
/* 000915 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000915 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000915 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000915 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000915 */ 					switch (__attrib0__) {
/* 000915 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000915 */ 					}
/* 000915 */ 				}
/* 000915 */ 			}
/* 000915 */ 		}
/* 000915 */ 		else {
/* 000915 */ 		}
/* 000916 */ 		return self.minilatex;
/* 000916 */ 	});},
/* 000918 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000918 */ 		if (arguments.length) {
/* 000918 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000918 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000918 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000918 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000918 */ 					switch (__attrib0__) {
/* 000918 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000918 */ 					}
/* 000918 */ 				}
/* 000918 */ 			}
/* 000918 */ 		}
/* 000918 */ 		else {
/* 000918 */ 		}
/* 000919 */ 		return '{}({})'.format (self.__class__.__name__, self.minilatex);
/* 000919 */ 	});},
/* 000921 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000921 */ 		if (arguments.length) {
/* 000921 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000921 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000921 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000921 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000921 */ 					switch (__attrib0__) {
/* 000921 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000921 */ 					}
/* 000921 */ 				}
/* 000921 */ 			}
/* 000921 */ 		}
/* 000921 */ 		else {
/* 000921 */ 		}
/* 000923 */ 		return (__t__ (self.minilatex) ? true : false);
/* 000923 */ 	});},
/* 000925 */ 	get to_html () {return __get__ (this, function (self, refcontext) {
/* 000925 */ 		if (typeof refcontext == 'undefined' || (refcontext != null && refcontext.hasOwnProperty ("__kwargtrans__"))) {;
/* 000925 */ 			var refcontext = null;
/* 000925 */ 		};
/* 000925 */ 		if (arguments.length) {
/* 000925 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000925 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000925 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000925 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000925 */ 					switch (__attrib0__) {
/* 000925 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000925 */ 						case 'refcontext': var refcontext = __allkwargs0__ [__attrib0__]; break;
/* 000925 */ 					}
/* 000925 */ 				}
/* 000925 */ 			}
/* 000925 */ 		}
/* 000925 */ 		else {
/* 000925 */ 		}
/* 000926 */ 		return (function () {
/* 000926 */ 			var __accu0__ = self;
/* 000926 */ 			return __call__ (__accu0__._to_x, __accu0__, __kwargtrans__ ({refcontext: refcontext, fmt: 'html'}));
/* 000926 */ 		}) ();
/* 000926 */ 	});},
/* 000928 */ 	get _to_text () {return __get__ (this, function (self, refcontext) {
/* 000928 */ 		if (typeof refcontext == 'undefined' || (refcontext != null && refcontext.hasOwnProperty ("__kwargtrans__"))) {;
/* 000928 */ 			var refcontext = null;
/* 000928 */ 		};
/* 000928 */ 		if (arguments.length) {
/* 000928 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000928 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000928 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000928 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000928 */ 					switch (__attrib0__) {
/* 000928 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000928 */ 						case 'refcontext': var refcontext = __allkwargs0__ [__attrib0__]; break;
/* 000928 */ 					}
/* 000928 */ 				}
/* 000928 */ 			}
/* 000928 */ 		}
/* 000928 */ 		else {
/* 000928 */ 		}
/* 000932 */ 		return (function () {
/* 000932 */ 			var __accu0__ = self;
/* 000932 */ 			return __call__ (__accu0__._to_x, __accu0__, __kwargtrans__ ({refcontext: refcontext, fmt: 'text'}));
/* 000932 */ 		}) ();
/* 000932 */ 	});},
/* 000934 */ 	get _to_x () {return __get__ (this, function (self, refcontext, fmt) {
/* 000934 */ 		if (typeof refcontext == 'undefined' || (refcontext != null && refcontext.hasOwnProperty ("__kwargtrans__"))) {;
/* 000934 */ 			var refcontext = null;
/* 000934 */ 		};
/* 000934 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000934 */ 			var fmt = 'html';
/* 000934 */ 		};
/* 000934 */ 		if (arguments.length) {
/* 000934 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000934 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000934 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000934 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000934 */ 					switch (__attrib0__) {
/* 000934 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000934 */ 						case 'refcontext': var refcontext = __allkwargs0__ [__attrib0__]; break;
/* 000934 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 000934 */ 					}
/* 000934 */ 				}
/* 000934 */ 			}
/* 000934 */ 		}
/* 000934 */ 		else {
/* 000934 */ 		}
/* 000935 */ 		try {
/* 000936 */ 			var doccontext = (function () {
/* 000936 */ 				var __accu0__ = MiniLatex;
/* 000936 */ 				return __call__ (__accu0__.DocContext, __accu0__, self, refcontext);
/* 000936 */ 			}) ();
/* 000937 */ 			return (function () {
/* 000937 */ 				var __accu0__ = self;
/* 000937 */ 				return __call__ (__accu0__._nodelist_to_x, __accu0__, self.nodes, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 000937 */ 			}) ();
/* 000937 */ 		}
/* 000937 */ 		catch (__except0__) {
/* 000937 */ 			if (isinstance (__except0__, Exception)) {
/* 000937 */ 				var e = __except0__;
/* 000939 */ 				if (__t__ (!__t__ ((self._silent)))) {
/* 000940 */ 					(function () {
/* 000940 */ 						var __accu0__ = logger;
/* 000941 */ 						return __call__ (__accu0__.error, __accu0__, 'Error producing {} from latex-like minilanguage ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format ((function () {
/* 000941 */ 							var __accu1__ = fmt;
/* 000941 */ 							return __call__ (__accu1__.upper, __accu1__);
/* 000941 */ 						}) (), self.what, e, self.minilatex));
/* 000941 */ 					}) ();
/* 000941 */ 				}
/* 000945 */ 				__except0__.__cause__ = null;
/* 000945 */ 				throw __except0__;
/* 000945 */ 			}
/* 000945 */ 			else {
/* 000945 */ 				throw __except0__;
/* 000945 */ 			}
/* 000945 */ 		}
/* 000945 */ 	});},
/* 000948 */ 	get __html__ () {return __get__ (this, function (self) {
/* 000948 */ 		if (arguments.length) {
/* 000948 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000948 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000948 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000948 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000948 */ 					switch (__attrib0__) {
/* 000948 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000948 */ 					}
/* 000948 */ 				}
/* 000948 */ 			}
/* 000948 */ 		}
/* 000948 */ 		else {
/* 000948 */ 		}
/* 000949 */ 		return (function () {
/* 000949 */ 			var __accu0__ = self;
/* 000949 */ 			return __call__ (__accu0__.to_html, __accu0__);
/* 000949 */ 		}) ();
/* 000949 */ 	});},
/* 000951 */ 	get __jsonobject__ () {return __get__ (this, function (self) {
/* 000951 */ 		if (arguments.length) {
/* 000951 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000951 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000951 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000951 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000951 */ 					switch (__attrib0__) {
/* 000951 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000951 */ 					}
/* 000951 */ 				}
/* 000951 */ 			}
/* 000951 */ 		}
/* 000951 */ 		else {
/* 000951 */ 		}
/* 000955 */ 		return dict ({'minilatex': self.minilatex, 'text': self.text, 'html_norefs': (function () {
/* 000955 */ 			var __accu0__ = self;
/* 000955 */ 			return __call__ (__accu0__.to_html, __accu0__);
/* 000955 */ 		}) ()});
/* 000955 */ 	});},
/* 000958 */ 	get _nodelist_to_chars () {return __get__ (this, function (self, nodelist, doccontext) {
/* 000958 */ 		if (arguments.length) {
/* 000958 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000958 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000958 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000958 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000958 */ 					switch (__attrib0__) {
/* 000958 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000958 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000958 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000958 */ 					}
/* 000958 */ 				}
/* 000958 */ 			}
/* 000958 */ 		}
/* 000958 */ 		else {
/* 000958 */ 		}
/* 000959 */ 		var charslist = [];
/* 000960 */ 		var __iterable0__ = nodelist;
/* 000960 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000960 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000961 */ 			if (__t__ (n === null)) {
/* 000961 */ 				continue;
/* 000961 */ 			}
/* 000963 */ 			if (__t__ (!__t__ (((function () {
/* 000963 */ 				var __accu0__ = n;
/* 000963 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000963 */ 			}) ())))) {
/* 000965 */ 				var __except0__ = __call__ (ValueError, null, 'Expected chars-only nodes, got ‘{}<{}>’ in ‘{}’'.format ((function () {
/* 000965 */ 					var __accu0__ = n;
/* 000965 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000965 */ 				}) (), n.__class__.__name__, (function () {
/* 000965 */ 					var __accu0__ = nodelist;
/* 000965 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000965 */ 				}) ()));
/* 000965 */ 				__except0__.__cause__ = null;
/* 000965 */ 				throw __except0__;
/* 000965 */ 			}
/* 000967 */ 			(function () {
/* 000967 */ 				var __accu0__ = charslist;
/* 000967 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 000967 */ 			}) ();
/* 000967 */ 		}
/* 000968 */ 		return (function () {
/* 000968 */ 			var __accu0__ = '';
/* 000968 */ 			return __call__ (__accu0__.join, __accu0__, charslist);
/* 000968 */ 		}) ();
/* 000968 */ 	});},
/* 000970 */ 	get _nodelist_to_html () {return __get__ (this, function (self, nodelist, doccontext) {
/* 000970 */ 		if (arguments.length) {
/* 000970 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000970 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000970 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000970 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000970 */ 					switch (__attrib0__) {
/* 000970 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 					}
/* 000970 */ 				}
/* 000970 */ 			}
/* 000970 */ 		}
/* 000970 */ 		else {
/* 000970 */ 		}
/* 000971 */ 		return (function () {
/* 000971 */ 			var __accu0__ = self;
/* 000971 */ 			return __call__ (__accu0__._nodelist_to_x, __accu0__, nodelist, doccontext, __kwargtrans__ ({fmt: 'html'}));
/* 000971 */ 		}) ();
/* 000971 */ 	});},
/* 000972 */ 	get _nodelist_to_text () {return __get__ (this, function (self, nodelist, doccontext) {
/* 000972 */ 		if (arguments.length) {
/* 000972 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000972 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000972 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000972 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000972 */ 					switch (__attrib0__) {
/* 000972 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000972 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000972 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000972 */ 					}
/* 000972 */ 				}
/* 000972 */ 			}
/* 000972 */ 		}
/* 000972 */ 		else {
/* 000972 */ 		}
/* 000973 */ 		return (function () {
/* 000973 */ 			var __accu0__ = self;
/* 000973 */ 			return __call__ (__accu0__._nodelist_to_x, __accu0__, nodelist, doccontext, __kwargtrans__ ({fmt: 'text'}));
/* 000973 */ 		}) ();
/* 000973 */ 	});},
/* 000975 */ 	get _nodelist_to_x () {return __get__ (this, function (self, nodelist, doccontext, fmt) {
/* 000975 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000975 */ 			var fmt = 'html';
/* 000975 */ 		};
/* 000975 */ 		if (arguments.length) {
/* 000975 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000975 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000975 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000975 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000975 */ 					switch (__attrib0__) {
/* 000975 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000975 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000975 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 000975 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 000975 */ 					}
/* 000975 */ 				}
/* 000975 */ 			}
/* 000975 */ 		}
/* 000975 */ 		else {
/* 000975 */ 		}
/* 000982 */ 		var nodelists_paragraphs = (function () {
/* 000982 */ 			var __accu0__ = nodelist;
/* 000982 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000982 */ 				if (arguments.length) {
/* 000982 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000982 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000982 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000982 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000982 */ 							switch (__attrib0__) {
/* 000982 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000982 */ 							}
/* 000982 */ 						}
/* 000982 */ 					}
/* 000982 */ 				}
/* 000982 */ 				else {
/* 000982 */ 				}
/* 000983 */ 				return __t__ ((function () {
/* 000983 */ 					var __accu1__ = n;
/* 000983 */ 					return __call__ (__accu1__.isNodeType, __accu1__, nodes.LatexSpecialsNode);
/* 000983 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000983 */ 			}));
/* 000983 */ 		}) ();
/* 000987 */ 		var html_paragraphs = (function () {
/* 000987 */ 			var __accu0__ = [];
/* 000987 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000987 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000991 */ 				var para_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000991 */ 				(function () {
/* 000991 */ 					var __accu1__ = __accu0__;
/* 000988 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000988 */ 						var __accu2__ = '';
/* 000988 */ 						return __call__ (__accu2__.join, __accu2__, (function () {
/* 000988 */ 							var __accu3__ = [];
/* 000988 */ 							var __iterable1__ = para_nodelist;
/* 000988 */ 							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000989 */ 								var node = __getitem__ (__iterable1__, __index1__);
/* 000989 */ 								(function () {
/* 000989 */ 									var __accu4__ = __accu3__;
/* 000989 */ 									return __call__ (__accu4__.append, __accu4__, (function () {
/* 000989 */ 										var __accu5__ = self;
/* 000989 */ 										return __call__ (__accu5__._node_to_x, __accu5__, node, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 000989 */ 									}) ());
/* 000989 */ 								}) ();
/* 000989 */ 							}
/* 000989 */ 							return __accu3__;
/* 000989 */ 						}) ());
/* 000989 */ 					}) ());
/* 000989 */ 				}) ();
/* 000989 */ 			}
/* 000989 */ 			return __accu0__;
/* 000989 */ 		}) ();
/* 000996 */ 		if (__t__ (__eq__ (__call__ (len, null, html_paragraphs), 1))) {
/* 000997 */ 			return __getitem__ (html_paragraphs, 0);
/* 000997 */ 		}
/* 001000 */ 		if (__t__ (__eq__ (fmt, 'html'))) {
/* 001001 */ 			var para_wrapper = (function __lambda__ (p) {
/* 001001 */ 				if (arguments.length) {
/* 001001 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001001 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001001 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001001 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001001 */ 							switch (__attrib0__) {
/* 001001 */ 								case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 001001 */ 							}
/* 001001 */ 						}
/* 001001 */ 					}
/* 001001 */ 				}
/* 001001 */ 				else {
/* 001001 */ 				}
/* 001001 */ 				return __call__ (html_wrap_in_tag, null, 'p', (function () {
/* 001001 */ 					var __accu0__ = p;
/* 001001 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 001001 */ 				}) ());
/* 001001 */ 			});
/* 001001 */ 		}
/* 001002 */ 		else if (__t__ (__eq__ (fmt, 'text'))) {
/* 001003 */ 			var para_wrapper = (function __lambda__ (p) {
/* 001003 */ 				if (arguments.length) {
/* 001003 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001003 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001003 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001003 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001003 */ 							switch (__attrib0__) {
/* 001003 */ 								case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 001003 */ 							}
/* 001003 */ 						}
/* 001003 */ 					}
/* 001003 */ 				}
/* 001003 */ 				else {
/* 001003 */ 				}
/* 001003 */ 				return __add__ ((function () {
/* 001003 */ 					var __accu0__ = p;
/* 001003 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 001003 */ 				}) (), '\n');
/* 001003 */ 			});
/* 001003 */ 		}
/* 001004 */ 		else {
/* 001005 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid format fmt={}'.format (fmt));
/* 001005 */ 			__except0__.__cause__ = null;
/* 001005 */ 			throw __except0__;
/* 001005 */ 		}
/* 001008 */ 		var full_html = (function () {
/* 001008 */ 			var __accu0__ = '\n';
/* 001008 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 001008 */ 				var __accu1__ = [];
/* 001008 */ 				var __iterable0__ = html_paragraphs;
/* 001008 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001010 */ 					var p = __getitem__ (__iterable0__, __index0__);
/* 001011 */ 					if (__t__ ((function () {
/* 001011 */ 						var __accu2__ = p;
/* 001011 */ 						return __call__ (__accu2__.strip, __accu2__);
/* 001011 */ 					}) ())) {
/* 001011 */ 						(function () {
/* 001011 */ 							var __accu2__ = __accu1__;
/* 001009 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (para_wrapper, null, p));
/* 001009 */ 						}) ();
/* 001009 */ 					}
/* 001009 */ 				}
/* 001009 */ 				return __accu1__;
/* 001009 */ 			}) ());
/* 001009 */ 		}) ();
/* 001014 */ 		return full_html;
/* 001014 */ 	});},
/* 001016 */ 	get _charsnode_to_x () {return __get__ (this, function (self, node, fmt) {
/* 001016 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 001016 */ 			var fmt = 'html';
/* 001016 */ 		};
/* 001016 */ 		if (arguments.length) {
/* 001016 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001016 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001016 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001016 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001016 */ 					switch (__attrib0__) {
/* 001016 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001016 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001016 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 001016 */ 					}
/* 001016 */ 				}
/* 001016 */ 			}
/* 001016 */ 		}
/* 001016 */ 		else {
/* 001016 */ 		}
/* 001017 */ 		if (__t__ (__eq__ (fmt, 'html'))) {
/* 001018 */ 			return __call__ (htmlescape, null, node.chars);
/* 001018 */ 		}
/* 001019 */ 		return node.chars;
/* 001019 */ 	});},
/* 001021 */ 	get _node_to_x () {return __get__ (this, function (self, node, doccontext, fmt) {
/* 001021 */ 		if (typeof fmt == 'undefined' || (fmt != null && fmt.hasOwnProperty ("__kwargtrans__"))) {;
/* 001021 */ 			var fmt = 'html';
/* 001021 */ 		};
/* 001021 */ 		if (arguments.length) {
/* 001021 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001021 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001021 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001021 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001021 */ 					switch (__attrib0__) {
/* 001021 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001021 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001021 */ 						case 'doccontext': var doccontext = __allkwargs0__ [__attrib0__]; break;
/* 001021 */ 						case 'fmt': var fmt = __allkwargs0__ [__attrib0__]; break;
/* 001021 */ 					}
/* 001021 */ 				}
/* 001021 */ 			}
/* 001021 */ 		}
/* 001021 */ 		else {
/* 001021 */ 		}
/* 001023 */ 		if (__t__ (node === null)) {
/* 001024 */ 			return '';
/* 001024 */ 		}
/* 001028 */ 		if (__t__ ((function () {
/* 001028 */ 			var __accu0__ = node;
/* 001028 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 001028 */ 		}) ())) {
/* 001029 */ 			return (function () {
/* 001029 */ 				var __accu0__ = self;
/* 001029 */ 				return __call__ (__accu0__._charsnode_to_x, __accu0__, node, __kwargtrans__ ({fmt: fmt}));
/* 001029 */ 			}) ();
/* 001029 */ 		}
/* 001031 */ 		if (__t__ ((function () {
/* 001031 */ 			var __accu0__ = node;
/* 001031 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 001031 */ 		}) ())) {
/* 001032 */ 			if (__t__ (!__t__ ((self._silent)))) {
/* 001033 */ 				(function () {
/* 001033 */ 					var __accu0__ = logger;
/* 001033 */ 					return __call__ (__accu0__.error, __accu0__, 'You cannot use LaTeX comments (‘%{}’). To type a percent sign, use ‘\\%’'.format (node.comment));
/* 001033 */ 				}) ();
/* 001033 */ 			}
/* 001037 */ 			var __except0__ = __call__ (ValueError, null, 'LaTeX comments not supported: ‘%{}’. To type a percent sign, use ‘\\%’'.format (node.comment));
/* 001037 */ 			__except0__.__cause__ = null;
/* 001037 */ 			throw __except0__;
/* 001037 */ 		}
/* 001040 */ 		if (__t__ ((function () {
/* 001040 */ 			var __accu0__ = node;
/* 001040 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 001040 */ 		}) ())) {
/* 001042 */ 			return (function () {
/* 001042 */ 				var __accu0__ = self;
/* 001042 */ 				return __call__ (__accu0__._nodelist_to_x, __accu0__, node.nodelist, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 001042 */ 			}) ();
/* 001042 */ 		}
/* 001045 */ 		if (__t__ (__t__ ((function () {
/* 001045 */ 			var __accu0__ = node;
/* 001045 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 001046 */ 		}) ()) || __t__ ((function () {
/* 001046 */ 			var __accu0__ = node;
/* 001046 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 001047 */ 		}) ()) || (function () {
/* 001047 */ 			var __accu0__ = node;
/* 001047 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 001047 */ 		}) ())) {
/* 001049 */ 			return (function () {
/* 001049 */ 				var __accu0__ = node.spec.item_to_html;
/* 001049 */ 				return __call__ (__accu0__.get_as, __accu0__, node, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 001049 */ 			}) ();
/* 001049 */ 		}
/* 001051 */ 		if (__t__ ((function () {
/* 001051 */ 			var __accu0__ = node;
/* 001051 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 001051 */ 		}) ())) {
/* 001052 */ 			return (function () {
/* 001052 */ 				var __accu0__ = __getitem__ (self._math_node_to_html, node.displaytype);
/* 001052 */ 				return __call__ (__accu0__.get_as, __accu0__, node, doccontext, __kwargtrans__ ({fmt: fmt}));
/* 001052 */ 			}) ();
/* 001052 */ 		}
/* 001054 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 001054 */ 		__except0__.__cause__ = null;
/* 001054 */ 		throw __except0__;
/* 001054 */ 	});},
/* 001056 */ 	get get_nodearglist () {return __get__ (this, function (self, node, arg_i) {
/* 001056 */ 		if (arguments.length) {
/* 001056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001056 */ 					switch (__attrib0__) {
/* 001056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001056 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001056 */ 						case 'arg_i': var arg_i = __allkwargs0__ [__attrib0__]; break;
/* 001056 */ 					}
/* 001056 */ 				}
/* 001056 */ 			}
/* 001056 */ 		}
/* 001056 */ 		else {
/* 001056 */ 		}
/* 001057 */ 		if (__t__ (node.nodeargd === null)) {
/* 001058 */ 			return (function () {
/* 001058 */ 				var __accu0__ = nodes;
/* 001058 */ 				return __call__ (__accu0__.LatexNodeList, __accu0__, []);
/* 001058 */ 			}) ();
/* 001058 */ 		}
/* 001059 */ 		if (__t__ (node.nodeargd.argnlist === null)) {
/* 001060 */ 			return (function () {
/* 001060 */ 				var __accu0__ = nodes;
/* 001060 */ 				return __call__ (__accu0__.LatexNodeList, __accu0__, []);
/* 001060 */ 			}) ();
/* 001060 */ 		}
/* 001061 */ 		if (__t__ (__call__ (isinstance, null, arg_i, str))) {
/* 001063 */ 			var __break0__ = false;
/* 001063 */ 			var __iterable0__ = __call__ (enumerate, null, node.nodeargd.arguments_spec_list);
/* 001063 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001063 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001063 */ 				var j = __left0__ [0];
/* 001063 */ 				var arg_spec = __left0__ [1];
/* 001064 */ 				if (__t__ (__eq__ (arg_spec.argname, arg_i))) {
/* 001064 */ 					__break0__ = true;
/* 001064 */ 					break;
/* 001064 */ 				}
/* 001064 */ 			}
/* 001066 */ 			if (!__break0__) {
/* 001067 */ 				var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ found in node node={}'.format (arg_i, node));
/* 001067 */ 				__except0__.__cause__ = null;
/* 001067 */ 				throw __except0__;
/* 001067 */ 			}
/* 001068 */ 			var arg_i = j;
/* 001068 */ 		}
/* 001069 */ 		if (__t__ (__ge__ (arg_i, __call__ (len, null, node.nodeargd.argnlist)))) {
/* 001070 */ 			(function () {
/* 001070 */ 				var __accu0__ = logger;
/* 001070 */ 				return __call__ (__accu0__.error, __accu0__, 'Invalid argument #{} for macro ‘\\{}’'.format (arg_i, node.macroname));
/* 001070 */ 			}) ();
/* 001071 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid argument #{} for macro ‘\\{}’'.format (arg_i, node.macroname));
/* 001071 */ 			__except0__.__cause__ = null;
/* 001071 */ 			throw __except0__;
/* 001071 */ 		}
/* 001072 */ 		var argnode = __getitem__ (node.nodeargd.argnlist, arg_i);
/* 001073 */ 		if (__t__ (argnode === null)) {
/* 001074 */ 			return (function () {
/* 001074 */ 				var __accu0__ = nodes;
/* 001074 */ 				return __call__ (__accu0__.LatexNodeList, __accu0__, [null]);
/* 001074 */ 			}) ();
/* 001074 */ 		}
/* 001075 */ 		if (__t__ ((function () {
/* 001075 */ 			var __accu0__ = argnode;
/* 001075 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 001075 */ 		}) ())) {
/* 001076 */ 			return argnode.nodelist;
/* 001076 */ 		}
/* 001077 */ 		return (function () {
/* 001077 */ 			var __accu0__ = nodes;
/* 001077 */ 			return __call__ (__accu0__.LatexNodeList, __accu0__, [argnode]);
/* 001077 */ 		}) ();
/* 001077 */ 	});}
/* 001077 */ });
/* 000005 */ 
//# sourceMappingURL=minilatextohtml.map