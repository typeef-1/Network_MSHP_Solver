//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//

textNode.addEventListener("input", function () {
  convertNode.value = "";
  let words = textNode.value.split(" ").filter((item) => item != "");
  console.log(words);
  let arr = [[0, 1], [2], [3]];
  let cnt = 0;
  for(let i=0;i<words.length;i++)cnt+=words[i].length;
  for (let i = 2; i <= Math.floor(Math.sqrt(cnt * 2)) + 1; i += 2) {
    // console.log("/////////////////////////");
    // console.log((i));
    // console.log(arr[0][i-1]);
    // console.log((i*2));
    arr[0].push(arr[0][i - 1] + i * 2);
    arr[0].push(arr[0][i] + 1);
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(cnt * 2)) + 1; i += 2) {
    console.log(arr[i - 1][0]);
    arr.push([arr[i - 1][0] + i * 2]);
    arr.push([arr[i][0] + 1]);
  }
  for (let j = 1; j < arr.length; j++) {
    for (let i = 1; i < arr[j - 1].length - 1; i++) {
      if (i % 2 == j % 2) {
        arr[j].push(arr[j - 1][i + 1] - 1);
      } else {
        arr[j].push(arr[j - 1][i + 1] + 1);
      }
    }
  }
  console.log(arr);
  let arr_lett = [];
  for (let i = 0; i < arr.length; i++) {
    arr_lett.push([]);
    for (let j = 0; j < arr[i].length; j++) arr_lett[i].push(arr[i][j]);
  }
  for (let j = 0; j < words.length; j++) {
    for (let i = 0; i < words[j].length; i++) {
      arr_lett[j][i] = words[j][i];
    }
  }
  console.log(arr_lett);
  let word = "";
  console.log(cnt);
  for (let i = 0; i < cnt; i++) {
    let ind=-1, jnd=-1;
    for (let j = 0; j < arr.length&&jnd==-1; j++){
      jnd=arr[j].indexOf(i);
      if(jnd!==-1)ind=j;
    }
    if(ind!=-1&&jnd!=-1){
      word+=arr_lett[ind][jnd];
    }
  }

  convertNode.value=word;
  console.log(word);
});

convertNode.addEventListener("input", function () {
  textNode.value = "";
  let arr = [[0, 1], [2], [3]];
  let cnt=convertNode.value.length;
  for (let i = 2; i <= Math.floor(Math.sqrt(cnt * 2)) + 1; i += 2) {
    arr[0].push(arr[0][i - 1] + i * 2);
    arr[0].push(arr[0][i] + 1);
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(cnt * 2)) + 1; i += 2) {
    arr.push([arr[i - 1][0] + i * 2]);
    arr.push([arr[i][0] + 1]);
  }
  for (let j = 1; j < arr.length; j++) {
    for (let i = 1; i < arr[j - 1].length - 1; i++) {
      if (i % 2 == j % 2) {
        arr[j].push(arr[j - 1][i + 1] - 1);
      } else {
        arr[j].push(arr[j - 1][i + 1] + 1);
      }
    }
  }
  let arr_lett = [];
  for (let i = 0; i < arr.length; i++) {
    arr_lett.push([]);
    for (let j = 0; j < arr[i].length; j++) arr_lett[i].push(arr[i][j]);
  }
  for (let i = 0; i < cnt; i++) {
    let ind=-1, jnd=-1;
    for (let j = 0; j < arr.length&&jnd==-1; j++){
      jnd=arr[j].indexOf(i);
      if(jnd!==-1)ind=j;
    }
    if(ind!=-1&&jnd!=-1){
      arr_lett[ind][jnd]=convertNode.value[i];
    }
  }
  for (let i = 0; i < arr_lett.length; i++) {
    let n=0;
    for (let j = 0; j < arr_lett[i].length; j++) {
      if(typeof(arr_lett[i][j])=="string"){
        textNode.value+=arr_lett[i][j];
        n++;
      }
    }
    if(n!=0)textNode.value+=" ";
  }


  console.log(arr_lett);
  console.log(arr);
});
