import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";

const Signup = () => {
    return (
        <>
            <Navbar />
            <div className="sign-up">
                <div className="section-center sign-up-center">
                    <h2>Create an account</h2>
                    <form>
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
                                name="eamil"
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
