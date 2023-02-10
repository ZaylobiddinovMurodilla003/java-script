"use script";

// 1-masala

// alert(" 1-masala  kvadrat perimetri. ");

// let a = Number(prompt("kvadrat tomonini kiriting"));

// let p = Number(a * 4);

// console.log(`kvadrat perimtri ${p}`);

// 2-massala

// alert("2-masala kvadrat yuzi");

// let b = Number(prompt("kvadrat tomonini kiriting b="));

// let s = Number(b * b);
// console.log(`kvadratning yuzi  ${s}`);

// 3-masala

// alert("3-masala  to'g'ri to'rtburchak perimetri yuzi");

// let m = Number(prompt("togri to'rtburchak bo'yini kiriting m="));

// let n = Number(prompt("togri to'rtburchak enini kiriting n="));

// let pt = Number(2 * (m + n));
// let st = Number(m * n);
// console.log(` togri to'rtburchak perimetri ${pt}`);

// console.log(` togri to'rtburchak yuzi ${ps}`);

// // 4-masala

// alert(" 4-massala aylana diametri");

// let d = Number(prompt("aylana diametrini kitriting d="));

// const п = 3.14;

// let l = d * п;
// console.log(`aylana uzunligi ${l}`);

// 5-masala

// alert("5-massala kub yuzi hajmi");

// let a = Number(prompt(" kub tomonini kiriting a="));

// let s = Number(6 * a * a);

// let v = Number(a ** 3);

// console.log(`kubning yuzi ${s}`);

// console.log(` kubning hajmi ${v}`);

// 6-masala

// alert("6-masala parallelopiped yuzi hajmi");

// let a = Number(prompt(" a="));
// let b = Number(prompt(" b="));
// let c = Number(prompt(" c="));

// let s = Number(2 * (a * b + b * c + a * c));

// let v = Number(a * b * c);

// console.log(`parallelopiped  hajmi ${v} parallelopiped sirti yuzi ${s}`);

// 7-masala

// alert("7-masala doira yuzi va uzunligi");

// let r = Number(prompt("doira radiusini kiriting "));

// const п = 3.14;

// let l = Number(2 * п * r);

// let s = Number(п * r ** 2);

// console.log(` doiraning yuzi ${s} . doiraning uzunligi ${l}`);

// 8-massala

// alert(" 8-masala sonlar o'rta arifmetigi");

// let a = Number(prompt("a sonni kiriting "));
// let b = Number(prompt("b sonni kiriting "));

// let c = Number((a + b) / 2);

// console.log(`ularning o'rtab arifmetigi ${c}`);

// 9-masala

// alert(" 9-masala  sonlar o'rta geometrigi");

// let a = Number(prompt(" manfiy bo'magan son kiriting "));
// let b = Number(prompt(" manfiy bo'magan son kiriting "));

// let c = Number((a * b) ** 0.5);

// console.log(` ularning o'rta geometrigi ${c}`);

// 10-masala

// alert(" 10- masala sonlar yig'indisi ko'paytmasi kvadrati");

// let a = Number(prompt("nolga teng bolmagan ikkita sonni kiriting"));
// let b = Number(prompt("nolga teng bolmagan ikkita sonni kiriting"));

// let c = Number(a + b);
// let ab = Number(a * b);
// let a2 = Number(a * a);
// let b2 = Number(b * b);

// console.log(
//   `ularning yig'indisi ${c}. ularning ko'paytmasi ${ab}. birinchisining kvadrati ${a2}. ikkinchisining kvadrati ${b2}`
// );

// 11-masala

// alert(" 11- masala sonlar yig'indisi ko'paytmasi moduli");

// let a = Number(prompt("nolga teng bolmagan ikkita sonni kiriting"));
// let b = Number(prompt("nolga teng bolmagan ikkita sonni kiriting"));

// let c = Number(a + b);
// let ab = Number(a * b);

// if (a > 0) {
//   console.log(`${a} sonning moduli ${a}ga teng`);
// } else if (a < 0) {
//   let m;
//   m = -a;
//   console.log(`${a} sonning moduli ${m} `);
// }

