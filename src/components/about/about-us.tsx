import RippleButton from "../RippleButton";

export default function AboutUsSection() {
  return (
    <div className="mx-auto py-5 md:py-16">
      {/* About Us Section */}
      <div className="px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-24">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-lato font-bold text-[#181D27]">
            About Projects Cost Engineering (Pvt) Ltd
          </h2>
        </div>
        <div className="space-y-8 md:space-y-6">
          <p className="text-gray-700 font-ibm-plex-sans leading-relaxed text-sm sm:text-base">
            Projects Cost Engineering (Pvt) Ltd (PCE) was founded in 2024 in Sri Lanka. Our Director brings over 25 years of extensive experience from working in the Middle East. PCE operates under strict international business standards and practices, ensuring high-quality and reliable services. Our team comprises qualified and experienced professionals, many of whom have worked alongside the Director at Daan Shaaban Office (DSO) in Oman, our core partner. We are committed to providing expert Quantity Surveying, Cost Engineering, and related services to our clients.
          </p>
          <div>
            <RippleButton
              text="Our Partnership"
              className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-auto py-2 lg:py-3 px-4 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base"
              url="/about#partnership" // Link to a potential partnership section
              yellowIcon
            />
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div
        className=" min-h-[#452] rounded-[40px] p-8 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(86, 107, 167, 0.06) 0%, #FFFFFF 100%)",
        }}
      >
        <div className="md:mb-12 lg:min-w-[460px]">
          {" "}
          {/* MODIFIED: Removed grid, grid-cols, and gap classes */}
          <div>
            <p className="text-black font-ibm-plex-sans mb-1 md:mb-8 sm:text-2xl text-xl">
              Our Approach
            </p>
            <h3 className="sm:text-6xl text-5xl font-lato font-bold text-[#4a63a9]">
              Our Principles
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 md:gap-12 font-ibm-plex-sans w-full">
          <div>
            <div className="flex flex-col gap-3 md:gap-5">
              <h4 className="text-xl sm:text-2xl font-semibold font-ibm-plex-sans text-[#1E3A8A]">
                Vision
              </h4>
              <div className="w-12 h-1 bg-gray-900"></div>
              <p className="text-gray-700 font-ibm-plex-sans leading-relaxed text-sm sm:text-base">
                To be a leading provider of Quantity Surveying and Cost Engineering services, recognized for our expertise, integrity, and commitment to international standards. (Placeholder Vision)
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 md:gap-5 font-ibm-plex-sans">
              <h4 className="text-xl sm:text-2xl font-semibold text-[#1E3A8A]">
                Mission
              </h4>
              <div className="w-12 h-1 bg-gray-900"></div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To deliver exceptional Quantity Surveying and Cost Engineering solutions that provide value and certainty to our clients' projects, adhering to the highest professional and ethical standards. (Placeholder Mission)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
