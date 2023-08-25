import $ from "jquery";
import { useState } from "react";

export default function Faq ({id, question, answer}) {
    const [showAnswer, setShowAnswer] = useState(false);
    const toggleAnswer = (id) => {
        
        setShowAnswer(prevState => !prevState);
        $(`#${id}`).slideToggle("slow");
    }
   
    return (
        <div className="bg-white shadow-xl rounded-lg p-3">
            <div className="flex justify-between cursor-pointer" onClick={() => toggleAnswer(id)}>
                <p className="text-lg first-letter:uppercase">{question}</p>
                <span>
                    <i className={`fa-solid fa-${showAnswer ? 'minus' : 'plus'}`}></i>
                </span>
            </div>
            <div id={id} className="text-sm text-justify border-t-2 py-3 hidden faq-answer">
                {answer} 
            </div>
        </div>
    )
}