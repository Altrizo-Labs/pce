import React from 'react';

const PartnershipSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-[40px] font-lato font-bold text-[#181D27] text-center mb-8">
          Our Core Partnership with DSO
        </h2>
        <div className="text-gray-700 font-ibm-plex-sans leading-relaxed text-base text-center max-w-3xl mx-auto">
          <p className="mb-4">
            [Detailed information about the partnership with Daan Shaaban Office (DSO) in Oman. Highlight the history of collaboration and how the partnership strengthens PCE's capabilities and service delivery. Placeholder text.]
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            DSO is our core partner, and our team has a strong history of working together on numerous successful projects in the Middle East. This partnership allows us to leverage combined expertise and resources to provide exceptional value to our clients.
          </p>
          {/* Potentially add logos or testimonials related to the partnership */}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
