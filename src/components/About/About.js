import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.container}>
            <p className={styles.desc}>Hey, i´m Bryan the creator of this page. 
                As you have already seen, this is somehow a clone of Reddit. 
                This project was born because i wanted to create a fullstack application.
                To do that i decided to go with the MERN stack.</p>
            <small className={styles.copyright}>Bryan Abundis © 2022. All rights reserved</small>
        </section>
    )
}

export default About
