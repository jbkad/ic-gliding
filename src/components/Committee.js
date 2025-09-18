import React from "react";
import { data } from "../website-data/committeeMembers";
import "../styles/components/committee.scss";

export default function Committee() {
  const handleEmptyProfile = (e) => {
    e.target.src = "assets/committee/profile.jpeg";
  };

  return (
    <div className="committee">
      <div className="member">
        {data.map((member, index) => (
          <div className="profile" key={index}>
            {/* <img
              src={
                `assets/committee/${member.name}.png` ||
                "assets/committee/profile.png"
              }
              alt={member.name}
              className="headshot"
              onError={handleEmptyProfile}
            /> */}
            <div className="col-2">
              <div className="position">{member.position}</div>
              <div className="name">{member.name}</div>
              {/* <div className="course">{member.course}</div> */}
              {/* <div className="year"> Year {member.year}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
