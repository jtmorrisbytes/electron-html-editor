/*
    Layout manager:

    This compoenent will help create and manage layout grids
    using css grid!




*/

// HTMLElement may not be availible when being imported into the main thread, watch for this error!

class Layout extends HTMLElement {
    // Need a container to put the layout in
    static tagName = 'layout'
    type = "grid"

    constructor(options = {}) {
        if (!options) {
            //if options were not passed into consructor
            // console.error(`Class ${this.className}`)
        }
        else if (options.type == 'grid') {
            //grid layout
        }
        else if (options.type = '')

    }
    connectedCallback(){
        
    }
    disconnectedCallback(){

    }
}