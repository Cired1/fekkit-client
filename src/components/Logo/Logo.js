import { Link } from "react-router-dom";
import styles from "./Logo.module.css"
import logo from "../../assets/images/logo.png"
import RoundPortrait from "../RoundPortrait/RoundPortrait";

const Logo = () => {
    return (
        <div className={styles.container}>
            <Link to="/">
                <RoundPortrait
                    image={logo}
                    desc="logo"
                    size={40}
                />
            </Link>
            <Link to="/">
                <h2 className={styles.title}>Fekkit</h2>
            </Link>
        </div>

    )
}

export default Logo
