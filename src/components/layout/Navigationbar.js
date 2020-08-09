import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigationbar.css";

export const Navigationbar = () => (
  <Navbar className="navbar" expand="lg" bg="black" variant="dark">
    <Navbar.Brand href="/">Isaiah Herr's Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    {/*Creates the hamburger icon when the screen gets smaller*/}
    <Navbar.Collapse id="responsive-navbar-nav">
      {/*Tells code what to do when the screen reaches a smaller size*/}
      <Nav className="ml-auto">
        {/*Positions all items to the right*/}

        <Nav.Item>
          <Nav.Link href="#About">
            <span>About Me</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Experience">
            <span>Work Experience</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Projects">
            <span>My Projects</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Contact">
            <span>Contact Me</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigationbar;
