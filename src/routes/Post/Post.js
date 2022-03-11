import About from "../../components/About/About";
import AboutCommunity from "../../components/AboutCommunity/AboutCommunity";
import Banner from "../../components/Banner/Banner";
import Comments from "../../components/Comments/Comments";
import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import communityService from "../../services/communityService";
import postService from "../../services/postService";

const Post = () => {
    const { id } = useParams();

    const [post, setPost] = useState();
    const [community, setCommunity] = useState();

    return (
        <section className={styles.container}>
            <Banner />
            <section className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.postDetails}>

                    </div>
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
