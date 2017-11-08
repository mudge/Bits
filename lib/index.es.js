function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

___$insertStyle("/*                 tl             tr             br             bl           */\n/*\nscss-lint:disable SpaceAfterComma\nType name\n| Breakpoints\n| |      Font size - relative to 10px on <html> element\n| |      |                                 Line height\n| |      |                                 |\nv v      v                                 v */\n/**\n * Grid columns. This setting is shared between\n * iotaCSS grid objects and size, pull & push\n * utilities. You can change it also locally to\n * each module.\n *\n * Type: Unitless Number / List\n */\n/**\n * Global namespace for Objects, Components and\n * Utilities\n *\n * Type: String\n */\n/**\n * Default gutters. This setting is shared between\n * multiple objects and utilities as the default value\n * for gutters. You can change it also locally to each\n * module.\n *\n * Type: Number / List / Map\n */\n/**\n * Enables flexbox across the app. If you do not want\n * all modules to use flexbox you can keep this value\n * false and set it to true separately to each one of\n * them locally.\n *\n * Type: Boolean\n */\n/**\n * Enables rtl across the app. If you enable this setting\n * the final CSS will be converted to RTL.\n *\n * Type: Boolean\n */\n/**\n * Default global breakpoints map. These are the\n * default breakpoints map that will be shared across\n * all iotaCSS modules. You can change it also locally\n * to each module.\n *\n * Type: Map\n */\n/**\n * Global breakpoint suffix naming setting. All breakpoint\n * specific styles have a '@breakpointName' suffix by default.\n * The \\ character is used to escape the @ character.\n *\n * Type: String\n */\n/**\n * Global delimiter naming setting for Size, Push and Pull\n * utilities. By default it is '/' (.u-1/2) and you can change\n * it for example to 'of' so that the generated HTML class will be\n * 'u-1of2'.\n *\n * Type: String\n */\n/**\n * The base value the scale starts at.\n *\n * Number\n */\n/**\n * The ratio the scale is built on\n *\n * Unitless Number\n */\n/**\n * Length of scale (right part of the decimal\n * point) ms will be rounded to.\n *\n * Unitless Number\n */\n@import url(\"https://fonts.googleapis.com/css?family=Rubik:300,500,700\");\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500; }\n\n.c-button,\n.c-button:visited {\n  font-size: 1.6rem;\n  line-height: 35px;\n  background-color: #fcf67f;\n  border-color: #fcf67f;\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 0.3rem;\n  color: #222;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 500;\n  padding: 0 20px;\n  text-align: center;\n  text-decoration: none;\n  transition-duration: 100ms;\n  transition-property: background-color, border-color, color;\n  transition-timing-function: ease-in-out;\n  vertical-align: middle; }\n  @media screen and (min-width: 768px) {\n    .c-button,\n    .c-button:visited {\n      font-size: 1.8rem;\n      line-height: 40px; } }\n  .c-button:hover,\n  .c-button:visited:hover {\n    background-color: #444;\n    border-color: #444;\n    color: #fff; }\n\n.c-button--secondary,\n.c-button--secondary:visited {\n  background-color: transparent;\n  border-color: #999;\n  color: #999; }\n\n.c-button--block {\n  display: block;\n  width: 100%; }\n");

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);

  var classNames = classnames('c-button', className);

  return React.createElement(
    'button',
    _extends({}, props, { className: classNames }),
    children
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

___$insertStyle("/*                 tl             tr             br             bl           */\n/*\nscss-lint:disable SpaceAfterComma\nType name\n| Breakpoints\n| |      Font size - relative to 10px on <html> element\n| |      |                                 Line height\n| |      |                                 |\nv v      v                                 v */\n/**\n * Grid columns. This setting is shared between\n * iotaCSS grid objects and size, pull & push\n * utilities. You can change it also locally to\n * each module.\n *\n * Type: Unitless Number / List\n */\n/**\n * Global namespace for Objects, Components and\n * Utilities\n *\n * Type: String\n */\n/**\n * Default gutters. This setting is shared between\n * multiple objects and utilities as the default value\n * for gutters. You can change it also locally to each\n * module.\n *\n * Type: Number / List / Map\n */\n/**\n * Enables flexbox across the app. If you do not want\n * all modules to use flexbox you can keep this value\n * false and set it to true separately to each one of\n * them locally.\n *\n * Type: Boolean\n */\n/**\n * Enables rtl across the app. If you enable this setting\n * the final CSS will be converted to RTL.\n *\n * Type: Boolean\n */\n/**\n * Default global breakpoints map. These are the\n * default breakpoints map that will be shared across\n * all iotaCSS modules. You can change it also locally\n * to each module.\n *\n * Type: Map\n */\n/**\n * Global breakpoint suffix naming setting. All breakpoint\n * specific styles have a '@breakpointName' suffix by default.\n * The \\ character is used to escape the @ character.\n *\n * Type: String\n */\n/**\n * Global delimiter naming setting for Size, Push and Pull\n * utilities. By default it is '/' (.u-1/2) and you can change\n * it for example to 'of' so that the generated HTML class will be\n * 'u-1of2'.\n *\n * Type: String\n */\n/**\n * The base value the scale starts at.\n *\n * Number\n */\n/**\n * The ratio the scale is built on\n *\n * Unitless Number\n */\n/**\n * Length of scale (right part of the decimal\n * point) ms will be rounded to.\n *\n * Unitless Number\n */\n@import url(\"https://fonts.googleapis.com/css?family=Rubik:300,500,700\");\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500; }\n\n.c-link {\n  color: #004881;\n  cursor: pointer;\n  font-weight: 500;\n  text-decoration: underline;\n  text-decoration-skip: ink;\n  transition-duration: 100ms;\n  transition-property: color;\n  transition-timing-function: ease-in-out; }\n  .c-link:hover, .c-link:hover:visited {\n    color: #222; }\n  .c-link:visited {\n    color: #a76fba; }\n\n.c-link--light-on-dark {\n  color: #eee; }\n  .c-link--light-on-dark:hover, .c-link--light-on-dark:hover:visited {\n    color: #fff; }\n  .c-link--light-on-dark:visited {\n    color: #eee; }\n");

var Link$1 = function Link$$1(_ref) {
  var children = _ref.children,
      className = _ref.className,
      to = _ref.to,
      props = objectWithoutProperties(_ref, ['children', 'className', 'to']);

  var classNames = classnames('c-link', className);

  var anchorLink = React.createElement(
    'a',
    _extends({}, props, { className: classNames, href: to }),
    children
  );

  var isExternal = function isExternal() {
    return !/^https?:\/\//i.test(to);
  };

  var routerLink = React.createElement(
    Link,
    _extends({}, props, { className: classNames, to: to }),
    children
  );

  if (isExternal()) {
    return anchorLink;
  }

  return routerLink;
};

Link$1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

___$insertStyle("/*                 tl             tr             br             bl           */\n/*\nscss-lint:disable SpaceAfterComma\nType name\n| Breakpoints\n| |      Font size - relative to 10px on <html> element\n| |      |                                 Line height\n| |      |                                 |\nv v      v                                 v */\n/**\n * Grid columns. This setting is shared between\n * iotaCSS grid objects and size, pull & push\n * utilities. You can change it also locally to\n * each module.\n *\n * Type: Unitless Number / List\n */\n/**\n * Global namespace for Objects, Components and\n * Utilities\n *\n * Type: String\n */\n/**\n * Default gutters. This setting is shared between\n * multiple objects and utilities as the default value\n * for gutters. You can change it also locally to each\n * module.\n *\n * Type: Number / List / Map\n */\n/**\n * Enables flexbox across the app. If you do not want\n * all modules to use flexbox you can keep this value\n * false and set it to true separately to each one of\n * them locally.\n *\n * Type: Boolean\n */\n/**\n * Enables rtl across the app. If you enable this setting\n * the final CSS will be converted to RTL.\n *\n * Type: Boolean\n */\n/**\n * Default global breakpoints map. These are the\n * default breakpoints map that will be shared across\n * all iotaCSS modules. You can change it also locally\n * to each module.\n *\n * Type: Map\n */\n/**\n * Global breakpoint suffix naming setting. All breakpoint\n * specific styles have a '@breakpointName' suffix by default.\n * The \\ character is used to escape the @ character.\n *\n * Type: String\n */\n/**\n * Global delimiter naming setting for Size, Push and Pull\n * utilities. By default it is '/' (.u-1/2) and you can change\n * it for example to 'of' so that the generated HTML class will be\n * 'u-1of2'.\n *\n * Type: String\n */\n/**\n * The base value the scale starts at.\n *\n * Number\n */\n/**\n * The ratio the scale is built on\n *\n * Unitless Number\n */\n/**\n * Length of scale (right part of the decimal\n * point) ms will be rounded to.\n *\n * Unitless Number\n */\n@import url(\"https://fonts.googleapis.com/css?family=Rubik:300,500,700\");\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500; }\n\n.c-pagination {\n  margin-bottom: 20px;\n  text-align: center; }\n\n.c-pagination__label {\n  font-size: 1.6rem;\n  line-height: 40px;\n  color: #999;\n  display: inline-block;\n  font-weight: 500;\n  padding: 0 15px;\n  vertical-align: top; }\n  @media screen and (min-width: 768px) {\n    .c-pagination__label {\n      font-size: 1.8rem;\n      line-height: 40px; } }\n\n.c-pagination__link {\n  background-color: #f5f6f9;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 15px 15px;\n  border-color: #999;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 0.2rem;\n  cursor: pointer;\n  display: inline-block;\n  height: 40px;\n  transition-duration: 150ms;\n  transition-property: background-color, border-color;\n  transition-timing-function: ease-in-out;\n  vertical-align: top;\n  width: 40px; }\n  .c-pagination__link:hover {\n    background-color: #999; }\n\n.c-pagination__link--disabled {\n  background-color: #ccc;\n  border-color: #ccc;\n  pointer-events: none; }\n\n.c-pagination__link--next {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMTcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9DaGV2cm9uL0dyZXk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQnV0dG9ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkJ1dHRvbnMvQ2lyY2xlL1NlY29uZGFyeSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3LjAwMDAwMCwgLTIxLjAwMDAwMCkiIGZpbGw9IiM5OTk5OTkiPgogICAgICAgICAgICA8ZyBpZD0iSWNvbnMvQ2hldnJvbi9MZWZ0L0dyZXktQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQuODQ4MDE3OTgsMTkuNDM2MjUzMyBMNC44NDgwMTc5OCw2LjQ5NTA3NjggQzQuODQ4MDE3OTgsNS4xOTU1ODMyNyAzLjc5NDU3MDMzLDQuMTQyMTM1NjIgMi40OTUwNzY4LDQuMTQyMTM1NjIgTDIuNDk1MDc2OCw0LjE0MjEzNTYyIEwyLjQ5NTA3NjgsNC4xNDIxMzU2MiBDMS4xOTU1ODMyNyw0LjE0MjEzNTYyIDAuMTQyMTM1NjI0LDUuMTk1NTgzMjcgMC4xNDIxMzU2MjQsNi40OTUwNzY4IEwwLjE0MjEzNTYyNCw2LjQ5NTA3NjggTDAuMTQyMTM1NjI0LDIxLjc4OTE5NDQgQzAuMTQyMTM1NjI0LDIyLjQzODk0MTIgMC40MDU0OTc1MzYsMjMuMDI3MTc2NSAwLjgzMTI5NjEzOSwyMy40NTI5NzUxIEMxLjI1NzA5NDc0LDIzLjg3ODc3MzcgMS44NDUzMzAwNCwyNC4xNDIxMzU2IDIuNDk1MDc2OCwyNC4xNDIxMzU2IEwxNy43ODkxOTQ0LDI0LjE0MjEzNTYgQzE5LjA4ODY4OCwyNC4xNDIxMzU2IDIwLjE0MjEzNTYsMjMuMDg4Njg4IDIwLjE0MjEzNTYsMjEuNzg5MTk0NCBDMjAuMTQyMTM1NiwyMC40ODk3MDA5IDE5LjA4ODY4OCwxOS40MzYyNTMzIDE3Ljc4OTE5NDQsMTkuNDM2MjUzMyBMNC44NDgwMTc5OCwxOS40MzYyNTMzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMTQyMTM2LCAxNC4xNDIxMzYpIHNjYWxlKC0xLCAxKSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuMTQyMTM2LCAtMTQuMTQyMTM2KSAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\"); }\n  .c-pagination__link--next:hover {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMTcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9DaGV2cm9uL0dyZXk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQnV0dG9ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkJ1dHRvbnMvQ2lyY2xlL1NlY29uZGFyeS1ob3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3LjAwMDAwMCwgLTIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iSWNvbnMvQ2hldnJvbi9MZWZ0L0xpZ2h0LUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljg0ODAxNzk4LDE5LjQzNjI1MzMgTDQuODQ4MDE3OTgsNi40OTUwNzY4IEM0Ljg0ODAxNzk4LDUuMTk1NTgzMjcgMy43OTQ1NzAzMyw0LjE0MjEzNTYyIDIuNDk1MDc2OCw0LjE0MjEzNTYyIEwyLjQ5NTA3NjgsNC4xNDIxMzU2MiBMMi40OTUwNzY4LDQuMTQyMTM1NjIgQzEuMTk1NTgzMjcsNC4xNDIxMzU2MiAwLjE0MjEzNTYyNCw1LjE5NTU4MzI3IDAuMTQyMTM1NjI0LDYuNDk1MDc2OCBMMC4xNDIxMzU2MjQsNi40OTUwNzY4IEwwLjE0MjEzNTYyNCwyMS43ODkxOTQ0IEMwLjE0MjEzNTYyNCwyMi40Mzg5NDEyIDAuNDA1NDk3NTM2LDIzLjAyNzE3NjUgMC44MzEyOTYxMzksMjMuNDUyOTc1MSBDMS4yNTcwOTQ3NCwyMy44Nzg3NzM3IDEuODQ1MzMwMDQsMjQuMTQyMTM1NiAyLjQ5NTA3NjgsMjQuMTQyMTM1NiBMMTcuNzg5MTk0NCwyNC4xNDIxMzU2IEMxOS4wODg2ODgsMjQuMTQyMTM1NiAyMC4xNDIxMzU2LDIzLjA4ODY4OCAyMC4xNDIxMzU2LDIxLjc4OTE5NDQgQzIwLjE0MjEzNTYsMjAuNDg5NzAwOSAxOS4wODg2ODgsMTkuNDM2MjUzMyAxNy43ODkxOTQ0LDE5LjQzNjI1MzMgTDQuODQ4MDE3OTgsMTkuNDM2MjUzMyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjE0MjEzNiwgMTQuMTQyMTM2KSBzY2FsZSgtMSwgMSkgcm90YXRlKC0zMTUuMDAwMDAwKSB0cmFuc2xhdGUoLTEwLjE0MjEzNiwgLTE0LjE0MjEzNikgIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\"); }\n  .c-pagination__link--next:disabled {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMTcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9DaGV2cm9uL0dyZXk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQnV0dG9ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkJ1dHRvbnMvQ2lyY2xlL1RlcnRpYXJ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjcuMDAwMDAwLCAtMjEuMDAwMDAwKSIgZmlsbD0iI0NDQ0NDQyI+CiAgICAgICAgICAgIDxnIGlkPSJJY29ucy9DaGV2cm9uL0xlZnQvTGlnaHQtZ3JleS1Db3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjAwMDAwMCwgMjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNC44NDgwMTc5OCwxOS40MzYyNTMzIEw0Ljg0ODAxNzk4LDYuNDk1MDc2OCBDNC44NDgwMTc5OCw1LjE5NTU4MzI3IDMuNzk0NTcwMzMsNC4xNDIxMzU2MiAyLjQ5NTA3NjgsNC4xNDIxMzU2MiBMMi40OTUwNzY4LDQuMTQyMTM1NjIgTDIuNDk1MDc2OCw0LjE0MjEzNTYyIEMxLjE5NTU4MzI3LDQuMTQyMTM1NjIgMC4xNDIxMzU2MjQsNS4xOTU1ODMyNyAwLjE0MjEzNTYyNCw2LjQ5NTA3NjggTDAuMTQyMTM1NjI0LDYuNDk1MDc2OCBMMC4xNDIxMzU2MjQsMjEuNzg5MTk0NCBDMC4xNDIxMzU2MjQsMjIuNDM4OTQxMiAwLjQwNTQ5NzUzNiwyMy4wMjcxNzY1IDAuODMxMjk2MTM5LDIzLjQ1Mjk3NTEgQzEuMjU3MDk0NzQsMjMuODc4NzczNyAxLjg0NTMzMDA0LDI0LjE0MjEzNTYgMi40OTUwNzY4LDI0LjE0MjEzNTYgTDE3Ljc4OTE5NDQsMjQuMTQyMTM1NiBDMTkuMDg4Njg4LDI0LjE0MjEzNTYgMjAuMTQyMTM1NiwyMy4wODg2ODggMjAuMTQyMTM1NiwyMS43ODkxOTQ0IEMyMC4xNDIxMzU2LDIwLjQ4OTcwMDkgMTkuMDg4Njg4LDE5LjQzNjI1MzMgMTcuNzg5MTk0NCwxOS40MzYyNTMzIEw0Ljg0ODAxNzk4LDE5LjQzNjI1MzMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4xNDIxMzYsIDE0LjE0MjEzNikgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMzE1LjAwMDAwMCkgdHJhbnNsYXRlKC0xMC4xNDIxMzYsIC0xNC4xNDIxMzYpICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\"); }\n\n.c-pagination__link--prev {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMTYgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9DaGV2cm9uL0dyZXk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQnV0dG9ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkJ1dHRvbnMvQ2lyY2xlL1NlY29uZGFyeSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTIxLjAwMDAwMCkiIGZpbGw9IiM5OTk5OTkiPgogICAgICAgICAgICA8ZyBpZD0iSWNvbnMvQ2hldnJvbi9MZWZ0L0dyZXkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjAwMDAwMCwgMjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuODQ4MDE4LDE5LjQzNjI1MzMgTDEyLjg0ODAxOCw2LjQ5NTA3NjggQzEyLjg0ODAxOCw1LjE5NTU4MzI3IDExLjc5NDU3MDMsNC4xNDIxMzU2MiAxMC40OTUwNzY4LDQuMTQyMTM1NjIgTDEwLjQ5NTA3NjgsNC4xNDIxMzU2MiBMMTAuNDk1MDc2OCw0LjE0MjEzNTYyIEM5LjE5NTU4MzI3LDQuMTQyMTM1NjIgOC4xNDIxMzU2Miw1LjE5NTU4MzI3IDguMTQyMTM1NjIsNi40OTUwNzY4IEw4LjE0MjEzNTYyLDYuNDk1MDc2OCBMOC4xNDIxMzU2MiwyMS43ODkxOTQ0IEM4LjE0MjEzNTYyLDIyLjQzODk0MTIgOC40MDU0OTc1NCwyMy4wMjcxNzY1IDguODMxMjk2MTQsMjMuNDUyOTc1MSBDOS4yNTcwOTQ3NCwyMy44Nzg3NzM3IDkuODQ1MzMwMDQsMjQuMTQyMTM1NiAxMC40OTUwNzY4LDI0LjE0MjEzNTYgTDI1Ljc4OTE5NDQsMjQuMTQyMTM1NiBDMjcuMDg4Njg4LDI0LjE0MjEzNTYgMjguMTQyMTM1NiwyMy4wODg2ODggMjguMTQyMTM1NiwyMS43ODkxOTQ0IEMyOC4xNDIxMzU2LDIwLjQ4OTcwMDkgMjcuMDg4Njg4LDE5LjQzNjI1MzMgMjUuNzg5MTk0NCwxOS40MzYyNTMzIEwxMi44NDgwMTgsMTkuNDM2MjUzMyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LjE0MjEzNiwgMTQuMTQyMTM2KSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTguMTQyMTM2LCAtMTQuMTQyMTM2KSAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\"); }\n  .c-pagination__link--prev:hover {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMTYgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9DaGV2cm9uL0dyZXk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQnV0dG9ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkJ1dHRvbnMvQ2lyY2xlL1NlY29uZGFyeS1ob3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iSWNvbnMvQ2hldnJvbi9MZWZ0L0xpZ2h0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyLjg0ODAxOCwxOS40MzYyNTMzIEwxMi44NDgwMTgsNi40OTUwNzY4IEMxMi44NDgwMTgsNS4xOTU1ODMyNyAxMS43OTQ1NzAzLDQuMTQyMTM1NjIgMTAuNDk1MDc2OCw0LjE0MjEzNTYyIEwxMC40OTUwNzY4LDQuMTQyMTM1NjIgTDEwLjQ5NTA3NjgsNC4xNDIxMzU2MiBDOS4xOTU1ODMyNyw0LjE0MjEzNTYyIDguMTQyMTM1NjIsNS4xOTU1ODMyNyA4LjE0MjEzNTYyLDYuNDk1MDc2OCBMOC4xNDIxMzU2Miw2LjQ5NTA3NjggTDguMTQyMTM1NjIsMjEuNzg5MTk0NCBDOC4xNDIxMzU2MiwyMi40Mzg5NDEyIDguNDA1NDk3NTQsMjMuMDI3MTc2NSA4LjgzMTI5NjE0LDIzLjQ1Mjk3NTEgQzkuMjU3MDk0NzQsMjMuODc4NzczNyA5Ljg0NTMzMDA0LDI0LjE0MjEzNTYgMTAuNDk1MDc2OCwyNC4xNDIxMzU2IEwyNS43ODkxOTQ0LDI0LjE0MjEzNTYgQzI3LjA4ODY4OCwyNC4xNDIxMzU2IDI4LjE0MjEzNTYsMjMuMDg4Njg4IDI4LjE0MjEzNTYsMjEuNzg5MTk0NCBDMjguMTQyMTM1NiwyMC40ODk3MDA5IDI3LjA4ODY4OCwxOS40MzYyNTMzIDI1Ljc4OTE5NDQsMTkuNDM2MjUzMyBMMTIuODQ4MDE4LDE5LjQzNjI1MzMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4xNDIxMzYsIDE0LjE0MjEzNikgcm90YXRlKC0zMTUuMDAwMDAwKSB0cmFuc2xhdGUoLTE4LjE0MjEzNiwgLTE0LjE0MjEzNikgIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\"); }\n  .c-pagination__link--prev:disabled {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMTYgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9DaGV2cm9uL0dyZXk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQnV0dG9ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkJ1dHRvbnMvQ2lyY2xlL1RlcnRpYXJ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUuMDAwMDAwLCAtMjEuMDAwMDAwKSIgZmlsbD0iI0NDQ0NDQyI+CiAgICAgICAgICAgIDxnIGlkPSJJY29ucy9DaGV2cm9uL0xlZnQvTGlnaHQtZ3JleSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi44NDgwMTgsMTkuNDM2MjUzMyBMMTIuODQ4MDE4LDYuNDk1MDc2OCBDMTIuODQ4MDE4LDUuMTk1NTgzMjcgMTEuNzk0NTcwMyw0LjE0MjEzNTYyIDEwLjQ5NTA3NjgsNC4xNDIxMzU2MiBMMTAuNDk1MDc2OCw0LjE0MjEzNTYyIEwxMC40OTUwNzY4LDQuMTQyMTM1NjIgQzkuMTk1NTgzMjcsNC4xNDIxMzU2MiA4LjE0MjEzNTYyLDUuMTk1NTgzMjcgOC4xNDIxMzU2Miw2LjQ5NTA3NjggTDguMTQyMTM1NjIsNi40OTUwNzY4IEw4LjE0MjEzNTYyLDIxLjc4OTE5NDQgQzguMTQyMTM1NjIsMjIuNDM4OTQxMiA4LjQwNTQ5NzU0LDIzLjAyNzE3NjUgOC44MzEyOTYxNCwyMy40NTI5NzUxIEM5LjI1NzA5NDc0LDIzLjg3ODc3MzcgOS44NDUzMzAwNCwyNC4xNDIxMzU2IDEwLjQ5NTA3NjgsMjQuMTQyMTM1NiBMMjUuNzg5MTk0NCwyNC4xNDIxMzU2IEMyNy4wODg2ODgsMjQuMTQyMTM1NiAyOC4xNDIxMzU2LDIzLjA4ODY4OCAyOC4xNDIxMzU2LDIxLjc4OTE5NDQgQzI4LjE0MjEzNTYsMjAuNDg5NzAwOSAyNy4wODg2ODgsMTkuNDM2MjUzMyAyNS43ODkxOTQ0LDE5LjQzNjI1MzMgTDEyLjg0ODAxOCwxOS40MzYyNTMzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMTQyMTM2LCAxNC4xNDIxMzYpIHJvdGF0ZSgtMzE1LjAwMDAwMCkgdHJhbnNsYXRlKC0xOC4xNDIxMzYsIC0xNC4xNDIxMzYpICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\"); }\n");

var Pagination = function Pagination(_ref) {
  var className = _ref.className,
      linkNextHref = _ref.linkNextHref,
      linkNextLabel = _ref.linkNextLabel,
      linkPrevHref = _ref.linkPrevHref,
      linkPrevLabel = _ref.linkPrevLabel,
      pageCurrent = _ref.pageCurrent,
      pageMax = _ref.pageMax;

  var classNames = classnames('c-pagination', className);
  var nextLinkclassNames = classnames({
    'c-pagination__link': true,
    'c-pagination__link--next': true,
    'c-pagination__link--disabled': pageCurrent === pageMax
  });
  var PrevLinkclassNames = classnames({
    'c-pagination__link': true,
    'c-pagination__link--prev': true,
    'c-pagination__link--disabled': pageCurrent === 1
  });

  return React.createElement(
    'div',
    { className: classNames },
    React.createElement(
      Link$1,
      { className: PrevLinkclassNames, to: linkPrevHref },
      React.createElement(
        'span',
        { className: 'u-hidden' },
        linkPrevLabel
      )
    ),
    React.createElement(
      'span',
      { className: 'c-pagination__label' },
      'Page ',
      pageCurrent,
      ' of ',
      pageMax
    ),
    React.createElement(
      Link$1,
      { className: nextLinkclassNames, to: linkNextHref },
      React.createElement(
        'span',
        { className: 'u-hidden' },
        linkNextLabel
      )
    )
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  linkNextDestination: PropTypes.string.isRequired,
  linkNextLabel: PropTypes.string.isRequired,
  linkPrevDestination: PropTypes.string.isRequired,
  linkPrevLabel: PropTypes.string.isRequired,
  pageCurrent: PropTypes.number.isRequired,
  pageMax: PropTypes.number.isRequired
};

export { Button, Link$1 as Link, Pagination };