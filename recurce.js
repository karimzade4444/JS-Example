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

// function sayHiBye() {
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

///добавление в конце масива

//  1  -   function newUser(user){
// let users = [
//   {
//     id: 1,
//     name: "Muhammad",
//     age: 18,
//   },
//   {
//     id: 2,
//     name: "Mustafo",
//     age: 20,
//   },
// ];

// users.push(user)

// return users

// }
// console.log(newUser({id:3,name:"sds",age:12}))
// createUser({id:3,name:"sds",age:12})

// function deleteUser(num){
// let users = [
//   {
//     id: 1,
//     name: "Muhammad",
//     age: 18,
//   },
//   {
//     id: 2,
//     name: "Mustafo",
//     age: 20,
//   },
// ];
// return users.filter((el)=>el.id!=num)
// }

// console.log(deleteUser(2))

// deleteUser(2)

// function findUser(num){
// let users = [
//   {
//     id: 1,
//     name: "Muhammad",
//     age: 18,
//   },
//   {
//     id: 2,
//     name: "Mustafo",
//     age: 20,
//   },
// ];
// return users.find((el)=>el.id==num)

// }
// console.log(findUser( 2))

// findUser(2)

// function editUser(id, ob) {
//   let users = [
//     {
//       id: 1,
//       name: "Muhammad",
//       age: 18,
//     },
//     {
//       id: 2,
//       name: "Mustafo",
//       age: 20,
//     },
//   ];
//   users.forEach((el) => {
//     if (el.id == id) {
//       el.name = ob.name;
//       el.age = ob.age;
//     }
//   });
//   return users;
// }

// console.log(editUser(1, { name: "bankasar", age: 22 }));

//editUser(1,{name:bankasar,age:22})

// function sayHiBye() {
//   let cnt = "Hello World";
//   return function getFullName() {
//       return cnt;
//   };

// }
// let banka = sayHiBye();

// console.log(banka());

// function sayHiBye() {
//   let n = 10;
//   let cnt = n;
//   return function getFullName() {
//     return (cnt = cnt + 1);
//   };
// }
// let banka = sayHiBye();

// console.log(banka());
// console.log(banka());
// console.log(banka());

// function sayHiBye(num) {
//   let cnt = num;
//   return {
//     increment: () => {
//       num = num + 1;
//       return num;
//     },
//     reset: () => {
//       return cnt;
//     },
//     decrement: () => {
//       return num - 1;
//     },
//   };
// }
// let { increment, reset, decrement } = sayHiBye(5);

// console.log(increment());


