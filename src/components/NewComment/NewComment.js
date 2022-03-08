import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./NewComment.module.css";

const NewComment = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>
                Log in or sign up to leave a comment
            </h4>
            <div className={styles.loginOptions}>
                <Link to="/login">
                    <Button
                        text="Log In"
                    />
                </Link>

                <Button
                    text="Sign Up"
                />
            </div>
        </div>
    )
}

export default NewComment
