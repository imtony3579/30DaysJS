let challengee = "30 Days Of JavaScript";
console.log(challengee);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
var arrayString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(arrayString.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
// Seciton 2
var temp =
  "You cannot end a sentence with because because because is a conjunction";
console.log(temp.indexOf("because"));
console.log(temp.lastIndexOf("because"));
console.log(temp.search("because"));
var testing = " 30 Days Of JavaScript ";
console.log(testing.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.log(challenge.match(/a/g));
var conFirst = "30 Days of";
var conSecond = " JavaScript";
console.log(conFirst.concat(conSecond));
console.log(challenge.repeat(2));
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
var checkFirst = "10";
var checkSecond = 10;
console.log(parseInt(checkFirst) == checkSecond);
console.log(parseFloat("9.8") == 10);
console.log(Math.ceil(parseFloat("9.8")) == 10);
var checkThird = "python";
var checkForth = "jargon";
console.log("python jargon".match(/on/gi));
console.log("I hope this course is not full of jargon.".match(/jargon/));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(50 + Math.random() * 51));
console.log(Math.floor(Math.random() * 256));
console.log("JavaScript".charAt(Math.random() * "JavaScript".length));
console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);
// Level 3
var checkfift =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(checkfift.match(/love/gi).length);

var checksixth = "You cannot end a sentence with because because because is a conjunction";
console.log(checksixth.match(/because/gi).length);

var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/\%|\@|\$|\#|\&|\;/g,''));
var temp1 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
var a =  temp1.match(/\d+/g);
console.log((+a[0])+(+a[1])+(+a[2]));