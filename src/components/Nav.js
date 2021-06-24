import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #add8e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 2%;
  padding: 3%;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  .image-wrapper img {
    width: 150px;
  }

  .nav {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }

  .nav a {
    opacity: 70%;
    margin: 1%;
    padding: 4%;
    background-color: #0b3d91;
    color: whitesmoke;
    border-radius: 5px;
    text-align: center;
    font-size: 1.8rem;
    &:hover {
      background-color: #fc3d21;
      font-weight: bold;
      transform: scale(1.1);
      transition: all 0.35s ease-in-out;
    }
    transition: all 0.35s ease-in-out;
  }
`;

export default function Nav() {
  const linksArray = [
    { name: "Home", id: "1", href: "index.html" },
    { name: "About", id: "2", href: "index.html" },
    { name: "Contact", id: "3", href: "index.html" },
  ];

  return (
    <StyledHeader>
      <div className="image-wrapper">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffontslogo.com%2Fwp-content%2Fuploads%2F2013%2F04%2FNASA-Logo-Font.jpg&f=1&nofb=1"
          alt="react-logo"
          className="nav-logo"
        />
      </div>

      <nav className="nav">
        {linksArray.map((link) => {
          return (
            <a href={link.href} key={link.id}>
              {link.name}
            </a>
          );
        })}
      </nav>
    </StyledHeader>
  );
}
