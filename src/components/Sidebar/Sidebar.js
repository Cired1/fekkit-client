import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { closeSidebar } from "../../features/sidebarSlice"
import Button from "../Button/Button"
import UserCard from "../UserCard/UserCard"
import UserOptions from "../UserOptions/UserOptions"
import UserStats from "../UserStats/UserStats"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { isOpen } = useSelector((state) => state.sidebar);

    return (
        <aside className={
            isOpen
                ? `${styles.container} ${styles.show}`
                : `${styles.container}`
        }>
            <div className={styles.content}>
                {user
                    ? <>
                        <UserCard />
                        <UserStats />
                        <UserOptions />
                    </>
                    : <div className={styles.loginOptions}>
                        <Link to="/login">
                            <Button
                                text="Log In"
                                onClick={() => dispatch(closeSidebar())}
                            />
                        </Link>
                        <Link to="/register">
                            <Button
                                text="Sign Up"
                                onClick={() => dispatch(closeSidebar())}
                            />
                        </Link>
                    </div>
                }

                <FaTimes
                    className={styles.closeSidebar}
                    onClick={() => dispatch(closeSidebar())}
                />
            </div>
        </aside>
    )
}

export default Sidebar
