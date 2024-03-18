import React from "react";
import { ReactComponent as PhoneIcon } from "../assets/svgs/PhoneIcon.svg";
import { ReactComponent as PlaneIcon } from "../assets/svgs/PlaneIcon.svg";
import '../styles/components/HomeButtonLinks.scss';

export default function HomeButtonLinks() {

    return (
        <div className="home-links">
            <a href="https://chat.whatsapp.com/EcanRrIn34KFmpIbJsSy4d"
                target="blank"
                className="button"
            >
                <PhoneIcon className="icons"/> 
                WhatsApp Group 
            </a>
            <a href="https://www.imperialcollegeunion.org/activities/a-to-z/gliding" 
                target="blank"
                className="button"
            >
                <PlaneIcon className="icons"/> 
                Union Website     
            </a>
        </div>
    )
}