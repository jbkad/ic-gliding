import React from "react";
import '../../styles/components/video.scss';

function Aerobatics() {
    return (
        <div className="video">
            <div className="container">
                <iframe 
                    title="Amazing Aerobatic Glider Tricks w/ Luca Bertossio"
                    src="https://www.youtube.com/embed/uXyYGPJGJE4?si=5SdQ7U2ZIv5R_pmg" 
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
 
export { Aerobatics };