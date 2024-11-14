import styled from "styled-components";

export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #ff6128;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6128;
  }
`;

export const UserName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`;
