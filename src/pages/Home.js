import React from "react";
import Committee from "./Committee";
import { Promo } from "../components/gliding-videos/Promo";
import { Slideshow } from "../components/Slideshow";
import { Link } from "react-router-dom";
import '../styles/pages/home.scss';

export default function Home() {
    return (
        <div className="home">
            <Slideshow />
            <section className="section-1">
                <h1 className="heading">Taking Flight Since 1930</h1>
                <p className="body">
                    Founded in 1930, Imperial College Gliding Club has a rich history of flying and fostering a passionate community of gliding enthusiasts. With decades of experience, our club has become a cornerstone for both novice and experienced pilots alike. We offer comprehensive weekend training at all levels for a low cost, ensuring that everyone has the opportunity to soar.
                    In addition to weekend trips, we organise exciting tours that take place locally, across the UK (including a winter tour to Scotland), and even throughout Europe (with summer tours to Finland and Slovenia). Check out our gallery to see the adventures our members have embarked on and get inspired.
                    <br/><br/>
                    ICGC is not only about flying – we believe in building a strong, connected community. Throughout the year, we organise a variety of social events that bring our members together beyond the skies. From lively bar nights to formals, there's always something happening at the gliding club. If this sounds like something you'd be interested in, come for a flight and try it out for yourself!                    
                </p>
                <div className="links">
                    <a href="https://chat.whatsapp.com/EcanRrIn34KFmpIbJsSy4d"
                        target="blank"
                        className="link"
                    >
                        WhatsApp Group 
                    </a>
                    <a href="https://www.imperialcollegeunion.org/activities/a-to-z/gliding" 
                        target="blank"
                        className="link"
                    >
                        Union Website     
                    </a>
                </div>
            </section>
            <section className="section-2">
                <div className="container">
                    <div className="col-1">
                        <h1 className="heading">Here is what you have to look forward to!</h1>
                        <p className="body">
                            <div>Whether you’re looking for a new hobby, an adventure, or just curious about the art of gliding, we’ve got something for everyone. </div>
                            <br />
                            <div>Interested in finding out more about flying? Head over to our <Link to='whatisgliding/introduction'>'What is gliding?'</Link> and <Link to="/learningtoglide/first-trip">'First flight'</Link> page to dive deeper into the sport. From the basics of how gliders work to the exhilaration of your first solo flight, we cover everything you need to know to get started on your flying journey. </div>
                        </p>
                    </div>
                    <div className="col-2">
                        <Promo />
                    </div>
                </div>
            </section>
            <section className="section-3">
                <div className="copy">
                    <h1 className="heading">Meet the commitee</h1>
                    <p className="subheading">
                        Our 2023/24 committee is dedicated to making your gliding experience unforgettable. From organising training sessions to planning social events, they work tirelessly to ensure the club runs smoothly. Get to know the individuals who keep the club running!
                    </p>
                </div>
                <Committee />
            </section>            
        </div>
    );
}