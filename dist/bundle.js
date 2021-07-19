
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$1 = "/*css 初始化 */\nhtml,\nbody,\nul,\nli,\nol,\ndl,\ndd,\ndt,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nform,\nfieldset,\nlegend,\nimg {\n  margin: 0;\n  padding: 0;\n}\nfieldset,\nimg,\ninput,\nbutton {\n  border: none;\n  padding: 0;\n  margin: 0;\n  outline-style: none;\n}\nul,\nol {\n  list-style: none;\n}\ninput {\n  padding-top: 0;\n  padding-bottom: 0;\n  font-family: \"SimSun\", \"宋体\";\n}\nselect,\ninput {\n  vertical-align: middle;\n}\nselect,\ninput,\ntextarea {\n  font-size: 12px;\n  margin: 0;\n}\ntextarea {\n  resize: none;\n}\nimg {\n  border: 0;\n  vertical-align: middle;\n}\ntable {\n  border-collapse: collapse;\n}\nbody {\n  font: 12px/150% Arial, Verdana, \"\\5b8b\\4f53\";\n  color: #666;\n  background: #fff;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \"\";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n.clearfix {\n  *zoom: 1;\n  /*IE/7/6*/\n}\na {\n  color: #666;\n  text-decoration: none;\n}\na:hover {\n  color: #c81623;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-decoration: none;\n  font-weight: normal;\n}\ns,\ni,\nem {\n  font-style: normal;\n  text-decoration: none;\n}\n.col-red {\n  color: #c81623 !important;\n}\n.App {\n  font-family: Arial, Helvetica, sans-serif;\n}\n";
  styleInject(css_248z$1);

  var css_248z = ".header {\n  height: 290px;\n  text-align: center;\n  background-image: url(\"public/img/banner.png\");\n}\n.header-container {\n  max-width: 1200px;\n  height: 40px;\n  margin: 0 auto;\n  line-height: 40px;\n  padding: 10px 40px;\n  position: relative;\n}\n.home-link {\n  float: left;\n  font-size: 20px;\n  font-weight: 700;\n  color: #fff !important;\n}\n.right-list {\n  float: right;\n}\n.right-list li {\n  display: inline-block;\n  margin: 5px;\n  position: relative;\n}\n.right-list li .item-link {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n}\n.right-list li .item-link::after {\n  content: '';\n  position: absolute;\n  display: none;\n  bottom: 0px;\n  height: 3px;\n  width: 100%;\n  background-color: #ffe4e1;\n  left: 0;\n}\n.right-list li:hover .item-link::after {\n  display: block;\n}\n.header-content {\n  overflow: hidden;\n  width: 100%;\n  padding-top: 100px;\n}\n.header-content .content-title {\n  font-size: 32px;\n  color: #fff;\n  font-weight: 700;\n}\n.header-content .content-description {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 700;\n}\n";
  styleInject(css_248z);

  var Header = /*#__PURE__*/function (_Component) {
    _inherits(Header, _Component);

    var _super = _createSuper(Header);

    function Header() {
      _classCallCheck(this, Header);

      return _super.apply(this, arguments);
    }

    _createClass(Header, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("header", {
          className: "header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "header-container"
        }, /*#__PURE__*/React.createElement("a", {
          className: "home-link",
          href: "/"
        }, "\u4E00\u53EA\u7403\u7403\u7403"), /*#__PURE__*/React.createElement("ul", {
          className: "right-list"
        }, /*#__PURE__*/React.createElement("li", {
          className: "list-item"
        }, /*#__PURE__*/React.createElement("a", {
          href: "/",
          className: "item-link"
        }, "Home")), /*#__PURE__*/React.createElement("li", {
          className: "list-item"
        }, /*#__PURE__*/React.createElement("a", {
          href: "/archive/",
          className: "item-link"
        }, "Archive"))), /*#__PURE__*/React.createElement("div", {
          className: "header-content"
        }, /*#__PURE__*/React.createElement("ul", {
          className: "content-list"
        }, /*#__PURE__*/React.createElement("li", {
          className: "content-title"
        }, "Home"), /*#__PURE__*/React.createElement("li", {
          className: "content-description"
        }, "Archive")))));
      }
    }]);

    return Header;
  }(React.Component);

  var App = /*#__PURE__*/function (_Component) {
    _inherits(App, _Component);

    var _super = _createSuper(App);

    function App() {
      _classCallCheck(this, App);

      return _super.apply(this, arguments);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "App"
        }, /*#__PURE__*/React.createElement(Header, null));
      }
    }]);

    return App;
  }(React.Component);

  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

}());
