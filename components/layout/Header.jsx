//components/Header.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import MobileMenu from "../layout/MobileMenu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="sticky top-0 z-50 bg-background  shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <svg
                className="h-6 w-6 text-[var(--primary-color)]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                />
              </svg>
              <span>PollPulse</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
              >
                Home
              </Link>
              <Link
                href="/politics"
                className="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
              >
                Politics
              </Link>
              <Link
                href="/sports"
                className="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
              >
                Sports
              </Link>
              <Link
                href="/entertainment"
                className="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
              >
                Entertainment
              </Link>
              <Link
                href="/events"
                className="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
              >
                Events
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline">
              <Link href="/login">
                <span className="truncate">Log In</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
              {mobileOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu*/}
      <MobileMenu mobileOpen={mobileOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
