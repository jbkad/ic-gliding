import React from "react";
import '../../styles/components/video.scss';

export default function WinchVideo() {
    return (
        <div className="video">
            <div className="container">
                <iframe 
                    title="Winch Launch"
                    src="https://www.youtube.com/embed/aZy1urA3Qik?si=lhiV4Um5wAdjQcZB&amp;start=10"
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