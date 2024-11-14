import styled from "styled-components";

// Styled components
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  position: relative;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export const SocialButton = styled(Button)`
  background-color: #ff6128;

  &:hover {
    background-color: #ff6128;
  }
`;

export const ToggleText = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

export const ToggleLink = styled.span`
  color: #ff6128;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #666;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #501d1d;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
