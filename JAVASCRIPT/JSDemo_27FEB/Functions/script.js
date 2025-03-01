// //take a number and square it
//
// function squares(num){
//     return num*num;
// }
// console.log(squares(5));
//
// //IIFE
// (function(){
//     console.log("Hello")
// })()
//
// //Fat Arrow Function
// const squares2 = (num)=>{
//     return num*num;
// }
// console.log(squares2(7))
//
// //Fat Arrow Function(Remove parentheses)
// const squares3 = num=>{
//     return num*num;
// }
// console.log(squares3(9))
//
// //Fat Arrow Function(with implied return)
// const squares4 = num=> num*num
// console.log(squares4(11))
//
// //Fat Arrow Function(with implied return, multiple parameters)
// const area = (num1 = 5, num2=4) => num1*num2
// console.log("Area: ", area(undefined, undefined));

let age = 0;
console.log(age ? "alive" : "dead");
