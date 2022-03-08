import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa"

const SearchBar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input type="text" className={styles.searchInput} placeholder="Search" />
                <FaSearch className={styles.searchIcon} />
            </form>
        </div>
    )
}

export default SearchBar
