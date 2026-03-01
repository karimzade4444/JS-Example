// let fullName = (n1,n2)=> (`${n1} ${n2}`)
// console.log(fullName("Ali","Bedak"))
// let cAge = (c1,c2)=>(c2-c1)
// console.log(cAge(2000,2025))

// let grad = (f1)=>((f1 * 9/5) + 32 )
// console.log(grad(0))

// let grad = (f1,f2)=>(f1 *f2)
// console.log(grad(5,4))

// let grad = (f1)=>(f1 *2)
// console.log(grad(5))

// let big = (b1,b2)=>{
// if(b1>b2){
// return b1;
// }
// else{
//     return b2;
// }
// }
// console.log(big(5,6))

// let calculateCircleArea = (radius)=>(3.14*radius*radius)
// console.log(Math.round( calculateCircleArea(8)))

// let sum3 = (num)=>{
// let n1 = Math.round(num)%10;
// let n2 = Math.round(num/10)%10;
// let n3 = Math.round(num/100);
// return n1+n2+n3;
// }
// console.log(sum3(123))

// let SumPos = (num)=>{
// if(num%2==0){
// return num+1;
// }
// else{
//     return num-2;
// }
// }
// console.log(SumPos(21))

// let Sum = (n1,n2)=>{
// if(n1+n2<=100){
//     return true
// }
// else{
//     return false
// }
// }
// console.log(Sum(26,75))

// let Time = (h,m,s)=>{
// let hs = h*3600;
// let ms = m*60;
// if(hs>ms && hs>s){
// return h;
// }
// else if(ms>hs && ms>s){
// return m;
// }
// else{
//     return s;
// }
// }
// console.log(Time(2, 119, 9600))

// let Perimetr = (pm)=>(pm*4)
// console.log(Perimetr(7))

// let Area = (p)=>(p*p)
// console.log(Area(7))

// let Average = (n1,n2)=>((n1+n2)/2)
// console.log(Average(5,6))

// let Pos = (num)=>{
//     if(num%2==0){
// return 3;
//     }
//     else{
//         return 4;
//     }
// }
// console.log(Pos(-6))

// let Calc = (x)=>((17*x*x)-(6*x)+13)
// console.log(Calc(2))

// let sum3 = (num)=>{
// let n1 = Math.round(num)%10;
// let n2 = Math.round(num/10)%10;
// let n3 = Math.round(num/100);
// return n1+n2+n3;
// }
// console.log(sum3(123))

// let barobar = (num)=>{
// let n1 = Math.round(num)%10;
// let n2 = Math.round(num/10)%10;
// let n3 = Math.round(num/100);
// if(n3==n2 || n3==n1 || n2==n1){
// return true;
// }
// else{
//     return false;
// }
// }
// console.log(barobar(213))

//  let barobar = (num)=>{
//  let n1 = Math.round(num)%10;
//  let n2 = Math.round(num/10)%10;
//  let num2 = `${n1}`+`${n2}`;
//  if(num>num2){
// return true;
//  }
//  else{
//     return false;
//  }
//  }
//  console.log(barobar(34))

// let num = (n)=>{
//     let sum = 0;
//     for( let i = 0; i<=n;i++){
//     sum+=i;
//     }
//     return sum ;
// }
// console.log(num(4))

//  let num = (n)=>{
//      let sum = 1;
//      for( let i = 1; i<=n;i++){
//      sum*=i;
//      }
//      return sum ;
//  }
//  console.log(num(5))

// let set = (num1, num2, arr) => {
//   let big = arr.filter((item) => {
//     return item > num1 && item < num2;
//   });
//   return big;
// };
// console.log(set(3, 8, [1, 5, 95, 0, 4, 7]));

// function set(arr){
// let big = arr.reduce((acc,el)=>{
//     acc+=el;
//     return acc;
// },0)
// return big;
// }
// console.log(set([1, 2, 3, 4, 5]))

// function set (arr){
//     let big = arr.map((el)=>{
//     return typeof(el);
//     })
//     return big;
// }
// console.log(set([1, 2,
// "null"
// , []]))

// function set (arr){
// let big = arr.map((el)=>{
//     return el.length
// })
// return big;
// }
// console.log(set(["hello"
// ,
// "world"]))

// function set (arr){
// let a = Math.sqrt(arr[0])
// let b = Math.pow(arr[1],1/3)

// if(a==b){
// return true;
// }
// else{
// return false;
// }
// }
// console.log(set([4, 8]))

// function set(arr) {
//   return arr.map((el) => el * -1);
// }
// console.log(set([1, 2, 3, 4, 5]));

// function set(arr) {
//   return arr.map((el) => el * 2);
// }
// console.log(set([1, 2, 3, 4, 5]));

