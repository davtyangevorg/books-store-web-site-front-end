import styled from "styled-components";

export const HeroTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  width: 801px;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  background-color: #ff6128;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6128;
  }
`;
