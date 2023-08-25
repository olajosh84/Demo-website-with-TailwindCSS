import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import BackToTop from "./BackToTop";

export default function SharedLayout () {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
            {/*<BackToTop />*/}
        </>
    )
}