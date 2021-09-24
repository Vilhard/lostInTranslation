import styles from './Navbar.module.css'
import profilePic from '../assets/profile-blank.png';
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const username = localStorage.getItem('username')
    const history = useHistory();

    function logoutUser() {
		localStorage.removeItem("username");
		localStorage.removeItem("id");
        history.push("/");
	}
    function goToFrontPage(){
        history.push("/")
    }
    function goToProfilePage(){
        history.push("/profile")
    }

    const userProfile = () => {
        if(username === null){
            return <div className={styles.NavbarUser}>
                <span className={styles.NavbarUserLogin} onClick={goToFrontPage}>Log in</span>
            </div>
        }else{
            return <div className={styles.NavbarUser}>
                <div onClick={goToProfilePage}>
                    <span className={styles.NavbarUserName}>{username}</span>  
                    <img className={styles.NavbarUserPic} src={profilePic} alt="Profile_picture"/>
                </div>
                <button onClick={logoutUser}>Log out</button>
                    
                </div>
        }
    }
    return (
        <>
            <nav className={styles.Navbar}>
                <ul className={styles.NavbarMenu}>
                    <li className={styles.NavbarHeadingText}><a className={styles.NavbarUserLogin} href="/">Lost in Translation</a></li>
                    <li>{userProfile()}</li>
                </ul>

            </nav>
        </>
    )
}
export default Navbar;