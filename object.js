// const a = {
//   name: "Muhammad",
//   age: 12,
//   baho: 5,
//   jam: function misol() {
//     return this.age + this.name;
//   },
// };

// console.log(a.jam());

// let Calc = {
//    sum:(n1,n2)=>{
//     return n1+n2;
//    },
//    minus:(n1,n2)=>{
//     return n1-n2;
//    },
//    zarb:(n1,n2)=>{
//     return n1*n2;
//    },
//    taqsim:(n1,n2)=>{
//     return n1/n2;
//    },
// }

// console.log(Calc.sum())

// let box = {
// a: 1,
// b: 2,
// name: "Kavsar",
// age: 20
// }
// console.log([box.a,box.b])
// console.log([box.name])
// console.log([box.age])

// function objKV(obj) {
//   const result = {};

//   for (let key in obj) {
//     result[obj[key]] = key;
//   }

//   return result;
// }

// console.log(objKV({ a: 1, b: 2 }));

// function ob(obj) {
//   for (let key in obj) {
//     if (obj[key] === undefined) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(ob({ name: undefined, age: 11 }));
// console.log(ob({ name: false, age: 14 }));
// console.log(ob({ name: "john", age: 14 }));

//  let obj = (ob)=>{
//  let object = {
//  }
//  for(key in ob){
//    object.name = ob.name;
//    object.year = ob.year;
//    object.age = 2026-ob.year;
//    object.start = ob.year+7;
//    object.end = ob.year + 18;
//  }
//  return object;
//  }
//  console.log(obj({ name:"MS", year: 2005,}))

// let obj = (a,b,c,d) =>{
// let sum=0;
// let object = {
//    a1: a, b1:b, c1:c, d1:d,
// }
// for(let key in object){
// if(typeof object[key]==="number"){
// sum+=object[key]
// }
// }
// return sum;
// }
// console.log(obj("sal",1,2,3))

//  let obj = (a,b,c,d) =>{
//  let sum="";
//  let object = {
//     a1: a, b1:b, c1:c, d1:d,
//  }
//  for(let key in object){
//  if(typeof object[key]==="string"){
//  sum+=object[key]
//  }
//  }
//  return sum;
//  }
//  console.log(obj("sal",1,"dsjndsjk",3))

// function generation(x, y) {
//   if (x == 0) return "me!";

//   const family = {
//     "-3": { m: "great grandfather", f: "great grandmother" },
//     "-2": { m: "grandfather", f: "grandmother" },
//     "-1": { m: "father", f: "mother" },
//      "1": { m: "son", f: "daughter" },
//      "2": { m: "grandson", f: "granddaughter" },
//      "3": { m: "great grandson", f: "great granddaughter" }
//   };

//   return family[x][y];
// }

// console.log(generation(2,"m"))

// let obj =(x,y,z)=>{
// let object = {
// a:x, b:y, c:z,
// }
// for(let key in object){
//    return key;
// }
// }
// console.log(key)

// function as(a, b) {
//   let banka = a + b;
//   let letters = 0;
//   let numbers = 0;
//   for (let i = 0; i < banka.length; i++) {
//     Number();
//     if (typeof banka[i] == "string" && !Number(banka[i])) {
//       letters++;
//     } if (Number(banka[i])) {
//       numbers++;
//     }
//   }

//   return {
//    letters: letters,
//    numbers: numbers,
//   };
// }

// console.log(as("alo", "sad4"));

// function MS(obj) {
//   let newBanka = {};
//   for (key in obj) {
//     newBanka[(obj[key])] = key;
//   }
//   return newBanka;
// }
// console.log(MS({ a: 1, b: 2 }));

// function ms(array) {
//   let obj = {
//     name: 0,
//     age: 0,
//   };
//   for (let i = 0; i < array.length; i++) {
//     if (obj.age < array[i].age) {
//       obj = array[i];
//     }
//   }
//   return obj;
// }
// console.log(
//   ms([
//     { name: "John", age: 22 },
//     { name: "Johnson", age: 39 },
//   ]),
// );

//  function ms(array) {
//    let obj = {};
//    for (key in array) {
//      if (Array.isArray(array[key])) {
//        return true;
//      }
//    }
//    return false;
//  }
//  console.log(
//    ms({ name: "John", age: [22, 11, 12] }),
//  );

// function ms(array) {
//   let obj = {};
//   let sum=0;
//   for (key in array) {
//   if(typeof array[key]=="number"){
//   sum+=array[key];
//   }
// }
// return sum;
// }
// console.log(
//   ms({ name: "John", a:22, b:11, c:12 }),
// );

//   function Count(arr){
// let object = {}
// let choch = 0;
// for( key in arr){
// if(arr[key]!=false){
// choch++;
// }
// }
// return choch;
//   }
//   console.log(Count({
//     a: "dsadsa", b: 123, }))

// function as(arr) {
//   let sum = "";
  
//   for (let key in arr) {
//     if (typeof arr[key] === "string") {
//       sum += arr[key];
//     }
//   }
  
//   return sum;
// }

// console.log(as({ a: "dsadsa", b: 123, c: "abc" }));


function as(obj) {
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] === "string" && /\d/.test(obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
}

console.log(as({ a: "dsadsa", b: "abc11", c: "abc" }));
