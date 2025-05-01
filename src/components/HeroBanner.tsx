import { HeroBannerProps } from '@/types/types';
import RippleButton from './RippleButton';

const HeroBanner: React.FC<HeroBannerProps> = ({ description }) => {
  return (
    <div className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] rounded-[24px]">
      {/* <video 
        src={video} 
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-[24px]"
      /> */}
      <div className="absolute inset-0 bg-black w-full h-full object-cover z-0 rounded-[24px]" />

      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-12 md:left-24 z-10 text-white w-[90%] md:w-[80%]">
        <div className="mb-4 sm:mb-6 md:mb-8 font-lato text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-bold leading-tight">
          {description}
        </div>
        <div className="flex gap-4">
          <RippleButton text="Start your Journey" className="bg-white text-black py-3 sm:py-4 px-6 sm:px-8 rounded font-ibm text-sm sm:text-base" />
          <RippleButton text="Watch Demo Video" className="bg-white text-black py-3 sm:py-4 px-6 sm:px-8 rounded font-ibm text-sm sm:text-base" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
