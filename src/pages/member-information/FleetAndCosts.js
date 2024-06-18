import React from "react";
import { data } from "../../website-data/fleet";
import CostsTable from "../../components/CostsTable";
import '../../styles/pages/fleet-costs.scss';

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