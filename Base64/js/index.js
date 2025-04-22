//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//текст в base64
textNode.addEventListener("input", function () {
  convertNode.value=window.btoa(unescape(encodeURIComponent(textNode.value)));
});

convertNode.addEventListener("input", function () {
  textNode.value = decodeURIComponent(escape(window.atob(convertNode.value)));
});