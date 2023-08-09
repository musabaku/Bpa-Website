import React, { Fragment } from 'react';
import { FaHome, FaUsers, FaProjectDiagram, FaMoneyBillWave } from 'react-icons/fa';
import "./CountStats.css";

const CountStats = () => {
  const statsData = [
    {
      icon: FaHome,
      number: "1900+",
      title: "UNITS"
    },
    {
      icon: FaUsers,
      number: "27000+",
      title: "INTERVIEWS"
    },
    {
      icon: FaProjectDiagram,
      number: "290+",
      title: "PROJECTS"
    },
    {
      icon: FaMoneyBillWave,
      number: "950+",
      title: "MILLION TURNOVER"
    }
  ];

  return (
    <Fragment>
      <div className="countStats-box">
        <h2>Numbers Say It All</h2>
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div className="stats-card" key={index}>
              <div className="stats-icon">{<stat.icon />}</div>
              <p className="stats-number">{stat.number}</p>
              <p className="stats-text">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CountStats;
