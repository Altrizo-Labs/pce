import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "24/7 AI Assistance",
      description:
        "Ensure students get the support they need anytime, anywhere.",
    },

    {
      title: "Personalized Learning Journey",
      description:
        "Help students navigate courses and programs with AI-driven recommendations.",
    },
    {
      title: "Enhanced Administrative Efficiency",
      description:
        "Automate repetitive tasks, letting educators focus on what matters most.",
    },
    {
      title: "Seamless System Integration",
      description:
        "Connect effortlessly with your existing learning management system and student portals, ensuring a smooth and unified digital experience.",
    },
  ];

  return (
    <section className="py-12 text-white lg:max-w-6xl mx-auto font-ibm-plex-sans">
      <div className="container w-full items-center mx-auto px-4">
        <h2 className="text-3xl md:text-[45px] justify-center font-lato font-bold text-[#181D27] text-center mb-12 md:mb-16">
          Why choose Edusight
        </h2>
        {/* Main container: flex column below lg, flex row for lg and above */}
        <div className="flex flex-col lg:flex-row items-center gap-8 space-x-32">
          <div className="grid gap-y-10 grid-cols-2 gap-x-8 lg:flex lg:flex-col lg:space-y-12  order-2 lg:order-1">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex flex-col items-start gap-3">
                <div className="p-2 flex items-center justify-center rounded-full border border-[#E9EBF1]">
                  <Image
                    src="/images/Vector.svg"
                    alt="Feature icon"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl text-[#060B13] font-lato md:w-56 font-medium mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-[9.92px] lg:max-w-[200px]  font-ibm-plex-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Mockup: Centered, order changes responsively */}
          <div className="w-full max-w-[240px] md:max-w-full flex justify-center my-8 lg:my-0 order-1 lg:order-2">
            <Image
              src="/images/Container.svg"
              alt="Edusight mobile app preview"
              width={330}
              height={360}
              className="object-contain"
            />
          </div>

          {/* Right Features: Grid below lg, Flex column for lg+ */}
          {/* Added grid classes for sm/md, flex for lg, adjusted spacing/width */}
          <div className="w-full grid  gap-y-10 grid-cols-2 gap-x-8 lg:flex lg:flex-col lg:space-y-12  order-3 lg:order-3">
            {features.slice(2, 4).map((feature, index) => (
              <div key={index} className="flex flex-col items-start gap-3">
                <div className="p-2 flex items-center justify-center rounded-full border border-[#E9EBF1]">
                  <Image
                    src="/images/Vector.svg"
                    alt="Feature icon"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl text-[#060B13] font-lato md:w-64 font-medium mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-[9.92px] lg:max-w-64 font-ibm-plex-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
