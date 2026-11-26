import { FaRegHeart } from "react-icons/fa";
import "./FeaturedCard.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const FeaturedCard = (props) => {
    const { name, description, images, pricing, id } = props;
    const { price } = pricing;
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
                <IoBagHandleOutline />
            </ul>
        </article>
    );
};

export default FeaturedCard;
