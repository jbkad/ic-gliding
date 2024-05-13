import { useState } from "react";
import { images } from "../../website-data/gallery/1950s";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.scss';

export default function Decade1950s () {

    const [selectedImageIndex1950s, setSelectedImageIndex1950s] = useState(null);
    const [showModal1950s, setShowModal1950s] = useState(false);

    const openModal1950s = (index) => {
        setSelectedImageIndex1950s(index);
        setShowModal1950s(true);
    }

    const closeModal1950s = (e) => {
        e.stopPropagation();
        setShowModal1950s(false);
    }

    const nextImage50s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1950s(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage50s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1950s(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }  

    return (
        <div>
            <h2>The 1950s</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images.map((img50s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal1950s(index)}
                            >
                                <img 
                                    src={img50s.src}
                                    alt={`${img50s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal1950s && (
                    <div 
                        className={`modal ${showModal1950s ? 'show' : ''}`}
                        onClick={closeModal1950s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal1950s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage50s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images[selectedImageIndex1950s].src}
                                alt={`${images[selectedImageIndex1950s].caption}`}
                                className="modal-image"
                            />
                            
                            <div className="caption">
                                {images[selectedImageIndex1950s].caption}
                            </div>
                        </div>


                        <button 
                            className="navigation-btn" 
                            onClick={nextImage50s}
                        >
                            <ArrowRightIcon />
                        </button>

                       
                    </div>
                )}
        </div>
    )
}