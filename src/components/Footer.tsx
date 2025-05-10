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
      <div
        className="absolute inset-0 z-[1] opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <Image src={logo} alt="logo" className="relative w-52 lg:w-72 z-[999]" />

            <h2 className="text-[14px] lg:text-[16px] font-ibm-plex-sans">
              Transform your institution with intelligent AI solutions that
              drive engagement, efficiency, and student success.
            </h2>
          </div>

          {/* Right column */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0">
            {footerLinks
              .filter((section) =>
                ["QUICK LINKS", "COMPLIANCE"].includes(section.title)
              )
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
        </div>

        {/* Middle section - Social and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 mt-12">
          {/* Social Links */}
          <div className="self-end mb-4">
            <div className="flex flex-wrap gap-4">
              {["Facebook", "Instagram", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition"
                >
                  {platform === "Facebook" && (
                    <Image
                      src={fb}
                      className="w-6 h-6 text-white"
                      alt="Facebook icon"
                    />
                  )}
                  {platform === "Instagram" && (
                    <Image
                      src={instagram}
                      className="w-6 h-6 text-white"
                      alt="Instagram icon"
                    />
                  )}
                  {platform === "Twitter" && (
                    <Image
                      src={twitter}
                      className="w-6 h-6 text-white"
                      alt="Twitter icon"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 gap-8 lg:gap-0">
            {footerLinks
              .filter((section) =>
                ["QUICK LINKS", "COMPLIANCE"].includes(section.title)
              )
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
                  <h3 className="font-medium text-[16px] mb-4 font-lato">
                    {section.title}
                  </h3>
                  {/* Corrected font class */}
                  <ul className="hidden lg:grid grid-cols-3 items-start self-start gap-12 text-[14px] font-ibm-plex-sans">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        {link.href ? (
                          <a
                            href={link.href}
                            className={`text-gray-300/50 hover:text-gray-300 transition duration-200 ${section.style}`}
                          >
                            {link.name}
                          </a>
                        ) : (
                          <span className="text-gray-300/50 hover:text-gray-300">
                            {link.name}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <ul className="lg:hidden grid grid-rows-2 gap-4 font-ibm-plex-sans text-[14px]">
                    {/* First row - centered item */}
                    <li className="row-start-1 col-span-1  text-gray-300/50 hover:text-gray-300 transition duration-200">
                      {section.links[0].href ? (
                        <a
                          href={section.links[0].href}
                          className={section.style}
                        >
                          {section.links[0].name}
                        </a>
                      ) : (
                        <span className={section.style}>
                          {section.links[0].name}
                        </span>
                      )}
                    </li>

                    {/* Second row - flex container with left and right items */}
                    <li className="row-start-2 col-span-1">
                      <div className="flex justify-between w-full">
                        {section.links[1] && (
                          <span className="text-gray-300/50 hover:text-gray-300 transition duration-200">
                            {section.links[1].href ? (
                              <a
                                href={section.links[1].href}
                                className={section.style}
                              >
                                {section.links[1].name}
                              </a>
                            ) : (
                              <span className={section.style}>
                                {section.links[1].name}
                              </span>
                            )}
                          </span>
                        )}
                        {section.links[2] && (
                          <span className="text-gray-300/50 hover:text-gray-300 transition duration-200 text-right">
                            {section.links[2].href ? (
                              <a
                                href={section.links[2].href}
                                className={section.style}
                              >
                                {section.links[2].name}
                              </a>
                            ) : (
                              <span className={section.style}>
                                {section.links[2].name}
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
