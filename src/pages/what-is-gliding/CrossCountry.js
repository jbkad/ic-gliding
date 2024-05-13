import React from "react";
import '../../styles/pages/CrossCountry.scss';

export default function CrossCountry() {
    return (
        <div id="cross-country" className="cross-country">
            <h1>Cross country</h1>
            <p>Cross-country gliding is a sport which involves flying long distances utilising the sources of lift to stay airborne. Pilots in the UK regularly achieve distances in excess of 300 km whilst flying around a ‘task’. A task is a series of GPS turn points that the pilot will fly around similar to a race track. These tasks can be made as long or a short as appropriate for the weather conditions on the day. There are thousands of turn points defined by the British Gliding Association that most pilots use when setting themselves tasks. </p>
            <p>Unfortunately, the weather doesn’t always cooperate when flying making it impossible to remain airborne to make it back to the airfield. Therefore all cross-country pilots are trained to make safe landings into farmer’s fields. Gliders are designed to do this and can be retrieved using their custom built trailers. The wings of the glider can be removed and it all fits nicely into the trailer so it can be driven back to the airfield. </p>
            <p>Cross-country competitions involve large numbers of pilots flying around the same task racing to achieve the fastest time. Up to 50 gliders compete at a time which makes for a great spectacle as they launch before the start. Once all glider are airborne the start line will be declared open. The pilots are then free to start whenever they feel is best to set the fastest time around the task. As not all gliders are made equally the times are altered by a handicap which relates to the performance of the glider. A certain number of points is awarded to the fastest pilot for the day and everyone else receives a percentage of those points in relation with their achieved time. Competitions are usually flown over a nine day period with a different task being set each day if the weather conditions allow it. The winner is the pilot with the most points at the end of the competition. Imperial College Gliding Club has many members and alumni members who compete in these competitions, including some who compete internationally whilst representing the British Gliding Team. </p>
            <img
                src={require('../../assets/diagrams/crosscountry.png')}
                alt="Cross Country"
                className="img"
            />
            <p className="caption">The XC trace</p>
        </div>
    );
}