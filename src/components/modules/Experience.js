import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "react-bootstrap/Button";
import "./Experience.css";

const useStyles = makeStyles((theme) => ({
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid black",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid grey",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "grey grey transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "grey",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent black black",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "black",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "black",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "black",
    padding: "0",
    textTransform: "uppercase",
  },
}));

export const Experience = () => {
  const classes = useStyles();
  return (
    <section id="Experience">
      <Box component="header" className="container">
        <Typography variant="h4" align="center" className={classes.heading}>
          work experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2016-2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Fairview IT Intern
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "grey" }}
            >
              Genesys Works
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "black" }}
            >
              An internship where I worked at Fairview IT through the Genesys
              Works Program. In this internship, I primarily worked as a first
              tier helpdesk representative. I was tasked with receiving phone
              calls from users both from Fairview Clinics/Hospitals to the
              University of Minnesota Clinics. At this internship, I dealt with
              over 1000 incidents and learned many skills such as adapting,
              troubleshooting, and resolving issues within a small timeframe.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Student Tech Services
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "grey" }}
            >
              University of Minnesota Office of Information Technology
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "black" }}
            >
              At this position, I worked as a tier one Service Desk
              Representative for the University of Minneosta Office of
              Technology. At this position, I worked primarily in answering
              phone calls from anyone that was associated with the University of
              Minnesota such as professors, students, and faculty. Problems that
              I typically encountered were password reset, troubleshooting
              hardware issues, etc.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Computer Center Coordinator
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "grey" }}
            >
              University of Minnesota Housing
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "black" }}
            >
              At this position, I was tasked with resolving any hardware issues
              or software issues experienced by residents and faculty in Roy
              Wilkins Hall. I held office hours every single week in order to
              allow the opportunity for anyone to come to me with any software
              or hardware related issues.
            </Typography>
          </Box>
        </Box>

        <div id="Resume">
          <h2>Interested in hiring me? Click here to view my Resume!</h2>

          <Button
            id="resumeButton"
            href="https://drive.google.com/file/d/1QlzLLvJep7rmDHMMmvsfGUMi4YsDZKXw/view?usp=sharing"
          >
            My Resume
          </Button>
        </div>
      </Box>
    </section>
  );
};

export default Experience;
