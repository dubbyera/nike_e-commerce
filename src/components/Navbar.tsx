"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, User, ShoppingBag, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Men", href: "/products?gender=men" },
  { label: "Women", href: "/products?gender=women" },
  { label: "Kids", href: "/products?gender=unisex" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link href="/" aria-label="Nike Home" className="flex items-center">
          <Image src="/logo.svg" alt="Nike" width={28} height={28} priority className="invert" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-black hover:text-gray-600 font-medium transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden items-center gap-6 md:flex">
          <button 
            className="flex items-center bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">Search</span>
          </button>
          <button className="flex items-center text-black hover:text-gray-600 transition-colors">
            <ShoppingBag className="w-5 h-5 mr-2" />
            <span className="text-sm">My Cart (2)</span>
          </button>
        </div>

        {/* Mobile Icons - Nike Style (4 icons) */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Search Icon - Opens mobile menu and focuses search */}
          <button 
            className="p-1"
            onClick={() => {
              setOpen(true);
              setSearchOpen(true);
            }}
          >
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          
          {/* User Icon - Visual only */}
          <button className="p-1">
            <User className="w-5 h-5 text-gray-700" />
          </button>
          
          {/* Shopping Bag Icon - Visual only */}
          <button className="p-1">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
          </button>

          {/* Hamburger Menu - Only functional button */}
          <button
            type="button"
            className="p-1"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Search Bar - Shows when search is clicked (Desktop) */}
      {searchOpen && (
        <div className="border-t border-gray-200 bg-white hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Search Nike"
                className="bg-transparent text-base focus:outline-none flex-1 text-gray-700 placeholder-gray-500"
                autoFocus
              />
              <button 
                className="text-gray-500 hover:text-gray-700 ml-3"
                onClick={() => setSearchOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`border-t border-gray-200 bg-white md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="space-y-1 px-4 py-3">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          
          {/* Mobile Search Bar */}
          <li className="px-3 py-2">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm focus:outline-none flex-1 text-gray-700 placeholder-gray-500"
                ref={(input) => {
                  if (searchOpen && input) {
                    input.focus();
                  }
                }}
              />
            </div>
          </li>
          
          {/* Mobile Cart */}
          <li className="px-3 py-2 border-t border-gray-200">
            <button className="flex items-center w-full text-left text-gray-700 hover:text-black transition-colors">
              <ShoppingBag className="w-5 h-5 mr-3" />
              <span>My Cart (2)</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}