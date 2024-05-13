import React, { useState } from "react";
import { images } from "../../website-data/gallery/2020s";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.scss';

export default function Decade2020s () {

    const [selectedImageIndex2020s, setSelectedImageIndex2020s] = useState(null);
    const [showModal2020s, setShowModal2020s] = useState(false);

    const openModal2020s = (index) => {
        setSelectedImageIndex2020s(index);
        setShowModal2020s(true);
    }

    const closeModal2020s = (e) => {
        e.stopPropagation();
        setShowModal2020s(false);
    }

    const nextImage20s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex2020s(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage20s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex2020s(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }  

    return (
        <div>
            <h2>The 2020s</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images.map((img20s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal2020s(index)}
                            >
                                <img 
                                    src={img20s.src}
                                    alt={`${img20s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal2020s && (
                    <div 
                        className={`modal ${showModal2020s ? 'show' : ''}`}
                        onClick={closeModal2020s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal2020s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage20s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images[selectedImageIndex2020s].src}
                                alt={`${images[selectedImageIndex2020s].caption}`}
                                className="modal-image"
                            />

                            <div className="caption">
                                {images[selectedImageIndex2020s].caption}
                            </div>
                        </div>
                        
                        <button 
                            className="navigation-btn" 
                            onClick={nextImage20s}
                        >
                            <ArrowRightIcon />
                        </button>
                        
                    </div>
                )}
        </div>
    )
}