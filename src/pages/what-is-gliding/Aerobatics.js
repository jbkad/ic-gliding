import React from "react";
import '../../styles/pages/aerobatics.scss';
import AerobaticsVideo from "../../components/gliding-videos/AerobaticsVideo";

export default function Aerobatics() {
    return (
        <div className="aerobatics">
            <h1 className="heading">Aerobatics</h1>
            <p className="body">For those who don’t wish to take part in cross-country gliding there are other opportunities to further your flying experience through aerobatics training. There are 5 levels of aerobatics badges that can be achieved progressing in complexity of the manoeuvres that you are allowed to perform. We have several members who are very competent aerobatic pilots who will be more than happy to provide guidance about aerobatic flying. </p>
            
            <div className="card">
                <div className="container">
                    <AerobaticsVideo />
                    <div className="caption">Here's a video displaying aerobatic gliding.</div>
                </div>
            </div>
        </div>
    );
}