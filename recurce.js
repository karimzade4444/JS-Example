// const banka = (a, b) => {
//   let res = 1;
//   for (let i = 0; i < b; i++) {
//     res = res * a;
//   }
//   return res;
// };

// console.log(banka(2, 3));
// let res = 1;
// function misol(a, b) {
//   if (b == 0) {
//     return res;
//   }
//   res = res * a;
//   b--;
//   return misol(a, b);
// }

// console.log(misol(3, 5));

// let sum = 0;
// function rec(num) {
//   sum += num;
//   return num==0 ? sum : rec(num - 1);
// }
// console.log(rec(6));

// let sum = 0;
// function rec(num) {
//   sum *= num;
//   return num==0 ? sum : rec(num - 1);
// }
// console.log(rec(6));

// function showName(...rest) {
//   return Math.max(...rest);

// }

// console.log(showName(2, 3, 4));

// let a = 5;

// function musol() {
//   return a + a;
// }

// function sayHiBye(firstName, lastName) {
//   let cnt = 0;
//   return function getFullName() {
//     cnt = cnt + 1;
//     return cnt;
//   };
// }
// let banka = sayHiBye();

// console.log(banka());
// console.log(banka());
// console.log(banka());

// function zarb(num){
//  return function(zarbb){
//     return num*zarbb;
//  }
// }

// let ne = zarb(4)
// console.log(ne(5))

// function set(str){
//  return function(){
//     return str;
//  }
// }
// let ne = set("JS")
// console.log(ne())

// function sayHiBye(firstName, lastName) {
//   let cnt = 0;
//   return function getFullName() {
//     cnt=cnt+1;
//     if(cnt<=3){
//     return "ok"
//     }
//     else{
//         return "limit is out";
//     }
//   };
// }
// let banka = sayHiBye();

// console.log(banka());
// console.log(banka());
// console.log(banka());
// console.log(banka());



