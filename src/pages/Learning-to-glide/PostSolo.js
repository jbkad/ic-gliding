import React from "react";
import '../../styles/pages/PostSolo.css';

export default function PostSolo() {
    return (
        <div id="post-solo" className="post-solo">
            <h1>Post solo progression</h1>
            <p>Once you have flown solo in in a two-seat glider there is still much to learn. You will build experience flying in a wide range of conditions before converting into single seat gliders. You will develop your soaring skills (using lift to stay airborne) and become a much more proficient pilot. </p>
            <p>Once you have completed either 50 solo flights or 20 solo flights and 10 hours flying time you should be looking to complete your Bronze Badge. The Bronze Badge involves 10 multiple choice theoretical knowledge exams on the following subjects: </p>
            <ul>
                <li>Air Law</li>
                <li>Human Performance and Limitations</li>
                <li>Meteorology</li>
                <li>Communication</li>
                <li>Principles of Flight </li>
                <li>Operational Procedures </li>
                <li>Flight Performance and Planning</li>
                <li>Aircraft General Knowledge including emergency equipment </li>
                <li>Navigation I </li>
                <li>Navigation II</li>
            </ul>

            <p>There is also a practical flying test required for your Bronze Badge which will check you can demonstrate an appropriate level of practical skill and knowledge associated with the following: </p>
            <ul>
                <li>Pre-flight operations including glider assembly and inspection </li>
                <li>Techniques and procedures for the launching method(s) used, including appropriate airspeed limitations, emergency procedures and signals used </li>
                <li>Circuit flying, collision avoidance precautions and procedures </li>
                <li>Normal and crosswind approach and landing </li>
                <li>Control of the glider by external visual reference </li>
                <li>Understanding and recognition of the symptoms of the stall, stall with wing drop and flil spin, followed by the correct recovery </li>
                <li>Satisfactory recovery from launch failures or simliated launch failures </li>
                <li>Demonstrate that they can obtain and interpret airspace, NOTAM and weather information appropriate for soaring </li>
            </ul>

            <p>Following the Bronze Badge is the Cross-Country Endorsement which qualifies you to fly further from the airfield. The endorsement provides you with the skills and knowledge required to conduct safe cross-country flights. The requirements for the cross-country endorsement are as follows: </p>
            <ul>
                <li>A 1 Hour Soaring Flight </li>
                <li>Field Selection Test </li>
                <li>Field Landings Test </li>
                <li>Navigation Test </li>
            </ul>

            <p>For more information about the other available endorsements please visit the {" "}
                <a 
                    href="https://members.gliding.co.uk/laws-rules/gliding-certificate-and-endorsements/"
                    target="blank"
                >
                    BGA website
                </a>.
            </p>

            <p>Once you have your Cross-Country Endorsement you are now a licensed pilot and you can then complete cross-country flights on your own to work towards your Silver Badge. To achieve the badge you must complete: </p>
            <ul>
                <li>A 5 hour duration flights </li>
                <li>A 1000m (3281ft) height gain </li>
                <li>A 50km straight distance flight </li>
            </ul>

            <p>Following the silver badge there are a number of other {" "}
                <a 
                    href="https://members.gliding.co.uk/laws-rules/sporting-badges-and-diplomas-requirements/"
                    target="blank"
                >
                    sporting badges and diplomas
                </a>.
            </p>
        </div>
    );
}