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

      <div className="absolute left-[42%] top-0  h-full w-px bg-(--color-4) opacity-10 hidden md:block" />
      <HeroSection />

      <AboutSection />

      <MyRecentWorkSection />

      <ProjectFormSection />

      <FooterSection />
    </div>
  );
}

export default App;
