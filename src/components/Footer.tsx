import { footerLinks } from "@/data/footer";
import Link from "next/link";
import Image from "next/image";

import arrow from "../../public/images/arrow.png";;

import fb from "../../public/images/facebook.png"
import instagram from "../../public/images/instagram.png"
import twitter from "../../public/images/twitter.png"

import logo from "../../public/images/footer_logo.png"

const Footer = () => {
  return (
    <footer className="mx-4 mb-4 rounded-[32px] text-white relative py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-14 overflow-hidden mt-12">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-primary z-0" />
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lato leading-tight">
              Empower Learning with Edusight
            </h2>

            {/* Newsletter signup */}
            <div className="mt-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  className="bg-transparent p-3 md:p-4 rounded-full border-white border flex-grow"
                  aria-label="Email for newsletter"
                />
                <button className="bg-secondary text-primary font-medium p-3 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-opacity-90 transition">
                  <Image
                    src={arrow}
                    alt="arrow icon"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0">
            {footerLinks
              .filter((section) =>
                ["QUICK LINKS", "COMPLIANCE"].includes(section.title)
              )
              .map((section) => (
                <div key={section.title}>
                  <h3 className="font-medium text-[16px] mb-4 font-lato">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-[14px] font-ibm">
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
          <div>
            <div className="flex flex-wrap gap-4">
              {["Facebook", "Instagram", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition"
                >
                  {platform === "Facebook" && ( 
                    <Image src={fb} className="w-6 h-6 text-white" alt="Facebook icon" />
                  )}
                  {platform === "Instagram" && (
                    <Image src={instagram} className="w-6 h-6 text-white" alt="Instagram icon" />
                  )}
                  {platform === "Twitter" && (
                    <Image src={twitter} className="w-6 h-6 text-white" alt="Twitter icon" />
                  )}
                </a>
              ))}
            </div>
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
                  <ul className="space-y-3 grid grid-cols-3 gap-12 text-[14px] font-ibm">
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
                </div>
              ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full h-px bg-white bg-opacity-30 my-8 md:my-12" />

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32">
          {/* Logo */}
          <div className="flex items-center">
              <Image src={logo} alt="EduSight Logo" loading="lazy" />
           </div>

          {/* Tagline */}
          <div className="text-sm md:text-[16px] leading-6 font-ibm">
            <p>
              Transform your institution with intelligent AI solutions that
              drive engagement, efficiency, and student success.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
