import { HeroBannerProps } from "@/types/types";
import RippleButton from "./RippleButton";

const HeroBanner: React.FC<HeroBannerProps> = ({ video, image, description }) => {
  const renderMedia = () => {
    if (video) {
      return (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      );
    }
    
    if (image) {
      return (
        <img
          src={image.src}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      );
    }
    
    return null;
  };

  return (
    <div className="relative mb-12 w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] rounded-[24px] overflow-hidden">
      {renderMedia()}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-12 md:left-24 z-20 text-white w-[90%] sm:w-[80%] lg:w-[70%]">
        <div className="mb-4 sm:mb-6 md:mb-8 font-lato text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-bold leading-tight">
          {description}
        </div>
        <div className="flex gap-4">
          <RippleButton
            text="Start your Journey"
            className="bg-white text-black hover:text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-ibm-plex-sans text-sm sm:text-base"
            hoverColor="bg-black"
          />
          <RippleButton
            text="Watch Demo Video"
            className="text-white hover:text-black py-3 sm:py-4 px-6 sm:px-8 rounded-full border border-white font-ibm-plex-sans text-sm sm:text-base"
            hoverColor="bg-white"
            play
          />
        </div>
      </div>
    </div>
  );
};


export default HeroBanner;
