import { FaLink, FaMoon, FaRegBookmark, FaRegUserCircle } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import styles from "./UserOptions.module.css";
import TitleIcon from "../TitleIcon/TitleIcon";
import { FiSettings } from "react-icons/fi";

const UserOptions = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <TitleIcon
                        icon={<FaRegUserCircle />}
                        title="My profile"
                    />
                </li>
                <li>
                    <TitleIcon
                        icon={<FaLink />}
                        title="Create a community"
                    />
                </li>
                <li>
                    <TitleIcon
                        icon={<FaRegBookmark />}
                        title="Saved"
                    />
                </li>
                <li>
                    <TitleIcon
                        icon={<BiTimeFive />}
                        title="History"
                    />
                </li>
                <li>
                    <TitleIcon
                        icon={<FiSettings />}
                        title="Settings"
                    />
                </li>
                <li>
                    <TitleIcon
                        icon={<FaMoon />}
                        title="Change theme"
                    />
                </li>
            </ul>
        </div>
    )
}

export default UserOptions
