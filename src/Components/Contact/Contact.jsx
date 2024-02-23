import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/nikhil-jain2102/"
            target="_blank"
            rel="noreferrer"
            
          >
            <FaLinkedin className="linkedin" />
            <div>linkedin.com/in/nikhil-jain/</div>
          </a>
          {/* <a
            href="https://github.com/roohitgupta"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
            <div>roohitgupta</div>
          </a> */}
          <a
            href="mailto:nikhiljain2102@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
            <div>nikhiljain2102@gmail.com</div>
          </a>
          <a
            href="https://www.instagram.com/nikhil_jain02/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="twitter" />
            <div>Nikhil Jain</div>
          </a>
          <a href="tel:+917974089532" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
            <div>+91 7974089532</div>
          </a>
        </div>
      </div>
    </>
  );
};