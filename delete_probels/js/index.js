//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//

textNode.addEventListener("input", function () {
  let cleanedText = textNode.value.replaceAll(" ", "");
  convertNode.value = cleanedText;
});
