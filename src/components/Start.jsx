import React from "react";
import '../styles/Start.css';

import i18n from "../i18next";
import { useTranslation } from "react-i18next";
//IMG
import sun from '../assets/sun.svg'
import girl from '../assets/girl.png';
import flowerOrange from '../assets/Flower-orange.png';
import flowerRoz from '../assets/Flower-roz.png';
import flowerViolet from '../assets/Flower-violet.png';

function Start() {
    const { t, i18n } = useTranslation();
    return (
        <>
        <div id="main-start-box">
            <div id="art-therapy"><p id="art-therapy-head">Art Therapy</p></div>
            <div className="draw" id="grass"></div>
            <img className="draw" id="sun" src={sun} alt="sun" />
            <img className="flowers" id="flower1" src={flowerOrange} alt="sun" />
            <img className="flowers" id="flower2" src={flowerRoz} alt="sun" />
            <img className="flowers" id="flower3" src={flowerViolet} alt="sun" />
            <img className="flowers" id="flower4" src={flowerOrange} alt="sun" />
            <img className="flowers" id="flower5" src={flowerRoz} alt="sun" />
            <img className="flowers" id="flower6" src={flowerViolet} alt="sun" />
            <img className="flowers" id="flower7" src={flowerOrange} alt="sun" />
            <img className="flowers" id="flower8" src={flowerRoz} alt="sun" />
            <img className="flowers" id="flower9" src={flowerViolet} alt="sun" />
            <img className="flowers" id="flower10" src={flowerOrange} alt="sun" />
            <img className="draw" id="girl" src={girl} alt="sun" />
        </div>
        </>
    )
}

export default Start
