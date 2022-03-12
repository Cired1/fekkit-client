import { logout, reset } from "../../features/authSlice";
import { closeSidebar } from "../../features/sidebarSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaLink, FaMoon, FaRegBookmark, FaRegUserCircle } from "react-icons/fa";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import TitleIcon from "../TitleIcon/TitleIcon";
import styles from "./UserOptions.module.css";
import { Link } from "react-router-dom";

const UserOptions = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        dispatch(closeSidebar());
        toast.success("Session closed successfully", { theme: "dark" })
    }

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <TitleIcon
                        icon={<FaRegUserCircle />}
                        title="My profile"
                    />
                </li>
                <li onClick={() => dispatch(closeSidebar())}>
                    <Link to="/communities" className={styles.link}>
                        <TitleIcon
                            icon={<FaLink />}
                            title="Create a community"
                        />
                    </Link>
                </li>
                {/* <li>
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
                </li> */}
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
                <li onClick={handleLogout}>
                    <TitleIcon
                        icon={<FiLogOut />}
                        title="Log Out"
                    />
                </li>
            </ul>
        </div>
    )
}

export default UserOptions
