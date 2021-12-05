/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var eczsearch;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/eczsearch/index.js":
/*!********************************!*\
  !*** ./src/eczsearch/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EczooSearchWidget\": () => (/* reexport safe */ _searchwidget__WEBPACK_IMPORTED_MODULE_0__.EczooSearchWidget),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _searchwidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchwidget */ \"./src/eczsearch/searchwidget.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  EczooSearchWidget: _searchwidget__WEBPACK_IMPORTED_MODULE_0__.EczooSearchWidget\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/eczsearch/index.js?");

/***/ }),

/***/ "./src/eczsearch/searchwidget.js":
/*!***************************************!*\
  !*** ./src/eczsearch/searchwidget.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EczooSearchWidget\": () => (/* binding */ EczooSearchWidget)\n/* harmony export */ });\n/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lunr */ \"./node_modules/lunr/lunr.js\");\n/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lunr__WEBPACK_IMPORTED_MODULE_0__);\n\nconst default_context_length = 50; // chars\n\nconst max_num_results_for_mathjax = 50;\n\nfunction _escapeHTML(str) {\n  var p = document.createElement(\"p\");\n  p.appendChild(document.createTextNode(str));\n  return p.innerHTML;\n}\n\nclass EczooSearchWidget {\n  constructor(a) {\n    this.search_widget_container = a.search_widget_container;\n    this.fields = a.fields;\n    this.ref_field = a.ref_field;\n    this.title_field = a.title_field;\n    this.href_field = a.href_field;\n    this.context_length = a.context_length;\n\n    if (typeof this.context_length == 'undefined') {\n      this.context_length = default_context_length;\n    }\n\n    this.idx = a.idx;\n    this.store_fetch_json = a.store_fetch_json;\n\n    if (typeof this.store_fetch_json != 'undefined') {\n      if (typeof this.store != 'undefined') {\n        throw Error(\"EczooSearchFunction: don't specify both store: \" + \"and store_fetch_json: \");\n      }\n\n      fetch(this.store_fetch_json).then(response => response.json()).then(data => this._set_store_and_install(data));\n      return;\n    }\n\n    this._set_store_and_install(a.store);\n  } // private\n\n\n  _set_store_and_install(store) {\n    this.store = store;\n    console.log('Got store. Store = ', store);\n\n    if (typeof this.store == 'undefined') {\n      throw Error(\"EczooSearchFunction: no store specified or none found\");\n    } // maybe we might need to auto-detect the list of fields\n\n\n    if (typeof this.fields == 'undefined' || this.fields.length == 0) {\n      var fields = [];\n      Object.keys(this.store).forEach(store_key => {\n        var store_obj = this.store[store_key];\n        Object.keys(store_obj).forEach(field_key => {\n          if (fields.indexOf(field_key) == -1) {\n            fields.push(field_key);\n          }\n        });\n      });\n      this.fields = fields;\n    } // this.idx\n\n\n    if (typeof this.idx == 'undefined') {\n      var _this = this;\n\n      const buildidx = function () {\n        var obj = this;\n        obj.ref(_this.ref_field);\n\n        _this.fields.forEach(fldname => obj.field(fldname));\n\n        obj.metadataWhitelist = ['position'];\n        Object.keys(_this.store).forEach(function (k) {\n          const doc = _this.store[k];\n          obj.add(doc);\n        }, obj);\n      };\n\n      this.idx = lunr__WEBPACK_IMPORTED_MODULE_0___default()(buildidx);\n    } //console.log('store =', this.store);\n    //console.log('index is = ', this.idx);\n\n\n    this._do_install();\n  } // private:\n\n\n  _do_install() {\n    console.log(\"Installing the search widget in the page.\"); // clear any existing content in the target app container\n\n    this.search_widget_container.innerHTML = '';\n    const inputbox = document.createElement('input');\n    inputbox.setAttribute('type', \"text\");\n    inputbox.classList.add(\"search-input\");\n    inputbox.value = '';\n    inputbox.placeholder = 'type & hit RETURN to search';\n    this.search_widget_container.appendChild(inputbox);\n    this.search_input = inputbox;\n    const divresults = document.createElement('div');\n    divresults.classList.add('search-results');\n    this.search_widget_container.appendChild(divresults);\n    this.search_results_container = divresults;\n    this.search_input.addEventListener('change', event => this._do_search(event));\n  }\n\n  _do_search(event) {\n    this.search_results_container.innerHTML = '';\n    const value = event.target.value;\n\n    if (!value || value.trim().length == 0) {\n      this._display_search_no_query_string();\n\n      return;\n    }\n\n    console.log(\"Searching! value =\", value);\n    var results;\n\n    try {\n      results = this.idx.search(value);\n    } catch (e) {\n      if (e instanceof (lunr__WEBPACK_IMPORTED_MODULE_0___default().QueryParseError)) {\n        this._display_search_error(value, e);\n\n        return;\n      } else {\n        throw e;\n      }\n    }\n\n    console.log('results =', results);\n\n    this._display_search_results(value, results);\n  }\n\n  _display_search_no_query_string() {\n    const p = document.createElement('p');\n    p.classList.add('search-no-query-string');\n    p.textContent = 'Type a few words above and hit “RETURN” to search the error correction zoo.';\n    this.search_results_container.appendChild(p);\n  }\n\n  _display_search_error(search_str, error) {\n    console.log(\"Error in search.\", error);\n    const p = document.createElement('p');\n    p.classList.add('search-results-error');\n    const s1 = document.createElement('span');\n    s1.textContent = 'Error in search query ‘' + search_str + '’: ';\n    p.appendChild(s1);\n    const s2 = document.createElement('span');\n    s2.classList.add('search-results-error-message');\n    s2.textContent = error.message;\n    p.appendChild(s2);\n    const a = document.createElement('a');\n    a.classList.add('search-query-info');\n    a.setAttribute(\"href\", \"https://lunrjs.com/guides/searching.html\");\n    a.setAttribute(\"target\", \"_blank\");\n    a.textContent = \"(more information on search syntax)\";\n    p.appendChild(a);\n    this.search_results_container.appendChild(p);\n  }\n\n  _display_search_results(search_str, results) {\n    if (results.length == 0) {\n      this._display_search_no_results(search_str);\n    } else {\n      results.forEach(r => this._add_display_result(r, this.search_results_container));\n\n      if (results.length < max_num_results_for_mathjax && typeof MathJax != 'undefined') {\n        MathJax.typeset();\n      }\n    }\n  }\n\n  _display_search_no_results(search_str) {\n    const p = document.createElement('p');\n    p.classList.add('search-no-results');\n    p.textContent = 'Your search for ‘' + search_str + '’ did not yield any results.';\n    const a = document.createElement('a');\n    a.classList.add('search-query-info');\n    a.setAttribute(\"href\", \"https://lunrjs.com/guides/searching.html\");\n    a.setAttribute(\"target\", \"_blank\");\n    a.textContent = \"(more information on search syntax)\";\n    p.appendChild(a);\n    this.search_results_container.appendChild(p);\n  }\n\n  _add_display_result(result, container) {\n    //console.log('store =', this.store);\n    //console.log('result =', result);\n    const doc = this.store[result.ref];\n    const div = document.createElement('div');\n    div.classList.add(\"search-result\");\n    var srt = document.createElement('div');\n    srt.classList.add(\"search-result-title\");\n    div.appendChild(srt);\n\n    if (this.href_field) {\n      var a = document.createElement('a');\n      a.setAttribute('href', doc[this.href_field]);\n      a.classList.add(\"search-result-link\");\n      srt.appendChild(a);\n      srt = a;\n    }\n\n    srt.innerText = doc[this.title_field];\n    const hipos = {}; // hipos[field] = [ (list of highlight positions) ]\n\n    Object.keys(result.matchData.metadata).forEach(word => {\n      const wordmatches = result.matchData.metadata[word];\n      Object.keys(wordmatches).forEach(fieldname => {\n        const fieldmatches = wordmatches[fieldname];\n        const poslist = fieldmatches.position; //console.log('word =', word, 'fieldname =', fieldname, 'poslist =', poslist);\n\n        if (!hipos.hasOwnProperty(fieldname)) {\n          hipos[fieldname] = [];\n        }\n\n        hipos[fieldname] = hipos[fieldname].concat(poslist);\n      });\n    });\n    const context_length = this.context_length; // iterate over this.fields instead, to preserve field order\n\n    for (const fieldname of this.fields) {\n      if (!hipos.hasOwnProperty(fieldname)) {\n        // no such field in match\n        continue;\n      }\n\n      const poslist = hipos[fieldname]; // sort highlight positions by starting position\n\n      poslist.sort((a, b) => a[0] - b[0]); // make sure that end position does not overstep another starting position\n\n      poslist.forEach((x, index) => {\n        if (index < poslist.length - 1 && x[0] + x[1] > poslist[index + 1][0]) {\n          // oversteps onto next position; shorten\n          return [x[0], poslist[index + 1][0] - x[0]];\n        } else {\n          return [x[0], x[1]]; // all ok\n        }\n      }); //console.log('fieldname =', fieldname, 'poslist =', poslist);\n\n      const docfieldstr = doc[fieldname];\n      var showhtml = '';\n      var lastpos = 0;\n\n      for (const pospair of poslist) {\n        if (lastpos > 0 && pospair[0] - lastpos < 2 * context_length || lastpos == 0 && pospair[0] < context_length) {\n          // close to previous match (or string start), do not elide\n          showhtml += _escapeHTML(docfieldstr.substr(lastpos, pospair[0] - lastpos));\n        } else {\n          if (lastpos != 0) {\n            showhtml += _escapeHTML(docfieldstr.substr(lastpos, context_length));\n            showhtml += '…';\n          }\n\n          showhtml += ' …';\n          showhtml += _escapeHTML(docfieldstr.substr(pospair[0] - context_length, context_length));\n        }\n\n        showhtml += '<span class=\"sr-highlight\">' + _escapeHTML(docfieldstr.substr(pospair[0], pospair[1])) + '</span>';\n        lastpos = pospair[0] + pospair[1];\n      }\n\n      if (docfieldstr.length > lastpos + context_length) {\n        showhtml += _escapeHTML(docfieldstr.substr(lastpos, context_length)) + '…';\n      } else {\n        showhtml += _escapeHTML(docfieldstr.substr(lastpos));\n      } // field name\n\n\n      showhtml += '<span class=\"search-result-display-field-name\">' + _escapeHTML(fieldname) + '</span>';\n      const p = document.createElement('div');\n      p.classList.add('search-result-field-display');\n      var fieldnameclsname = fieldname.replace(/[^a-zA-Z0-9_-]/g, \"\");\n      p.classList.add('search-result-field-display--' + fieldnameclsname);\n      p.innerHTML = showhtml;\n      div.appendChild(p);\n    }\n\n    container.appendChild(div);\n  }\n\n}\n; // -------------------------------------------------------------------\n// automatically install in the page, searching for the correct element by ID\n\nfunction init_search_widget() {\n  console.log(\"Initialization code for possible search widget.\");\n  const elem = document.getElementById('EczooSearchWidget');\n\n  if (elem) {\n    console.log(\"Initializing search widget.\");\n    var fields = elem.dataset.searchWidgetFields;\n\n    if (fields) {\n      fields = fieldsval.split(',').map(s => s.trim());\n    }\n\n    var the_context_length = elem.dataset.searchWidgetContextLength;\n\n    if (the_context_length) {\n      the_context_length = Number.parseInt(the_context_length);\n    }\n\n    window.eczoo_search_widget = new EczooSearchWidget({\n      search_widget_container: elem,\n      store_fetch_json: elem.dataset.searchWidgetStoreFetchJson,\n      fields: fields,\n      ref_field: elem.dataset.searchWidgetRefField,\n      title_field: elem.dataset.searchWidgetTitleField,\n      href_field: elem.dataset.searchWidgetHrefField,\n      context_length: the_context_length\n    });\n  }\n}\n\nif (document.readyState === \"complete\") {\n  init_search_widget();\n} else {\n  console.log('window = ', window);\n  window.addEventListener('load', init_search_widget);\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/eczsearch/searchwidget.js?");

/***/ }),

