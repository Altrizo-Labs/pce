import { StaticImageData } from "next/image";

export interface RippleButtonProps {
  text: string;
  url?: string;
  className?: string;
  hoverColor?: string;
  icon?: React.ReactNode;
  play?: React.ReactNode;
  yellowIcon?: React.ReactNode;
  onclick?: () => void;
}

export interface HeroBannerProps {
  video?: string; 
  image?: StaticImageData;
  description: string;
}