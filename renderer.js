// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const EditorViewport = require("./editor-viewport/renderer-process")
window.addEventListener("DOMContentLoaded",
    function placeEditorViewportIntoDOM(event){

        let placeholder = document.getElementById('editor-viewport');
        let EditorViewport = document.createElement('editor-viewport')
        if(placeholder) {
            placeholder.parentNode.replaceChild(EditorViewport, placeholder)
        }
        else {
            console.error("failed to place editor viewport",this)
        }
    }

)
window.addEventListener()