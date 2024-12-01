import React from 'react';
import '../styles/ImageCard.css'

function ImageCard(props) {
    const { img } = props;
    return (
        <>
            <div className="imageCard">
                <img src={img} alt="image" />
            </div>
        </>
    )
}

export default ImageCard
