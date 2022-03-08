import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import UserIcon from "../UserIcon/UserIcon";
import styles from "./Navbar.module.css";

const Navbar = () => {

    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <Logo />
                <SearchBar />
                <UserIcon />
            </div>
        </nav>
    )
}

export default Navbar
