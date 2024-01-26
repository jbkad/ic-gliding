import { useState } from "react";
import { images } from "../../website-data/gallery/1960s";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.css';

export default function Decade1960s () {

    const [selectedImageIndex1960s, setSelectedImageIndex1960s] = useState(null);
    const [showModal1960s, setShowModal1960s] = useState(false);

    const openModal1960s = (index) => {
        setSelectedImageIndex1960s(index);
        setShowModal1960s(true);
    }

    const closeModal1960s = (e) => {
        e.stopPropagation();
        setShowModal1960s(false);
    }

    const nextImage60s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1960s(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage60s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1960s(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }  

    return (
        <div>
            <h2>1960 - 1969</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images.map((img60s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal1960s(index)}
                            >
                                <img 
                                    src={img60s.src}
                                    alt={`${img60s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal1960s && (
                    <div 
                        className={`modal ${showModal1960s ? 'show' : ''}`}
                        onClick={closeModal1960s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal1960s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage60s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images[selectedImageIndex1960s].src}
                                alt={`${images[selectedImageIndex1960s].caption}`}
                                className="modal-image"
                            />

                            <div className="caption">
                                {images[selectedImageIndex1960s].caption}
                            </div>
                        </div>

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage60s}
                        >
                            <ArrowRightIcon />
                        </button>

                        
                    </div>
                )}
        </div>
    )
}