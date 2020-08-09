import React from "react";
import "./Projects.css";
import Laptop from "./Open_Laptop.jpg";
import Java from "./Java.png";
import Button from "react-bootstrap/Button";

export const Projects = () => {
  return (
    <section id="Projects">
      <h1> My Projects </h1>
      <article className="Details">
        <div className="Info">
          <img src={Laptop} alt="Open Laptop" />
          <h2>IsaiahHerr.com</h2>
          <p>
            My most recent project. This is my website that I built using React
            in addition to tools from BootStrap. My website also incorporates
            React's Material-UI to create responsive backgrounds and animations.
            All of these tools were tools I had never encountered before and
            were used to create this project in my own free time. Progress is
            continually updated onto GitHub and will be updated continuously
            with new designs and information.
          </p>
          <div className="badges">
            <span class="badge badge-pill badge-success">React</span>
            <span class="badge badge-pill badge-success">React-Bootstrap</span>
            <span class="badge badge-pill badge-success">
              React Material-UI
            </span>
            <span class="badge badge-pill badge-success">NodeJS</span>
            <span class="badge badge-pill badge-secondary">HTML</span>
            <span class="badge badge-pill badge-secondary">CSS</span>
            <span class="badge badge-pill badge-secondary">Javascript</span>
          </div>
          <div className="gitButton">
            <Button
              href="https://github.com/Klazer/Isaiahherr.com-Website"
              target="_blank"
              variant="project"
              className="gitButton"
            >
              GitHub Page
            </Button>
          </div>
        </div>
        <div className="Info">
          <img src={Java} alt="Java" />
          <h2>JAVA Hash Table</h2>
          <p>
            A hashing function I built with a partner in my CSCI Intro to Data
            Structures course at the University of Minnesota Twin-Cities. It was
            developed within Java and utilized a specific equation to hash
            collisions across a hash table as equally as possible using the
            chaining method. The hash table then outputs every single position
            in the hash table and tells the user how many collisions has
            occurred at each position.
          </p>
          <div className="badges">
            <span class="badge badge-pill badge-primary">Data Structures</span>
            <span class="badge badge-pill badge-primary">Algorithms</span>
            <span class="badge badge-pill badge-secondary">Java</span>
          </div>
          <div className="gitButton">
            <Button
              href="https://github.com/Klazer/Hash_Table_Project_In_JAVA"
              target="_blank"
              variant="project"
              className="gitButton"
            >
              GitHub Page
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};
