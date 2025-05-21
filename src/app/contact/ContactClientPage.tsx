"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import gsap from "gsap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import RippleButton from "../../components/RippleButton";

function Contact() { // Renamed from Contact_Us to be the main export
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const contactDetailsRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Removed reCAPTCHA logic

    try {
      const formData = {
        name,
        email,
        message,
      };

      const response = await axios({
        method: "post",
        url: "https://formspree.io/f/xgvkqjra", // This Formspree endpoint needs to be updated for PCE
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setMessageSent(true);
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    }
  };

  // Scroll-based animation effect using GSAP
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animation for heading
    if (headingRef.current) {
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    // Animation for introductory text
    if (introTextRef.current) {
      tl.fromTo(
        introTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );
    }

    // Animation for contact details and form container
    if (contactDetailsRef.current) {
      tl.fromTo(
        contactDetailsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.5"
      );
    }

    if (formContainerRef.current) {
      tl.fromTo(
        formContainerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }

    // Trigger the animation for the elements when the component is mounted
    window.addEventListener("scroll", () => {
      if (formContainerRef.current) {
        const formTop = formContainerRef.current.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (formTop < screenHeight * 0.8) {
          tl.play();
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 3000);

      // Clean up the timer if the component is unmounted or if messageSent changes
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <div className="py-12">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="relative lg:pt-24 pt-20 mx-2 md:mx-12 lg:mx-20 pb-12">
        <div className="min-h-screen text-white flex flex-col justify-center items-center">
          {/* Top Container */}
          <div className="container mx-auto px-6 flex flex-col lg:items-center text-left lg:text-center mb-24 lg:mb-36">
            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-6xl font-lato font-[700] text-[#1E3A8A] leading-tight mb-4"
            >
              Get in Touch with PCE
            </h1>

            {/* Intro Text */}
            <p
              ref={introTextRef}
              className="text-base font-ibm-plex-sans opacity-0 text-[#181D27] max-w-4xl"
            >
              We are ready to discuss your project needs and provide expert Quantity Surveying and Cost Engineering solutions.
            </p>
          </div>

          {/* Bottom Container */}
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Contact Details */}
            <div
              ref={contactDetailsRef}
              className="flex flex-col justify-start space-y-10 opacity-0 text-[#181D27]"
            >
              {/* New Heading */}
              <h2 className="text-[32px] lg:text-5xl font-lato text-[#181D27] font-semibold leading-tight mb-2 max-w-sm">
                Contact Information
              </h2>

              {/* New Paragraph */}
              <p className="lg:text-xl text-lg lg:text-left font-ibm-plex-sans text-gray-600 mb-6 max-w-lg">
                Feel free to reach out to us through the contact form or using the details below.
              </p>

              <div className="gap-y-24">
                {/* Email */}
                <div className="mb-12 lg:mb-16">
                  <p className="mb-1 text-[#535862] text-xl font-semibold">Email:</p>
                  <p className="text-[#181D27] text-lg">[PCE Email Address Placeholder]</p>
                </div>

                {/* Phone */}
                 <div className="mb-12 lg:mb-16">
                  <p className="mb-1 text-[#535862] text-xl font-semibold">Phone:</p>
                  <p className="text-[#181D27] text-lg">[PCE Phone Number Placeholder]</p>
                </div>

                {/* Address */}
                 <div className="mb-12 lg:mb-16">
                  <p className="mb-1 text-[#535862] text-xl font-semibold">Address:</p>
                  <p className="text-[#181D27] text-lg">[PCE Physical Address Placeholder]</p>
                </div>


                {/* Social Icons */}
                <div className="mb-6">
                  <p className="mb-4 text-[#535862] text-xl font-semibold">Social Network.</p>
                  <div className="flex space-x-4 text-2xl text-[#1E3A8A]">
                    <a
                      href="#" // Placeholder link
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Follow us on Facebook"
                    >
                      <FaFacebookSquare />
                    </a>
                    <a
                      href="#" // Placeholder link
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Follow us on X"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href="#" // Placeholder link
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Follow us on LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Right Column: Form */}
            <div ref={formContainerRef} className="opacity-0 bg-[#F3F4F6] p-8 lg:p-16 rounded-[20px]">
              <h3 className="text-4xl font-ibm-plex-sans font-medium text-[#181D27] mb-2">Send us a Message</h3>
              <p className="text-gray-600 font-ibm-plex-sans text-xl mb-8">Fill out the form below to get in touch with us.</p>

              <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 bg-transparent border-b border-gray-400 text-[#181D27] focus:outline-none focus:border-[#3B5998]"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-transparent border-b border-gray-400 text-[#181D27] focus:outline-none focus:border-[#3B5998]"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-transparent border-b border-gray-400 text-[#181D27] focus:outline-none focus:border-[#3B5998]"
                    rows={4}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <RippleButton
                  text="Send Message"
                  className="bg-primary rounded-[12px] w-full text-lg lg:w-auto py-3 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap mt-6 text-white"
                  type="submit"
                  yellowArrow
                  useYellowHover={true} // Added yellow hover
                />
                {/* Location Map Placeholder */}
                <div className="mb-6">
                  <p className="mb-4 text-[#535862] text-xl font-semibold">Our Location.</p>
                  <div className="h-64 w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.397101429008!2d79.83505006867067!3d6.902210820520063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25910819377c9%3A0x2cfa587377993903!2sPort%20City%20Colombo!5e0!3m2!1sen!2slk!4v1678886"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Colombo Port City Location"
                    ></iframe>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Contact;
