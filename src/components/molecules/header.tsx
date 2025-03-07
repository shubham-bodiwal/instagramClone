import logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import post from "../../assets/posts.svg";
import send from "../../assets/send.svg";
import { StyledButtonsContainer, StyledHeaderContainer } from "./header.styled";

function Header() {
  return (
    <StyledHeaderContainer>
      <img src={logo} alt="Instagram logo" />
      <StyledButtonsContainer>
        <img src={post} alt="Post Icon" />
        <img src={like} alt="Like Icon" />
        <img src={send} alt="Message Icon" />
      </StyledButtonsContainer>
    </StyledHeaderContainer>
  );
}

export default Header;
