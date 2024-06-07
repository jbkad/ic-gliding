import React from "react";
import CostsTable from "../../components/CostsTable";
import '../../styles/pages/fleet-costs.scss';

const data = [
    {
        name: "496: Grob Twin Acro III",
        image: require("../../assets/fleet/496.png"),
        description: "496 is our Grob Twin Acro III. It will likely be the first glider that you fly in and it is used for training. The seats are arranged in a tandem position with one in front of the other. Both seats have a full set of controls and instruments allowing it to be flown from the front or back seat. 496 is used for pre-solo training and some of your first solo flights may also be done in it.",
    },
    {
        name: "296: Discus bW",
        image: require("../../assets/fleet/296.png"),
        description: "296 is one of our two single seat gliders used for cross-country flying and is the first of the Imperial single-seat gliders that you can convert to. It is a very capable cross-country glider despite its age and has achieved some very respectable results in competitions whilst being flown by our members. It is very nice to fly and is suitable for both inexperienced pilots and those with hundreds of hours." ,
    },
    {
        name: "96: ASW24",
        image: require("../../assets/fleet/96.png"),
        description: "96 is our highest performance single seater and the pride of our fleet. It has been used for a huge range of cross-country competitions including some international competitions. ",
    },
];

export default function FleetAndCosts() {
    return (
        <div className="fleet-costs">
            <h1 className="heading">Our fleet and costs</h1>
            <section className="section-1">
                <h2 className="subheading">Fleet</h2>
                <p className="body">Imperial College Gliding Club has arguably the best fleet of any university gliding club in the country. We have 3 gliders, one two-seat training aircraft and two high-performance single seat gliders.  </p>
                {data.map((model, index) => (
                    <div className="card" key={index}>
                        <div className="container">
                            <div className="fleet">
                                <h3 className="name">{model.name}</h3>
                                <p className="description">{model.description}</p>
                            </div>
                            <div className="photo">
                                <img 
                                    src={model.image} 
                                    alt={`${model.name}`} 
                                    className="img" 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className="section-2">
                <h2 className="subheading">Costs</h2>
                <p className="body">Here are the general costs of gliding with ICGC.</p>
                <CostsTable />
            </section>
        </div>
    );
}