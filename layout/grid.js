
class GridLine extends Object {
    name;
    width;
    minWidth;
    units;
    validUnits = ['em', 'rm', 'px', '%']
    
    constructor() {

    }
}


class GridLayout extends HTMLElement {
    static tagName = 'grid-layout'
    numColumns = 1
    defaultNumColumns = 1
    defualtNumRows = 1
    numRows = 1
    constructor() {
        super()

            this.numColumns = Number(this.getAttribute('numColumns')) || this.defaultNumColumns;
            this.numRows = Number(this.getAttribute('numRows')) || this.defualtNumRows;
            console.log("Grid Layout is being constructed")
    }
    setDefaultStyles() {
        this.style.width = "100%"
        this.style.height = "100%"
        this.style.display = "grid"
    }
    connectedCallback() {

        window.addEventListener('DOMContentLoaded', this.setDefaultStyles.bind(this))
        console.log("grid style:", window.getComputedStyle(this))

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