import { useQuery } from "@tanstack/react-query";
import Title from "../Title/Title";
import "./FeaturedCollection.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const url = "https://api.m0ckly.site/m/6a97ad5307cac036/jewelleries";

const FeaturedCollection = () => {
    const [featuredItems, setFeaturedItems] = useState([]);

    const { isError, isLoading, data } = useQuery({
        queryKey: ["featuredItems"],
        queryFn: async () => {
            const response = await axios.get(url);
            const newItems = response.data.filter(
                (item) => item["is_featured"] === true,
            );
            return newItems;
        },
    });

    useEffect(() => {
        setFeaturedItems(data);
    }, [data]);

    return (
        <div className="featured-collection">
            <section className="section-center">
                <Title titleText="featrued" />
                <div className="featured-items col col-3">
                    {featuredItems?.map((featuredItem) => {
                        return (
                            <FeaturedCard
                                {...featuredItem}
                                key={featuredItem.id}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default FeaturedCollection;
