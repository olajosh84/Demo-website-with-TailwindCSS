import { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar () {
    const navLinksRef = useRef(null);
    const menuBarRef = useRef(null);
    const handleToggleNavLinks = () => {
        const navLinksContainer = navLinksRef.current.parentNode;
        navLinksContainer.classList.toggle("show-links");
        const navLinksHeight = navLinksRef.current.getBoundingClientRect().height;
        if(navLinksContainer.classList.contains("show-links")){
            navLinksContainer.style.height = `${navLinksHeight}px`;
            menuBarRef.current.classList.add("hidden"); 
            menuBarRef.current.nextElementSibling.classList.remove("hidden");
        }else{
            navLinksContainer.style.height = "0px";
            menuBarRef.current.classList.remove("hidden"); 
            menuBarRef.current.nextElementSibling.classList.add("hidden");
        }
         
    }


    return (
        <nav className="w-full bg-white shadow-2xl z-20 sticky top-0 left-0 right-0">
            <div className="container transition-all mx-auto px-8 py-4 md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <NavLink to="/">
                        <img className="w-40" src={logo} alt="Logo" />
                    </NavLink>
                    <div id="menuBar" className="text-2xl cursor-pointer md:hidden transition-all ease-linear duration-1000" onClick={handleToggleNavLinks}>
                        <span ref={menuBarRef}>
                            <i className="fa-solid fa-bars"></i>
                        </span>
                        <span className="hidden">
                            <i className="fa-solid fa-times"></i>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col capitalize transition-all ease-in-out duration-1000 overflow-hidden h-0 md:!h-auto">
                    <ul id="showHideLinks" className="md:inline-flex md:items-center md:justify-center" ref={navLinksRef}>
                        <li className="pt-3 hover:bg-gray-100 md:pt-0">
                            <NavLink to="/">home</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0 md:pl-8 hover:bg-gray-100">
                            <NavLink to="/about" >about</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0 md:pl-8 hover:bg-gray-100">
                            <NavLink to="/contact">contact</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0 md:pl-8 hover:bg-gray-100">
                            <NavLink to="/blog">blog</NavLink>
                        </li>
                        {/*<li className="pt-3 md:pt-0 md:pl-8">
                            <Link to="/account">account</Link>
                        </li>*/}
                        <li className="pt-3 md:pt-0 md:pl-8 hover:bg-gray-100">
                            <NavLink to="/login">sign in</NavLink>
                        </li>
                        <li className="pt-3 md:pt-0  md:hidden md:pl-8">
                            <div className="flex gap-4 text-lg mt-4">
                                <span ><i className="fab fa-facebook text-blue-700 cursor-pointer"></i></span>
                                <span ><i className="fab fa-linkedin text-blue-700 cursor-pointer"></i></span>
                                <span ><i className="fab fa-instagram text-red-600 cursor-pointer"></i></span>
                                <span ><i className="fab fa-twitter text-sky-600 cursor-pointer"></i></span>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}