export const createParagraph = function(text) {
    const newPara = document.createElement("p");
    newPara.className = "paragraph";
    newPara.textContent = text;
    return newPara;
}

export const createHeading = function(text) {
    const newHeading = document.createElement("h2");
    newHeading.className = "heading";
    newHeading.textContent = text;
    return newHeading;
}

export const resetContent = function(tabName) {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.className = `${tabName}`;
}

export const createDiv = function(name) {
    const newDiv = document.createElement("div");
    newDiv.className = name;
    return newDiv;
}

export const appendChildAll = function(parent, ...children) {
    children.forEach((element) => {
        parent.appendChild(element);
    });
}

export const appendToContent = function(...elements) {
    const content = document.getElementById("content");
    elements.forEach((element) => {
        content.appendChild(element);
    });
}

export const createImg = function(url, id) {
    const newImg = document.createElement("img");
    newImg.src = url;
    newImg.id = id;
    newImg.className = "content-img";
    return newImg;
}

export const activateTab = function(tabId) {
    Array.from(document.querySelectorAll("button.tab")).forEach((button) => {
        if (button.id !== tabId) {
            button.className = "tab";
        }
        else {
            button.className = "tab active-tab";
        }
    });
}

export const createLinkTag = function(url) {
    const linkTag = document.createElement("a");
    linkTag.href = url;
    linkTag.rel = "noopener noreferrer";
    return linkTag;
}