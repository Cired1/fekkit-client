import About from "../../components/About/About";
import AboutCommunity from "../../components/AboutCommunity/AboutCommunity";
import Banner from "../../components/Banner/Banner";
import PostCards from "../../components/PostCards/PostCards";
import styles from "./Community.module.css";

const Community = () => {
    return (
        <section className={styles.container}>
            <Banner />
            <section className={styles.content}>
                <PostCards />
                <div className={styles.rightColumn}>
                    <AboutCommunity />
                    <About />
                </div>
            </section>
        </section>
    )
}

export default Community