// if (b > 0) {
//   console.log(`${b} sonning moduli ${b}`);
// } else if (b < 0) {
//   let n;
//   n = -b;
//   console.log(`${b} sonning moduli ${n}`);
// }

// console.log(`ularning yig'indisi ${c}. ularning ko'paytmasi ${ab}.  `);

// 12 - masala

// alert("12-masala uchburchak gipotenuzasi perimetri");

// let a = Number(prompt(" uchburchakning 1-katetini kit=riting"));
// let b = Number(prompt("uchburchakning 2-katerini kiriting"));
// let c = (a ** 2 + b ** 2) ** (1 / 2);
// console.log(`uchburchak gipotenuzasi ${c}`);
// let p = a + b + c;
// console.log(`uchburchak perimetri ${p}`);

// 13-masala

// alert("13-masala aylana yuzlari");

// let r1 = Number(prompt("2-aylana radiusini kiriting "));
// let r2 = Number(prompt("2-aylana radiusini kiriting "));
// const п = 3.14;

// if (r1 > r2) {
//   let s1 = п * r1 * r1;
//   let s2 = п * r2 * r2;
//   let s = s1 - s2;

//   console.log(
//     `1-aylana yuzi ${s1}, 2-aylana yuzi ${s2} . aylanalar yuzlari ayirmasi ${s}`
//   );
// } else {
//   console.log("noto'g'ri son kiritdingiz");
// }

// 14-masala

// alert("14-masala aylana uzunligi radiusi yuzi");
// const п = 3.14;
// let l = Number(prompt("aylana uzunligini kiriting "));

// let r = l / (2 * п);
// let s = п * r * r;

// console.log(`aylana radiusi ${r}, aylana yuzi ${s}`);

// 15-masala

// alert("15-masala diametr radius");
// const п = 3.14;
// let s = Number(prompt("aylana yuzini kiriting "));

// r = (s / п) ** (1 / 2);
// d = 2 * r;

// console.log(`aylana radiusi ${r} aylana diametri ${d}`);

// 16-masala

// alert("16-masala nuqtalar orasidagi masofa");

// let a = Number(prompt("son o'qida 1-nuqtani kiriting"));
// let b = Number(prompt("son o'qida 2-nuqtani kiriting"));
// let c = a - b;
// let d = -c;
// if (c > 0) {
//   console.log(`ikki nuqta orasidagi masofa ${c} `);
// } else if (c < 0) {
//   console.log(`ikki nuqta orasidagi masofa ${d} `);
// }else if(c==0){
// console.log("noto'g'ri son kiritdingiz");

// }

// 17-masala

// alert("17-masala kesma uzunligi");

// let a = Number(prompt("son o'qida a nuqtani kiriting"));
// let b = Number(prompt("son o'qida b nuqtani kiriting"));
// let c = Number(prompt("son o'qida c nuqtani kiriting"));

// let ab = a - b;
// let ac = a - c;
// if (ab < 0) {
//   let ab2 = -ab;
//   console.log(`ab kesma uzunligi ${ab2}`);
// } else if (ab == 0) {
//   console.log("noto'g'ri son kiritdingiz");
// } else {
//   console.log(`ab kesma uzunligi ${ab}`);
// }

// if (ac < 0) {
//   let ac2 = -ac;
//   console.log(`ac kesma uzunligi ${ac2}`);
// } else if (ac == 0) {
//   console.log("noto'g'ri son kiritdingiz");
// } else {
//   console.log(`ac kesma uzunligi ${ac}`);
// }

// if (ab > 0 && ac > 0) {
//   let abc = ab + ac;
//   console.log(`ab va ac kesmalar yig'indisi ${abc}`);
// } else if (ab > 0 && ac < 0) {
//   let abc2 = ab + ac2;
//   console.log(`ab va ac kesmalar yig'indisi ${abc2}`);
// } else if (ab < 0 && ac > 0) {
//   let abc3 = ab2 + ac;
//   console.log(`ab va ac kesmalar yig'indisi ${abc3}`);
// } else if (ab < 0 && ac < 0) {
//   let abc4 = ab2 + ac2;
//   console.log(`ab va ac kesmalar yig'indisi ${abc4}`);
// } else {
//   console.log("noto'g'ri sonlar kiritdingiz");
// }

