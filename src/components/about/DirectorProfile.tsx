import React from 'react';
import Image from 'next/image';

const DirectorProfile: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          {/* Placeholder for Director's image */}
          <Image
            src="/images/business_person.png" // Using a placeholder image
            alt="Director's Photo"
            width={300}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-[40px] font-lato font-bold text-[#181D27] mb-4">
            Meet Our Director
          </h2>
          <h3 className="text-xl font-lato font-medium text-gray-700 mb-4">
            [Director's Name Placeholder], Director
          </h3>
          <p className="text-gray-700 font-ibm-plex-sans leading-relaxed text-base">
            [Detailed biography of the Director, highlighting 25 years of experience in the Middle East and expertise in Quantity Surveying and Cost Engineering. Placeholder text.]
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* Add more details about experience, achievements, etc. */}
        </div>
      </div>
    </section>
  );
};

export default DirectorProfile;
