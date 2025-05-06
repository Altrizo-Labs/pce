"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Adjust the scroll trigger to start 500px before the container reaches the top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 500px", "start 0px"], // Starts when the container reaches 500px from the top
  });

  const [isMobile, setIsMobile] = React.useState(false);

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
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // 3D transforms with tilt, only during the first 15% of the scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);    // Forward-back tilt
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 0]);   // Left-right tilt
  const rotateZ = useTransform(scrollYProgress, [0, 1], [8, 0]);    // Sideways twist
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const translateX = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  return (
    <div
      className="flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Card
          rotateX={rotateX}
          rotateY={rotateY}
          rotateZ={rotateZ}
          translateX={translateX}
          translateY={translateY}
          scale={scale}
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
  rotateZ,
  translateX,
  translateY,
  scale,
  children,
}: {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  rotateZ: MotionValue<number>;
  translateX: MotionValue<number>;
  translateY: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        rotateZ,
        translateX,
        translateY,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-[1088px] mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl -mb-52"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
