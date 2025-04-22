//узлы
let textNode = document.querySelector(`#text`);
let convertNode = document.querySelector(`#answer`);
let margNode = document.querySelector(`#marg`);
let langNode = document.querySelector(`#lang`);
let allvarsNode = document.querySelector(`#allvars`);
let NumberNode = document.querySelector(`#num`);
let YoNode = document.querySelector(`#yo`);
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
//
let eng = false;
let marg = true;
let yo = true;
function changed() {
  let text = "";
  yo = YoNode.checked;
  let allyo = document.querySelector("#allyo");
  if (eng) {
    allyo.classList.add("d-none");
  } else {
    allyo.classList.remove("d-none");
  }
  let arrBig = [],
    arrSmall = [];
  if (eng) {
    for (let i = 97; i <= 122; i++) {
      arrSmall.push(asciiTable[i]);
    }
    for (let i = 65; i <= 90; i++) {
      arrBig.push(asciiTable[i]);
    }
  } else {
    for (let i = 224; i <= 255; i++) {
      arrSmall.push(asciiTable[i]);
      if (asciiTable[i] == "е" && yo) {
        arrSmall.push("ё");
      }
    }
    for (let i = 192; i <= 223; i++) {
      arrBig.push(asciiTable[i]);
      if (asciiTable[i] == "Е" && yo) {
        arrBig.push("Ё");
      }
    }
  }
  //
  // console.log(arrBig);
  // console.log(arrSmall);
  //
  if (marg) {
    //
    convertNode.classList.remove("d-none");
    NumberNode.classList.remove("d-none");
    allvarsNode.innerHTML = "";
    //
    let num = Number(NumberNode.value);
    num %= arrBig.length;
    //console.log(num)
    for (let i = 0; i < textNode.value.length; i++) {
      let index = arrBig.indexOf(textNode.value[i]);
      let ok = false;
      if (index != -1) {
        text += arrBig[Math.abs((index + num) % arrBig.length)];
        ok = true;
      }
      index = arrSmall.indexOf(textNode.value[i]);
      if (index != -1) {
        text += arrSmall[Math.abs((index + num) % arrSmall.length)];
        ok = true;
      }
      if (!ok) text += textNode.value[i];
    }
    convertNode.value = text;
  } else {
    //
    convertNode.classList.add("d-none");
    NumberNode.classList.add("d-none");
    //
    allvarsNode.innerHTML = ``;
    for (let u = 0; u < arrBig.length; u++) {
      text="";
      num=u;
      for (let i = 0; i < textNode.value.length; i++) {
        let index = arrBig.indexOf(textNode.value[i]);
        let ok = false;
        if (index != -1) {
          text += arrBig[Math.abs((index + num) % arrBig.length)];
          ok = true;
        }
        index = arrSmall.indexOf(textNode.value[i]);
        if (index != -1) {
          text += arrSmall[Math.abs((index + num) % arrSmall.length)];
          ok = true;
        }
        if (!ok) text += textNode.value[i];
      }
      allvarsNode.innerHTML += `<li>${u}. ${text}</li>`;
    }
  }
}
//
margNode.addEventListener("input", function () {
  marg = margNode.checked;
  changed();
});

langNode.addEventListener("input", function () {
  eng = langNode.checked;
  changed();
});

textNode.addEventListener("input", changed);
NumberNode.addEventListener("input", changed);
YoNode.addEventListener("input", changed);
