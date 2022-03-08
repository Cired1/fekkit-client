import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io"
import styles from "./TopCommunities.module.css";
import { communities } from "../../data";
import RoundPortrait from "../RoundPortrait/RoundPortrait";

const TopCommunities = () => {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <h4>Top Communities</h4>
            </div>
            <ul className={styles.list}>
                {communities.map((community, index) =>
                    <li key={community.id}>
                        <Link to={`/communities/${community.id}`} className={styles.link}>
                            <span>{index + 1}</span>
                            <IoIosArrowUp className={styles.icon} />
                            <RoundPortrait
                                image={community.img}
                                name={community.name}
                                size={30}
                            />
                            <span className={styles.name}>r/{community.name}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </section>
    )
}

export default TopCommunities
