import { useState } from "react";
import { BACKEND_API_URL } from "../../../../consts";

export default function useAuth() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState("");

  const signUp = async (email: string, password: string, username: string) => {
    setIsLoading(true);
    const response = await fetch(`${BACKEND_API_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify({ email, password, username }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      const data = await response.json();
      setConfirmEmail(data.email);
    } catch (error) {
      setError(`Error fetching data: ${error}`);
    }
    setIsLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    const response = await fetch(`${BACKEND_API_URL}/auth/signin`, {
      method: "POST",
      body: JSON.stringify({ usernameOrEmail: email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    try {
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      setError(`Error fetching data: ${error}`);
    }
    setIsLoading(false);
  };

  const emptyError = () => {
    setError(null);
  };

  return { signUp, signIn, error, isLoading, emptyError, confirmEmail };
}
