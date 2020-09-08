import React from "react";
import "./Projects.css";
import Laptop from "./Open_Laptop.jpg";
import Java from "./Java.png";
import Button from "react-bootstrap/Button";
import Covid from "./Covid.png";

export const Projects = () => {
  return (
    <section id="Projects">
      <h1> My Projects </h1>
      <article className="Details">
        <div className="Info">
          <img
            src="https://alan.app/voice/images/previews/preview.jpg"
            alt="Alan"
          />
          <h2>Alan AI Application</h2>
          <p>
            This is an web application utilizing Alan's AI voice recognition
            software in order to allow the user to find information on the
            latest news on a variety of topics. Once Alan is asked for the
            latest news, it returns 20 articles related to that topic. Alan also
            has the ability to participate in small casual conversations. The
            webpage itself is responsive and created primarily using Material
            UI. Please feel free to ask Alan a variety of questions!
          </p>
          <div className="badges">
            <span class="badge badge-pill badge-success">React</span>
            <span class="badge badge-pill badge-success">
              React Material-UI
            </span>
            <span class="badge badge-pill badge-success">Alan AI</span>
            <span class="badge badge-pill badge-secondary">HTML</span>
            <span class="badge badge-pill badge-secondary">CSS</span>
            <span class="badge badge-pill badge-secondary">Javascript</span>
          </div>
          <div className="Button">
            <Button
              href="https://alanai.isaiahherr.com/"
              target="_blank"
              variant="project"
              className="Buttons"
            >
              View Project Live
            </Button>
            <Button
              href="https://github.com/Klazer/Isaiah_Herr_Alan_AI_App"
              target="_blank"
              variant="project"
              className="Buttons"
            >
              GitHub Page
            </Button>
          </div>
        </div>
        <div className="Info">
          <img src={Covid} alt="Covidapp" />
          <h2>COVID-19 Tracker</h2>
          <p>
            This application utilizes an API to gather up the most up to date
            information in regards to the number of infections, recoveries, and
            deaths associated with COVID 19 from countries all around the world.
            This application utilizes axios and asynchronous syntax to pull
            information from the API and output it to a line graph or a bar
            graph if a country is chosen. As of right now, I am still expanding
            on this project with new ideas and implementations such as
            implementing data that showcases the amount of infections per day
            and more!
          </p>
          <div className="badges">
            <span class="badge badge-pill badge-success">React</span>
            <span class="badge badge-pill badge-success">React-Bootstrap</span>
            <span class="badge badge-pill badge-success">
              React Material-UI
            </span>
            <span class="badge badge-pill badge-success">Axios</span>
            <span class="badge badge-pill badge-success">Async</span>
            <span class="badge badge-pill badge-secondary">HTML</span>
            <span class="badge badge-pill badge-secondary">CSS</span>
            <span class="badge badge-pill badge-secondary">Javascript</span>
          </div>
          <div className="Button">
            <Button
              href="https://covidapp.isaiahherr.com/"
              target="_blank"
              variant="project"
              className="Buttons"
            >
              View Project Live
            </Button>
            <Button
              href="https://github.com/Klazer/covidapp"
              target="_blank"
              variant="project"
              className="Buttons"
            >
              GitHub Page
            </Button>
          </div>
        </div>
        <div className="Info">
          <img src={Laptop} alt="Open Laptop" />
          <h2>IsaiahHerr.com</h2>
          <p>
            This is my website that I built using React in addition to tools
            from BootStrap. My website also incorporates React's Material-UI to
            create responsive backgrounds and animations. All of these tools
            were tools I had never encountered before and were used to create
            this project in my own free time. Progress is continually updated
            onto GitHub and will be updated continuously with new designs and
            information.
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
          <div className="Button">
            <Button
              href="https://github.com/Klazer/Isaiahherr.com-Website"
              target="_blank"
              variant="project"
              className="Buttons"
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
          <div className="Button">
            <Button
              href="https://github.com/Klazer/Hash_Table_Project_In_JAVA"
              target="_blank"
              variant="project"
              className="Buttons"
            >
              GitHub Page
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};
