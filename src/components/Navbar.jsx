import styles from './Navbar.module.css'
const Navbar = () => {
    console.log('Navbar.render')
    return (
        <nav>
            Lost in Translation
            <ul className={styles.navBarUl}>
                <li>username</li>
            </ul>
        </nav>
    )
}
export default Navbar;