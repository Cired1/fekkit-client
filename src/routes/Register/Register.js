import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/authSlice"
import styles from "./Register.module.css";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordRepeat: ""
    })

    const { name, email, password, passwordRepeat } = formData;

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message, { theme: "dark" });
        }
        if (isSuccess || user) {
            navigate("/");
            toast.success("You have successfully registered", { theme: "dark" })
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordRepeat) {
            toast.error("Passwords do not match", { theme: "dark" });
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData));
        }
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Register</h2>
                <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your username"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        id="passwordRepeat"
                        name="passwordRepeat"
                        value={passwordRepeat}
                        placeholder="Confirm password"
                        onChange={handleChange}
                    />
                    <button type="submit" className={styles.btnRegister}>Submit</button>
                </form>
                <div className={styles.register}>
                    <h4>Already have an account ?</h4>
                    <Link
                        className={styles.link}
                        to="/login"
                    >
                        LOG IN
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Register
