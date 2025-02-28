"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { footerLinks } from "@/data/footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show "Go to Top" button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="geist-satoshi footer-background max-w-[2304px] mx-auto text-white relative pb-7 md:pb-o">
      <div className="py-12 md:py-24 mx-4 md:mx-14">
        <div className=" mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Column */}
            <div className="flex flex-col items-start">
              <Image
                src="/footer-logo.png"
                alt="Footer Logo"
                width={350}
                height={70}
                className="ml-[-10px]"
              />
              <p className="mt-4 text-sm md:text-lg font-light geist-gtflexa tracking-widest">
                Transforming Data into
                <br />
                Growth, Insights, and
                <br />
                Innovation.
              </p>
            </div>

            {/* Second Column (Empty for spacing) */}
            <div className="hidden md:block"></div>

            {/* Third Column */}
            <div className="flex flex-col space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-light text-lg mb-2 geist-gtflexa">
                    Quick Links
                  </h3>
                  <ul className="text-[#949494] space-y-2 text-sm geist-satoshi">
                    {footerLinks.quickLinks.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="hover:underline">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-light mb-2 geist-gtflexa">Follow Us</h3>
                  <ul className="text-[#949494] text-sm geist-satoshi">
                    {footerLinks.follow.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="hover:underline">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-light text-lg mb-2 geist-gtflexa">
                  Contact Us
                </h3>
                <ul className="text-[#949494] space-y-2 text-sm geist-satoshi">
                  {footerLinks.contactUs.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="hover:underline">
                        {link.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 geist-satoshi gap-4 font-light text-sm text-[#949494] text-center md:text-left">
            <div>
              <p>
                © {currentYear} Cinnamon Digital Solutions. All rights reserved.
              </p>
            </div>
            <div className="md:text-right">
              <p>Designed and Developed by Axle Global</p>
            </div>
          </div>
        </div>
      </div>

      {/* Go to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-8 bg-red-600 hover:bg-red-500 text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50 "
          style={{
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Scroll to top"
        >
          {/* Upward Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
