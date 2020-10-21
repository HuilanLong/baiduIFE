// var readline = require("readline");
// var r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// r1.on("line",function(str){
//     let strArry = str.split('');
//     strArry.sort();
//     console.log(strArry);
// })


// var i = 5;
// var k = 5/3;
// var l = k.toFixed(2);
// var j = parseInt(i/3);
// console.log(k,Math.round(k),Math.floor(k),Math.ceil(k),j,l);


// var arr = new Array(6)
// arr[0] = "George"
// arr[1] = "John"
// arr[2] = "Thomas"
// arr[3] = "James"
// arr[4] = "Adrew"
// arr[5] = "Martin"

// console.log(arr);
// arr1 = arr.splice(2,0,"William","Tom")
// console.log(arr);
// console.log(arr1);


// var arry = [1, 4 , 3 ,7];
// var newArry =[];
// arry.forEach((item)=>{
//     newArry.push(item*item);
// });
// console.log(newArry);


// /***map */
// newArry = arry.map((item)=>{
//     return item*item;
// });
// console.log(newArry);


/***object */
// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }


/**sort string */
// var readline = require("readline");
// var r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// r1.on('line',function(str){
//     let strArry = str.split('');
//     let reg =  /[a-zA-Z]/ ;
//     for(let i = 0 ; i< strArry.length; i++){
//         if(reg.test(strArry[i])==true){
//             for(let j = i+1; j<str.length; j++){
//                 if(reg.test(strArry[j])==true){
//                     if(strArry[j].toUpperCase().charCodeAt() < strArry[i].toUpperCase().charCodeAt()){
//                         // console.log("switch " + i + ' ' + j);
//                         let temp = strArry[i];
//                         strArry[i] = strArry[j];
//                         strArry[j] = temp;
//                     }
//                 }else {
//                     continue;
//                 }
//             }
//         }else{
//             continue;
//         }
//     }
//     console.log(strArry.join(''));

// });

// var reg = /[a-zA-Z]/;
// console.log(reg.test('a'));
// console.log('a'.toUpperCase().charCodeAt());


// var readline = require("readline");
// var r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// r1.on("line",(str)=>{
// let arry = str.split('');
// arry.sort((a,b)=>{
//     return (a.charCodeAt() - b.charCodeAt())
// })
// console.log(arry.join(''));
// })

// r1.on("line",(str)=>{
//     let num = Number(str);
//     let arry = [];
//     let count = 1;
//     for(let i = 0 ; i< n; i++){
//         for(let j=0; j<n, j++){
//             arry[i][j] = arry[0][0] + 
//         }
//     }
// })

// function getValue(i,j){
//     if(i==0 && j==0){
//         return 0;
//     }else {
//         return getValue(i-1,j) +
//     }
// }

// var readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.on('line',function(line){
//     var num = line.trim();
//     var beg = 1;
//     var a = [];
//     for(var i = 1; i <= num; i++) {
//         a.push(beg);
        
//         var temp = beg;
//         for(var j = i+1; j <= num; j++) {
//             temp += j;
//             a.push(' '+temp);
//         }
//         beg += i;
//     }
//     for(var k = num; k > 0; k--) {
//         console.log(a.slice(0,k).join(''));
//         a.splice(0,k);
//     }
// })

// var str = '1233400fss';
// for(let i = 0 ; i < str.length; i++ ){
//     console.log(str[i]);
// }

// var arry=[1,2,3,4];
// var j = arry.indexOf(3);
// console.log(j);

// let str = "hello world!"
// let reg = /worl/g;
// let arr = str.match(reg);
// console.log(arr);

// let str1 = str.replace(reg, "wor");
// console.log(str);
// console.log(str1);


// var readline = require("readline");
// const r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// r1.on("line",function(str){
//     let arry = str.split('');
//     let len = arry.length;
//     let count = 0;
//     for(let i = 0; i< len ; i++){
//         let position = len -i ;
//         if(arry[i]>4){
//             count += (arry[i]-1)*getOrignNum(position) + getStepNum(position);
//         }else{
//             count += arry[i]*getOrignNum(position);
//         }
        
//     }
//     console.log(parseInt(str) - count);
// })

// function getStepNum(n) {
//     let str = '';
//     while(n>0){
//         str += '1';
//         n--;
//     }
//     return parseInt(str);
// }
// // console.log(getStepNum(1));

// function getOrignNum(n){
//     if(n==1){
//         return 0;
//     }else return (getOrignNum(n-1) * 9 + getStepNum(n-1))
// }


var str= "aalaodoo";
var strArry = str.split("@");
console.log(strArry);