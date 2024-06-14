// console.log("JS basic exercises start from here");

// const first_name = "nmT"; // string #3
// const last_name = "TETA"; // #3
// const age = "23"; // number 20, 20.30 #2 //
// const gerelseneseh = false; // boolean: true/false
// const email = "nomttumurkhuu@yahoo.com"; // string #3 //
// const job = "Software engineer in process";
// const angi = " Leap year ";

// console.log("Таны нэр:", first_name);
// console.log("Таны овог:", last_name);
// console.log("Таны нас:", age);
// console.log("Таны гэрэлсэн эсэх:", gerelseneseh); //
// console.log("Таны ажил:", job); // "null"
// console.log("Таны анги:", angi); // "string"
// console.log("Таны имэйл:", email); // "string"
// // 1. comments make code readable //

// let num = 5,
//   num0 = 15;

// let niilber = num + num0;

// let yalgavr = num0 - num;

// let urjver = num * num0;

// let noogdvor = num0 / num;

// console.log(
//   "Нийлбэр:",
//   niilber,
//   ";   Яалгавар:",
//   yalgavr,
//   ";   Үржвэр:",
//   urjver,
//   ";   Ногдвор:",
//   noogdvor
// );
// let a = 3,
//   b = 4,
//   c = 5;
// let p = a + b + c;
// console.log("a =", a, "b =", b, "c =", c, "бол P = ?");
// console.log("P:", p);

// let gegabyte = 15 * 1024 * 1024;

// console.log("15 gegabyte =", gegabyte);

// let celsius = 15;
// let fahrenheit = (celsius * 9) / 5 + 32;
// console.log("celsius:", celsius, "бол F=?");
// console.log("F:", fahrenheit);

// let fahrenheit1 = 50;
// let celsius1 = ((fahrenheit1 - 32) * 5) / 9;
// console.log("fahrenheit:", fahrenheit1, "бол C = ?");
// console.log("C:", celsius1);

// let q = 15;
// let e = 10;
// let niilber1 = 25;
// let yalgavar1 = 5;
// let urjver1 = q * e;
// let noogdvor1 = q / e;
// let uldegdel = q % e;

// console.log(
//   "Нийлбэр:",
//   niilber1,
//   ";    Яалгавар:",
//   yalgavar1,
//   ";    Үржвэр:",
//   urjver1,
//   ";    Ногдвор:",
//   noogdvor1,
//   ";    Үлдэгдэл:",
//   uldegdel
// );
// console.log("JS basic exercises end here");

