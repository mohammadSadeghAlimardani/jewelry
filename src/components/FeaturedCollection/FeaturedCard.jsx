import { FaRegHeart } from "react-icons/fa";
import "./FeaturedCard.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../../App";

const FeaturedCard = (props) => {
    const { user, setUser } = useContext(AppContext);

    const { name, description, images, pricing, id } = props;
    const { price } = pricing;

    const addToCart = (event) => {
        const newJewelItem = { id: id, quantity: 1, price: price };
        const updatedCart = [...user.cart, newJewelItem];
        const updatedUser = { ...user, cart: updatedCart };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        toast.success("item added to your cart");
    };

    return (
        <article className="featured-card">
            <button className="link save-to-favorites">
                <FaRegHeart />
            </button>
            <NavLink to={`/jewel/${id}`}>
                <img src={images[0]} alt={name} />
            </NavLink>
            <h3>{name}</h3>
            <p>{description}</p>
            <ul>
                <span>${price}</span>
                <button className="link" onClick={addToCart}>
                    <IoBagHandleOutline />
                </button>
            </ul>
        </article>
    );
};

export default FeaturedCard;
