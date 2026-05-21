"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-bg-surface/70 backdrop-blur-xl border-b border-border-base"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-xs tracking-widest text-accent hover:text-accent-hover transition-colors"
        >
          shivamshetty
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 group">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="relative font-mono text-[0.72rem] tracking-wide text-text-secondary
              hover:text-text-primary transition-colors duration-200 group"
            >
              {item.label}

              <span className="absolute left-0 -bottom-1 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-6 h-6 flex items-center justify-center z-50"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute w-5 h-[1.5px] bg-text-primary transition-all duration-300
            ${menuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute w-5 h-[1.5px] bg-text-primary transition-all duration-300
            ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute w-5 h-[1.5px] bg-text-primary transition-all duration-300
            ${menuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
        ${menuOpen ? "max-h-75 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-5 bg-bg-surface/95 backdrop-blur-xl border-t border-border-base">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;