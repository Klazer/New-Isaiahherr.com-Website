import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <section id="About" className="fade-in">
      <div className="Bio">
        <h1> About Me</h1>
        <article id="rightSide">
          <h2> Summary </h2>
          <p>
            I'm a current <i>senior</i> studying Computer Science at the
            University of Minnesota Twin-Cities. I'm currently located at Lake
            Elmo, Minnesota and have many skills in IT and am currently bulding
            my skills with software development. I am very eager to learn and am
            always pushing myself to learn new tools and technologies as I
            continue through my career!
          </p>
          <h2>My Skills</h2>
          <div id="skillBadges">
            <span class="badge badge-pill badge-primary">Data Structures</span>
            <span class="badge badge-pill badge-primary">Algorithms</span>
            <span class="badge badge-pill badge-primary">TeamWork</span>
            <span class="badge badge-pill badge-primary">Problem Analysis</span>
            <span class="badge badge-pill badge-secondary">Python</span>
            <span class="badge badge-pill badge-secondary">Java</span>
            <span class="badge badge-pill badge-secondary">C++</span>
            <span class="badge badge-pill badge-secondary">HTML</span>
            <span class="badge badge-pill badge-secondary">CSS</span>
            <span class="badge badge-pill badge-secondary">Javascript</span>
            <span class="badge badge-pill badge-success">React</span>
            <span class="badge badge-pill badge-success">React-Bootstrap</span>
            <span class="badge badge-pill badge-success">
              React Material-Ui
            </span>
            <span class="badge badge-pill badge-success">NodeJS</span>
          </div>
        </article>

        <article id="leftSide">
          <aside id="brief">
            <span className="fa-layers fa-fw iconWrapper fa-2x">
              <FontAwesomeIcon icon={faCircle} color="#212121" />
              <FontAwesomeIcon
                icon={faUniversity}
                inverse
                transform="shrink-8"
              />
              <p>University of Minnesota Twin-Cities</p>
            </span>

            <span className="fa-layers fa-fw iconWrapper fa-2x">
              <FontAwesomeIcon icon={faCircle} color="#212121" />
              <FontAwesomeIcon icon={faBook} inverse transform="shrink-8" />
              <p>Computer Science B.A.</p>
            </span>

            <span className="fa-layers fa-fw iconWrapper fa-2x">
              <FontAwesomeIcon icon={faCircle} color="#212121" />
              <FontAwesomeIcon
                icon={faUserGraduate}
                inverse
                transform="shrink-8"
              />
              <p>Graduation: Spring 2021</p>
            </span>

            <span className="fa-layers fa-fw iconWrapper fa-2x">
              <FontAwesomeIcon icon={faCircle} color="#212121" />
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                inverse
                transform="shrink-8"
              />
              <p>Lake Elmo, MN</p>
            </span>
          </aside>
        </article>

        {/*The about me will be split in two sections, one containg my bio and skills and the other containing my quick info*/}
      </div>
    </section>
  );
};

export default About;
