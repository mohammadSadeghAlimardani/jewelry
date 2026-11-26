import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login">
                <section className="section-center login-center">
                    <form>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
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
