import { useEffect, useContext } from "react";
import { BACKEND_API_URL } from "../consts";
import { GlobalContext } from "../context/global.context";

export const useUser = () => {
  const { setUserData } = useContext(GlobalContext);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`${BACKEND_API_URL}/users`, {
        credentials: "include",
      });
      const data = await response.json();
      if (data.id) {
        setUserData(data);
      }
    };
    fetchUser();
  }, [setUserData]);
};
