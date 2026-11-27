import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./Jewel.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../../App";
import { toast } from "react-toastify";

const jewelryAuthUserURL =
    "https://api.m0ckly.site/m/6a97ad5307cac036/jewelry-auth-user";
const jewelryProductsURL =
    "https://api.m0ckly.site/m/6a97ad5307cac036/jewelry-products";

export const loader = async ({ params }) => {
    const { id } = params;

    try {
        const response = await axios.get(`${jewelryProductsURL}/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const Jewel = () => {
    const { user, setUser } = useContext(AppContext);

    const singleJewel = useLoaderData();
    const {
        id: jewel_ID,
        category,
        description,
        images,
        inventory,
        name,
        brand,
        pricing,
        specifications,
    } = singleJewel;

    const navigate = useNavigate();

    const { mutate: addToCart } = useMutation({
        mutationFn: async () => {
            if (!user) {
                navigate("/login");
                return;
            }

            const isJewelItemAlreadyExists = user.cart.find(
                (jewelItem) => jewelItem.id === jewel_ID,
            );

            if (isJewelItemAlreadyExists) {
                toast.error("you already have added item");
                return;
            }

            const newCartItem = {
                id: jewel_ID,
                quantity: 1,
                price: pricing.price,
                images: images,
                name: name,
            };
            const newCart = [...user.cart, newCartItem];
            const newUser = { ...user, cart: newCart };
            setUser(newUser);
            const response = await axios.put(
                `${jewelryAuthUserURL}/${user.id}`,
                newUser,
            );
            if (response.status === 200) {
                toast.success("you successfully added item to cart");
            }
        },
    });

    return (
        <>
            <Navbar />
            <div className="jewel">
                <section className="section-center jewel-center">
                    <img src={images[0]} alt={name} />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h3>brand : {brand}</h3>
                    <h3>${pricing.price}</h3>
                    <h4>only {inventory.stock} left</h4>

                    <button className="btn btn-main" onClick={addToCart}>
                        add to cart <IoBagHandleOutline />
                    </button>
                </section>
            </div>
        </>
    );
};

export default Jewel;
