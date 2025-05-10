import React from "react";
import {
  Headset,
  BookMinus,
  Link as LinkIcon,
} from "lucide-react";
import CustomArrowRight from "../icons/CustomArrowRight"; 

const features = [
  {
    title: "Real-Time Support",
    description: "AI chatbot answers student queries instantly.",
    icon: Headset,
    url: "/support",
    textColor: "text-[#1E3A8A]",
  },
  {
    title: "Course Assistance",
    description: "Helps students choose the right courses.",
    icon: BookMinus,
    url: "/courses",
    textColor: "text-[#897EC2]",
  },
  {
    title: "LMS Integration",
    description: "Works with existing learning management systems.",
    icon: LinkIcon,
    url: "/integration",
    textColor: "text-[#52ADD8]",
  },
];

export default function TransformEducationSection() {
  return (
    <section className="py-16 md:py-24 font-ibm-plex-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] md:text-[45px] font-bold text-center text-gray-800 mb-4 font-lato">
          Transforming Education with AI
        </h2>
        <p className="text-[18px] md:text-[20px] text-center text-gray-600 mb-12 mx-auto font-ibm-plex-sans">
          Edusight's AI-powered chatbot enhances student-institution communication by
          providing real-time support, course assistance, and seamless LMS
          integration—making learning smarter and more efficient.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 mx-auto "> 
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col mx-auto p-6 rounded-[20px] shadow-md border border-gray-200 transition duration-300 ease-in-out bg-white hover:bg-[linear-gradient(135deg,_#1E3A8A_0%,_#1E3A8ABF_100%)] hover:text-white lg:w-[336px] lg:min-h-[413px]"
            >
              <div className="flex-grow">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#F3F2F8] rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20">
                  <feature.icon
                    className={`h-6 w-6 lg:w-[36px] lg:h-[36px] transition-colors duration-300 ease-in-out ${feature.textColor} group-hover:text-white`} // Added lg icon sizes
                  />
                </div>
                <h3 className="text-[24px] md:text-[32px] font-bold mb-2 text-[#181D27] max-w-40 group-hover:text-white font-lato">
                  {feature.title}
                </h3>
                <p className="text-[18px] md:text-[20px] max-w-[250px] text-gray-600 group-hover:text-gray-100 font-ibm-plex-sans">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
