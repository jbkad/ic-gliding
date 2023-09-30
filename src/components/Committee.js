import React from "react";
import '../styles/Committee.css';

export default function Committee() {

    const committeeMembers = [
        {
            image: "assets/committee/Matthew.png",
            name: "Matthew Homa",
            position: "Captain",
            course: "Aeronautical Engineering",
            year: "3"
        },
        {
            image: "assets/committee/Sam.png",
            name: "Sam Manyak",
            position: "Vice Captain",
            course: "Product Design",
            year: "2 Masters"
        },
        {
            image: "assets/committee/Lincoln.png",
            name: "Lincoln Hung",
            position: "Secretary",
            course: "Aeronautical Engineering",
            year: "4"
        },
        {
            image: "assets/committee/Alfred.png",
            name: "Alfred Beadman",
            position: "Junior Treasurer",
            course: "Medicine",
            year: "3"
        },
        {
            image: "assets/committee/Aidan.png",
            name: "Aidan Clark",
            position: "Publicity",
            course: "Aeronautical Engineering",
            year: "2"
        },
        {
            image: "assets/committee/Alex.png",
            name: "Alexander Hook",
            position: "Equipment Officer",
            course: "Aeronautical Engineering",
            year: "4"
        },
        {
            image: "assets/committee/Tomasz.png",
            name: "Tomasz Tomaszewski",
            position: "Committee Member",
            course: "Design Engineering",
            year: "3"
        },
    ]

    return (
        <div className="committee">
            <div className="headers">
                <h1>Commitee</h1>
                <h4>Here are your 2023/24 commitee members</h4>
            </div>
            <div className="grid">
                {committeeMembers.map((member, index) => (
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