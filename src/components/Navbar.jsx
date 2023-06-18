import React from "react";
import MATEOFLORESCV from "../assets/pdf/MATEOFLORES-CV.pdf";
import "../scss/Navbar.scss"

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const scrollSkills = () => {
    const projects = document.getElementById("skills");
    const yTest = projects.offsetTop - 200;
    window.scrollTo({top: yTest, behavior: "smooth" });
  }
  const scrollProjects = () => {
    const projects = document.getElementById("projects");
    const yTest = projects.offsetTop - 100;
    window.scrollTo({top: yTest, behavior: "smooth" });
  }
  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <header className={scrolled ? "scrolled" : ""}>
      {/* <img src="" alt="logo" /> */}
      <h1>LOGO</h1>
      <nav>
        <p onClick={()=>scrollSkills()}>Skills</p>
        <p onClick={()=>scrollProjects()}>Projects</p>
        <a className="linkedin-icon" href="https://www.linkedin.com/in/mateo-flores-terreros-b6761b21b/">in</a>
        <a href={MATEOFLORESCV} className="linkedin-icon cv-icon" target="_blank" rel="noopener noreferrer" download="MATEOFLRES_CV.pdf">cv</a>
        <a href="#contact">Lets Connect</a>
      </nav>
    </header>
  );
}

export { Navbar };
