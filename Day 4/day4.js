//--------Level 1-----------

/* 
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
*/
let age = prompt("Enter your Age", "Type your age here");
// if (age >= 18) {
//   alert("You are old enough to drive");
// } else {
//   alert(`You are left with ${18 - parseInt(age)} years to drive.`);
// }

/*
2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/
// if(age<30){
//     alert(`You are ${30 - age} years younger than me.`);
// }else if(age== 30){
//     alert(`You are as same age as me`);
// }else {
//     alert(`You are ${age - 30} years older than me.`);
// }

/*
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
*/
let a = 4;
let b = 5;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (b > a) {
  console.log(`${b} is greater than ${a}`);
}
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

/*
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
*/
if (age % 2 == 0) {
  console.log(`${age} is an even number`);
} else {
  console.log(`${age} is an odd number`);
}

//--------Level 2-----------

/*
1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
switch (true) {
  case 80 < age && age < 100:
    console.log("Your grade is A");
    break;
  case 70 < age && age < 89:
    console.log("Your grade is B");
    break;
  case 60 < age && age < 69:
    console.log("Your grade is C");
    break;
  case 50 < age && age < 59:
    console.log("Your grade is D");
    break;
  case 0 < age && age < 49:
    console.log("Your grade is F");
    break;
}

/*
2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let month = prompt("Enter month name").toLowerCase();
if (month == "september" || month == "october" || month == "november") {
  console.log("The season is Autumn.");
} else if (month == "december" || month == "january" || month == "february") {
  console.log("The season is Winter.");
} else if (month == "march" || month == "april" || month == "may") {
  console.log("The season is Spring.");
} else if (month == "june" || month == "july" || month == "august") {
  console.log("The season is Summer.");
}

/*
Check if a day is weekend day or a working day. Your script will take day as an input.
*/