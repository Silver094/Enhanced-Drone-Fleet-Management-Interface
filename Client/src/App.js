import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";

function App() {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setdata] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data using Axios
    const data = {};
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log("data fetching error");
      });
  });
  const handleLogin = () => {
    if(data.username===username&&data.password===password)
      navigate("/dashboard");
    else
      alert("Invalid Credentials");
  };
  return (
    <div className="App">
      <h1> Enhanced Drone Fleet Management</h1>
      <div className="container-sm">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              UserName
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter the UserName...."
              value={username}
              onChange={(e) => SetUsername(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" class="btn btn-dark" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
