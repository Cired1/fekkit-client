import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";
import RoundPortrait from "../RoundPortrait/RoundPortrait";
import PostOptions from "../PostOptions/PostOptions";
import { useEffect, useState } from "react";
import communityService from "../../services/communityService";
import userService from "../../services/userService";

const PostCard = ({ content, title, community_id, user_id, _id }) => {

    const [community, setCommunity] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        communityService.getCommunity(community_id)
            .then((data) => setCommunity(data))
    }, [community_id])

    useEffect(() => {
        userService.getUser(user_id)
            .then((data) => setUser(data))
    }, [user_id])

    return (
        <div className={styles.container}>
            <div className={styles.postHeader}>
                {community
                    ? <Link
                        to={`/communities/${community_id}`}
                        className={styles.postHeaderCommunity}
                    >
                        f/{community.name}
                    </Link>
                    : null
                }
                {user
                    ? <Link
                        to={`/users/${user_id}`}
                        className={styles.postHeaderUser}
                    >
                        Posted by u/{user.name}
                    </Link>
                    : null
                }
            </div>
            <Link
                to={`/communities/${community_id}/posts/${_id}`}
                className={styles.postBody}
            >
                <h2 className={styles.postTitle}>{title}</h2>
                <p className={styles.postContent}>{content}</p>
            </Link>
            <PostOptions
                upvotes={50}
                comments={50}
            />
        </div>
    )
}

export default PostCard
