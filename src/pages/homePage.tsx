import { BottomNavigation, Header, StorySection } from "../components/molecules";
import { PageContainer } from "./homePage.styled";

function HomePage() {
  return (
    <PageContainer>
      <Header />
      <StorySection />
      {/* <Posts /> */}
      <BottomNavigation />
    </PageContainer>
  );
}

export default HomePage;
