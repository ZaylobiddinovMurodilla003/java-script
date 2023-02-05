"use script";

alert("assalomu alaykum ");

// 1-masala

// alert("1-masala");

let a = Number(prompt("vazningizni kiriting"));
let b = Number(prompt("bo'yingizni kiriting (faqat metrda kiriting)"));

if (a / (b * b) < 18.5) {
  console.log(" sezda ozg'inlik kasali bor. Maslahatim ko'proq ovqat yeng");
} else if (a / (b * b) < 25) {
  console.log("siz normal varzga ega ekansiz ");
} else if (a / (b * b) < 30) {
  console.log("sizda ozroq ortiqcha vazn bor");
} else if (a / (b * b) < 34.9) {
  console.log(
    "sizda ortiqcha vazn aniqlandi. maslahat tezroq parhezni va sport bilan shug'ullanishni boshlang"
  );
} else if (a / (b * b) > 35) {
  console.log(
    "sizda semizlik xavfli darajada. Tezda ozishni boshlashingiz kerak. aks holda yaqinda o'lishingiz mumkin"
  );
}

// 2-masala

alert("2-masala");

let c = Number(
  prompt("istalgan sonni kiriting men juft yoki toqligini aytaman")
);

if (c % 2 == 1) {
  console.log("siz toq son kiritdingiz toq son");
} else if (c % 2 == 0) {
  console.log("siz juft son kiritdingiz");
}
