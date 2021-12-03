import React from "react";
import "./Style.css"
import Header from "./Header";
import Carousel from "./Carousel";
import CarouselContent from "./CarouselContent";


const Home = ({ items }) => {
    return (
        <div className="home_section">
            <Header items={items}/>
            <Carousel/>
            <CarouselContent/>


        </div>
    )
}

export default Home;