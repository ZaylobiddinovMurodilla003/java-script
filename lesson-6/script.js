"use script";

// 1-array

let arrstr = ["sherzod", "jahongir", "abdulaziz"];
console.log(`${arrstr}`);

arrstr[0] = "murodilla";
arrstr[2] = 20;

console.log(`${arrstr}`);

// 2-array

let arrnum = [12, 34, 45, 56, 534];

let b = arrnum[0] + arrnum[4];

console.log(arrnum[3]);
console.log(`${b}`);
console.log(arrnum);
let c = arrnum.length;
console.log(c);

// 3-array

const arrar = ["men", 20, "yoshdaman "];
console.log(`${arrar}`);
console.log(`${arrar[0]} ${arrar[1]} ${arrar[2]}`);
arrar[0] = "sen";
console.log(`${arrar}`);

// 4-array

let newArr = new Array("mk4", "mk5", "gtr-34", "gtr-35");

console.log(newArr);

newArr.push("gtr-35 white edition");
console.log(newArr);

newArr.unshift("mk3");
console.log(newArr);

newArr.pop();
console.log(newArr);

newArr.shift();
console.log(newArr);

console.log(newArr.indexOf("mk4"));
console.log(newArr.indexOf("mk6"));
console.log(newArr.includes("mk5"));
console.log(newArr.includes("dfefr"));

newArr.splice(0, 3);
console.log(newArr);
