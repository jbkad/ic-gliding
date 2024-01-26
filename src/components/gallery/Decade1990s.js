import { useState } from "react";
import { images } from "../../website-data/gallery/1990s";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.css';

export default function Decade1990s () {

    const [selectedImageIndex1990s, setSelectedImageIndex1990s] = useState(null);
    const [showModal1990s, setShowModal1990s] = useState(false);

    const openModal1990s = (index) => {
        setSelectedImageIndex1990s(index);
        setShowModal1990s(true);
    }

    const closeModal1990s = (e) => {
        e.stopPropagation();
        setShowModal1990s(false);
    }

    const nextImage90s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1990s(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage90s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1990s(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } 
    
    return (
        <div>
            <h2>1990 - 1999</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images.map((img90s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal1990s(index)}
                            >
                                <img 
                                    src={img90s.src}
                                    alt={`${img90s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal1990s && (
                    <div 
                        className={`modal ${showModal1990s ? 'show' : ''}`}
                        onClick={closeModal1990s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal1990s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage90s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images[selectedImageIndex1990s].src}
                                alt={`${images[selectedImageIndex1990s].caption}`}
                                className="modal-image"
                            />
                            <div className="caption">
                                {images[selectedImageIndex1990s].caption}
                            </div>
                        </div>
                        
                        <button 
                            className="navigation-btn" 
                            onClick={nextImage90s}
                        >
                            <ArrowRightIcon />
                        </button>

                        
                    </div>
                )}
        </div>
    )
}