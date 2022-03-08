import styles from "./PostCards.module.css";
import { posts } from "../../data"
import PostCard from "../PostCard/PostCard";

const PostCards = () => {
    return (
        <section className={styles.container}>
            {posts.map((post) => <PostCard key={post.id} {...post} />)}
        </section>
    )
}

export default PostCards
