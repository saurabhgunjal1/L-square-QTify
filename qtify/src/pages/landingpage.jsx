import React from "react";
import Navbar from "../components/Navbar/navbar";
import Herosection from "../components/Hero/herosection";
import Cardsection from "../components/Card/card";
import Carousel from "../components/Carousel/Carousel";
import { useOutletContext } from "react-router-dom";

import { fetchfilters } from "../api/api";
import Section from "../components/Section/Section";
import { colors } from "@mui/material";
import Faq from "../components/Faq/Faq";
import Musicplayer from "../components/musicplayer/musicplayer";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
const Landingpage = () => {
    const { data } = useOutletContext();

    const { newAlbums, topAlbums, songs } = data;
    console.log(songs);
    return (
        <>
        
            <Navbar data={topAlbums}/>
            <Herosection />
            <div>
            
                <Section title="Top Albums" data={topAlbums} type="album" showToggle={true} />
                <Section title="New Albums" data={newAlbums} type="album" showToggle={true}/>
                {/* <hr color="var(--css-primary)"/> */}
               
                <Section
                    title="Songs"
                    data={songs}
                    filterSource={fetchfilters}
                    type="song"
                />
                {/* <hr color="var(--css-primary)"/> */}
                <Faq/>
                <Musicplayer data={songs}/>
            </div>
        </>
    );
};

export default Landingpage;
