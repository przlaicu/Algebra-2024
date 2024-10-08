
export default function NewUser() {
    
    const [state, setNewUser] = useNewUser(state);

    const addNewUser = (e) => {
        setNewUser(e.target.value);
    }

    const handleSubmit = (e) => {
        e.setNewUser(value);
    }
    
    return(
        <div>
            <h1>Add New User</h1>
            <form>
                <input type="text" value={state}>Enter Name</input>
                <input type="text" value={state}>Enter Year Of Birth</input>
                <button type="submit" onChange={handleSubmit}>Add User</button>
            </form>
        </div>
    );
}