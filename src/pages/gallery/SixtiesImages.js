import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import '../../styles/Gallery.css';

export default function SixtiesImages () {

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
        setSelectedImageIndex1960s(prevIndex => (prevIndex === images1960s.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage60s = (e) => {
        e.stopPropagation();
    }

    const images1960s = [
        {
            src: require("../../assets/gallery/60s/1.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/2.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/3.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/4.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/5.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/6.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/7.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/8.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/9.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/10.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/11.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/12.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/13.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/14.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/15.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/16.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/17.jpg"),
            caption: "[caption]"
        },
        {
            src: require("../../assets/gallery/60s/18.jpg"),
            caption: "[caption]"
        },
    ]

    return (
        <div>
            <h2>1960 - 1999</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images1960s.map((img60s, index) => (
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
                            &times;
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage60s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <img 
                            src={images1960s[selectedImageIndex1960s].src}
                            alt={`${images1960s[selectedImageIndex1960s].caption}`}
                            className="modal-image"
                        />

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage60s}
                        >
                            <ArrowRightIcon />
                        </button>

                        <div className="caption">
                            {images1960s[selectedImageIndex1960s].caption}
                        </div>
                    </div>
                )}
        </div>
    )
}