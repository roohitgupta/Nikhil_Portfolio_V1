import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          // strings: ["Full Stack Web Developer", "Frontend Developer", "Backend Developer", "MERN Stack Developer"],
          strings: ["Business Development", "Sales", "Lead Generation", "Cold Calling", "Customer Relationship Management"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};