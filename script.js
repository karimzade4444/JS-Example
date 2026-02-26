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
// console.log(set([1, 2, 3, 4, 5]))
