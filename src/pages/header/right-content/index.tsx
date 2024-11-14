import { useContext, useState } from "react";
import * as Styled from "./styled";
import AuthPopup from "./auth-popup";
import { GlobalContext } from "../../../context/global.context";
import { BACKEND_API_URL } from "../../../consts";

export default function RightContent() {
  const { userData, setUserData } = useContext(GlobalContext);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  const handleSignOut = async () => {
    const response = await fetch(`${BACKEND_API_URL}/auth/signout`, {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      setUserData(null);
    }
  };

  return (
    <>
      {userData && <Styled.UserName>{userData.name}</Styled.UserName>}
      {userData ? (
        <Styled.SignInButton onClick={handleSignOut}>
          Log Out
        </Styled.SignInButton>
      ) : (
        <Styled.SignInButton onClick={() => setIsAuthPopupOpen(true)}>
          Sign In
        </Styled.SignInButton>
      )}

      {isAuthPopupOpen && (
        <AuthPopup onClose={() => setIsAuthPopupOpen(false)} />
      )}
    </>
  );
}
