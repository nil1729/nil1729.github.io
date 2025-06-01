"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

// Add a smooth scroll function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for header height
      behavior: "smooth",
    });
  }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation to home page sections from other pages
  const handleSectionNavigation = (sectionId: string) => {
    if (pathname === "/") {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    } else {
      // If on another page, navigate to home and then scroll
      router.push("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  const navItems = [
    { href: "#about", label: "About", homeOnly: true },
    { href: "#experience", label: "Experience", homeOnly: true },
    { href: "#projects", label: "Projects", homeOnly: true },
    { href: "#skills", label: "Skills", homeOnly: true },
    { href: "/blog", label: "Blog", isExternal: true },
    { href: "#contact", label: "Contact", homeOnly: true },
  ];

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='relative flex items-center justify-between h-16'>
          {/* Logo - Left */}
          <div className='flex items-center w-48'>
            <Link href='/' className='font-bold text-xl'>
              Nilanjan Deb
            </Link>
          </div>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className='hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2'>
            <div className='flex items-center space-x-8'>
              {navItems.map((item) => {
                // If it's an external link (like blog), always show as Link
                if (item.isExternal) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap'
                    >
                      {item.label}
                    </Link>
                  );
                }

                // For home sections, use button with click handler
                if (item.homeOnly) {
                  const sectionId = item.href.replace("#", "");
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleSectionNavigation(sectionId)}
                      className='text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap'
                    >
                      {item.label}
                    </button>
                  );
                }

                // Fallback
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap'
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle - Right */}
          <div className='hidden md:flex items-center justify-end w-48'>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Controls */}
          <div className='md:hidden flex items-center space-x-2'>
            {/* Mobile Theme Toggle */}
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className='w-9 px-0'
            >
              {mounted && (
                <>
                  {theme === "light" ? <Moon className='h-4 w-4' /> : <Sun className='h-4 w-4' />}
                </>
              )}
              <span className='sr-only'>Toggle theme</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button variant='ghost' size='sm' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className='md:hidden border-t bg-background/95 backdrop-blur-sm'>
            <div className='py-4 space-y-2'>
              {navItems.map((item) => {
                // If it's an external link (like blog), always show as Link
                if (item.isExternal) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                // For home sections, use button with click handler
                if (item.homeOnly) {
                  const sectionId = item.href.replace("#", "");
                  return (
                    <button
                      key={item.href}
                      onClick={() => {
                        handleSectionNavigation(sectionId);
                        setIsOpen(false);
                      }}
                      className='block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer'
                    >
                      {item.label}
                    </button>
                  );
                }

                // Fallback
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
