import React from "react";
import '../styles/Start.css';
import { useTranslation } from "react-i18next";
import { switchLanguage } from '../i18Utils';
import i18n from "../i18next";
import sun from '../assets/sun.svg'

function Start() {
    const { t, i18n } = useTranslation();
    return (
        <>
        <div id="main-start-box">
            <div id="art-therapy"><p id="art-therapy-head">Art Therapy</p></div>
            <div className="draw" id="grass"></div>
            <img className="draw" id="sun" src={sun} alt="sun" />
        </div>
        </>
    )
}

export default Start
