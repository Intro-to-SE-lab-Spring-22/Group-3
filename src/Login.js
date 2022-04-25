import React from 'react';
import { useRef, useState } from "react";
import { signUp, logIn, useAuth } from "./firebase";
import { Button } from "@material-ui/core";
import "./Login.css";
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';
import { Email, RestoreOutlined } from '@material-ui/icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
import Signup from './Signup';


function Login() {
    //const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();


    async function handleLogin() {
        const user = await logIn(emailRef.current.value, passwordRef.current.value)

    }

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) { 
        const uid = user.uid;
  }
});
    return (

                    
        <div className='login'>
                <div className="loginLogo">
                    <img
                      src="GitBooklogo.png"
                      alt=""
                      />
                </div>

                <div className="email_input">
                    <input ref={ emailRef } placeholder="Email" />
                </div>

                <div className="password_input">
                    <input ref={ passwordRef } type="password" placeholder="Password" />
                </div>



                <Button type="submit" onClick={ handleLogin }>
                    Log In
                </Button>

                <div className='mid'>
                    <p>
                        or
                    </p>
                </div>

                <div className="signupButton">
                    <Router>
                        <nav>
                            <Link to="signUp">Sign Up</Link>
                        </nav>
                        <Routes>
                            <Route path="signUp" element={<Signup />} />
                        </Routes>
                    </Router>
                </div>

        </div>
    );
}

export default Login;
