import React from "react";
import Chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentHeader.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main
      style={{ height: "500px" }}
      className="row d-flex align-items-center appointment-header"
    >
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>APPOINTMENT</h1> <br />
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6 ms-5">
        <img style={{ height: "360px" }} src={Chair} alt="" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
