import React from "react";
import '../styles/ImageBoxes.css';

import i18n from "../i18next";
import { useTranslation } from "react-i18next";

function ImageBoxes() {
    const { t, i18n } = useTranslation();

    return(
        <>
        <div id="imageBoxes-box">

        </div>
        </>
    )
}

export default ImageBoxes