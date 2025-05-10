"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { HEADER } from "@/data/header";
import RippleButton from "./RippleButton";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const navLinksRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const indicatorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hasMounted, setHasMounted] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prevPathRef = useRef(pathname);

  const lastScrollY = useRef(0);
  const scrollThreshold = 100;

  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => window.removeEventListener("resize", checkMobileScreen);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 50);

      if (scrollDiff > 10 && currentScrollY > scrollThreshold) {
        setIsHeaderHidden(true);
      } else if (scrollDiff < -10) {
        setIsHeaderHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

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

  useEffect(() => {
    if (!navLinksRef.current || !hasMounted) return;
    gsap.fromTo(
      navLinksRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
  }, [hasMounted]);

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

  // Fixed route change effect to properly close mobile menu
  useEffect(() => {
    if (!hasMounted) return;
    
    // Only run this effect when the path actually changes, not on mount
    if (prevPathRef.current !== pathname) {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
      prevPathRef.current = pathname;
    }
  }, [pathname, hasMounted, isMobileMenuOpen]);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const toggleMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      setIsMobileMenuOpen(true);
      document.body.classList.add("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  if (!hasMounted) return null;

  return (
    <>
      <nav
        ref={headerRef}
        className={`fixed w-full px-4 max-w-[1520px] mx-auto font-lato py-5 flex rounded-b-[8px] items-center justify-between left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out z-[999] ${isHeaderHidden ? "-translate-y-full" : "translate-y-0"} ${isMobileMenuOpen ? "bg-white" : ""} ${isScrolled ? "bg-white" : ""}`}
      >
        <Link href="/">
          <Image src={logo} alt="logo" className="relative w-32 lg:w-44 z-[999]" />
        </Link>

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
                      className="bg-secondary rounded-[12px] w-full lg:w-auto py-2 lg:py-2.5 md:px-6 lg:px-6 whitespace-nowrap text-black"
                      url={item.href}
                      icon
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative p-2 lg:p-4 inline-block text-[10px] lg:text-[14px] px-3 lg:px-5 ${isActive ? "font-bold text-primary" : ""}`}
                    >
                      <span className="relative inline-block">
                        {item.title}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary rounded-md" />
                        )}
                      </span>
                    </Link>
                  )}

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
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none z-50"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
            <span className="sr-only">Toggle menu</span>
          </button>
        )}
      </nav>

      {isMobile && (
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white z-50 md:hidden min-h-screen flex flex-col justify-center"
              id="mobile-menu"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
                <div className="absolute -left-[20%] top-0 w-[140%] h-[140%] " />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
                <div className="w-full max-w-md">
                  {HEADER.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="mb-8"
                    >
                      <Link
                        href={item.href}
                        className={`text-3xl font-bold transition-all hover:pl-4 cursor-pointer ${pathname === item.href ? "pl-4 border-l-2 border-primary" : ""}`}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-12 left-0 right-0 text-center text-sm px-8"
                >
                  <p>© {new Date().getFullYear()} EduSight. All rights reserved.</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Header;