let firstName = "firstName";
let lastName = "lastName";
let country = "country";
let city = "city";
let age = 30;
let isMarried = false;
let year = 1992;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log("10" == 10);
console.log(parseInt("9.8") == 10);

console.log(true == 1);
console.log("10" == 10);
console.log(true != "a");

console.log(false == 0);
console.log(false == 0n);
console.log(NaN != NaN);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python" == "jargon");

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log("python".includes("on") && "jargon".includes("on"));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

var base = prompt("Enter the base of triangle", "number goes here");
var height = prompt("Enter the height of triangle", "number goes here");
alert(`Area of triangle is ${0.5 * base * height}`);

var sideA = prompt("Enter Side a:");
var sideB = prompt("Enter Side b:");
var sideC = prompt("Enter Side c:");
alert(
  `The perimeter of the triangle is ${
    parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
  }`
);

console.log(
  `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
);
