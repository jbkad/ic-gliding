import React from "react";
import { data } from "../website-data/committeeMembers";
import '../styles/components/Committee.scss';

export default function Committee() {

    return (
        <div className="committee">
            <div className="headers">
                <h1>Commitee</h1>
                <h4>Here are your 2023/24 commitee members</h4>
            </div>
            <div className="grid">
                {data.map((member, index) => (
                    <div className="card" key={index}>
                        <img 
                            src={member.image}
                            alt={`${member.name}`}
                            className="profile-img"
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