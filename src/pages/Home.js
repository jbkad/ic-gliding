import React from "react";
import Committee from "./Committee";
import HomeVideo from "../components/gliding-videos/HomeVideo";
import HomeButtonLinks from "../components/HomeButtonLinks";
import { Slideshow } from "../components/media/Slideshow";
import '../styles/pages/Home.scss';

export default function Home() {
    return (
        <div id="home" className="home">
            <Slideshow />
            <h2 className="slogan">
                Taking Flight Since 1930: Embrace the Skies with Imperial College Gliding Club - The UK's Premier Student Soaring Experience!
            </h2>
            <HomeButtonLinks />
            <div className="body">
                Have you always dreamed of flying, taking in the view from above or performing thrilling aerobatics? Imperial College Gliding Club can help you make that dream come true - we provide training at all levels at low cost. 
                Once you've flown solo and converted to one of our two high-performance single-seaters, nothing will stop you from flying hundreds of kilometres cross-country, participating in competitions (we have a world champion at ICGC!) or getting an aerobatic rating! 
                On top of the weekend trips, we also also organise tours. They can take place either locally, somewhere in the UK (Winter tour to Scotland) or even somewhere else in Europe (summer tours to Finland or Slovenia). 
                But ICGC is not only about flying - we organise several social events throughout the year, such as bar nights and dinners. We also take part in events organised by other Junior pilots, which is a great way to get to know glider pilots all over the UK. 
                We always have a lot of fun together! If this sounds like something you'd be interested in - come for a flight and try it out for yourself!
            </div>
            <HomeVideo />
            <Committee />            
        </div>
    );
}