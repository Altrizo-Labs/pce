import { footerLinks } from "@/data/footer";
import Link from "next/link";
import Image from "next/image";

import fb from "../../public/images/facebook.svg";
import instagram from "../../public/images/instagram.svg";
import twitter from "../../public/images/twitter.svg";

import logo from "../../public/images/footer_logo.png";

const Footer = () => {
  return (
    <footer className="mx-4 mb-4 rounded-[32px] text-white relative py-12 px-8 lg:px-12 overflow-hidden mt-12">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-primary z-0" />
      {/* Dot pattern overlay */}
      

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <span className="relative w-52 lg:w-72 z-[999] text-4xl lg:text-5xl font-bold font-lato tracking-wide text-white">PCE</span>
            </Link>
            <h2 className="text-[14px] lg:text-[16px] font-ibm-plex-sans">
              Projects Cost Engineering (Pvt) Ltd provides expert Quantity Surveying and Cost Engineering services, built on extensive experience and adherence to international standards.
            </h2>
          </div>

          {/* Right column */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-0">
            {footerLinks
              .filter((section) =>
                ["QUICK LINKS", "CONTACT"].includes(section.title) // Filter for QUICK LINKS and CONTACT
              )
              .map((section) => (
                <div key={section.title} className={section.title === "CONTACT" ? "md:hidden lg:block" : ""}>
                  <h3 className="font-medium text-[16px] mb-4 font-lato">
                    {section.title}
                  </h3>
                  {/* Corrected font class */}
                  <ul className="space-y-3 text-[14px] font-ibm-plex-sans">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        {link.href ? (
                          <Link
                            href={link.href}
                            className={`text-gray-300/50 hover:text-gray-300 transition duration-200 ${section.style}`}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <span className="text-gray-300/50">{link.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Middle section - Social and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 mt-12">
          
          <div className="md:hidden grid grid-cols-2 gap-8 lg:gap-0">
            {footerLinks
              .filter((section) => section.title === "QUICK LINKS") // Filter for QUICK LINKS only
              .map((section) => (
                <div key={section.title}>
                  <h3 className="font-medium text-[16px] mb-4 font-lato">
                    {section.title}
                  </h3>
                  {/* Corrected font class */}
                  <ul className="space-y-3 text-[14px] font-ibm-plex-sans">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        {link.href ? (
                          <Link
                            href={link.href}
                            className={`text-gray-300/50 hover:text-gray-300 transition duration-200 ${section.style}`}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <span className="text-gray-300/50">{link.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          {/* Contact Us */}
          <div className="gap-8 lg:gap-32">
            {footerLinks
              .filter((section) => section.title === "CONTACT")
              .map((section) => (
                <div key={section.title}>
                  <h3 className="lg:hidden font-medium text-[16px] mb-4 font-lato">
                    {section.title}
                  </h3>

                  {/* Mobile */}
                  <ul className="lg:hidden grid grid-rows-2 gap-4 font-ibm-plex-sans text-[14px]">
                    {/* First row - centered item (address) */}
                    <li className="row-start-1 col-span-1 text-gray-300/50 hover:text-gray-300 transition duration-200">
                      <span className={section.style}>
                        {section.links[0].name}
                      </span>
                    </li>

                    {/* Second row - flex container with phone and email */}
                    <li className="row-start-2 col-span-1">
                      <div className="flex justify-between w-full">
                        {/* Phone */}
                        {section.links[1] && (
                          <a
                            href={`tel:${section.links[1].href}`}
                            className={`text-gray-300/50 hover:text-gray-300 transition duration-200 ${section.style}`}
                          >
                            {section.links[1].name}
                          </a>
                        )}
                        {/* Email */}
                        {section.links[2] && (
                          <a
                            href={`mailto:${section.links[2].href}`}
                            className={`text-gray-300/50 hover:text-gray-300 transition duration-200 text-right ${section.style}`}
                          >
                            {section.links[2].name}
                          </a>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Altrizo Labs attribution */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-gray-300/70">
            Designed and developed by{" "}
            <a
              href="https://www.altrizolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-200"
            >
              Altrizo Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
