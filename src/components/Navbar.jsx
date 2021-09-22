import styles from './Navbar.module.css'
const Navbar = () => {
    console.log('Navbar.render')
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.NavbarMenu}>
                <li className={styles.NavbarHeaderText}>Lost in Translation</li>
                <li className={styles.NavbarMenuItem}>username</li>
            </ul>
        </nav>
    )
}
export default Navbar;