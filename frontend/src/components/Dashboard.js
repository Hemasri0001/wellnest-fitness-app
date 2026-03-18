import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [workouts, setWorkouts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const workoutRes = await axios.get("http://localhost:8081/workouts");
    setWorkouts(workoutRes.data);

    const userRes = await axios.get("http://localhost:8081/auth/users");
    setUsers(userRes.data);

  };

  const totalMinutes = workouts.reduce(
    (sum, w) => sum + Number(w.duration),
    0
  );

  return (
    <div className="container mt-4">

      <h2>Fitness Dashboard</h2>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card p-3">
            <h4>Total Users</h4>
            <h2>{users.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h4>Total Workouts</h4>
            <h2>{workouts.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h4>Total Minutes</h4>
            <h2>{totalMinutes}</h2>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;