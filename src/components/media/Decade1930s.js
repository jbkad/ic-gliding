import { useState } from "react";
import { images } from "../../website-data/gallery/1930s";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.scss';

export default function Decade1930s () {

    const [selectedImageIndex1930s, setSelectedImageIndex1930s] = useState(null);
    const [showModal1930s, setShowModal1930s] = useState(false);

    const openModal1930s = (index) => {
        setSelectedImageIndex1930s(index);
        setShowModal1930s(true);
    }

    const closeModal1930s = (e) => {
        e.stopPropagation();
        setShowModal1930s(false);
    }

    const nextImage30s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1930s(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage30s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1930s(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }  

    return (
        <div>
            <h2>The 1930s</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images.map((img30s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal1930s(index)}
                            >
                                <img 
                                    src={img30s.src}
                                    alt={`${img30s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal1930s && (
                    <div 
                        className={`modal ${showModal1930s ? 'show' : ''}`}
                        onClick={closeModal1930s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal1930s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage30s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images[selectedImageIndex1930s].src}
                                alt={`${images[selectedImageIndex1930s].caption}`}
                                className="modal-image"
                            />

                            <div className="caption">
                                {images[selectedImageIndex1930s].caption}
                            </div>
                        </div>

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage30s}
                        >
                            <ArrowRightIcon />
                        </button>

                        
                    </div>
                )}
        </div>
    )
}