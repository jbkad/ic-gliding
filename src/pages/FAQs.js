import { useState } from "react";
import '../styles/pages/FAQs.css';

export default function FAQs(){

    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        {
            title:'Do I require any experience to fly?',
            content: `
                <ul>
                    <li>Most of our members joined with no flying experience. You will be flying in a two-seater glider with an instructor at the back to teach you. </li>
                    <li>Your instructor will be handling the takeoff and landing for the first few flights, you will do the rest! </li>
                </ul>
            `
        },
        {
            title:'Where do we fly?',
            content:`
                <ul>
                    <li>We fly out of 
                    <a 
                        href="https://maps.app.goo.gl/6N9rqyPNqGEAu1T36"
                        target="blank"
                    >
                        Lasham airfield
                    </a>
                    in <strong>Hampshire</strong> (just over an hour South-West of London). Lasham is a former RAF base and one of the biggest gliding clubs in the world - and its been our home since 1951! </li>
                </ul>
            `
        },
        {
            title:'How do I sign up for day trips on Saturdays or Sundays? ',
            content: `
                <ul>
                    <li>
                        If you have joined our
                            <a 
                                href="https://chat.whatsapp.com/EcanRrIn34KFmpIbJsSy4d"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                WhatsApp group
                            </a>
                        , you should receive a sign-up form every <strong>Monday at 21:30.</strong> The form will close every <strong>Tuesday at 21:30.</strong> 
                    </li>
                    <li>Flying & reserve lists for that weekend’s trip will be sent out every <strong>Wednesday at 21:30.</strong> </li>
                    <li>If you see your name on the flying or reserve list, join the corresponding WhatsApp groups by <strong>Thursday 21:30</strong> to confirm your attendance. Otherwise, your spot might be given to members on the reserve list. </li>
                </ul>
            `
        },
        {
            title:'How does the committee decide who’s going on the trips?',
            content: `
                <ul>
                    <li>We aim to fly everyone at least once before the end of October. </li>
                    <li>For the first two weeks, seats will be allocated to members who bought the Gliding Club membership early (on the day of the Fresher’s Fair). After most people have at least one go, we will start prioritising the people with the fewest flights. </li>
                    <li>
                        If you can drive, you may get priority. Please
                            <a 
                                href="mailto:gliding@imperial.ac.uk" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                email 
                            </a>
                        if this is the case.
                    </li>
                </ul>
            `
        },
        {
            title:'How much flying will I do on each trip?',
            content: `
                <ul>
                    <li>Gliding is a weather-dependent sport, so your flight time depends completely on the weather of the day. Flights in the winter tend to be shorter due to shorter daylight hours and fog. Autumn and Summer flights are much better due to longer daylight hours and better soaring weather. </li>
                    <li>Expect two or three flights per trip. </li>
                </ul>
            `
        },
        {
            title:'How do I get to Lasham Airfield?',
            content: `
                <ul>
                    <li>If you are coming with us on a trip on Saturdays or Sundays, the committee will organise you to take either a train and taxi, minibus, or a ride in a member’s car. </li>
                </ul>
            `
        },
        {
            title:'How much will it cost?',
            content: `
                <ul>
                    <li>
                        The Imperial College Gliding Club (icGC) annual membership must be purchased before any flying activities due to insurance requirements. It can be purchased from the
                            <a 
                                href="https://www.imperialcollegeunion.org/shop/csp/gliding/gliding-membership-23-24"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                union shop 
                            </a>
                        for £ 50. 
                    </li>
                    <li>These costs will be charged accordingly at the end of each flying day: </li>

                    <li> • Minibus / private car to Lasham Airfield with return - £ 16  </li>
                    <li> • Train tickets between Clapham Junction and Basingstoke - at your own costs </li>
                    <li> • Transport between Basingstoke and Lasham Airfield - £ 12 </li>
                    <li> • Winch Launch - £ 10 </li>
                    <li> • Aerotow to 2000 feet - £ 43 </li>
                    <li> • Aerotow additional 500 feet - £ 4.45 </li>
                    <li> • Time in the air - £ 0.30 per minute (minimum charge 7 minutes) </li>

                    <br />
                    <li><strong>Example</strong></li>
                    <li> • 10 minute flight off a winch: £ 13 (the vast majority of your training flights will cost about this) </li>
                    <li> • 30 minute flight off a winch: £ 19 </li>
                    <li> • 1h flight off a winch: £ 28 </li>
                    <li> • 20 minute flight from 2000ft aerotow: £ 49 </li>
                </ul>
            `
        },
        {
            title:'What if I am no longer available for a trip?',
            content: `
                <ul>
                    <li>Please tell us immediately so we can allocate your seat to someone else on the reserve list. </li>
                    <li>Members who signed up for the weekend using the link but canceled or did not confirm their attendance following the release of the flying/reserve list on Wednesday will be suspended from flying for the following number of weeks: </li>
                    <ul classname="trip-cancellation">
                        <li> • Canceling before Thursday 6pm - <strong>two weeks</strong> </li>
                        <li> • Canceling between Thursday 6pm and Friday 6pm - <strong>three weeks</strong> </li>
                        <li> • Canceling after Friday 6pm - <strong>four weeks</strong> </li>
                        <li> • Not turning up in the morning - <strong>four weeks</strong> </li>
                        <li>Please sign up for trips only if you are free. Do not arrange other activities for the weekend until you've checked the flying/reserve lists which are released every Wednesday. </li>
                    </ul>
                </ul>
            `
        },
        {
            title:'What launch methods are available?',
            content: `
                <ul>
                    <li><strong>Winch launch - </strong> The glider is attached to a long cable, which is wound in by a powerful engine on the opposite end of the runway. The glider is then quickly accelerated and launched into the air launching you about 1500ft above the ground. Winching is the cheapest (and most exciting) launch method we have! </li>
                    <li><strong>Aerotow launch - </strong> This method utilises a powered aircraft and a rope to tow the glider to a certain height. It’s much more expensive, but also gentler. </li>
                    <li>If you wish to try both, we recommend you try the aerotow first because it is much gentler and provides more height/time for flying. </li>
                </ul>
            `
        },
        {
            title:'Can I use a GoPro while flying?',
            content: `
                <ul>
                    <li>Ask your instructor! They will usually allow this if you ask nicely. </li>
                    <li>Prepare a suction mount. Ask a committee member/experienced member to help you mount it onto the glider canopy. </li>
                </ul>
            `
        },
        {
            title:'What does the Imperial College Gliding Club membership include?',
            content: `
                <ul>
                    <li>You will have access to our glider fleet (two-seater Grob 103, single-seater Discus, single-seater ASW 24). </li>
                    <li>You can join day trips on Saturdays and Sundays. The committee will organise transportation and find you an instructor. </li>
                    <li>The icGC could sign you up as a daily guest at Lasham for your first 3 trips. </li>
                    <li>You may receive a Lasham Gliding Society annual full membership through the icGC. As a Declared Training Organisation (DTO), Lasham requires their students to be full members after coming 3 times as guests. We have limited budget for purchasing Lasham memberships, they will only be given to committed and keen people who would come gliding regularly. </li>
                </ul>
            `
        },
        {
            title:'What is the first milestone if I am new to flying?',
            content: `
                <ul>
                    <li>Flying solo! </li>
                    <li>The Lasham website suggests the average number of training flights to solo is 80-120. </li>
                </ul>
            `
        },
        {
            title:'How can I obtain a license? ',
            content: `
                <ul>
                    <li>The Sailplane Pilot License (SPL) consists of Bronze and Cross-Country Endorsements. </li>
                    <li>The Bronze Endorsement includes a written theory test and a flying skills test. </li>
                    <li>The Cross-Country Endorsement includes a Navigation and Field Landing Test. </li>
                </ul>
            `
        },
        {
            title:'What if I have previous flying/gliding experience?',
            content: `
                <ul>
                    <li> 
                    <a 
                        href="mailto:gliding@imperial.ac.uk" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Come and talk to us! 
                    </a>
                    You might meet the requirements for flying one of our single-seaters (Discus or ASW 24). </li>
                </ul>
            `
        },
    ];

    return (
        <div className="faqs" id="faqs">
            <h1 className="heading">Frequently Asked Questions</h1>
            {accordionData.map((item, index) => (
                <div className="accordion-items" key={index}>
                    <div 
                        className="accordion-title-container"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >   
                        <div className="question-container">
                            <h2 className="questions">
                                {item.title}
                            </h2>
                            <div className="toggle">
                                {activeIndex === index ? '×' : '+' }
                            </div>
                        </div>
                    </div>
                    {activeIndex === index && (
                        <div className="content-container">
                            <div className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};