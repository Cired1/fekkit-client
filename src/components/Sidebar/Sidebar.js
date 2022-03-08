import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { closeSidebar } from "../../features/sidebarSlice"
import UserCard from "../UserCard/UserCard"
import UserOptions from "../UserOptions/UserOptions"
import UserStats from "../UserStats/UserStats"
import styles from "./Sidebar.module.css"

const Sidebar = () => {

    const sidebar = useSelector(state => state.sidebar.value);
    const dispatch = useDispatch();

    return (
        <aside className={
            sidebar
                ? `${styles.container} ${styles.show}`
                : `${styles.container}`
        }>
            <div className={styles.content}>
                <UserCard />
                <UserStats />
                <UserOptions />
                <FaTimes
                    className={styles.closeSidebar}
                    onClick={() => dispatch(closeSidebar())}
                />
            </div>
        </aside>
    )
}

export default Sidebar
