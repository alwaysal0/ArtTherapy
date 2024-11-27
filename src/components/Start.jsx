import React from "react";
import '../styles/Start.css';
import { useTranslation } from "react-i18next";
import { switchLanguage } from '../i18Utils';
import i18n from "../i18next";

function Start() {
    const { t, i18n } = useTranslation();
    return (
        <>
        <div id="main-start-box">
            <div id="art-therapy">
                <p id="art-therapy-head">Art Therapy</p>
                <p id="art-therapy-text">{t('main-text')}</p>
            </div>
        </div>
        </>
    )
}

export default Start
