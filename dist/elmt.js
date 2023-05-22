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
