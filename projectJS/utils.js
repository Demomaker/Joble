function removeClassFromElement(element, className) {
    const re = new RegExp(`${className}`,"g");
    element.className = element.className.replace(re, '');
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
function addClassToElement(element, className) {
    element.className += " " + className;
}

module.exports = {removeClassFromElement, hasClass, addClassToElement};