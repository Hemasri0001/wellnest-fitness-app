import React from "react";

function Home() {
  return (
    <div className="container mt-4">

      <h1 className="text-center">WellNest Smart Health & Fitness Companion</h1>

      <p className="text-center mt-3">
        Track your workouts, monitor your fitness progress,
        and stay motivated on your health journey.
      </p>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h4>Register</h4>
            <p>Create your fitness profile</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h4>Workout Tracker</h4>
            <p>Log and monitor your workouts</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h4>Dashboard</h4>
            <p>View your fitness statistics</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;