import { footerLinks } from "@/data/footer";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import arrow from "../../public/images/arrow.png";

const Footer = () => {
  return (
    <footer className="mx-4 md:mx-6 lg:mx-8 rounded-[32px] text-white relative py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-14 overflow-hidden mt-12">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary z-0" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Background decoration (optional) */}
      <div className="absolute right-0 top-0 opacity-10 w-60 h-60 rounded-full bg-white blur-3xl -translate-y-1/2 translate-x-1/2 z-[1]" />

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
                  placeholder="Enter your email"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32">
            {/* Quick Links */}
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-medium text-lg mb-4">Follow Us</h3>
              <ul className="space-y-3">
                {footerLinks.follow.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition duration-200 flex items-center gap-2"
                    >
                      <span className="w-6 h-6 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
                        {/* This would ideally be an icon based on social media type */}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle section - Social and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 mt-12">
          {/* Social Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    aria-label={platform}
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
                  >
                    {/* Icons would go here */}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {footerLinks.contactUs.map((contact) => (
                <li key={contact.name} className="flex items-start gap-3">
                  {contact.name === "email" && (
                    <Mail className="w-5 h-5 mt-1 text-gray-300" />
                  )}
                  {contact.name === "phone" && (
                    <Phone className="w-5 h-5 mt-1 text-gray-300" />
                  )}
                  {contact.name === "address" && (
                    <MapPin className="w-5 h-5 mt-1 text-gray-300" />
                  )}
                  <a
                    href={contact.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {contact.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full h-px bg-white bg-opacity-30 my-8 md:my-12" />

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-32 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center">
              {/* Replace with actual logo */}
              <span className="font-bold text-lg">EDUSIGHT</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="md:max-w-md text-sm md:text-base">
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
