import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { navLinks } from "../../data";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

const Sidebar = () => {
    const { isShowSidebar, setIsShowSidebar } = useContext(AppContext);

    return (
        <aside className={isShowSidebar ? "sidebar show-sidebar" : "sidebar"}>
            <header>
                <button
                    className="link"
                    onClick={(event) => setIsShowSidebar(false)}
                >
                    <FaTimes />
                </button>
            </header>
            <ul className="sidebar-links">
                {navLinks.map((navLink) => {
                    const { id, text, path } = navLink;
                    return (
                        <li key={id}>
                            <NavLink to={path}>{text}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
