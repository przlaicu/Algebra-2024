import { useSearchParams } from "react-router-dom";

export default function User() {
    
    const[searchParams, setSearchParams] = useSearchParams();

    const user = searchParams.get('user')


    return(
        <div>
            <h1>User</h1>
            <p>This is user {user}, hello Africa </p>
        </div>
    );
}