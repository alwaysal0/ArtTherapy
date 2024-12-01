import React from "react";
import { useState } from "react";
import useObserver from "./ObserverFunction";

import i18n from "../i18next";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import '../styles/DescriptionOfArt.css';
//IMG
import rocket from '../assets/rocket.png';
import paints from '../assets/paints.png';
import pencil from '../assets/pencil.png';


function DescriptionOfArt() {
    const { t, i18n } = useTranslation();
    const [isInView1, setInView1] = useState(false);
    const [isInView2, setInView2] = useState(false);
    const [isInView3, setInView3] = useState(false);
    const [isInView4, setInView4] = useState(false);
    const setObservedElementRef1 = useObserver(setInView1);
    const setObservedElementRef2 = useObserver(setInView2);
    const setObservedElementRef3 = useObserver(setInView3);
    const setObservedElementRef4 = useObserver(setInView4);

    return (
        <>
        <div id="description-of-art">
            <div id="main-text-description" ref={setObservedElementRef1} className={isInView1 ? 'in-view' : ''} dangerouslySetInnerHTML={{ __html: t('main-text') }}/>
            <img loading="lazy" id="rocket" ref={setObservedElementRef2} className={isInView2 ? 'in-view' : ''} src={rocket} alt="rocket" />
            <img loading="lazy" id="paints" ref={setObservedElementRef3} className={isInView3 ? 'in-view' : ''} src={paints} alt="paints" />
            <img loading="lazy" id="pencil" ref={setObservedElementRef4} className={isInView4 ? 'in-view' : ''} src={pencil} alt="pencil" />
        </div>
        </>
    )
}

export default DescriptionOfArt
