function replaceFromTo(str, firstIndex, secondIndex, replacement) {
    retStr = "";
    for(let i = 0; i < str.length; i++) {
        if(i == firstIndex) {
            retStr = retStr + replacement;
        }
        else if(i > secondIndex || i < firstIndex) {
            retStr = retStr + str[i];
        }
    }
    return retStr;
}

function splitString(str, character) {
    array = [];
    let modifiableStr = str;
    let i = 0;
    while(i < modifiableStr.length) {
        if(modifiableStr[i] == character) {
            let split = replaceFromTo(modifiableStr, i, modifiableStr.length-1, "");
            modifiableStr = replaceFromTo(modifiableStr, 0, i, "");
            if(split !== "") {
                array.push(split);
            }
            i = 0;
        }
        else {
            i++;
        }
    }
    if(i === modifiableStr.length && modifiableStr.length !== 0) {
        array.push(modifiableStr);
    }
    return array;
}

function removeClassFromElement(element, className) {
    let classToReplace = className;
    const splitStr = splitString(element.className, " ");
    console.log(splitStr);
    if(element.className !== "" && splitStr.length > 1) {
        if(splitStr[0] === className) {
            classToReplace = className + " ";
        }
        else {
            classToReplace = " " + className;
        }
    }
    element.className = element.className.replace(classToReplace, '');
}

function removeClassFromElements(elements, className) {
    for(let i = 0; i < elements.length; i++) {
        removeClassFromElement(elements[i], className);
    }
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
function addClassToElement(element, className) {
    let newClassName = className;
    if((element.className !== undefined && element.className.trim() !== "") || element.className.length > 0) {
        newClassName = " " + className;
    }
    element.className += newClassName;
}

function addClassToElements(elements, className) {
    for(let i = 0; i < elements.length; i++) {
        addClassToElement(elements[i], className);
    }
}

function setIdToElement(element, id) {
    element.id = id;
}

module.exports = {removeClassFromElement, removeClassFromElements, hasClass, addClassToElement, addClassToElements, setIdToElement};