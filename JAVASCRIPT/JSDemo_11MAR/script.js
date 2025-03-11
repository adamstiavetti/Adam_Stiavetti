let food = document.getElementById("fruit")
console.log(food)
food.style.color = "red"
food.style.backgroundColor = "green"
food.style.fontSize = "50px"

let food2 = document.getElementsByClassName("breakfast")
console.log(food2[1])

let food3 = document.getElementsByTagName("li")
console.log(food3[0])

let food4 = document.querySelector("#fruit")
console.log(food4)

let food5 = document.querySelectorAll("h1")
console.log(food5[food5.length-1])

let answer = document.querySelector("a").getAttribute("href")
// console.log(answer)

let button = document.getElementsByTagName("button")
button[1].addEventListener("click", ()=>{
    alert("Clicked")
})