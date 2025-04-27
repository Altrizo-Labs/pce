import React from "react";
import Link from "next/link";
import { Headset, BookMinus, Link as LinkIcon, ArrowRight } from "lucide-react"; // Alias Link icon to LinkIcon

const features = [
  {
    title: "Real-Time Support",
    description: "AI chatbot answers student queries instantly.",
    icon: Headset,
    url: "/support",
  },
  {
    title: "Course Assistance",
    description: "Helps students choose the right courses.",
    icon: BookMinus,
    url: "/courses",
  },
  {
    title: "LMS Integration",
    description: "Works with existing learning management systems.",
    icon: LinkIcon,
    url: "/integration",
  },
];

export default function TransformEducationSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Transforming Education with AI
        </h2>
        <p className="text-lg font-normal text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover how Edusight leverages Artificial Intelligence to
          revolutionize the learning experience for students, educators, and
          institutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 rounded-3xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 rounded-lg shadow-md border border-gray-200 transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-[#1E3A8A] hover:to-[rgba(30,58,138,0.75)] hover:text-white lg:min-h-[360px]"
            >
              <div className="flex-grow">
                {" "}
                {/* Added flex-grow wrapper for content */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-white">
                  <feature.icon className="h-6 w-6 text-[#1E3A8A] group-hover:text-[#1E3A8A]" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-[#181D27] max-w-36 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-100">
                  {feature.description}
                </p>
              </div>
              {/* Arrow Link - Icon has gradient, no background circle */}
              <Link
                href={feature.url}
                className="absolute bottom-6 right-6 mt-auto"
              >
                {" "}
                <ArrowRight className="w-8 h-8 text-[#FCCF37] group-hover:text-[#FEDC69] duration-300 ease-in-out" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
