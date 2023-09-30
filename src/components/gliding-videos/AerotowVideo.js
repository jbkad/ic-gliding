import React from "react";
import '../../styles/Video.css';

export default function AerotowVideo() {
    return (
        <div className="video" id="video">
            <div className="container">
                <iframe 
                    className="youtube-video"
                    src="https://www.youtube.com/embed/_ibAos8BSlw?si=l1ItYBO_ikMmbjPp&amp;start=5" 
                    title="YouTube video player" 
                    allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture"
                    allowFullScreen={true}>
                </iframe>
            </div>
        </div>
    );
}