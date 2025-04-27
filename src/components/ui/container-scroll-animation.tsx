"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  // Preserve scroll state and set it to 1 (state B) on page load
  React.useEffect(() => {
    if (scrollYProgress.get() === 0) {
      scrollYProgress.set(1); // Set initial scroll position to 1 (state B)
    }
  }, []);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.6, 0.9] : [0.8, 1];
  };

  // Reverse the transition: card starts tilted and straightens as you scroll
  const rotateY = useTransform(scrollYProgress, [0, 20.5, 1], [0, 40, 60]);
  const rotateX = useTransform(scrollYProgress, [0, 2.5, 1], [-0, 50, -40]);

  // Apply scale throughout the scroll
  const scale = useTransform(scrollYProgress, [1, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Increase opacity slightly in first half, then more dramatically in second half
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.7, 1]);

  return (
    <div
      className="h-[60rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card
          rotateX={rotateX}
          rotateY={rotateY}
          translate={translate}
          scale={scale}
          // opacity={opacity}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotateX,
  rotateY,
  scale,
  // opacity,
  children,
}: {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  // opacity: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale,
        // opacity,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl origin-left"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