// 18-masala

// alert("18-masala kesma uzunligi kopaytmasi");

// let a = Number(prompt("son o'qida a nuqtani kiriting"));
// let b = Number(prompt("son o'qida b nuqtani kiriting"));
// let c = Number(prompt("son o'qida c nuqtani kiriting"));

// let ab = a - b;
// let ac = a - c;
// if (ab < 0) {
//   let ab2 = -ab;
//   console.log(`ab kesma uzunligi ${ab2}`);
// } else if (ab == 0) {
//   console.log("noto'g'ri son kiritdingiz");
// } else {
//   console.log(`ab kesma uzunligi ${ab}`);
// }

// if (ac < 0) {
//   let ac2 = -ac;
//   console.log(`ac kesma uzunligi ${ac2}`);
// } else if (ac == 0) {
//   console.log("noto'g'ri son kiritdingiz");
// } else {
//   console.log(`ac kesma uzunligi ${ac}`);
// }

// if (ab > 0 && ac > 0) {
//   let abc = ab * ac;
//   console.log(`ab va ac kesmalar kopaytmasi ${abc}`);
// } else if (ab > 0 && ac < 0) {
//   let abc2 = ab * ac2;
//   console.log(`ab va ac kesmalar kopaytmasi ${abc2}`);
// } else if (ab < 0 && ac > 0) {
//   let abc3 = ab2 * ac;
//   console.log(`ab va ac kesmalar kopaytmasi ${abc3}`);
// } else if (ab < 0 && ac < 0) {
//   let abc4 = ab2 * ac2;
//   console.log(`ab va ac kesmalar kopaytmasi ${abc4}`);
// } else {
//   console.log("noto'g'ri sonlar kiritdingiz");
// }

// 19-masala

// alert(" to'g'ri 4 burrchak perimetri yuzi ");

// let ax = Number(prompt("1-uchi koordinatasi x"));
// let ay = Number(prompt("1-uchi koordinatasi y"));
// let bx = Number(prompt("qarama qarshi uchi koordinatasi x"));
// let by = Number(prompt("qarama qarshi uchi koordinatasi y"));
// let cx = ax;
// let cy = by;

// let a = cy - ay;
// let b = cx - bx;
// if (a < 0) {
//   a = -a;
// }
// if (b < 0) {
//   b = -b;
// }

// let p = Number((a + b) * 2);
// let s = Number(a * b);

// console.log(`perimetri ${p} yuzi ${s}`);

// 20-masala

// alert(" 20-masala nuqta orasidagi masofa ");

// let x1 = Number(prompt("1-nuqta koordinatasini kiriting x"));
// let y1 = Number(prompt("2-nuqta koordinatasini kiriting y"));
// let x2 = Number(prompt("2-nuqta koordinatasini kiriting x"));
// let y2 = Number(prompt("2-nuqta koordinatasini kiriting y"));

// let a = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);

// console.log(`nuqtalar orasidagi masofa ${a}`);

// 21 - masala

// alert("3 burchak yuzi perimetri");

// let x1 = Number(prompt("1-nuqta koordinatasini kiriting x"));
// let y1 = Number(prompt("2-nuqta koordinatasini kiriting y"));
// let x2 = Number(prompt("2-nuqta koordinatasini kiriting x"));
// let y2 = Number(prompt("2-nuqta koordinatasini kiriting y"));
// let x3 = Number(prompt("3-nuqta koordinatasini kiriting x"));
// let y3 = Number(prompt("3-nuqta koordinatasini kiriting y"));

// let a = Number(((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2));
// let b = Number(((x3 - x1) ** 2 + (y3 - y1) ** 2) ** (1 / 2));
// let c = Number(((x3 - x2) ** 2 + (y3 - y2) ** 2) ** (1 / 2));
// let p = Number((a + b + c) / 2);
// let s = Number((p * (p - a) * (p - b) * (p - c)) ** (1 / 2));
// p = 2 * p;
// console.log(`uchburchak yuzi ${s} perimetri ${p}`);

