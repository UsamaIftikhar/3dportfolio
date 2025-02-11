import React from "react";
import { resume } from "../assets";
import StarBorder from "./StarBorder";

const ResumeButton = () => {
  return (
    <a
      href="https://mega.nz/file/cJR3HBrY#vhXzzpn_8oZlV58xCE8upY21temcgWCspW_MlkIJCyA"
      target="_blank"
    >
      <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
        Download Resume
      </StarBorder>
    </a>
  );
};

export default ResumeButton;