// function set (arr){
// let big = arr.filter((num)=>num>5).reduce((acc , el)=>(acc+el),0)
// return big;
// }
// console.log(set([1,2,3,4]))

// function set (arr){
// let big = arr.filter((num)=>Number(num));
// return big;
// }
// console.log(set([1, 2, 3, "a", "b", 4]))

// function set (arr){
// let mid = arr.slice(1,-1)
// return mid;
// }
// console.log(set([ 10,20,30]))

// function set (arr){
// let [a,b, ...rest]=arr;
// return rest;
// }

// function set (arr){
// arr.splice(0,2);
//     return arr;
// }

// console.log(set([1, 2, 3, 4, 5]))

// function set (arr1,arr2,arr3){
// let arr = [...arr1,...arr2,...arr3]
// return arr;
// }
// console.log(set(["a"], ["b"], ["c"]))

// function set (...num){
// let sum = num.reduce((ac,el)=>(ac+el),0)
// return sum;
// }
// console.log(set(5, 5, 5, 5))

// function set (arr){
// let [a, ...davom]=arr;
// return [...davom,a]

// }
// console.log(set([1,2,3]))

// function set(arr){
// let [a,b,c]=arr;
// return a*b*c;
// }
// console.log(set([2, 3, 4]))

// function set(arr){
// let rev =  arr.splice(0,3);
// return rev.reverse()
// }
// console.log(set([1, 2, 3, 4, 5]))

// function set(arr){
// return arr.filter((num,ind)=>ind%2!=0)
// }
// console.log(set([10, 20, 30, 40, 50]))

// function set (arr){
// let [...sp]=arr;
// return arr.concat(sp)
// }
// console.log(set(["x", "y"]))

// const useCalculator = () => {
//   return {
//     plus: (a, b) => a + b,
//     minus: (a, b) => a - b,
//     zarb: (a, b) => a * b,
//     taksim: (a, b) => a / b,
//   };
// };

// const { plus, zarb, minus, taksim } = useCalculator();

// console.log(plus(1, 2));

// console.log(zarb(2, 4));

// function banka(...a) {

// }

// banka(1, 2, 3, 4, 5, 6);

// let a = [1, 2, 3, 4, 5];
// let obj = { name: "alo" };
// console.log({...obj});
// console.log({    a });

// let a = {
//   name: "Muhammad",
// };

// let b = { ...a };
// b.name = "AKbar";

// console.log(a);

let range = {
  from: 1,
  to: 5,
};

// Мы хотим, чтобы работал for..of:
// for(let num of range) ... num=1,2,3,4,5

// const b = new Set([
//   { name: "tufli", rang: "siyah" },
//   { name: "tufli", rang: "safed" },
//   { name: "tufli", rang: "siyah" },
// ]);

// b.add("popshi");

// console.log(b);

// b.has("pophashi");

// console.log(b);

// console.log([...b]);

// const obj = new Map();

// obj.set(true, "Mustafo");
// console.log(obj.get(true));

// const user = {
//   name: "Mustafo",
//   age: 12,
// };

// const chnadBorDromad = new Map(Object.entries(user));
// console.log(chnadBorDromad.size);

// // chnadBorDromad.set(user, 123);

// // chnadBorDromad.forEach((el, i) => {
// //   console.log(i);
// // });

// console.log(Object.entries(user));

// let map = new Map();

// map.set("name", "John");

// let keys = [...map.keys()];

// keys.push("a");
// console.log(keys);

// const text = "apple banana apple orange banana apple";
// let arr = text.split(" ")
// let unic = new Set(arr)
// console.log(unic)

// let keys = Array.from(unic);
// console.log(keys)
// console.log(unic.size)

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let map = new Map();

// fruits.forEach((el, i) => {

//   if (map.has(el)) {

//     map.set(el, map.get(el) + 1);
//   } else {
//     map.set(el, 1);
//   }
// });
// console.log(map)

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 1, name: "Ali" },
//   { id: 3, name: "Hasan" },
// ];
// let map = new Map();

// users.forEach((el) => {
//   map.set(el.id, el);
// });

// console.log(map);

// let obj = {
//   name: "muhammad",
// };

// obj.name = "Muhammad";

// const arr1 = [1, 2, 3, 4, 5];
// // const arr2 = [3, 4, 5, 6, 7];
// // const set2 = new Set(arr2)
// // let arr = []
// // arr1.forEach((val)=>{
// // if (set2.has(val)){
// // arr.push(val)
// // }
// // })
// // console.log(arr)

// const str = "aabbccddefg";
// let map = new Map();
// for (let kalima of str) {
//   if (map.has(kalima)) {
//     map.set(kalima, map.get(kalima) + 1);
//   } else {
//     map.set(kalima, 1);
//   }
// }

// let a = Array.from(map);
// let govno = a.find((el) => el[1] == 1);
// console.log(govno[0]);



