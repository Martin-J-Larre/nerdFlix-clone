import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { Login } from "../pages/Login/Login";
import { Paypal } from "../pages/Paypal/Paypal";

export const Routers = () => {
    let user = "pepe";

    return (
        <>
            <BrowserRouter>
                { !user ? (
                    <Login />
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/checkout" element={<Paypal />} />
                    </Routes>
                )}
            </BrowserRouter>
        </>
    );
};
