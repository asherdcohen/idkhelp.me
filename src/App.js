import React from 'react';
import Navbar from './components/Navbar';
import Firstrow from "./components/Firstrow";
import Secondrowleft from "./components/Secondrowleft";
import Secondrowright from "./components/Secondrowright";
import "./components/Firstrow.css"; // Add correct import path for FirstRow.css
import "./components/Secondrowleft.css";
import "./components/Secondrowright.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const App = () => {
  return (
    <div style={{
      backgroundColor: "#f9f9fb"
    }}>
      <div>
        {/* Render the Navbar */}
        <ToastContainer />
        <Navbar />
        {/* Add the rest of your landing page content here */}
      </div>
      <div className="main-container" style={{
        backgroundColor: "#f9f9fb"
      }}>
        <Firstrow />
        {/* Move Secondrowleft here to place it before Secondrowright */}
        <div style={{
          display: "flex",
          verticalAlign: "top"
        }}>
          <Secondrowleft />
          {/* Add Secondrowright component here */}
          <Secondrowright />
        </div>
      </div>
    </div>
  );
};

export default App;
