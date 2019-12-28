/*
 This module is to be used inside the browser space


*/
const ipcRenderer = require("electron").ipcRenderer
const editorViewportChannel = require("./common").channel
const event = {
    EditorViewportConstructed: 'editor-viewport-constructed'
}
class EditorViewport extends HTMLElement {
    static tagName = 'editor-viewport'
    constructor(){
        super()
        ipcRenderer.send(editorViewportChannel,{eventName:event.EditorViewportConstructed})
        console.log("Editor viewport is being constructed")
    }
    connectedCallback() {
        console.log("viewport is being connected to the DOM")
    }
}
// place the custom element on the window
if(((window || {}).customElements || {}).define) {
    window.customElements.define(EditorViewport.tagName, EditorViewport)
}
else {
    console.error("Error while placing EditorViewport into the custom Elements registry: \
    function window.customElements.define() was not found")
}




// set module.exports if being called from nodejs
if (module || {}.exports) {
    module.exports = EditorViewport
}