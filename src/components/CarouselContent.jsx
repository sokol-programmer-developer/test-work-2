import React from "react";
import "../css/carousel.css";
import Carousel from "./Carousel";

import pic_basket from "./../assets/basketPic.svg"
import {Link} from "react-router-dom";


const CarouselContent = () => {
    return (
        <div className="carousel_section">

            <h2 className="carousel_h2" > Часто задаваемые вопросы </h2>

            <Carousel
                show={4}

            >

                <div  className="slider_section">

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Где работает доставка? </h2>
                            <h3 className="slider_h3"> Карта лояльности с вашим номером покупателя. <br/> Это карта лояльности с вашим. </h3>

                        </div>
                        <Link to="Article">
                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Узнать </h2>
                            </button>
                        </Link>

                    </div>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />

                </div>
                <div  className="slider_section">

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Где работает доставка? </h2>
                            <h3 className="slider_h3"> Карта лояльности с вашим номером покупателя. <br/> Это карта лояльности с вашим. </h3>


                        </div>

                        <Link to="Article">
                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Узнать </h2>
                            </button>
                        </Link>

                    </div>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />

                </div>
                <div  className="slider_section">

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Где работает доставка? </h2>
                            <h3 className="slider_h3"> Карта лояльности с вашим номером покупателя. <br/> Это карта лояльности с вашим. </h3>

                        </div>

                        <Link to="Article">
                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Узнать </h2>
                            </button>
                        </Link>

                    </div>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />

                </div>
                <div  className="slider_section">

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Где работает доставка? </h2>
                            <h3 className="slider_h3"> Карта лояльности с вашим номером покупателя. <br/> Это карта лояльности с вашим. </h3>

                        </div>

                        <Link to="Article">
                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Узнать </h2>
                            </button>
                        </Link>

                    </div>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />
                </div>
                <div  className="slider_section">

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Где работает доставка? </h2>
                            <h3 className="slider_h3"> Карта лояльности с вашим номером покупателя. <br/> Это карта лояльности с вашим. </h3>

                        </div>

                        <Link to="Article">
                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Узнать </h2>
                            </button>
                        </Link>

                    </div>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />
                </div>
                <div  className="slider_section">

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Где работает доставка? </h2>
                            <h3 className="slider_h3"> Карта лояльности с вашим номером покупателя. <br/> Это карта лояльности с вашим. </h3>

                        </div>

                        <Link to="Article">
                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Узнать </h2>
                            </button>
                        </Link>

                    </div>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />
                </div>
                <div  className="slider_section">

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Где работает доставка? </h2>
                            <h3 className="slider_h3"> Карта лояльности с вашим номером покупателя. <br/> Это карта лояльности с вашим. </h3>

                        </div>

                        <Link to="Article">
                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Узнать </h2>
                            </button>
                        </Link>

                    </div>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />
                </div>
                <div  className="slider_section">

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Где работает доставка? </h2>
                            <h3 className="slider_h3"> Карта лояльности с вашим номером покупателя. <br/> Это карта лояльности с вашим. </h3>

                        </div>

                        <Link to="Article">
                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Узнать </h2>
                            </button>
                        </Link>

                    </div>

                    <img src={ pic_basket } alt="pic" className="slider_pic" />
                </div>

            </Carousel>
        </div>

    );
}

export default CarouselContent;
