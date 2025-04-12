import React, {useState} from 'react';

const App = () => {
    const initialState = {
        fName:"",
        age: 0,
    }


    // Above is the more efficient way to useState
    // const [firstName, setFirstName] = useState("")
    // const [myAge, setMyAge] = useState(0)
    const [formData, setFormData] = useState(initialState)
    //destructure below to use in input forms
    const{fName, age} = formData;

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    function handleChange(event) {
        console.log(event)
        setFormData(
                   //...formData combines and spreads out the information of name and age and puts them together for the log
            {...formData,[event.target.name]: event.target.value},
            {...formData,[event.target.age]: event.target.value}
        )
        console.log(formData)

        // setFormData(
        //     {[event.target.age]: event.target.value}
        // )
        // console.log([event.target.age], event.target.value)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>First Name:
                <input
                    type="text"
                    name="fName"
                    value={fName}
                    onChange={handleChange}/>
            </label>

                <br/>

                <label>Age:
                    <input
                        type="number"
                        name="age"
                        value={age}
                    onChange={handleChange}/>
                </label>

                <br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;