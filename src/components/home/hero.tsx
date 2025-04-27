import RippleButton from "../RippleButton";
import { ContainerScroll } from "../ui/container-scroll-animation";

export default function Hero() {
  return (
    <div className="rounded-t-[32px] h-[800px] bg-gradient-to-b from-primary from-10%  via-primary/20 to-100% to-transparent p-12 relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 relative z-10">
        <p className="text-[#F3F4F6] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-lato font-bold">
          Smart Education Driven by Innovation Shaping Student Success
        </p>

        <div>
          <p className="text-xs sm:text-sm md:text-[16px] text-[#F3F4F6] mb-8 leading-normal md:leading-relaxed">
            AI-powered solutions to enhance student engagement, streamline
            administration, and personalize learning—helping institutions stay
            ahead in today's fast-paced education landscape.
          </p>
          <RippleButton
            text="Book a Demo"
            className="bg-white font-lato rounded-[12px] w-full lg:w-auto py-2 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base z-50"
            url=""
            icon
          />
        </div>
      </div>

      {/* Container Scroll positioned absolutely to be "in" the background */}
      <div className="absolute inset-0 top-[180px] md:top-[150px] lg:top-[120px] w-full h-full mt-16">
        <ContainerScroll>
          <img
            src={`/linear.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}