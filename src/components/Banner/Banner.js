import Button from "../Button/Button";
import RoundPortrait from "../RoundPortrait/RoundPortrait";
import styles from "./Banner.module.css";

const Banner = ({ name }) => {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <img
                    src="https://placeimg.com/1000/1000/people"
                    alt="banner"
                    className={styles.image}
                />
            </div>
            <div className={styles.bottom}>
                <RoundPortrait
                    image="https://placeimg.com/1000/1000/tech"
                    desc="community name"
                    size={70}
                />
                <div className={styles.communityInfo}>
                    <h3>Descripción corta</h3>
                    <div className={styles.joinCommunity}>
                        <h4>r/{name}</h4>
                        <Button
                            bgColor="#ddd"
                            fgColor="#222"
                            text="Join"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner
