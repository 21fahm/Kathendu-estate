import AuroraHero from "./components/hero";
import Example from "./components/navbar";
import StickyCards from "./components/slide";
import SwipeCarousel from "./components/column";

const Home = () => {
  return (
    <div className="bg-white" id="home">
      <Example />
      <AuroraHero />
      <StickyCards />
      <SwipeCarousel />
    </div>
  );
};

export default Home;
