import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svgs/ArrowRightIcon.svg';
import '../../styles/Gallery.css';


export default function NinetiesImages () {

    const [selectedImageIndex1990s, setSelectedImageIndex1990s] = useState(null);
    const [showModal1990s, setShowModal1990s] = useState(false);

    const openModal1990s = (index) => {
        setSelectedImageIndex1990s(index);
        setShowModal1990s(true);
    }

    const closeModal1990s = (e) => {
        e.stopPropagation();
        setShowModal1990s(false);
    }

    const nextImage90s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1990s(prevIndex => (prevIndex === images1990s.length - 1 ? 0 : prevIndex + 1));
    }
    
    const prevImage90s = (e) => {
        e.stopPropagation();
        setSelectedImageIndex1990s(prevIndex => (prevIndex === 0 ? images1990s.length - 1 : prevIndex - 1));
    }   
    const images1990s = [
        {
            src: require("../../assets/gallery/90s/1.jpg"),
            caption: "The ICGC fleet (Grob 102 ‘296’, ASW-19 ’96’ and Grob 103 ‘496’) at the Inter University Task Week at Saltby, July 1992."
        },
        {
            src: require("../../assets/gallery/90s/2.jpg"),
            caption: "July 1992 at the Inter University Task Week at Saltby, where we took all three ICGC gliders. ICGC won the competition in poor weather. From left to right a host of ICGC Captains: Rob Green, Sarah Harland, Afandi Darlington and Nick Danson."
        },
        {
            src: require("../../assets/gallery/90s/3.jpg"),
            caption: "ASW-19 ‘96’ at Aboyne on a wave camp, September 1994."
        },
        {
            src: require("../../assets/gallery/90s/4.jpg"),
            caption: "Grob 102 ‘296’ at the Inter University Task Week at Saltby, July 1992."
        },
        {
            src: require("../../assets/gallery/90s/5.jpg"),
            caption: "Lasham, 29th May 1994 - Frank Irving in Kite 2A BGA663 which Frank Irving, Bill Tonkyn and Ralph Hooper owned when the glider was new in the 1950s, and subsequently refurbished in the early 1990s."
        },
        {
            src: require("../../assets/gallery/90s/6.jpg"),
            caption: "Lasham, 29th May 1994 – Ralph Hooper and Frank Irving with Kite 2A BGA663 which Frank Irving, Bill Tonkyn and Ralph Hooper owned when the glider was new in the 1950s, and subsequently refurbished in the early 1990s."
        },
        {
            src: require("../../assets/gallery/90s/7.jpg"),
            caption: "ICGC expedition to the Long Mynd, Easter 1994; 496 being bungied off the hill in a stiff westerly."
        },
        {
            src: require("../../assets/gallery/90s/8.jpg"),
            caption: "ICGC expedition to the Long Mynd, Easter 1994; 496 being bungied off the hill in a stiff westerly."
        },
        {
            src: require("../../assets/gallery/90s/9.jpg"),
            caption: "496 about to be aerotowed by a Super Cub at Lasham, February 1995."
        },
        {
            src: require("../../assets/gallery/90s/10.jpg"),
            caption: "Old and new at the ICGC 65th anniversary display on the Queen’s Lawn, Imperial College, March 1995. The primary was borrowed from the London Gliding Club, Dunstable."
        },
        {
            src: require("../../assets/gallery/90s/11.jpg"),
            caption: "Old and new at the ICGC 65th anniversary display on the Queen’s Lawn, Imperial College, March 1995. The primary was borrowed from the London Gliding Club, Dunstable."
        },
        {
            src: require("../../assets/gallery/90s/12.jpg"),
            caption: "Old and new at the ICGC 65th anniversary display on the Queen’s Lawn, Imperial College, March 1995. The primary was borrowed from the London Gliding Club, Dunstable. On the right is former ICGC Captain, Wendy Yates."
        },
        {
            src: require("../../assets/gallery/90s/13.jpg"),
            caption: "26th February 1995, Frank Irving about to do the first flight of ICGC’s ASW-24 ’96’. From left to right: Jane Lewis, Frank Irving (in cockpit), Alex Borak, Peter Masson, Nina Judkins, Pete Healy, Martin Judkins."
        },
        {
            src: require("../../assets/gallery/90s/14.jpg"),
            caption: "Summer 1996, Lasham – Frank Irving with 496, ICGC’s Grob 103C."
        },
        {
            src: require("../../assets/gallery/90s/15.jpg"),
            caption: "Summer 1996, Lasham – Frank Irving flying 496, ICGC’s Grob 103C, with a Robin tug in front."
        },
        {
            src: require("../../assets/gallery/90s/16.jpg"),
            caption: "96 on the grid at the 4th Junior European Championships, Musbach, Germany in August 1997. Pilot is Afandi Darlington, who finished 7th in the Standard Class."
        },
        {
            src: require("../../assets/gallery/90s/17.jpg"),
            caption: "August 1997, Freudenstadt, Germany - the opening ceremony of the 4th Junior European Championships in which ICGC ex-students Afandi Darlington and Pete Masson took part."
        },
        {
            src: require("../../assets/gallery/90s/18.jpg"),
            caption: "August 1997, Freudenstadt, Germany - the opening ceremony of the 4th Junior European Championships in which ICGC ex-students Afandi Darlington and Pete Masson took part. From left to right: Pete Masson, Henry Rebbeck, Afandi Darlington, Jay Rebbeck and Oliver Ward."
        },
    ]

    return (
        <div>
            <h2>1990 - 1999</h2>
                <div className="image-grid">
                    <div className="items-container">
                        {images1990s.map((img90s, index) => (
                            <div 
                                className="item" 
                                key={index}
                                onClick={() => openModal1990s(index)}
                            >
                                <img 
                                    src={img90s.src}
                                    alt={`${img90s.caption}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {showModal1990s && (
                    <div 
                        className={`modal ${showModal1990s ? 'show' : ''}`}
                        onClick={closeModal1990s}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal1990s}
                        >
                            &times;
                        </span>

                        <button 
                            className="navigation-btn" 
                            onClick={prevImage90s}
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="items">
                            <img 
                                src={images1990s[selectedImageIndex1990s].src}
                                alt={`${images1990s[selectedImageIndex1990s].caption}`}
                                className="modal-image"
                            />
                            <div className="caption">
                                {images1990s[selectedImageIndex1990s].caption}
                            </div>
                        </div>
                        
                        <button 
                            className="navigation-btn" 
                            onClick={nextImage90s}
                        >
                            <ArrowRightIcon />
                        </button>

                        
                    </div>
                )}
        </div>
    )
}