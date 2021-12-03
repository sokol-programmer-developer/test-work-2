import React from "react";
import "../css/article.css";
import {Link} from "react-router-dom";


import icon_phone from "../assets/phone.svg";
import icon_letter from "../assets/letter.svg";
import btnImg_Chat from "../assets/talk.svg";
import icon_share from "../assets/share.svg";


const Article = () => {
  return (
      <div className="article_section">

          <div className="article_container">
              <h2 className="article_title"> Где работает доставка? </h2>
              <Link exact to="/Article"><img src={icon_share}  alt="share"  className="article_icon"/></Link>
          </div>

          <div className="article_text">
              <p className="article_paragraph">
                  Это карта лояльности с вашим номером покупателя. Она бывает пластиковой или виртуальной. При входе в приложение или на сайт достаточно указать ваш номер телефона. Если к нему привязана карта «Давайте дружить!», она будет выбрана автоматически. Если нет, будет создана новая. Номер карты виден под вашим именем на главном экране приложения и в личном кабинете на сайте.
              </p>
              <p className="article_paragraph">
                  Это карта лояльности с вашим номером покупателя. Она бывает пластиковой или виртуальной. При входе в приложение или на сайт достаточно указать ваш номер телефона. Если к нему привязана карта «Давайте дружить!», она будет выбрана автоматически. Если нет, будет создана новая. Номер карты виден под вашим именем на главном экране приложения и в личном кабинете на сайте.
              </p>
              <p className="article_paragraph">
                  Это карта лояльности с вашим номером покупателя. Она бывает пластиковой или виртуальной. При входе в приложение или на сайт достаточно указать ваш номер телефона. Если к нему привязана карта «Давайте дружить!», она будет выбрана автоматически. Если нет, будет создана новая. Номер карты виден под вашим именем на главном экране приложения и в личном кабинете на сайте.
              </p>
              <p className="article_paragraph">
                  Это карта лояльности с вашим номером покупателя. Она бывает пластиковой или виртуальной. При входе в приложение или на сайт достаточно указать ваш номер телефона. Если к нему привязана карта «Давайте дружить!», она будет выбрана автоматически. Если нет, будет создана новая. Номер карты виден под вашим именем на главном экране приложения и в личном кабинете на сайте.
              </p>
          </div>

          <div className="article_wrapper">
              <h3 className="article_h3"> Проблема не решилась? Свяжитесь с нами, мы поможем. </h3>

              <div className="article_group_button">
                  <Link exact to="/">
                  <button className="article_btn">
                      <img src={btnImg_Chat} alt="Chat" className="article_pic"/>
                      <h2 className="article_btn_h2">Онлайн-чат</h2>
                  </button>
                  </Link>
                  <Link exact to="/"><img src={icon_phone}  alt="phone"  className="article_icon"/></Link>
                  <Link exact to="/"><img src={icon_letter} alt="letter" className="article_icon"/></Link>
              </div>
          </div>

      </div>
  );
}

export default Article;
