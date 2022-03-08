import { FaUser } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"
import { useDispatch } from "react-redux"
import { openSidebar } from "../../features/sidebarSlice"
import styles from "./UserIcon.module.css"

const UserIcon = () => {
    
    const dispatch = useDispatch();

    return (
        <button className={styles.container} onClick={() => dispatch(openSidebar())}>
            <IoIosArrowBack className={styles.userIcon} />
            <FaUser className={styles.userIcon} />
        </button>
    )
}

export default UserIcon
