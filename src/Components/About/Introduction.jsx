import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import nikhilPhoto from "./nikhil.jpeg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                // src="https://avatars.githubusercontent.com/u/96112427?v=4"
                src={nikhilPhoto}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              {/* <h4>
                Hi , I am{" "}
                <span className="different">Rohit Gutpa</span> from{" "}
                <span className="different"> Indore, Madhya Pradesh</span>. 
                A dedicated full-stack web developer with a specialized skill set.
            Proficient in data structures and algorithms to build robust web
            applications. Self-motivated and adaptable to both back-end and
            front-end whose mission in life is to build useful products for
            solving everyday problems.
              </h4> */}
              <h4>
                Hello and welcome to my portfolio! My name is Nikhil Jain from
                Bhopal, Madhya Pradesh. I am a results-driven professional
                passionate about sales leadership and team empowerment.
                Experienced in driving revenue growth through direct and inside
                sales techniques, mentoring teams, implementing data-driven
                strategies, and fostering client relationships.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Documantiers{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{" "}
              </h4>

              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
