let bankasar = "yow Bankasar yow";

// console.log(bankasar.at());

// for (let i = 0; i < bankasar.length; i++) {
//   console.log(bankasar[i]);
// }

// for (let el of bankasar) {
//   console.log(el);
// }

// let arr = [1, 2, 3, 4];

// arr[2] = 55;

// console.log(arr)

// console.log(bankasar.indexOf("yow", 1));

// console.log(bankasar.includes('Bankasar'))

// console.log(bankasar.slice(-1));

// console.log(bankasar.substring(-1, 5));

// 1 "",
// 2 ''
// 3 ``

//Есть специальные символы, такие как разрыв строки \n.
//Для получения символа используйте [] или метод at.
//Для получения подстроки используйте slice или substring.
//Для того, чтобы перевести строку в нижний или верхний регистр, используйте toLowerCase/toUpperCase.

//Для поиска подстроки используйте indexOf или includes/startsWith/endsWith, когда надо только проверить, есть ли вхождение.

///str.trim() — убирает пробелы в начале и конце строки.

// const a = bankasar.repeat(6);
// console.log(a);

// let a = "2 3 4";

// console.log(a.split(" "));

// let a = (str)=>{
//     let sum=1;
//     let b = str.split(",");
//     for(let i = 0; i<b.length;i++){
//     sum*=Number(b[i])

//     }
//     return sum;
// }
// console.log(a("2,3"))

//  let a = (str)=>{

//      return str.split('-').length;
//  }
//  console.log(a("but-fet"))

// function name(p1){
// let a = p1.split(" ");
// return `${a[1]} ${a[0]}`
// }
// console.log(name("Muhammad MAkhsumov"))

// function name(p1){
//     return p1.includes(" ")
// }
// console.log(name("hello, word"))

// let a = (name)=>(`Hello ${name}`)
// console.log(a("Mustafo"))

//  function name (arr){

//  for(let i=0; i<arr.length; i++){
// if( arr[i]==arr[i+1]){
// return true;
// }
// }
// return false;
//  }
//  console.log(name("loop"))

// function p(name) {
//   let a = name.split(" ");
//   if (a.indexOf("Nemo")) {
//     return `I found Nemo at ${a.indexOf("Nemo")}`;
//   }

//   return "I can’t find Nemo :(";
// }
// console.log(p("I am finding Nemo !"));

// function str(words) {
//   let a = words.split(" ");
//   let st2 = "";
//   for (let i = 0 ; i < a.length; i++) {
//     for (let j = a[i].length - 1; j >= 0; j--) {
//       st2 += a[i][j];
//     }
//     st2 += " ";
//   }

//   return st2;
// }
// console.log(str("This is a lacipyt sentence."));

// function don(kalima){
// let result = ""
// let sadonok = "aeiouAEIOU"

// for(let i = 0; i<kalima.length; i++){
// if(sadonok.includes(kalima[i])){
// result+= "-" + kalima[i] + "-";
// }
// else{
//     result+=kalima[i];
// }
// }
// return result;
// }
// console.log(don("Fight for your right to party!"))

// function raqam(n){
// let result = "";
// for(let i = 1; i<=n;i++){
//     let str = i.toString();
// for(let j= 0 ; j<str.length; j++){
//     result+=str[j]+"-";
// }
// }
// return result.slice(0, -1);

// }
// console.log(raqam(15))

// function any(word) {
//   let chapana = word.split("").reverse().join("");
//   return word === chapana;
// }

// console.log(any("mom"));

// function HowMuch(word1, word2) {
//   let choch = 0;
//   for (let i = 0; i < word2.length; i++) {
//     if (word2[i].includes(word1)) {
//       choch++;
//     }
//   }
//   return choch++;
// }
// console.log(HowMuch("b", "big fat bubble"));

// function BigSmall(word) {
//   let big = "";
//   let small = "";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//       big += word[i];
//     } else {
//       small += word[i];
//     }
//   }
//   return big + small;
// }
// console.log(BigSmall("moveMEnT"));

// function raq(raqam){
// let n = raqam.toString();
// let chapana = n.split("").reverse().join("");
// return chapana+n;
// }
// console.log(raq(123456789))

