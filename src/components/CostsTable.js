import React from "react";
import "../styles/components/costs-table.scss";

export default function CostsTable() {

    return (
        <table className="costs">
            <tbody>
                <tr>
                    <td className="heading">Membership</td>
                    <td>£50</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td className="heading">Winch Launch</td>
                    <td>£10</td>
                    <td>
                        <div>• 10 minute flight off a winch: £13. The vast majority of your training will cost this. </div>
                        <div>• 30 minute flight off a winch: £19</div>
                        <div>• 1 hour flight off a winch: £28 </div>
                    </td>
                </tr>
                <tr>
                    <td className="heading">Aerotow Launch</td>
                    <td>£43 <div className="note"> to 2000ft</div> </td>
                    <td>20 minute flight from a 2000ft aerotow: £49 </td>
                </tr>
                <tr>
                    <td className="heading">Soaring Fees</td>
                    <td>
                        <div>£30p/min</div>
                        <div className="note">Minimum charge: 7 mins</div> 
                        <div className="note">Maximum charge: 2.5 hrs</div>
                    </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td className="heading">Weekend Trip Fee: Train</td>
                    <td>£12</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td className="heading">Weekend Trip Fee: Minibus</td>
                    <td>£16</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td className="heading">Student Daily Hire</td>
                    <td>£30</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td className="heading">Alumni Daily Hire</td>
                    <td>£35</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    );
}