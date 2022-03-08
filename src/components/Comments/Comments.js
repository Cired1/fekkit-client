import Comment from "../Comment/Comment";
import NewComment from "../NewComment/NewComment";
import styles from "./Comments.module.css";

const Comments = () => {
    return (
        <section className={styles.container}>
            <NewComment />
            <section className={styles.comments}>
                <Comment
                    id={1}
                    name="Usuario1"
                />
                <Comment
                    id={2}
                    name="Usuario2"
                />
                <Comment
                    id={3}
                    name="Usuario3"
                />
            </section>
        </section>
    )
}

export default Comments
