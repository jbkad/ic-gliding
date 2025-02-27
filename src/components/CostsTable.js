import React from "react";
import "../styles/components/costs-table.scss";

export default function CostsTable() {
  return (
    <table className="costs">
      <tbody>
        <tr>
          <td className="heading">Membership</td>
          <td>£50</td>
        </tr>
        <tr>
          <td className="heading">Winch Launch</td>
          <td>
            <div>£10</div>
            <div className="note">
              • 10 min flight = £13 (Majority of your training will cost this)
            </div>
            <div className="note">• 30 min flight = £19</div>
            <div className="note">• 1 hour flight = £28</div>
          </td>
        </tr>
        <tr>
          <td className="heading">Aerotow Launch</td>
          <td>
            £43 <div className="note"> to 2000ft</div>{" "}
          </td>
        </tr>
        <tr>
          <td className="heading">Soaring Fees</td>
          <td>
            <div>£30p/min</div>
            <div className="note">Min charge: 7 mins</div>
            <div className="note">Max charge: 2.5 hrs</div>
          </td>
        </tr>
        <tr>
          <td className="heading">Weekend Trip Fee: Train</td>
          <td>£12</td>
        </tr>
        <tr>
          <td className="heading">Weekend Trip Fee: Minibus</td>
          <td>£16</td>
        </tr>
        <tr>
          <td className="heading">Student Daily Hire</td>
          <td>£30</td>
        </tr>
        <tr>
          <td className="heading">Alumni Daily Hire</td>
          <td>£35</td>
        </tr>
      </tbody>
    </table>
  );
}
