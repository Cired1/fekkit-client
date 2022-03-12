import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCommunity, reset } from "../../features/communitySlice"
import { toast } from "react-toastify";
import styles from "./CreateCommunity.module.css";

const CreateCommunity = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        name: "",
        shortDescription: "",
        largeDescription: ""
    })
    
    const {
        name,
        shortDescription,
        largeDescription
    } = formData;

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.community)

    useEffect(() => {
        if (isError) {
            toast.error(message, { theme: "dark" });
        }
        if (isSuccess) {
            navigate("/");
            toast.success("Comunidad creada con exito", { theme: "dark" })
        }
        if (!user) {
            navigate("/")
        }
        dispatch(reset());
    }, [user, navigate, isError, message, isSuccess, dispatch])

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCommunity(formData));
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Create a community</h2>
                <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                    />
                    <input
                        type="shortDescription"
                        name="shortDescription"
                        id="shortDescription"
                        placeholder="Short description"
                        value={shortDescription}
                        onChange={handleChange}
                    />

                    <input
                        type="largeDescription"
                        name="largeDescription"
                        id="largeDescription"
                        placeholder="Large description"
                        value={largeDescription}
                        onChange={handleChange}
                    />
                    <button className={styles.btn} type="submit">
                        Create Community
                    </button>

                </form>

            </div>
        </section>
    )
}

export default CreateCommunity
