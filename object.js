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

let obj = (n,y)=>{
let object = {
   name: n,
   year: y,
   age: 2026-y,
   start: y+7,
   end: y+18
}
return object;
}
console.log(obj("MS", 2005))



