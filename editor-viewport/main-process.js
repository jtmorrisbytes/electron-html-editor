/*
main-lib/editor-viewport.js

this Module to be used by election main process;

the purpose of this module is to facilitate communication between the browser and the main process
*/



const ipcMain = require("electron").ipcMain;
const editorViewportChannel = require("./common").channel

console.log()




                ipcMain.on(editorViewportChannel,function (EditorViewportEvent,args){
            console.log(EditorViewportEvent,args)
        })

