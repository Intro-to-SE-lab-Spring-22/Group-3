import React from "react";
import "./Signup.css";
import { Button } from "@material-ui/core";
import { useRef, useState } from "react";
import { signUp, logIn, useAuth } from "./firebase";

export default function Signup({setUser}) {

    const emailRef = useRef();
    const passwordRef = useRef();
    
    
    
    async function handleSignup() {
        await signUp(emailRef.current.value, passwordRef.current.value)
            .then((data) => {
                setUser(data.username);
            })
            
    }


    return (

        <div className="signup">

            <div className="email_input">
                <input ref={ emailRef } placeholder="Email" />
            </div>
    
            <div className="password_input">
                <input ref={ passwordRef } type="password" placeholder="Password" />
            </div>

            <Button type="submit"  onClick={ handleSignup } >
                    Sign Up
            </Button>
        </div>


    );
}

