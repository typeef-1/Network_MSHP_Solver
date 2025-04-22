//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
//
let asciiTable = [
  "\x00",
  "\x01",
  "\x02",
  "\x03",
  "\x04",
  "\x05",
  "\x06",
  "\x07",
  "\x08",
  "\x09",
  "\x0A",
  "\x0B",
  "\x0C",
  "\x0D",
  "\x0E",
  "\x0F",
  "\x10",
  "\x11",
  "\x12",
  "\x13",
  "\x14",
  "\x15",
  "\x16",
  "\x17",
  "\x18",
  "\x19",
  "\x1A",
  "\x1B",
  "\x1C",
  "\x1D",
  "\x1E",
  "\x1F",
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
  "\x7F",
  "Ђ",
  "Ѓ",
  "‚",
  "ѓ",
  "„",
  "…",
  "†",
  "‡",
  "€",
  "‰",
  "Љ",
  "‹",
  "Њ",
  "Ќ",
  "Ћ",
  "Џ",
  "ђ",
  "‘",
  "’",
  "“",
  "”",
  "•",
  "–",
  "—",
  " ",
  "™",
  "љ",
  "›",
  "њ",
  "ќ",
  "ћ",
  "џ",
  " ",
  "Ў",
  "ў",
  "Ј",
  "¤",
  "Ґ",
  "¦",
  "§",
  "Ё",
  "©",
  "Є",
  "«",
  "¬",
  "­",
  "®",
  "Ї",
  "°",
  "±",
  "І",
  "і",
  "ґ",
  "µ",
  "¶",
  "·",
  "ё",
  "№",
  "є",
  "»",
  "ј",
  "Ѕ",
  "ѕ",
  "ї",
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
];

function anti(str) {
  if (str == "1") return "0";
  return "1";
}

textNode.addEventListener("input", function () {
  convertNode.value = "";
  let str = "";
  for (let i = 0; i < textNode.value.length; i++) {
    let deccode = asciiTable.indexOf(textNode.value[i]);
    //console.log("\xC0");
    //deccode=16;
    let bin = deccode.toString(2);
    for (let i = bin.length; i < 8; i++) str += "0";
    str += bin;
  }
  //console.log(str);
  let arr = str.match(/.{1,11}/g);
  // console.log(arr);
  while (arr[arr.length - 1].length < 11) {
    arr[arr.length - 1] += "0";
  }
  for (let y = 0; y < arr.length; y++) {
    //let y=0;
    let element = arr[y],
      iter = 0;
    let code = [];
    for (let i = 0; i < 15; i++) {
      code[i] = "0";
    }
    for (let i = 0; i < 15; i++) {
      if (i != 0 && i != 1 && i != 3 && i != 7) {
        code[i] = element[iter];
        iter++;
      }
    }
    let n1 = 0,
      n2 = 0,
      n4 = 0,
      n8 = 0;
    for (let i = 0; i <= 15; i++) {
      for (let j = 0; j < 1; j++) {
        if (code[i] == "1") n1++;
        i++;
      }
      for (let j = 0; j < 1; j++) {
        if (j != 1 - 1) i++;
      }
    }
    for (let i = 1; i <= 15; i++) {
      for (let j = 0; j < 2; j++) {
        if (code[i] == "1") n2++;
        i++;
      }
      for (let j = 0; j < 2; j++) {
        if (j != 2 - 1) i++;
      }
    }
    for (let i = 3; i <= 15; i++) {
      for (let j = 0; j < 4; j++) {
        if (code[i] == "1") n4++;
        i++;
      }
      for (let j = 0; j < 4; j++) {
        if (j != 4 - 1) i++;
      }
    }
    for (let i = 7; i <= 15; i++) {
      for (let j = 0; j < 8; j++) {
        if (code[i] == "1") n8++;
        i++;
      }
      for (let j = 0; j < 8; j++) {
        if (j != 8 - 1) i++;
      }
    }

    code[0] = n1 % 2;
    code[1] = n2 % 2;
    code[3] = n4 % 2;
    code[7] = n8 % 2;
    for (let i = 0; i < code.length; i++) convertNode.value += code[i];
    if (y != arr.length - 1) {
      convertNode.value += " ";
    }
  }
});

convertNode.addEventListener("input", function () {
  textNode.value = "";
  let arr = convertNode.value.split(" ").filter(item=>item!=""),
    ans = "";
  for (let u = 0; u < arr.length; u++) {
    //let u=0;
    let code = arr[u];
    let n1 = 0,
      n2 = 0,
      n4 = 0,
      n8 = 0;
    for (let i = 0; i <= 15; i++) {
      for (let j = 0; j < 1; j++) {
        if (code[i] == "1") n1++;
        i++;
      }
      for (let j = 0; j < 1; j++) {
        if (j != 1 - 1) i++;
      }
    }
    for (let i = 1; i <= 15; i++) {
      for (let j = 0; j < 2; j++) {
        if (code[i] == "1") n2++;
        i++;
      }
      for (let j = 0; j < 2; j++) {
        if (j != 2 - 1) i++;
      }
    }
    for (let i = 3; i <= 15; i++) {
      for (let j = 0; j < 4; j++) {
        if (code[i] == "1") n4++;
        i++;
      }
      for (let j = 0; j < 4; j++) {
        if (j != 4 - 1) i++;
      }
    }
    for (let i = 7; i <= 15; i++) {
      for (let j = 0; j < 8; j++) {
        if (code[i] == "1") n8++;
        i++;
      }
      for (let j = 0; j < 8; j++) {
        if (j != 8 - 1) i++;
      }
    }
    let str = "" + (n8 % 2) + "" + (n4 % 2) + "" + (n2 % 2) + "" + (n1 % 2);
    let numb = parseInt(str, 2);
    if (numb != 0) {
      console.log(
        "Ошибка в элементе под номером: " +
          (u + 1) +
          " с символом под номером " +
          numb
      );
    }
    for (let i = 0; i < 15; i++) {
      if (i != 0 && i != 1 && i != 3 && i != 7) {
        if (numb != 0 && i == numb - 1) {
          ans += anti(code[i]);
        } else {
          ans += code[i];
        }
      }
    }
  }

  textNode.value = "";
  let arr1 = ans.match(/.{1,8}/g);
  if (arr1[arr1.length - 1].length < 8) {
    arr1.pop();
  }
  let st="";
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = parseInt(arr1[i], 2);
    st+=arr1[i]+" ";
    if (arr1[i] != "00000000") textNode.value += asciiTable[arr1[i]];
  }
  console.log(st);
  console.log(ans);
});