/***/ "./node_modules/lunr/lunr.js":
/*!***********************************!*\
  !*** ./node_modules/lunr/lunr.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9\n * Copyright (C) 2020 Oliver Nightingale\n * @license MIT\n */\n\n;(function(){\n\n/**\n * A convenience function for configuring and constructing\n * a new lunr Index.\n *\n * A lunr.Builder instance is created and the pipeline setup\n * with a trimmer, stop word filter and stemmer.\n *\n * This builder object is yielded to the configuration function\n * that is passed as a parameter, allowing the list of fields\n * and other builder parameters to be customised.\n *\n * All documents _must_ be added within the passed config function.\n *\n * @example\n * var idx = lunr(function () {\n *   this.field('title')\n *   this.field('body')\n *   this.ref('id')\n *\n *   documents.forEach(function (doc) {\n *     this.add(doc)\n *   }, this)\n * })\n *\n * @see {@link lunr.Builder}\n * @see {@link lunr.Pipeline}\n * @see {@link lunr.trimmer}\n * @see {@link lunr.stopWordFilter}\n * @see {@link lunr.stemmer}\n * @namespace {function} lunr\n */\nvar lunr = function (config) {\n  var builder = new lunr.Builder\n\n  builder.pipeline.add(\n    lunr.trimmer,\n    lunr.stopWordFilter,\n    lunr.stemmer\n  )\n\n  builder.searchPipeline.add(\n    lunr.stemmer\n  )\n\n  config.call(builder, builder)\n  return builder.build()\n}\n\nlunr.version = \"2.3.9\"\n/*!\n * lunr.utils\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * A namespace containing utils for the rest of the lunr library\n * @namespace lunr.utils\n */\nlunr.utils = {}\n\n/**\n * Print a warning message to the console.\n *\n * @param {String} message The message to be printed.\n * @memberOf lunr.utils\n * @function\n */\nlunr.utils.warn = (function (global) {\n  /* eslint-disable no-console */\n  return function (message) {\n    if (global.console && console.warn) {\n      console.warn(message)\n    }\n  }\n  /* eslint-enable no-console */\n})(this)\n\n/**\n * Convert an object to a string.\n *\n * In the case of `null` and `undefined` the function returns\n * the empty string, in all other cases the result of calling\n * `toString` on the passed object is returned.\n *\n * @param {Any} obj The object to convert to a string.\n * @return {String} string representation of the passed object.\n * @memberOf lunr.utils\n */\nlunr.utils.asString = function (obj) {\n  if (obj === void 0 || obj === null) {\n    return \"\"\n  } else {\n    return obj.toString()\n  }\n}\n\n/**\n * Clones an object.\n *\n * Will create a copy of an existing object such that any mutations\n * on the copy cannot affect the original.\n *\n * Only shallow objects are supported, passing a nested object to this\n * function will cause a TypeError.\n *\n * Objects with primitives, and arrays of primitives are supported.\n *\n * @param {Object} obj The object to clone.\n * @return {Object} a clone of the passed object.\n * @throws {TypeError} when a nested object is passed.\n * @memberOf Utils\n */\nlunr.utils.clone = function (obj) {\n  if (obj === null || obj === undefined) {\n    return obj\n  }\n\n  var clone = Object.create(null),\n      keys = Object.keys(obj)\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i],\n        val = obj[key]\n\n    if (Array.isArray(val)) {\n      clone[key] = val.slice()\n      continue\n    }\n\n    if (typeof val === 'string' ||\n        typeof val === 'number' ||\n        typeof val === 'boolean') {\n      clone[key] = val\n      continue\n    }\n\n    throw new TypeError(\"clone is not deep and does not support nested objects\")\n  }\n\n  return clone\n}\nlunr.FieldRef = function (docRef, fieldName, stringValue) {\n  this.docRef = docRef\n  this.fieldName = fieldName\n  this._stringValue = stringValue\n}\n\nlunr.FieldRef.joiner = \"/\"\n\nlunr.FieldRef.fromString = function (s) {\n  var n = s.indexOf(lunr.FieldRef.joiner)\n\n  if (n === -1) {\n    throw \"malformed field ref string\"\n  }\n\n  var fieldRef = s.slice(0, n),\n      docRef = s.slice(n + 1)\n\n  return new lunr.FieldRef (docRef, fieldRef, s)\n}\n\nlunr.FieldRef.prototype.toString = function () {\n  if (this._stringValue == undefined) {\n    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef\n  }\n\n  return this._stringValue\n}\n/*!\n * lunr.Set\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * A lunr set.\n *\n * @constructor\n */\nlunr.Set = function (elements) {\n  this.elements = Object.create(null)\n\n  if (elements) {\n    this.length = elements.length\n\n    for (var i = 0; i < this.length; i++) {\n      this.elements[elements[i]] = true\n    }\n  } else {\n    this.length = 0\n  }\n}\n\n/**\n * A complete set that contains all elements.\n *\n * @static\n * @readonly\n * @type {lunr.Set}\n */\nlunr.Set.complete = {\n  intersect: function (other) {\n    return other\n  },\n\n  union: function () {\n    return this\n  },\n\n  contains: function () {\n    return true\n  }\n}\n\n/**\n * An empty set that contains no elements.\n *\n * @static\n * @readonly\n * @type {lunr.Set}\n */\nlunr.Set.empty = {\n  intersect: function () {\n    return this\n  },\n\n  union: function (other) {\n    return other\n  },\n\n  contains: function () {\n    return false\n  }\n}\n\n/**\n * Returns true if this set contains the specified object.\n *\n * @param {object} object - Object whose presence in this set is to be tested.\n * @returns {boolean} - True if this set contains the specified object.\n */\nlunr.Set.prototype.contains = function (object) {\n  return !!this.elements[object]\n}\n\n/**\n * Returns a new set containing only the elements that are present in both\n * this set and the specified set.\n *\n * @param {lunr.Set} other - set to intersect with this set.\n * @returns {lunr.Set} a new set that is the intersection of this and the specified set.\n */\n\nlunr.Set.prototype.intersect = function (other) {\n  var a, b, elements, intersection = []\n\n  if (other === lunr.Set.complete) {\n    return this\n  }\n\n  if (other === lunr.Set.empty) {\n    return other\n  }\n\n  if (this.length < other.length) {\n    a = this\n    b = other\n  } else {\n    a = other\n    b = this\n  }\n\n  elements = Object.keys(a.elements)\n\n  for (var i = 0; i < elements.length; i++) {\n    var element = elements[i]\n    if (element in b.elements) {\n      intersection.push(element)\n    }\n  }\n\n  return new lunr.Set (intersection)\n}\n\n/**\n * Returns a new set combining the elements of this and the specified set.\n *\n * @param {lunr.Set} other - set to union with this set.\n * @return {lunr.Set} a new set that is the union of this and the specified set.\n */\n\nlunr.Set.prototype.union = function (other) {\n  if (other === lunr.Set.complete) {\n    return lunr.Set.complete\n  }\n\n  if (other === lunr.Set.empty) {\n    return this\n  }\n\n  return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))\n}\n/**\n * A function to calculate the inverse document frequency for\n * a posting. This is shared between the builder and the index\n *\n * @private\n * @param {object} posting - The posting for a given term\n * @param {number} documentCount - The total number of documents.\n */\nlunr.idf = function (posting, documentCount) {\n  var documentsWithTerm = 0\n\n  for (var fieldName in posting) {\n    if (fieldName == '_index') continue // Ignore the term index, its not a field\n    documentsWithTerm += Object.keys(posting[fieldName]).length\n  }\n\n  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)\n\n  return Math.log(1 + Math.abs(x))\n}\n\n/**\n * A token wraps a string representation of a token\n * as it is passed through the text processing pipeline.\n *\n * @constructor\n * @param {string} [str=''] - The string token being wrapped.\n * @param {object} [metadata={}] - Metadata associated with this token.\n */\nlunr.Token = function (str, metadata) {\n  this.str = str || \"\"\n  this.metadata = metadata || {}\n}\n\n/**\n * Returns the token string that is being wrapped by this object.\n *\n * @returns {string}\n */\nlunr.Token.prototype.toString = function () {\n  return this.str\n}\n\n/**\n * A token update function is used when updating or optionally\n * when cloning a token.\n *\n * @callback lunr.Token~updateFunction\n * @param {string} str - The string representation of the token.\n * @param {Object} metadata - All metadata associated with this token.\n */\n\n/**\n * Applies the given function to the wrapped string token.\n *\n * @example\n * token.update(function (str, metadata) {\n *   return str.toUpperCase()\n * })\n *\n * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.\n * @returns {lunr.Token}\n */\nlunr.Token.prototype.update = function (fn) {\n  this.str = fn(this.str, this.metadata)\n  return this\n}\n\n/**\n * Creates a clone of this token. Optionally a function can be\n * applied to the cloned token.\n *\n * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.\n * @returns {lunr.Token}\n */\nlunr.Token.prototype.clone = function (fn) {\n  fn = fn || function (s) { return s }\n  return new lunr.Token (fn(this.str, this.metadata), this.metadata)\n}\n/*!\n * lunr.tokenizer\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * A function for splitting a string into tokens ready to be inserted into\n * the search index. Uses `lunr.tokenizer.separator` to split strings, change\n * the value of this property to change how strings are split into tokens.\n *\n * This tokenizer will convert its parameter to a string by calling `toString` and\n * then will split this string on the character in `lunr.tokenizer.separator`.\n * Arrays will have their elements converted to strings and wrapped in a lunr.Token.\n *\n * Optional metadata can be passed to the tokenizer, this metadata will be cloned and\n * added as metadata to every token that is created from the object to be tokenized.\n *\n * @static\n * @param {?(string|object|object[])} obj - The object to convert into tokens\n * @param {?object} metadata - Optional metadata to associate with every token\n * @returns {lunr.Token[]}\n * @see {@link lunr.Pipeline}\n */\nlunr.tokenizer = function (obj, metadata) {\n  if (obj == null || obj == undefined) {\n    return []\n  }\n\n  if (Array.isArray(obj)) {\n    return obj.map(function (t) {\n      return new lunr.Token(\n        lunr.utils.asString(t).toLowerCase(),\n        lunr.utils.clone(metadata)\n      )\n    })\n  }\n\n  var str = obj.toString().toLowerCase(),\n      len = str.length,\n      tokens = []\n\n  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {\n    var char = str.charAt(sliceEnd),\n        sliceLength = sliceEnd - sliceStart\n\n    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {\n\n      if (sliceLength > 0) {\n        var tokenMetadata = lunr.utils.clone(metadata) || {}\n        tokenMetadata[\"position\"] = [sliceStart, sliceLength]\n        tokenMetadata[\"index\"] = tokens.length\n\n        tokens.push(\n          new lunr.Token (\n            str.slice(sliceStart, sliceEnd),\n            tokenMetadata\n          )\n        )\n      }\n\n      sliceStart = sliceEnd + 1\n    }\n\n  }\n\n  return tokens\n}\n\n/**\n * The separator used to split a string into tokens. Override this property to change the behaviour of\n * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.\n *\n * @static\n * @see lunr.tokenizer\n */\nlunr.tokenizer.separator = /[\\s\\-]+/\n/*!\n * lunr.Pipeline\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * lunr.Pipelines maintain an ordered list of functions to be applied to all\n * tokens in documents entering the search index and queries being ran against\n * the index.\n *\n * An instance of lunr.Index created with the lunr shortcut will contain a\n * pipeline with a stop word filter and an English language stemmer. Extra\n * functions can be added before or after either of these functions or these\n * default functions can be removed.\n *\n * When run the pipeline will call each function in turn, passing a token, the\n * index of that token in the original list of all tokens and finally a list of\n * all the original tokens.\n *\n * The output of functions in the pipeline will be passed to the next function\n * in the pipeline. To exclude a token from entering the index the function\n * should return undefined, the rest of the pipeline will not be called with\n * this token.\n *\n * For serialisation of pipelines to work, all functions used in an instance of\n * a pipeline should be registered with lunr.Pipeline. Registered functions can\n * then be loaded. If trying to load a serialised pipeline that uses functions\n * that are not registered an error will be thrown.\n *\n * If not planning on serialising the pipeline then registering pipeline functions\n * is not necessary.\n *\n * @constructor\n */\nlunr.Pipeline = function () {\n  this._stack = []\n}\n\nlunr.Pipeline.registeredFunctions = Object.create(null)\n\n/**\n * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token\n * string as well as all known metadata. A pipeline function can mutate the token string\n * or mutate (or add) metadata for a given token.\n *\n * A pipeline function can indicate that the passed token should be discarded by returning\n * null, undefined or an empty string. This token will not be passed to any downstream pipeline\n * functions and will not be added to the index.\n *\n * Multiple tokens can be returned by returning an array of tokens. Each token will be passed\n * to any downstream pipeline functions and all will returned tokens will be added to the index.\n *\n * Any number of pipeline functions may be chained together using a lunr.Pipeline.\n *\n * @interface lunr.PipelineFunction\n * @param {lunr.Token} token - A token from the document being processed.\n * @param {number} i - The index of this token in the complete list of tokens for this document/field.\n * @param {lunr.Token[]} tokens - All tokens for this document/field.\n * @returns {(?lunr.Token|lunr.Token[])}\n */\n\n/**\n * Register a function with the pipeline.\n *\n * Functions that are used in the pipeline should be registered if the pipeline\n * needs to be serialised, or a serialised pipeline needs to be loaded.\n *\n * Registering a function does not add it to a pipeline, functions must still be\n * added to instances of the pipeline for them to be used when running a pipeline.\n *\n * @param {lunr.PipelineFunction} fn - The function to check for.\n * @param {String} label - The label to register this function with\n */\nlunr.Pipeline.registerFunction = function (fn, label) {\n  if (label in this.registeredFunctions) {\n    lunr.utils.warn('Overwriting existing registered function: ' + label)\n  }\n\n  fn.label = label\n  lunr.Pipeline.registeredFunctions[fn.label] = fn\n}\n\n/**\n * Warns if the function is not registered as a Pipeline function.\n *\n * @param {lunr.PipelineFunction} fn - The function to check for.\n * @private\n */\nlunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {\n  var isRegistered = fn.label && (fn.label in this.registeredFunctions)\n\n  if (!isRegistered) {\n    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\\n', fn)\n  }\n}\n\n/**\n * Loads a previously serialised pipeline.\n *\n * All functions to be loaded must already be registered with lunr.Pipeline.\n * If any function from the serialised data has not been registered then an\n * error will be thrown.\n *\n * @param {Object} serialised - The serialised pipeline to load.\n * @returns {lunr.Pipeline}\n */\nlunr.Pipeline.load = function (serialised) {\n  var pipeline = new lunr.Pipeline\n\n  serialised.forEach(function (fnName) {\n    var fn = lunr.Pipeline.registeredFunctions[fnName]\n\n    if (fn) {\n      pipeline.add(fn)\n    } else {\n      throw new Error('Cannot load unregistered function: ' + fnName)\n    }\n  })\n\n  return pipeline\n}\n\n/**\n * Adds new functions to the end of the pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.\n */\nlunr.Pipeline.prototype.add = function () {\n  var fns = Array.prototype.slice.call(arguments)\n\n  fns.forEach(function (fn) {\n    lunr.Pipeline.warnIfFunctionNotRegistered(fn)\n    this._stack.push(fn)\n  }, this)\n}\n\n/**\n * Adds a single function after a function that already exists in the\n * pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.\n * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.\n */\nlunr.Pipeline.prototype.after = function (existingFn, newFn) {\n  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)\n\n  var pos = this._stack.indexOf(existingFn)\n  if (pos == -1) {\n    throw new Error('Cannot find existingFn')\n  }\n\n  pos = pos + 1\n  this._stack.splice(pos, 0, newFn)\n}\n\n/**\n * Adds a single function before a function that already exists in the\n * pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.\n * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.\n */\nlunr.Pipeline.prototype.before = function (existingFn, newFn) {\n  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)\n\n  var pos = this._stack.indexOf(existingFn)\n  if (pos == -1) {\n    throw new Error('Cannot find existingFn')\n  }\n\n  this._stack.splice(pos, 0, newFn)\n}\n\n/**\n * Removes a function from the pipeline.\n *\n * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.\n */\nlunr.Pipeline.prototype.remove = function (fn) {\n  var pos = this._stack.indexOf(fn)\n  if (pos == -1) {\n    return\n  }\n\n  this._stack.splice(pos, 1)\n}\n\n/**\n * Runs the current list of functions that make up the pipeline against the\n * passed tokens.\n *\n * @param {Array} tokens The tokens to run through the pipeline.\n * @returns {Array}\n */\nlunr.Pipeline.prototype.run = function (tokens) {\n  var stackLength = this._stack.length\n\n  for (var i = 0; i < stackLength; i++) {\n    var fn = this._stack[i]\n    var memo = []\n\n    for (var j = 0; j < tokens.length; j++) {\n      var result = fn(tokens[j], j, tokens)\n\n      if (result === null || result === void 0 || result === '') continue\n\n      if (Array.isArray(result)) {\n        for (var k = 0; k < result.length; k++) {\n          memo.push(result[k])\n        }\n      } else {\n        memo.push(result)\n      }\n    }\n\n    tokens = memo\n  }\n\n  return tokens\n}\n\n/**\n * Convenience method for passing a string through a pipeline and getting\n * strings out. This method takes care of wrapping the passed string in a\n * token and mapping the resulting tokens back to strings.\n *\n * @param {string} str - The string to pass through the pipeline.\n * @param {?object} metadata - Optional metadata to associate with the token\n * passed to the pipeline.\n * @returns {string[]}\n */\nlunr.Pipeline.prototype.runString = function (str, metadata) {\n  var token = new lunr.Token (str, metadata)\n\n  return this.run([token]).map(function (t) {\n    return t.toString()\n  })\n}\n\n/**\n * Resets the pipeline by removing any existing processors.\n *\n */\nlunr.Pipeline.prototype.reset = function () {\n  this._stack = []\n}\n\n/**\n * Returns a representation of the pipeline ready for serialisation.\n *\n * Logs a warning if the function has not been registered.\n *\n * @returns {Array}\n */\nlunr.Pipeline.prototype.toJSON = function () {\n  return this._stack.map(function (fn) {\n    lunr.Pipeline.warnIfFunctionNotRegistered(fn)\n\n    return fn.label\n  })\n}\n/*!\n * lunr.Vector\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * A vector is used to construct the vector space of documents and queries. These\n * vectors support operations to determine the similarity between two documents or\n * a document and a query.\n *\n * Normally no parameters are required for initializing a vector, but in the case of\n * loading a previously dumped vector the raw elements can be provided to the constructor.\n *\n * For performance reasons vectors are implemented with a flat array, where an elements\n * index is immediately followed by its value. E.g. [index, value, index, value]. This\n * allows the underlying array to be as sparse as possible and still offer decent\n * performance when being used for vector calculations.\n *\n * @constructor\n * @param {Number[]} [elements] - The flat list of element index and element value pairs.\n */\nlunr.Vector = function (elements) {\n  this._magnitude = 0\n  this.elements = elements || []\n}\n\n\n/**\n * Calculates the position within the vector to insert a given index.\n *\n * This is used internally by insert and upsert. If there are duplicate indexes then\n * the position is returned as if the value for that index were to be updated, but it\n * is the callers responsibility to check whether there is a duplicate at that index\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @returns {Number}\n */\nlunr.Vector.prototype.positionForIndex = function (index) {\n  // For an empty vector the tuple can be inserted at the beginning\n  if (this.elements.length == 0) {\n    return 0\n  }\n\n  var start = 0,\n      end = this.elements.length / 2,\n      sliceLength = end - start,\n      pivotPoint = Math.floor(sliceLength / 2),\n      pivotIndex = this.elements[pivotPoint * 2]\n\n  while (sliceLength > 1) {\n    if (pivotIndex < index) {\n      start = pivotPoint\n    }\n\n    if (pivotIndex > index) {\n      end = pivotPoint\n    }\n\n    if (pivotIndex == index) {\n      break\n    }\n\n    sliceLength = end - start\n    pivotPoint = start + Math.floor(sliceLength / 2)\n    pivotIndex = this.elements[pivotPoint * 2]\n  }\n\n  if (pivotIndex == index) {\n    return pivotPoint * 2\n  }\n\n  if (pivotIndex > index) {\n    return pivotPoint * 2\n  }\n\n  if (pivotIndex < index) {\n    return (pivotPoint + 1) * 2\n  }\n}\n\n/**\n * Inserts an element at an index within the vector.\n *\n * Does not allow duplicates, will throw an error if there is already an entry\n * for this index.\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @param {Number} val - The value to be inserted into the vector.\n */\nlunr.Vector.prototype.insert = function (insertIdx, val) {\n  this.upsert(insertIdx, val, function () {\n    throw \"duplicate index\"\n  })\n}\n\n/**\n * Inserts or updates an existing index within the vector.\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @param {Number} val - The value to be inserted into the vector.\n * @param {function} fn - A function that is called for updates, the existing value and the\n * requested value are passed as arguments\n */\nlunr.Vector.prototype.upsert = function (insertIdx, val, fn) {\n  this._magnitude = 0\n  var position = this.positionForIndex(insertIdx)\n\n  if (this.elements[position] == insertIdx) {\n    this.elements[position + 1] = fn(this.elements[position + 1], val)\n  } else {\n    this.elements.splice(position, 0, insertIdx, val)\n  }\n}\n\n/**\n * Calculates the magnitude of this vector.\n *\n * @returns {Number}\n */\nlunr.Vector.prototype.magnitude = function () {\n  if (this._magnitude) return this._magnitude\n\n  var sumOfSquares = 0,\n      elementsLength = this.elements.length\n\n  for (var i = 1; i < elementsLength; i += 2) {\n    var val = this.elements[i]\n    sumOfSquares += val * val\n  }\n\n  return this._magnitude = Math.sqrt(sumOfSquares)\n}\n\n/**\n * Calculates the dot product of this vector and another vector.\n *\n * @param {lunr.Vector} otherVector - The vector to compute the dot product with.\n * @returns {Number}\n */\nlunr.Vector.prototype.dot = function (otherVector) {\n  var dotProduct = 0,\n      a = this.elements, b = otherVector.elements,\n      aLen = a.length, bLen = b.length,\n      aVal = 0, bVal = 0,\n      i = 0, j = 0\n\n  while (i < aLen && j < bLen) {\n    aVal = a[i], bVal = b[j]\n    if (aVal < bVal) {\n      i += 2\n    } else if (aVal > bVal) {\n      j += 2\n    } else if (aVal == bVal) {\n      dotProduct += a[i + 1] * b[j + 1]\n      i += 2\n      j += 2\n    }\n  }\n\n  return dotProduct\n}\n\n/**\n * Calculates the similarity between this vector and another vector.\n *\n * @param {lunr.Vector} otherVector - The other vector to calculate the\n * similarity with.\n * @returns {Number}\n */\nlunr.Vector.prototype.similarity = function (otherVector) {\n  return this.dot(otherVector) / this.magnitude() || 0\n}\n\n/**\n * Converts the vector to an array of the elements within the vector.\n *\n * @returns {Number[]}\n */\nlunr.Vector.prototype.toArray = function () {\n  var output = new Array (this.elements.length / 2)\n\n  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {\n    output[j] = this.elements[i]\n  }\n\n  return output\n}\n\n/**\n * A JSON serializable representation of the vector.\n *\n * @returns {Number[]}\n */\nlunr.Vector.prototype.toJSON = function () {\n  return this.elements\n}\n/* eslint-disable */\n/*!\n * lunr.stemmer\n * Copyright (C) 2020 Oliver Nightingale\n * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt\n */\n\n/**\n * lunr.stemmer is an english language stemmer, this is a JavaScript\n * implementation of the PorterStemmer taken from http://tartarus.org/~martin\n *\n * @static\n * @implements {lunr.PipelineFunction}\n * @param {lunr.Token} token - The string to stem\n * @returns {lunr.Token}\n * @see {@link lunr.Pipeline}\n * @function\n */\nlunr.stemmer = (function(){\n  var step2list = {\n      \"ational\" : \"ate\",\n      \"tional\" : \"tion\",\n      \"enci\" : \"ence\",\n      \"anci\" : \"ance\",\n      \"izer\" : \"ize\",\n      \"bli\" : \"ble\",\n      \"alli\" : \"al\",\n      \"entli\" : \"ent\",\n      \"eli\" : \"e\",\n      \"ousli\" : \"ous\",\n      \"ization\" : \"ize\",\n      \"ation\" : \"ate\",\n      \"ator\" : \"ate\",\n      \"alism\" : \"al\",\n      \"iveness\" : \"ive\",\n      \"fulness\" : \"ful\",\n      \"ousness\" : \"ous\",\n      \"aliti\" : \"al\",\n      \"iviti\" : \"ive\",\n      \"biliti\" : \"ble\",\n      \"logi\" : \"log\"\n    },\n\n    step3list = {\n      \"icate\" : \"ic\",\n      \"ative\" : \"\",\n      \"alize\" : \"al\",\n      \"iciti\" : \"ic\",\n      \"ical\" : \"ic\",\n      \"ful\" : \"\",\n      \"ness\" : \"\"\n    },\n\n    c = \"[^aeiou]\",          // consonant\n    v = \"[aeiouy]\",          // vowel\n    C = c + \"[^aeiouy]*\",    // consonant sequence\n    V = v + \"[aeiou]*\",      // vowel sequence\n\n    mgr0 = \"^(\" + C + \")?\" + V + C,               // [C]VC... is m>0\n    meq1 = \"^(\" + C + \")?\" + V + C + \"(\" + V + \")?$\",  // [C]VC[V] is m=1\n    mgr1 = \"^(\" + C + \")?\" + V + C + V + C,       // [C]VCVC... is m>1\n    s_v = \"^(\" + C + \")?\" + v;                   // vowel in stem\n\n  var re_mgr0 = new RegExp(mgr0);\n  var re_mgr1 = new RegExp(mgr1);\n  var re_meq1 = new RegExp(meq1);\n  var re_s_v = new RegExp(s_v);\n\n  var re_1a = /^(.+?)(ss|i)es$/;\n  var re2_1a = /^(.+?)([^s])s$/;\n  var re_1b = /^(.+?)eed$/;\n  var re2_1b = /^(.+?)(ed|ing)$/;\n  var re_1b_2 = /.$/;\n  var re2_1b_2 = /(at|bl|iz)$/;\n  var re3_1b_2 = new RegExp(\"([^aeiouylsz])\\\\1$\");\n  var re4_1b_2 = new RegExp(\"^\" + C + v + \"[^aeiouwxy]$\");\n\n  var re_1c = /^(.+?[^aeiou])y$/;\n  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;\n\n  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;\n\n  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;\n  var re2_4 = /^(.+?)(s|t)(ion)$/;\n\n  var re_5 = /^(.+?)e$/;\n  var re_5_1 = /ll$/;\n  var re3_5 = new RegExp(\"^\" + C + v + \"[^aeiouwxy]$\");\n\n  var porterStemmer = function porterStemmer(w) {\n    var stem,\n      suffix,\n      firstch,\n      re,\n      re2,\n      re3,\n      re4;\n\n    if (w.length < 3) { return w; }\n\n    firstch = w.substr(0,1);\n    if (firstch == \"y\") {\n      w = firstch.toUpperCase() + w.substr(1);\n    }\n\n    // Step 1a\n    re = re_1a\n    re2 = re2_1a;\n\n    if (re.test(w)) { w = w.replace(re,\"$1$2\"); }\n    else if (re2.test(w)) { w = w.replace(re2,\"$1$2\"); }\n\n    // Step 1b\n    re = re_1b;\n    re2 = re2_1b;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      re = re_mgr0;\n      if (re.test(fp[1])) {\n        re = re_1b_2;\n        w = w.replace(re,\"\");\n      }\n    } else if (re2.test(w)) {\n      var fp = re2.exec(w);\n      stem = fp[1];\n      re2 = re_s_v;\n      if (re2.test(stem)) {\n        w = stem;\n        re2 = re2_1b_2;\n        re3 = re3_1b_2;\n        re4 = re4_1b_2;\n        if (re2.test(w)) { w = w + \"e\"; }\n        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,\"\"); }\n        else if (re4.test(w)) { w = w + \"e\"; }\n      }\n    }\n\n    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)\n    re = re_1c;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      w = stem + \"i\";\n    }\n\n    // Step 2\n    re = re_2;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      suffix = fp[2];\n      re = re_mgr0;\n      if (re.test(stem)) {\n        w = stem + step2list[suffix];\n      }\n    }\n\n    // Step 3\n    re = re_3;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      suffix = fp[2];\n      re = re_mgr0;\n      if (re.test(stem)) {\n        w = stem + step3list[suffix];\n      }\n    }\n\n    // Step 4\n    re = re_4;\n    re2 = re2_4;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      re = re_mgr1;\n      if (re.test(stem)) {\n        w = stem;\n      }\n    } else if (re2.test(w)) {\n      var fp = re2.exec(w);\n      stem = fp[1] + fp[2];\n      re2 = re_mgr1;\n      if (re2.test(stem)) {\n        w = stem;\n      }\n    }\n\n    // Step 5\n    re = re_5;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      re = re_mgr1;\n      re2 = re_meq1;\n      re3 = re3_5;\n      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {\n        w = stem;\n      }\n    }\n\n    re = re_5_1;\n    re2 = re_mgr1;\n    if (re.test(w) && re2.test(w)) {\n      re = re_1b_2;\n      w = w.replace(re,\"\");\n    }\n\n    // and turn initial Y back to y\n\n    if (firstch == \"y\") {\n      w = firstch.toLowerCase() + w.substr(1);\n    }\n\n    return w;\n  };\n\n  return function (token) {\n    return token.update(porterStemmer);\n  }\n})();\n\nlunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')\n/*!\n * lunr.stopWordFilter\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * lunr.generateStopWordFilter builds a stopWordFilter function from the provided\n * list of stop words.\n *\n * The built in lunr.stopWordFilter is built using this generator and can be used\n * to generate custom stopWordFilters for applications or non English languages.\n *\n * @function\n * @param {Array} token The token to pass through the filter\n * @returns {lunr.PipelineFunction}\n * @see lunr.Pipeline\n * @see lunr.stopWordFilter\n */\nlunr.generateStopWordFilter = function (stopWords) {\n  var words = stopWords.reduce(function (memo, stopWord) {\n    memo[stopWord] = stopWord\n    return memo\n  }, {})\n\n  return function (token) {\n    if (token && words[token.toString()] !== token.toString()) return token\n  }\n}\n\n/**\n * lunr.stopWordFilter is an English language stop word list filter, any words\n * contained in the list will not be passed through the filter.\n *\n * This is intended to be used in the Pipeline. If the token does not pass the\n * filter then undefined will be returned.\n *\n * @function\n * @implements {lunr.PipelineFunction}\n * @params {lunr.Token} token - A token to check for being a stop word.\n * @returns {lunr.Token}\n * @see {@link lunr.Pipeline}\n */\nlunr.stopWordFilter = lunr.generateStopWordFilter([\n  'a',\n  'able',\n  'about',\n  'across',\n  'after',\n  'all',\n  'almost',\n  'also',\n  'am',\n  'among',\n  'an',\n  'and',\n  'any',\n  'are',\n  'as',\n  'at',\n  'be',\n  'because',\n  'been',\n  'but',\n  'by',\n  'can',\n  'cannot',\n  'could',\n  'dear',\n  'did',\n  'do',\n  'does',\n  'either',\n  'else',\n  'ever',\n  'every',\n  'for',\n  'from',\n  'get',\n  'got',\n  'had',\n  'has',\n  'have',\n  'he',\n  'her',\n  'hers',\n  'him',\n  'his',\n  'how',\n  'however',\n  'i',\n  'if',\n  'in',\n  'into',\n  'is',\n  'it',\n  'its',\n  'just',\n  'least',\n  'let',\n  'like',\n  'likely',\n  'may',\n  'me',\n  'might',\n  'most',\n  'must',\n  'my',\n  'neither',\n  'no',\n  'nor',\n  'not',\n  'of',\n  'off',\n  'often',\n  'on',\n  'only',\n  'or',\n  'other',\n  'our',\n  'own',\n  'rather',\n  'said',\n  'say',\n  'says',\n  'she',\n  'should',\n  'since',\n  'so',\n  'some',\n  'than',\n  'that',\n  'the',\n  'their',\n  'them',\n  'then',\n  'there',\n  'these',\n  'they',\n  'this',\n  'tis',\n  'to',\n  'too',\n  'twas',\n  'us',\n  'wants',\n  'was',\n  'we',\n  'were',\n  'what',\n  'when',\n  'where',\n  'which',\n  'while',\n  'who',\n  'whom',\n  'why',\n  'will',\n  'with',\n  'would',\n  'yet',\n  'you',\n  'your'\n])\n\nlunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')\n/*!\n * lunr.trimmer\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * lunr.trimmer is a pipeline function for trimming non word\n * characters from the beginning and end of tokens before they\n * enter the index.\n *\n * This implementation may not work correctly for non latin\n * characters and should either be removed or adapted for use\n * with languages with non-latin characters.\n *\n * @static\n * @implements {lunr.PipelineFunction}\n * @param {lunr.Token} token The token to pass through the filter\n * @returns {lunr.Token}\n * @see lunr.Pipeline\n */\nlunr.trimmer = function (token) {\n  return token.update(function (s) {\n    return s.replace(/^\\W+/, '').replace(/\\W+$/, '')\n  })\n}\n\nlunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')\n/*!\n * lunr.TokenSet\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * A token set is used to store the unique list of all tokens\n * within an index. Token sets are also used to represent an\n * incoming query to the index, this query token set and index\n * token set are then intersected to find which tokens to look\n * up in the inverted index.\n *\n * A token set can hold multiple tokens, as in the case of the\n * index token set, or it can hold a single token as in the\n * case of a simple query token set.\n *\n * Additionally token sets are used to perform wildcard matching.\n * Leading, contained and trailing wildcards are supported, and\n * from this edit distance matching can also be provided.\n *\n * Token sets are implemented as a minimal finite state automata,\n * where both common prefixes and suffixes are shared between tokens.\n * This helps to reduce the space used for storing the token set.\n *\n * @constructor\n */\nlunr.TokenSet = function () {\n  this.final = false\n  this.edges = {}\n  this.id = lunr.TokenSet._nextId\n  lunr.TokenSet._nextId += 1\n}\n\n/**\n * Keeps track of the next, auto increment, identifier to assign\n * to a new tokenSet.\n *\n * TokenSets require a unique identifier to be correctly minimised.\n *\n * @private\n */\nlunr.TokenSet._nextId = 1\n\n/**\n * Creates a TokenSet instance from the given sorted array of words.\n *\n * @param {String[]} arr - A sorted array of strings to create the set from.\n * @returns {lunr.TokenSet}\n * @throws Will throw an error if the input array is not sorted.\n */\nlunr.TokenSet.fromArray = function (arr) {\n  var builder = new lunr.TokenSet.Builder\n\n  for (var i = 0, len = arr.length; i < len; i++) {\n    builder.insert(arr[i])\n  }\n\n  builder.finish()\n  return builder.root\n}\n\n/**\n * Creates a token set from a query clause.\n *\n * @private\n * @param {Object} clause - A single clause from lunr.Query.\n * @param {string} clause.term - The query clause term.\n * @param {number} [clause.editDistance] - The optional edit distance for the term.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.fromClause = function (clause) {\n  if ('editDistance' in clause) {\n    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)\n  } else {\n    return lunr.TokenSet.fromString(clause.term)\n  }\n}\n\n/**\n * Creates a token set representing a single string with a specified\n * edit distance.\n *\n * Insertions, deletions, substitutions and transpositions are each\n * treated as an edit distance of 1.\n *\n * Increasing the allowed edit distance will have a dramatic impact\n * on the performance of both creating and intersecting these TokenSets.\n * It is advised to keep the edit distance less than 3.\n *\n * @param {string} str - The string to create the token set from.\n * @param {number} editDistance - The allowed edit distance to match.\n * @returns {lunr.Vector}\n */\nlunr.TokenSet.fromFuzzyString = function (str, editDistance) {\n  var root = new lunr.TokenSet\n\n  var stack = [{\n    node: root,\n    editsRemaining: editDistance,\n    str: str\n  }]\n\n  while (stack.length) {\n    var frame = stack.pop()\n\n    // no edit\n    if (frame.str.length > 0) {\n      var char = frame.str.charAt(0),\n          noEditNode\n\n      if (char in frame.node.edges) {\n        noEditNode = frame.node.edges[char]\n      } else {\n        noEditNode = new lunr.TokenSet\n        frame.node.edges[char] = noEditNode\n      }\n\n      if (frame.str.length == 1) {\n        noEditNode.final = true\n      }\n\n      stack.push({\n        node: noEditNode,\n        editsRemaining: frame.editsRemaining,\n        str: frame.str.slice(1)\n      })\n    }\n\n    if (frame.editsRemaining == 0) {\n      continue\n    }\n\n    // insertion\n    if (\"*\" in frame.node.edges) {\n      var insertionNode = frame.node.edges[\"*\"]\n    } else {\n      var insertionNode = new lunr.TokenSet\n      frame.node.edges[\"*\"] = insertionNode\n    }\n\n    if (frame.str.length == 0) {\n      insertionNode.final = true\n    }\n\n    stack.push({\n      node: insertionNode,\n      editsRemaining: frame.editsRemaining - 1,\n      str: frame.str\n    })\n\n    // deletion\n    // can only do a deletion if we have enough edits remaining\n    // and if there are characters left to delete in the string\n    if (frame.str.length > 1) {\n      stack.push({\n        node: frame.node,\n        editsRemaining: frame.editsRemaining - 1,\n        str: frame.str.slice(1)\n      })\n    }\n\n    // deletion\n    // just removing the last character from the str\n    if (frame.str.length == 1) {\n      frame.node.final = true\n    }\n\n    // substitution\n    // can only do a substitution if we have enough edits remaining\n    // and if there are characters left to substitute\n    if (frame.str.length >= 1) {\n      if (\"*\" in frame.node.edges) {\n        var substitutionNode = frame.node.edges[\"*\"]\n      } else {\n        var substitutionNode = new lunr.TokenSet\n        frame.node.edges[\"*\"] = substitutionNode\n      }\n\n      if (frame.str.length == 1) {\n        substitutionNode.final = true\n      }\n\n      stack.push({\n        node: substitutionNode,\n        editsRemaining: frame.editsRemaining - 1,\n        str: frame.str.slice(1)\n      })\n    }\n\n    // transposition\n    // can only do a transposition if there are edits remaining\n    // and there are enough characters to transpose\n    if (frame.str.length > 1) {\n      var charA = frame.str.charAt(0),\n          charB = frame.str.charAt(1),\n          transposeNode\n\n      if (charB in frame.node.edges) {\n        transposeNode = frame.node.edges[charB]\n      } else {\n        transposeNode = new lunr.TokenSet\n        frame.node.edges[charB] = transposeNode\n      }\n\n      if (frame.str.length == 1) {\n        transposeNode.final = true\n      }\n\n      stack.push({\n        node: transposeNode,\n        editsRemaining: frame.editsRemaining - 1,\n        str: charA + frame.str.slice(2)\n      })\n    }\n  }\n\n  return root\n}\n\n/**\n * Creates a TokenSet from a string.\n *\n * The string may contain one or more wildcard characters (*)\n * that will allow wildcard matching when intersecting with\n * another TokenSet.\n *\n * @param {string} str - The string to create a TokenSet from.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.fromString = function (str) {\n  var node = new lunr.TokenSet,\n      root = node\n\n  /*\n   * Iterates through all characters within the passed string\n   * appending a node for each character.\n   *\n   * When a wildcard character is found then a self\n   * referencing edge is introduced to continually match\n   * any number of any characters.\n   */\n  for (var i = 0, len = str.length; i < len; i++) {\n    var char = str[i],\n        final = (i == len - 1)\n\n    if (char == \"*\") {\n      node.edges[char] = node\n      node.final = final\n\n    } else {\n      var next = new lunr.TokenSet\n      next.final = final\n\n      node.edges[char] = next\n      node = next\n    }\n  }\n\n  return root\n}\n\n/**\n * Converts this TokenSet into an array of strings\n * contained within the TokenSet.\n *\n * This is not intended to be used on a TokenSet that\n * contains wildcards, in these cases the results are\n * undefined and are likely to cause an infinite loop.\n *\n * @returns {string[]}\n */\nlunr.TokenSet.prototype.toArray = function () {\n  var words = []\n\n  var stack = [{\n    prefix: \"\",\n    node: this\n  }]\n\n  while (stack.length) {\n    var frame = stack.pop(),\n        edges = Object.keys(frame.node.edges),\n        len = edges.length\n\n    if (frame.node.final) {\n      /* In Safari, at this point the prefix is sometimes corrupted, see:\n       * https://github.com/olivernn/lunr.js/issues/279 Calling any\n       * String.prototype method forces Safari to \"cast\" this string to what\n       * it's supposed to be, fixing the bug. */\n      frame.prefix.charAt(0)\n      words.push(frame.prefix)\n    }\n\n    for (var i = 0; i < len; i++) {\n      var edge = edges[i]\n\n      stack.push({\n        prefix: frame.prefix.concat(edge),\n        node: frame.node.edges[edge]\n      })\n    }\n  }\n\n  return words\n}\n\n/**\n * Generates a string representation of a TokenSet.\n *\n * This is intended to allow TokenSets to be used as keys\n * in objects, largely to aid the construction and minimisation\n * of a TokenSet. As such it is not designed to be a human\n * friendly representation of the TokenSet.\n *\n * @returns {string}\n */\nlunr.TokenSet.prototype.toString = function () {\n  // NOTE: Using Object.keys here as this.edges is very likely\n  // to enter 'hash-mode' with many keys being added\n  //\n  // avoiding a for-in loop here as it leads to the function\n  // being de-optimised (at least in V8). From some simple\n  // benchmarks the performance is comparable, but allowing\n  // V8 to optimize may mean easy performance wins in the future.\n\n  if (this._str) {\n    return this._str\n  }\n\n  var str = this.final ? '1' : '0',\n      labels = Object.keys(this.edges).sort(),\n      len = labels.length\n\n  for (var i = 0; i < len; i++) {\n    var label = labels[i],\n        node = this.edges[label]\n\n    str = str + label + node.id\n  }\n\n  return str\n}\n\n/**\n * Returns a new TokenSet that is the intersection of\n * this TokenSet and the passed TokenSet.\n *\n * This intersection will take into account any wildcards\n * contained within the TokenSet.\n *\n * @param {lunr.TokenSet} b - An other TokenSet to intersect with.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.prototype.intersect = function (b) {\n  var output = new lunr.TokenSet,\n      frame = undefined\n\n  var stack = [{\n    qNode: b,\n    output: output,\n    node: this\n  }]\n\n  while (stack.length) {\n    frame = stack.pop()\n\n    // NOTE: As with the #toString method, we are using\n    // Object.keys and a for loop instead of a for-in loop\n    // as both of these objects enter 'hash' mode, causing\n    // the function to be de-optimised in V8\n    var qEdges = Object.keys(frame.qNode.edges),\n        qLen = qEdges.length,\n        nEdges = Object.keys(frame.node.edges),\n        nLen = nEdges.length\n\n    for (var q = 0; q < qLen; q++) {\n      var qEdge = qEdges[q]\n\n      for (var n = 0; n < nLen; n++) {\n        var nEdge = nEdges[n]\n\n        if (nEdge == qEdge || qEdge == '*') {\n          var node = frame.node.edges[nEdge],\n              qNode = frame.qNode.edges[qEdge],\n              final = node.final && qNode.final,\n              next = undefined\n\n          if (nEdge in frame.output.edges) {\n            // an edge already exists for this character\n            // no need to create a new node, just set the finality\n            // bit unless this node is already final\n            next = frame.output.edges[nEdge]\n            next.final = next.final || final\n\n          } else {\n            // no edge exists yet, must create one\n            // set the finality bit and insert it\n            // into the output\n            next = new lunr.TokenSet\n            next.final = final\n            frame.output.edges[nEdge] = next\n          }\n\n          stack.push({\n            qNode: qNode,\n            output: next,\n            node: node\n          })\n        }\n      }\n    }\n  }\n\n  return output\n}\nlunr.TokenSet.Builder = function () {\n  this.previousWord = \"\"\n  this.root = new lunr.TokenSet\n  this.uncheckedNodes = []\n  this.minimizedNodes = {}\n}\n\nlunr.TokenSet.Builder.prototype.insert = function (word) {\n  var node,\n      commonPrefix = 0\n\n  if (word < this.previousWord) {\n    throw new Error (\"Out of order word insertion\")\n  }\n\n  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {\n    if (word[i] != this.previousWord[i]) break\n    commonPrefix++\n  }\n\n  this.minimize(commonPrefix)\n\n  if (this.uncheckedNodes.length == 0) {\n    node = this.root\n  } else {\n    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child\n  }\n\n  for (var i = commonPrefix; i < word.length; i++) {\n    var nextNode = new lunr.TokenSet,\n        char = word[i]\n\n    node.edges[char] = nextNode\n\n    this.uncheckedNodes.push({\n      parent: node,\n      char: char,\n      child: nextNode\n    })\n\n    node = nextNode\n  }\n\n  node.final = true\n  this.previousWord = word\n}\n\nlunr.TokenSet.Builder.prototype.finish = function () {\n  this.minimize(0)\n}\n\nlunr.TokenSet.Builder.prototype.minimize = function (downTo) {\n  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {\n    var node = this.uncheckedNodes[i],\n        childKey = node.child.toString()\n\n    if (childKey in this.minimizedNodes) {\n      node.parent.edges[node.char] = this.minimizedNodes[childKey]\n    } else {\n      // Cache the key for this node since\n      // we know it can't change anymore\n      node.child._str = childKey\n\n      this.minimizedNodes[childKey] = node.child\n    }\n\n    this.uncheckedNodes.pop()\n  }\n}\n/*!\n * lunr.Index\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * An index contains the built index of all documents and provides a query interface\n * to the index.\n *\n * Usually instances of lunr.Index will not be created using this constructor, instead\n * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be\n * used to load previously built and serialized indexes.\n *\n * @constructor\n * @param {Object} attrs - The attributes of the built search index.\n * @param {Object} attrs.invertedIndex - An index of term/field to document reference.\n * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors\n * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.\n * @param {string[]} attrs.fields - The names of indexed document fields.\n * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.\n */\nlunr.Index = function (attrs) {\n  this.invertedIndex = attrs.invertedIndex\n  this.fieldVectors = attrs.fieldVectors\n  this.tokenSet = attrs.tokenSet\n  this.fields = attrs.fields\n  this.pipeline = attrs.pipeline\n}\n\n/**\n * A result contains details of a document matching a search query.\n * @typedef {Object} lunr.Index~Result\n * @property {string} ref - The reference of the document this result represents.\n * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.\n * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.\n */\n\n/**\n * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple\n * query language which itself is parsed into an instance of lunr.Query.\n *\n * For programmatically building queries it is advised to directly use lunr.Query, the query language\n * is best used for human entered text rather than program generated text.\n *\n * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported\n * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'\n * or 'world', though those that contain both will rank higher in the results.\n *\n * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can\n * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding\n * wildcards will increase the number of documents that will be found but can also have a negative\n * impact on query performance, especially with wildcards at the beginning of a term.\n *\n * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term\n * hello in the title field will match this query. Using a field not present in the index will lead\n * to an error being thrown.\n *\n * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term\n * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported\n * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.\n * Avoid large values for edit distance to improve query performance.\n *\n * Each term also supports a presence modifier. By default a term's presence in document is optional, however\n * this can be changed to either required or prohibited. For a term's presence to be required in a document the\n * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and\n * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not\n * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.\n *\n * To escape special characters the backslash character '\\' can be used, this allows searches to include\n * characters that would normally be considered modifiers, e.g. `foo\\~2` will search for a term \"foo~2\" instead\n * of attempting to apply a boost of 2 to the search term \"foo\".\n *\n * @typedef {string} lunr.Index~QueryString\n * @example <caption>Simple single term query</caption>\n * hello\n * @example <caption>Multiple term query</caption>\n * hello world\n * @example <caption>term scoped to a field</caption>\n * title:hello\n * @example <caption>term with a boost of 10</caption>\n * hello^10\n * @example <caption>term with an edit distance of 2</caption>\n * hello~2\n * @example <caption>terms with presence modifiers</caption>\n * -foo +bar baz\n */\n\n/**\n * Performs a search against the index using lunr query syntax.\n *\n * Results will be returned sorted by their score, the most relevant results\n * will be returned first.  For details on how the score is calculated, please see\n * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.\n *\n * For more programmatic querying use lunr.Index#query.\n *\n * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.\n * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.\n * @returns {lunr.Index~Result[]}\n */\nlunr.Index.prototype.search = function (queryString) {\n  return this.query(function (query) {\n    var parser = new lunr.QueryParser(queryString, query)\n    parser.parse()\n  })\n}\n\n/**\n * A query builder callback provides a query object to be used to express\n * the query to perform on the index.\n *\n * @callback lunr.Index~queryBuilder\n * @param {lunr.Query} query - The query object to build up.\n * @this lunr.Query\n */\n\n/**\n * Performs a query against the index using the yielded lunr.Query object.\n *\n * If performing programmatic queries against the index, this method is preferred\n * over lunr.Index#search so as to avoid the additional query parsing overhead.\n *\n * A query object is yielded to the supplied function which should be used to\n * express the query to be run against the index.\n *\n * Note that although this function takes a callback parameter it is _not_ an\n * asynchronous operation, the callback is just yielded a query object to be\n * customized.\n *\n * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.\n * @returns {lunr.Index~Result[]}\n */\nlunr.Index.prototype.query = function (fn) {\n  // for each query clause\n  // * process terms\n  // * expand terms from token set\n  // * find matching documents and metadata\n  // * get document vectors\n  // * score documents\n\n  var query = new lunr.Query(this.fields),\n      matchingFields = Object.create(null),\n      queryVectors = Object.create(null),\n      termFieldCache = Object.create(null),\n      requiredMatches = Object.create(null),\n      prohibitedMatches = Object.create(null)\n\n  /*\n   * To support field level boosts a query vector is created per\n   * field. An empty vector is eagerly created to support negated\n   * queries.\n   */\n  for (var i = 0; i < this.fields.length; i++) {\n    queryVectors[this.fields[i]] = new lunr.Vector\n  }\n\n  fn.call(query, query)\n\n  for (var i = 0; i < query.clauses.length; i++) {\n    /*\n     * Unless the pipeline has been disabled for this term, which is\n     * the case for terms with wildcards, we need to pass the clause\n     * term through the search pipeline. A pipeline returns an array\n     * of processed terms. Pipeline functions may expand the passed\n     * term, which means we may end up performing multiple index lookups\n     * for a single query term.\n     */\n    var clause = query.clauses[i],\n        terms = null,\n        clauseMatches = lunr.Set.empty\n\n    if (clause.usePipeline) {\n      terms = this.pipeline.runString(clause.term, {\n        fields: clause.fields\n      })\n    } else {\n      terms = [clause.term]\n    }\n\n    for (var m = 0; m < terms.length; m++) {\n      var term = terms[m]\n\n      /*\n       * Each term returned from the pipeline needs to use the same query\n       * clause object, e.g. the same boost and or edit distance. The\n       * simplest way to do this is to re-use the clause object but mutate\n       * its term property.\n       */\n      clause.term = term\n\n      /*\n       * From the term in the clause we create a token set which will then\n       * be used to intersect the indexes token set to get a list of terms\n       * to lookup in the inverted index\n       */\n      var termTokenSet = lunr.TokenSet.fromClause(clause),\n          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()\n\n      /*\n       * If a term marked as required does not exist in the tokenSet it is\n       * impossible for the search to return any matches. We set all the field\n       * scoped required matches set to empty and stop examining any further\n       * clauses.\n       */\n      if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {\n        for (var k = 0; k < clause.fields.length; k++) {\n          var field = clause.fields[k]\n          requiredMatches[field] = lunr.Set.empty\n        }\n\n        break\n      }\n\n      for (var j = 0; j < expandedTerms.length; j++) {\n        /*\n         * For each term get the posting and termIndex, this is required for\n         * building the query vector.\n         */\n        var expandedTerm = expandedTerms[j],\n            posting = this.invertedIndex[expandedTerm],\n            termIndex = posting._index\n\n        for (var k = 0; k < clause.fields.length; k++) {\n          /*\n           * For each field that this query term is scoped by (by default\n           * all fields are in scope) we need to get all the document refs\n           * that have this term in that field.\n           *\n           * The posting is the entry in the invertedIndex for the matching\n           * term from above.\n           */\n          var field = clause.fields[k],\n              fieldPosting = posting[field],\n              matchingDocumentRefs = Object.keys(fieldPosting),\n              termField = expandedTerm + \"/\" + field,\n              matchingDocumentsSet = new lunr.Set(matchingDocumentRefs)\n\n          /*\n           * if the presence of this term is required ensure that the matching\n           * documents are added to the set of required matches for this clause.\n           *\n           */\n          if (clause.presence == lunr.Query.presence.REQUIRED) {\n            clauseMatches = clauseMatches.union(matchingDocumentsSet)\n\n            if (requiredMatches[field] === undefined) {\n              requiredMatches[field] = lunr.Set.complete\n            }\n          }\n\n          /*\n           * if the presence of this term is prohibited ensure that the matching\n           * documents are added to the set of prohibited matches for this field,\n           * creating that set if it does not yet exist.\n           */\n          if (clause.presence == lunr.Query.presence.PROHIBITED) {\n            if (prohibitedMatches[field] === undefined) {\n              prohibitedMatches[field] = lunr.Set.empty\n            }\n\n            prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet)\n\n            /*\n             * Prohibited matches should not be part of the query vector used for\n             * similarity scoring and no metadata should be extracted so we continue\n             * to the next field\n             */\n            continue\n          }\n\n          /*\n           * The query field vector is populated using the termIndex found for\n           * the term and a unit value with the appropriate boost applied.\n           * Using upsert because there could already be an entry in the vector\n           * for the term we are working with. In that case we just add the scores\n           * together.\n           */\n          queryVectors[field].upsert(termIndex, clause.boost, function (a, b) { return a + b })\n\n          /**\n           * If we've already seen this term, field combo then we've already collected\n           * the matching documents and metadata, no need to go through all that again\n           */\n          if (termFieldCache[termField]) {\n            continue\n          }\n\n          for (var l = 0; l < matchingDocumentRefs.length; l++) {\n            /*\n             * All metadata for this term/field/document triple\n             * are then extracted and collected into an instance\n             * of lunr.MatchData ready to be returned in the query\n             * results\n             */\n            var matchingDocumentRef = matchingDocumentRefs[l],\n                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),\n                metadata = fieldPosting[matchingDocumentRef],\n                fieldMatch\n\n            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {\n              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)\n            } else {\n              fieldMatch.add(expandedTerm, field, metadata)\n            }\n\n          }\n\n          termFieldCache[termField] = true\n        }\n      }\n    }\n\n    /**\n     * If the presence was required we need to update the requiredMatches field sets.\n     * We do this after all fields for the term have collected their matches because\n     * the clause terms presence is required in _any_ of the fields not _all_ of the\n     * fields.\n     */\n    if (clause.presence === lunr.Query.presence.REQUIRED) {\n      for (var k = 0; k < clause.fields.length; k++) {\n        var field = clause.fields[k]\n        requiredMatches[field] = requiredMatches[field].intersect(clauseMatches)\n      }\n    }\n  }\n\n  /**\n   * Need to combine the field scoped required and prohibited\n   * matching documents into a global set of required and prohibited\n   * matches\n   */\n  var allRequiredMatches = lunr.Set.complete,\n      allProhibitedMatches = lunr.Set.empty\n\n  for (var i = 0; i < this.fields.length; i++) {\n    var field = this.fields[i]\n\n    if (requiredMatches[field]) {\n      allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field])\n    }\n\n    if (prohibitedMatches[field]) {\n      allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field])\n    }\n  }\n\n  var matchingFieldRefs = Object.keys(matchingFields),\n      results = [],\n      matches = Object.create(null)\n\n  /*\n   * If the query is negated (contains only prohibited terms)\n   * we need to get _all_ fieldRefs currently existing in the\n   * index. This is only done when we know that the query is\n   * entirely prohibited terms to avoid any cost of getting all\n   * fieldRefs unnecessarily.\n   *\n   * Additionally, blank MatchData must be created to correctly\n   * populate the results.\n   */\n  if (query.isNegated()) {\n    matchingFieldRefs = Object.keys(this.fieldVectors)\n\n    for (var i = 0; i < matchingFieldRefs.length; i++) {\n      var matchingFieldRef = matchingFieldRefs[i]\n      var fieldRef = lunr.FieldRef.fromString(matchingFieldRef)\n      matchingFields[matchingFieldRef] = new lunr.MatchData\n    }\n  }\n\n  for (var i = 0; i < matchingFieldRefs.length; i++) {\n    /*\n     * Currently we have document fields that match the query, but we\n     * need to return documents. The matchData and scores are combined\n     * from multiple fields belonging to the same document.\n     *\n     * Scores are calculated by field, using the query vectors created\n     * above, and combined into a final document score using addition.\n     */\n    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),\n        docRef = fieldRef.docRef\n\n    if (!allRequiredMatches.contains(docRef)) {\n      continue\n    }\n\n    if (allProhibitedMatches.contains(docRef)) {\n      continue\n    }\n\n    var fieldVector = this.fieldVectors[fieldRef],\n        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),\n        docMatch\n\n    if ((docMatch = matches[docRef]) !== undefined) {\n      docMatch.score += score\n      docMatch.matchData.combine(matchingFields[fieldRef])\n    } else {\n      var match = {\n        ref: docRef,\n        score: score,\n        matchData: matchingFields[fieldRef]\n      }\n      matches[docRef] = match\n      results.push(match)\n    }\n  }\n\n  /*\n   * Sort the results objects by score, highest first.\n   */\n  return results.sort(function (a, b) {\n    return b.score - a.score\n  })\n}\n\n/**\n * Prepares the index for JSON serialization.\n *\n * The schema for this JSON blob will be described in a\n * separate JSON schema file.\n *\n * @returns {Object}\n */\nlunr.Index.prototype.toJSON = function () {\n  var invertedIndex = Object.keys(this.invertedIndex)\n    .sort()\n    .map(function (term) {\n      return [term, this.invertedIndex[term]]\n    }, this)\n\n  var fieldVectors = Object.keys(this.fieldVectors)\n    .map(function (ref) {\n      return [ref, this.fieldVectors[ref].toJSON()]\n    }, this)\n\n  return {\n    version: lunr.version,\n    fields: this.fields,\n    fieldVectors: fieldVectors,\n    invertedIndex: invertedIndex,\n    pipeline: this.pipeline.toJSON()\n  }\n}\n\n/**\n * Loads a previously serialized lunr.Index\n *\n * @param {Object} serializedIndex - A previously serialized lunr.Index\n * @returns {lunr.Index}\n */\nlunr.Index.load = function (serializedIndex) {\n  var attrs = {},\n      fieldVectors = {},\n      serializedVectors = serializedIndex.fieldVectors,\n      invertedIndex = Object.create(null),\n      serializedInvertedIndex = serializedIndex.invertedIndex,\n      tokenSetBuilder = new lunr.TokenSet.Builder,\n      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)\n\n  if (serializedIndex.version != lunr.version) {\n    lunr.utils.warn(\"Version mismatch when loading serialised index. Current version of lunr '\" + lunr.version + \"' does not match serialized index '\" + serializedIndex.version + \"'\")\n  }\n\n  for (var i = 0; i < serializedVectors.length; i++) {\n    var tuple = serializedVectors[i],\n        ref = tuple[0],\n        elements = tuple[1]\n\n    fieldVectors[ref] = new lunr.Vector(elements)\n  }\n\n  for (var i = 0; i < serializedInvertedIndex.length; i++) {\n    var tuple = serializedInvertedIndex[i],\n        term = tuple[0],\n        posting = tuple[1]\n\n    tokenSetBuilder.insert(term)\n    invertedIndex[term] = posting\n  }\n\n  tokenSetBuilder.finish()\n\n  attrs.fields = serializedIndex.fields\n\n  attrs.fieldVectors = fieldVectors\n  attrs.invertedIndex = invertedIndex\n  attrs.tokenSet = tokenSetBuilder.root\n  attrs.pipeline = pipeline\n\n  return new lunr.Index(attrs)\n}\n/*!\n * lunr.Builder\n * Copyright (C) 2020 Oliver Nightingale\n */\n\n/**\n * lunr.Builder performs indexing on a set of documents and\n * returns instances of lunr.Index ready for querying.\n *\n * All configuration of the index is done via the builder, the\n * fields to index, the document reference, the text processing\n * pipeline and document scoring parameters are all set on the\n * builder before indexing.\n *\n * @constructor\n * @property {string} _ref - Internal reference to the document reference field.\n * @property {string[]} _fields - Internal reference to the document fields to index.\n * @property {object} invertedIndex - The inverted index maps terms to document fields.\n * @property {object} documentTermFrequencies - Keeps track of document term frequencies.\n * @property {object} documentLengths - Keeps track of the length of documents added to the index.\n * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.\n * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.\n * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.\n * @property {number} documentCount - Keeps track of the total number of documents indexed.\n * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.\n * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.\n * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.\n * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.\n */\nlunr.Builder = function () {\n  this._ref = \"id\"\n  this._fields = Object.create(null)\n  this._documents = Object.create(null)\n  this.invertedIndex = Object.create(null)\n  this.fieldTermFrequencies = {}\n  this.fieldLengths = {}\n  this.tokenizer = lunr.tokenizer\n  this.pipeline = new lunr.Pipeline\n  this.searchPipeline = new lunr.Pipeline\n  this.documentCount = 0\n  this._b = 0.75\n  this._k1 = 1.2\n  this.termIndex = 0\n  this.metadataWhitelist = []\n}\n\n/**\n * Sets the document field used as the document reference. Every document must have this field.\n * The type of this field in the document should be a string, if it is not a string it will be\n * coerced into a string by calling toString.\n *\n * The default ref is 'id'.\n *\n * The ref should _not_ be changed during indexing, it should be set before any documents are\n * added to the index. Changing it during indexing can lead to inconsistent results.\n *\n * @param {string} ref - The name of the reference field in the document.\n */\nlunr.Builder.prototype.ref = function (ref) {\n  this._ref = ref\n}\n\n/**\n * A function that is used to extract a field from a document.\n *\n * Lunr expects a field to be at the top level of a document, if however the field\n * is deeply nested within a document an extractor function can be used to extract\n * the right field for indexing.\n *\n * @callback fieldExtractor\n * @param {object} doc - The document being added to the index.\n * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.\n * @example <caption>Extracting a nested field</caption>\n * function (doc) { return doc.nested.field }\n */\n\n/**\n * Adds a field to the list of document fields that will be indexed. Every document being\n * indexed should have this field. Null values for this field in indexed documents will\n * not cause errors but will limit the chance of that document being retrieved by searches.\n *\n * All fields should be added before adding documents to the index. Adding fields after\n * a document has been indexed will have no effect on already indexed documents.\n *\n * Fields can be boosted at build time. This allows terms within that field to have more\n * importance when ranking search results. Use a field boost to specify that matches within\n * one field are more important than other fields.\n *\n * @param {string} fieldName - The name of a field to index in all documents.\n * @param {object} attributes - Optional attributes associated with this field.\n * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.\n * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.\n * @throws {RangeError} fieldName cannot contain unsupported characters '/'\n */\nlunr.Builder.prototype.field = function (fieldName, attributes) {\n  if (/\\//.test(fieldName)) {\n    throw new RangeError (\"Field '\" + fieldName + \"' contains illegal character '/'\")\n  }\n\n  this._fields[fieldName] = attributes || {}\n}\n\n/**\n * A parameter to tune the amount of field length normalisation that is applied when\n * calculating relevance scores. A value of 0 will completely disable any normalisation\n * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b\n * will be clamped to the range 0 - 1.\n *\n * @param {number} number - The value to set for this tuning parameter.\n */\nlunr.Builder.prototype.b = function (number) {\n  if (number < 0) {\n    this._b = 0\n  } else if (number > 1) {\n    this._b = 1\n  } else {\n    this._b = number\n  }\n}\n\n/**\n * A parameter that controls the speed at which a rise in term frequency results in term\n * frequency saturation. The default value is 1.2. Setting this to a higher value will give\n * slower saturation levels, a lower value will result in quicker saturation.\n *\n * @param {number} number - The value to set for this tuning parameter.\n */\nlunr.Builder.prototype.k1 = function (number) {\n  this._k1 = number\n}\n\n/**\n * Adds a document to the index.\n *\n * Before adding fields to the index the index should have been fully setup, with the document\n * ref and all fields to index already having been specified.\n *\n * The document must have a field name as specified by the ref (by default this is 'id') and\n * it should have all fields defined for indexing, though null or undefined values will not\n * cause errors.\n *\n * Entire documents can be boosted at build time. Applying a boost to a document indicates that\n * this document should rank higher in search results than other documents.\n *\n * @param {object} doc - The document to add to the index.\n * @param {object} attributes - Optional attributes associated with this document.\n * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.\n */\nlunr.Builder.prototype.add = function (doc, attributes) {\n  var docRef = doc[this._ref],\n      fields = Object.keys(this._fields)\n\n  this._documents[docRef] = attributes || {}\n  this.documentCount += 1\n\n  for (var i = 0; i < fields.length; i++) {\n    var fieldName = fields[i],\n        extractor = this._fields[fieldName].extractor,\n        field = extractor ? extractor(doc) : doc[fieldName],\n        tokens = this.tokenizer(field, {\n          fields: [fieldName]\n        }),\n        terms = this.pipeline.run(tokens),\n        fieldRef = new lunr.FieldRef (docRef, fieldName),\n        fieldTerms = Object.create(null)\n\n    this.fieldTermFrequencies[fieldRef] = fieldTerms\n    this.fieldLengths[fieldRef] = 0\n\n    // store the length of this field for this document\n    this.fieldLengths[fieldRef] += terms.length\n\n    // calculate term frequencies for this field\n    for (var j = 0; j < terms.length; j++) {\n      var term = terms[j]\n\n      if (fieldTerms[term] == undefined) {\n        fieldTerms[term] = 0\n      }\n\n      fieldTerms[term] += 1\n\n      // add to inverted index\n      // create an initial posting if one doesn't exist\n      if (this.invertedIndex[term] == undefined) {\n        var posting = Object.create(null)\n        posting[\"_index\"] = this.termIndex\n        this.termIndex += 1\n\n        for (var k = 0; k < fields.length; k++) {\n          posting[fields[k]] = Object.create(null)\n        }\n\n        this.invertedIndex[term] = posting\n      }\n\n      // add an entry for this term/fieldName/docRef to the invertedIndex\n      if (this.invertedIndex[term][fieldName][docRef] == undefined) {\n        this.invertedIndex[term][fieldName][docRef] = Object.create(null)\n      }\n\n      // store all whitelisted metadata about this token in the\n      // inverted index\n      for (var l = 0; l < this.metadataWhitelist.length; l++) {\n        var metadataKey = this.metadataWhitelist[l],\n            metadata = term.metadata[metadataKey]\n\n        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {\n          this.invertedIndex[term][fieldName][docRef][metadataKey] = []\n        }\n\n        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)\n      }\n    }\n\n  }\n}\n\n/**\n * Calculates the average document length for this index\n *\n * @private\n */\nlunr.Builder.prototype.calculateAverageFieldLengths = function () {\n\n  var fieldRefs = Object.keys(this.fieldLengths),\n      numberOfFields = fieldRefs.length,\n      accumulator = {},\n      documentsWithField = {}\n\n  for (var i = 0; i < numberOfFields; i++) {\n    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),\n        field = fieldRef.fieldName\n\n    documentsWithField[field] || (documentsWithField[field] = 0)\n    documentsWithField[field] += 1\n\n    accumulator[field] || (accumulator[field] = 0)\n    accumulator[field] += this.fieldLengths[fieldRef]\n  }\n\n  var fields = Object.keys(this._fields)\n\n  for (var i = 0; i < fields.length; i++) {\n    var fieldName = fields[i]\n    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName]\n  }\n\n  this.averageFieldLength = accumulator\n}\n\n/**\n * Builds a vector space model of every document using lunr.Vector\n *\n * @private\n */\nlunr.Builder.prototype.createFieldVectors = function () {\n  var fieldVectors = {},\n      fieldRefs = Object.keys(this.fieldTermFrequencies),\n      fieldRefsLength = fieldRefs.length,\n      termIdfCache = Object.create(null)\n\n  for (var i = 0; i < fieldRefsLength; i++) {\n    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),\n        fieldName = fieldRef.fieldName,\n        fieldLength = this.fieldLengths[fieldRef],\n        fieldVector = new lunr.Vector,\n        termFrequencies = this.fieldTermFrequencies[fieldRef],\n        terms = Object.keys(termFrequencies),\n        termsLength = terms.length\n\n\n    var fieldBoost = this._fields[fieldName].boost || 1,\n        docBoost = this._documents[fieldRef.docRef].boost || 1\n\n    for (var j = 0; j < termsLength; j++) {\n      var term = terms[j],\n          tf = termFrequencies[term],\n          termIndex = this.invertedIndex[term]._index,\n          idf, score, scoreWithPrecision\n\n      if (termIdfCache[term] === undefined) {\n        idf = lunr.idf(this.invertedIndex[term], this.documentCount)\n        termIdfCache[term] = idf\n      } else {\n        idf = termIdfCache[term]\n      }\n\n      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf)\n      score *= fieldBoost\n      score *= docBoost\n      scoreWithPrecision = Math.round(score * 1000) / 1000\n      // Converts 1.23456789 to 1.234.\n      // Reducing the precision so that the vectors take up less\n      // space when serialised. Doing it now so that they behave\n      // the same before and after serialisation. Also, this is\n      // the fastest approach to reducing a number's precision in\n      // JavaScript.\n\n      fieldVector.insert(termIndex, scoreWithPrecision)\n    }\n\n    fieldVectors[fieldRef] = fieldVector\n  }\n\n  this.fieldVectors = fieldVectors\n}\n\n/**\n * Creates a token set of all tokens in the index using lunr.TokenSet\n *\n * @private\n */\nlunr.Builder.prototype.createTokenSet = function () {\n  this.tokenSet = lunr.TokenSet.fromArray(\n    Object.keys(this.invertedIndex).sort()\n  )\n}\n\n/**\n * Builds the index, creating an instance of lunr.Index.\n *\n * This completes the indexing process and should only be called\n * once all documents have been added to the index.\n *\n * @returns {lunr.Index}\n */\nlunr.Builder.prototype.build = function () {\n  this.calculateAverageFieldLengths()\n  this.createFieldVectors()\n  this.createTokenSet()\n\n  return new lunr.Index({\n    invertedIndex: this.invertedIndex,\n    fieldVectors: this.fieldVectors,\n    tokenSet: this.tokenSet,\n    fields: Object.keys(this._fields),\n    pipeline: this.searchPipeline\n  })\n}\n\n/**\n * Applies a plugin to the index builder.\n *\n * A plugin is a function that is called with the index builder as its context.\n * Plugins can be used to customise or extend the behaviour of the index\n * in some way. A plugin is just a function, that encapsulated the custom\n * behaviour that should be applied when building the index.\n *\n * The plugin function will be called with the index builder as its argument, additional\n * arguments can also be passed when calling use. The function will be called\n * with the index builder as its context.\n *\n * @param {Function} plugin The plugin to apply.\n */\nlunr.Builder.prototype.use = function (fn) {\n  var args = Array.prototype.slice.call(arguments, 1)\n  args.unshift(this)\n  fn.apply(this, args)\n}\n/**\n * Contains and collects metadata about a matching document.\n * A single instance of lunr.MatchData is returned as part of every\n * lunr.Index~Result.\n *\n * @constructor\n * @param {string} term - The term this match data is associated with\n * @param {string} field - The field in which the term was found\n * @param {object} metadata - The metadata recorded about this term in this field\n * @property {object} metadata - A cloned collection of metadata associated with this document.\n * @see {@link lunr.Index~Result}\n */\nlunr.MatchData = function (term, field, metadata) {\n  var clonedMetadata = Object.create(null),\n      metadataKeys = Object.keys(metadata || {})\n\n  // Cloning the metadata to prevent the original\n  // being mutated during match data combination.\n  // Metadata is kept in an array within the inverted\n  // index so cloning the data can be done with\n  // Array#slice\n  for (var i = 0; i < metadataKeys.length; i++) {\n    var key = metadataKeys[i]\n    clonedMetadata[key] = metadata[key].slice()\n  }\n\n  this.metadata = Object.create(null)\n\n  if (term !== undefined) {\n    this.metadata[term] = Object.create(null)\n    this.metadata[term][field] = clonedMetadata\n  }\n}\n\n/**\n * An instance of lunr.MatchData will be created for every term that matches a\n * document. However only one instance is required in a lunr.Index~Result. This\n * method combines metadata from another instance of lunr.MatchData with this\n * objects metadata.\n *\n * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.\n * @see {@link lunr.Index~Result}\n */\nlunr.MatchData.prototype.combine = function (otherMatchData) {\n  var terms = Object.keys(otherMatchData.metadata)\n\n  for (var i = 0; i < terms.length; i++) {\n    var term = terms[i],\n        fields = Object.keys(otherMatchData.metadata[term])\n\n    if (this.metadata[term] == undefined) {\n      this.metadata[term] = Object.create(null)\n    }\n\n    for (var j = 0; j < fields.length; j++) {\n      var field = fields[j],\n          keys = Object.keys(otherMatchData.metadata[term][field])\n\n      if (this.metadata[term][field] == undefined) {\n        this.metadata[term][field] = Object.create(null)\n      }\n\n      for (var k = 0; k < keys.length; k++) {\n        var key = keys[k]\n\n        if (this.metadata[term][field][key] == undefined) {\n          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]\n        } else {\n          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])\n        }\n\n      }\n    }\n  }\n}\n\n/**\n * Add metadata for a term/field pair to this instance of match data.\n *\n * @param {string} term - The term this match data is associated with\n * @param {string} field - The field in which the term was found\n * @param {object} metadata - The metadata recorded about this term in this field\n */\nlunr.MatchData.prototype.add = function (term, field, metadata) {\n  if (!(term in this.metadata)) {\n    this.metadata[term] = Object.create(null)\n    this.metadata[term][field] = metadata\n    return\n  }\n\n  if (!(field in this.metadata[term])) {\n    this.metadata[term][field] = metadata\n    return\n  }\n\n  var metadataKeys = Object.keys(metadata)\n\n  for (var i = 0; i < metadataKeys.length; i++) {\n    var key = metadataKeys[i]\n\n    if (key in this.metadata[term][field]) {\n      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])\n    } else {\n      this.metadata[term][field][key] = metadata[key]\n    }\n  }\n}\n/**\n * A lunr.Query provides a programmatic way of defining queries to be performed\n * against a {@link lunr.Index}.\n *\n * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method\n * so the query object is pre-initialized with the right index fields.\n *\n * @constructor\n * @property {lunr.Query~Clause[]} clauses - An array of query clauses.\n * @property {string[]} allFields - An array of all available fields in a lunr.Index.\n */\nlunr.Query = function (allFields) {\n  this.clauses = []\n  this.allFields = allFields\n}\n\n/**\n * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.\n *\n * This allows wildcards to be added to the beginning and end of a term without having to manually do any string\n * concatenation.\n *\n * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.\n *\n * @constant\n * @default\n * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour\n * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists\n * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists\n * @see lunr.Query~Clause\n * @see lunr.Query#clause\n * @see lunr.Query#term\n * @example <caption>query term with trailing wildcard</caption>\n * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })\n * @example <caption>query term with leading and trailing wildcard</caption>\n * query.term('foo', {\n *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING\n * })\n */\n\nlunr.Query.wildcard = new String (\"*\")\nlunr.Query.wildcard.NONE = 0\nlunr.Query.wildcard.LEADING = 1\nlunr.Query.wildcard.TRAILING = 2\n\n/**\n * Constants for indicating what kind of presence a term must have in matching documents.\n *\n * @constant\n * @enum {number}\n * @see lunr.Query~Clause\n * @see lunr.Query#clause\n * @see lunr.Query#term\n * @example <caption>query term with required presence</caption>\n * query.term('foo', { presence: lunr.Query.presence.REQUIRED })\n */\nlunr.Query.presence = {\n  /**\n   * Term's presence in a document is optional, this is the default value.\n   */\n  OPTIONAL: 1,\n\n  /**\n   * Term's presence in a document is required, documents that do not contain\n   * this term will not be returned.\n   */\n  REQUIRED: 2,\n\n  /**\n   * Term's presence in a document is prohibited, documents that do contain\n   * this term will not be returned.\n   */\n  PROHIBITED: 3\n}\n\n/**\n * A single clause in a {@link lunr.Query} contains a term and details on how to\n * match that term against a {@link lunr.Index}.\n *\n * @typedef {Object} lunr.Query~Clause\n * @property {string[]} fields - The fields in an index this clause should be matched against.\n * @property {number} [boost=1] - Any boost that should be applied when matching this clause.\n * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.\n * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.\n * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.\n * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.\n */\n\n/**\n * Adds a {@link lunr.Query~Clause} to this query.\n *\n * Unless the clause contains the fields to be matched all fields will be matched. In addition\n * a default boost of 1 is applied to the clause.\n *\n * @param {lunr.Query~Clause} clause - The clause to add to this query.\n * @see lunr.Query~Clause\n * @returns {lunr.Query}\n */\nlunr.Query.prototype.clause = function (clause) {\n  if (!('fields' in clause)) {\n    clause.fields = this.allFields\n  }\n\n  if (!('boost' in clause)) {\n    clause.boost = 1\n  }\n\n  if (!('usePipeline' in clause)) {\n    clause.usePipeline = true\n  }\n\n  if (!('wildcard' in clause)) {\n    clause.wildcard = lunr.Query.wildcard.NONE\n  }\n\n  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {\n    clause.term = \"*\" + clause.term\n  }\n\n  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {\n    clause.term = \"\" + clause.term + \"*\"\n  }\n\n  if (!('presence' in clause)) {\n    clause.presence = lunr.Query.presence.OPTIONAL\n  }\n\n  this.clauses.push(clause)\n\n  return this\n}\n\n/**\n * A negated query is one in which every clause has a presence of\n * prohibited. These queries require some special processing to return\n * the expected results.\n *\n * @returns boolean\n */\nlunr.Query.prototype.isNegated = function () {\n  for (var i = 0; i < this.clauses.length; i++) {\n    if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {\n      return false\n    }\n  }\n\n  return true\n}\n\n/**\n * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}\n * to the list of clauses that make up this query.\n *\n * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion\n * to a token or token-like string should be done before calling this method.\n *\n * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an\n * array, each term in the array will share the same options.\n *\n * @param {object|object[]} term - The term(s) to add to the query.\n * @param {object} [options] - Any additional properties to add to the query clause.\n * @returns {lunr.Query}\n * @see lunr.Query#clause\n * @see lunr.Query~Clause\n * @example <caption>adding a single term to a query</caption>\n * query.term(\"foo\")\n * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>\n * query.term(\"foo\", {\n *   fields: [\"title\"],\n *   boost: 10,\n *   wildcard: lunr.Query.wildcard.TRAILING\n * })\n * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>\n * query.term(lunr.tokenizer(\"foo bar\"))\n */\nlunr.Query.prototype.term = function (term, options) {\n  if (Array.isArray(term)) {\n    term.forEach(function (t) { this.term(t, lunr.utils.clone(options)) }, this)\n    return this\n  }\n\n  var clause = options || {}\n  clause.term = term.toString()\n\n  this.clause(clause)\n\n  return this\n}\nlunr.QueryParseError = function (message, start, end) {\n  this.name = \"QueryParseError\"\n  this.message = message\n  this.start = start\n  this.end = end\n}\n\nlunr.QueryParseError.prototype = new Error\nlunr.QueryLexer = function (str) {\n  this.lexemes = []\n  this.str = str\n  this.length = str.length\n  this.pos = 0\n  this.start = 0\n  this.escapeCharPositions = []\n}\n\nlunr.QueryLexer.prototype.run = function () {\n  var state = lunr.QueryLexer.lexText\n\n  while (state) {\n    state = state(this)\n  }\n}\n\nlunr.QueryLexer.prototype.sliceString = function () {\n  var subSlices = [],\n      sliceStart = this.start,\n      sliceEnd = this.pos\n\n  for (var i = 0; i < this.escapeCharPositions.length; i++) {\n    sliceEnd = this.escapeCharPositions[i]\n    subSlices.push(this.str.slice(sliceStart, sliceEnd))\n    sliceStart = sliceEnd + 1\n  }\n\n  subSlices.push(this.str.slice(sliceStart, this.pos))\n  this.escapeCharPositions.length = 0\n\n  return subSlices.join('')\n}\n\nlunr.QueryLexer.prototype.emit = function (type) {\n  this.lexemes.push({\n    type: type,\n    str: this.sliceString(),\n    start: this.start,\n    end: this.pos\n  })\n\n  this.start = this.pos\n}\n\nlunr.QueryLexer.prototype.escapeCharacter = function () {\n  this.escapeCharPositions.push(this.pos - 1)\n  this.pos += 1\n}\n\nlunr.QueryLexer.prototype.next = function () {\n  if (this.pos >= this.length) {\n    return lunr.QueryLexer.EOS\n  }\n\n  var char = this.str.charAt(this.pos)\n  this.pos += 1\n  return char\n}\n\nlunr.QueryLexer.prototype.width = function () {\n  return this.pos - this.start\n}\n\nlunr.QueryLexer.prototype.ignore = function () {\n  if (this.start == this.pos) {\n    this.pos += 1\n  }\n\n  this.start = this.pos\n}\n\nlunr.QueryLexer.prototype.backup = function () {\n  this.pos -= 1\n}\n\nlunr.QueryLexer.prototype.acceptDigitRun = function () {\n  var char, charCode\n\n  do {\n    char = this.next()\n    charCode = char.charCodeAt(0)\n  } while (charCode > 47 && charCode < 58)\n\n  if (char != lunr.QueryLexer.EOS) {\n    this.backup()\n  }\n}\n\nlunr.QueryLexer.prototype.more = function () {\n  return this.pos < this.length\n}\n\nlunr.QueryLexer.EOS = 'EOS'\nlunr.QueryLexer.FIELD = 'FIELD'\nlunr.QueryLexer.TERM = 'TERM'\nlunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'\nlunr.QueryLexer.BOOST = 'BOOST'\nlunr.QueryLexer.PRESENCE = 'PRESENCE'\n\nlunr.QueryLexer.lexField = function (lexer) {\n  lexer.backup()\n  lexer.emit(lunr.QueryLexer.FIELD)\n  lexer.ignore()\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexTerm = function (lexer) {\n  if (lexer.width() > 1) {\n    lexer.backup()\n    lexer.emit(lunr.QueryLexer.TERM)\n  }\n\n  lexer.ignore()\n\n  if (lexer.more()) {\n    return lunr.QueryLexer.lexText\n  }\n}\n\nlunr.QueryLexer.lexEditDistance = function (lexer) {\n  lexer.ignore()\n  lexer.acceptDigitRun()\n  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexBoost = function (lexer) {\n  lexer.ignore()\n  lexer.acceptDigitRun()\n  lexer.emit(lunr.QueryLexer.BOOST)\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexEOS = function (lexer) {\n  if (lexer.width() > 0) {\n    lexer.emit(lunr.QueryLexer.TERM)\n  }\n}\n\n// This matches the separator used when tokenising fields\n// within a document. These should match otherwise it is\n// not possible to search for some tokens within a document.\n//\n// It is possible for the user to change the separator on the\n// tokenizer so it _might_ clash with any other of the special\n// characters already used within the search string, e.g. :.\n//\n// This means that it is possible to change the separator in\n// such a way that makes some words unsearchable using a search\n// string.\nlunr.QueryLexer.termSeparator = lunr.tokenizer.separator\n\nlunr.QueryLexer.lexText = function (lexer) {\n  while (true) {\n    var char = lexer.next()\n\n    if (char == lunr.QueryLexer.EOS) {\n      return lunr.QueryLexer.lexEOS\n    }\n\n    // Escape character is '\\'\n    if (char.charCodeAt(0) == 92) {\n      lexer.escapeCharacter()\n      continue\n    }\n\n    if (char == \":\") {\n      return lunr.QueryLexer.lexField\n    }\n\n    if (char == \"~\") {\n      lexer.backup()\n      if (lexer.width() > 0) {\n        lexer.emit(lunr.QueryLexer.TERM)\n      }\n      return lunr.QueryLexer.lexEditDistance\n    }\n\n    if (char == \"^\") {\n      lexer.backup()\n      if (lexer.width() > 0) {\n        lexer.emit(lunr.QueryLexer.TERM)\n      }\n      return lunr.QueryLexer.lexBoost\n    }\n\n    // \"+\" indicates term presence is required\n    // checking for length to ensure that only\n    // leading \"+\" are considered\n    if (char == \"+\" && lexer.width() === 1) {\n      lexer.emit(lunr.QueryLexer.PRESENCE)\n      return lunr.QueryLexer.lexText\n    }\n\n    // \"-\" indicates term presence is prohibited\n    // checking for length to ensure that only\n    // leading \"-\" are considered\n    if (char == \"-\" && lexer.width() === 1) {\n      lexer.emit(lunr.QueryLexer.PRESENCE)\n      return lunr.QueryLexer.lexText\n    }\n\n    if (char.match(lunr.QueryLexer.termSeparator)) {\n      return lunr.QueryLexer.lexTerm\n    }\n  }\n}\n\nlunr.QueryParser = function (str, query) {\n  this.lexer = new lunr.QueryLexer (str)\n  this.query = query\n  this.currentClause = {}\n  this.lexemeIdx = 0\n}\n\nlunr.QueryParser.prototype.parse = function () {\n  this.lexer.run()\n  this.lexemes = this.lexer.lexemes\n\n  var state = lunr.QueryParser.parseClause\n\n  while (state) {\n    state = state(this)\n  }\n\n  return this.query\n}\n\nlunr.QueryParser.prototype.peekLexeme = function () {\n  return this.lexemes[this.lexemeIdx]\n}\n\nlunr.QueryParser.prototype.consumeLexeme = function () {\n  var lexeme = this.peekLexeme()\n  this.lexemeIdx += 1\n  return lexeme\n}\n\nlunr.QueryParser.prototype.nextClause = function () {\n  var completedClause = this.currentClause\n  this.query.clause(completedClause)\n  this.currentClause = {}\n}\n\nlunr.QueryParser.parseClause = function (parser) {\n  var lexeme = parser.peekLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  switch (lexeme.type) {\n    case lunr.QueryLexer.PRESENCE:\n      return lunr.QueryParser.parsePresence\n    case lunr.QueryLexer.FIELD:\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.TERM:\n      return lunr.QueryParser.parseTerm\n    default:\n      var errorMessage = \"expected either a field or a term, found \" + lexeme.type\n\n      if (lexeme.str.length >= 1) {\n        errorMessage += \" with value '\" + lexeme.str + \"'\"\n      }\n\n      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n}\n\nlunr.QueryParser.parsePresence = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  switch (lexeme.str) {\n    case \"-\":\n      parser.currentClause.presence = lunr.Query.presence.PROHIBITED\n      break\n    case \"+\":\n      parser.currentClause.presence = lunr.Query.presence.REQUIRED\n      break\n    default:\n      var errorMessage = \"unrecognised presence operator'\" + lexeme.str + \"'\"\n      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    var errorMessage = \"expecting term or field, found nothing\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.FIELD:\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.TERM:\n      return lunr.QueryParser.parseTerm\n    default:\n      var errorMessage = \"expecting term or field, found '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseField = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  if (parser.query.allFields.indexOf(lexeme.str) == -1) {\n    var possibleFields = parser.query.allFields.map(function (f) { return \"'\" + f + \"'\" }).join(', '),\n        errorMessage = \"unrecognised field '\" + lexeme.str + \"', possible fields: \" + possibleFields\n\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.fields = [lexeme.str]\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    var errorMessage = \"expecting term, found nothing\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      return lunr.QueryParser.parseTerm\n    default:\n      var errorMessage = \"expecting term, found '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseTerm = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  parser.currentClause.term = lexeme.str.toLowerCase()\n\n  if (lexeme.str.indexOf(\"*\") != -1) {\n    parser.currentClause.usePipeline = false\n  }\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    case lunr.QueryLexer.PRESENCE:\n      parser.nextClause()\n      return lunr.QueryParser.parsePresence\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseEditDistance = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  var editDistance = parseInt(lexeme.str, 10)\n\n  if (isNaN(editDistance)) {\n    var errorMessage = \"edit distance must be numeric\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.editDistance = editDistance\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    case lunr.QueryLexer.PRESENCE:\n      parser.nextClause()\n      return lunr.QueryParser.parsePresence\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseBoost = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  var boost = parseInt(lexeme.str, 10)\n\n  if (isNaN(boost)) {\n    var errorMessage = \"boost must be numeric\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.boost = boost\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    case lunr.QueryLexer.PRESENCE:\n      parser.nextClause()\n      return lunr.QueryParser.parsePresence\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\n  /**\n   * export the module via AMD, CommonJS or as a browser global\n   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js\n   */\n  ;(function (root, factory) {\n    if (true) {\n      // AMD. Register as an anonymous module.\n      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n    } else {}\n  }(this, function () {\n    /**\n     * Just return a value to define the module export.\n     * This example returns an object, but the module\n     * can return a function as the exported value.\n     */\n    return lunr\n  }))\n})();\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lunr/lunr.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("eczsearch." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3045499c491678aab33a")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "[name]:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"eczsearch": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate_name_"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/eczsearch/index.js");
/******/ 	eczsearch = __webpack_exports__;
/******/ 	
/******/ })()
;