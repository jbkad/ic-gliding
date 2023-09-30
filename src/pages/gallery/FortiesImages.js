import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import '../../styles/Gallery.css';

export default function FortiesImages () {

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
        setSelectedImageIndex1940s(prevIndex => (prevIndex === images1940s.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage40s = (e) => {
        e.stopPropagation();
    }

    const images1940s = [
        {
            src: require("../../assets/gallery/40s/1.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/2.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/3.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/4.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/5.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/6.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/7.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/8.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/9.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/10.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/11.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/40s/12.jpg"),
            caption: "[caption]"
        },
    ]

    return (
        <div>
            <h2>1940 - 1959</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images1940s.map((img40s, index) => (
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
                            &times;
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage40s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <img 
                            src={images1940s[selectedImageIndex1940s].src}
                            alt={`${images1940s[selectedImageIndex1940s].caption}`}
                            className="modal-image"
                        />

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage40s}
                        >
                            <ArrowRightIcon />
                        </button>

                        <div className="caption">
                            {images1940s[selectedImageIndex1940s].caption}
                        </div>
                    </div>
                )}
        </div>
    )
}