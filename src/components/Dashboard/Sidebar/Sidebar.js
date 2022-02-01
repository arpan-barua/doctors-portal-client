import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faHome, faTh, faUserInjured, faUserPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {  
        fetch('https://stark-sierra-96578.herokuapp.com/isDoctor',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsDoctor(data))
    }, []);

    const handleSignOut = () =>{
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        success: false
      }
      setLoggedInUser(signedOutUser);
    }

    return (
        <section>
            <div className="sidebar">
            <Link to="/dashboard"><FontAwesomeIcon icon={faTh}/> Dashboard</Link>
            <Link to="/home"><FontAwesomeIcon icon={faHome}/> Home</Link>
            <Link to="/appointmentScheduling"><FontAwesomeIcon icon={faCalendarCheck}/> Make Appointment</Link>
             {
              isDoctor && <div>
                 <Link to="/dashboard/allPatients"><FontAwesomeIcon icon={faUserInjured}/> Patients</Link>
                 <Link to="/dashboard/addDoctor"><FontAwesomeIcon icon={faUserPlus}/> Add Doctor</Link>
              </div>
             }
             <Link to="" onClick={handleSignOut}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>
             
            </div>
        </section>

      
    );
};

export default Sidebar;