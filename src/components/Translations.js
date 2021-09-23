import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Translation = () => {
    const username = localStorage.getItem('username')
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('username') === null) history.push("/");
    }, [history])

    return (  
        <>
            <h1>Translation page for user: {username}</h1>
        </>
    );
}

export default Translation