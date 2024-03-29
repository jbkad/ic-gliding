import React, { useState } from "react";
import { images } from "../../website-data/gallery/2010s";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.scss';

export default function Decade2010s () {

    const [selectedImageIndex2010s, setSelectedImageIndex2010s] = useState(null);
    const [showModal2010s, setShowModal2010s] = useState(false);

    const openModal2010s = (index) => {
        setSelectedImageIndex2010s(index);
        setShowModal2010s(true);
    }

    const closeModal2010s = (e) => {
        e.stopPropagation();
        setShowModal2010s(false);
    }

    const nextImage10s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex2010s(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage10s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex2010s(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }  

    return (
        <div>
            <h2>2010 - 2019</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images.map((img10s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal2010s(index)}
                            >
                                <img 
                                    src={img10s.src}
                                    alt={`${img10s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal2010s && (
                    <div 
                        className={`modal ${showModal2010s ? 'show' : ''}`}
                        onClick={closeModal2010s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal2010s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage10s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images[selectedImageIndex2010s].src}
                                alt={`${images[selectedImageIndex2010s].caption}`}
                                className="modal-image"
                            />

                            <div className="caption">
                                {images[selectedImageIndex2010s].caption}
                            </div>
                        </div>
                        
                        <button 
                            className="navigation-btn" 
                            onClick={nextImage10s}
                        >
                            <ArrowRightIcon />
                        </button>
                        
                    </div>
                )}
        </div>
    )
}