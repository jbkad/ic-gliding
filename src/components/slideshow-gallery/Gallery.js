import React, { useEffect, useState } from "react";
import '../../styles/GalleryItem.css';

// This gallery lives on the <Home /> page.


// Renders the gallery items containing images.
const GalleryItem = ({ children, width, image}) => {
    return (
        <div 
            className="gallery-item"
            style={{ width: width}}
        >
            <img 
                src={image}
                alt="Gliding gallery item"
            />
            {children}
        </div>
    )
}

// Forms the carousel component of the gallery.
// Updates the active index of carousel items.
const Slideshow = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    // Create the autoslideshow component of the carousel.
    // Sets the speed of the carousel to 3.5s as long as the pause state is false. 
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3500);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        // Creates the conditions for the paused state (user hovering over gallery).
        <div 
            className="gallery"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="inner-gallery"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    );
}

export { Slideshow, GalleryItem }