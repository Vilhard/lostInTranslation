
const Translation = () => {

    const username = localStorage.getItem('username')

    return (  
        <>
            <h1>Translation page for user: {username}</h1>
        </>
    );
}

export default Translation