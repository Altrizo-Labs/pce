"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { FiMenu, FiX } from "react-icons/fi";

// import Image from "next/image";
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
    if (indicatorRefs.current[activeLinkIndex]) {
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

    if (isMobileMenuOpen) {
      gsap.to(mobileMenu, {
        y: "-100%",
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
          y: "7.5%",
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
        className={`${
          isMobileMenuOpen && "bg-primary"
        } px-4 lg:px-10 py-4 lg:py-8 flex items-center justify-between fixed w-full mx-auto max-w-[1540px] top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out z-50 ${
          isHeaderHidden ? "-translate-y-full" : "translate-y-0"
        } `}
      >
        {/* Logo */}
        <Link href="/">
          {/* <Image
            src={logo}
            alt="logo"
            width={isMobile ? 40 : 50}
            height={isMobile ? 40 : 50}
            className="relative z-40 bg-black"
          /> */}
          <h1>LOGO</h1>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="flex space-x-2 geist-satoshi" ref={navLinksRef}>
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
                      hoverColor="bg-blue-500"
                      className="bg-primary border border-primary w-full lg:w-auto py-3 lg:py-4 md:px-8 lg:px-8 whitespace-nowrap"
                      url={item.href}
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className={`p-2 lg:p-4 inline-block text-[16px] lg:text-[18px] ${
                        item.title === "Contact Us"
                          ? "rounded-full bg-primary text-white hover:bg-opacity-90 px-6 lg:px-14"
                          : "px-3 lg:px-6"
                      }`}
                    >
                      {item.title}
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
          className="fixed top-0 left-0 w-full h-full bg-[#B71920] z-40 transform -translate-y-full shadow-lg"
        >
          <div className="flex flex-col p-4 gap-4">
            {HEADER.map((item, index) =>
              item.title === "Contact Us" ? (
                <RippleButton
                  key={item.href}
                  text="Contact Us"
                  hoverColor="bg-secondary"
                  className="bg-secondary border border-primary w-full lg:w-auto py-3 lg:py-4 px-14 whitespace-nowrap mt-4"
                  url={item.href}
                  onclick={toggleMobileMenu}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className={`p-3 text-lg geist-satoshi px-4 ${
                    pathname === item.href ? "bg-primary/10" : ""
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