// 22-massala

// alert("22-masala qiymat almashtirish");

// let a = Number(prompt("a sonning qiymatini kiriting "));
// let b = Number(prompt("b sonning qiymatini kie=riting "));

// let c = a;
// let d = b;
// a = d;
// b = c;
// console.log(`a sonning qiymati ${a} b sonning qiymati ${b}`);

// 23-masala

// alert("23-masala qiymat almashtirish");

// let a = Number(prompt("a sonning qiymatini kiriting "));
// let b = Number(prompt("b sonning qiymatini kiriting "));
// let c = Number(prompt("c sonning qiymatini kiriting "));

// let m = a;
// let n = b;
// let q = c;

// b = m;
// c = n;
// a = q;

// console.log(
//   `a sonning qiymati ${a} b sonning qiymati ${b} c sonning qiymati ${c}`
// );

// 24-masala

// alert("qiymat almashtirish");

// let a = Number(prompt("a sonning qiymatini kiriting "));
// let b = Number(prompt("b sonning qiymatini kiriting "));
// let c = Number(prompt("c sonning qiymatini kiriting "));

// let m = a;
// let n = b;
// let q = c;

// b = q;
// c = m;
// a = n;

// console.log(
//   `a sonning qiymati ${a} b sonning qiymati ${b} c sonning qiymati ${c}`
// );

// 25-masala

// alert("25-masala");

// let x = Number(
//   prompt(
//     "x ni qiymatini kiriting u y=3*(x**6)-6*x*x-7 funksiya qiymatini aniqlaymiz "
//   )
// );

// let y = Number(3 * x ** 6 - 6 * x * x - 7);

// console.log(`funksiya qiymati ${y}`);

// 26-masala

// alert(" 26-maaasala  ");

// let x = Number(
//   prompt(
//     "x ni qiymatini kiriting u y=4*((x-3)**5)-7*((x-3)**3)+2 funksiya qiymatini aniqlaymiz "
//   )
// );

// let y = Number(4 * (x - 3) ** 5 - 7 * (x - 3) ** 3 + 2);

// 27-masala

// alert("27-masala darajani aniqlaydi");

// let a = Number(prompt("a sonni kiriting "));

// let b = a ** 2;
// let c = a ** 4;
// let d = a ** 8;

// console.log(`2-darajasi ${b} , 4-darajasi ${c}, 8-darajasi ${d}`);

// 28-masala

// alert("28-masala darajaga ko'tarish");

// let a = Number(prompt("a sonni kiriting darajaga ko'taramiz "));
// let b = Number(prompt("a sonni nechanvhi darajaga ko'tarmoqchisiz "));

// let c = a ** b;

// console.log(`${a} sonining ${b}-darajasi ${c}`);

// 29-masala

// alert(" 29-masala gradusdan radianga o'tish");

// let a = Number(prompt("burchak kattaligini kiriting gradusda "));

// const п = 3.14;

// let b = a / п;
// console.log(`${a} gradus ${b} radianga teng `);

// 30-masala

// alert(" 30-masala radiandan gradusga o'tish");

// let a = Number(prompt("burchak kattaligini kiriting radianda  "));

// const п = 3.14;

// let b = (a * 180) / п;
// console.log(`${a} radian  ${b} gradusga teng `);

// 31-masala

// alert("31-masala farageytdan selsiyfga otish");

// let a = Number(prompt("farengeytda harorat kiriting"));

// let b = (a - 32) * (5 / 9);

// console.log(`${a} farengeyt ${b} selsiy `);

// 32 - masala;

// alert("32-masala selsiyda berilganni farengeytga o'tkazish");

// let a = Number(prompt("selsiyda harorat kiriting "));

// let b = a * (9 / 5) + 32;

// console.log(`${a} selsiy ${b} farengeyt`);

// 33-masala

// alert("33-masala konfet");

// let a = Number(prompt("qancha konfet bor"));
// let b = Number(prompt("konfetni qanchaga oldingiz "));

// let c = b / a;
// let d = Number(prompt("sizga necha kilo konfet kerak"));
// let e = c * d;

