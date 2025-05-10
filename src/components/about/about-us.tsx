import RippleButton from "../RippleButton";

export default function AboutUsSection() {
  return (
    <div className="mx-auto px-4 py-8 md:py-16">
      {/* About Us Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-24">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-lato font-bold text-[#181D27]">
            About Us
          </h2>
        </div>
        <div className="space-y-4 md:space-y-6">
          <p className="text-gray-700 font-ibm-plex-sans leading-relaxed text-sm sm:text-base">
            Edusight is at the forefront of redefining how educational
            institutions engage with students in a digital-first world. Founded
            with the vision of enhancing student recruitment and communication,
            our platform leverages advanced AI to streamline interactions,
            automate routine tasks, and provide meaningful, human-like
            experiences at scale. From inquiry to enrollment, Edusight bridges
            the gap between students and institutions through intelligent
            automation and real-time support.
          </p>
          <div>
            <RippleButton
              text="Read More"
              className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-auto py-2 lg:py-3 px-4 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base"
              url="#"
              yellowIcon
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div
        className="rounded-[20px] md:rounded-[40px] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(86, 107, 167, 0.06) 0%, #FFFFFF 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-12 w-full">
          <div>
            <p className="text-black font-ibm-plex-sans mb-1 md:mb-2 text-sm sm:text-base">
              What we value
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-lato font-bold text-[#4a63a9]">
              Our Company&apos;s Values
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 font-ibm-plex-sans w-full">
          <div>
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                Vision
              </h4>
              <div className="w-12 h-1 bg-gray-900"></div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 md:gap-4 font-ibm-plex-sans">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                Mission
              </h4>
              <div className="w-12 h-1 bg-gray-900"></div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                At Edusight, we are dedicated to revolutionizing education through AI-driven technology. Our mission is to create innovative solutions that empower educational institutions by enhancing student engagement, streamlining administrative processes, and facilitating personalized learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
