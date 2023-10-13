import { useEffect, useCallback } from "react";
import {
  Banner,
  Contact,
  Services,
  SkillsAndExperience,
  SocialMedia,
  Work,
  Navbar,
  Education
} from "./containers";

import "./App.css";

function App() {
  const sectionObserver = useCallback(() => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("section_show");
        } else {
          entry.target.classList.remove("section_show");
        }
      });
    });
  }, []);

  const blobObserver = useCallback(() => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("blob_enlarged");
        } else {
          entry.target.classList.remove("blob_enlarged");
        }
      });
    });
  }, []);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".section_hidden");
    const blobElements = document.querySelectorAll(".blob");

    const sectionObs = sectionObserver(); // invoke to get the observer instance
    hiddenElements.forEach((el) => sectionObs.observe(el));

    const blobObs = blobObserver(); // invoke to get the observer instance
    blobElements.forEach((el) => blobObs.observe(el));

    // Clean up observers when the component unmounts
    return () => {
      hiddenElements.forEach((el) => sectionObs.unobserve(el));
      blobElements.forEach((el) => blobObs.unobserve(el));
    };
  }, [sectionObserver, blobObserver]);

  return (
    <main id='home' className="banner_background w-full h-screen overflow-auto flex flex-col overflow-x-hidden">
      <Navbar/>
      <Banner />
      <Services />
      <Work />
      
      <SkillsAndExperience />
      <Education/>
      <Contact />
      <SocialMedia />
    </main>
  );
}

export default App;
