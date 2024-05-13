import { useState } from "react";
import { images } from "../../website-data/gallery/1940s";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.scss';

export default function Decade1940s () {

    const [selectedImageIndex1940s, setSelectedImageIndex1940s] = useState(null);
    const [showModal1940s, setShowModal1940s] = useState(false);

    const openModal1940s = (index) => {
        setSelectedImageIndex1940s(index);
        setShowModal1940s(true);
    }

    const closeModal1940s = (e) => {
        e.stopPropagation();
        setShowModal1940s(false);
    }

    const nextImage40s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1940s(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage40s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1940s(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }  

    return (
        <div>
            <h2>The 1940s</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images.map((img40s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal1940s(index)}
                            >
                                <img 
                                    src={img40s.src}
                                    alt={`${img40s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal1940s && (
                    <div 
                        className={`modal ${showModal1940s ? 'show' : ''}`}
                        onClick={closeModal1940s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal1940s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage40s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images[selectedImageIndex1940s].src}
                                alt={`${images[selectedImageIndex1940s].caption}`}
                                className="modal-image"
                            />
                            <div className="caption">
                                {images[selectedImageIndex1940s].caption}
                            </div>
                        </div>

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage40s}
                        >
                            <ArrowRightIcon />
                        </button>

                        
                    </div>
                )}
        </div>
    )
}