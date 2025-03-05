import styled from "styled-components";
import storyRing from "./../../assets/storyRing.png";

export const StyledStoryList = styled.div`
  overflow-y: scroll;
  width: 100%;
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  scrollbar-width: none;
  border-bottom: 1px solid #ccc;
`;

export const StyledStoryContainer = styled.div``;

export const StyledStoryImage = styled.div`
  aspect-ratio: 1;
  width: 20vw;
  position: relative;

  ::before {
    content: "";
    background-image: url("${storyRing}");
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1;
    width: 20vw;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & img:nth-of-type(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 50%;
  }

  & img:nth-of-type(2) {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
`;

export const StyledStoryText = styled.span`
  font-size: 12px;
`;

export const StyledStoryRing = styled.div`
background-image
`;
