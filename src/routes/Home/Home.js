import About from "../../components/About/About"
import PostCards from "../../components/PostCards/PostCards"
import TopCommunities from "../../components/TopCommunities/TopCommunities"
import postService from "../../services/postService"
import styles from "./Home.module.css"
import { useQuery } from "react-query";
import { useSelector } from "react-redux"

const Home = () => {
    const { user } = useSelector((state) => state.auth);

    const {
        data: posts,
        isLoading,
        isError,
        error
    } = useQuery(["posts"], postService.getPosts)

    if (isLoading) {
        return <h1 style={{ color: "#ddd" }}>Loading...</h1>
    }

    if (isError) {
        return <h2 style={{ color: "#ddd" }}>{error}</h2>
    }

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Home</h1>
            <div className={styles.content}>
                <PostCards posts={posts} />
                <div className={styles.rightColumn}>
                    <TopCommunities />
                    <About />
                </div>
            </div>
        </section>
    )
}

export default Home
