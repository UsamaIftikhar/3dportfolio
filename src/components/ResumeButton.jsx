import React from 'react'
import {resume} from "../assets"

const ResumeButton = () => {
  return (
    <a href="https://mega.nz/file/cJR3HBrY#vhXzzpn_8oZlV58xCE8upY21temcgWCspW_MlkIJCyA" target="_blank">
    <button className=" font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-[#FFFF] text-black hover:-translate-y-1 hover:scale-110 hover:bg-[#ececec] duration-300" onClick={() => alert("Now you will see a Mega.nz link. Click on download to download the Resume in PDF Format. Thanks for visit!!")}>
        <img src={resume} alt="resume" className="h-[24px] w-[24px]" />
       <span className="lg:block hidden">Download Resume</span> 
    </button>
    </a>
  )
}

export default ResumeButton;