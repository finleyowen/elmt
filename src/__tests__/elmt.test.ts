import { JSDOM } from 'jsdom'
const document = new JSDOM().window.document

import $elmt, { ElmtParam } from '../elmt'
const elmt = (tagName: keyof HTMLElementTagNameMap, ...params: ElmtParam[]) => $elmt(document, tagName, ...params)

test('Hello world', () => {
    expect(
        elmt('h1', 'Hello, world!').outerHTML
    ).toBe('<h1>Hello, world!</h1>')
})