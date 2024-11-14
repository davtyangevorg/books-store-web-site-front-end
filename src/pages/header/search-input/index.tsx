import { useContext, useState } from "react";
import * as Styled from "./styled";
import { Search } from "lucide-react";
import { GlobalContext } from "../../../context/global.context";

export function SearchInputSection() {
  const [search, setSearch] = useState("");
  const { setSearchAndFetchBooks, isLoading } = useContext(GlobalContext);

  const handleSearch = async () => {
    if (!isLoading) {
      setSearchAndFetchBooks(search);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Styled.SearchBar>
      <Styled.SearchInput
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="Search for books..."
        disabled={isLoading}
      />
      <Styled.SearchButton onClick={handleSearch} disabled={isLoading}>
        {isLoading ? "Searching..." : <Search size={20} />}
      </Styled.SearchButton>
    </Styled.SearchBar>
  );
}
