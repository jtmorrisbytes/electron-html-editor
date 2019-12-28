
class GridElement extends Object {
    constructor()
}


class GridLayout extends HTMLElement {
    static tagName = 'grid-layout'
    numColumns = 1
    numRows = 1
    constructor() {
        super()
    }
    connectedCallback() {

    }
}

/* 
   if both window.customElements.define and window.customElements.get are present
   use window.customElements.get to check if the element has already been defined
   in the web browser to prevent it from being redefined if its imported later
 */

if ((((window || {}).customElements || {}).define) && ((window || {}).customElements || {}).get) {
    if(!window.customElements.get(GridLayout.tagName)) {
        window.customElements.define(GridLayout.tagName, GridLayout)

    }
}


if ((module || {}).exports) {
    module.exports = {
        GridLayout,
        default:GridLayout
    }
}