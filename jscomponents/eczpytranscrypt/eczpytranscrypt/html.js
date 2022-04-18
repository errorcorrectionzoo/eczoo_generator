/* 000001 */ // Transcrypt'ed from Python, 2022-04-18 16:55:05
/* 000005 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000006 */ import {html5 as _html5} from './html.entities.js';
/* 000005 */ import * as _re from './re.js';
/* 000005 */ export {_html5, _re};
/* 000001 */ var __name__ = 'html';
/* 000009 */ export var __all__ = ['escape', 'unescape'];
/* 000012 */ export var escape = function (s, quote) {
/* 000012 */ 	if (typeof quote == 'undefined' || (quote != null && quote.hasOwnProperty ("__kwargtrans__"))) {;
/* 000012 */ 		var quote = true;
/* 000012 */ 	};
/* 000012 */ 	if (arguments.length) {
/* 000012 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000012 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000012 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000012 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000012 */ 				switch (__attrib0__) {
/* 000012 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000012 */ 					case 'quote': var quote = __allkwargs0__ [__attrib0__]; break;
/* 000012 */ 				}
/* 000012 */ 			}
/* 000012 */ 		}
/* 000012 */ 	}
/* 000012 */ 	else {
/* 000012 */ 	}
/* 000019 */ 	var s = (function () {
/* 000019 */ 		var __accu0__ = s;
/* 000019 */ 		return __call__ (__accu0__.py_replace, __accu0__, '&', '&amp;');
/* 000019 */ 	}) ();
/* 000020 */ 	var s = (function () {
/* 000020 */ 		var __accu0__ = s;
/* 000020 */ 		return __call__ (__accu0__.py_replace, __accu0__, '<', '&lt;');
/* 000020 */ 	}) ();
/* 000021 */ 	var s = (function () {
/* 000021 */ 		var __accu0__ = s;
/* 000021 */ 		return __call__ (__accu0__.py_replace, __accu0__, '>', '&gt;');
/* 000021 */ 	}) ();
/* 000022 */ 	if (__t__ (quote)) {
/* 000023 */ 		var s = (function () {
/* 000023 */ 			var __accu0__ = s;
/* 000023 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000023 */ 		}) ();
/* 000024 */ 		var s = (function () {
/* 000024 */ 			var __accu0__ = s;
/* 000024 */ 			return __call__ (__accu0__.py_replace, __accu0__, "'", '&#x27;');
/* 000024 */ 		}) ();
/* 000024 */ 	}
/* 000025 */ 	return s;
/* 000025 */ };
/* 000030 */ export var _invalid_charrefs = dict ({0: '�', 13: '\r', 128: '€', 129: '\x81', 130: '‚', 131: 'ƒ', 132: '„', 133: '…', 134: '†', 135: '‡', 136: 'ˆ', 137: '‰', 138: 'Š', 139: '‹', 140: 'Œ', 141: '\x8d', 142: 'Ž', 143: '\x8f', 144: '\x90', 145: '‘', 146: '’', 147: '“', 148: '”', 149: '•', 150: '–', 151: '—', 152: '˜', 153: '™', 154: 'š', 155: '›', 156: 'œ', 157: '\x9d', 158: 'ž', 159: 'Ÿ'});
/* 000067 */ export var _invalid_codepoints = new set ([1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65000, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 11, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]);
/* 000091 */ export var _replace_charref = function (s) {
/* 000091 */ 	if (arguments.length) {
/* 000091 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 				switch (__attrib0__) {
/* 000091 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 	}
/* 000091 */ 	else {
/* 000091 */ 	}
/* 000092 */ 	var s = (function () {
/* 000092 */ 		var __accu0__ = s;
/* 000092 */ 		return __call__ (__accu0__.group, __accu0__, 1);
/* 000092 */ 	}) ();
/* 000093 */ 	if (__t__ (__eq__ (__getitem__ (s, 0), '#'))) {
/* 000095 */ 		if (__t__ (__in__ (__getitem__ (s, 1), 'xX'))) {
/* 000096 */ 			var num = __call__ (int, null, (function () {
/* 000096 */ 				var __accu0__ = __getslice__ (s, 2, null, 1);
/* 000096 */ 				return __call__ (__accu0__.rstrip, __accu0__, ';');
/* 000096 */ 			}) (), 16);
/* 000096 */ 		}
/* 000097 */ 		else {
/* 000098 */ 			var num = __call__ (int, null, (function () {
/* 000098 */ 				var __accu0__ = __getslice__ (s, 1, null, 1);
/* 000098 */ 				return __call__ (__accu0__.rstrip, __accu0__, ';');
/* 000098 */ 			}) ());
/* 000098 */ 		}
/* 000099 */ 		if (__t__ (__in__ (num, _invalid_charrefs))) {
/* 000100 */ 			return __getitem__ (_invalid_charrefs, num);
/* 000100 */ 		}
/* 000101 */ 		if (__t__ (__t__ ((__le__ (55296, num) && __le__ (num, 57343))) || __gt__ (num, 1114111))) {
/* 000102 */ 			return '�';
/* 000102 */ 		}
/* 000103 */ 		if (__t__ (__in__ (num, _invalid_codepoints))) {
/* 000104 */ 			return '';
/* 000104 */ 		}
/* 000105 */ 		return __call__ (chr, null, num);
/* 000105 */ 	}
/* 000106 */ 	else {
/* 000108 */ 		if (__t__ (__in__ (s, _html5))) {
/* 000109 */ 			return __getitem__ (_html5, s);
/* 000109 */ 		}
/* 000111 */ 		var __break0__ = false;
/* 000111 */ 		for (var x = __sub__ (__call__ (len, null, s), 1); x > 1; x--) {
/* 000112 */ 			if (__t__ (__in__ (__getslice__ (s, 0, x, 1), _html5))) {
/* 000113 */ 				return __add__ (__getitem__ (_html5, __getslice__ (s, 0, x, 1)), __getslice__ (s, x, null, 1));
/* 000113 */ 			}
/* 000113 */ 		}
/* 000114 */ 		if (!__break0__) {
/* 000115 */ 			return __add__ ('&', s);
/* 000115 */ 		}
/* 000115 */ 	}
/* 000115 */ };
/* 000118 */ export var _charref = (function () {
/* 000118 */ 	var __accu0__ = _re;
/* 000118 */ 	return __call__ (__accu0__.compile, __accu0__, '&(#[0-9]+;?|#[xX][0-9a-fA-F]+;?|[^\\t\\n\\f <&#;]{1,32};?)');
/* 000118 */ }) ();
/* 000122 */ export var unescape = function (s) {
/* 000122 */ 	if (arguments.length) {
/* 000122 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 				switch (__attrib0__) {
/* 000122 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 	}
/* 000122 */ 	else {
/* 000122 */ 	}
/* 000130 */ 	if (__t__ (!__in__ ('&', s))) {
/* 000131 */ 		return s;
/* 000131 */ 	}
/* 000132 */ 	return (function () {
/* 000132 */ 		var __accu0__ = _charref;
/* 000132 */ 		return __call__ (__accu0__.sub, __accu0__, _replace_charref, s);
/* 000132 */ 	}) ();
/* 000132 */ };
/* 000005 */ 
//# sourceMappingURL=html.map