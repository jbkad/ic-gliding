import React from "react";
import '../../styles/components/Video.scss';

export default function AerotowVideo() {
    return (
        <div className="video" id="video">
            <div className="container">
                <iframe 
                    title="Aerotow Launch at London Gliding club"
                    src="https://www.youtube.com/embed/_ibAos8BSlw?si=l1ItYBO_ikMmbjPp&amp;start=5" 
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