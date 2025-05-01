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

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[45px] font-bold text-[#181D27] text-center mb-12">
          Why choose Edusight
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Features */}
          <div className="w-full lg:w-[40%] space-y-8">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full border border-[#E9EBF1]">
                  <Image
                    src="/images/Vector.svg"
                    alt="Feature icon"
                    width={40}
                    height={40}
                  />
                </div>

                <div>
                  <h3 className="text-xl text-[#060B13] font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="w-full max-w-xs lg:w-1/3 flex justify-center my-8 lg:my-0">
            <Image
              src="/images/mobile-simulator.png"
              alt="Edusight mobile app preview"
              width={300}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="w-full lg:w-[40%] space-y-8">
            {features.slice(2, 4).map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full border border-[#E9EBF1]">
                  <Image
                    src="/images/Vector.svg"
                    alt="Feature icon"
                    width={60}
                    height={60}
                  />
                </div>

                <div>
                  <h3 className="text-xl text-[#060B13] font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
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
