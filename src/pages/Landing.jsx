import React from "react";
import { Navbar } from "../components/Navbar";
import headerIMG from "../assets/svg/header-img.svg";
import Carousel from "react-multi-carousel";
import Expressjs from "../assets/imgs/expressjs.png";
import Nodejs from "../assets/imgs/nodejs.png";
import MongoDB from "../assets/imgs/mongodb.png";
import Solidity from "../assets/imgs/solidity.png";
import Ethersjs from "../assets/imgs/etherjs.png";
import Web3js from "../assets/imgs/web3js.png";
import Truffle from "../assets/imgs/truffle.png";
import Hardhat from "../assets/imgs/hardhat.png";
import project1 from "../assets/imgs/projects/project-img1.png";
import project2 from "../assets/imgs/projects/project-img2.png";
import project3 from "../assets/imgs/projects/project-img3.png";
import contactIMG from "../assets/svg/contact-white.svg";
import MATEOFLORESCV from "../assets/pdf/MATEOFLORES-CV.pdf";
import "react-multi-carousel/lib/styles.css";
import "../scss/Landing.scss";

function Landing() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const projects = [
    {
      name: "Project One",
      frontend: "FrontEnd: React.js",
      backend: "BackEnd: Express.js",
      data: "Data: MongoDB",
      img: project1,
      link: "#proj1",
    },
    {
      name: "Project Two",
      frontend: "FrontEnd: React.js",
      backend: "BackEnd: Express.js",
      data: "Data: MongoDB",
      img: project2,
      link: "#proj2",
    },
    {
      name: "Project Three",
      frontend: "FrontEnd: React.js",
      backend: "BackEnd: Express.js",
      data: "Data: MongoDB",
      img: project3,
      link: "#proj3",
    },
    {
      name: "Project One",
      frontend: "FrontEnd: React.js",
      backend: "BackEnd: Express.js",
      data: "Data: MongoDB",
      img: project1,
      link: "#proj1",
    },
    {
      name: "Project Two",
      frontend: "FrontEnd: React.js",
      backend: "BackEnd: Express.js",
      data: "Data: MongoDB",
      img: project2,
      link: "#proj2",
    },
    {
      name: "Project Three",
      frontend: "FrontEnd: React.js",
      backend: "BackEnd: Express.js",
      data: "Data: MongoDB",
      img: project3,
      link: "#proj3",
    },
  ];
  return (
    <div id="landing-page">
      <Navbar />
      <div className="hero">
        <h2>Welcome to my Portfolio</h2>
        <div className="hero-content--container">
          <div className="text--container">
            <h2>
              Hi, I'm <span className="name">Mateo</span>. I'm a full-stack and
              blobkchain developer.
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="animate-zoom-in">
            <img src={headerIMG} alt="space austronaut" />
          </div>
        </div>
      </div>
      <div id="skills">
        <div className="skills--container">
          <h2>Skills</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="skills--content owl-carousel owl-theme "
          >
            <div className="skill">
              {/* <img src={Reactjs} alt="react logo" />
               */}
              <svg
                width="100%"
                height="100%"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="react-logo"
              >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" stroke-width="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
              <h3>React.js</h3>
            </div>
            <div className="skill">
              <img src={Expressjs} alt="express logo" />
              <h3>Express.js</h3>
            </div>
            <div className="skill">
              <img src={Nodejs} alt="node logo" />
              <h3>Node.js</h3>
            </div>
            <div className="skill">
              <img src={MongoDB} alt="mongo logo" />
              <h3>MongoDB</h3>
            </div>
            <div className="skill">
              <img src={Solidity} alt="solidity logo" />
              <h3>Solidity</h3>
            </div>
            <div className="skill">
              <img src={Ethersjs} alt="ether logo" />
              <h3>Ethers.JS</h3>
            </div>
            <div className="skill">
              <img src={Web3js} alt="web3 logo" />
              <h3>Web3.JS</h3>
            </div>
            <div className="skill">
              <img src={Truffle} alt="truffle logo" />
              <h3>Truffle</h3>
            </div>
            <div className="skill">
              <img src={Hardhat} alt="hardhat logo" />
              <h3>Hardhat</h3>
            </div>
          </Carousel>
        </div>
      </div>
      <div id="projects">
        <h2>Projects</h2>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          quae temporibus ipsa cupiditate provident, id expedita mollitia harum
          magni odio et cum! A, repellendus magnam.
        </p> */}
        <div className="proyects--container">
          {projects.map((project) => {
            return (
              <a href={project.link} target="_blanck">
                <div className="project">
                  <img src={project.img} alt={project.name} />
                  <div className="text">
                    <h4>{project.name}</h4>
                    <p>{project.frontend}</p>
                    <p>{project.backend}</p>
                    <p>{project.data}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div id="contact">
        <div className="left--container">
          <img src={contactIMG} alt="contact decoration" />
        </div>
        <div className="right--container">
          <h2>Let's Connect</h2>
          <div className="conect-element--container">
            <i class="bi bi-phone-fill"></i>
            <p>+593986493415</p>
          </div>
          <div className="conect-element--container">
            <i class="bi bi-envelope-at-fill"></i>
            <p>mateo.flores@ucuenca.edu.ec</p>
          </div>
          <div className="conect-element--container">
            <i class="bi bi-linkedin"></i>
            <a href="https://www.linkedin.com/in/mateo-flores-terreros-b6761b21b/">
              LinkedIn
            </a>
          </div>
          <div className="conect-element--container">
            <i class="bi bi-file-earmark-person-fill"></i>
            <a
              href={MATEOFLORESCV}
              target="_blank"
              rel="noopener noreferrer"
              download="MATEOFLRES_CV.pdf"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Landing };
