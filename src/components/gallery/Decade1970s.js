import React, { useState } from "react"
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
import '../../styles/components/Gallery.css';

export default function Decade1970s () {

    const [selectedImageIndex1970s, setSelectedImageIndex1970s] = useState(null);
    const [showModal1970s, setShowModal1970s] = useState(false);

    const openModal1970s = (index) => {
        setSelectedImageIndex1970s(index);
        setShowModal1970s(true);
    }

    const closeModal1970s = (e) => {
        e.stopPropagation();
        setShowModal1970s(false);
    }

    const nextImage70s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1970s(prevIndex => (prevIndex === images1970s.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage70s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1970s(prevIndex => (prevIndex === 0 ? images1970s.length - 1 : prevIndex - 1));
    }   

    const images1970s = [
        {
            src: require("../../assets/gallery/70s/1.jpg"),
            caption: "Lasham, 1970 – Frank Irving flying his Dart-17R 466 near Lasham. ICGC bought this glider from Frank and operated it as 96 between 1973-76."
        },
        {
            src: require("../../assets/gallery/70s/2.jpg"),
            caption: "Lasham, 1970 – ICGC Eagle 96 being hooked on for a launch."
        },
        {
            src: require("../../assets/gallery/70s/3.jpg"),
            caption: "Lasham, 1970 – Brand new ICGC K-8 134 (changed in 1971 to 496) ready for launch with Tim Tuck in the cockpit."
        },
        {
            src: require("../../assets/gallery/70s/4.jpg"),
            caption: "1971 – Left to right, Dave West, Pete Jenkins and Pete Wylie with 296."
        },
        {
            src: require("../../assets/gallery/70s/5.jpg"),
            caption: "ICGC Skylark 4 in a field in 1970 – farmer and daughter pose for a picture."
        },
        {
            src: require("../../assets/gallery/70s/6.jpg"),
            caption: "1971 – Dave West on a retrieve for ICGC Skylark 4 ‘296’."
        },
        {
            src: require("../../assets/gallery/70s/7.jpg"),
            caption: "1971 – Dave West on a retrieve with Skylark 4 ‘296’ trailer."
        },
        {
            src: require("../../assets/gallery/70s/8.jpg"),
            caption: "1972 – Frank Irving in the cockpit of Sigma during test flights at Lasham."
        },
        {
            src: require("../../assets/gallery/70s/9.jpg"),
            caption: "Lasham, 1970 – Brand new ICGC K-8 ‘134’ (changed in 1971 to ‘496’)."
        },
        {
            src: require("../../assets/gallery/70s/10.jpg"),
            caption: "Lasham, west end of the main runway, 1970 – Brand new ICGC K-8 ‘134’ (changed in 1971 to ‘496’)."
        },
        {
            src: require("../../assets/gallery/70s/11.jpg"),
            caption: "Frank Irving flying the ICGC K8 near Lasham in 1972. Intended for early solos the glider presented a challenge to the tall pilot. The club bought the glider new in 1970."
        },
        {
            src: require("../../assets/gallery/70s/12.jpg"),
            caption: "Frank Irving flying the ICGC K8 near Lasham in 1972. Intended for early solos the glider presented a challenge to the tall pilot. The club bought the glider new in 1970."
        },
        {
            src: require("../../assets/gallery/70s/13.jpg"),
            caption: "Frank Irving flying the ICGC K8 near Lasham in 1972. Intended for early solos the glider presented a challenge to the tall pilot. The club bought the glider new in 1970."
        },
        {
            src: require("../../assets/gallery/70s/14.jpg"),
            caption: "K-8 CofA time, 1972 – Left to right: Dave West, Jeff Gentry and Pete Jenkins."
        },
        {
            src: require("../../assets/gallery/70s/15.jpg"),
            caption: "From left, Mary Short, Doug Walker, Christine Walker (nee Holland, now Marshall), Lasham regionals 1972."
        },
        {
            src: require("../../assets/gallery/70s/16.jpg"),
            caption: "Portmoak during ICGC expedition, 1972 – from left to right: Dave West, Mary Short, Christine Holland, Pete Jenkins and Frank Irving. ICGC’s K-8 496 is behind."
        },
        {
            src: require("../../assets/gallery/70s/17.jpg"),
            caption: "Lasham 1974 – Frank Irving gives his relatives a flight in a SZD Bocian."
        },
        {
            src: require("../../assets/gallery/70s/18.jpg"),
            caption: "Lasham 1977 – ICGC Astir ‘96’ being prepared for flight with Rob Williams in the cockpit."
        },
    ]

    return (
        <div>
            <h2>1970 - 1979</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images1970s.map((img70s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal1970s(index)}
                            >
                                <img 
                                    src={img70s.src}
                                    alt={`${img70s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal1970s && (
                    <div
                        className={`modal ${showModal1970s ? 'show' : ''}`}
                        onClick={closeModal1970s}
                    >
                        <span
                            className="close"
                            onClick={closeModal1970s}
                        >
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage70s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images1970s[selectedImageIndex1970s].src}
                                alt={`${images1970s[selectedImageIndex1970s].caption}`}
                                className="modal-image"
                            />
                            <div className="caption">
                                {images1970s[selectedImageIndex1970s].caption}
                            </div>
                        </div>

                        <button
                            className="navigation-btn" 
                            onClick={nextImage70s}
                        >
                            <ArrowRightIcon />
                        </button>

                       

                    </div>
                )}
        </div>
    )
}