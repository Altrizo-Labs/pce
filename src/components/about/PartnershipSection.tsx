import React from 'react';
import Image from 'next/image';

const PartnershipSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-[40px] font-lato font-bold text-[#181D27] text-start mb-8">
          Our Core Partnership with DSO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Column */}
          <div className="text-gray-700 font-ibm-plex-sans leading-relaxed text-base md:text-left">
            <p className="mb-4">
              [Detailed information about the partnership with Daan Shaaban Office (DSO) in Oman. Highlight the history of collaboration and how the partnership strengthens PCE's capabilities and service delivery. Placeholder text.]
              This partnership allows us to leverage combined expertise and resources to provide exceptional value to our clients.
            </p>
            <p className="font-semibold">
              DSO is our core partner, and our team has a strong history of working together on numerous successful projects in the Middle East.
            </p>
            {/* Potentially add logos or testimonials related to the partnership */}
          </div>

          {/* Image Column */}
          <div className="flex justify-end">
            <Image
              src="/images/avif/whychooseus-partnership-agreement.avif" 
              alt="Partnership with DSO"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
