import React from "react";
import AerobaticsVideo from "../../components/gliding-videos/AerobaticsVideo";

export default function Aerobatics() {
    return (
        <div id="aerobatics" className="aerobatics">
            <h1>Aerobatics</h1>
            <p>For those who don’t wish to take part in cross-country gliding there are other opportunities to further your flying experience through aerobatics training. There are 5 levels of aerobatics badges that can be achieved progressing in complexity of the manoeuvres that you are allowed to perform. We have several members who are very competent aerobatic pilots who will be more than happy to provide guidance about aerobatic flying. </p>
            
            <p>Here's a video displaying aerobatic gliding:</p>
            <AerobaticsVideo />
        </div>
    );
}