//1-р дасгал - 10 хүртэлх натурал тоог хэвлэх программ бич//
console.log("1-р дасгал");
let i = 0;
for (i = 0; i <= 10; i++) {
  console.log(i);
}
// 2-р дасгал - 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
console.log("2-р дасгал");
let i1 = 0;
for (i1 = 0; i1 < 10; i1 += 1) {
  i1++;
  console.log(i1);
}
// 3-р дасгал - 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
console.log("3-р дасгал");

let i2 = 0;
for (i2 = 0; i2 <= 10; i2 += 2) {
  console.log(i2);
}
// 4-р дасгал - 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
console.log("4-р дасгал");
let sum3 = 0;
for (i3 = 0; i3 <= 100; i3++) {
  sum3 += i3;
  console.log(sum3);
}
// 5-р дасгал - N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич jishee ni: input: 101 output: 5151
console.log("5-р дасгал");
const n4 = 101;
let sum4 = 0;
for (i4 = 0; i4 <= n4; i4++) {
  sum4 += i4;
  console.log(sum4);
}
// 6-р дасгал - N тооны факториал олох программ бич jishee ni: input: 4 output: 24
console.log("6-р дасгал");

const n5 = 5;
let multi = 1;
for (i5 = 1; i5 <= n5; i5++) {
  multi *= i5;
  console.log(multi);
}
// 7-р дасгал - Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич jishee ni: input: 123 output: 6
console.log("7-р дасгал");

let number = 123;
let digit = 0;
let sum = 0;
while (number !== 0) {
  digit = number % 10;
  number -= digit;
  number /= 10;
  sum += digit;
}

console.log("Sum of digit = ", sum);

// 8-р дасгал - Өгөгдсөн тоон дахь тэгш цифрүүдийн нийлбэрийг ол jishee ni: input: 1234 output: 6
console.log("8-р дасгал");

let number7 = 123456;
let digit7 = 0;
let x = 0;
while (number7 !== 0) {
  digit7 = number7 % 10;
  number7 -= digit7;
  number7 /= 10;
  if (digit7 % 2 == 0) {
    x += digit7;
  }
}

console.log("Sum of digit = ", x);

// 9-р дасгал - N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
console.log("9-р дасгал");
const n8 = 20;
let i8 = 0;
let sum8 = 0;
for (i8 = 0; i8 < n8; i8++) {
  i8++;
  sum8 += i8;
  console.log(i8, sum8);
}
// 10-р дасгал - N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
console.log("10-р дасгал");
const n9 = 20;
let i9 = 0;
let sum9 = 0;
for (i9 = 0; i9 <= n9; i9 += 2) {
  sum9 += i9;
  console.log(i9, sum9);
}

// 11-р дасгал - Өгөгдсөн эерэг тооны урвууг хэвлэх программ бич jishee ni: input: 123 output: 321
console.log("11-р дасгал");
let number10 = 1234;
let digit10 = 0;
let sum10 = 0;
while (number10 !== 0) {
  digit10 = number10 % 10;
  number10 -= digit10;
  number10 /= 10;
  sum10 = sum10 * 10 + digit10;
}
console.log("output = ", sum10);
