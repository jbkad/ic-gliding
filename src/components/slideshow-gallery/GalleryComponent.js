import React from "react";
import { Slideshow, GalleryItem } from "./Gallery";

export function GalleryComponent(){
    return (
        <Slideshow className="home__gallery">
            <GalleryItem image="/assets/slideshow/gliding-1.jpg" />
            <GalleryItem image="/assets/slideshow/gliding-2.jpg" />
            <GalleryItem image="/assets/slideshow/gliding-3.jpg" />
            <GalleryItem image="/assets/slideshow/gliding-4.jpg" />
            <GalleryItem image="/assets/slideshow/gliding-5.jpg" />
            <GalleryItem image="/assets/slideshow/gliding-6.jpg" />
            <GalleryItem image="/assets/slideshow/gliding-7.jpg" />
        </Slideshow>
    );
}