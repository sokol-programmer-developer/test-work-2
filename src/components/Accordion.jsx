import React from 'react';
import "../css/accordion.css"
import { content } from './AccordionData.js';
import AccordionContent from "./AccordionContent";

const Accordion = () => {

    return (
        <div className="accordion_section">

            <h1 className="accordion_title">Справка</h1>

            <div className="accordion_container">
                <div className="accordion_content">
                    {content.map( ({title, text, id}) => (
                        <AccordionContent title={title} text={text} key={id}/>
                    ))}
                </div>
            </div>





        </div>
    );
};

export default Accordion;
