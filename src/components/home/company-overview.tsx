import RippleButton from "../RippleButton";

export default function CompanyOverview() {
  return (
    <div className="mx-4 lg:mx-12 py-12 mt-12">
      <p className="text-[45px] text-lato font-[700] leading-[60px] mb-6 lg:w-[72%]">
        Edusight delivers AI-powered tools that enhance engagement, simplify
        operations, and support student success.
      </p>

      <p className="mb-6 text-[16px] text-[#535862] font-ibm lg:w-[41%]">
        With a deep understanding of academia and the power of artificial
        intelligence, we create tools that bridge gaps, boost efficiency, and
        elevate every touchpoint in the student journey.
      </p>

      <RippleButton
        text="About Us"
        className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-full lg:w-auto py-2 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base z-50"
        url=""
        yellowIcon
      />
    </div>
  );
}
