import { useContext, useEffect } from "react";
import { TBook } from "../types";
import { BACKEND_API_URL } from "../consts";
import { GlobalContext } from "../context/global.context";

export const useCart = () => {
  const { setCart, isUserLoggedIn } = useContext(GlobalContext);

  const handleAddToCart = async (book: TBook) => {
    const request = await fetch(`${BACKEND_API_URL}/cart/add`, {
      method: "POST",
      body: JSON.stringify({ book }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (request.ok) {
      const data = await request.json();
      setCart(data);
    } else {
      alert(request.statusText);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      const request = await fetch(`${BACKEND_API_URL}/cart`, {
        credentials: "include",
      });
      const data = await request.json();

      if (request.ok) {
        setCart(data);
      } else {
        alert(request.statusText);
      }
    };
    if (isUserLoggedIn) {
      fetchCart();
    }
  }, [isUserLoggedIn]);

  return { handleAddToCart };
};
