
export default function Loading(props) {
    return (
            <div className='error'>
                <h1>That's an error!</h1>
                <p>Details: {props.message}</p>
            </div>
    );
}