//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//
let asciiTable = [
  "\x00","\x01","\x02","\x03","\x04","\x05","\x06","\x07","\x08","\x09","\x0A","\x0B","\x0C","\x0D","\x0E","\x0F","\x10","\x11","\x12","\x13","\x14","\x15","\x16","\x17","\x18","\x19","\x1A","\x1B","\x1C","\x1D","\x1E","\x1F"," ","!",
  '"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","\x7F","Ђ","Ѓ","‚","ѓ","„","…","†","‡","€","‰","Љ","‹","Њ","Ќ","Ћ","Џ","ђ","‘","’","“","”","•","–","—"," ","™","љ","›","њ","ќ","ћ","џ"," ","Ў","ў","Ј","¤","Ґ","¦","§","Ё","©","Є","«","¬","­","®","Ї","°","±","І","і","ґ","µ","¶","·","ё","№","є","»","ј","Ѕ","ѕ","ї","А","Б","В","Г","Д","Е","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я","а","б","в","г","д","е","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я",
];

function check(str) {
  if (str == "1") return true;
  if (str == "2") return true;
  if (str == "3") return true;
  if (str == "4") return true;
  if (str == "5") return true;
  if (str == "6") return true;
  if (str == "7") return true;
  if (str == "8") return true;
  if (str == "9") return true;
  if (str == "0") return true;
  if (str == "a") return true;
  if (str == "b") return true;
  if (str == "c") return true;
  if (str == "d") return true;
  if (str == "e") return true;
  if (str == "f") return true;
  if (str == " ") return true;
  return false;
}

function hexToDec(hex) {
  return parseInt(hex, 16);
}

textNode.addEventListener("input", function () {
  textNode.value=textNode.value.toLowerCase();

  for (let i = 0; i < textNode.value.length; i++) {
    if (!check(textNode.value[i])) {
      textNode.value =
        textNode.value.slice(0, i) + " "+textNode.value.slice(i + 1);
    }
  }

  let arr = textNode.value.split(" ");
  for(let i=0;i<arr.length;i++){
    if(arr[i]==""){
      arr.splice(i,1);
      i--;
    }else 
    if(arr[i].length>4){
      alert("воспользуйся https://unicode-table.com , так как у твоих символов больше FFFF поэтому js их не может")
       arr[i] = arr[i].slice(0, 4);
    }
  }
  convertNode.value="";
  for(let i=0;i<arr.length;i++){
    arr[i]=hexToDec(arr[i]);
    convertNode.value += String.fromCharCode(arr[i]);

  }
  console.log(arr);
});

convertNode.addEventListener("input", function () {
  let str = convertNode.value;
  str = str.substring(0, str.length - 1);
  convertNode.value = str;
});
