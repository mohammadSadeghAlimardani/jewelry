import { FaRegHeart } from "react-icons/fa";
import "./FeaturedCard.css";
import { NavLink } from "react-router-dom";

const FeaturedCard = (props) => {
    const { name, description, images, pricing, id: jewel_ID } = props;
    const { price } = pricing;

    return (
        <article className="featured-card">
            <button className="link save-to-favorites">
                <FaRegHeart />
            </button>
            <NavLink to={`/jewel/${jewel_ID}`}>
                <img src={images[0]} alt={name} />
            </NavLink>
            <h3>{name}</h3>
            <p>{description}</p>
            <ul>
                <span>${price}</span>
            </ul>
        </article>
    );
};

export default FeaturedCard;
