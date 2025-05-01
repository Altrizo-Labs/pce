"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
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
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
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
        message,
        phone,
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
        setMessage("");
        setPhone("");
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
    <div className="geist-satoshi contactus-background">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="relative lg:pt-24 pt-20 mx-4 md:mx-14 lg:mx-20 pb-12">
        <div className="min-h-screen text-white flex flex-col justify-center items-center">
          {/* Top Container */}
          <div className="container mx-auto px-6 flex flex-col items-center text-center mb-24">
            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-6xl opacity-0 font-bold text-[#1E3A8A] leading-tight mb-4"
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
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Contact Details */}
            <div
              ref={contactDetailsRef}
              className="flex flex-col justify-start space-y-10 opacity-0 text-[#181D27]"
            >
              {/* New Heading */}
              <h2 className="text-5xl text-[#181D27] font-bold leading-tight mb-4 max-w-sm">
                We are always ready to help you and answer your questions.
              </h2>

              {/* New Paragraph */}
              <p className="text-xl text-gray-600 mb-6 max-w-lg">
                Edusight is committed to transforming how institutions engage with students by leveraging the power of AI. From automating communication to personalizing support, our intelligent solutions help create more connected, efficient, and student-focused learning environments.
              </p>

              {/* Email */}
              <div className="mb-4">
                <p className="mb-1 text-[#535862] text-xl font-semibold">Email us directly.</p>
              </div>

              {/* Schedule a Call */}
              <div className="mb-6">
                <p className="mb-1 text-[#535862] text-xl font-semibold">Schedule a call.</p>
              </div>

              {/* Social Icons */}
              <div className="mb-6">
                <p className="mb-4 text-[#535862] text-xl font-semibold">Social Network.</p>
                <div className="flex space-x-4 text-2xl text-gray-700">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600"
                    aria-label="Follow us on Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-600"
                    aria-label="Follow us on Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black"
                    aria-label="Follow us on X"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cinnamon-digital-solutions"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-700"
                    aria-label="Follow us on LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div ref={formContainerRef} className="opacity-0">
              <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
                {/* Name and Email in the Same Line */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-100 mb-2 font-semibold"
                    >
                      My Name is
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-lg bg-black border border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-100 mb-2 font-semibold"
                    >
                      My Phone Number is
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-lg bg-black border border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-100 mb-2 font-semibold"
                  >
                    My Email is
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-lg bg-black border border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-100 mb-2 font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-lg bg-black border border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none"
                    rows={4}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 rounded-lg hover:bg-red-700 text-white"
                >
                  Submit →
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