
// Functional Component

import Hero from "./Hero";

export default function FunctionalComponent() {
    
    // Regular Javascript object
    const student = {
        firstName: 'Mario',
        lastName: 'Super',
        uId: 12345,
        active: true
    };

    // Output HTML - JSX
    return (
        <div>
            <h1>Student information....</h1>
            <Hero />
            <p>First Name: {student.firstName}</p>
            <p>First Lastname: {student.lastName}</p>
            <p>StudentID number: {student.uId}</p>
            <hr />

            <p>{student.active ? (<strong>Student is Active</strong>) : (<strong>Stident Inactive </strong>)}</p>
        </div>
    );
}