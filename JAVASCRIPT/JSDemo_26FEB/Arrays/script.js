// let numbers = [1, 2, 3]
// //slice function
// let data = numbers.slice()
// //append to array
// //push()
// numbers.push(4)
// console.log(numbers);
// //pop()
// numbers.pop()
// console.log(numbers);let numbers = [1, 2, 3]
// //slice function
// let data = numbers.slice()
// //append to array
// //push()
// numbers.push(4)
// console.log(numbers);
// //pop()
// numbers.pop()
// console.log(numbers);
// //take from pop()
// let removedElement = numbers.pop()
// console.log(removedElement);
//
// //Prepend - front of the array
// numbers.unshift(100);
// console.log(numbers);
//
// let newResult = numbers.shift()
// console.log(newResult)
//
// numbers = data;
//
// //.trim
// //"           cruz "
// let message = "           cruz "
// console.log(message.trim());
//
// //Exercise
// let students = ["alice", "bob", "charlie"];
// students.push("Diana")
// console.log(students)
// students.pop(students)
// console.log(students)
// students.unshift("jerry")
// console.log(students)
// students.shift(students)
// console.log(students)
// //take from pop()
// let removedElement = numbers.pop()
// console.log(removedElement);
//
// //Prepend - front of the array
// numbers.unshift(100);
// console.log(numbers);
//
// let newResult = numbers.shift()
// console.log(newResult)
//
// numbers = data;
//
// //.trim
// //"           cruz "
// let message = "           cruz "
// console.log(message.trim());
//
// //Exercise
// let students = ["alice", "bob", "charlie"];
// students.push("Diana")
// console.log(students)
// students.pop(students)
// console.log(students)
// students.unshift("jerry")
// console.log(students)
// students.shift(students)
// console.log(students)

// //foreach()
// let numbers = [4, 6, 8]
// numbers.forEach(function(element){
//     console.log(element)
// })
// let names = ["Adam", "Crhis", "Connor"]
// names.forEach(el => {
//     console.log(`${el}'s`);
// })

//map()
// let numbers = [1,2,3];
// let doubled = numbers.map(function (num){
//     return num * 2;
// });
// console.log(doubled)

//.filter()
// let newNumbers = [2,3,4]
// let newArray = newNumbers.filter(function (kittycat){
//     return kittycat %2 === 0
// })
// console.log(newArray);

//sort()
// let fruits = ["Banana", "Cherry", "Apple"]
// let newfruits = fruits.map(el =>{
//     return el.toLocaleLowerCase()
// })
// console.log(newfruits.sort().)

let numbers = [10, 1, 100, 3, 24, 11]
numbers.sort(function (a,b){
    return a-b
})
console.log(numbers)