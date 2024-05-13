import React from "react";
import "../styles/components/CostsTable.scss";

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

            <strong>Example</strong>
            <li>10 minute flight off a winch (the vast majority of your training will cost about this) - £13 </li>
            <li>30 minute flight off a winch - £19 </li>
            <li>1 hour flight off a winch - £28 </li>
            <li>20 minute flight from a 2000ft aerotow - £49 </li>
        </>
    );
}