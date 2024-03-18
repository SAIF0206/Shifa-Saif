import ButtonGraient from "./assets/ButtonGradient";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import VideoCardBtn from "./components/VideoCardBtn";

function App() {
  return (
    <>
      <div className="p-[.8rem] overflow-hidden">
        <Hero />
        <Schedule />
        <VideoCardBtn />
        <Footer />
      </div>
    </>
  );
}

export default App;
