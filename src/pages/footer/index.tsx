import { Facebook, Instagram, Twitter } from "lucide-react";
import * as Styled from "./styled";

export const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      <div>© 2024 BookStore. All rights reserved.</div>
      <Styled.SocialIcons>
        <Facebook size={24} />
        <Instagram size={24} />
        <Twitter size={24} />
      </Styled.SocialIcons>
    </Styled.FooterContainer>
  );
};
