import React from "react";
import "../styles/components/CostsTable.css";

export default function CostsTable() {

    return (
        <>
            <table className="costs-table">
                <thead>
                    <tr>
                        <th className="heading">Item</th>
                        <th className="heading">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Membership*</td>
                        <td>£50</td>
                    </tr>
                    <tr>
                        <td>Winch Launch</td>
                        <td>£10</td>
                    </tr>
                    <tr>
                        <td>Aerotow Launch</td>
                        <td>£43 {" "}
                            <span className="note">to 2000ft</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Soaring Fees
                            <div className="note">Minimum charge: 7 mins</div> 
                            <div className="note">Maximum charge: 2.5 hrs</div>
                        </td>
                        <td>£30p/min</td>
                    </tr>
                    <tr>
                        <td>Weekend Trip Fee: Train</td>
                        <td>£12</td>
                    </tr>
                    <tr>
                        <td>Weekend Trip Fee: Minibus</td>
                        <td>£16</td>
                    </tr>
                    <tr>
                        <td>Student Daily Hire</td>
                        <td>£30</td>
                    </tr>
                    <tr>
                        <td>Alumni Daily Hire</td>
                        <td>£35</td>
                    </tr>
                </tbody>
            </table>

        <br />

            <table className="costs-table">
                <thead>
                    <tr>
                        <th className="heading">Example</th>
                        <th className="heading">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10 minute flight off a winch 
                            <div className="note">The vast majority of your training will cost about this. </div>
                        </td>
                        <td>£13</td>
                    </tr>
                    <tr>
                        <td>30 minute flight off a winch</td>
                        <td>£19</td>
                    </tr>
                    <tr>
                        <td>1 hour flight off a winch</td>
                        <td>£28</td>
                    </tr>
                    <tr>
                        <td>20 minute flight from a 2000ft aerotow</td>
                        <td>£49</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}