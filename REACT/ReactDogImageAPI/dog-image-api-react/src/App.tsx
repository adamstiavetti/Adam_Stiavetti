import axios from 'axios'
import {useState, useEffect} from "react";



const App = () => {

    const BASEURL = "https://dog.ceo/api"

    const [imagePath, setImagePath] = useState("")

    useEffect(() => {
        let route = "breeds/image/random"
        let endpoint =  `${BASEURL}/${route}`
        axios.get(endpoint)
            .catch(error => {
                console.error("Error", error)
            })
            .then(response =>{
                setImagePath(response.data.message)
                console.log("Response: ", response.data.message)
            })
        }, []
    )

    const handleClick = () => {
        let route = "breeds/image/random"
        let endpoint =  `${BASEURL}/${route}`
        axios.get(endpoint)
            .catch(error => {
                console.error("Error", error)
            })
            .then(response =>{
                setImagePath(response.data.message)
                console.log("Response: ", response.data.message)
            })

        axios.get(endpoint)
            .then(response =>{
                console.log("Response", response)
        })
            .catch(error => {
                console.error("Error", error.message)

            })
    }
    return (
        <>
        <h1>Dog Image Generator</h1>
            <button onClick={handleClick}>
                Click me
            </button>
            <img src={imagePath} alt="" />
        </>
    )
}


export default App;