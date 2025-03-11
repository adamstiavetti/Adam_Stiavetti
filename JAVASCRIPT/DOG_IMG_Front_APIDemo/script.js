//consume an API
//Free or crendentials? - free
//What are the endpoints - look below
//How is the data being sent back - JSON
//How much data is coming back and what does it look like -JSON is just a javascript object that is flattened and turned

const BASEURL = "https://dog.ceo/api"
let route = "breeds/image/random"
let endpoint = `${BASEURL}/${route}`

let button = document.getElementsByTagName("button")
button[0].addEventListener("click", () => {

    //fetch skeleton
//utilize endpoint
    fetch(endpoint)
        .then(data => {
            //Get data; if okay, parse it, else error handling
            if(data.ok){
                let result = data.json()
                return result
            } else{
                throw Error("Jack broke it")
            }

        })
        .then(parsedData => {
            let img = document.querySelector("img")
            console.log(parsedData)
            img.setAttribute("src", parsedData.message)
        }) // deal with parsed data
        .catch(error => {
            console.log(error)
        }) //error handling
})
