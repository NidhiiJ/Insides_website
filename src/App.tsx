// import './App.css'
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import WhoAreWe from "./components/WhoAreWe";
import WhyUs from "./components/WhyUs";

import { Route, Routes } from "react-router-dom";
import ThankYou from "./components/ThankYou";
import { GoToTopButton } from "./components/GoToTopButton";

function App() {
  const [windowSize, setwindowSize] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setwindowSize(window.screen.width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = [
    {
      path: "/",
      element: <Home windowSize={windowSize} />,
    },
    {
      path: "/ContactUs",
      element: <ContactUs />,
    },
    {
      path: "/Portfolio",
      element: <Portfolio windowSize={windowSize} />,
    },
    {
      path: "/WhoAreWe",
      element: <WhoAreWe />,
    },
    {
      path: "/WhyUs",
      element: <WhyUs />,
    },
    {
      path: "/ThankYou",
      element: <ThankYou/>
    }
  ];

  return (
    <div id='app' className="h-screen flex flex-col justify-between">
      <section className="mb-10 md:mb-20">
        <Navbar />
      </section>
      <Routes>
        {router.map((x, i) => (
          <Route key={i} path={x.path} element={x.element}></Route>
        ))}
      </Routes>
      <section className="justify-self-end">
        <Footer />
      </section>
      <div className="fixed bottom-10 right-10  md:bottom-20 md:right-20 z-10">
        <GoToTopButton/>
      </div>
    </div>
  );
}

export default App;
