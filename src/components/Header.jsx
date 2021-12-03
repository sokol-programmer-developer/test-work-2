import React from "react";
import "./Style.css"

const Header = ({ items }) => {
    return (
        <div className="home_section">
            {
                items.map((obj) =>
                    <div key={obj.id} className="home_container">
                        <div  className="header_section">
                            <img src={obj.imageUrlLeft} alt="imageUrlLeft" className="picLeft" />
                            <div className="header_text">
                                <h2>{obj.title_1}</h2>
                                <h3>{obj.subtitle_1}</h3>

                                <div className="header_btn">
                                    <button className="btn">
                                        <img src={obj.btnImg_Chat} alt="Chat"/>
                                        <h4>{obj.btnText_Chat}</h4>
                                    </button>
                                    <button className="btn">
                                        <img src={obj.btnImg_Call} alt="Chat"/>
                                        <h4>{obj.btnText_Call}</h4>
                                    </button>
                                    <button className="btn">
                                        <img src={obj.btnImg_Mail} alt="Chat"/>
                                        <h4>{obj.btnText_Mail}</h4>
                                    </button>
                                    <button className="btn">
                                        <img src={obj.btnImg_Review} alt="Chat"/>
                                        <h4>{obj.btnText_Review}</h4>
                                    </button>
                                </div>

                            </div>
                            <img src={obj.imageUrlRight} alt="imageUrlRight" className="picRight" />
                        </div>

                        <div  className="subHeader_section">

                            <div className="subHeader_text">
                                <h2>{obj.title_2}</h2>
                                <h3>{obj.subtitle_2}</h3>
                            </div>

                            <div className="subHeader_icons">
                                <img src={obj.icon_vk}          alt="vk"          className="header_icon"/>
                                <img src={obj.icon_instagram}   alt="instagram"   className="header_icon"/>
                                <img src={obj.icon_tik_tok}     alt="tik-tok"     className="header_icon"/>
                                <img src={obj.icon_twitter}     alt="twitter"     className="header_icon"/>
                                <img src={obj.icon_yandex_dzen} alt="yandex_dzen" className="header_icon"/>
                                <img src={obj.icon_facebook}    alt="facebook"    className="header_icon"/>
                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    )
}



export default Header;