import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import About from "../../components/About/About";
import AboutCommunity from "../../components/AboutCommunity/AboutCommunity";
import Banner from "../../components/Banner/Banner";
import PostCards from "../../components/PostCards/PostCards";
import communityService from "../../services/communityService";
import styles from "./Community.module.css";

const Community = () => {

    const { id } = useParams();
    const [community, setCommunity] = useState("");

    useEffect(() => {
        communityService.getCommunity(id)
            .then((data) => setCommunity(data))
    }, [id])

    return (
        <section className={styles.container}>
            {community
                ? <Banner
                    name={community.name}
                />
                : null
            }
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
