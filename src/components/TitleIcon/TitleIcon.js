import styles from "./TitleIcon.module.css";

const TitleIcon = ({ icon, title }) => {
    return (
        <div className={styles.container}>
            {icon}
            <h4>
                {title}
            </h4>
        </div>

    )
}

export default TitleIcon
