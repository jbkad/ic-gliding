import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import '../../styles/Gallery.css';

export default function FiftiesImages () {

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
        setSelectedImageIndex1950s(prevIndex => (prevIndex === images1950s.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage50s = (e) => {
        e.stopPropagation();
    }

    const images1950s = [
        {
            src: require("../../assets/gallery/50s/1.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/50s/2.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/50s/3.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/50s/4.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/50s/5.jpg"),
            caption: "[caption]"
        },
        // {
        //     src: require("../../assets/gallery/50s/6.jpg"),
        //     caption: "[caption]"
        // },
        {
            src: require("../../assets/gallery/50s/7.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/50s/8.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/50s/9.jpg"),
            caption: "[caption]"
        },
    ]

    return (
        <div>
            <h2>1950 - 1959</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images1950s.map((img50s, index) => (
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
                            &times;
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage50s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <img 
                            src={images1950s[selectedImageIndex1950s].src}
                            alt={`${images1950s[selectedImageIndex1950s].caption}`}
                            className="modal-image"
                        />

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage50s}
                        >
                            <ArrowRightIcon />
                        </button>

                        <div className="caption">
                            {images1950s[selectedImageIndex1950s].caption}
                        </div>
                    </div>
                )}
        </div>
    )
}