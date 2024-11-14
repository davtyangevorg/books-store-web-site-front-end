import { useContext, useMemo } from "react";
import { createPortal } from "react-dom";
import { GlobalContext } from "../../../context/global.context";

import * as Styled from "./styled";
import { BACKEND_API_URL } from "../../../consts";

export default function CartPopup(props: {
  isEmpty: boolean;
  onClose: () => void;
}) {
  const { isEmpty, onClose } = props;
  const { cart, setCart } = useContext(GlobalContext);
  const { books } = cart || {};

  const updateBookQuantity = async (bookId: string, quantity: number) => {
    const response = await fetch(`${BACKEND_API_URL}/cart/update/${bookId}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      setCart(data);
    } else {
      alert(response.statusText);
    }
  };

  const incrementQuantity = (bookId: string, quantity: number) => {
    updateBookQuantity(bookId, quantity + 1);
  };

  const decrementQuantity = (bookId: string, quantity: number) => {
    updateBookQuantity(bookId, quantity - 1);
  };

  const removeBook = async (bookId: string) => {
    const response = await fetch(`${BACKEND_API_URL}/cart/remove/${bookId}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();
    if (response.ok) {
      setCart(data);
    } else {
      alert(response.statusText);
    }
  };

  const total = useMemo(() => {
    return books?.reduce((sum, book) => {
      return (sum += book.quantity * book.price);
    }, 0);
  }, [books]);

  return createPortal(
    <Styled.Overlay onClick={onClose}>
      <Styled.PopupContainer onClick={(e) => e.stopPropagation()}>
        <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>

        {isEmpty ? (
          <div>Cart is empty</div>
        ) : (
          <Styled.CartContainer>
            <Styled.Title>Cart</Styled.Title>

            {books && books.length > 0 ? (
              <>
                {books.map((book) => (
                  <Styled.BookItem key={book.id}>
                    <Styled.BookImage src={book.thumbnail} alt={book.name} />
                    <Styled.BookInfo>
                      <Styled.BookTitle>{book.name}</Styled.BookTitle>
                      <Styled.BookPrice>
                        ${book.price.toFixed(2)}
                      </Styled.BookPrice>
                      <Styled.QuantityControls>
                        <Styled.QuantityButton
                          onClick={() =>
                            decrementQuantity(book.id, book.quantity)
                          }
                          disabled={book.quantity <= 1}
                        >
                          -
                        </Styled.QuantityButton>
                        <Styled.QuantityDisplay>
                          {book.quantity}
                        </Styled.QuantityDisplay>
                        <Styled.QuantityButton
                          onClick={() =>
                            incrementQuantity(book.id, book.quantity)
                          }
                        >
                          +
                        </Styled.QuantityButton>
                        <Styled.RemoveButton
                          onClick={() => removeBook(book.id)}
                        >
                          Remove
                        </Styled.RemoveButton>
                      </Styled.QuantityControls>
                    </Styled.BookInfo>
                  </Styled.BookItem>
                ))}

                <Styled.Total>
                  <span>Total:</span>
                  <span>${total?.toFixed(2)}</span>
                </Styled.Total>

                <Styled.CheckoutButton
                  onClick={() => console.log("Proceed to checkout")}
                >
                  Proceed to Checkout
                </Styled.CheckoutButton>
              </>
            ) : (
              <Styled.EmptyCart>Your cart is empty</Styled.EmptyCart>
            )}
          </Styled.CartContainer>
        )}
      </Styled.PopupContainer>
    </Styled.Overlay>,
    document.body
  );
}
