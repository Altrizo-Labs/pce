import React from "react";

interface CustomArrowRightProps extends React.SVGProps<SVGSVGElement> {}

const CustomArrowRight: React.FC<CustomArrowRightProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor" // Changed fill to currentColor for the head
      stroke="currentColor" // Keep stroke for the line
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Pass down other props like className, style, etc.
    >
      {/* Line part - keep stroke, no fill */}
      <path d="M3 12h16" stroke="currentColor" fill="none" /> 
      {/* Arrowhead part - filled, no stroke */}
      <polygon points="14 5 21 12 14 19" stroke="none" fill="currentColor" /> 
    </svg>
  );
};

export default CustomArrowRight;
