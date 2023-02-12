//variables
// ------------------
//4-types-of variables:
//1. var
//2. let
//3. const
//4. None

// var a = 20;
// console.log(a);

// let a = 30;
// console.log(a);

// const b = 50;
// console.log(b);

// x = "vivek";
// console.log(x);

//---- var:-> (1995) //globally
// console.log(a);
// var a = "vivek"
// {
//     var b = 30;
//     console.log(b);
//   }
//console.log(b) => 30

//---- let:-> ES6(2015) //block level
// console.log(a);
// {
//   let b = 30;
//   console.log(b);
// }
// console.log(b); => Error

//---- const:-> ES6 (2015) //used for final value
// const a = "vivek";
// console.log(a);
// a = "abcd";
// console.log(a); => error
//-----------------------------------------------

//Operators:
//Arithmetic operators
//1. +
//2. -
//3. *
//4. **
//5. /
//6. %
//7. ++
//8. --

//1. Addition:
// let a = 20;
// let b = 30;
// console.log(a + b); => 50

// let a = "20";
// let b = 20;
// console.log(a + b); => 2020

//2. Subtraction
// let a = 30;
// let b = "20";
// console.log(a - b); //10

//3. Multiplication
// let a = 30;
// let b = 2;
// console.log(a * b);

//4. Exponentiation
// let a = 3;
// let b = 2;
// console.log(b ** a);

//5. Division
// let a = 20;
// console.log(a / 3);

//6. Modulus

// let a = 20;
// console.log(a % 3);

//7. Increment
// let a = 20;
// //pre-increment
// console.log(++a, "pre");
// //post-increment
// a++;
// console.log(a, "post");

//8. Decrement
// let a = 2;
// //pre-decrement
// console.log(--a, "pre");
// //post-decrement
// a--;
// a--;
// console.log(a--, "post");

//Assignment operators
//1. = => a=b
//2. += => x +=y => x = x+y;
//3. -= => x-= y => x = x-y;
//4. *= => x*= y => x = x*y;
//5. /= => x/= y => x = x/y;
//6. %= => x%= y => x = x%y;
//7. **= => x**= y => x = x**y;

//Comparison Operators
// 1. ==
// 2. ===
// 3. !=
// 4. !==
// 5. >
// 6. <
// 7. >=
// 8. <=
// 9. ?

//1. ==
// let a = 20;
// let b = "20";

// console.log(a == b);

//2. ===
// let a = 20;
// let b = 20.0;

// console.log(typeof a, typeof b);

// console.log(a === b);

//3. !=
// let a = 20;
// let b = "20";

// console.log(a != b);

//4. !==
// let a = 20;
// let b = 20.0;
// console.log(a !== b);

//9. ?
// let a = "20";
// let b = a !== 20 ? 10 : 20;

// console.log(a, b);

//Logical Operators
//1. &&
//2. ||
//3. !

//1. && =>

// let a = 20;
// let b = 30;

// //true && true => true
// //false && false => false
// //false && true => false
// //true && false => false

// console.log(a >= 20 && b <= 30);

//2. || =>
// let a = 20;
// let b = 30;

// //true && true => true
// //false && true => true
// //true && false => true
// //false && false => false

// console.log(a > 20 || b < 30);

//3. ! =>
// console.log(!true);

//Type operator
//typeof
//instanceof

//typeof
// let a = [10, 20, 30];

// console.log(typeof a);//object

//instanceof
// function Car(name) {
//   this.name = name;
// }

// function Bike(name) {
//   this.name = name;
// }

// let auto = new Car("800");

// console.log(auto instanceof Bike);

//Bitwise Operator =>
//1. &
//2. |
//3. ~
//4. ^
//5. << left shift
//6. >> right shift
//7. >>> unsigned right shift

//1. & =>
// console.log(5 & 6);

//1&1 => 1
//1&0 => 0
//0&1 => 0
//0&0 =>0

//2. | =>

//1|1 =>1
//1|0 => 1
//0|1 => 1
//0|0 => 0

// console.log(5 | 1);

// 0101;
// 0001;

//3. ~
//  0 => 1
//  1 => 0
// 0101;
// 1010;
// console.log(~5);

console.log(5 >> 2);

// 0101 >> 2

// 0001

// 0101 << 1

// 01010

// 0101 << 2

// 010100

// 0101 <<3

// 0101000
