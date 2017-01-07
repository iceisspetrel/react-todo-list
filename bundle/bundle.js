webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(28);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _TodoList = __webpack_require__(166);

	var _TodoList2 = _interopRequireDefault(_TodoList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $root = document.getElementById('app');

	_reactDom2.default.render(_react2.default.createElement(_TodoList2.default, null), $root);

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseComponent2 = __webpack_require__(167);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	var _TodoHead = __webpack_require__(184);

	var _TodoHead2 = _interopRequireDefault(_TodoHead);

	var _TodoPromis = __webpack_require__(185);

	var _TodoPromis2 = _interopRequireDefault(_TodoPromis);

	var _TodoResolve = __webpack_require__(186);

	var _TodoResolve2 = _interopRequireDefault(_TodoResolve);

	var _TodoChart = __webpack_require__(187);

	var _TodoChart2 = _interopRequireDefault(_TodoChart);

	var _util = __webpack_require__(188);

	var _util2 = _interopRequireDefault(_util);

	var _underscore = __webpack_require__(189);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoList = function (_BaseComponent) {
	    _inherits(TodoList, _BaseComponent);

	    function TodoList(props) {
	        _classCallCheck(this, TodoList);

	        var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

	        _this.state = {
	            name: 'TodoList',
	            id: Math.random(),
	            promisList: [],
	            resolveList: []
	        };
	        _this._listCount = 0;
	        return _this;
	    }

	    _createClass(TodoList, [{
	        key: 'initState',
	        value: function initState(list) {
	            this.setState({
	                promisList: list.promisList,
	                resolveList: list.resolveList
	            });

	            var promisListMax = _underscore2.default.max(list.promisList, function (item) {
	                return item.index;
	            });
	            var resolveListMax = _underscore2.default.max(list.resolveList, function (item) {
	                return item.index;
	            });

	            this.listCount = promisListMax.index > resolveListMax.index ? promisListMax.index : resolveListMax.index;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _util2.default.request(this.initState.bind(this));
	        }
	    }, {
	        key: 'addTodo',
	        value: function addTodo(todo) {
	            this.state.promisList.push({
	                state: 'promis',
	                todo: todo,
	                index: ++this.listCount
	            });
	            this.setState({
	                list: this.state.promisList
	            });
	        }
	    }, {
	        key: 'sort',
	        value: function sort() {
	            this.state.promisList.sort(function (current, next) {
	                return current.index > next.index ? 1 : -1;
	            });

	            this.state.resolveList.sort(function (current, next) {
	                return current.index > next.index ? 1 : -1;
	            });
	        }
	    }, {
	        key: 'resolveTodo',
	        value: function resolveTodo(item, i) {
	            item.state = 'resolve';
	            this.state.resolveList.push(item);
	            this.state.promisList.splice(i, 1);
	            this.sort();
	            this.setState({
	                promisList: this.state.promisList,
	                resolveList: this.state.resolveList
	            });
	        }
	    }, {
	        key: 'promisTodo',
	        value: function promisTodo(item, i) {
	            item.state = 'promis';
	            this.state.promisList.push(item);
	            this.state.resolveList.splice(i, 1);
	            this.sort();
	            this.setState({
	                promisList: this.state.promisList,
	                resolveList: this.state.resolveList
	            });
	        }
	    }, {
	        key: 'removeTodo',
	        value: function removeTodo(item, i) {
	            if (item.state == 'promis') {
	                this.state.promisList.splice(i, 1);
	                this.setState({
	                    promisList: this.state.promisList
	                });
	            } else {
	                this.state.resolveList.splice(i, 1);
	                this.setState({
	                    resolveList: this.state.resolveList
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'section',
	                { id: 'todo_list_' + this.state.id },
	                React.createElement(_TodoHead2.default, _extends({}, this.state, { addTodo: this.addTodo.bind(this) })),
	                React.createElement(_TodoPromis2.default, { id: this.state.id, list: this.state.promisList, resolveTodo: this.resolveTodo.bind(this), removeTodo: this.removeTodo.bind(this) }),
	                React.createElement(_TodoResolve2.default, { id: this.state.id, list: this.state.resolveList, promisTodo: this.promisTodo.bind(this), removeTodo: this.removeTodo.bind(this) }),
	                React.createElement(_TodoChart2.default, this.state)
	            );
	        }
	    }, {
	        key: 'listCount',
	        get: function get() {
	            return this._listCount;
	        },
	        set: function set(listCount) {
	            this._listCount = listCount;
	        }
	    }]);

	    return TodoList;
	}(_BaseComponent3.default);

	exports.default = TodoList;

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(168);

	var BaseComponent = function (_React$Component) {
	    _inherits(BaseComponent, _React$Component);

	    function BaseComponent(props) {
	        _classCallCheck(this, BaseComponent);

	        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	        _this.initReact((0, 1, 2, 3, 4, 5, window || global));
	        //加载类对应的样式文件  样式文件名必须和组件名一致
	        __webpack_require__(172)("./" + _this.__proto__.constructor.name + '.css');
	        return _this;
	    }

	    _createClass(BaseComponent, [{
	        key: 'initReact',
	        value: function initReact(global) {
	            if (!global.React) {
	                global.React = _react2.default;
	            }
	        }
	    }]);

	    return BaseComponent;
	}(_react2.default.Component);

	exports.default = BaseComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./common.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./common.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, "html{\r\n    font-size: 62.5%;\r\n}\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 1rem;\r\n    background-color: rgb(205, 205, 205);\r\n}\r\n\r\nul, li{\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n", ""]);

	// exports


/***/ },

