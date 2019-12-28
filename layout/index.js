/*
    Layout manager:

    This compoenent will help create and manage layout grids
    using css grid!




*/

// HTMLElement may not be availible when being imported into the main thread, watch for this error!

class Layout extends HTMLElement {
    // Need a container to put the layout in
    static tagName = 'x-layout'
    defaultLayout = "grid"
    layout;
    classDescString = `Class ${this.className} `
    validLayoutTypes = ['grid', 'flex']
    constructor(options = {}) {
        super()
        // ensure all options are present before validation

        if(!options.type) {
            if(this.hasAttribute('type')) {
                options.type = this.getAttribute('type')
            }
            else {
                options.type = this.defaultLayout
            }
        }
        if(!this.validLayoutTypes.includes(options.type)) {
            throw new Error(this.classDescString.concat(`got invalid value ${options.type} for argument 'type'`))
        }

    }
    connectedCallback(){
        document.addEventListener('DOMContentLoaded',(event)=>{
            this.style.display = this.layout;
            this.style.backgroundColor = "black"
        })
        
        console.log("A layout was connected to the DOM")
        
    }
    disconnectedCallback(){

    }
}

// if being called from the browser render process,
// add the element to customElements
if (((window || {}).customElements || {}).define) {
    window.customElements.define(Layout.tagName,Layout)
}


// add to module.exports if availible

if((module || {}).exports) {
    module.exports = {
        default: layout,
        layout,
        GridLayout: require("./grid").GridLayout
    }
}
else {
    // try {
    //     export default Layout
    // }
    // catch {
    //     //swallow error
    // }
}