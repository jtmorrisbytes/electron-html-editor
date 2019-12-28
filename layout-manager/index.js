/*
    Layout manager:

    This compoenent will help create and manage layout grids
    using css grid!




*/

// HTMLElement may not be availible when being imported into the main thread, watch for this error!

class Layout extends HTMLElement {
    // Need a container to put the layout in
    static tagName = 'layout'
    defaultLayout = "grid"
    layout = defaultLayout
    classDescString = `Class ${this.className}  `
    constructor(options = {}) {
        if (!options) {
            //if options were not passed into consructor
            // console.error(`Class ${this.className}`)
            if (!this.hasAttribute("layoutType") && !this.type) {
                console.error(this.classDescString.concat(` requires argument 'layoutType' `))
            }
            else if(this.hasAttribute("layoutType")){
                // this will need validation later!
                this.layout = this.getAttribute("layoutType")
            }
        }
        else if (options.type) {
            switch(options.type) {
                case "grid":
                case "flex":
                    this.layout = options.type
                break;
                default:
                    console.error(this.classDescString.concat(`invalid layout type: '${String(options.type)}'`))
                
            }
        }

    }
    connectedCallback(){
        
    }
    disconnectedCallback(){

    }
}




// add to module.exports if availible

if((module || {}).exports) {
    module.exports = Layout
}
else {
    try {
        export default Layout
    }
    catch {
        //swallow error
    }
}