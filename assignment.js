// 1-р дасгал myAge гэсэн хувьсагч зарлаж. 25 аас дээш байвал console дээр “above 25” гэж гаргах, 25 аас доош байвал console дээр “below 25” гэж гаргах
let myAge = 26;
if (myAge >= 25) {
  console.log("1. above 25");
} else {
  console.log("1. below 25");
}
// 2-р дасгал n хувьсагчын утгын дагуу сондгой эсвэл тэгш олж хэвлэнэ. жишээ нь: n = 2 байвал it’s even number гэж console дээр гарж ирэх
let n2 = 15;
if (n2 % 2 == 0) {
  console.log("2. its even number");
} else {
  console.log("2. its odd number");
}
// 3-р дасгал if … else ашиглан 12, 45, 30 хамгийн их утгатай хувьсагчийг console дээр хэвлэнэ үү
const a3 = 12,
  b3 = 45,
  c3 = 30;
if (a3 > b3 && a3 > c3) {
  console.log("3.The biggest number =", a3);
} else if (b3 > a3 && b3 > c3) {
  console.log("3.The biggest number =", b3);
} else {
  console.log("3.The biggest number =", c3);
}
// 4-р дасгал if … else ашиглан 12, 45, 30 хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
const a4 = 12,
  b4 = 45,
  c4 = 30;
if (a4 < b4 && a4 < c4) {
  console.log("4.The biggest number =", a4);
} else if (b4 > a4 && b4 > c4) {
  console.log("4.The biggest number =", b4);
} else {
  console.log("4.The biggest number =", c4);
}
// 5-р дасгал Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү. 2-р сарыг хаварт тооцно уу. Input: 3 output: Spring
let months = "12";
switch (months) {
  case "2":
  case "3":
  case "4":
    console.log("5. Spring");
    break;
  case "5":
  case "6":
  case "7":
    console.log("5. Summer");
    break;
  case "8":
  case "9":
  case "10":
    console.log("5. Autumn");
    break;
  case "11":
  case "12":
  case "1":
    console.log("5. Winter");
    break;
  default:
    console.log("5. not valid date");
}
// 6-р дасгал 4 н хувьсагч зарлан 85, 75, 96, 69 гэсэн тоон утга өгөх. Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол: 80-аас их тоонуудын нийлбэр - 181
const a6 = 85,
  b6 = 75,
  c6 = 96,
  d6 = 69;
let sum6 = 0;
if (a6 > 80) {
  sum6 += a6;
}
if (b6 > 80) {
  sum6 += b6;
}
if (c6 > 80) {
  sum6 += c6;
}
if (d6 > 80) {
  sum6 += d6;
}
console.log("6. Sum =", sum6);
// 7-р дасгал 4 н хувьсагч зарлан 3, 7, 2, 4 гэсэн тоон утга өгөх.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоонуудын үржвэр - 24
const a7 = 3;
const b7 = 7;
const c7 = 2;
const d7 = 4;

let multi7 = 1;

if (a7 < 5) {
  multi7 *= a7;
}
if (b7 < 5) {
  multi7 *= b7;
}
if (c7 < 5) {
  multi7 *= c7;
}
if (d7 < 5) {
  multi7 *= d7;
}
console.log("7. multiplication = ", multi7);
/* 8-р дасгал Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
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
  console.log("8. 1) Bat - Very bad");
} else if (Bat < 70 && Bat >= 60) {
  console.log("8. 1) Bat - Bad");
} else if (Bat < 80 && Bat >= 70) {
  console.log("8. 1) Bat - Fair");
} else if (Bat < 90 && Bat >= 80) {
  console.log("8. 1) Bat - Good");
} else if (Bat < 100 && Bat >= 90) {
  console.log("8. 1) Bat - Very good");
}

if (Ochir < 60) {
  console.log("   2) Ochir - Very bad");
} else if (Ochir < 70 && Ochir >= 60) {
  console.log("   2) Ochir - Bad");
} else if (Ochir < 80 && Ochir >= 70) {
  console.log("   2) Ochir - Fair");
} else if (Ochir < 90 && Ochir >= 80) {
  console.log("   2) Ochir - Good");
} else if (Ochir < 100 && Ochir >= 90) {
  console.log("   2) Ochir - Very good");
}
// 9-р дасгал Tухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү. Input: 120, 33, 10, 12 output: 10
let array = [120, 33, 10, 12];
let theLeastNumber = array[0];
for (i = 0; i < array.length; i++) {
  if (array[i] < theLeastNumber) {
    theLeastNumber = array[i];
  }
}
console.log("9. The least number = ", theLeastNumber);
/* 10-р дасгал Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү. Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй. */
const A_Team = 96 + 108 + 89;
const B_Team = 88 + 91 + 110;
if (A_Team / 3 > B_Team / 3) {
  console.log(
    "10. Winner is A team with an average of",
    A_Team / 3,
    "(A team average =",
    A_Team / 3,
    "B team average =",
    B_Team / 3,
    ")"
  );
} else if (B_Team / 3 > A_Team) {
  console.log(
    "10. Winner is b team with an average of",
    A_Team / 3,
    "(A team average =",
    A_Team / 3,
    "B team average =",
    B_Team / 3,
    ")"
  );
}

// 11-р дасгал 3 н хувьсагч зарлан height, age, hasAdult. Өндөр нь 140cm болон нас нь 10-ээс тэнцүү буюу дээш байвал дугуй унаж болно. Эсвэл hasAdult нь үнэн байвал дугуй унаж болно. Бусад нөхцөлд "not allowed to ride" гэсэн console гарна
let age = 12;
let height = 139;
let hasAdult;
if (age >= 10 && height >= 140) {
  console.log("11. You may ride bike");
} else if (hasAdult && age >= 18) {
  console.log("11. You may ride bike");
} else {
  console.log("11. Not allowed to ride bike");
}
// 12-р дасгал Өгөгдсөн 4 тооны 11-д хууваагддаггүй тоонуудынх нь нийлбэрийг ол. Input: 7 22 13 30 output: 50
const a12 = 7;
const b12 = 22;
const c12 = 13;
const d12 = 30;

let sum12 = 0;

if (a12 % 11 != 0) {
  sum12 += a12;
}
if (b12 % 11 != 0) {
  sum12 += b12;
}
if (c12 % 11 != 0) {
  sum12 += c12;
}
if (d12 % 11 != 0) {
  sum12 += d12;
}
console.log("12. sum = ", sum12);
