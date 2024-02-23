import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skill Set</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Lead Generation</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>Cold Calling</h5>
          </div>
          <div>
            <FaReact />
            <h5>Revenue Growth</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>Team Managenment</h5>
          </div>

          <div>
            <SiRedux />
            <h5>Relationship Building</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Market Intelligence</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>Reporting and Analysis</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Client Acquisition</h5>
          </div>

          {/* <div>
            <SiTailwindcss />
            <h5>Tailwind</h5>
          </div>
          
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div> */}
        </div>
      </div>
    </>
  );
};
