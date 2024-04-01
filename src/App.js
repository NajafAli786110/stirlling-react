import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center w-full ">
      <HeroSection />
      <About />
      <Services />
      <Reviews />
    </div>
  );
}

export default App;
