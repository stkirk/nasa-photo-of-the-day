import React, { useState } from "react";
import Detail from "./Detail";
import styled from "styled-components";

const StyledPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #add8e6;
  border: 3px solid lightgrey;
  border-radius: 5px;
  margin: 1% 0;
  padding: 3%;
  width: 100%;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fc3d21;
    padding-bottom: 2%;
  }

  .image-wrapper {
    width: 90%;
  }
  img {
    width: 100%;
  }
  .view-details-button {
    width: 20%;
  }

  button {
    opacity: 70%;
    width: 100%;
    margin: 3% 0;
    padding: 3%;
    background-color: #0b3d91;
    color: whitesmoke;
    border-radius: 5px;
    text-align: center;
    font-size: 1.8rem;
    border: none;
    &:hover {
      background-color: #fc3d21;
      font-weight: bold;
      transform: scale(1.1);
      transition: all 0.35s ease-in-out;
    }
    transition: all 0.35s ease-in-out;
  }
`;

export default function PhotoCard(props) {
  const { data } = props;

  const [currentDetail, setCurrentDetail] = useState(null);

  const openDetail = () => {
    setCurrentDetail(true);
  };
  const closeDetail = () => {
    setCurrentDetail(null);
  };

  // console.log(props)
  return (
    <StyledPhotoDiv className="photo-card">
      <h2>{data.title}</h2>
      <div className="image-wrapper">
        <img src={data.url} alt="NASA thing of the day" />
      </div>
      <div className="view-details-button">
        <button onClick={openDetail}>View Info</button>
      </div>
      {currentDetail && <Detail details={data} closeDetail={closeDetail} />}
    </StyledPhotoDiv>
  );
}
