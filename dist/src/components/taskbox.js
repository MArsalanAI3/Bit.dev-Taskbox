"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tasks() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("section", {
    className: "tasks"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "tasks-header"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "tasks-title"
  }, "Tasks"), /*#__PURE__*/_react.default.createElement("a", {
    href: "index.html",
    className: "tasks-lists"
  }, "Lists")), /*#__PURE__*/_react.default.createElement("fieldset", {
    className: "tasks-list"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "tasks-list-item"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "task_1",
    defaultValue: 1,
    className: "tasks-list-cb",
    defaultChecked: true
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "tasks-list-mark"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "tasks-list-desc"
  }, "Check This")), /*#__PURE__*/_react.default.createElement("label", {
    className: "tasks-list-item"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "task_2",
    defaultValue: 1,
    className: "tasks-list-cb",
    defaultChecked: true
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "tasks-list-mark"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "tasks-list-desc"
  }, "Then This")), /*#__PURE__*/_react.default.createElement("label", {
    className: "tasks-list-item"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "task_3",
    defaultValue: 1,
    className: "tasks-list-cb"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "tasks-list-mark"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "tasks-list-desc"
  }, "And Go!")))));
}

var _default = tasks;
exports.default = _default;

//# sourceMappingURL=taskbox.js.map