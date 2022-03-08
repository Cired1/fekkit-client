import styles from "./RoundPortrait.module.css";

const RoundPortrait = ({image, desc, size}) => {

    return (
        <img
            src={image}
            alt={desc}
            className={styles.image}
            style={{ width: `${size}px`, height: `${size}px` }}
        />
    )
}

export default RoundPortrait
