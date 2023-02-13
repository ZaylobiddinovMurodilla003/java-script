"use script";

// 1-masala

// alert("gimnastika bo'yicha");

// let delfin1 = Number(prompt("delfinlar 1-shart bo'yicha necha bal olishdi"));
// let delfin2 = Number(prompt("delfinlar 2-shart bo'yicha necha bal olishdi"));
// let delfin3 = Number(prompt("delfinlar 3-shart bo'yicha necha bal olishdi"));
// let koala1 = Number(prompt("koalalar 1-shart bo'yicha necha bal olishdi"));
// let koala2 = Number(prompt("koalalar 2-shart bo'yicha necha bal olishdi"));
// let koala3 = Number(prompt("koalalar 3-shart bo'yicha necha bal olishdi"));

// let delfinum = delfin1 + delfin2 + delfin3;
// let delfinor = delfinum / 3;

// let koalaum = koala1 + koala2 + koala3;
// let koalaor = koalaum / 3;

// if (delfinum > 100 || koalaum > 100) {
//   if (delfinor > koalaor) {
//     console.log(`delfinlar ${delfinum} ball bilan yutishdi`);
//   } else if (koalaor > delfinor) {
//     console.log(`koalalar ${koalaum} ball bilan yutishdi`);
//   } else if (delfinor == koalaor) {
//     console.log("har ikkala jamoa yutdi");
//   }
// } else {
//   console.log("hech bir jamoa yutmadi");
// }

// 2-masala

// alert("login parol");

// let login = prompt("loginni kiriting ");
// let loginU = "User";
// let loginA = "Admin";
// let parolU = "User";
// let parolA = "Admin";

// if (login == loginU) {
//   let parol1 = prompt("user paroli kiriting ");
//   if (parol1 == parolU) {
//     console.log("tabriklayman siz saytga oddiy user bo'lib kirdingiz");
//   } else {
//     console.log("parol noto'g'ri kiritildi");
//   }
// } else if (login == loginA) {
//   let parol2 = prompt("admin parolini kiriting ");
//   if (parol2 == parolA) {
//     console.log("tabriklayman siz saytga admin sifatida kirdingiz");
//   } else {
//     console.log("parol notogri kiritildi");
//   }
// } else {
//   console.log("login notogri");
// }

// 3-masala

// alert("restoran haqida");

// let a = Number(prompt("necha so'mlik ovqat yedingiz "));
// alert(
//   "eslatib o'taman bizning restoranda 50$ dan 300$ gacha bo'lsa 15% chivi  undan boshqa vaqtda 20% bo'ladi  "
// );

// let b;
// let c;

// if (a > 50 && a < 300) {
//   b = (a * 15) / 100;
//   // c = a + b;/
// } else {
//   b = (a * 20) / 100;
// }

// c = a + b;

// console.log(
//   `siz yegan ovqat ${a} so'mlik bo'ldi, ${b} chiviga tashlab keting, jami ${c} so'm to'lashingiz kerak`
// );

// 4-masala

alert("yosghingizni maydalaymiz");

let a = Number(prompt("hozir nechanchi yil"));
let b = Number(prompt("siz nechanchi yilsiz "));
let c;
let d = a - b;
let kun;
let soat;
let minut;
let secund;

if (b % 4 == 0) {
  c = (d - (d % 4)) / 4 + 1;
  kun = (d - c) * 365 + c * 366;
  soat = kun * 24;
  minut = soat * 60;
  secund = minut * 60;
} else {
  c = (d - (d % 4)) / 4;
  kun = (d - c) * 365 + c * 366;
  soat = kun * 24;
  minut = soat * 60;
  secund = minut * 60;
}
console.log(
  `yoshingiz ${d}da sizning umringiz ${kun} kun , ${soat} soat, ${minut} minut , ${secund} secund`
);
