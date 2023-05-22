/**
 * Creates a new HTML element.
 * @param tagName The new HTML element's tag name.
 * @param params The new HTML element's children and attributes.
 * @returns The new HTML element
 */
export default function elmt(document: Document, tagName: keyof HTMLElementTagNameMap, ...params: ElmtParam[]): HTMLElement;
/**
 * Denotes the types that can be passed to the `elmt` function after the `tagName`
 */
export type ElmtParam = string | Node;
