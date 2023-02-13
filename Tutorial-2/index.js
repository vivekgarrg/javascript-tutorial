//Data Types:

//1. Number
//2. Boolean
//3. Symbol
//4. Bigint
//5. String
//6. Undefined
//7. Null
//8. Object

//Objects:

// 1. An Object
// let obj = {
//   name_bcd: 12,
//   id: 12,
// };

// console.log(typeof obj);

// //2. Array

// let a = [12, 34, 45.01, "abc"];
// console.log(typeof a);

// //3. date

// let monthsName = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "June",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// let date = new Date("12-02-2022");
// console.log(typeof date);

//Functions: =>

// function a() {
//   console.log("abc");
// }

// Objects:=>
//global

// let obj = {
//   name: "viv",
//   id: 12,
//   getDetails: function () {
//     return this.name + "" + this.id;
//   },
// };

// let a = function (field, field2) {
//   console.log(this.id + "..." + field + "," + field2);
// };

// a.call(obj, "abc", "def");

//Symbol
//Primitive or non primitive
//Prototype inheritance in functions

//String:
// let text = "!Abc,def,ghij,ssdd,fghd,.dccjnrjc.dcm.,";

//1.length
// console.log(text.length);

//2. slice
// console.log(text.slice(2, 4));

//3. substring
// console.log(text.substring(-5, 2));\

//4. substr
// text.substr(2, 13);

// //5. replace
// console.log(text.replace(",", "-"));

//6. replaceAll
// console.log(text.replaceAll(",", "-"));

// //7. toUpperCase
// console.log(text.toUpperCase());

// //8. toLowerCase
// console.log(text.toLowerCase());

//9. concat
// let a = text.concat("", "!!");
// console.log(a);

//10. trim()
// console.log(text.trim(), text);

//12. trimStart()
// console.log(text.trimStart(), text);

//13. trimEnd()
// console.log(text.trimEnd(), text);

//14. padStart
// let a = "5";
// console.log(a.padStart(5, "!"));

//15. padEnd()
// console.log(a.padEnd(5, "!"));

//16. charAt
// console.log(text.charAt(3));

//17. charCodeAt()
// console.log(text.charCodeAt(5));

//18. split()
// let arr = text.split(",");
// console.log(arr);

// ---------------------------------
//Searching=>

let text = "abc def ghi abd";

//1. indexOf
// console.log(text.indexOf("klkl"));

//2. lastIndexOf
// console.log(text.lastIndexOf("abc"));

//3. search
// console.log(text.search("hddhjd"));

//4. match
// let ans = text.match(/ab/g);

//5. matchAll
// let ans = text.matchAll(/ab/g);
// console.log(ans);

//6. includes
// console.log(text.includes("ahhs"));

//7. startsWith
// console.log(text.startsWith("abc"));

//8. endsWith()
// console.log(text.endsWith("abde"));
