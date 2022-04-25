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

  function EditProfile() {

    return (
        <div className="set_picture">
            <p>hello</p>
        </div>

    );
  }

  export default EditProfile;