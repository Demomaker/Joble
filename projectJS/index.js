const electron = require('electron');
const {removeClassFromElement, removeClassFromElements, hasClass, addClassToElement, addClassToElements, setIdToElement} = require('./projectJS/utils.js');

function init() {
    createMenu();
    applyInitialColorMode();
}

function applyInitialColorMode() {
    const body = document.body;
    addClassToElement(body, 'night');
    addClassToAllChildrenOf(body, 'night');
}

function toggleChildDropdown(menuItemDiv) {
    const itemsToToggle = [];
    for(let i = 0; i < menuItemDiv.children.length; i++) {
        if(hasClass(menuItemDiv.children[i],'dropdown-content')) {
            itemsToToggle.push(menuItemDiv.children[i]);
        }
    }
    if(itemsToToggle.length <= 0) return;
    if(hasClass(itemsToToggle[0], 'show')) {
        removeClassFromElements(itemsToToggle, 'show');
    }
    else {
        addClassToElements(itemsToToggle, 'show');
    }
}

function unfocusDropdown(menuItemDiv) {
    const itemsToToggle = [];
    for(let i = 0; i < menuItemDiv.children.length; i++) {
        if(hasClass(menuItemDiv.children[i],'dropdown-content')) {
            itemsToToggle.push(menuItemDiv.children[i]);
        }
    }
    if(itemsToToggle.length <= 0) return;
        removeClassFromElements(itemsToToggle, 'show');
}

function addClassToAllChildrenOf(element, className) {
    for(let i = 0; i < element.children.length; i++) {
        if(element.children[i].children.length > 0) {
            addClassToAllChildrenOf(element.children[i], className);
        }
        addClassToElement(element.children[i], className);
    }

}

function removeClassFromAllChildrenOf(element, className) {
    for(let i = 0; i < element.children.length; i++) {
        if(element.children[i].children.length > 0) {
            removeClassFromAllChildrenOf(element.children[i], className);
        }
        removeClassFromElement(element.children[i], className);
    }
}

function toggleDarkMode() {
    const body = document.body;
    if(hasClass(body, 'night')) {
        addClassToElement(body, 'day');
        addClassToAllChildrenOf(body, 'day');
        removeClassFromElement(body, 'night');
        removeClassFromAllChildrenOf(body, 'night');
    }
    else if(hasClass(body, 'day')) {
        addClassToElement(body, 'night');
        addClassToAllChildrenOf(body, 'night');
        removeClassFromElement(body, 'day');
        removeClassFromAllChildrenOf(body, 'day');
    }
}

function createMenu() {
    const body = document.body;
    const menuDiv = document.createElement('div');
    const menuItemDiv = document.createElement('div');
    const menuItemButton = document.createElement('button');
    const menuItemText = document.createTextNode('Preferences');
    const menuItemSubItemContainerDiv = document.createElement('div');
    const menuItemSubItemDiv = document.createElement('div');
    const menuItemSubItemButton = document.createElement('button');
    const menuItemSubItemText = document.createTextNode('Toggle Darkmode');

    addClassToElement(menuItemSubItemButton, 'dropdown-item-button');
    addClassToElement(menuItemSubItemDiv, 'dropdown-item');
    addClassToElement(menuItemSubItemContainerDiv, 'dropdown-content');
    addClassToElement(menuItemButton, 'dropbtn');
    addClassToElement(menuItemDiv, 'dropdown');
    setIdToElement(menuDiv, 'navmenu');
    addClassToElement(menuDiv, 'menu');

    menuItemSubItemButton.onclick = toggleDarkMode;
    menuItemSubItemButton.appendChild(menuItemSubItemText);
    menuItemSubItemDiv.appendChild(menuItemSubItemButton);
    menuItemSubItemContainerDiv.appendChild(menuItemSubItemButton);
    menuItemButton.onclick = () => toggleChildDropdown(menuItemDiv);
    menuItemButton.appendChild(menuItemText);
    menuItemDiv.appendChild(menuItemButton);
    menuItemDiv.appendChild(menuItemSubItemContainerDiv);
    menuDiv.appendChild(menuItemDiv);
    body.appendChild(menuDiv);
}

electron.ipcRenderer.on('toggle-dark-mode', (event, args) => {
    const body = document.body;
    if(hasClass(body, 'night')) {
        addClassToElement(body, 'day');
        addClassToAllChildrenOf(body, 'day');
        removeClassFromElement(body, 'night');
        removeClassFromAllChildrenOf(body, 'night');
    }
    else if(hasClass(body, 'day')) {
        addClassToElement(body, 'night');
        addClassToAllChildrenOf(body, 'night');
        removeClassFromElement(body, 'day');
        removeClassFromAllChildrenOf(body, 'day');
    }

})

document.onload = init();