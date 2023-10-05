import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/svgs/ExitIcon.svg';
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
        setSelectedImageIndex1960s(prevIndex => (prevIndex === 0 ? images1960s.length - 1 : prevIndex - 1));
    }  
    const images1960s = [
        {
            src: require("../../assets/gallery/60s/1.jpg"),
            caption: `January 1960 Issoire ICGC expedition - general view of the launch point. "66" is the Irving/Bridgewater/Davey syndicate Skylark 3.`
        },
        {
            src: require("../../assets/gallery/60s/2.jpg"),
            caption: "January 1960 Issoire ICGC expedition – Frank Irving preparing the Skylark 3 for flight, while John Bridgewater looks on."
        },
        {
            src: require("../../assets/gallery/60s/3.jpg"),
            caption: "January 1960 Issoire ICGC expedition - Frank Irving ready for a wave flight in syndicate Skylark 3 '66'. "
        },
        {
            src: require("../../assets/gallery/60s/4.jpg"),
            caption: "January 1960 Issoire ICGC expedition – Paul Minton climbing the Skylark 3 through 10,000’ in a wave climb which would eventually top out at 20,000’ with the final 10,000’ of climb being made at a very steady 1kt. It was very cold! "
        },
        {
            src: require("../../assets/gallery/60s/5.jpg"),
            caption: "Paul Minton with ICGC students at Redhill, February 1960."
        },
        {
            src: require("../../assets/gallery/60s/6.jpg"),
            caption: "Paul Minton (right) with ICGC students at Redhill, February 1960."
        },
        {
            src: require("../../assets/gallery/60s/7.jpg"),
            caption: "1960, Redhill. ICGC Eagle '96' about to launch on another instructional flight with Paul Minton in the back seat."
        },
        {
            src: require("../../assets/gallery/60s/8.jpg"),
            caption: "1961 National Competitions, league 2. Bernard Davey flying Eagle 'Beagle' about to enter cloud near Bodmin during a goal race to Perranporth. The photo was taken from ICGC Eagle '96' which was being flown by Paul Minton and John Bridgewater."
        },
        {
            src: require("../../assets/gallery/60s/9.jpg"),
            caption: `ICGC Eagle "96" at Cambridge airport in August 1962 for the inter-University competition.`
        },
        {
            src: require("../../assets/gallery/60s/10.jpg"),
            caption: "Elm Farm, Pilton, Nr. Shepton Mallett 31st May 1963."
        },
        {
            src: require("../../assets/gallery/60s/11.jpg"),
            caption: "Paul Minton at the 1963 Nationals, held at Lasham, with the ICGC Skylark 4 ‘296’ "
        },
        {
            src: require("../../assets/gallery/60s/12.jpg"),
            caption: "1967 - ICGC Eagle ’96’ on the runway at Lasham."
        },
        {
            src: require("../../assets/gallery/60s/13.jpg"),
            caption: "Beagle owned by Bobby Cole taken over Lasham in August 1968. This aircraft was made available to the IC club by the owner, to be flown when 96, the IC Eagle was busy."
        },
        {
            src: require("../../assets/gallery/60s/14.jpg"),
            caption: "Mike Harrison with ICGC Skylark 4 at Lasham, 1968."
        },
        {
            src: require("../../assets/gallery/60s/15.jpg"),
            caption: "1968 - Mike Neale’s Landrover and the ICGC Skylark on the way to Portmoak."
        },
        {
            src: require("../../assets/gallery/60s/16.jpg"),
            caption: "Sigma on the runway at Cranfield. ICGC members Frank Irving and Ken Wilkinson were involved in the project, Frank on the design and test flying and Ken in the provision of BEA hangarage facilities at Heathrow."
        },
        {
            src: require("../../assets/gallery/60s/17.jpg"),
            caption: "Skylark 4 296 in a field following a flight which gained Howard Torode his Silver C."
        },
        {
            src: require("../../assets/gallery/60s/18.jpg"),
            caption: "Skylark 4 296 in the hangar at the ICGC expedition to Aosta, Italy."
        },
    ]

    return (
        <div>
            <h2>1960 - 1969</h2>
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
                            <ExitIcon />
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage60s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images1960s[selectedImageIndex1960s].src}
                                alt={`${images1960s[selectedImageIndex1960s].caption}`}
                                className="modal-image"
                            />

                            <div className="caption">
                                {images1960s[selectedImageIndex1960s].caption}
                            </div>
                        </div>

                        <button 
                            className="navigation-btn" 
                            onClick={nextImage60s}
                        >
                            <ArrowRightIcon />
                        </button>

                        
                    </div>
                )}
        </div>
    )
}