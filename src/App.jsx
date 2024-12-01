import React from 'react'
import { useState, useEffect, useRef } from 'react'

import i18n from './i18next'
import { useTranslation } from 'react-i18next'
import { switchLanguage } from './i18Utils'

import './App.css'
import Header from './components/Header'
import Start from './components/Start'
import DescriptionOfArt from './components/DescriptionOfArt'
// import ImageBoxes from './components/ImageBoxes'
import AboutCourse from './components/AboutCourse'

function App() {

  const { t, i18n } = useTranslation();
  
  const [refElement, nextElement, testElement] = [useRef(null), useRef(null), useRef(null)];
  const [scrolledDescription, isDescription] = useState(false);
  const [scrolledImages, isImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > 200 && !scrolledDescription) {
        refElement.current.scrollIntoView({ behavior: 'smooth' });
        isDescription(true);
      } else if (scrollPos < 100 && scrolledDescription) {
        isDescription(false);
      }
      const positionDescription = refElement.current?.getBoundingClientRect().top + window.scrollY;
      if (scrollPos > (positionDescription + 100) && !scrolledImages) {
        nextElement.current.scrollIntoView({ behavior: 'smooth' });
        isImages(true);
      } else if (scrollPos < positionDescription && scrolledImages) {
        isImages(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrolledDescription, scrolledImages]);

  return (
    <>
      <div id='header-box'>
        <Header />
        <p id='name'>{t('art-therapy')}</p>
      </div>
      <div id="start-box"><Start /></div>
      <div id="proslojka"></div>
      <div id="description-box" ref={refElement}>
        <DescriptionOfArt/>
        <div id="proslojka1">
      </div>
      </div>
      {/* <div id="imageBoxes-box" ref={nextElement}><ImageBoxes /></div> */}
      <div id="about-course-box" ref={nextElement}><AboutCourse /></div>
        <p className="read-the-docs">{t('welcome')}</p>
        <button onClick={() => switchLanguage(i18n, 'ru')}>change</button>
        <button onClick={() => switchLanguage(i18n, 'ro')}>change</button>
    </>
  )
}

export default App
