"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  return (
    <GoogleCaptchaWrapper>
      <Contact_Us />
    </GoogleCaptchaWrapper>
  );
}

function Contact_Us() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const contactDetailsRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      toast.error("Recaptcha function is not available");
      console.error("Execute recaptcha function is not available");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("contact_us");

    if (!gRecaptchaToken) {
      console.error("Recaptcha token is not available");
      return;
    }

    try {
      if (gRecaptchaToken) {
        const response = await axios({
          method: "post",
          url: "/api/recaptcha",
          data: {
            gRecaptchaToken,
          },
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });

        if (response.data.success) {
          console.log("Recaptcha score:", response.data.score);
        } else {
          console.error("Recaptcha failed");
          return;
        }
      }
    } catch (error) {
      toast.error("Failed to verify recaptcha");
      console.error(error);
    }

    try {
      const formData = {
        name,
        email,
        university,
        role,
        message,
      };

      const response = await axios({
        method: "post",
        url: "https://formspree.io/f/xlddzqqe",
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
        setUniversity("");
        setRole("");
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
      window.removeEventListener("scroll", () => {});
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
    <div className="contactus-background">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="relative lg:pt-24 pt-20 mx-4 md:mx-14 lg:mx-20 pb-12">
        <div className="min-h-screen text-white flex flex-col justify-center items-center">
          {/* Top Container */}
          <div className="container mx-auto px-6 flex flex-col items-center text-center mb-24 lg:mb-36">
            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-6xl font-lato font-[700] text-[#1E3A8A] leading-tight mb-4"
            >
              Contact Us
            </h1>

            {/* Intro Text */}
            <p
              ref={introTextRef}
              className="text-base opacity-0 text-[#181D27] max-w-4xl"
            >
              AI-powered solutions to enhance student engagement, streamline
              administration, and personalize learning—helping institutions stay
              ahead in today&apos;s fast-paced education landscape.
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
              <h2 className="text-5xl font-lato text-[#181D27] font-semibold leading-tight mb-4 max-w-sm">
                We are always ready to help you and answer your questions.
              </h2>

              {/* New Paragraph */}
              <p className="text-xl text-gray-600 mb-6 max-w-lg">
                Edusight is committed to transforming how institutions engage with students by leveraging the power of AI. From automating communication to personalizing support, our intelligent solutions help create more connected, efficient, and student-focused learning environments.
              </p>

              {/* Email */}
              <div className="mb-12">
                <p className="mb-1 text-[#535862] text-xl font-semibold">Email us directly.</p>
              </div>

              {/* Schedule a Call */}
              <div className="mb-12">
                <p className="mb-1 text-[#535862] text-xl font-semibold">Schedule a call.</p>
              </div>

              {/* Social Icons */}
              <div className="mb-6">
                <p className="mb-4 text-[#535862] text-xl font-semibold">Social Network.</p>
                <div className="flex space-x-4 text-2xl text-[#1E3A8A]">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow us on Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow us on X"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cinnamon-digital-solutions"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow us on LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div ref={formContainerRef} className="opacity-0 bg-[#F3F4F6] p-8 lg:p-16 rounded-[20px] shadow-lg">
              <h3 className="text-3xl font-semibold text-[#181D27] mb-4">Get in Touch</h3>
              <p className="text-gray-600 text-xl mb-8">Fill out the form—we&apos;ll be in touch soon.</p>

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

                {/* University / Organisation */}
                <div>
                  <input
                    id="university"
                    name="university"
                    type="text"
                    placeholder="University / Organisation"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="w-full p-3 bg-transparent border-b border-gray-400 text-[#181D27] focus:outline-none focus:border-[#3B5998]"
                  />
                </div>

                {/* Role */}
                <div>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-3 bg-transparent border-b border-gray-400 text-[#181D27] focus:outline-none focus:border-[#3B5998]"
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
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-[#3B5998] rounded-lg hover:bg-[#2d4373] text-white"
                >
                  Send a Message
                  <FiArrowUpRight className="ml-2 h-7 w-7 text-[#FCCF37]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;