// function set (arr,a,b){
// arr.unshift(a,b);
// return arr;

// }
// console.log(set([3],1,2))


// function set (arr){
// arr.splice(-2)
// return arr
// }
// console.log(set([1,2,3,4]))

// function set (arr){
// let array = arr.splice(2)
// return array
// }
// console.log(set([1,2,3,4]))

// function set (arr){
// return arr.join("-")
// }
// console.log(set([1,2,3]))

// function set (arr,a){
// arr.unshift(a)
// arr.pop()
// return arr

// }
// console.log(set([2,3],1))

// function set (arr,a){
// arr.shift()
// arr.push(a)
// return arr

// }
// console.log(set([1,2,3],4))

// function set(arr1,arr2,a){
//  let arr = arr1.concat(arr2)
//  arr.splice([a],1)
// return arr
// }
// console.log(set([1,2],[3,4],1))

// function set(arr){
// arr.splice(0,1)
// arr.splice(-1,1)
// let str = arr.join("")
// return str
// }
// console.log(set([1,2,4]))

// function set(arr,num){
//   arr.pop()
//   arr.unshift(num)
//   return arr;
// }
// console.log(set([2, 3, 4], 1))

// function set(arr,num){
//  let NewArr = arr.splice(num)
//  return NewArr;
// }
// console.log(set([1, 2, 3], 1))


// function set(arr){
// return arr.map((el)=>el*2)
// }
// console.log(set([1, 2, 3]))


// function set(arr){
// return arr.filter((el)=>el>0)
// }
// console.log(set([1, -2, 3]))

// function set(arr){
// return arr.find((el) => el > 10)
// }
// console.log(set([1,20, 30]))


// function set(arr){
// return arr.some((el)=>el<0)

// }
// console.log(set([1, 1, 2]))

// function set(arr){
// return arr.some((el)=>el>0)

// }
// console.log(set([1, 1, 2]))

// function set(arr){
// let sum = 0;
// let choch = 0;
// arr.map((el)=>{
//   sum+=el;
//   choch++;
// })
// let av = sum/choch;
// return arr.filter((elem)=>elem>av)
// }
// console.log(set([2, 8]))


// function set(arr){
// let choch = 0;
// arr.filter((el)=>{
//   el%2===0 &&choch++
// })
// return choch
// }

// console.log(set([1, 4]))


// function set(arr){
// let result = arr.reduce((ac,el)=>(ac+el
// ),0)
// return result
// }
// console.log(set([1, 4]))

// function set(arr){
// let result = arr.map((el)=>(el+1))
// return result
// }
// console.log(set([1, 4]))


// function set(arr,num){
// arr.push(num)
// return arr
// }
// console.log(set([1, 2],3))


// function set(arr){
// return arr.toString()
// }
// console.log(set([1, 2,3]))

// function set(arr,num){
// let find = arr.includes(num)
// return find
// }
// console.log(set([1, 2, 3], 2))

// function set(arr){
// let result = arr.map((el)=>(el*2))
// return result
// }
// console.log(set([1, 4]))


// function set(arr){
// return arr.filter((el)=>el>0)
// }
// console.log(set([1, -2, 4]))


// function set(arr){
// return arr.find((el) => el > 5)
// }
// console.log(set([1,6, 8]))


// function set(arr){
// arr.pop()
// return arr;
// }
// console.log(set([1,2,3]))

// function set(arr){
// arr.shift()
// return arr;
// }
// console.log(set([1,2,3]))

// function set(arr,num){
// arr.push(num)
// return arr;
// }
// console.log(set([1,2],3))

// function set(arr1,arr2){
// return arr1.concat(arr2)
// }
// console.log(set([1,2],[3]))

// function set(arr,num1,num2){
// return arr.slice(num1,num2)
// }
// console.log(set([1,2,3,4],1,3))

// function set(arr,num1){
// return arr.splice(num1)
// }
// console.log(set([1,2,3,4],1))

// function set(arr,num1){
// return arr.indexOf(num1)
// }
// console.log(set([1,2,3,4],2))

// function set(arr,num1){
// return arr.includes(num1)
// }
// console.log(set([1,2,3,4],2))

// function set(arr){
// return arr.join("-")
// }
// console.log(set([1,2,3,4]))

// function set(arr){
// return arr.toString()
// }
// console.log(set([1,2,3,4]))

// function set(arr){
//   let str = ""
// arr.forEach(element => str+=" "+element);
// return str
// }
// console.log(set([1,2,3,4]))

// function set(arr){
// return arr.toSorted()
// }
// console.log(set([3,4,2,5,1]))

// function set(arr){
//   return arr.reverse()
// }
// console.log(set([1,2,3,4]))


// function set(arr){
//  let jo = arr.join(":")
// return jo
// }
// console.log(set([1,2,3,4]))




