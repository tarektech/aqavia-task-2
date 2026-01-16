import {
  Header,
  HeroSection,
  AboutSection,
  MyRecentWorkSection,
  ProjectFormSection,
  FooterSection,
} from "./components";
import "./index.css";

function App() {
  return (
    <div className="bg-(--color-1) container relative">
      <Header />

      <div className="line-1 opacity-10"></div>
      <HeroSection />

      <AboutSection />

      <MyRecentWorkSection />

      <ProjectFormSection />

      <FooterSection />
    </div>
  );
}

export default App;
