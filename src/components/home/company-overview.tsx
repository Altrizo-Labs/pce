import RippleButton from "../RippleButton";

export default function CompanyOverview() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 mt-12">
      <p className="text-[32px] lg:text-[45px] text-lato font-[700] lg:leading-[60px] mb-6 lg:w-[80%]">
        Projects Cost Engineering (Pvt) Ltd: Expertise Built on Experience and International Standards
      </p>

      {/* Corrected font class */}
      <p className="mb-6 text-[14px] lg:text-[16px] text-[#535862] font-ibm-plex-sans lg:w-[80%]">
        Founded in 2024 in Sri Lanka, PCE benefits from the Director's 25 years of experience in the Middle East. The company operates under strict international business standards and practices and is manned by a team of qualified and experienced professionals who worked with the Director in Daan Shaaban Office (DSO) in Oman, our core partner.
      </p>

      <RippleButton
        text="About Us"
        className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-auto py-2 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base z-0"
        url="/about"
        yellowIcon
      />
    </div>
  );
}
