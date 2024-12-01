import React from "react";
import { useEffect, useState, useRef } from "react";
import '../styles/Header.css';

import i18n from "../i18next";
import { useTranslation } from 'react-i18next'

function Header() {
    const { t, i18n } = useTranslation();
    
    const refHeader = useRef(null);

  useEffect(() => {
    const scroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 100) {
        refHeader.current.style.height = '7vh';
      } else if (scrollPos <= 100) {
        refHeader.current.style.height = '9vh';
      } 
    };

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
    }, [])

    return (
        <>
        <div id="header" ref={refHeader}>
            <p className="buttons" id="about-us">{t('about-us')}</p>
            <p id="art-therapy">{t('art-therapy')}</p>
            <p className="buttons" id="contact">{t('contact')}</p>
        </div>
        </>
    )
}

export default Header
