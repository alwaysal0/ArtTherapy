import React from "react";
import '../styles/DescriptionOfArt.css';
import { useTranslation } from "react-i18next";
import { switchLanguage } from '../i18Utils';
import i18n from "../i18next";

function DescriptionOfArt() {
    const { t, i18n } = useTranslation();
    return (
        <>
        <div id="description-of-art">
            <div id="main-text-description">{t('main-text')}</div>
        </div>
        </>
    )
}

export default DescriptionOfArt
