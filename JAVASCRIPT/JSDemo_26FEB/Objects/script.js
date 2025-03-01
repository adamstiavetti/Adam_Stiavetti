//Dates
const d = new Date();
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];

let day = d.getDay();
let hh = d.getHours();
let mm = d.getMinutes();
let ss = d.getSeconds();

console.log(`Today is: ${daysOfWeek[day]}, ${hh}:${mm}:${ss}`);


