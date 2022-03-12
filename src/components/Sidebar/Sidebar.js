import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { closeSidebar } from "../../features/sidebarSlice"
import Button from "../Button/Button"
import UserCard from "../UserCard/UserCard"
import UserOptions from "../UserOptions/UserOptions"
import UserStats from "../UserStats/UserStats"
import styles from "./Sidebar.module.css"

import bgImage from "../../assets/images/logo.png"

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
                        <img src={bgImage} alt="logo" className={styles.bgImage} />
                        <div className={styles.message}>
                            <h2 className={styles.title}>
                                Still not part of the community?
                            </h2>
                            <h2 className={styles.title}>
                                What are you waiting for?
                            </h2>
                            <h2 className={styles.title}>
                                Join us to start sharing content with your friends.
                            </h2>
                        </div>
                        <Link to="/login" className={styles.link}>
                            <button
                                className={styles.btn}
                                onClick={() => dispatch(closeSidebar())}
                            >
                                Log In
                            </button>
                        </Link>
                        <Link to="/register" className={styles.link}>
                            <button
                                className={styles.btn}
                                onClick={() => dispatch(closeSidebar())}
                            >
                                Register
                            </button>
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
