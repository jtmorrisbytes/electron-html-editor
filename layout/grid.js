

/*
  RegEx for GridLine:
    /(\d*\.?\d+)\s?(px|em|ex|%|in|cn|mm|pt|pc+)/igm
    credits https://regexr.com/39424

*/



class GridLine extends Object {
    static defaultWidth = 'auto'
    name;
    width= 'auto';
    minWidth;
    unit;
    supportedUnits = ['em', 'rm', 'px', '%']
    
    constructor(width) {
        super()
        if (!width) {
            throw TypeError("Class GridLine requires argument width, got:", width)
        }
        else if(width === 'auto' ) {
            this.width = width
        }
        else {
            var re = new RegExp(/(\d*\.?\d+)\s?(px|em|ex|%|in|cn|mm|pt|pc+)/igm)
            var match = re.exec(width)
            this.width = match[1]
            this.unit = match[2]
        }
        
    }
    getCssWidth() {
        if (this.width ==='auto') {
            return this.width;
        }
        else {
            return String(this.width).concat(this.unit)
        }
    }
}


class GridLayout extends HTMLElement {
    static tagName = 'grid-layout'
    numColumns = 1
    numRows = 1
    rows = [new GridLine('auto')]
    columns = [new GridLine('auto')]
    constructor() {
        super()

            this.numColumns = Number(this.getAttribute('numColumns')) || this.numColumns
            this.numRows = Number(this.getAttribute('numRows')) || this.numRows
            console.log("Grid Layout is being constructed")
    }
    setDefaultStyles() {
        this.style.width = "100%"
        this.style.height = "100%"
        this.style.display = "grid"
    }
    initGrid() {
        console.log("initGrid")
        // init the rows
        this.style.gridTemplateRows = "";
        for (var rowNum = 0; rowNum < this.rows.length; rowNum++) {
            this.style.gridTemplateRows = this.style.gridTemplateRows.concat(`${this.rows[rowNum].getCssWidth() }`)
            console.log("CssRows Build Progress: ",rowNum,this.style.gridTemplateRows)
        }

        this.style.gridTemplateColumns = "";
        for (var columnNum = 0; columnNum < this.rows.length; columnNum++) {
            this.style.gridTemplateColumns = this.style.gridTemplateColumns.concat(`${this.rows[columnNum].getCssWidth() }`)
            console.log("CssColumns Build Progress: ",columnNum,this.style.gridTemplateColumns)
        }
        // init the columns
        console.log("initColumns:", String(this.style.gridTemplateColumns))



        // this.style.gridTemplateRows = 
        // `${this.rows[0].getCssWidth()} \
        //  ${this.rows[n].getCssWidth()}
        // `
    }
    connectedCallback() {

        window.addEventListener('DOMContentLoaded', this.setDefaultStyles.bind(this))
        window.addEventListener("DOMContentLoaded", this.initGrid.bind(this))

        console.log("grid style:", window.getComputedStyle(this).gridTemplateRows)

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