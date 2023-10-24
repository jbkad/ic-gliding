import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.css';

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
        setSelectedImageIndex1950s(prevIndex => (prevIndex === images1950s.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage50s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1950s(prevIndex => (prevIndex === 0 ? images1950s.length - 1 : prevIndex - 1));
    }  

    const images1950s = [
        {
            src: require("../../assets/gallery/50s/1.jpg"),
            caption: "Frank Irving on left, others unknown. Picture believed to be early 1950's."
        },
        {
            src: require("../../assets/gallery/50s/2.jpg"),
            caption: "ICGC member Peter Murden at Lasham in the ICGC T.21, P2 not known. Picture believed to be early 1950's."
        },
        {
            src: require("../../assets/gallery/50s/3.jpg"),
            caption: "ICGC member Peter Murden at Lasham in the ICGC T.21, P2 not known. Picture believed to be early 1950's."
        },
        {
            src: require("../../assets/gallery/50s/4.jpg"),
            caption: "1958, christening 66 syndicate's new trailer for the Skylark 3B (owned by Irving, Tonkyn, Davey & Bridgewater)."
        },
        {
            src: require("../../assets/gallery/50s/5.jpg"),
            caption: "1958, Frank Irving attending to a spot of polishing on his Skylark 3B 66."
        },
        {
            src: require("../../assets/gallery/50s/6.jpg"),
            caption: "Rigging Skylark 3B 66 at Lasham, 1958."
        },
        {
            src: require("../../assets/gallery/50s/7.jpg"),
            caption: "Rigging Skylark 3B 66 at Lasham, 1958."
        },
        {
            src: require("../../assets/gallery/50s/8.jpg"),
            caption: "1958, Tonkyn, Irving, Davey and Bridgewater with Skylark 3B 66 at Lasham."
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
                                src={images1950s[selectedImageIndex1950s].src}
                                alt={`${images1950s[selectedImageIndex1950s].caption}`}
                                className="modal-image"
                            />
                            
                            <div className="caption">
                                {images1950s[selectedImageIndex1950s].caption}
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