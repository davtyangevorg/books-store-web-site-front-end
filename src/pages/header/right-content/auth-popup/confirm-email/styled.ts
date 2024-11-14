import styled from "styled-components";

export const CodeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  margin-top: 50px;
`;

export const CodeInput = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  font-size: 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background-color: #f7fafc;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const Button = styled.button<{ disabled: boolean }>`
  padding: 0.5rem;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#ff6128")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  height: 36px;
  &:hover {
    background-color: #ff6128;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