// function doRepeat(word,number){
//  let first = word.slice(0,-1);
//  let last = word.slice(-1).repeat(number);
//  return first+last;
// }
// console.log(doRepeat( "Hello",5))

// function str(word){
// let first = word.slice(0,1)
// let last = word.slice(-1)
// return first+last;
// }
// console.log(str("Mustaf"))

// function raq(argument) {
//   if (typeof argument === "number") {
//     return String(argument);
//   } else if (typeof argument === "string") {
//     return Number(argument);
//   }
// }
// console.log(raq(12345))

// function HaveS(word){
// let have = word.slice(-1);
// if(have=="s"){
// return true;
// }
// return false;
// }
// console.log(HaveS("Doe"))

// function ChangeSurname (name,family){
//     return family+" "+name;
// }
// console.log(ChangeSurname("Mustafo", "Karimzoda"))

// function Upper(word){
// let reverse = word.split("").reverse().join("").toUpperCase();
// return reverse;
// }
// console.log(Upper("hello"))

// function Upper(word){
// let st = "";
// for(let i = word.length-1;i>=0;i--){
// st+=word[i];
// }
// return st.toUpperCase();
// }
// console.log(Upper("hello"))

//dobavit
// arr.push(); // ayoxir
// arr.unshift(); //ayaval

// arr.shift(); // aval
// arr.pop()

// let a1 = [0];
// let a2 = [0];

// let obj1 ={
//     name:"Muhammad"
// }
// let obj2 ={
//     name:"Muhammad"
// }

// console.log(obj1 == obj2);

// let style = ["jaz","bluz"];
// console.log(style)
// style.push("roknrol")
// console.log(style)
// style[Math.round((style.length-1)/2)]="klasika";
// console.log(style)
// style.shift();
// console.log(style);
// style.unshift("rep","regy")
// console.log(style)

// let arr = ["Jas", "Rok"];

// arr.forEach((el, i) => {
//   console.log(`У ${el} индекс ${i}`);
// });

// console.log(arr.includes("Jas"));

// let a = 5;
// let b = "5";

// console.log(a === b);

let users = [
  { id: 1, name: "Вася2211", age: 12 },
  { id: 2, name: "Петяbanakasser", age: 14 },
  { id: 3, name: "Маша", age: 5 },
];

// let nameInput = "Вася";

// console.log(users.find((el) => el.name == nameInput));

// let a = users.filter((el) => {
//   return el.age > 10;
// });
// console.log(a);

// let newUsers = users.map((el) => {
//   return { name: el.name, id: el.id };
// });
// console.log(newUsers);

// const a = users.sort((a, b) => {
//   return a.name.length > b.name.length ? false : true;
// });

// console.log(a);

// const result = users.reduce((acc, el) => {
//   acc.age += el.age;
//   return acc;
// });

// console.log(result);

// const sar = (...b) => {
//   return a.concat(...b);
// };

// console.log(sar([1, 2, 3], [1, 2, 3, 34], [123123, 312321]));

// const sar = (a) => {
//   return [0, ...a, 0];
// };

// console.log(sar([1, 2, 3, 4, 5]));

// const sar = (...b) => {
//    return b.flatMap((x)=>(x));
//  }
//  console.log(sar([15, 4], [2, 3],[5,7]));

// const sar = (arr,p) => {
// return arr.indexOf(p);
// }

// console.log(sar([3,4,5,3,1,5,5,5,7,6], 3))

// const sar = (arr) => {
//   return arr.filter((el, i) => arr.indexOf(el) == i);
// };
// console.log(sar([1, 3, 3, 3, 4, 4]));

// const sar = (arr) => {
//   return arr.filter((el, i) => (el>0));
// };
// console.log(sar([-1, 2, -3, 4, -5]));

// const sar = (arr) => {
//   let choch = 0;
//   let sum = arr.reduce((ac, el) => {
//     choch++;
//     ac += el;
//     return ac;
//   }, 0);
//   return sum / choch;
// };

// console.log(sar([2, 4, 6, 8, 10]));
