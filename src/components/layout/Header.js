import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import "./Header.css";
import Particles from "react-particles-js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header id="header">
      <Box className="typedContainer">
        <Typography className="title" variant="h4">
          <Typed strings={["Isaiah Herr"]} typeSpeed={40} />
          {/*Types my name at a typespeed of 40*/}
        </Typography>
        <br />
        <Typography className="subtitle" variant="h5">
          <Typed
            strings={[
              "Computer Science Student",
              "Web Development",
              "Web Design",
            ]} /*List containing words to type*/
            typeSpeed={35}
            backSpeed={30}
            loop
          />
          {/*Types my name at a typespeed of 40*/}
        </Typography>
      </Box>

      <Particles
        canvasClassName="particlesCanva"
        params={{
          particles: {
            number: {
              values: 45,
              density: { enable: true, value_area: 400 },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 3,
                size_min: 0.1,
                sync: false,
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
            },
          },
        }}
      />

      <div className="socialMedia">
        <a
          href="https://github.com/Klazer"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="fa-layers fa-fw iconWrapper">
            <FontAwesomeIcon icon={faCircle} color="#212121" />
            <FontAwesomeIcon
              icon={faGithub}
              color="black"
              className="git "
              inverse
              transform="shrink-8"
            />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/isaiahherr"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="fa-layers fa-fw iconWrapper">
            <FontAwesomeIcon icon={faCircle} color="#212121" />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="#212121"
              className="linkedin"
              inverse
              transform="shrink-8"
            />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
