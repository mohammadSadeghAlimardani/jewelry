import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../../App";

const url = "https://api.m0ckly.site/m/6a97ad5307cac036/jewelry-auth-user";

const Login = () => {
    const { user, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    const loginUserFn = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const response = await axios.get(
                `${url}?email=${email}&password=${password}`,
            );
            if (response.status === 200) {
                if (response.data.length === 0) {
                    toast.error("email or password is not correct");
                } else {
                    setUser(response.data[0]);
                    localStorage.setItem(
                        "user",
                        JSON.stringify(response.data[0]),
                    );
                    toast.success("you logined successfully");
                    navigate("/");
                }
            }
        } catch (error) {
            console.log(error.response);
        }
    };
    return (
        <>
            <Navbar />
            <div className="login">
                <section className="section-center login-center">
                    <form onSubmit={loginUserFn}>
                        <div className="form-row">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>
                        <button className="btn btn-main">login</button>
                    </form>
                    <p>
                        Don't have an account?
                        <NavLink to="/signup"> sign up</NavLink>
                    </p>
                </section>
            </div>
        </>
    );
};

export default Login;
