import styles from "./AboutCommunity.module.css";

const AboutCommunity = () => {
    return (
        <section className={styles.container}>
            <h5 className={styles.title}>About Community</h5>
            <p>Descripción larga</p>
            <div className={styles.members}>
                <span>650k</span>
                <span>members</span>
            </div>
            <hr />
            <p>Created Apr 26, 2008</p>
        </section>
    )
}

export default AboutCommunity
