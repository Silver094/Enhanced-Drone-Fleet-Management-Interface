import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import './Dashboard.css';

function Dashboard() {
  const [data, setdata] = useState({drones:[]});
  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("http://localhost:8000/dashboard")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log("data fetching error");
      });
  },[]);
  return (
  <>
  <h2 >List of Drones</h2>
  <div className="cardComponent">
    {data.drones.map((drone,index)=>(
    <Card key={index} data={drone}/>
    ))} 
  </div>
  </>
)}
export default Dashboard;
