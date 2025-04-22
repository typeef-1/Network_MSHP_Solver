//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//

textNode.addEventListener("input", function () {
  convertNode.value = "";
  let input = "";
  console.log(textNode.value);
  for (let i = 1; i <= textNode.value.length; i++) {
    if (i % 5 != 0) input += textNode.value[i - 1];
  }
  let arr = [[0, 1], [2], [3]];
  let cnt = input.length;
  console.log(input);
  console.log(cnt);
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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= cnt) {
        arr[i].splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
  let arr_lett = [];
  for (let i = 0; i < arr.length; i++) {
    arr_lett.push([]);
    for (let j = 0; j < arr[i].length; j++) arr_lett[i].push(arr[i][j]);
  }
  let index = 0;
  for (let i = 0; i < arr_lett.length; i++) {
    for (let j = 0; j < arr_lett[i].length; j++) {
      arr_lett[i][j] = input[index];
      index++;
    }
  }
  console.log(arr_lett);
  index = 0;
  for(let u=0;u<cnt;u++)
  for (let i = 0; i < arr.length; i++) {
    let ind=-1,jnd=-1;
    for (let j = 0; j < arr[i].length&&jnd==-1; j++) {
      jnd=arr[i].indexOf(u);
      if(jnd!=-1)ind=i;
    }
    if(jnd!=-1)
    convertNode.value+=arr_lett[ind][jnd]
  }
});

convertNode.addEventListener("input", function () {
  textNode.value = "";
  let arr = [[0, 1], [2], [3]];
  let cnt = convertNode.value.length;
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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= cnt) {
        arr[i].splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
  let arr_lett = [];
  for (let i = 0; i < arr.length; i++) {
    arr_lett.push([]);
    for (let j = 0; j < arr[i].length; j++) arr_lett[i].push(arr[i][j]);
  }
  for (let i = 0; i < cnt; i++) {
    let ind = -1,
      jnd = -1;
    for (let j = 0; j < arr.length && jnd == -1; j++) {
      jnd = arr[j].indexOf(i);
      if (jnd !== -1) ind = j;
    }
    if (ind != -1 && jnd != -1) {
      arr_lett[ind][jnd] = convertNode.value[i];
    }
  }
  
  let text="";
  for(let i=0;i<arr_lett.length;i++){
    for(let j=0;j<arr_lett[i].length;j++){
      text+=arr_lett[i][j];
    }
  }
  for(let i=1;i<=text.length;i++){
    textNode.value+=text[i-1];
    if(i%4==0)textNode.value+=" ";
  }
  console.log(text);
  console.log(arr_lett);
  console.log(arr);
});
