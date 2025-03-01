// 1. Dynamic Age Calculator
// Use a traditional function to calculate the user’s age.
//     Prompt the user to enter their birth year using prompt() and store it in a variable.
//     Based on their input, determine how many years old they are.
//     Log the calculated age to the console: “Your age is:”

//let userBirthYear = prompt("Enter your birth year");
//let birthYear = parseInt(userBirthYear);

//let currentDate = new Date();
//let currentYear = currentDate.getFullYear();

//let age = currentYear - birthYear;
//alert("You are " + age);
//console.log("You are " + age);


// 2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:”

// function calculateSimpleInterest(principal, interestRate, timeOfLoan){
//     let simpleInterest = (principal, interestRate, timeOfLoan) / 100;
//     return simpleInterest;
// }
//
// let principal = parseFloat(prompt("Enter principal amount"));
// let interestRate = parseFloat(prompt("Enter interest rate"));
// let timeOfLoan = parseFloat(prompt("Enter how long the loan is"));
//
//
// let interest = calculateSimpleInterest(principal, interestRate, timeOfLoan);
//
// console.log("Your simple interest is: " + interest);


// 3. Favorite Color Selector
// Create an array with three colors.
//     Use a traditional function named addColor to add a new color to an array.
//     Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
//     Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors: “

// let colors = ["Green", "Blue", "Red"]
//
// function addColor(colorsArray){
//     let newColor = prompt("Type new color to add in array");
//
//     colorsArray.unshift(newColor);
//
//     console.log("The new array is: " + colorsArray)
// }
//
// addColor(colors);



// 4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
//     Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
//     If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
//     Log the result to the console using: “Days until the event: “.

// function calculateDaysUntil(userEventDate){
//     let currentDate = new Date()
//     let targetDate = new Date(userEventDate);
//     let dateCount = Math.ceil((targetDate - currentDate) / (1000 * 60 * 60 * 24));
//     return dateCount;
// }
//
// let userEventDate = prompt("Please enter an event date in format(YYYY-MM-DD)")
//
// let daysUntilEvent = calculateDaysUntil(userEventDate)
// console.log("The days till event: " + daysUntilEvent)
// alert("The days till event: " + daysUntilEvent)



// 5. Temperature Classifier
// Use a traditional function named classifyTemperature to classify a temperature.
//     Takes one argument - user input for temperature
//     Prompt the user to input the temperature in Celsius.
//     Convert into Farenheit using this formula
// Fahrenheit = (C x (9/5)) + 32
// Use conditionals to classify the temperature as:
//     "Hot," if over 100
// "Warm," if over 80
// "Cold” if under 40
// “Chilly” for everything else
// Error message if number not entered
// Log the classification to the console using: “The temperature is: “

// function classifyTemperature(userInputTemp){
//     let tempF = (userInputTemp * (9/5) + 32);
//     return tempF;
// }
//
// let userInputTemp = parseFloat(prompt("Enter a temperature"))
// while(isNaN(userInputTemp)){
//     userInputTemp = parseFloat(prompt("Enter a valid temperature"))
// }
//
// let temp = classifyTemperature(userInputTemp);
// console.log("The temperature is: " + temp);
// if(temp > 100){
//     alert("Hot")
// }else if(temp > 80){
//     alert("Warm")
// }else if(temp > 40){
//     alert("Cold")
// }else{
//     alert("Chilly")
// }




// 6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
//     Log the updated array to the console: “Updated students: ”

// let students = [
//     {
//         name: "Alice",
//         age: 20
//     },
//     {
//         name: "Bob",
//         age: 22
//     },
//     {
//         name: "Charlie",
//         age: 18
//     }
// ]
//
// const modifyStudentAge = ()=> {
//     let studentName = prompt("Enter name of student to modify");
//     let student = students.find(student => student.name.toLowerCase() === studentName.toLowerCase())
//     if (!student) {
//         console.log("No student found")
//         return;
//     }
//     let inputAge = parseInt(prompt("Enter new age"))
//     if (isNaN(inputAge) || inputAge <= 0) {
//         console.log("Enter a valid number")
//     }
//     student.age = inputAge
//     students.forEach(student => alert(`${student.name}: ${student.age}`));
//     students.forEach(student => console.log(`${student.name}: ${student.age}`));

// };
// modifyStudentAge();



// 7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
//     Prompt the user to input a grade as a number.
//     Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
//     Log the result to the console using: “The grade classification is: “

// const classifyGrade = () => {
//     let userInputGrade = parseInt(prompt("Enter a grade"))
//     let grade = (userInputGrade >= 90) ? "A" :
//         (userInputGrade >= 80 && userInputGrade < 90) ? "B" :
//             (userInputGrade >= 70 && userInputGrade < 80) ? "C" :
//                 (userInputGrade >= 60 && userInputGrade < 70) ? "D" : "F"
//
//     console.log(grade)
//     alert("The grade is: " + grade)
//
// }
// classifyGrade()



// 8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, and flour.
//     Use a fat arrow function named modifyItem to modify items in an array.
//     Takes two arguments - the shopping list array and the prompted new item form user.
//     Log the updated array to the console using: “Updated shopping list: “.

// let shoppingList = ["Eggs", "Butter", "Flour"]
//
// const modifyItem = (shoppingList, userInputItem) => {
//     shoppingList.push(userInputItem + " ")
//     console.log("Updated shopping list: " + shoppingList)
//     alert("The new shopping list is: " + shoppingList.join(", "));
// }
// let userInputItem = prompt("Enter item to add to shopping list");
// modifyItem(shoppingList, userInputItem)



// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “

// const getDayOfWeek = () =>{
//     let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//
//     let date = new Date();
//
//     let dayOfWeek = date.getDay();
//
//     console.log("Today is: " + weekDays[dayOfWeek])
//
// }
// getDayOfWeek();



// 10. How Long Until Graduation
// Use a fat arrow function to determine today’s date.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “
// Display in this format: “2025, January 21st”
// NOTE: use -st, -nd, -rd, -th based on the numerical date
// 22nd, 5th, 9th, 23rd, etc….
// Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
// Last day is 5/17/25
// Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.
//
// const getCurrentDate = () => {
//     let courseEndDate = new Date("2025-05-17")
//     let date = new Date();
//     let year = date.getFullYear();
//     let month = date.toLocaleDateString('en-US', { month: 'long' });
//     let day = date.getDate();
//
//     let today = new Date();
//     let timeDifference = courseEndDate - today;
//     let daysUntilGraduation = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//
//     let formattedDate = `${year}, ${month} ${day}${addSuffix(day)}`
//     console.log("Today is: " + formattedDate);
//     alert("And you have " + daysUntilGraduation + " left in this web design program until graduation.");
//     alert()
// }
// const addSuffix = (day) => {
//     if (day > 3 && day < 21) return'th';
//     switch(day % 10){
//         case 1: return 'st';
//         case 2: return 'nd';
//         case 3: return 'rd';
//     }
// }
// getCurrentDate();