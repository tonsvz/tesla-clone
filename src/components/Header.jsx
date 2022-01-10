import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
        <p>
          <a href="#">Solar Roof</a>
        </p>
        <p>
          <a href="#">Solar Panel</a>
        </p>
      </Menu>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  top: 0;

  p {
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
