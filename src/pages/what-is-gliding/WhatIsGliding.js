import React from "react";
import { Aerotow } from "../../components/gliding-videos/Aerotow";
import { Winch } from "../../components/gliding-videos/Winch";
import "../../styles/pages/what-is-gliding.scss";

export default function WhatIsGliding() {
  return (
    <div className="what-is-gliding">
      <h1 className="heading">What is gliding?</h1>
      <p>
        <span className="highlight">
          Gliding is a sport involving flying an unpowered aircraft called
          Gliders (or Sailplanes).
        </span>
        These aircraft normally have no method of propulsion and must utilise
        the weather to maintain altitude and remain airborne.
      </p>
      <h2 className="subheading">How does a glider fly? </h2>
      <p>
        Gliders are constantly descending relative to the air around them,
        converting potential energy into kinetic energy. The resulting flow of
        air over the wings then generates lift in a similar fashion to any other
        aircraft, powered or unpowered.
      </p>
      <p>
        Gliders rely on two main launch methods to get off the ground. These
        launch methods both take the glider from stationary on the ground to an
        altitude from which the glider can continue to fly.
      </p>
      <div className="card">
        <div className="container">
          <Winch />
          <div>
            <h3 className="subheading">Winch launching</h3>
            <p>
              The glider is attached using a cable to a powerful winch at the
              opposite end of the runway. As the cable is pulled in the glider
              will climb upwards at around 45° similar to a kite on a string.
              Once at flying altitude the cable will be released from the glider
              and the glider is free to fly around. The height achieved by a
              winch launch is dependent on the weather conditions and the length
              of the runway used to launch.
            </p>
            <p>
              Winch launching the primary method of the launch used during
              training as it is a low cost and rapid method of launch.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="container">
          <Aerotow />
          <div>
            <h3 className="subheading">Aerotow launching</h3>
            <p>
              The glider is towed behind a powered aircraft using a rope until a
              certain altitude is reached and the glider releases the rope. This
              launch method is much more expensive and takes a lot longer to
              climb to the desired altitude however it gives more flexibility
              than a winch launch as the tow plane could climb as high as you
              could reasonably want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
