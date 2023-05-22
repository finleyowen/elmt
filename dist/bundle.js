(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a new HTML element.
 * @param tagName The new HTML element's tag name.
 * @param params The new HTML element's children and attributes.
 * @returns The new HTML element
 */
function elmt(document, tagName, ...params) {
    var el = document.createElement(tagName);
    params.forEach((param) => {
        el.append(param);
    });
    return el;
}
exports.default = elmt;

},{}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const elmt_1 = __importDefault(require("./elmt"));
window.elmt = (tagName, ...params) => (0, elmt_1.default)(document, tagName, ...params);

},{"./elmt":1}]},{},[2]);
