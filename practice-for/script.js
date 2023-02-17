"use script";

// 1-masala

// alert("1-masala ");

// let n = Number(prompt("musbat son kiriting"));
// let k = Number(prompt("istalgan sonni kiriting "));

// for (let i = 0; i < n; i++) {
//   console.log(k, i);
// }

// 2-masala

// alert("2-masala ");

// let a = Number(prompt("istalgan sonn kiriting "));
// let b = Number(prompt("istalgan sonn kiriting "));
// let c = 0;

// if (b > a) {
//   for (let i = a; i <= b; i++) {
//     c = ++c;
//     console.log(i, c);
//   }
// } else {
//   console.log("noto'g'ri son kiritdingiz");
// }

// 3-masala

// alert("3-masala ");

// let a = Number(prompt("istalgan sonn kiriting "));
// let b = Number(prompt("istalgan sonn kiriting "));
// let c = 0;

// if (b > a) {
//   for (let i = b - 1; i > a; i--) {
//     console.log(i);
//   }
// } else {
//   console.log("noto'g'ri son kiritdingiz");

// }

// 4-masala

// alert("4-masala  konfet ");

// let a = Number(prompt("1 kg konfet narxini   kiriting "));
// let b = Number(prompt("sizga necha kilo kanfet kerak"));

// for (let i = 1; i <= b; i++) {
//   let c = i * a;
//   console.log(`${i} kg konfet narxi ${c} `);
// }

// 5-masala

// alert("5-masala konfet ");
// let a = Number(prompt("1 kg konfet narxini   kiriting "));

// for (let i = 1; i <= 10; i++) {
//   let b = i / 10;
//   let c = (i * a) / 10;
//   console.log(`${b} kg konfet narxi ${c} `);
// }

// 6-masala

// alert("6-masala konfet");

// let b = Number(prompt("1 kg konfet qancha "));
// let a = Number(prompt("konfet kilosini kiriting "));

// let c;
// let d;

// if ((a * 10) % 2 == 0) {
//   for (let i = 0; i <= a * 10; i += 2) {
//     c = (b * i) / 10;
//     d = i / 10;
//     console.log(` ${d} kg konfet ${c} so'm turadi `);
//   }
// } else {
//   console.log("notogri sonlar kiritdingiz");
// }

// 7-masala

// alert("7-masala sonlar yig'indisi ");

// let a = Number(prompt("a sonni kiriting "));
// let b = Number(prompt("b sonni kiriting "));
// let c = 0;

// if (b > a) {
//   for (let i = a ; i <= b; i++) {
//     c = c + i;
//   }
//   console.log(c);
// } else {
//   console.log("notogri sonlar kiritdingiz a<b bolishi kerak");
// }

// 8-masala

// alert("8-masala sonlar yigindisi");

// let a = Number(prompt("a sonni kiriting "));
// let b = Number(prompt("b sonni kiriting "));
// let c = 1;

// if (b > a) {
//   for (let i = a; i <= b; i++) {
//     c = c * i;
//   }
//   console.log(c);
// } else {
//   console.log("notogri sonlar kiritdingiz a<b bolishi kerak");
// }

// 9-masla

// alert(" 9-masala  sonlar kvadratlari yigindisi");

// let a = Number(prompt("a sonni kiriting "));
// let b = Number(prompt("b sonni kiriting "));
// let c = 0;

// if (b > a) {
//   for (let i = a; i <= b; i++) {
//     c = c + i * i;
//   }
//   console.log(c);
// } else {
//   console.log("notogri sonlar kiritdingiz a<b bolishi kerak");
// }

// 10-masalA

// alert("10-masala bir taqsim");

// let n = Number(prompt("n sonni kiriting "));
// let c = 0;

// if (n > 0) {
//   for (let i = 0; i <= n; i++) {
//     c = c + 1 / i;
//   }
//   console.log(c);
// } else {
//   console.log("musbat son kiriting ");
// }

// 11-masala

// alert("11-masala yigindi");

// let n = Number(prompt("n sonni kiriting "));
// let c = 0;

// if (n > 0) {
//   for (let i = 0; i <= n; i++) {
//     c = c + (n + i) ** 2;
//   }
//   console.log(c);
// } else {
//   console.log("musbat son kiriting ");
// }

// 12-masala

// alert("12-masala kopaytma );

// let n = Number(prompt("n sonni kiriting "));
// let c = 1;

// if (n > 0) {
//   for (let i = 1; i <= n; i++) {
//     c = c * (1 + i / 10);
//   }
//   console.log(c);
// } else {
//   console.log("musbat son kiriting ");
// }

// 13-masala

// alert("13-masala yigindi");

// let n = Number(prompt("n sonni kiriting "));
// let c = 0;
// let b = 0;

// if (n > 0) {
//   for (let i = 0; i <= n; i += 2) {
//     c = c - (1 + i / 10);
//   }
//   console.log(c);

//   for (let i = 1; i <= n; i += 2) {
//     b = b + (1 + i / 10);
//   }
//   console.log(b);

//   console.log(b + c);
// } else {
//   console.log("musbat son kiriting ");
// }

// 14-masala

// alert("14-masala n soni kvadrati");

// let n = Number(prompt("n sonni kiriting "));
// let c = 0;

// for (let i = 1; i <= n; i++) {
//   c = c + (2 * i - 1);
//   console.log(`${i} sonining kvadrati ${c} ga teng`);
// }

// 15-masala

alert("15-masala darajaga ko'tarish");

let a = Number(prompt("haqiqiy sonni kiriting"));
let n = Number(prompt("a sonni nechanchi darajaga ko'tarmoqchisiz "));
let c = 1;

if (n > 0) {
  for (let i = 1; i <= n; i++) {
    c = a ** i;
    console.log(`${a} sonining ${i}-darajasi ${c} ga teng`);
  }
} else {
  console.log("n > 0 bo'lishi kerak");
}
