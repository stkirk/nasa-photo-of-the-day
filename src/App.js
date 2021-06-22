import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants/index';
import Nav from './components/Nav'
import PhotoCard from './components/PhotoCard'


function App() {
  const [ data, setData] = useState();

  useEffect(() => {
    console.log('REQUEST URL:', `${BASE_URL}?api_key=${API_KEY}`);
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log('RES', res.data)
      setData(res.data)
    })
    .catch(err => {debugger})
  }, [])

  return (
    <div className="App">
      <Nav/>
      <PhotoCard data={data} />
    </div>
  );
}

export default App;
