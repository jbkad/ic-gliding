import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowLeftIcon } from '../assets/svgs/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../assets/svgs/ArrowRightIcon.svg';
import { ReactComponent as Exit } from '../assets/svgs/x-circle.svg';
import '../styles/components/gallery.scss';

export default function Decade({ images, decade }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log('Images:', images);
    }, [images]);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    }

    const closeModal = (e) => {
        e.stopPropagation();
        setShowModal(false);
    }

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    return (
        <div className="gallery">
            <h2 className="decade">The {decade}s <hr /></h2>
            <div className="grid">
                <div className="container">
                    {images && images.map((img, index) => (
                        <div
                            className="data"
                            key={index}
                            onClick={() => openModal(index)}
                        >
                            <img 
                                src={img.src}
                                alt={img.caption}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <aside>
                {showModal && (
                    <div 
                        className={`modal ${showModal ? 'show' : ''}`}
                        // onClick={closeModal}
                    >
                        <div className="tools">
                            <div className="arrows">
                                <span 
                                    className="btn-navigate" 
                                    onClick={prevImage}
                                >
                                    <ArrowLeftIcon />
                                </span>
                                <span 
                                    className="btn-navigate" 
                                    onClick={nextImage}
                                >
                                    <ArrowRightIcon />
                                </span>
                            </div>
                            <span 
                                className="close" 
                                onClick={closeModal}
                            >
                                <Exit />
                            </span>
                        </div>
                        <div className="items">
                            <img 
                                src={images[selectedImageIndex].src}
                                alt={images[selectedImageIndex].caption}
                            />
                            <div className="caption">
                                {images[selectedImageIndex].caption}
                            </div>
                        </div>
                    </div>
                )}
            </aside>
        </div>
    )
}