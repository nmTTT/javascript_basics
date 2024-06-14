/* 1-р дасгал fruits = ["apple", "banana", "orange", "kiwi", "grape"]
                    1. Ehnii element ruu handah
                    2. Suulchiin element ruu handah
                    3. 3 dahi element ruu handah */
console.log("1-р дасгал:");
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
let length = fruits.length;
console.log("1.", fruits[0]);
console.log("2.", fruits[length - 1]);
console.log("3.", fruits[2]);
/* 2-р бодлого array: [5, 6, 4, 12, 19, 121, 1, 7,  9, 63]
                    1. Хэдэн ширхэг сондгой тоо байгаа вэ?
                    2. Хэдэн ширхэг тэгш тоо байгаа вэ? */
console.log("2-р дасгал");
let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let output = 0;
let evencount = 0;
let oddcount = 0;
for (i = 0; i < array.length; i++) {
  output = array[i];
  if (output % 2 == 1) {
    oddcount++;
  } else {
    evencount++;
  }
}

console.log("Odd number count = ", oddcount);
console.log("Even number count = ", evencount);

/* 3-р бодлого arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]
                    1. Array iin length iin oloh
                    2. Array доторх тоонуудын нийлбэрийг ол.
                    3. Array доторх тоонуудын average ол.
                    4. Array доторх тоонуудын нийлбэрийг ол.
                    5. Array доторх тэгш тоонуудын нийлбэрийг ол.
                    6. Array доторх сондгой тоонуудын үржвэрийг ол.
                    7. Хамгийн их тоог ол.
                    8 .Хамгийн бага тоог ол.*/
console.log("3-р дасгал");
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

let arrayLength = arrayOfNumbers.length;
console.log("1. Array length = ", arrayLength);

let arraySum = 0;

for (i = 0; i < arrayLength; i++) {
  arraySum += arrayOfNumbers[i];
}
console.log("2. arraySum = ", arraySum);

console.log("3. ", arraySum / arrayLength);

let evenNumber;
let evenNumberSum = 0;
for (i = 0; i < arrayLength; i++) {
  evenNumber = arrayOfNumbers[i];
  if (evenNumber % 2 == 0) {
    evenNumberSum += evenNumber;
  }
}
console.log("4. Sum of even number", evenNumberSum);

let oddNumber;
let oddNumberSum = 0;
let oddNumberMulti = 1;

for (i = 0; i < arrayLength; i++) {
  oddNumber = arrayOfNumbers[i];
  if (oddNumber % 2 == 1) {
    oddNumberSum += oddNumber;
  }
}
console.log("5. Sum of odd number", oddNumberSum);

for (i = 0; i < arrayLength; i++) {
  oddNumber = arrayOfNumbers[i];
  if (oddNumber % 2 == 1) {
    oddNumberMulti *= oddNumber;
  }
}
console.log("6. Multiplification of odd number", oddNumberMulti);

let theMostNumber = 0;
for (i = 0; i < arrayLength; i++) {
  if (arrayOfNumbers[i] > theMostNumber) {
    theMostNumber = arrayOfNumbers[i];
  }
}
console.log("7. The most number", theMostNumber);

let theLeastNumber = arrayOfNumbers[0];
for (i = 0; i < arrayLength; i++) {
  if (arrayOfNumbers[i] < theLeastNumber) {
    theLeastNumber = arrayOfNumbers[i];
  }
}

console.log("7. The least number", theLeastNumber);
