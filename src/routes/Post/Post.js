import About from "../../components/About/About";
import AboutCommunity from "../../components/AboutCommunity/AboutCommunity";
import Banner from "../../components/Banner/Banner";
import Comments from "../../components/Comments/Comments";
import PostDetails from "../../components/PostDetails/PostDetails";
import styles from "./Post.module.css";

const Post = () => {
    return (
        <section className={styles.container}>
            <Banner />
            <section className={styles.content}>
                <div className={styles.post}>
                    <PostDetails />
                    <Comments />
                </div>
                <div className={styles.rightColumn}>
                    <AboutCommunity />
                    <About />
                </div>
            </section>
        </section>
    )
}

export default Post
