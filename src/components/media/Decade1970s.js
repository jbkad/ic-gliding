import React, { useState } from "react";
import { images } from "../../website-data/gallery/1970s";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.scss';

export default function Decade1970s () {

    const [selectedImageIndex1970s, setSelectedImageIndex1970s] = useState(null);
    const [showModal1970s, setShowModal1970s] = useState(false);

    const openModal1970s = (index) => {
        setSelectedImageIndex1970s(index);
        setShowModal1970s(true);
    }

    const closeModal1970s = (e) => {
        e.stopPropagation();
        setShowModal1970s(false);
    }

    const nextImage70s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1970s(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage70s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1970s(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }   

    return (
        <div>
            <h2>The 1970s</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images.map((img70s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal1970s(index)}
                            >
                                <img 
                                    src={img70s.src}
                                    alt={`${img70s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal1970s && (
                    <div
                        className={`modal ${showModal1970s ? 'show' : ''}`}
                        onClick={closeModal1970s}
                    >
                        <span
                            className="close"
                            onClick={closeModal1970s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage70s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images[selectedImageIndex1970s].src}
                                alt={`${images[selectedImageIndex1970s].caption}`}
                                className="modal-image"
                            />
                            <div className="caption">
                                {images[selectedImageIndex1970s].caption}
                            </div>
                        </div>

                        <button
                            className="navigation-btn" 
                            onClick={nextImage70s}
                        >
                            <ArrowRightIcon />
                        </button>

                       

                    </div>
                )}
        </div>
    )
}