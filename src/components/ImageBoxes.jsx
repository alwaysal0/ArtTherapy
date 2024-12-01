import React from "react";
import '../styles/ImageBoxes.css';
import { CARDS } from "./ArrayOfImages";
import ImageCard from "./ImageCard";

import i18n from "../i18next";
import { useTranslation } from "react-i18next";

function ImageBoxes() {
    const { t, i18n } = useTranslation();

    return(
        <>
        <div id="imageBoxes-box">
            {CARDS.map((card) => (
                <ImageCard 
                    img={card.img} 
                />
            ))}
        </div>
        </>
    )
}

export default ImageBoxes
