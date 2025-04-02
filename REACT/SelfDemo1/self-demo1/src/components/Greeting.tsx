type GreetingProps = {
    name: string;
    age: number
}


const Greeting = ({ name, age }: GreetingProps) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <p>
                {age >= 18 ? `Welcome, ${name}. You are an adult.` : `Hi ${name}, you are a minor.`}
            </p>
        </div>
    );
};

export default Greeting;