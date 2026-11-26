import { whyUsItems } from "../../data";
import "./WhyUs.css";

const WhyUs = () => {
    return (
        <div className="why-us">
            <section className="section-center col col-4">
                {whyUsItems.map((whyUsItem) => {
                    const { icon, title, description, id } = whyUsItem;
                    return (
                        <article key={id}>
                            {icon}
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default WhyUs;
