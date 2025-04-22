//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//
let asciiTable=["\x00", "\x01", "\x02", "\x03", "\x04", "\x05", "\x06", "\x07", "\x08", "\x09", "\x0A", "\x0B", "\x0C", "\x0D", "\x0E", "\x0F", "\x10", "\x11", "\x12", "\x13", "\x14", "\x15", "\x16", "\x17", "\x18", "\x19", "\x1A", "\x1B", "\x1C", "\x1D", "\x1E", "\x1F", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "\x7F", "Ђ", "Ѓ", "‚", "ѓ", "„", "…", "†", "‡", "€", "‰", "Љ", "‹", "Њ", "Ќ", "Ћ", "Џ", "ђ", "‘", "’", "“", "”", "•", "–", "—", " ", "™", "љ", "›", "њ", "ќ", "ћ", "џ", " ", "Ў", "ў", "Ј", "¤", "Ґ", "¦", "§", "Ё", "©", "Є", "«", "¬", "­", "®", "Ї", "°", "±", "І", "і", "ґ", "µ", "¶", "·", "ё", "№", "є", "»", "ј", "Ѕ", "ѕ", "ї", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"];


textNode.addEventListener("input", function () {
  convertNode.value="";
  for(let i=0;i<textNode.value.length;i++){
    let deccode= asciiTable.indexOf(textNode.value[i]);
    //console.log("\xC0");
    //deccode=16;
    convertNode.value+=deccode.toString(16).toUpperCase();
  }
  // convertNode.value=window.btoa(unescape(encodeURIComponent(textNode.value)));
});

convertNode.addEventListener("input", function () {
  textNode.value="";
  let hexarr=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  convertNode.value=convertNode.value.toUpperCase();
  let arr=[];
  let str="";
  for(let i=0;i<(convertNode.value.length)-(convertNode.value.length%2);i+=2){
    str=convertNode.value[i]+convertNode.value[i+1];
    arr.push(str);
  }
  for(let i=0;i<arr.length;i++){
    let num=hexarr.indexOf(arr[i][0])*16+hexarr.indexOf(arr[i][1])
    textNode.value+=asciiTable[num];
  }
});