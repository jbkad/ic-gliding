import React, { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import '../../styles/Gallery.css';


export default function TwoThousandsImages () {

    const [selectedImageIndex2010s, setSelectedImageIndex2010s] = useState(null);
    const [showModal2010s, setShowModal2010s] = useState(false);

    const openModal2010s = (index) => {
        setSelectedImageIndex2010s(index);
        setShowModal2010s(true);
    }

    const closeModal2010s = (e) => {
        e.stopPropagation();
        setShowModal2010s(false);
    }

    const nextImage10s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex2010s(prevIndex => (prevIndex === images2010s.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage10s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex2010s(prevIndex => (prevIndex === 0 ? images2010s.length - 1 : prevIndex - 1));
    }  

    const images2010s = [
        {
            src: require("../../assets/gallery/10s/1.jpg"),
            caption: "icGC Easer Tour 2011"
        },
        {
            src: require("../../assets/gallery/10s/2.jpg"),
            caption: "icGC Winter Tour 2019/20 at Portmoak, Scotland"
        },
        {
            src: require("../../assets/gallery/10s/3.jpg"),
            caption: "icGC Winter Tour 2018/19 at the Midland Gliding Club on top of the Long Mynd"
        },
        {
            src: require("../../assets/gallery/10s/4.jpg"),
            caption: "icGC Winter Tour 2018/19 at the Midland Gliding Club on top of the Long Mynd"
        },
        {
            src: require("../../assets/gallery/10s/5.jpg"),
            caption: "Successful day of flying at Lasham, 2018"
        },
        {
            src: require("../../assets/gallery/10s/6.jpg"),
            caption: "icGC at Freshers Fair 2019"
        },
        {
            src: require("../../assets/gallery/10s/7.jpg"),
            caption: "icGC victoriously holding the University Ladder trophy at the British Gliding Association conference, Nottingham 2018"
        },
        {
            src: require("../../assets/gallery/10s/8.jpg"),
            caption: "All smiles from Imperial students, Lasham 2017"
        },
        {
            src: require("../../assets/gallery/10s/9.jpg"),
            caption: "Training in the gliding simulator, Lasham 2017"
        },
        {
            src: require("../../assets/gallery/10s/10.jpg"),
            caption: "icGC Summer Tour, Issoudun 2019"
        },
        {
            src: require("../../assets/gallery/10s/11.jpg"),
            caption: "icGC Summer Tour, Issoudun 2019"
        },
        {
            src: require("../../assets/gallery/10s/12.jpg"),
            caption: "icGC Summer Tour, Issoudun 2019"
        },
    ]

    return (
        <div>
            <h2>2010 - Present</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images2010s.map((img10s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal2010s(index)}
                            >
                                <img 
                                    src={img10s.src}
                                    alt={`${img10s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal2010s && (
                    <div 
                        className={`modal ${showModal2010s ? 'show' : ''}`}
                        onClick={closeModal2010s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal2010s}
                        >
                            &times;
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage10s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <img 
                            src={images2010s[selectedImageIndex2010s].src}
                            alt={`${images2010s[selectedImageIndex2010s].caption}`}
                            className="modal-image"
                        />

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage10s}
                        >
                            <ArrowRightIcon />
                        </button>

                        <div className="caption">
                            {images2010s[selectedImageIndex2010s].caption}
                        </div>
                    </div>
                )}
        </div>
    )
}