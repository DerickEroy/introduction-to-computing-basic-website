export const toHTMLElement = (str) => {
    const template = document.createElement('template');
    template.innerHTML = str.trim();
    return template.content.firstElementChild;
}