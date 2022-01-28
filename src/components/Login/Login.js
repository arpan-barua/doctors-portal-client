import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from 'firebase/compat/app';
// import "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useNavigate, useLocation } from 'react-router-dom';


const Login = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    
    let navigate = useNavigate();
    let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () =>{
    const googleProvider = new GoogleAuthProvider(); //firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(googleProvider)
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
    .then(res => {
    const {displayName, email} = res.user;
    const signedInUser = {
    isSignedIn: true,
    name:displayName,
    email:email,
    }
    setLoggedInUser(signedInUser);
    if(location.state?.from){
    navigate(location.state.from);
    }
    // history.replace(from);
 })
 .catch(err =>{
   console.log(err);
 })
 }

    const handleBlur = (e) =>{
        let isFieldValid;
        if(e.target.name === "email"){
         isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === "password"){
         const isPasswordValid = e.target.value.length > 6;
         const isPasswordHasDigit = /\d{1}/.test(e.target.value);
         isFieldValid = isPasswordValid && isPasswordHasDigit;
        }
        if(e.target.name === "name"){
         isFieldValid = e.target.value;
        }
        if(isFieldValid){
          let newUserInfo = {...loggedInUser};
          newUserInfo[e.target.name] = e.target.value;
          setLoggedInUser(newUserInfo);
        }
      }
     
      const handleSubmit = (e) =>{
     if(newUser && loggedInUser.email && loggedInUser.password){
      //  firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, loggedInUser.email, loggedInUser.password)
       .then(res => {
         const newUserInfo = {...loggedInUser};
         newUserInfo.error= '';
         newUserInfo.success = true;
         setLoggedInUser(newUserInfo);
       })
       .catch((error) => {
         const newUserInfo = {...loggedInUser};
         newUserInfo.error = error.message;
         newUserInfo.success = false;
         setLoggedInUser(newUserInfo);
       });
     }
     
     if(!newUser && loggedInUser.email && loggedInUser.password){
      //  firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
      const auth = getAuth();
      signInWithEmailAndPassword(auth, loggedInUser.email, loggedInUser.password)
       .then(res => {
         const newUserInfo = {...loggedInUser};
         newUserInfo.error= '';
         newUserInfo.success = true;
         setLoggedInUser(newUserInfo);
         if(location.state?.from){
          navigate(location.state.from);
          }
       })
         
       .catch((error) => {
         const newUserInfo = {...loggedInUser};
         newUserInfo.error = error.message;
         newUserInfo.success = false;
         setLoggedInUser(newUserInfo);
       });
     }
     
     e.preventDefault();
      }
    return (
        <div>
            <div className="body">
            <div className="login-area">
                {newUser ? <h3>Create an account</h3> : <h3>Login</h3>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input className='form-control' type="text" name="name" onBlur={handleBlur} id="" placeholder="Your Name" required/>}
                    <br/>
                    <input className='form-control' type="text" name="email" onBlur={handleBlur} id="" placeholder="Your Email address" required/>
                    <br/>
                    <input className='form-control' type="password" name="password" onBlur={handleBlur} id="" placeholder="Your Password" required/>
                    <br/>
                    {newUser && <input className='form-control' type="password" name="confirm-password" onBlur={handleBlur} id="" placeholder="Confirm Password" required/>}
                    <br/>
                    <input className='form-control btn btn-danger' type="submit" value={newUser ? 'Sign Up' : 'Login'}/>
                </form>
                <br/>
                
                <input type="checkbox" name="newUser" onChange={()=>setNewUser(!newUser)} id=""/>
     <label htmlFor="newUser">New User Sign up</label>
     <p style={{color:'red'}}>{loggedInUser.error}</p>
     {loggedInUser.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} Successfully</p>}
            </div>
            
            </div>
            <div className="google-btn">
              <button className="btn btn-light" onClick={handleGoogleSignIn}> Continue with Google </button>
            </div>
        </div>
    );
};

export default Login;