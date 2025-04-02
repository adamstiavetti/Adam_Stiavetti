type ProfileCardProps = {
    firstName: string,
    lastName: string,
    age: number
};

const ProfileCard = ({ firstName, lastName, age}: ProfileCardProps) => {
    return (
        <div>
            <h2>Hello, {firstName} {lastName}</h2>
            <p>Your age is: {age}</p>
        </div>
    );
};

export default ProfileCard;