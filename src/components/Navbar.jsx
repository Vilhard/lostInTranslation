import styles from './Navbar.module.css'
import profilePic from '../assets/profile-blank.png';
import {Route} from 'react-router-dom'
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

    const loggedInUser = () => {
        if(username === null){
            return <div className={styles.NavbarUser}>
                {/* <Route to="/">Log in</Route> */}
                <a className={styles.NavbarUserLogin} href="/">Log in</a>
            </div>
        }else{
            return <div className={styles.NavbarUser}>
                    <span onClick={logoutUser} className={styles.NavbarUserName}>{username}</span>
                    <img onClick={logoutUser} className={styles.NavbarUserPic} src={profilePic} alt="Profile_picture"/>
                </div>
        }
    }
    return (
        <div>
            {/* <div className={styles.NavbarContainer}> */}
                <nav className={styles.Navbar}>
                    <ul className={styles.NavbarMenu}>
                        <li className={styles.NavbarHeadingText}><a className={styles.NavbarUserLogin} href="/">Lost in Translation</a></li>
                        <li>{loggedInUser()}</li>
                    </ul>
                    
                </nav>
            {/* </div> */}
        </div>
    )
}
export default Navbar;