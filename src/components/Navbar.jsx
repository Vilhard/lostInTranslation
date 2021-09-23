import styles from './Navbar.module.css'
import profilePic from '../assets/profile-blank.png';
// import {Route} from 'react-router-dom'
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const username = localStorage.getItem('username')
    const history = useHistory();

    function logoutUser() {
        console.log("Logging out user...")
		localStorage.removeItem("username");
		localStorage.removeItem("id");
        history.push("/");
	}

    const userProfile = () => {
        if(username === null){
            return <div className={styles.NavbarUser}>
                {/* <Route to="/">Log in</Route> */}
                <a className={styles.NavbarUserLogin} href="/">Log in</a>
            </div>
        }else{
            return <div className={styles.NavbarUser}>
                <a href="/profile">
                    <span className={styles.NavbarUserName}>{username}</span>  
                    <img className={styles.NavbarUserPic} src={profilePic} alt="Profile_picture"/>
                </a>
                <button onClick={logoutUser}>Log out</button>
                    
                </div>
        }
    }
    return (
        <div>
            {/* <div className={styles.NavbarContainer}> */}
                <nav className={styles.Navbar}>
                    <ul className={styles.NavbarMenu}>
                        <li className={styles.NavbarHeadingText}><a className={styles.NavbarUserLogin} href="/">Lost in Translation</a></li>
                        <li>{userProfile()}</li>
                    </ul>
                    
                </nav>
            {/* </div> */}
        </div>
    )
}
export default Navbar;