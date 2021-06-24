import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2%;
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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1yjjnpx0p53s8.cloudfront.net%2Fstyles%2Flogo-thumbnail%2Fs3%2F092011%2Fnasa20logo.gif%3Fitok%3DMbhNjHMG&f=1&nofb=1"
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
