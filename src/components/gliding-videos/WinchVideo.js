import React from "react";
import '../../styles/components/Video.scss';

export default function WinchVideo() {
    return (
        <div className="video" id="video">
            <div className="container">
                <iframe 
                    className="youtube-video"
                    src="https://www.youtube.com/embed/aZy1urA3Qik?si=lhiV4Um5wAdjQcZB&amp;start=10"
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