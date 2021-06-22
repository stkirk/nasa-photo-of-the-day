import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index';
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
      
    </div>
  );
}

export default App;
