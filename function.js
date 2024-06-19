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
      return i;
    }
  }
  return -1;
};
let too = function2(22);
console.log("2 -  ugugdsun toonii index:", too);

// 3-р дасгал - Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
const findIndex = (word, character) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === character) {
      return i;
    }
  }
  return -1;
};
let sss = "Hello";
const index = findIndex(sss, "l");
console.log("3 - temdegtiin index", index);

// 4-р дасгал - Өгөгдсөн array - ийн дундажыг олох функц бич.
let sum4 = 0;
let function4 = (inputArr4) => {
  for (i = 0; i < inputArr4.length; i++) {
    sum4 += inputArr4[i];
    average4 = sum4 / inputArr4.length;
  }
  return average4;
};

let d = [1, 2, 3];
let dundaj4 = function4([1, 2, 4]);
console.log("4 - average of array = ", dundaj4);
// 5-р дасгал - Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
let sum5 = 0;
let function5 = (inputArr5) => {
  for (i = 0; i < inputArr5.length; i++) {
    sum5 += inputArr5[i];
  }
  return sum5;
};
let array5 = [12, 22, 32, 42, 52];
let niilber5 = function5(array5);
console.log("5 - average of array = ", niilber5);
// 6-р дасгал - Өгөгдсөн тоо анхны эсэхийг олох функц бич.
let num6 = 0;
let function6 = (x) => {
  for (i = 2; i <= x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
};
let primeNumber = function6(1001);
console.log("6 - Is prime number: ", primeNumber);
// 7-р дасгал - Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12  output: false
let digit7 = 0;
let sum7 = 0;
let function7 = (x) => {
  let num7 = x;
  while (x !== 0) {
    digit7 = x % 10;
    x -= digit7;
    x /= 10;
    sum7 = sum7 * 10 + digit7;
  }
  if (num7 == sum7) {
    return "True";
  } else {
    return "False";
  }
};

let number7 = function7(22);
console.log("7 -  Is Palindrome number:", number7);
// 8-р дасгал - Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh
const reverseIndex = (word) => {
  let reverse = word[word.length - 1];
  for (i = word.length - 2; i >= 0; i--) {
    reverse += word[i];
  }
  console.log("8 - input word", word);
  console.log("    reverse word", reverse);
};
reverseIndex("Hello World");
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
console.log("9 : ");
console.log("1) The first Object:", students[0]);
//  2) Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
let boysNumber = 0;
let girlsNumber = 0;
let function9_2 = (inpStu2) => {
  for (i = 0; i < inpStu2.length; i++) {
    if (inpStu2[i].gender == "male") {
      boysNumber++;
    } else if (inpStu2[i].gender == "female") {
      girlsNumber++;
    }
  }
  console.log("2) 1. Boys number -", boysNumber);
  console.log("   2. Girls number -", girlsNumber);
};
function9_2(students);
//  3) Сурагчдын насны дунджийг олох функц бичих
let sumOfAge = 0;
let functin9_3 = (inpStu3) => {
  for (i = 0; i < inpStu3.length; i++) {
    sumOfAge += inpStu3[i].age;
  }
  sumOfAge /= inpStu3.length;
  console.log("3) Average age of students -", sumOfAge);
};
functin9_3(students);
//  4) Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
let functin9_4 = (inpStu4) => {
  console.log("4)");
  for (i = 0; i < inpStu4.length; i++) {
    if (inpStu4[i].age >= 21) {
      console.log("21+ student -", inpStu4[i].name, "(", inpStu4[i].age, ")");
    }
  }
};
functin9_4(students);
//  5) 60-аас дээш оноо авсан cурагчдийг тоол
let functin9_5 = (inpStu5) => {
  console.log("5)");
  for (i = 0; i < inpStu5.length; i++) {
    if (inpStu5[i].points >= 60) {
      console.log(
        "60+ point student -",
        inpStu5[i].name,
        "(",
        inpStu5[i].points,
        ")"
      );
    }
  }
};
functin9_5(students);
// Extra 1 - Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }
let array = [5, 4, 3, 2, 1];
let extra1 = (inp1) => {
  let max = 0;
  let min = array[0];
  let avg11 = 0;
  for (i = 0; i < inp1.length; i++) {
    if (inp1[i] < min) {
      min = inp1[i];
    }
    if (inp1[i] > max) {
      max = inp1[i];
    }
    avg11 += array[i] / inp1.length;
  }

  // console.log("extra 1 - min = ", min);
  // console.log("          max = ", max);
  // console.log("          avg = ", avg11);
  return { min, max, avg11 };
};
let extra1_1 = extra1(array);
console.log(extra1_1);
/* Extra 2 - Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih. */
const orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];
let extra2 = (inp2) => {
  let sum = 0;
  for (i = 0; i < inp2.length; i++) {
    console.log(inp2[i].items);
    for (j = 0; j < inp2[i].items.length; j++) {
      console.log(inp2[i].items[j]);
      sum += inp2[i].items[j].price;
    }
  }
  return sum;
};
let s = extra2(orders);
console.log("niit borluulalt =", s);

/* Extra 3 - Ugugdsun array iin anhnii utagtai bolon квадрат, куб iin oldog function bichih. jishee ni: input [1, 2, 3, 4, 5]
    a. output [ { original: 1, square: 1, cube: 1 }, { original: 2, square: 4, cube: 8 }, { original: 3, square: 9, cube: 27 },  { original: 4, square: 16, cube: 64 }, { original: 5, square: 25, cube: 125 } ]*/
let extra3 = (inp1) => {
  let original = new Array(inp1.length);
  for (i = 0; i < inp1.length; i++) {
    original[i] = {
      original: inp1[i],
      square: inp1[i] * inp1[i],
      cube: inp1[i] * inp1[i] * inp1[i],
    };
  }
  return original;
};
let rersult3 = extra3(array);
console.log("Output: ", rersult3);
/* Extra 4 - Ugugdsun company iin data aas hamgiin ih tsalintai ajiltang oldog function bichih.*/
const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000 },
    { name: "Bob", salary: 120000 },
    { name: "Charlie", salary: 110000 },
  ],
};
let extra4 = (inp4) => {
  let max = 0;
  let maxName = "";
  for (i = 0; i < inp4.employees.length; i++) {
    if (max < inp4.employees[i].salary) {
      max = inp4.employees[i].salary;
      maxName = inp4.employees[i].name;
    }
  }
  return maxName;
};
let result4 = extra4(company);
console.log("The most salary:", result4);
