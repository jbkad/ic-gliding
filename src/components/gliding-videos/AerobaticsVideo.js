import React from "react";
import '../../styles/components/Video.scss';

export default function AerobaticsVideo() {
    return (
        <div className="video" id="video">
            <div className="container">
                <iframe 
                    className="youtube-video"
                    src="https://www.youtube.com/embed/uXyYGPJGJE4?si=5SdQ7U2ZIv5R_pmg" 
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