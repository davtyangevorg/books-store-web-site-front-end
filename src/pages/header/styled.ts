import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #3a2a2f;
  height: 10%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
  }
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CartLength = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
