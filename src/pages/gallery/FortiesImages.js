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
        setSelectedImageIndex1940s(prevIndex => (prevIndex === 0 ? images1940s.length - 1 : prevIndex - 1));
    }  

    const images1940s = [
        {
            src: require("../../assets/gallery/40s/1.jpg"),
            caption: "July 1946 ICGC expedition to Firle Beacon, South Downs. Ground looper's paradise â€“ the valley auto-tow run." 
        },
        {
            src: require("../../assets/gallery/40s/2.jpg"),
            caption: " 'un bruit formidable', ICGC's Kirby Cadet BGA437 comes off worse with a Sussex gatepost at the July 1946 ICGC expedition to Firle Beacon, South Downs."
        },
        {
            src: require("../../assets/gallery/40s/3.jpg"),
            caption: "The hilltop site, Derek Brown at the July 1946 ICGC expedition to Firle Beacon, South Downs."
        },
        {
            src: require("../../assets/gallery/40s/4.jpg"),
            caption: "The hilltop site, Norman Hatton at the July 1946 ICGC expedition to Firle Beacon, South Downs."
        },
        {
            src: require("../../assets/gallery/40s/5.jpg"),
            caption: "Ground looper's paradise â€“ the valley auto-tow run, July 1946 ICGC expedition to Firle Beacon, South Downs."
        },
        {
            src: require("../../assets/gallery/40s/6.jpg"),
            caption: "July 1946 ICGC expedition to Firle Beacon, South Downs. Frank Irving is at the extreme left."
        },
        {
            src: require("../../assets/gallery/40s/7.jpg"),
            caption: "First day of July 1946 ICGC expedition to Firle Beacon, South Downs."
        },
        {
            src: require("../../assets/gallery/40s/8.jpg"),
            caption: "Camp pitched at the July 1946 ICGC expedition to Firle Beacon, South Downs."
        },
        {
            src: require("../../assets/gallery/40s/9.jpg"),
            caption: "Ted Swiatecki Hatton at the July 1946 ICGC expedition to Firle Beacon, South Downs."
        },
        {
            src: require("../../assets/gallery/40s/10.jpg"),
            caption: "Redhill 1947, Slingsby Tutor on a winch launch, pilot Bill Tonkyn."
        },
        {
            src: require("../../assets/gallery/40s/11.jpg"),
            caption: "Redhill 1947, Slingsby Tutor ready to winch, pilot Bill Tonkyn."
        },
        {
            src: require("../../assets/gallery/40s/12.jpg"),
            caption: "Camp pitched at the July 1946 ICGC expedition to Firle Beacon, South Downs."
        },
    ]

    return (
        <div>
            <h2>1940 - 1949</h2>
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