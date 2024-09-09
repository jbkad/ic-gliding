import React from "react";
import { data } from "../website-data/committeeMembers";
import '../styles/components/committee.scss';

export default function Committee() {

    const handleEmptyProfile = (e) => {
        e.target.src = 'assets/committee/profile.jpeg';
    };

    return (
        <div className="committee">
            <div className="member">
                {data.map((member, index) => (
                    <div className="profile wallet" key={index}>
                        <img 
                            src={`assets/committee/${member.name}.png`}
                            alt={member.name}
                            className="headshot"
                            onError={handleEmptyProfile}
                        />
                        <div className="name">{member.name}</div>
                        <div className="position">{member.position}</div>
                        <div className="course">{member.course}</div>
                        <div className="year"> Year {member.year}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}