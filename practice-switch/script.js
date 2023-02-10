"use script";

alert("switch");

let a = Number(prompt("birdan beshgacha son kiriting "));

let b;
switch (a) {
  case 1:
    b = "bir";
    break;
  case 2:
    b = "ikki";
    break;
  case 3:
    b = "uch";
    break;
  case 4:
    b = "to'rt";
    break;
  case 5:
    b = "besh";
    break;
  default:
    b = "men sizga 1 dan 5 gacha dedim";
    break;
}

console.log(`siz kiritgan son ${b}`);
