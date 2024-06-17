// 1-р дасгал - Өгөгдсөн 2 тооны ихийг олох функц бич.

let function1 = (x, y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

let biggerNumber = function1(4, 8);
console.log("1 -  Bigger number is ", biggerNumber);
// 2-р дасгал - Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
let array2 = [12, 32, 22, 42, 52];
let function2 = (x) => {
  for (i = 0; i < array2.length; i++) {
    if (x == array2[i]) {
      return x;
    } else {
      return -1;
    }
  }
};
let too = function2(12);
console.log("2 -  ugugdsun too bgaa eseh", too);

// 3-р дасгал - Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
// const index = findIndex("Hello", "c");
// let function3 = () => {};
// let temdegt = function3("My");
// console.log("3 - Temdegt baigaa eseh:", findIndex);

// 4-р дасгал - Өгөгдсөн array - ийн дундажыг олох функц бич.
let array4 = [12, 22, 32, 42, 52];
let sum4 = 0;
let average4 = sum4;
let function4 = () => {
  for (i = 0; i < array4.length; i++) {
    sum4 += array4[i];
    average4 = sum4 / array4.length;
  }
  return average4;
};
let dundaj4 = function4();
console.log("4 - average of array = ", dundaj4);
// 5-р дасгал - Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
let array5 = [12, 22, 32, 42, 52];
let sum5 = 0;
let average5 = sum5;
let function5 = () => {
  for (i = 0; i < array5.length; i++) {
    sum5 += array5[i];
  }
  return sum5;
};
let niilber5 = function5();
console.log("5 - average of array = ", niilber5);
// 6-р дасгал - Өгөгдсөн тоо анхны эсэхийг олох функц бич.
let function6 = (x) => {
  if (x % 2 > 0 && x % 3 > 0 && x % 5 > 0 && x % 7 > 0) {
    return "true";
  } else {
    return "false";
  }
};
let primeNumber = function6(17);
console.log("6 - Is prime number: ", primeNumber);
// 7-р дасгал - Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12  output: false
let digit7 = 0;
let sum7 = 0;
let function7 = (x) => {
  while (x !== 0) {
    digit7 = x % 10;
    x -= digit7;
    x /= 10;
    sum7 = sum7 * 10 + digit7;
  }
  if (sum7 == x) {
    return "True";
  } else {
    return "False";
  }
};
let number7 = function7(121);
console.log("7 -  Is Palindrome number:", number7);
// 8-р дасгал - Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh
/* 9-р дасгал - */
let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
    points: 70,
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
    points: 50,
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
    points: 99,
  },
  {
    name: "Тэмүүлэн",
    age: 23,
    gender: "male",
    points: 55,
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
    points: 85,
  },
];
//  1) Эхний объектыг хэвлэж гаргах
console.log("9-  1) The first Object:", students[0]);
//  2) Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
let boysNumber = 0;
let girlsNumber = 0;
let function9_2 = () => {
  for (i = 0; i < students.length; i++) {
    if ((students[i].gender = "male")) {
      boysNumber++;
    } else if ((students[i].gender = "female")) {
      girlsNumber++;
    }
  }
  console.log("Boys number:", boysNumber);
  console.log("Girls number:", girlsNumber);
};
function9_2();
//  3) Сурагчдын насны дунджийг олох функц бичих
//  4) Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
//  5) 60-аас дээш оноо авсан cурагчдийг тоол
