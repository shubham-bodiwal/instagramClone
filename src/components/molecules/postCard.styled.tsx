import styled from "styled-components";
import postRing from "./../../assets/postRing.svg";

export const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
`;
export const StyledPostBody = styled.div`
position: relative;
display`;
export const StyledPostDescription = styled.div`
  font-weight: 700px;
  text-align: left;
  padding: 2px 10px;
  font-weight: 500;
`;
export const StyledViewComments = styled.div`
  color: grey;
  font-size: 16px;
  text-align: left;
  padding: 2px 10px;
`;
export const StyledPostTime = styled.div`
  color: grey;
  font-size: 14px;
  text-align: left;
  padding: 2px 10px;
`;
export const StyledPostBadge = styled.div``;
export const StyledPostTitle = styled.div``;
export const StyledPostImage = styled.div`
  aspect-ratio: 1;
  width: 12vw;
  position: relative;

  ::before {
    content: "";
    background-image: url("${postRing}");
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1;
    width: 12vw;
    z-index: 1;
    background-size: contain;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & img:nth-of-type(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10vw;

    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

export const StyledPostRing = styled.div``;
export const StyledPostTitleContainer = styled.div`
  display: flex;
  gap: 5px;
  text-align: left;
`;

export const StyledTitleText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
`;
export const StyledTitleDescription = styled.p`
  font-size: 12px;
  margin: 0px;
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 8px;
  box-sizing: border-box;
`;

export const StyledIconsContainerLeft = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledImageCount = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 20px;
  padding: 2px 8px;
  color: white;
  background-color: grey;
  font-weight: 700;
  font-size: 14px;
`;

export const StyledHashtag = styled.span`
  color: #268df8;
`;

export const StyledSeeTranslations = styled.span`
  color: #272727;
  font-size: 13px;
`;
