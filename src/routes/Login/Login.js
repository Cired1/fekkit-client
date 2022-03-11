import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { login, reset } from "../../features/authSlice"
import styles from "./Login.module.css"

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {
        email,
        password
    } = formData;

    const {
        user,
        isLoading,
        isError,
        isSuccess,
        message
    } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message, { theme: "dark" });
        }
        if (isSuccess || user) {
            navigate("/");
            toast.success(`Welcome back u/${user.name}`, { theme: "dark" })
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

        const userData = {
            email,
            password
        }
        dispatch(login(userData));
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Login</h2>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="EMAIL"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="PASSWORD"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className={styles.btnLogin}
                    >
                        Log In
                    </button>
                </form>
                <div className={styles.register}>
                    <h4>New to Fekkit ?</h4>
                    <Link
                        className={styles.link}
                        to="/register"
                    >
                        SIGN UP
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Login
