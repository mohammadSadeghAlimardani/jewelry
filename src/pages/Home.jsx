import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Sidebar from "../components/Sidebar/Sidebar";
import FeaturedCollection from "../components/FeaturedCollection/FeaturedCollection";
import WhyUs from "../components/WhyUs/WhyUs";
import Footer from "../components/Footer/Footer";
import ModalSearchForm from "../components/ModalSearchForm/ModalSearchForm";

const Home = () => {
    return (
        <div className="home">
            <ModalSearchForm />
            <Navbar />
            <Sidebar />
            <Hero />
            <FeaturedCollection />
            <WhyUs />
            <Footer />
        </div>
    );
};

export default Home;
