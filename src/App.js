import React from "react";
import './App.css';
import Login from "./Login";
import Header from "./Header";
import Body from "./Body";
import { useAuth } from "./firebase";



function App() {
  const currentUser = useAuth();
  return (

    <div className="app">
      {!currentUser ? ( <Login /> ) : (
        <>
          
          <Header />
          <div className="app_body">
            <Body />
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
