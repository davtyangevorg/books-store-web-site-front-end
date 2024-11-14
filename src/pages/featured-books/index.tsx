import { ShoppingCart } from "lucide-react";
import * as Styled from "./styled";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/global.context";
import { TBook, TBookFromCart } from "../../types";
import { useCart } from "../../hooks/use-cart";

export function FeaturedBooks() {
  const {
    books,
    setCurrentPageAndFetchBooks,
    totalPages,
    currentPage,
    isLoading,
    cart,
  } = useContext(GlobalContext);

  const { handleAddToCart } = useCart();

  const handlePageClick = (page: number) => {
    setCurrentPageAndFetchBooks(page);
  };

  useEffect(() => {
    setCurrentPageAndFetchBooks(currentPage);
  }, []);

  const isShowPagination = totalPages > 1;

  const renderSkeletonCards = () => {
    return Array.from({ length: 8 }).map((_, index) => (
      <Styled.SkeletonCard key={index}>
        <Styled.SkeletonImage />
        <Styled.SkeletonText />
        <Styled.SkeletonText />
        <Styled.SkeletonButton />
      </Styled.SkeletonCard>
    ));
  };

  const clickAddToCart = (book: TBook) => {
    handleAddToCart(book);
  };

  return (
    <Styled.Container>
      <Styled.Grid>
        {isLoading
          ? renderSkeletonCards()
          : books.map((book: TBook) => {
              const isBookInCart = cart?.books?.some(
                (cartBook: TBookFromCart) => cartBook.id === book.id
              );
              const isDisableAddToCart = isBookInCart;
              return (
                <Styled.BookCard key={book.id}>
                  <Styled.BookImage src={book.thumbnail} alt={book.name} />
                  <Styled.BookTitle>{book.name}</Styled.BookTitle>
                  <Styled.BookPrice>{book.price}</Styled.BookPrice>
                  <Styled.AddToCartButton
                    onClick={() => clickAddToCart(book)}
                    disabled={!!isDisableAddToCart}
                  >
                    <ShoppingCart size={16} style={{ marginRight: "0.5rem" }} />
                    Add to Cart
                  </Styled.AddToCartButton>
                </Styled.BookCard>
              );
            })}
      </Styled.Grid>

      {isShowPagination && (
        <Styled.PaginationContainer>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Styled.PageButton
              $isActive={index + 1 === currentPage}
              key={index}
              onClick={() => handlePageClick(index + 1)}
              disabled={isLoading}
            >
              {isLoading ? <Styled.LoadingSpinner /> : index + 1}
            </Styled.PageButton>
          ))}
        </Styled.PaginationContainer>
      )}
    </Styled.Container>
  );
}
