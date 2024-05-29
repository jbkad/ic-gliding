import React from "react";
import Committee from "./Committee";
import HomeVideo from "../components/gliding-videos/HomeVideo";
import { Slideshow } from "../components/media/Slideshow";
import { ReactComponent as PhoneIcon } from "../assets/svgs/PhoneIcon.svg";
import { ReactComponent as PlaneIcon } from "../assets/svgs/PlaneIcon.svg";
import '../styles/pages/Home.scss';

export default function Home() {
    return (
        <div className="home" id="home">
            <Slideshow />
            <section className="section-1">
                <h2 className="slogan">
                    Taking Flight Since 1930: Embrace the Skies with Imperial College Gliding Club - The UK's Premier Student Soaring Experience!
                </h2>
                <div className="links">
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
                <div className="body">
                    Have you always dreamed of flying, taking in the view from above or performing thrilling aerobatics? Imperial College Gliding Club can help you make that dream come true - we provide training at all levels at low cost. 
                    Once you've flown solo and converted to one of our two high-performance single-seaters, nothing will stop you from flying hundreds of kilometres cross-country, participating in competitions (we have a world champion at ICGC!) or getting an aerobatic rating! 
                    On top of the weekend trips, we also also organise tours. They can take place either locally, somewhere in the UK (Winter tour to Scotland) or even somewhere else in Europe (summer tours to Finland or Slovenia). 
                    But ICGC is not only about flying - we organise several social events throughout the year, such as bar nights and dinners. We also take part in events organised by other Junior pilots, which is a great way to get to know glider pilots all over the UK. 
                    We always have a lot of fun together! If this sounds like something you'd be interested in - come for a flight and try it out for yourself!
                </div>
            </section>
            <section className="section-2">
                <h2>Here is what you have to look forward to!</h2>
                <HomeVideo />
            </section>
            <section className="section-3">
                <Committee />
            </section>            
        </div>
    );
}