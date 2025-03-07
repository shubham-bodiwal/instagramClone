import {
  BottomNavigation,
  Header,
  PostCard,
  StorySection,
} from "../components/molecules";
import { PageContainer, ScrollView } from "./homePage.styled";

function HomePage() {
  return (
    <PageContainer>
      <Header />
      <ScrollView>
        <StorySection />
        <PostCard />
        <PostCard />
        <BottomNavigation />
      </ScrollView>
    </PageContainer>
  );
}

export default HomePage;
