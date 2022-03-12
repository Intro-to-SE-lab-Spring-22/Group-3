import React from 'react';
import { useRef, useState } from "react";
import { signUp, logIn, useAuth } from "./firebase";
import { Button } from "@material-ui/core";
import "./Login.css";
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';
import { Email, RestoreOutlined } from '@material-ui/icons';


function Login() {
    //const [ loggedIn, setLoggedIn ] = useState(false);
    //const [ loading, setLoading ] = useState(false);
    //const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();
    

    async function handleSignup() {
        //setLoading(true);
        await signUp(emailRef.current.value, passwordRef.current.value)
        //setLoading(false);
    }

    async function handleLogin() {
        //setLoading(true);
        //const [state, dispatch] = useStateValue();
        await logIn(emailRef.current.value, passwordRef.current.value)
        //setLoading(false);
    }
   
    return (
        <div className='login'>
                <div className="loginLogo">
                    <img
                      src="logo002.png"
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

                <Button type="submit"  onClick={ handleSignup } >
                    Sign Up
                </Button>
        </div>
    );
}

export default Login;
