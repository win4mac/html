// for (let i = 0; i <= 5; i = i + 2) {
//   console.log("hello from loop " + i);
// }

// let = 1;
// while (i < 5) {
//   console.log("Hello from loop " + i);
//   i = i + 1;
// }
// console.log("LOOP FINISH");

let textFruits = "";
const fruites = ["oranges", "banans", "apples"];
const output = document.querySelector(".output");
for (let i = 0; i < 3; i++) {
  textFruits = textFruits + fruites[i];
}

console.log(textFruits);
