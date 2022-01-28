import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AppointmentScheduling from "./components/AppointmentScheduling/AppointmentScheduling/AppointmentScheduling";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/appointmentScheduling" element={<AppointmentScheduling/>}/>
        <Route path="/dashboard/appointment" element={<Dashboard/>}/>
        <Route path="/allPatients" element={<PrivateRoute><AllPatients/></PrivateRoute>}/>
        <Route path="/addDoctor" element={<PrivateRoute><AddDoctor/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
