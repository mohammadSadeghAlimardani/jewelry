import "./About.css";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about">
                <section className="section-center about-center">
                    <h2>about us</h2>
                    <div>
                        <p>Timeless Elegance, Crafted to Inspire</p>
                        <p>
                            Welcome to Luxe Jewelry, where elegance meets
                            exceptional beauty.
                        </p>
                        <p>
                            We believe that jewelry is more than just an
                            accessory — it is a reflection of personality, a
                            symbol of meaningful moments, and a way to express
                            your unique style.
                        </p>
                        <p>
                            Our collection features carefully selected rings,
                            necklaces, earrings, and bracelets, each chosen for
                            its beauty, quality, and timeless appeal. From
                            classic designs to modern creations, we aim to help
                            you find the perfect piece for every occasion.
                        </p>
                        <p>
                            Whether you're celebrating a special moment,
                            choosing a meaningful gift, or simply treating
                            yourself, we're here to make your experience
                            memorable.
                        </p>
                        <p>
                            Discover the beauty. Celebrate your style. Shine
                            every day.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
