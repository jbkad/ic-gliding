import React from "react";
import Committee from "../components/Committee";
import { Slideshow } from "../components/Slideshow";
import { Link } from "react-router-dom";
import { navigateTo } from "../components/utils/Constants";
import "../styles/pages/home.scss";

export default function Home() {
  return (
    <div className="home">
      <Slideshow />
      <section className="section-1">
        <h1 className="heading">Taking Flight Since 1930</h1>
        <p className="body">
          Founded in 1930, Imperial College Gliding Club has a rich history of
          flying and fostering a passionate community of gliding enthusiasts.
          With decades of experience, our club has become a cornerstone for both
          novice and experienced pilots alike. We offer comprehensive weekend
          training at all levels for a low cost, ensuring that everyone has the
          opportunity to soar. In addition to weekend trips, we organise
          exciting tours that take place locally, across the UK (including a
          winter tour to Scotland), and even throughout Europe (with summer
          tours to Finland and Slovenia). Check out our gallery to see the
          adventures our members have embarked on and get inspired.
          <br />
          <br />
          ICGC is not only about flying – we believe in building a strong,
          connected community. Throughout the year, we organise a variety of
          social events that bring our members together beyond the skies. From
          lively bar nights to formals, there's always something happening at
          the gliding club. If this sounds like something you'd be interested
          in, come for a flight and try it out for yourself!
        </p>
      </section>
      <section className="section-2">
        <div className="container">
          <div className="overlay"></div>
          <img
            src="/assets/slideshow/gliding-3.jpg"
            alt="Flying at Gore Farm, Shaftesbury (September 1930)"
          />
          <div className="content">
            <div className="copy">
              <div className="heading">Join us!</div>
              <div className="subheading">
                Whether you’re looking for a new hobby, or just curious about
                the art of gliding, we’ve got something for everyone.
                <br />
                <br />
                Head over to the{" "}
                <Link
                  to="whatisgliding/introduction"
                  onClick={navigateTo}
                  className="link"
                >
                  What is gliding
                </Link>{" "}
                and{" "}
                <Link
                  to="/learningtoglide/first-trip"
                  className="link"
                  onClick={navigateTo}
                >
                  First flight
                </Link>{" "}
                pages to dive deeper into the sport, where you will find the
                basics of how gliders work to the process of your first flight -
                we cover everything you need to know to get started on your
                flying journey.
              </div>
            </div>
            <div className="links">
              <a
                className="btn btn-secondary btn-link"
                href="https://www.youtube.com/embed/lgWnXsLf0as?start=9"
                target="blank"
              >
                Watch a take off
              </a>
              <a
                href="https://chat.whatsapp.com/EcanRrIn34KFmpIbJsSy4d"
                target="blank"
                className="btn btn-primary btn-link"
              >
                Join WhatsApp Group
              </a>
              <a
                href="https://www.imperialcollegeunion.org/activities/a-to-z/gliding"
                target="blank"
                className="btn btn-primary btn-link"
              >
                Union Website
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="copy">
          <h1 className="heading">Meet the commitee</h1>
          <p className="subheading">
            Our 2025/26 committee is dedicated to making your gliding experience
            unforgettable. From organising training sessions to planning social
            events, they work tirelessly to ensure the club runs smoothly. Get
            to know the individuals who keep the club running!
          </p>
        </div>
        <br />
        <Committee />
      </section>
    </div>
  );
}
