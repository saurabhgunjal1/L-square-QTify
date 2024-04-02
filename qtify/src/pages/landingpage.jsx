import React from "react";
import Navbar from "../components/Navbar/navbar";
import Herosection from "../components/Hero/herosection";
import Cardsection from "../components/Card/card";
import Carousel from "../components/Carousel/Carousel";
import { useOutletContext } from "react-router-dom";

import { fetchfilters } from "../api/api";
import Section from "../components/Section/Section";
import { colors } from "@mui/material";
const Landingpage = () => {
    const { data } = useOutletContext();

    const { newAlbums, topAlbums, songs } = data;
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
                
            </div>
        </>
    );
};

export default Landingpage;
