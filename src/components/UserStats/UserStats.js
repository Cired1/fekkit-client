import styles from "./UserStats.module.css"
import { HiOutlineCake } from "react-icons/hi"
import { AiOutlineLike } from "react-icons/ai"

const UserStats = () => {
    return (
        <div className={styles.container}>
            <div className={styles.userStat}>
                <AiOutlineLike className={styles.statIcon} />
                <div className={styles.statInfo}>
                    <small className={styles.statCounter}>2,228</small>
                    <small>Likes</small>
                </div>
            </div>
            <div className={styles.userStat}>
                <HiOutlineCake className={styles.statIcon} />
                <div className={styles.statInfo}>
                    <small className={styles.statCounter}>2y 4m</small>
                    <small>Fekkit age</small>
                </div>
            </div>
        </div>
    )
}

export default UserStats
