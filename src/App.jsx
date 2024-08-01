import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import WorkFlow from "./Components/WorkFlow";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
