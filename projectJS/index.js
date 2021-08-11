const electron = require('electron');
const {removeClassFromElement, hasClass, addClassToElement} = require('./projectJS/utils.js');
electron.ipcRenderer.on('toggle-dark-mode', (event, args) => {
    const body = document.body;
    console.log("Dark mode toggled");
    console.log("hasClass : " + hasClass(body, 'night'));
    if(hasClass(body, 'night')) {
        removeClassFromElement(body, 'night');
        removeClassFromElement(document.getElementsByTagName('menu'), 'night');
        removeClassFromElement(document.getElementsByTagName('menuitem'), 'night');
    }
    else {
        addClassToElement(body, 'night');
        addClassToElement(document.getElementsByTagName('menu'), 'night');
        addClassToElement(document.getElementsByTagName('menuitem'), 'night');
    }

})