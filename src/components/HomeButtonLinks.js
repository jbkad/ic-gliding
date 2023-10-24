import React from "react";
import { ReactComponent as MailIcon } from "../assets/svgs/MailIcon.svg";
import { ReactComponent as PlaneIcon } from "../assets/svgs/PlaneIcon.svg";
import '../styles/components/HomeButtonLinks.css';

export default function HomeButtonLinks() {

    return (
        <div className="home-links">
            <a href="https://union.us19.list-manage.com/subscribe?u=269e6fccce0e382e53a4d91ee&id=2153e388bc"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
            >
                <MailIcon className="icons"/> 
                Mailing List 
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