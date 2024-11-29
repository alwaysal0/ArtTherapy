import React from 'react'
import i18n from './i18next'
import { useTranslation } from 'react-i18next'
import { switchLanguage } from './i18Utils'
import { useState, useEffect, useRef } from 'react'
import './App.css'
import Start from './components/Start'
import DescriptionOfArt from './components/DescriptionOfArt'

function App() {
  const { t, i18n } = useTranslation();

  const ref = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > 100 && !hasScrolled) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setHasScrolled(true);
      } else if (scrollPos < 100 && hasScrolled) {
        setHasScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [hasScrolled]);

  return (
    <>
      <div id="start-box"><Start /></div>
      <div id="proslojka"></div>
      <div id="description-box" ref={ref}><DescriptionOfArt/></div>
      <div id="section2"></div>
        <p className="read-the-docs">
        {t('welcome')}
      </p>
        <button onClick={() => switchLanguage(i18n, 'ru')}>change</button>
        <button onClick={() => switchLanguage(i18n, 'ro')}>change</button>
    </>
  )
}

export default App
