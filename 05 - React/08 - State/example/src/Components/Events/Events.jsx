

export default function Events() {
    
    function handleClick() {
        alert('You havle clicked button?')
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form has been submitted!');

    }

    return(
        <div>
            <h1>Events</h1>
            <button onClick={handleClick}>Click me</button>
            <hr />
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit form</button>
            </form>
        </div>
    );
}