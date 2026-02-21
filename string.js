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

 let a = (str)=>{
     
     return str.split('-').length;
 }
 console.log(a("but-fet"))