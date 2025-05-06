"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/images/logo.png";

import Image from "next/image";
import { HEADER } from "@/data/header";
import RippleButton from "./RippleButton";

const Header = () => {
  const pathname = usePathname();
  const navLinksRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const indicatorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hasMounted, setHasMounted] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // new state for scroll position

  // Scroll tracking variables
  const lastScrollY = useRef(0);
  const scrollThreshold = 100; // Pixels to scroll before hiding header

  // Check for mobile screen size
  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);

    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Scroll handling effect
  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction and amount
      const scrollDiff = currentScrollY - lastScrollY.current;

      if (currentScrollY > 50) {
        setIsScrolled(true); // Add mx-12 when scrolled more than 50px
      } else {
        setIsScrolled(false);
      }

      if (scrollDiff > 10 && currentScrollY > scrollThreshold) {
        // Scrolling down significantly
        setIsHeaderHidden(true);
      } else if (scrollDiff < -10) {
        // Scrolling up
        setIsHeaderHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    // Debounce scroll event
    let rafId: number;
    const debouncedHandleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [hasMounted]);

  // Animation for nav links
  useEffect(() => {
    if (!navLinksRef.current || !hasMounted) return;

    gsap.fromTo(
      navLinksRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
  }, [hasMounted]);

  // Active link indicator animation
  useEffect(() => {
    if (!hasMounted) return;

    const activeLinkIndex = HEADER.findIndex((item) => pathname === item.href);
    if (activeLinkIndex >= 0 && indicatorRefs.current[activeLinkIndex]) {
      gsap.to(indicatorRefs.current[activeLinkIndex], {
        width: "10px",
        duration: 0.3,
        ease: "power2.out",
        x: 0,
      });
    }
  }, [pathname, hasMounted]);

  // Mouse enter/leave handlers for link indicators
  const handleMouseEnter = (index: number) => {
    if (indicatorRefs.current[index]) {
      gsap.to(indicatorRefs.current[index], {
        width: "20px",
        duration: 0.3,
        ease: "power2.out",
        x: -7.5,
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (indicatorRefs.current[index]) {
      gsap.to(indicatorRefs.current[index], {
        width: "10px",
        duration: 0.3,
        ease: "power2.out",
        x: 0,
      });
    }
  };

  // Toggle mobile menu with animation and freeze screen
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu) return;

    if (isMobileMenuOpen) {
      gsap.to(mobileMenu, {
        y: "-150%",
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setIsMobileMenuOpen(false);
          document.body.classList.remove("overflow-hidden"); // Remove freeze
        },
      });
    } else {
      setIsMobileMenuOpen(true);
      gsap.fromTo(
        mobileMenu,
        { y: "-100%" },
        {
          y: "0%",
          duration: 0.4,
          ease: "power2.inOut",
          onStart: () => {
            document.body.classList.add("overflow-hidden"); // Freeze screen
          },
        }
      );
    }
  };

  // Only render the component once it's mounted on the client side
  if (!hasMounted) return null;

  // Render desktop or mobile navigation
  return (
    <>
      <nav
        ref={headerRef}
        className={`fixed w-[95%] lg:w-[97.5%] max-w-[1500px] mx-auto font-lato py-5 flex bg-white bg-opacity-75 backdrop-blur-lg rounded-[8px] items-center justify-between mt-[1px] left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out z-[999] ${
          isHeaderHidden ? "-translate-y-full" : "translate-y-0"
        } ${isMobileMenuOpen ? "bg-secondary" : ""} ${
          isScrolled ? "px-6" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" className="relative w-32 lg:w-44 z-[999]" />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="flex space-x-2" ref={navLinksRef}>
            {HEADER.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <div
                  key={index}
                  className="relative group flex items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {item.title === "Contact Us" ? (
                    <RippleButton
                      text="Contact Us"
                      className="bg-secondary rounded-[12px] w-full lg:w-auto py-2 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap text-black"
                      url={item.href}
                      icon
                    />
                  ) : (
                    <Link
                    href={item.href}
                    className={`relative p-2 lg:p-4 inline-block text-[10px] lg:text-[14px] px-3 lg:px-5
                      ${pathname === item.href ? "font-bold text-primary" : ""}
                    `}
                  >
                    <span className="relative inline-block">
                      {item.title}
                      {pathname === item.href && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary rounded-md" />
                      )}
                    </span>
                  </Link>
                  
                  
                  )}

                  {/* Active Indicator */}
                  {isActive && item.title !== "Contact Us" && (
                    <div className="absolute -left-4 lg:left-4 bottom-[26px] lg:bottom-[30px] transform -translate-x-1/2">
                      <div
                        className="bg-white h-[1px] origin-center transform"
                        ref={(el) => {
                          indicatorRefs.current[index] = el;
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          // Mobile Hamburger Menu
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        )}
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobile && (
        <div
          id="mobile-menu"
          className="fixed top-20 left-2 w-[95%] lg:w-[97.5%] mx-auto h-fit bg-white rounded-[8px] z-40 shadow-lg transform -translate-y-[150%]"
          style={{ display: hasMounted ? "block" : "none" }}
        >
          <div className="flex flex-col p-4 gap-4">
            {HEADER.map((item) =>
              item.title === "Contact Us" ? (
                <RippleButton
                  key={item.href}
                  text="Contact Us"
                  className="bg-accent border border-black rounded-[12px] w-full lg:w-auto py-3 lg:py-4 px-14 whitespace-nowrap mt-4"
                  url={item.href}
                  onclick={toggleMobileMenu}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className={`p-3 text-lg px-4 ${
                    pathname === item.href
                      ? "font-bold underline text-primary bg-secondary/10"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
