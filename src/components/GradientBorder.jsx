import React from "react";

const GradientBorder = ({
  as: Component = "div",
  className = "",
  speed = "3s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative p-[2px] overflow-hidden rounded-[20px] ${className} shadow-card`}
      {...rest}
    >
      <div
        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-rotate-gradient z-0"
        style={{
          background: `conic-gradient(from 0deg, #915EFF, #FF6B6B, #FFD166, #06D6A0, #118AB2, #073B4C, #915EFF)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 bg-tertiary rounded-[20px] p-4">
        {children}
      </div>
    </Component>
  );
};

export default GradientBorder;