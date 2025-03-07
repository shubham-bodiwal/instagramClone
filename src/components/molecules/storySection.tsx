import {
  StyledStoryContainer,
  StyledStoryImage,
  StyledStoryList,
  StyledStoryText,
  StyledStoryRing,
} from "./storySection.styled";
import avatar from "./../../assets/avatar.svg";
import add from "./../../assets/add.svg";

function StorySection() {
  return (
    <div>
      <StyledStoryList>
        <StyledStoryContainer>
          <StyledStoryImage>
            <img src={avatar} alt="story1" />
            <img src={add} alt="add story" />
          </StyledStoryImage>
          <StyledStoryText> Your Story</StyledStoryText>
        </StyledStoryContainer>

        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <StyledStoryContainer key={index}>
            <StyledStoryImage>
              <StyledStoryRing>
                <img src={avatar} alt="story1" />
              </StyledStoryRing>
            </StyledStoryImage>
            <StyledStoryText> Your Story</StyledStoryText>
          </StyledStoryContainer>
        ))}
      </StyledStoryList>
    </div>
  );
}

export default StorySection;
