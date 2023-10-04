import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import '../../styles/Gallery.css';

export default function ThirtiesImages () {

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
        setSelectedImageIndex1930s(prevIndex => (prevIndex === images1930s.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage30s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1930s(prevIndex => (prevIndex === 0 ? images1930s.length - 1 : prevIndex - 1));
    }  

    const images1930s = [
        {
            src: require("../../assets/gallery/30s/1.jpg"),
            caption: "ICGC member Mr. C. H. Wigg's London Gliding Club membership card, 1938."
        },
        {
            src: require("../../assets/gallery/30s/2.jpg"),
            caption: "ICGC 1937 Long Mynd expedition. The glider being bungied off the hill is a Slingsby Falcon III."
        },
        {
            src: require("../../assets/gallery/30s/3.jpg"),
            caption: "I.C.1 'Incredible' at Gore Farm, Shaftesbury, September 1930. After much hard work designing and building the machine, it was damaged beyond repair before being flown by a gust of wind on September 19th 1930."
        },
        {
            src: require("../../assets/gallery/30s/4.jpg"),
            caption: "Dunstable April 1937, a flight from the hilltop. The large crowds show great public interest in gliding at the time."
        },
        {
            src: require("../../assets/gallery/30s/5.jpg"),
            caption: "Dunstable April 1937 - hopping from the shelf in a Dagling."
        },
        {
            src: require("../../assets/gallery/30s/6.jpg"),
            caption: "Dunstable April 1937 - hopping from the shelf in a Dagling."
        },
        {
            src: require("../../assets/gallery/30s/7.jpg"),
            caption: "ICGC Easter Camp at Dunstable, April 1937."
        },
        {
            src: require("../../assets/gallery/30s/8.jpg"),
            caption: "ICGC's caravan at the Easter Camp, Dunstable, April 1937."
        },
        {
            src: require("../../assets/gallery/30s/9.jpg"),
            caption: "ICGC Easter Camp at Dunstable, April 1937."
        },
        {
            src: require("../../assets/gallery/30s/10.jpg"),
            caption: "ICGC Easter Camp at Dunstable, April 1937."
        },
        {
            src: require("../../assets/gallery/30s/11.jpg"),
            caption: "ICGC 1937 Long Mynd expedition with glider Slingsby Falcon III."
        },
        {
            src: require("../../assets/gallery/30s/12.jpg"),
            caption: "ICGC 1937 Long Mynd expedition with glider Slingsby Falcon III."
        },
        {
            src: require("../../assets/gallery/30s/13.jpg"),
            caption: "ICGC 1937 Long Mynd expedition. A Slingsby Falcon III soaring the ridge."
        },
        {
            src: require("../../assets/gallery/30s/14.jpg"),
            caption: "ICGC 1937 Long Mynd expedition. Aerial view from a Slingsby Falcon III."
        },
        {
            src: require("../../assets/gallery/30s/15.jpg"),
            caption: "ICGC's brand new Kirby Kite at the Easter Camp, Dunstable, April 1937."
        },
        {
            src: require("../../assets/gallery/30s/16.jpg"),
            caption: "The ICGC Kirby Kite glider at the 1937 Long Mynd expedition."
        },
        {
            src: require("../../assets/gallery/30s/17.jpg"),
            caption: "ICGC 1937 Long Mynd expedition."
        },
        {
            src: require("../../assets/gallery/30s/18.jpg"),
            caption: "An open Dagling at the ICGC Easter Camp, Dunstable, April 1937."
        },
    ]

    return (
        <div>
            <h2>1930 - 1939</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images1930s.map((img30s, index) => (
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
                            &times;
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage30s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <img 
                            src={images1930s[selectedImageIndex1930s].src}
                            alt={`${images1930s[selectedImageIndex1930s].caption}`}
                            className="modal-image"
                        />

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage30s}
                        >
                            <ArrowRightIcon />
                        </button>

                        <div className="caption">
                            {images1930s[selectedImageIndex1930s].caption}
                        </div>
                    </div>
                )}
        </div>
    )
}