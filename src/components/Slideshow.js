import React, { useEffect, useState } from "react";
import "../styles/components/slideshow.scss";

const GalleryItem = ({ children, width, image }) => {
  return (
    <div className="item" style={{ width: width }}>
      <img src={image} alt="Imperial College Gliding Club" />
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3500);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="slideshow">
      <div
        className="container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

const galleryImg = [
  "/assets/slideshow/gliding-1.jpg",
  "/assets/slideshow/gliding-2.jpg",
  "/assets/slideshow/gliding-3.jpg",
  "/assets/slideshow/gliding-4.jpg",
  "/assets/slideshow/gliding-5.jpg",
  "/assets/slideshow/gliding-6.jpg",
  "/assets/slideshow/gliding-7.jpg",
  "/assets/slideshow/gliding-8.jpg",
];

function Slideshow() {
  return (
    <Carousel>
      {galleryImg.map((image, index) => (
        <GalleryItem key={index} image={image} />
      ))}
    </Carousel>
  );
}

export { Slideshow };
