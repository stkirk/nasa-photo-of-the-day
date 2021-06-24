import React, { useState } from "react";
import Detail from "./Detail";
import styled from "styled-components";

const StyledPhotoDiv = styled.div``;

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