console.log("JS conditional exercises start from here");
// 1-р дасгал - myAge гэсэн хувьсагч зарлаж. 25 аас дээш байвал console дээр “above 25” гэж гаргах, 25 аас доош байвал console дээр “below 25” гэж гаргах
let myAge = 10;
if (myAge >= 25) {
  console.log("above 25");
} else {
  console.log("below 25");
}
// 2-р дасгал - n хувьсагчын утгын дагуу сондгой эсвэл тэгш олж хэвлэнэ. жишээ нь: n = 2 байвал it’s even number гэж console дээр гарж ирэх
let n = 69;
if (n % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
// 3-р дасгал - if … else ашиглан 12, 45, 30 хамгийн их утгатай хувьсагчийг console дээр хэвлэнэ үү
const num1 = 12;
const num2 = 45;
const num3 = 30;
if (num1 > num2 && num1 > num3) {
  console.log("The most number = ", num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("The most number =", num2);
} else if (num3 > num1 && num3 > num1) {
  console.log("The most number =", num3);
}
// 4-р дасгал - if … else ашиглан 12, 45, 30 хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү

if (num1 < num2 && num1 < num3) {
  console.log("The least number = ", num1);
} else if (num2 < num1 && num2 < num3) {
  console.log("The least number =", num2);
} else if (num3 < num1 && num3 < num1) {
  console.log("The least number =", num3);
}

// 5-р дасгал - Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү. 2-р сарыг хаварт тооцно уу. Input: 3 output: Spring

// let months = prompt("Enter Month Number");
let months = "12";
switch (months) {
  case "2":
  case "3":
  case "4":
    console.log("Spring");
    break;
  case "5":
  case "6":
  case "7":
    console.log("Summer");
    break;
  case "8":
  case "9":
  case "10":
    console.log("Autumn");
    break;
  case "11":
  case "12":
  case "1":
    console.log("Winter");
    break;
  default:
    console.log("not valid date");
}

// 6-р дасгал - 4 н хувьсагч зарлан 85, 75, 96, 69 гэсэн тоон утга өгөх. Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол: 80-аас их тоонуудын нийлбэр - 181

const a = 85;
const a1 = 75;
const a2 = 96;
const a3 = 69;

let sum = 0;

if (a > 80) {
  sum += a;
}
if (a1 > 80) {
  sum += a1;
}
if (a2 > 80) {
  sum += a2;
}
if (a3 > 80) {
  sum += a3;
}
console.log("Sum =", sum);

// 7-р дасгал - 4 н хувьсагч зарлан 3, 7, 2, 4 гэсэн тоон утга өгөх.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоонуудын үржвэр - 24

const b = 3;
const b1 = 7;
const b2 = 2;
const b3 = 4;

let multi = 1;

if (b < 5) {
  multi *= b;
}
if (b1 < 5) {
  multi *= b1;
}
if (b2 < 5) {
  multi *= b2;
}
if (b3 < 5) {
  multi *= b3;
}
console.log("multiplication = ", multi);

/* 8-р дасгал - Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
Бат - 67 оноо, Очир - 59 оноо авчээ
Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
b. Хэрвээ оноо 60 - 70 хооронд байвал - Хангалттай
c. Хэрвээ оноо 70 - 80 хооронд байвал - Дунд
d. Хэрвээ оноо 80 - 90 хооронд байвал - Сайн
e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм
Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу. */

let Bat = 80;
let Ochir = 59;

if (Bat < 60) {
  console.log("Bat - Very bad");
} else if (Bat < 70 && Bat >= 60) {
  console.log("Bat - Bad");
} else if (Bat < 80 && Bat >= 70) {
  console.log("Bat - Fair");
} else if (Bat < 90 && Bat >= 80) {
  console.log("Bat - Good");
} else if (Bat < 100 && Bat >= 90) {
  console.log("Bat - Very good");
}

if (Ochir < 60) {
  console.log("Ochir - Very bad");
} else if (Ochir < 70 && Ochir >= 60) {
  console.log("Ochir - Bad");
} else if (Ochir < 80 && Ochir >= 70) {
  console.log("Ochir - Fair");
} else if (Ochir < 90 && Ochir >= 80) {
  console.log("Ochir - Good");
} else if (Ochir < 100 && Ochir >= 90) {
  console.log("Ochir - Very good");
}

// 9-р дасгал - Tухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү. Input: 120, 33, 10, 12 output: 10

const c1 = 10;
const c2 = 33;
const c3 = 10;
const c4 = 9;

if (c1 <= c2 && c1 <= c3 && c1 <= c4) {
  console.log("The least number =", c1);
} else if (c2 <= c1 && c2 <= c3 && c2 <= c4) {
  console.log("The least number =", c2);
} else if (c3 <= c1 && c3 <= c2 && c3 <= c4) {
  console.log("The least number =", c3);
} else if (c4 <= c1 && c4 <= c2 && c4 <= c3) {
  console.log("The least number =", c4);
}
/* 10-р дасгал - Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү. Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй. */
const A_Team = 96 + 108 + 89;
const B_Team = 88 + 91 + 110;
if (A_Team / 3 > B_Team / 3) {
  console.log(
    "Winner is A team with an average of",
    A_Team / 3,
    "(A team average =",
    A_Team / 3,
    "B team average =",
    B_Team / 3,
    ")"
  );
} else if (B_Team / 3 > A_Team) {
  console.log(
    "Winner is b team with an average of",
    A_Team / 3,
    "(A team average =",
    A_Team / 3,
    "B team average =",
    B_Team / 3,
    ")"
  );
}

/* 11-р дасгал - 3 н хувьсагч зарлан height, age, hasAdult. Өндөр нь 140cm болон нас нь 10-ээс тэнцүү буюу дээш байвал дугуй унаж болно. Эсвэл hasAdult нь үнэн байвал дугуй унаж болно. Бусад нөхцөлд "not allowed to ride" гэсэн console гарна */
let age = prompt("Enter your age");
let height = prompt("Enter your height");
let hasAdult;
if (age >= 10 && height >= 140) {
  console.log("You may ride bike");
} else if (hasAdult && age >= 18) {
  console.log("You may ride bike");
} else {
  console.log("You may not ride bike");
}
/* 12-р дасгал Өгөгдсөн 4 тооны 11-д хууваагддаггүй тоонуудынх нь нийлбэрийг ол. Input: 7 22 13 30 output: 50 */
const d1 = 7;
const d2 = 22;
const d3 = 33;
const d4 = 30;

let sum1 = 0;

if (d1 % 11 != 0) {
  sum1 += d1;
}
if (d2 % 11 != 0) {
  sum1 += d2;
}
if (d3 % 11 != 0) {
  sum1 += d3;
}
if (d4 % 11 != 0) {
  sum1 += d4;
}
console.log("sum = ", sum1);
console.log("JS conditional exercises start from here");
