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
        "Reduce workload by automating repetitive tasks, allowing educators to focus on what matters most.",
    },
    {
      title: "Seamless System Integration",
      description:
        "Connect effortlessly with your existing LMS and student portals for a smooth digital experience.",
    },
  ];

  // Removed extra opening curly brace from return statement
  return (
    <section className="py-12 text-white lg:w-[80%] mx-auto font-ibm-plex-sans">
      <div className="container mx-auto px-4">
        {/* Updated section title: font, size, responsiveness */}
        <h2 className="text-3xl md:text-[45px] font-lato font-bold text-[#181D27] text-center mb-12 md:mb-16">
          Why choose Edusight
        </h2>
        {/* Adjusted vertical alignment for lg screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Features */}
          {/* Adjusted space-y for responsiveness */}
          {/* Left Features - Added lg:items-end for right alignment on large screens */}
          <div className="w-full lg:w-[40%] space-y-10 md:space-y-12">
            {features.slice(0, 2).map((feature, index) => (
              // Added lg:items-end
              <div key={index} className="flex flex-col items-start gap-3">
                {/* Adjusted icon size and container padding */}
                <div className="p-2 flex items-center justify-center rounded-full border border-[#E9EBF1]">
                  <Image
                    src="/images/Vector.svg"
                    alt="Feature icon"
                    width={32} // Adjusted icon size
                    height={32}
                  />
                </div>

                {/* Added lg:text-right to text container */}
                <div className="lg:text-left">
                  {/* Updated feature title: font, size */}
                  <h3 className="text-lg md:text-xl text-[#060B13] font-lato font-medium mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  {/* Updated feature description: font, size */}
                  <p className="text-gray-400 text-[10px] font-ibm-plex-sans">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Mockup - Adjusted max-width */}
          <div className="w-full max-w-[240px] md:max-w-xs lg:w-1/3 flex justify-center my-8 lg:my-0 order-first lg:order-none">
            <Image
              src="/images/mobile-simulator.png"
              alt="Edusight mobile app preview"
              width={300}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right Features - Adjusted space-y for responsiveness */}
          <div className="w-full lg:w-[40%] space-y-10 md:space-y-12">
            {features.slice(2, 4).map((feature, index) => (
              // Changed layout to flex-col, adjusted gap
              <div key={index} className="flex flex-col items-start gap-3">
                 {/* Adjusted icon size and container padding */}
                <div className="p-2 flex items-center justify-center rounded-full border border-[#E9EBF1]">
                  <Image
                    src="/images/Vector.svg"
                    alt="Feature icon"
                    width={28} // Adjusted icon size
                    height={28}
                  />
                </div>

                <div>
                  {/* Updated feature title: font, size */}
                  <h3 className="text-lg md:text-xl text-[#060B13] font-lato font-medium mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                   {/* Updated feature description: font, size */}
                  <p className="text-gray-400 text-[10px] font-ibm-plex-sans">{feature.description}</p>
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
