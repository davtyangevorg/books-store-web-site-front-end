import { useState } from "react";
import * as Styled from "./styled";
import { BACKEND_API_URL } from "../../../../../consts";

export default function ConfirmEmailContent(props: { confirmEmail: string }) {
  const [confirmationCode, setConfirmationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...confirmationCode];
    newCode[index] = value;
    setConfirmationCode(newCode);

    // Move focus to the next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleConfirm = async () => {
    const code = confirmationCode.join("");
    const response = await fetch(`${BACKEND_API_URL}/auth/verify`, {
      method: "POST",
      body: JSON.stringify({
        email: props.confirmEmail,
        code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      //refresh the page
      window.location.reload();
    } else {
      console.error("Failed to verify email");
    }
  };

  return (
    <div>
      <div>
        "User created successfully. Please check your email there is a
        verification code.Take it and write it here. inside the input field.",
      </div>

      <Styled.CodeInputContainer>
        {confirmationCode.map((digit, index) => (
          <Styled.CodeInput
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            required
          />
        ))}
      </Styled.CodeInputContainer>

      <Styled.Button
        disabled={confirmationCode.length !== 6}
        onClick={handleConfirm}
      >
        Confirm
      </Styled.Button>
    </div>
  );
}
