import React from "react";
import Chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentHeader.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main
      style={{ height: "600px" }}
      className="row d-flex align-items-center appointment-header"
    >
      <div className="col-md-4 offset-md-1 mt-2 pt-5">
        <h1 style={{ color: "#1CC7C1" }}>APPOINTMENT</h1>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6 img-fluid pt-5">
          <img style={{maxWidth: '100%', height:'auto'}} src={Chair} alt="" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
