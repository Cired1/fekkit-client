import { Link } from "react-router-dom"
import Likes from "../Likes/Likes";
import RoundPortrait from "../RoundPortrait/RoundPortrait";
import styles from "./Comment.module.css";

const Comment = ({ id, name }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link to={`/user/${id}`} className={styles.user}>
                    <RoundPortrait
                        image="https://placeimg.com/200/200/any"
                        desc="user"
                        size={30}
                    />
                    <span className={styles.userName}>
                        {name}
                    </span>
                </Link>
                <span className={styles.postDate}>
                    3 years ago
                </span>
            </div>
            <p className={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
            <Likes likes={67} />
        </div>
    )
}

export default Comment
