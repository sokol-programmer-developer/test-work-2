import React from "react";
import "../css/accordion.css";
import "../css/article.css";
import "../css/Style.css";
import "../css/carousel.css";


import imageUrlLeft from "../assets/airplane.svg";
import imageUrlRight from "../assets/handHoldingPhone.svg";
import btnImg_Chat from "../assets/message.svg";
import btnImg_Call from "../assets/telephone.svg";
import btnImg_Mail from "../assets/envelope.svg";
import btnImg_Review from "../assets/star.svg";
import icon_vk from "../assets/vk.svg";
import icon_instagram from "../assets/instagram.svg";
import icon_tik_tok from "../assets/tik_tok.svg";
import icon_twitter from "../assets/twitter.svg";
import icon_yandex_dzen from "../assets/yandex_dzen.svg";
import icon_facebook from "../assets/facebook.svg";
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <div  className="home_container">
            <div  className="header_section">
                <img src={imageUrlLeft} alt="imageUrlLeft" className="picLeft" />
                <div className="header_text">
                    <h2 className="header_h2">Поддержка здесь</h2>
                    <h3 className="header_h3">
                        Мы любим общаться и рады всем отзывам, вопросам и предложениям. Выберите удобный способ
                    </h3>

                    <div className="header_btn">
                        <Link to="Article">
                            <button className="btn">
                            <img src={btnImg_Chat} alt="Chat" className="header_pic"/>
                            <h4 className="header_h4" >Онлайн-чат</h4>
                        </button>
                        </Link>
                        <Link to="Article">
                        <button className="btn">
                            <img src={btnImg_Call} alt="Chat" className="header_pic"/>
                            <h4 className="header_h4" >Позвонить</h4>
                        </button>
                        </Link>
                        <Link to="Article">
                        <button className="btn">
                            <img src={btnImg_Mail} alt="Chat" className="header_pic"/>
                            <h4 className="header_h4" >Почта</h4>
                        </button>
                        </Link>
                        <Link to="Article">
                        <button className="btn">
                            <img src={btnImg_Review} alt="Chat" className="header_pic"/>
                            <h4 className="header_h4" >Отзыв о сайте</h4>
                        </button>
                        </Link>
                    </div>

                </div>
                <img src={imageUrlRight} alt="imageUrlRight" className="picRight" />
            </div>

            <div  className="subHeader_section">

                <div className="subHeader_text">
                    <h2 className="subHeader_h2">Социальные сети и сообщество</h2>
                    <h3 className="subHeader_h3" >Присоединяйтесь</h3>
                </div>

                <div className="subHeader_icons">
                    <Link to="Article"><img src={icon_vk}          alt="vk"          className="header_icon"/></Link>
                    <Link to="Article"><img src={icon_instagram}   alt="instagram"   className="header_icon"/></Link>
                    <Link to="Article"><img src={icon_tik_tok}     alt="tik-tok"     className="header_icon"/></Link>
                    <Link to="Article"><img src={icon_twitter}     alt="twitter"     className="header_icon"/></Link>
                    <Link to="Article"><img src={icon_yandex_dzen} alt="yandex_dzen" className="header_icon"/></Link>
                    <Link to="Article"><img src={icon_facebook}    alt="facebook"    className="header_icon"/></Link>
                </div>

            </div>
        </div>
    )
}



export default Header;
