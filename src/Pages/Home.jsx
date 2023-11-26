import React from "react";
import Hero from "../Components/Hero/Hero";
import After_Hero from "../Components/After_Hero/After_Hero";
import HomeViewMoreBtn from "../Components/HomeViewMoreBtn/HomeViewMoreBtn";

const Home = () => {
    return (
        <div>
            <Hero/>
            <After_Hero />
            <HomeViewMoreBtn/>
        </div>
    )
}

export default Home;