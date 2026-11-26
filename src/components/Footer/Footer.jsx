import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="section-center footer-center">
                <p>
                    &copy; {new Date().getFullYear()} JF3R jewelry. All Rights
                    Reserved
                </p>
            </section>
        </footer>
    );
};

export default Footer;
