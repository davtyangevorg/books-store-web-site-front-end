import { useContext, useState } from "react";
import * as Styled from "./styled";
import { Menu, ShoppingCart, X } from "lucide-react";
import { SearchInputSection } from "./search-input";
import RightContent from "./right-content";
import { GlobalContext } from "../../context/global.context";
import CartPopup from "./cart-popup";

export default function Header() {
  const { cart } = useContext(GlobalContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isCartEmpty = cart?.books?.length === 0 || !cart;
  const cartLength = cart?.books?.length;

  return (
    <>
      <Styled.HeaderContainer>
        <Styled.Logo>BookStore</Styled.Logo>

        <SearchInputSection />
        <Styled.MenuButton onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X size={24} /> : <Menu size={24} />}
        </Styled.MenuButton>
        <Styled.Nav>
          <Styled.NavLink onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={20} color="white" />
            {!isCartEmpty && (
              <Styled.CartLength>{cartLength}</Styled.CartLength>
            )}
          </Styled.NavLink>

          <RightContent />
        </Styled.Nav>
      </Styled.HeaderContainer>

      {isCartOpen && (
        <CartPopup isEmpty={isCartEmpty} onClose={() => setIsCartOpen(false)} />
      )}
    </>
  );
}
