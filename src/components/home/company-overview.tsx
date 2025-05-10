import RippleButton from "../RippleButton";

export default function CompanyOverview() {
  return (
    <div className="md:mx-12 lg:mx-24 py-12 lg:py-24 mt-12">
      <p className="text-[32px] lg:text-[45px] text-lato font-[700] lg:leading-[60px] mb-6 lg:w-[80%]">
        Edusight delivers AI-powered tools that enhance engagement, simplify
        operations, and support student success.
      </p>

      {/* Corrected font class */}
      <p className="mb-6 text-[14px] lg:text-[16px] text-[#535862] font-ibm-plex-sans lg:w-[44%]">
        With a deep understanding of academia and the power of artificial
        intelligence, we create tools that bridge gaps, boost efficiency, and
        elevate every touchpoint in the student journey.
      </p>

      <RippleButton
        text="About Us"
        className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-auto py-2 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base z-0"
        url=""
        yellowIcon
      />
    </div>
  );
}
