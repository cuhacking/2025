import "minireset.css";
import "./HomePage.css";
import { Hero } from "./heroSection/Hero";
// import { AboutSection } from "./aboutSection/AboutSection";
import { SponsorsSection } from "./sponsorsSection/SponsorsSection";

export const App = () => {
  return (
    <>
     <Hero />
     <SponsorsSection />
    </>
     
  );
};

export default App;
