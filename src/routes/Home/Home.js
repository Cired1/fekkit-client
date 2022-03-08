import About from "../../components/About/About"
import PostCards from "../../components/PostCards/PostCards"
import TopCommunities from "../../components/TopCommunities/TopCommunities"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <section className={styles.container}>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>Home</h1>
            <div className={styles.content}>
                <PostCards />
                <div className={styles.rightColumn}>
                    <TopCommunities />
                    <About />
                </div>
            </div>
        </section>
    )
}

export default Home
