import { useState } from "react";
import * as Styled from "./styled";
import useAuth from "./hooks";
import ConfirmEmailContent from "./confirm-email";

interface AuthPopupProps {
  onClose: () => void;
}

export default function AuthPopup({ onClose }: AuthPopupProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signUp, signIn, error, isLoading, emptyError, confirmEmail } =
    useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    if (isSignUp) {
      signUp(email, password, username);
    } else {
      signIn(email, password);
    }
    emptyError();
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    emptyError();
  };

  return (
    <Styled.Overlay onClick={onClose}>
      <Styled.PopupContainer onClick={(e) => e.stopPropagation()}>
        <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>

        {confirmEmail ? (
          <ConfirmEmailContent confirmEmail={confirmEmail} />
        ) : (
          <>
            <Styled.Title>{isSignUp ? "Sign Up" : "Sign In"}</Styled.Title>
            {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}

            <Styled.Form onSubmit={handleSubmit}>
              {isSignUp && (
                <Styled.Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              )}
              <Styled.Input
                type={`${isSignUp ? "email" : "text"}`}
                placeholder={`${isSignUp ? "Email" : "Email or Username"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Styled.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Styled.Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Styled.LoadingSpinner />
                ) : isSignUp ? (
                  "Sign Up"
                ) : (
                  "Sign In"
                )}
              </Styled.Button>
            </Styled.Form>

            <Styled.ToggleText>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <Styled.ToggleLink onClick={toggleMode}>
                {isSignUp ? "Sign In" : "Sign Up"}
              </Styled.ToggleLink>
            </Styled.ToggleText>
          </>
        )}
      </Styled.PopupContainer>
    </Styled.Overlay>
  );
}
