import React from "react";
import '../../styles/components/video.scss';

function Promo() {
    return (
        <div className="video">
            <div className="container">
                <iframe 
                    title="Imperial College Gliding Club - Promo Video"
                    src="https://www.youtube.com/embed/lgWnXsLf0as?start=9" 
                    allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture"
                    allowFullScreen={true}
                >
                </iframe>
            </div>
        </div>
    );
}

export { Promo };