//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//

textNode.addEventListener("input", function () {
  convertNode.value="";
  for(let i=textNode.value.length-1;i>=0;i--){
    console.log(textNode.value[i])
    convertNode.value+=textNode.value[i];
  }
});
