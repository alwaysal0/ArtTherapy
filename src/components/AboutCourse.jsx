import React from "react";
import '../styles/AboutCourse.css';

import i18n from "../i18next";
import { useTranslation } from "react-i18next";

import ImageCard from "./ImageCard";
import { CARDS } from "./ArrayOfImages";

function AboutCourse() {
    const { t, i18n } = useTranslation();

    return(
        <>
        <div id="about-course">
            <div id="about-course-left">
                <p id="us-about-course">{t('about-us')}</p>
                <p id="text-about-course">{t('about-course')}</p>
                {CARDS.map((card) => {
                    <ImageCard img={card.img} />
                })}
            </div>
            <div id="about-course-right"></div>
        </div>
        </>
    )
}

export default AboutCourse
