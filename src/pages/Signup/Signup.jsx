import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const url = "https://api.m0ckly.site/m/6a97ad5307cac036/jewelry-auth-user";

const Signup = () => {
    const navigate = useNavigate();

    const signupUserFn = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const password = formData.get("password");
        const address = formData.get("address");

        if (!name || !lastname || !email || !password || !address) {
            toast.error("please provide all values");
            return;
        }
        const user = {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            address: address,
            cart: [],
            favorites: [],
        };

        try {
            const response = await axios.post(url, user);
            if (response.status === 201) {
                toast.success("you signed up successfully. please login");
                navigate("/");
            }
        } catch (error) {
            toast.error(error.response);
        }
    };

    return (
        <>
            <Navbar />
            <div className="sign-up">
                <div className="section-center sign-up-center">
                    <h2>Create an account</h2>
                    <form onSubmit={signupUserFn}>
                        <div className="form-row">
                            <input type="text" name="name" placeholder="Name" />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                            />
                        </div>
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
                        <div className="form-row">
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                            />
                        </div>
                        <button className="btn btn-main">create</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
