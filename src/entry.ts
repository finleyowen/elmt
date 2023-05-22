import elmt, { ElmtParam } from './elmt'

declare global {
    interface Window {
        elmt: any;
    }
}
window.elmt = (tagName: keyof HTMLElementTagNameMap, ...params: ElmtParam[]) => elmt(document, tagName, ...params)