import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;
