//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//
let asciiTable=["\x00", "\x01", "\x02", "\x03", "\x04", "\x05", "\x06", "\x07", "\x08", "\x09", "\x0A", "\x0B", "\x0C", "\x0D", "\x0E", "\x0F", "\x10", "\x11", "\x12", "\x13", "\x14", "\x15", "\x16", "\x17", "\x18", "\x19", "\x1A", "\x1B", "\x1C", "\x1D", "\x1E", "\x1F", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "\x7F", "Ђ", "Ѓ", "‚", "ѓ", "„", "…", "†", "‡", "€", "‰", "Љ", "‹", "Њ", "Ќ", "Ћ", "Џ", "ђ", "‘", "’", "“", "”", "•", "–", "—", " ", "™", "љ", "›", "њ", "ќ", "ћ", "џ", " ", "Ў", "ў", "Ј", "¤", "Ґ", "¦", "§", "Ё", "©", "Є", "«", "¬", "­", "®", "Ї", "°", "±", "І", "і", "ґ", "µ", "¶", "·", "ё", "№", "є", "»", "ј", "Ѕ", "ѕ", "ї", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"];


textNode.addEventListener("input", function () {
  convertNode.value="";
  let str="";
  for(let i=0;i<textNode.value.length;i++){
    let deccode= asciiTable.indexOf(textNode.value[i]);
    let bin=deccode.toString(2);
    for(let i=bin.length;i<8;i++)str+="0";
    str+=bin;
  }
  //console.log(str);
  let firstsymb=str[0],symb=str[0],cnt=1,arr=[];
  for(let i=1;i<str.length;i++){
    if(str[i]!=symb){
      arr.push(cnt);
      symb=str[i];
      cnt=1;
    }else{cnt++}
  }
  arr.push(cnt);
  for(let i=0;i<arr.length;i++){
    let str=arr[i].toString(2);
    arr[i]="";
    for(let j=0;j<str.length-1;j++)arr[i]+="0";
    arr[i]+=str;
  }
  //console.log(arr);
  convertNode.value=firstsymb;
  for(let i=0;i<arr.length;i++){
    convertNode.value+=arr[i];
  }
  if(textNode.value=="")convertNode.value="";
});

convertNode.addEventListener("input", function () {
  textNode.value="";
  let str=convertNode.value;
  let firstsymb=str[0];
  str=str.slice(1, str.length);
  let arr=[],q="",cnt=1;
  for(let i=0;i<str.length;i++){
    if(str[i]=="0"){
      cnt++;
    }else{
      //console.log(str[i]+" "+i+" "+cnt)
      while(cnt>0){
        cnt--;
        q+=str[i];
        i++;
      }
      arr.push(q);
      q="";
      cnt=1;
      i--;
    }
  }
  //console.log(arr);
  for(let i=0;i<arr.length;i++){
    arr[i]=parseInt(arr[i],2);
    let string="";
    for(let j=0;j<arr[i];j++){
      if(firstsymb=="0"){
        string+="0";
      }
      else if(firstsymb=="1"){
        string+="1";
      }
    }
    if(firstsymb=="0"){
      firstsymb="1";
    }
    else if(firstsymb=="1"){
      firstsymb="0";
    }
    arr[i]=string;
  }
  let string="";
  for(let i=0;i<arr.length;i++)string+=arr[i];
  console.log(string);
  let arr2=string.match(/.{1,8}/g);
  if(arr2[arr2.length-1].length<8){
    arr2.pop();
  }
  for(let i=0;i<arr2.length;i++){
    arr2[i]=parseInt(arr2[i],2);
    textNode.value+=asciiTable[arr2[i]];
  }
});