/***/ 170:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./TodoChart.css": 173,
		"./TodoHead.css": 175,
		"./TodoList.css": 177,
		"./TodoPromis.css": 180,
		"./TodoResolve.css": 182,
		"./common.css": 168
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 172;


/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./TodoChart.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./TodoChart.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, ".white{\r\n    background-color: #FFF !important;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 6rem;\r\n}\r\n", ""]);

	// exports


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./TodoHead.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./TodoHead.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, ".header-space{\r\n    height: 5rem;\r\n    width: 100%;\r\n}\r\n\r\n.header-bg{\r\n    height: 5rem;\r\n    width: 100%;\r\n    background-color: #000;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n}\r\n\r\n.header-bg .header-main{\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    height: 100%;\r\n}\r\n\r\n.header-bg .header-name{\r\n    line-height: 5rem;\r\n    font-size: 2.4rem;\r\n    color: #DDD;\r\n    cursor: pointer;\r\n    width: 10rem;\r\n    vertical-align: middle;\r\n    font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n}\r\n\r\n.header-bg .header-add{\r\n    float: right;\r\n    width: calc(100% - 120px);\r\n    height: 2.4rem;\r\n    margin-top: 1.2rem;\r\n    text-indent: 1rem;\r\n    border-radius: 0.5rem;\r\n    box-shadow: 0 0.1rem 0 rgba(255,255,255,0.24), 0 0.1rem 0.1rem rgba(0,0,0,0.45) inset;\r\n    border: none;\r\n}\r\n", ""]);

	// exports


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./TodoList.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./TodoList.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, ".todo-list{\r\n    width: 60%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.todo-list h2{\r\n    position: relative;\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.todo-list h2 .count{\r\n    position: absolute;\r\n    right: 0;\r\n    display: inline-block;\r\n    width: 1.6rem;\r\n    height: 1.6rem;\r\n    border-radius: 50%;\r\n    background-color: #E6E6FA;\r\n    color: #666;\r\n    font-size: 1.4rem;\r\n    text-align: center;\r\n    line-height: 1.6rem;\r\n}\r\n\r\n.todo-list li{\r\n    height: 3.2rem;\r\n    line-height: 3.2rem;\r\n    position: relative;\r\n    padding: 0 4.5rem;\r\n    font-size: 1.6rem;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    background-color: #FFF;\r\n    border-radius: .4rem;\r\n    margin-bottom: .1rem;\r\n}\r\n\r\n.todo-list li span{\r\n    display: inline;\r\n    height: 3.2rem;\r\n    position: absolute;\r\n}\r\n\r\n.todo-list li input{\r\n    position: absolute;\r\n    top: .3rem;\r\n    left: 1rem;\r\n    width: 2.2rem;\r\n    height: 2.2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-list li span.lt-icon{\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgb(106, 163, 198);\r\n    width: 7px;\r\n}\r\n\r\n.todo-list li span.remove-icon{\r\n    width: 2.4rem;\r\n    height: 2.4rem;\r\n    top: 50%;\r\n    margin-top: -1.1rem;\r\n    right: 1rem;\r\n    cursor: pointer;\r\n    background: url(" + __webpack_require__(179) + ") no-repeat;\r\n}\r\n", ""]);

	// exports


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/2d8d7c8fde02e67b.remove.png";

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./TodoPromis.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./TodoPromis.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, ".todo-list li.resolve{\r\n    background-color: rgb(230, 230, 230);\r\n}\r\n\r\n.todo-list li.resolve span.lt-icon{\r\n    background-color: rgb(179, 179, 179);\r\n}\r\n", ""]);

	// exports


