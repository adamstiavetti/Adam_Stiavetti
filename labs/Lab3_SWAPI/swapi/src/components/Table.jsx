import React from 'react';

const Table = ({ data }) => {
    return (
        <table style={{ width: "80%", margin: "20px auto", backgroundColor: "rgba(255, 255, 255, 0.85"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Hair Color</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
            {data.map((person, index) =>
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.height}</td>
                <td>{person.hair_color}</td>
                <td>{person.gender}</td>
            </tr>)}
            </tbody>
        </table>
    );
};

export default Table;