import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/index';
import Nav from './components/Nav'
import PhotoCard from './components/PhotoCard'


function App() {
  const [ data, setData] = useState();
  return (
    <div className="App">
      <Nav/>
      {/* <PhotoCard/> */}
    </div>
  );
}

export default App;
