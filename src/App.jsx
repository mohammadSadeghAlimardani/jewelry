import { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About/About";
import GlobalError from "./pages/GlobalError/GlobalError";
import Jewel from "./pages/Jewel/Jewel";
import User from "./pages/User/User";
import Search from "./pages/Search/Search";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <GlobalError />,
    },
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <GlobalError />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <GlobalError />,
    },
    {
        path: "/cart",
        element: <Cart />,
        errorElement: <GlobalError />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <GlobalError />,
    },
    {
        path: "/jewel/:id",
        element: <Jewel />,
        errorElement: <GlobalError />,
    },
    {
        path: "/user",
        element: <User />,
        errorElement: <GlobalError />,
    },
    {
        path: "/search",
        element: <Search />,
        errorElement: <GlobalError />,
    },
]);

export const AppContext = createContext();

const App = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null,
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const [isDisplayModalSearchForm, setIsDisplayModalSearchForm] =
        useState(false);

    return (
        <AppContext.Provider
            value={{
                isShowSidebar,
                setIsShowSidebar,
                isDisplayModalSearchForm,
                setIsDisplayModalSearchForm,
                searchTerm,
                setSearchTerm,
                user,
                setUser,
            }}
        >
            <RouterProvider router={router} />
        </AppContext.Provider>
    );
};

export default App;
