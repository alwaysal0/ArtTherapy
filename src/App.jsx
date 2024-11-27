import React from 'react'
import i18n from './i18next'
import { useTranslation } from 'react-i18next'
import { switchLanguage } from './i18Utils'
import { useState } from 'react'
import './App.css'
import Start from './Components/Start'

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Start />
      <p className="read-the-docs">
        {t('welcome')}
        <button onClick={() => switchLanguage(i18n, 'ru')}>change</button>
        <button onClick={() => switchLanguage(i18n, 'ro')}>change</button>
      </p>
    </>
  )
}

export default App
