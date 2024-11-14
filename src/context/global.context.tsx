import { createContext, useCallback, useState } from "react";
import { TBooks, TCart, TUser } from "../types";
import { BACKEND_API_URL } from "../consts";

const COUNT_BOOKS_PER_PAGE = 8;

type TGlobalContext = {
  books: TBooks;
  setBooks: (books: TBooks) => void;
  totalPages: number;
  booksSearch: string;
  setSearchAndFetchBooks: (search: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setCurrentPageAndFetchBooks: (page: number) => void;
  isLoading: boolean;
  userData: TUser | null;
  setUserData: (userData: TUser | null) => void;
  cart: TCart | null;
  setCart: (cart: TCart | null) => void;
  isUserLoggedIn: boolean;
};

export const GlobalContext = createContext<TGlobalContext>({
  books: [] as TBooks,
  setBooks: () => {},
  totalPages: 0,
  booksSearch: "",
  setSearchAndFetchBooks: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  setCurrentPageAndFetchBooks: () => {},
  isLoading: false,
  userData: null,
  setUserData: () => {},
  cart: null,
  setCart: () => {},
  isUserLoggedIn: false,
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<TBooks>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksSearch, setBooksSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<TUser | null>(null);
  const [cart, setCart] = useState<TCart | null>(null);
  const isUserLoggedIn = userData !== null;

  const fetchBooks = useCallback(async (page: number, search: string) => {
    const searchQuery = search ? `&search=${search}` : "";
    setIsLoading(true);
    const response = await fetch(
      `${BACKEND_API_URL}/books/paginated?page=${page}&limit=${COUNT_BOOKS_PER_PAGE}${searchQuery}`
    );
    const data = await response.json();
    setBooks(data.books);
    setTotalPages(data.totalPages);
    setCurrentPage(page);
    setIsLoading(false);
  }, []);

  const setSearchAndFetchBooks = (search: string) => {
    setBooksSearch(search);
    fetchBooks(1, search);
  };

  const setCurrentPageAndFetchBooks = (page: number) => {
    setCurrentPage(page);
    fetchBooks(page, booksSearch);
  };

  return (
    <GlobalContext.Provider
      value={{
        books,
        setBooks,
        totalPages,
        booksSearch,
        setSearchAndFetchBooks,
        currentPage,
        setCurrentPage,
        setCurrentPageAndFetchBooks,
        isLoading,
        userData,
        setUserData,
        cart,
        setCart,
        isUserLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
