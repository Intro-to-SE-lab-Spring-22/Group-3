import React from "react";
import './App.css';
import Login from "./Login";
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? ( <Login /> ) : (
        <>
          <header className="App-header">
        
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
       
          </header>

        </>
      )}
      
    </div>
  );
}

export default App;
