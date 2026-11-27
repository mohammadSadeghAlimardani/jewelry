import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AppContext } from "../../App";
import CartItem from "./CartItem";

const Cart = () => {
    const { user, setUser } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <div className="cart">
                <section className="section-center cart-center">
                    {!user?.cart || user?.cart?.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        user?.cart?.map((item) => {
                            return <CartItem {...item} key={item.id} />;
                        })
                    )}
                </section>
            </div>
        </>
    );
};

export default Cart;
