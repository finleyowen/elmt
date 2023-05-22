"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const document = new jsdom_1.JSDOM().window.document;
const elmt_1 = __importDefault(require("../elmt"));
const elmt = (tagName, ...params) => (0, elmt_1.default)(document, tagName, ...params);
test('Hello world', () => {
    expect(elmt('h1', 'Hello, world!').outerHTML).toBe('<h1>Hello, world!</h1>');
});
