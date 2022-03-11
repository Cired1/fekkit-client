import { useState } from "react";
import { useSelector } from "react-redux";
import RoundPortrait from "../RoundPortrait/RoundPortrait";
import styles from "./UserCard.module.css";

const UserCard = () => {
    const [isOnline, setIsOnline] = useState(false);

    const handleStatus = () => {
        setIsOnline(!isOnline);
    }

    const { user } = useSelector((state) => state.auth);

    return (
        <div className={styles.container}>
            <div className={styles.portrait}>
                <RoundPortrait
                    image="https://placeimg.com/1000/1000/people"
                    desc="user"
                    size={100}
                />
            </div>
            <h4 className={styles.name}>u/{user.name}</h4>
            <button className={`${isOnline ? styles.btnStatusOn : styles.btnStatusOff}`} onClick={handleStatus}>
                Online Status: {isOnline ? "On" : "Off"}
            </button>
        </div>
    )
}

export default UserCard
