import React from "react";
import { ReactComponent as PhoneIcon } from "../assets/svgs/PhoneIcon.svg";
import { ReactComponent as PlaneIcon } from "../assets/svgs/PlaneIcon.svg";
import '../styles/components/HomeButtonLinks.css';

export default function HomeButtonLinks() {

    return (
        <div className="home-links">
            <a href="https://chat.whatsapp.com/EcanRrIn34KFmpIbJsSy4d"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
            >
                <PhoneIcon className="icons"/> 
                WhatsApp Group 
            </a>
            <a href="https://www.imperialcollegeunion.org/activities/a-to-z/gliding" 
                target="_blank"
                rel="noopener noreferrer"
                className="button"
            >
                <PlaneIcon className="icons"/> 
                Union Website     
            </a>
        </div>
    )
}