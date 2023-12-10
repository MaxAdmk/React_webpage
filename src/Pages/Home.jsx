import React, {useState} from "react";
import Hero from "../Components/Hero/Hero";
import After_Hero from "../Components/After_Hero/After_Hero";
import HomeViewMoreBtn from "../Components/HomeViewMoreBtn/HomeViewMoreBtn";
import { Sales } from "../Components/Sales/Sales";

const Home = () => {
    const [showNewComponent, setShowNewComponent] = useState(false);
    const [showViewMoreBtn, setShowViewMoreBtn] = useState(true);

    const handleViewMoreClick = () => {
        setShowNewComponent(true);
        setShowViewMoreBtn(false);
    }

    return (
        <div>
            <Hero/>
            <After_Hero />
            {showViewMoreBtn && <HomeViewMoreBtn onClick={handleViewMoreClick}/>}
            {showNewComponent && <Sales />}
        </div>
    )
}

export default Home;