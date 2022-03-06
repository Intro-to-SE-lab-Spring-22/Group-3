import React from 'react';
import { Button } from "@material-ui/core";
import "./Login.css";
import {auth, provider} from "./firebase";
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }).catch((error) => alert(error.message))
    };

    return (
        <div className='login'>
            <div className="loginLogo">
                <img
                  src="https://www.hamiltoncountyhealth.org/wp-content/uploads/facebook-logo.jpg"
                  alt=""
                />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;