// console.log(`1 kg konfet ${c} so'm`);
// console.log(`${d} kilo konfet ${e} so'm`);

// 34-masala

// alert("34-masala shokolad va konfet");

// let a = Number(prompt("sizda necha kilo shokolad bor"));
// let b = Number(prompt("shokoladni qanchaga oldingiz "));
// let c = Number(prompt(" sizda necha kilo konfet bor"));
// let d = Number(prompt("konfetni qanchaga oldingiz"));

// let m = b / a;
// let n = d / c;

// if (m > n) {
//   let x = m - n;
//   console.log(`1 kg shokolad 1kg konfetdan ${x} so'm qimmat`);
// } else {
//   console.log("konfet shokoladdan qimmat ");
// }

// 35-masala

// alert("35-masala qayiq va oqim");

// let a = Number(prompt("qayiq tezligini kiriting "));
// let b = Number(prompt("oqim tezligini kiriting "));
// let t1 = Number(prompt("oqim bo'yicha harakatlanish vaqti qancha "));
// let t2 = Number(prompt("oqimga qarshi vaqatni kiriting "));

// if (a > b) {

//   let s1 = a * t1;
//   let s2 = b * t2;
//   let s = s1 + s2;

//   console.log(`qayiq umumiy ${s} km masofani bosib o'tgan`);
// } else {
//   console.log("oqim tezligi juda katta ");
// }

// 36-masala

// alert("36-masala  2 avtomobil");

// let v1 = Number(prompt("1-avtomobil tezligi"));
// let v2 = Number(prompt("2-avtomobil tezligi"));
// let s = Number(prompt("ular orasidagui masofa "));
// let t = Number(prompt("oradan qancha vaqt o'tdi"));

// let s2 = (v1 + v2) * t + s;

// console.log(`otralaridagi masofa ${s2}`);

// 37-masala

// alert("37-masala  2 avtomobil");

// let v1 = Number(prompt("1-avtomobil tezligi"));
// let v2 = Number(prompt("2-avtomobil tezligi"));
// let s = Number(prompt("ular orasidagui masofa "));
// let t = Number(prompt("oradan qancha vaqt o'tdi"));
// let s1 = v1 * t;
// let s2 = v2 * t;
// s = s2 - s1;

// if (s < 0) {
//   s = -s;
//   console.log("ular bir biri bilan uchrashib bo'lishdi");
// }

// console.log(`otralaridagi masofa ${s}`);

// 38-masala

// alert(" 38-masala  tengnlama yechamiz  a*x + b = 0");

// let a = Number(prompt("koeffitsiyent a ni kiriting "));
// let b = Number(prompt("koeffitsiyent b ni kiriting "));

// let x = -b / a;
// console.log(`tenglama yechimi ${x}`);

// 39 - masala

// alert("39-masala tenglama yechamiz   a*x**2+ b*x + c = 0");

// let a = Number(prompt("koeffitsiyent a ni kiriting "));
// let b = Number(prompt("koeffitsiyent b ni kiriting"));
// let c = Number(prompt("koeffitsiyent c ni kiriting"));

// let d = Number(b ** 2 - 4 * a * c);
// let x1 = -b + d ** (1 / 2);
// let x2 = -b - d ** (1 / 2);

// console.log(`tenglama yechimlari ${x1} ${x2}`);

// 40-masala

alert(
  "40-masala  tenglamalar sistemasini  yechamiz a1*x+b1*y=c1 a2*x+b2*y =c2"
);

let a1 = Number(prompt("a1 ni kiritinfg "));
let a2 = Number(prompt("a2 ni kiritinfg "));
let b1 = Number(prompt("b1 ni kiritinfg "));
let b2 = Number(prompt("b2 ni kiritinfg "));
let c1 = Number(prompt("c1 ni kiritinfg "));
let c2 = Number(prompt("c2 ni kiritinfg "));

let d = a1 * b2 - a2 * b1;
let x = (c1 * b2 - c2 * b1) / d;
let y = (a1 * c2 - a2 * c1) / d;

console.log(`tenglamalar sistemasi yechimlari x=${x} y=${y}`);
