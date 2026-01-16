import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  position: absolute;
  width: 1000px;
  margin-top: 15px;
  height: 40px;

  margin-left: calc((100% - 1000px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 1000;
`;

export const NavBarLogo = styled.p`
  font-size: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
`;
