import {useState, useEffect} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [isSeven, setIsSeven] = useState(false)

    //useEffect is a hook aka function
    //takes two arguments: cb() and list of dependencies
    // useEffect(cb(), deps[] / empty brace means this runs only once when the page renders
    useEffect(() => {
        setIsSeven(count === 7)
    }, [])

    const handleClick = () => {
        //create random number
        let newCount = Math.floor(Math.random()*10+1)
        setCount(newCount)
        setIsSeven(newCount === 7);
        console.log("Click")
    }
  return (
   <>
   <h1>Welcome to Valhalla</h1>
       {/*user clicks the button
       generates random number*/}
       <button
           style={

           {visibility: isSeven ? 'hidden' : 'visible', fontSize: '23px'}

           }

            onClick={handleClick}

       >Click Me To Win</button>
       <h2>{count}</h2>
       {/*short circuting*/}
       {/*What is does:
       This line conditionally renders the <h1> element.
       If isSeven is true, the <h1> is renderd.
        if isSeven is false, nothing is rendered.*/}
       {isSeven && <h1>You Win!</h1>}
   </>
  )
}

export default App
