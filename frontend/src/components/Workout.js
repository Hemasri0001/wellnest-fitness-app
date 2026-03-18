import React, { useState, useEffect } from "react";
import axios from "axios";

function Workout() {

  const [workout, setWorkout] = useState({
    workoutType: "",
    duration: "",
    date: ""
  });

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const response = await axios.get("http://localhost:8081/workouts");
    setWorkouts(response.data);
  };

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const saveWorkout = async () => {
    await axios.post("http://localhost:8081/workouts", workout);
    alert("Workout saved!");
    setWorkout({ workoutType: "", duration: "", date: "" });
    fetchWorkouts();
  };

  const deleteWorkout = async (id) => {
    await axios.delete(`http://localhost:8081/workouts/${id}`);
    fetchWorkouts();
  };

  const totalWorkouts = workouts.length;
  const totalMinutes = workouts.reduce((sum, w) => sum + Number(w.duration), 0);

  return (
    <div>

      <h2>Add Workout</h2>

      <input
        name="workoutType"
        placeholder="Workout Type"
        value={workout.workoutType}
        onChange={handleChange}
      /><br/>

      <input
        name="duration"
        placeholder="Duration (minutes)"
        value={workout.duration}
        onChange={handleChange}
      /><br/>

      <input
        name="date"
        placeholder="Date"
        value={workout.date}
        onChange={handleChange}
      /><br/>

      <button onClick={saveWorkout}>Save Workout</button>

      <hr/>

      <h2>Workout Summary</h2>

      <p>Total Workouts: {totalWorkouts}</p>
      <p>Total Minutes Exercised: {totalMinutes}</p>

      <hr/>

      <h2>Workout List</h2>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Workout</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {workouts.map((w) => (
            <tr key={w.id}>
              <td>{w.id}</td>
              <td>{w.workoutType}</td>
              <td>{w.duration}</td>
              <td>{w.date}</td>
              <td>
                <button onClick={() => deleteWorkout(w.id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Workout;