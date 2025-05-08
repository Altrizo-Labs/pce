import RippleButton from "../RippleButton";

export default function AboutUsSection() {
  return (
    <div className="mx-auto px-4 py-16">
      {/* About Us Section */}
      <div className="px-28 grid md:grid-cols-2 gap-8 mb-24">
        <div>
          <h2 className="text-3xl font-lato md:text-4xl font-bold text-[#181D27]">
            About Us
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-gray-700 font-ibm-plex-sans leading-relaxed">
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
              className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-auto py-2 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base z-50"
              url="#"
              yellowIcon
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div
        className="rounded-[40px] p-8 md:p-12 flex flex-row gap-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(86, 107, 167, 0.06) 0%, #FFFFFF 100%)",
        }}
      >
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 mb-12">
          <div>
            <p className="text-black font-ibm-plex-sans mb-2">What we value</p>
            <h3 className="text-3xl md:text-4xl font-lato font-bold text-[#4a63a9]">
              Our Company&apos;s Values
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 font-ibm-plex-sans">
          <div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold text-gray-900">Vision</h4>
              <div className="w-12 h-1 bg-gray-900"></div>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 font-ibm-plex-sans">
              <h4 className="text-xl font-bold text-gray-900">Mission</h4>
              <div className="w-12 h-1 bg-gray-900"></div>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
