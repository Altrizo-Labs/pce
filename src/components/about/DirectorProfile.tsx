import React from 'react';
import Image from 'next/image';

const DirectorProfile: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          {/* Placeholder for Director's image */}
          <Image
            src="/images/avif/director.avif"
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
            Mubarak Seeni Mohammed, B.Sc. QS (Hons), MRICS, Director
          </h3>
          <p className="text-gray-700 font-ibm-plex-sans leading-relaxed text-base mb-4">
            Director Mubarak Seeni Mohamed is a Built Environments professional
            specialist in Quantity Surveying/Cost Consultancy with over 25 years
            of experience in successfully managing and delivering large scale,
            complex building and infra-structure projects within the GCC region.
            He is a Chartered Quantity Surveyor, and is Member of Royal
            Institution of Chartered Surveyors (RICS-UK).
          </p>
          <p className="text-gray-700 font-ibm-plex-sans leading-relaxed text-base mb-4">
            Director has gained extensive experience in Commercial, Contract
            Administration and design skill in his various Client, Consultant and
            Contractor roles. His experience extends across each of the main
            project stages (pre-contract/design phase, procurement and post
            contract/construction phase), and covers a wide range of sectors:
            financial institutions, airports, theatre/opera, mall, hotels, data
            centres, residential development, industrial developments, schools,
            marine, hospitals, mosques, roads and bridges.
          </p>
          <p className="text-gray-700 font-ibm-plex-sans leading-relaxed text-base">
            Mubarak has built a sound technical, commercial and contractual
            reputation within the construction industry. This he has done through
            his strong work ethic, technical competence, attention to detail,
            regimented planning, personable and flexible manner, and excellent
            people skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectorProfile;
