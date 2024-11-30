import React from "react";
import '../styles/Start.css';

import i18n from "../i18next";
import { useTranslation } from "react-i18next";
//IMG
import sun from '../assets/sun.svg'
import flower from '../assets/blue_flower.png';
import girl from '../assets/girl.png';

function Start() {
    const { t, i18n } = useTranslation();
    return (
        <>
        <div id="main-start-box">
            <div id="art-therapy"><p id="art-therapy-head">Art Therapy</p></div>
            <div className="draw" id="grass"></div>
            <img className="draw" id="sun" src={sun} alt="sun" />
            <img className="draw" id="flower" src={flower} alt="sun" />
            <img className="draw" id="girl" src={girl} alt="sun" />
        </div>
        </>
    )
}

export default Start
