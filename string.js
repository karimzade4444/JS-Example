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
//   let st = " ";
//   let str1 = a;
//   let st1=" ";
//   let st2 = " ";
//   for (let i = a.length - 1; i > -1; i--) {
//     st1+=st2;
//     for (let j = a[i].length - 1; j >= 0; j--) {
//     st2
//       console.log(a[i][j]);
//     }
//   }

//   return st;
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

function BigSmall(word) {
  let big = "";
  let small = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      big += word[i];
    } else {
      small += word[i];
    }
  }
  return big + small;
}
console.log(BigSmall("moveMEnT"));
