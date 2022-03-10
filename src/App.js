import React from "react";
import './App.css';
import Login from "./Login";
import Header from "./Header";
import Body from "./Body";
import { useAuth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { handleLogin } from "./Login";



function App() {
  //const [{ user }, dispatch] = useStateValue();
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
