import { nanoid } from "nanoid";
import { IoDiamondSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaGift } from "react-icons/fa6";
import { IoReturnUpBack } from "react-icons/io5";

const navLinks = [
    {
        id: nanoid(),
        text: "home",
        path: "/",
    },
    {
        id: nanoid(),
        text: "about",
        path: "/about",
    },
];

export { navLinks };

const whyUsItems = [
    {
        id: nanoid(),
        icon: <IoDiamondSharp />,
        title: "premium materials",
        description:
            "Crafted with 925 Sterling Silver and hand-selected stones.",
    },
    {
        id: nanoid(),
        icon: <TiTick />,
        title: "lifetime warranty",
        description: "Every piece is backed by our lifetime quality guarantee.",
    },
    {
        id: nanoid(),
        icon: <FaGift />,
        title: "luxury packaging",
        description: "Delivered in signature packaging,prefect for gifting.",
    },
    {
        id: nanoid(),
        icon: <IoReturnUpBack />,
        title: "easy returns",
        description: "30-day hasssle-free returns for your peace of mind.",
    },
];

export { whyUsItems };
