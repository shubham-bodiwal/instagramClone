import {
  StyledButtonContainer,
  StyledHashtag,
  StyledIconsContainerLeft,
  StyledImageCount,
  StyledPostBadge,
  StyledPostBody,
  StyledPostContainer,
  StyledPostDescription,
  StyledPostHeader,
  StyledPostImage,
  StyledPostRing,
  StyledPostTime,
  StyledPostTitle,
  StyledPostTitleContainer,
  StyledSeeTranslations,
  StyledTitleDescription,
  StyledTitleText,
  StyledViewComments,
} from "./postCard.styled";
import bookmark from "../../assets/bookmark.svg";
import send from "../../assets/send.svg";
import menu from "../../assets/menu.svg";
import like from "../../assets/like.svg";
import avatar from "../../assets/avatar.svg";
import postImage from "../../assets/postImage.png";

function PostCard() {
  return (
    <StyledPostContainer>
      <StyledPostHeader>
        <StyledPostTitleContainer>
          <StyledPostBadge>
            <StyledPostImage>
              <StyledPostRing>
                <img src={avatar} alt="avatar" />
              </StyledPostRing>
            </StyledPostImage>
          </StyledPostBadge>
          <StyledPostTitle>
            <StyledTitleText>we_are_sulcus</StyledTitleText>
            <StyledTitleDescription>rock band</StyledTitleDescription>
          </StyledPostTitle>
        </StyledPostTitleContainer>
        <img src={menu} alt="menu icon" />
      </StyledPostHeader>
      <StyledPostBody>
        <img src={postImage} alt="post1" width="100%" />
        <StyledImageCount>1/7</StyledImageCount>
      </StyledPostBody>
      {/* <div>
          <div></div>
        </div> */}
      <StyledButtonContainer>
        <StyledIconsContainerLeft>
          <img src={like} alt="like" />
          <img src={send} alt="comment" />
          <img src={send} alt="send" />
        </StyledIconsContainerLeft>
        <img src={bookmark} alt="save" />
      </StyledButtonContainer>
      <StyledPostDescription>
        we_are_sulcus <StyledHashtag>#menowhere</StyledHashtag>
      </StyledPostDescription>
      <StyledViewComments>View all 3 comments</StyledViewComments>
      <StyledPostTime>
        3 hours ago .
        <StyledSeeTranslations>See Translation</StyledSeeTranslations>
      </StyledPostTime>
    </StyledPostContainer>
  );
}

export default PostCard;
