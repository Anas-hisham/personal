import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import BeatLoader from "react-spinners/BeatLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import Landing from "./components/landing/Landing";

// Lazy load components
const MyNav = lazy(() => import("./components/navbar/MyNav"));
const About = lazy(() => import("./components/About/About"));
const Resume = lazy(() => import("./components/resume/Resume"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init(); 
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <BeatLoader color="#ff0077" size={20} speedMultiplier={0.5} />
      </div>
    );
  }

  return (
    <div className="App">
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "black",
            }}
          >
            <BeatLoader color="#ff0077" size={20} />
          </div>
        }
      >
        <MyNav />
        <Landing />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
