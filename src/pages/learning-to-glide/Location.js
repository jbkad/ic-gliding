import React from "react";
import '../../styles/pages/location.scss';

export default function Location() {
    return (
        <div className="location">
            <h1 className="heading">Where do we fly?</h1>
            <p className="body">We fly from Lasham airfield in Hampshire, where we have been based since 1951. Lasham was an RAF station during the war but is now owned by Lasham Gliding Society and is used primarily for gliding. The airfield is still occasionally used by airliners and other large jet aircraft arriving and departing from 2Excel Engineering, an aircraft engineering organisation based at Lasham. Lasham Gliding Society encompasses many smaller gliding clubs making it the largest club in the UK and one of the largest in the world. </p>

            <h2 className="subheading">Getting to Lasham </h2>
            <p className="body">There are 3 ways you can travel to Lasham Airfield: by minibus, car or public transport. </p>
            <h3 className="subheading">By Minibus</h3>
            <p className="subheading">Subject to minibus and driver availability we try to run weekend trips using on of the Union minibuses. This has been made more difficult by the reduction in size of the minibus fleet however we will endeavour to utilise this option when available. The minibuses will depart from the South Kensington Campus and aim to arrive at Lasham before 09:00. 
            There will be a charge associated with each trip when the minibus is used. 
            We are always looking for new minibus drivers. If you are 21 and have been driving for 3 years then you can apply to take the Union minibus test. Minibus drivers do not pay a trip fee so please let us know if you are willing to drive for us.  </p>

            <h3 className="subheading">By Car</h3>
            <p>We have some members who are able to offer lifts with their own cars.  </p>
            <div className="card">
                <div className="container">
                    <a href="https://maps.app.goo.gl/6N9rqyPNqGEAu1T36" target="blank">
                        <img 
                            src={require('../../assets/lasham_map.png')}
                            alt="Map of the Lasham Gliding Society"
                            className="img"
                        />
                    </a>
                    <div>
                        <div className="address">
                            <p>Please follow directions to:</p>
                            <a href="https://maps.app.goo.gl/6N9rqyPNqGEAu1T36" target="blank">
                                <div>Lasham Gliding Society</div>
                                <div>The Avenue</div> 
                                <div>Alton</div> 
                                <div>GU34 5SS</div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <h3 className="subheading">By Public Transport</h3>
            <p>There are frequent trains from <span className="highlight">London Waterloo</span> to <span className="highlight">Basingstoke station</span>. From Basingstoke we recommend using {" "}
            <a href="https://www.alphacarsandtaxis.co.uk/basingstoke.html" target="blank">Alpha Cars </a>
            {" "} to travel the remaining distance to the airfield unless you can find someone at Lasham with a car to give you a lift to and from the station. </p>
            <p>For those of you with a bicycle we recommend taking the train to either <span className="highlight">Basingstoke</span> (6.8 miles) or <span className="highlight">Alton</span> (4.9 miles) and cycling the remaining distance to the airfield. </p>
            <p>When travelling by public transport as part of one of our weekend trips the cost of the taxis will be covered by the club. You will need to cover the cost of your train tickets. </p>
        </div>
    );
}