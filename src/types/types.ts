import { StaticImageData } from "next/image";

export interface RippleButtonProps {
  text: string;
  url?: string;
  className?: string;
  hoverColor?: string;
  textStyles?: string;
  icon?: React.ReactNode;
  play?: React.ReactNode;
  yellowIcon?: React.ReactNode;
  yellowArrow?: React.ReactNode;
  onclick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface HeroBannerProps {
  video?: string; 
  image?: StaticImageData;
  description: string;
}