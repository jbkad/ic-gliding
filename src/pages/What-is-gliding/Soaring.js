import React from "react";
import SoaringImgOne from '../../assets/diagrams/soaring-1.png';
import SoaringImgTwo from '../../assets/diagrams/soaring-2.png';
import SoaringImgThree from '../../assets/diagrams/soaring-3.png';
import '../../styles/pages/Soaring.scss';

export default function Soaring() {
    return (
        <div id="soaring" className="soaring">
            <h1>Soaring</h1>
            <p>A glider is constantly descending relative to the air surrounding it however it is still possible to remain at the same altitude or even to climb if flying through an area where the air is rising faster than the glider is descending through it. These areas of rising air are referred to as lift. </p>
            <p>There are three main types of lift that can be utilised to climb in a glider. These are thermals, ridge lift and wave. </p>
            <p>Thermals are columns of rising air that gliders can circle within to gain altitude. Thermals are formed when the ground is heated by the sun, which then heats the air immediately above it. This forms a pocket of warmer air, often called a bubble, which can detach from the ground and begin to rise upward. As the bubble climbs higher it will reach an altitude where the moisture carried in the air will condense, this will form a cumulus cloud which can be used to identify the position of the thermal. Thermal lift is the most common type of lift that you will utilise whilst flying in the UK however thermals will only tend to form during the spring and summer as they require a certain level of heating from the sun.</p>
            
            <div className="slideshow">
                <img
                    src={SoaringImgOne}
                    alt="soaring"
                    className="img img-1"
                />
                <img
                    src={SoaringImgTwo}
                    alt="soaring"
                    className="img img-2"
                />
                <img
                    src={SoaringImgThree}
                    alt="soaring"
                    className="img img-3"
                />
            </div>
            <div className="caption">The three main glider ascents: thermals, ridge lifts and wave dynamics</div>
            
            <p>Ridge lift can occur all year round however as the name suggests it requires the presence of a ridge or hill to form. As the wind blows against the side of a ridge it will be deflected upwards, a glider can then fly in the area where the wind has been deflected upwards to gain altitude. Ridge lift requires wind to be blowing against the ridge with reasonable strength within around 30° of a line perpendicular to the ridge. If the angle is any larger than the lift produced will likely be weak and unusable. You are unlikely to encounter ridge lift during your training as the terrain around our airfield is relatively flat. </p>
            <p>Wave lift also requires to form however the wind strength required is much greater. When a strong wind blows over a ridge and the wind also increases with altitude a series of standing waves can form downwind of the ridge. These waves often reach altitudes much greater than the ridge and can be used by glider pilots to climb to very high altitudes. </p>
        </div>
    );
}