import styles from "./PostCards.module.css";
import PostCard from "../PostCard/PostCard";

const PostCards = ({posts}) => {

    return (
        <section className={styles.container}>
            {posts
                ? posts.map((post) => <PostCard key={post._id} {...post} />)
                : null}
        </section>
    )
}

export default PostCards
