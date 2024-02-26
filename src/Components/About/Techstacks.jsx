import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaLayerGroup } from "react-icons/fa";
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
import { BiSolidUserAccount } from "react-icons/bi";
import { IoMdBookmarks } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { MdDeviceHub, MdLeaderboard, MdOutlineGroups, MdOutlineGroups3 } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { BsTransparency } from "react-icons/bs";
import { CgAttribution } from "react-icons/cg";





export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skill Set</h2>
        <div className="techsection">
            <div>
            <FaLayerGroup />
              <h5>B2B Sales Expertise</h5>
            </div>
            <div>
            <IoMdBookmarks />
              <h5>Prospect Qualification</h5>
            </div>
            <div>
              <HiTemplate />
              <h5>Product Demonstration</h5>
            </div>
            <div>
              <MdOutlineGroups />
              <h5>Negotiation</h5>
            </div>
        
            <div>
              <FaHandsHelping />
              <h5>Relationship Building</h5>
            </div>
            <div>
              <MdLeaderboard />
              <h5>Leadership</h5>
            </div>
            <div>
              <DiMongodb />
              <h5>Data Analysis</h5>
            </div>

            <div>
              <MdDeviceHub />
              <h5>Training & Development</h5>
            </div>
            <div>
              <FaLayerGroup />
              <h5>Sales Techniques</h5>
            </div>

            <div>
              <CgAttribution />
              <h5>Technology Utilization</h5>
            </div>
            <div>
              <IoMdBookmarks />
              <h5>Market Insights</h5>
            </div>
          </div>
      </div>
    </>
  );
};
