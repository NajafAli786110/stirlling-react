import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Tabs from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center w-full ">
      <HeroSection />
      <About />
      <Services />
      <Tabs />
      <Reviews />
    </div>
  );
}

export default App;
