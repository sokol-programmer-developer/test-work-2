import React, {useState} from 'react';
import  "../css/Style.css";

const AccordionContent = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion_item">
            <div className="accordion_heading" onClick={() => setIsActive(!isActive)}>
                <div className="accordion_name"> {title} </div>
                <div className="accordion_button" > {isActive ? '-' : '+'} </div>
            </div>

            {isActive && <div className="accordion_text"><h2 className="accordion_h2">{text}</h2></div>}

        </div>
    );
};

export default AccordionContent;
