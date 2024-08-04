import React, { useState } from "react";
import "./Card.css";
function Card({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card" onClick={handleToggle}>
      <div className="card-body">
        <h5 className="card-title">{data.id}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {data.status}
        </h6>
        <p className="card-text">
          Last Known Location: {data.last_known_location.join(", ")} <br />
         
        </p>
      </div>
      {isExpanded && (
        <div style={{display:"flex", marginRight:"30px"}}>
          <div className="card-body">
            Flight Hours: {data.flight_hours} <br />
            Battery Status: {data.battery_status} <br />
            Current Mission: {data.current_mission}
            </div>
            <div className="card-body">
          <h6 className="card-subtitle mb-2 text-body-ternary">
            Maintenance Logs:
          </h6>
          <ul>
            {data.maintenance_logs.map((log, index) => (
              <li key={index}>
                Date: {log.date} <br />
                Description: {log.description} <br />
                Technician: {log.technician}
              </li>
            ))}
          </ul>
        </div>
        </div>
      )}
    </div>
  );
}

export default Card;
