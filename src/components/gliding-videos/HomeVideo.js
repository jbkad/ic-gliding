import React from "react";
import '../../styles/components/Video.scss';

export default function HomeVideo() {
    return (
        <div className="video" id="video">
            <h2>Here is what you have to look forward to!</h2>
            <div className="container">
                <iframe 
                    className="youtube-video"
                    src="https://www.youtube.com/embed/lgWnXsLf0as?start=9" 
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