import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgetStatus] = useState(false);
  const cars = useSelector(selectCars);
  // console.log(cars);
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgetStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgetStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index} href="">
                {car}
              </a>
            </li>
          ))}

        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-In</a>
        </li>
        <li>
          <a href="">Roadster</a>
        </li>

        <li>
          <a href="">Commercial Energy</a>
        </li>
        <li>
          <a href="">Utilities</a>
        </li>
        <li>
          <a href="">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  top: 0;

  a {
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 50px;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
    a {
      font-weight: 500;
      color: #323333;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 230px; /*Potentially*/
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
