import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

const UserBtns = () => {
    const {
        isShowSidebar,
        setIsShowSidebar,
        isDisplayModalSearchForm,
        setIsDisplayModalSearchForm,
        user,
        setUser,
    } = useContext(AppContext);

    return (
        <ul className="user-btns">
            <button
                className="link search-btn"
                onClick={(event) => setIsDisplayModalSearchForm(true)}
            >
                <IoIosSearch />
            </button>
            {user ? (
                <NavLink className="link profile-btn" to="/user">
                    <FaRegUser />
                </NavLink>
            ) : (
                <NavLink to="/login" className="btn btn-main register-btn">
                    login
                </NavLink>
            )}
            <button className="link cart-btn">
                <IoBagHandleOutline />
            </button>
            <button
                className="link show-sidebar-btn"
                onClick={(event) => setIsShowSidebar(true)}
            >
                <FaBars />
            </button>
        </ul>
    );
};

export default UserBtns;
