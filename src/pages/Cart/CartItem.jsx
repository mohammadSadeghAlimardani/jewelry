import { useMutation } from "@tanstack/react-query";
import "./CartItem.css";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../App";
import { toast } from "react-toastify";

const jewelryAuthUserURL =
    "https://api.m0ckly.site/m/6a97ad5307cac036/jewelry-auth-user";

const CartItem = (props) => {
    const { user, setUser } = useContext(AppContext);
    const { id: jewel_ID, quantity, price, images, name } = props;

    const { mutate: deleteCartItem } = useMutation({
        mutationFn: async () => {
            const newCartItems = user.cart.filter(
                (cartItem) => cartItem.id !== jewel_ID,
            );
            const newUser = { ...user, cart: newCartItems };
            setUser(newUser);
            const response = await axios.put(
                `${jewelryAuthUserURL}/${user.id}`,
                newUser,
            );
            if (response.status === 200) {
                toast.success("you deleted item successfully");
            }
        },
    });

    return (
        <article className="cart-item">
            <img src={images[0]} alt={name} />
            <div>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <button
                    className="link delete-cart-item"
                    onClick={deleteCartItem}
                >
                    <FaTrashAlt />
                </button>
            </div>
        </article>
    );
};

export default CartItem;
