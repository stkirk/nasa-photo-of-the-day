import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_KEY, BASE_URL } from "./constants/index";
import Nav from "./components/Nav";
import PhotoCard from "./components/PhotoCard";
import styled from "styled-components";

const StyledGallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&count=8`)
      .then((res) => {
        console.log("RES.data", res.data);
        setData(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <Nav />
      <StyledGallery>
        {data.map((obj) => {
          return obj.media_type === "image" ? (
            <PhotoCard key={obj.date} data={obj} />
          ) : null;
        })}
      </StyledGallery>
    </div>
  );
}

export default App;
