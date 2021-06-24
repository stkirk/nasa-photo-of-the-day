import React from "react";
import styled from "styled-components";

const StyledDetail = styled.div`
  color: #0b3d91;
  h4 {
    text-align: center;
    font-size: 2rem;
    margin: 2% 0;
  }
  p {
    font-size: 1.7rem;
  }
  .copyright {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2%auto;
  }
  #close-btn {
    width: 20%;
    padding: 2%;
    margin: 0 40%;
  }
`;

export default function Detail(props) {
  const { details, closeDetail } = props;
  // console.log('detail props', details)
  return (
    <StyledDetail className="details-container">
      <h4>{details.date}</h4>
      <p>{details.explanation}</p>
      {details.copyright && (
        <p className="copyright">Copyright: {details.copyright}</p>
      )}
      <button id="close-btn" onClick={closeDetail}>
        Close
      </button>
    </StyledDetail>
  );
}
