"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { RippleButtonProps } from "@/types/types";
import Link from "next/link";

import arrow from "../../public/images/arrow.png";
import Image from "next/image";

const RippleButton: React.FC<RippleButtonProps> = ({
  text,
  url,
  className,
  hoverColor,
  icon,
  onclick,
}) => {
  const xTo = useRef<(value: number) => void>();
  const yTo = useRef<(value: number) => void>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState<boolean>(false);

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(divRef.current, "x", {
        duration: 0.8,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(divRef.current, "y", {
        duration: 0.8,
        ease: "power3",
      });

      gsap.to(divRef.current, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        zIndex: -10,
      });
    },
    { scope: buttonRef }
  );

  const handleMouseEnter = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 1,
      duration: 0.5,
    });
    setHovering(true);
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 0,
      duration: 0.5,
    });
    setHovering(false);
  });
  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const { top, left } = rect;
      if (xTo.current && yTo.current) {
        xTo.current(e.clientX - left);
        yTo.current(e.clientY - top);
      }
    }
  });

  return (
    <Link href={url || "#"} aria-label={`Navigate to ${text}`}>
      <button
        ref={buttonRef}
        onClick={onclick}
        className={`relative border-[1px] border-solid px-5 py-2 rounded-full flex items-center justify-center gap-3 overflow-hidden z-0  ${className} `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
      >
        <div
          ref={divRef}
          className={`absolute w-[550px] h-[550px] left-0 top-0 wrapperElement -z-10 pointer-events-none rounded-full ${hoverColor}`}
        ></div>
        <span className="z-10 font-dmSans text-[10px] lg:text-[14px]">
          {text}
        </span>

        {icon && (
          <Image
            src={arrow}
            alt="arrow icon"
            className={`w-4 lg:w-6 h-4 lg:h-6 transition-transform duration-300 ${
              hovering && "rotate-45"
            } `}
          />
        )}
      </button>
    </Link>
  );
};

export default RippleButton;