import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slides from "../assets/js/slides";
import slideTwo from "../assets/images/banner-2.jpeg"
import $ from "jquery";
import webImg from "../assets/images/web2.jpeg";
import uiuxImg from "../assets/images/uiux.jpeg";
import mobileImg from "../assets/images/mobile.png";



export default function Home(){
    const [count, setCount] = useState(0);
    const [animateSlide, setAnimateSlide] = useState(false);
    const [animateCaption, setAnimateCaption] = useState(false);
    const [animateTagLine, setAnimateTagLine] = useState(false);
    const [animateBtn, setAnimateBtn] = useState(false);
    const menuToggle = (el) => {
        $(`#${el}`).slideToggle("slow");
    }
    const handleSlideChange = (e) => {
        const slideBtnId = e.currentTarget.id;
        if(slideBtnId === "prevBtn"){
            setCount(prevCount => prevCount - 1);
            if(count === 0){
                setCount(slides.length - 1);
            }
        }else{
            setCount(prevCount => prevCount + 1);
            if(count === slides.length - 1){
                setCount(0);
            }
        }
        setAnimateSlide(true);
        setAnimateCaption(true);
        setAnimateTagLine(true);
        setAnimateBtn(true);
    }
    useEffect(() => {
        setAnimateSlide(true);
        setAnimateCaption(true);
        setAnimateTagLine(true);
        setAnimateBtn(true);
    },[count])
    return (
        <section className=" ">
             {/** SLIDER SECTION */}
            <div className="w-full h-screen relative">
                <img className={`w-full h-full object-cover absolute ${animateSlide ? 'animateSlide' : ''}`} onAnimationEnd={() => setAnimateSlide(false)}   src={require(`../assets/images/${slides[count].img}`)} alt="slide" />
                <div className="bg-black w-[90vw] px-4 py-8 text-center bg-opacity-40 absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border-t-4 border-t-sky-800">
                    <h1 className={`transition-all  text-3xl text-white uppercase font-semibold ${animateCaption ? 'animateSlideCaption' : ''} `} onAnimationEnd={() => setAnimateCaption(false)}>{slides[count].caption}</h1>
                    <p className={`transition-all text-white text-lg  ${animateTagLine ? 'animateTagLine' : ''} `} onAnimationEnd={() => setAnimateTagLine(false)}>{slides[count].tagLine}</p>
                    <Link to="/about">
                        <button className={`uppercase bg-transparent border-2 border-white rounded-full px-4 py-2 mt-8 text-white transition-all hover:bg-slate-900 ${animateBtn ? 'animateSlideBtn' : ''}`} onAnimationEnd={() => setAnimateBtn(false)}>read more</button>
                    </Link>
                </div>
                
                <button id="prevBtn" className="absolute top-1/2 left-7 text-2xl bg-white w-10 h-10 rounded-full bg-opacity-20 hover:bg-opacity-100 z-10" onClick={handleSlideChange}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button id="nextBtn" className="absolute top-1/2 right-7 text-2xl bg-white w-10 h-10 rounded-full bg-opacity-20 hover:bg-opacity-100" onClick={handleSlideChange}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            {/** SERVICES SECTION */}
            <div className="my-4 p-4">
                <h1 className="uppercase text-xl mb-2">services</h1>
                <div className="grid gap-4  md:grid-cols-3">
                    <div className="bg-white shadow-xl flex flex-col gap-4 items-center justify-center p-4 rounded-lg transition-all ease-linear duration-500 hover:bg-orange-700 hover:text-white">
                        <img src={webImg} alt="" className="w-20 h-20 rounded-full object-cover mb-4 ring-8" />
                        <p className="text-lg capitalize">web development</p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        </p>
                    </div>
                    <div className="bg-white shadow-xl flex flex-col gap-4 items-center justify-center p-4 rounded-lg">
                        <img src={uiuxImg} alt="" className="w-20 h-20 rounded-full object-cover mb-4" />
                        <p className="text-lg uppercase">ui/ux</p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        </p>
                    </div>
                    <div className="bg-white shadow-xl flex flex-col gap-4 items-center justify-center p-4 rounded-lg">
                        <img src={mobileImg} alt="" className="w-20 h-20 rounded-full object-cover mb-4" />
                        <p className="text-lg capitalize">mobile app</p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        </p>
                    </div>
                </div> 
            </div>
            {/** FAQ SECTION */}
            <div className="my-4 p-4">
                <h1 className="uppercase text-xl mb-2">FAQs</h1>
                <div className="grid gap-4">
                    <div className="bg-white shadow-xl rounded-lg p-3">
                        <div className="flex justify-between cursor-pointer" onClick={() => menuToggle("faq1")}>
                            <p className="text-lg first-letter:uppercase">what is your name?</p>
                            <span>
                                <i className="fa-solid fa-plus"></i>
                            </span>
                            <span className="hidden">
                                <i className="fa-solid fa-minus"></i>
                            </span>
                        </div>
                        <div id="faq1" className="text-sm text-justify border-t-2 py-3 hidden">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        </div>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-3">
                        <div className="flex justify-between cursor-pointer" onClick={() => menuToggle("faq2")}>
                            <p className="text-lg first-letter:uppercase">what do you do?</p>
                            <span>
                                <i className="fa-solid fa-plus"></i>
                            </span>
                        </div>
                        <div id="faq2" className="text-sm text-justify border-t-2 py-3 hidden">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        </div>
                    </div>
                    
                </div>
            </div>
             {/** FIXED IMAGED SECTION */}
             <div className="relative w-full h-60 bg-slate-400 bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${slideTwo})`}}>
                {/** background image fixed */}
                <div className="bg-black w-full h-full bg-opacity-50 text-white flex flex-col items-center justify-center gap-4 p-4">
                    <h1 className="text-xl capitalize">blog posts</h1>
                    <p>Click the button below to check out our blog posts</p>
                    <button className="bg-transparent border-2 py-2 px-4 rounded-full capitalize transition-all ease-linear duration-200 hover:bg-sky-900">
                       <Link to="/blog">view posts</Link> 
                    </button>
                </div>
             </div>
             
        </section>
    )
}