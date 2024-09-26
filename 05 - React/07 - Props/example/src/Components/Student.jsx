
export default function Student(props) {
    return (
        <div className="student-data">
            <p>{props.firstName}</p>
            <p>{props.lasttName}</p>
            <p>Age: {props.age}</p>
            <p>StudentID: {props.uid}</p>
        </div>
    );
}