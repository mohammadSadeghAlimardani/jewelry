import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";
import "./Navbar.css";
import UserBtns from "./UserBtns";

const Navbar = () => {
    return (
        <nav className="navbar">
            <section className="section-center navbar-center">
                <h1 className="logo">jf3r</h1>
                <ul className="nav-links">
                    {navLinks.map((navLink) => {
                        const { text, path, id } = navLink;
                        return (
                            <li key={id}>
                                <NavLink to={path}>{text}</NavLink>
                            </li>
                        );
                    })}
                </ul>
                <UserBtns />
            </section>
        </nav>
    );
};

export default Navbar;
