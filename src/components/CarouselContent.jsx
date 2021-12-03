import React from "react";
import "./Style.css";
import Carousel from "./Carousel";

import pic_basket from "./../assets/basketPic.svg"


const CarouselContent = () => {
    return (
        <div className="carousel_section">

            <Carousel  show={5} >

                <div  className='slider_section'>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 1 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 2 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 3 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 4 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 5 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>


            </Carousel>
        </div>

    );
}

export default CarouselContent;

