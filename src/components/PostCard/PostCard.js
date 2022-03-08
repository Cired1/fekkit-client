import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";
import { FaRegComment, FaShare } from "react-icons/fa";
import Likes from "../Likes/Likes";
import TitleIcon from "../TitleIcon/TitleIcon";
import RoundPortrait from "../RoundPortrait/RoundPortrait";

const PostCard = ({ comments, id, img, title, upvotes, communityId }) => {
    //Hacer fetch al endpoint de comunidades con la communityId para obtener el nombre y la imagen
    //Hacer fetch al endpoint de usuarios con el userId para obtener el nombre del usuario

    return (
        <div className={styles.container}>
            <div className={styles.postInfo}>
                <div className={styles.postHeader}>
                    <div className={styles.postSubheader}>
                        <Link
                            to={`/communities/${communityId}`}
                            className={styles.communityInfo}
                        >
                            <RoundPortrait
                                image={img}
                                desc="community"
                                size={20}
                            />
                            <span className={styles.communityName}>
                                r/subname
                            </span>
                        </Link>
                        <Link
                            to="/user/1"
                            className={styles.userInfo}
                        >
                            Posted by u/Usuario1
                        </Link>
                        <span className={styles.postDate}>
                            2 hours ago
                        </span>
                    </div>
                    <Link
                        to={`/communities/${communityId}/posts/${id}`}
                        className={styles.postTitle}
                    >
                        {title}
                    </Link>
                </div>

                <Link
                    to={`/communities/${communityId}/posts/${id}`}
                    className={styles.postBody}
                >
                    <img 
                        src={img} 
                        alt="post" 
                        className={styles.postImage} 
                    />
                </Link>
            </div>

            <div className={styles.postOptions}>
                <Likes likes={upvotes} />
                <TitleIcon
                    icon={<FaRegComment />}
                    title={comments}
                />
                <TitleIcon
                    icon={<FaShare />}
                    title="Share"
                />
            </div>
        </div>
    )
}

export default PostCard
