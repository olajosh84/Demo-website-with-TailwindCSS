import { Link } from "react-router-dom";

const BackToTop = () => {
    return (
        <Link to="#top">
            <button className="fixed bg-blue-900 text-white bottom-11 right-8 z-50 px-3 py-2 rounded-lg bg-opacity-80 transition-all ease-linear duration-200 hover:bg-opacity-100">
                <i className="fa-solid fa-arrow-up text-lg"></i>
            </button>
        </Link>
        
    )
}
    
export default BackToTop