/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./TodoResolve.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./TodoResolve.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseComponent2 = __webpack_require__(167);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoHead = function (_BaseComponent) {
	    _inherits(TodoHead, _BaseComponent);

	    function TodoHead(props) {
	        _classCallCheck(this, TodoHead);

	        var _this = _possibleConstructorReturn(this, (TodoHead.__proto__ || Object.getPrototypeOf(TodoHead)).call(this, props));

	        _this.state = {
	            holder: '添加TODO'
	        };
	        return _this;
	    }

	    _createClass(TodoHead, [{
	        key: 'submit',
	        value: function submit(e) {
	            var _this2 = this;

	            e.keyCode == 13 && e.target.value && function () {
	                _this2.props.addTodo(e.target.value);
	                e.target.value = '';
	            }();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'section',
	                { id: 'todo_head_' + this.props.id },
	                _react2.default.createElement('div', { className: 'header-space' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'header-bg' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'header-main' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'header-name' },
	                            this.props.name
	                        ),
	                        _react2.default.createElement('input', { type: 'text', placeholder: this.state.holder, onKeyDown: this.submit.bind(this), className: 'header-add', ref: 'todo' })
	                    )
	                )
	            );
	        }
	    }]);

	    return TodoHead;
	}(_BaseComponent3.default);

	//等同于 React.createClass.propTypes


	TodoHead.propTypes = {
	    count: _react2.default.PropTypes.string
	};

	//等同于 React.createClass.getDefaultProps
	TodoHead.defaultProps = {
	    id: Math.random(),
	    count: Math.random() + ''
	};

	exports.default = TodoHead;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseComponent2 = __webpack_require__(167);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoPromis = function (_BaseComponent) {
	    _inherits(TodoPromis, _BaseComponent);

	    function TodoPromis(props) {
	        _classCallCheck(this, TodoPromis);

	        var _this = _possibleConstructorReturn(this, (TodoPromis.__proto__ || Object.getPrototypeOf(TodoPromis)).call(this, props));

	        _this.state = {
	            checked: false
	        };
	        return _this;
	    }

	    _createClass(TodoPromis, [{
	        key: 'onTodoDrag',
	        value: function onTodoDrag(e) {
	            console.log(555);
	        }
	    }, {
	        key: 'onTodoDrop',
	        value: function onTodoDrop(e) {
	            debugger;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'section',
	                { id: 'todo_promis_' + this.props.id },
	                React.createElement(
	                    'div',
	                    { className: 'todo-list' },
	                    React.createElement(
	                        'h2',
	                        null,
	                        '\u6B63\u5728\u8FDB\u884C',
	                        React.createElement(
	                            'span',
	                            { className: 'count' },
	                            this.props.list.length
	                        )
	                    ),
	                    React.createElement(
	                        'ul',
	                        null,
	                        this.props.list.map(function (item, i) {
	                            var _this2 = this;

	                            return React.createElement(
	                                'li',
	                                { dragbble: true, onDragOver: function onDragOver(e) {
	                                        return console.log('over');
	                                    }, onDrag: function onDrag(e) {
	                                        return _this2.onTodoDrag(e);
	                                    }, onDrop: function onDrop(e) {
	                                        return _this2.onTodoDrop(e);
	                                    }, title: item.todo, key: i, className: 'promis' },
	                                React.createElement('span', { className: 'lt-icon' }),
	                                React.createElement('input', { checked: this.state.checked, type: 'checkbox', onChange: function onChange() {
	                                        _this2.props.resolveTodo(item, i);
	                                    } }),
	                                item.todo,
	                                React.createElement('span', { className: 'remove-icon', onClick: function onClick() {
	                                        _this2.props.removeTodo(item, i);
	                                    } })
	                            );
	                        }.bind(this))
	                    )
	                )
	            );
	        }
	    }]);

	    return TodoPromis;
	}(_BaseComponent3.default);

	exports.default = TodoPromis;

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseComponent2 = __webpack_require__(167);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoResolve = function (_BaseComponent) {
	    _inherits(TodoResolve, _BaseComponent);

	    function TodoResolve(props) {
	        _classCallCheck(this, TodoResolve);

	        var _this = _possibleConstructorReturn(this, (TodoResolve.__proto__ || Object.getPrototypeOf(TodoResolve)).call(this, props));

	        _this.state = {
	            checked: true
	        };
	        return _this;
	    }

	    _createClass(TodoResolve, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'section',
	                { id: 'todo_resolve_' + this.props.id },
	                React.createElement(
	                    'div',
	                    { className: 'todo-list' },
	                    React.createElement(
	                        'h2',
	                        null,
	                        '\u5DF2\u7ECF\u5B8C\u6210',
	                        React.createElement(
	                            'span',
	                            { className: 'count' },
	                            this.props.list.length
	                        )
	                    ),
	                    React.createElement(
	                        'ul',
	                        null,
	                        this.props.list.map(function (item, i) {
	                            var _this2 = this;

	                            return React.createElement(
	                                'li',
	                                { title: item.todo, key: i, className: 'resolve' },
	                                React.createElement('span', { className: 'lt-icon', title: this.props.ccc }),
	                                React.createElement('input', { checked: this.state.checked, type: 'checkbox', onChange: function onChange() {
	                                        _this2.props.promisTodo(item, i);
	                                    } }),
	                                item.todo,
	                                React.createElement('span', { className: 'remove-icon', onClick: function onClick() {
	                                        _this2.props.removeTodo(item, i);
	                                    } })
	                            );
	                        }.bind(this))
	                    )
	                )
	            );
	        }
	    }]);

	    return TodoResolve;
	}(_BaseComponent3.default);

	exports.default = TodoResolve;

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseComponent2 = __webpack_require__(167);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoChart = function (_BaseComponent) {
	    _inherits(TodoChart, _BaseComponent);

	    function TodoChart(props) {
	        _classCallCheck(this, TodoChart);

	        var _this = _possibleConstructorReturn(this, (TodoChart.__proto__ || Object.getPrototypeOf(TodoChart)).call(this, props));

	        _this.state = {
	            bgColor: false
	        };
	        _this._$el = null;
	        _this._chart = null;
	        return _this;
	    }

	    _createClass(TodoChart, [{
	        key: 'getChartOptions',
	        value: function getChartOptions() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.chart = echarts.init(this.$el);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {

	            var xAxis = [],
	                data = [];
	            this.props.promisList.map(function (item) {
	                xAxis.push(item.todo);
	                data.push(100);
	                return item;
	            }), this.props.resolveList.map(function (item) {
	                xAxis.push(item.todo);
	                data.push(-100);
	                return item;
	            });

	            this.chart.setOption({
	                tooltip: {
	                    trigger: 'axis',
	                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
	                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	                    },
	                    formatter: function formatter(data) {
	                        var todo = data[0];
	                        return todo.name + '<br/>' + (todo.value < 0 ? '已完成' : '未完成');
	                    }
	                },
	                yAxis: [{
	                    type: 'value',
	                    axisLabel: {
	                        show: false
	                    }
	                }],
	                xAxis: [{
	                    type: 'category',
	                    show: true,
	                    axisTick: {
	                        show: false
	                    },
	                    axisLabel: {
	                        show: false
	                    },
	                    data: xAxis
	                }],
	                series: [{
	                    name: '事项',
	                    type: 'bar',
	                    barWidth: 10,
	                    itemStyle: {
	                        normal: {
	                            label: {
	                                show: false,
	                                position: 'inside'
	                            },
	                            color: function color(params) {
	                                return params.data < 0 ? '#9BCA63' : '#D7504B';
	                            }
	                        }
	                    },
	                    data: data
	                }]
	            }, true);

	            this.$el.className = this.$el.className + ' white';
	        }
	    }, {
	        key: 'getStyle',
	        value: function getStyle() {
	            var style = {
	                width: this.props.width,
	                height: this.props.height,
	                margin: '0 auto 100px auto'
	            };

	            return style;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'section',
	                { id: "todo_chart_" + this.props.id },
	                _react2.default.createElement('div', { id: "chart_main_" + this.props.id, style: this.getStyle() })
	            );
	        }
	    }, {
	        key: '$el',
	        get: function get() {
	            return document.getElementById("chart_main_" + this.props.id);
	        }
	    }, {
	        key: 'chart',
	        set: function set(_chart) {
	            this._chart = _chart;
	        },
	        get: function get() {
	            return this._chart;
	        }
	    }]);

	    return TodoChart;
	}(_BaseComponent3.default);

	TodoChart.defaultProps = {
	    width: '25rem',
	    promisList: [],
	    resolveList: [],
	    height: '40rem'
	};

	TodoChart.propTypes = {
	    options: _react2.default.PropTypes.object,
	    width: _react2.default.PropTypes.string,
	    height: _react2.default.PropTypes.string,
	    promisList: _react2.default.PropTypes.array,
	    resolveList: _react2.default.PropTypes.array
	};

	exports.default = TodoChart;

/***/ }

});