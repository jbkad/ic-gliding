import React from "react";
import { data } from "../website-data/committeeMembers";
import '../styles/components/committee.scss';

export default function Committee() {

    return (
        <div className="committee">
            <div className="member">
                {data.map((member, index) => (
                    <div className="profile wallet" key={index}>
                        <img 
                            src={member.image}
                            alt={`${member.name}`}
                            className="headshot"
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