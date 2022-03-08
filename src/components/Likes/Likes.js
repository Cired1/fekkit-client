import { ImArrowDown, ImArrowUp } from "react-icons/im";
import styles from "./Likes.module.css";

const Likes = ({ likes }) => {
    return (
        <div className={styles.container}>
            <button className={styles.btnLike}>
                <ImArrowUp className={styles.icon} />
            </button>
            <span className={styles.likes}>
                {likes}
            </span>
            <button className={styles.btnDislike}>
                <ImArrowDown className={styles.icon} />
            </button>
        </div>
    )
}

export default Likes
