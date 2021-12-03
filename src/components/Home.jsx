import React from "react";
import "../css/Style.css";
import "../css/carousel.css";
import "../css/accordion.css";
import Header from "./Header";
import Accordion from "./Accordion";
import CarouselContent from "./CarouselContent";


const Home = () => {
    return (
        <div className="home">
            <Header />
            <CarouselContent/>
            <Accordion/>
        </div>
    )
}

export default Home;
