// 1. Dynamic Age Calculator
// Use a traditional function to calculate the user’s age.
//     Prompt the user to enter their birth year using prompt() and store it in a variable.
//     Based on their input, determine how many years old they are.
//     Log the calculated age to the console: “Your age is:”

// let userInput = parseFloat(prompt("What is your birth year?"))
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
//
// let age = currentYear - userInput;
// console.log("You are " + age + " years old");
// alert("You are " + age + " years old");


// 2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:”

// function calculateSimpleInterest (principal, rateOfInterest, time){
//     let interest = (principal * rateOfInterest * time) / 100;
//     return interest;
// }
//
//
// let principal = parseFloat(prompt("What is the principal amount"))
// let rateOfInterest = parseFloat(prompt("What is the rate of interest"))
// let time = parseInt(prompt("What is the time length of loan"))
//
//
// let simpleInterest = calculateSimpleInterest(principal,rateOfInterest,time)
// console.log("Your interest is: " + simpleInterest)
// alert("Your interest is: " + simpleInterest)

// 3. Favorite Color Selector
// Create an array with three colors.
//     Use a traditional function named addColor to add a new color to an array.
//     Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
//     Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors: “

// let colors = ["Green","Blue","Red"]
//
// function addColor (colorsArray){
//     let userInput = prompt("Enter color to add to array")
//     colorsArray.unshift(userInput);
// }
// console.log("Color array before prepend: " + colors)
// alert("Color array before prepend: " + colors)
// addColor(colors)
// console.log("New color array: " + colors)
// alert("New color array: " + colors)


// 4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
//     Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
//     If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
//     Log the result to the console using: “Days until the event: “.

// function calculateDaysUntil (userEventDate){
//     let currentdate = new Date();
//     let targetDate = new Date(userEventDate);
//     let daysUntilEvent = Math.ceil((targetDate - currentdate) / (1000 * 60 * 60 * 24))
//     return daysUntilEvent
// }
// let userEventDate = prompt("Enter an event date (YYYY-MM-DD")
// let daysUntilEvent = calculateDaysUntil(userEventDate);
// console.log("There are " + daysUntilEvent + " until the event")
// alert("There are " + daysUntilEvent + " until the event")


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

// function classifyTemperature(userInputTempC){
//     let tempF = (userInputTempC * (9/5) + 32)
//
//     if(tempF > 100){
//         console.log("Hot")
//     }else if(tempF > 80){
//         console.log("Warm")
//     }else if(tempF < 40){
//         console.log("Cold")
//     }else{
//         console.log("Chilly")
//     }
// }
// let userInput = parseInt(prompt("What is the temperature in Celsius"))
//
// while(isNaN(userInput) || userInput === "" || userInput === null){
//     console.log("Error. Non number entered")
//     userInput = prompt("Please enter a valid number.")
// }
// let userInputTempC = parseFloat(userInput)
// classifyTemperature(userInputTempC)


// 6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
//     Log the updated array to the console: “Updated students: ”

let students = [
    {name: "Alice",
        age: 20
    },
    {
        name: "Bob",
        age: 22
    },
    {
        name: "Charlie",
        age: 18
    }
]

const modifyStudentAge ()=> {

}



// 7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
//     Prompt the user to input a grade as a number.
//     Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
//     Log the result to the console using: “The grade classification is: “
// 8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, and flour.
//     Use a fat arrow function named modifyItem to modify items in an array.
//     Takes two arguments - the shopping list array and the prompted new item form user.
//     Log the updated array to the console using: “Updated shopping list: “.



// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “



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
