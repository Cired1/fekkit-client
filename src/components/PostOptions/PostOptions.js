import { FaRegComment, FaShare } from "react-icons/fa"
import Likes from "../Likes/Likes"
import TitleIcon from "../TitleIcon/TitleIcon"
import styles from "./PostOptions.module.css"

const PostOptions = ({ upvotes, comments }) => {
    return (
        <div className={styles.container}>
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
    )
}

export default PostOptions
