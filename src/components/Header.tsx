"use client";

import Link from "next/link";
import { Search, ShoppingBag, Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 lg:px-20 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <nav className="hidden md:flex gap-8 items-center text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <Link className="hover:text-primary transition-colors" href="/collection">Collections</Link>
          <Link className="hover:text-primary transition-colors" href="/collection">Men</Link>
          <Link className="hover:text-primary transition-colors" href="/collection">Women</Link>
        </nav>

        <Link href="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <div className="size-6 bg-primary text-white flex items-center justify-center rounded-sm">
             <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="size-4">
                <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" />
             </svg>
          </div>
          <h1 className="text-lg font-black tracking-tighter uppercase text-[#121615]">LUXE JEWELRY</h1>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center bg-[#f8f9f8] rounded-full px-4 py-1.5 border border-gray-100">
            <Search className="size-3 text-gray-400 mr-2" />
            <input className="bg-transparent border-none focus:ring-0 text-[11px] w-32 placeholder:text-gray-400 font-medium" placeholder="Search curated piece" type="text" />
          </div>
          <Link href="/wishlist" className="text-gray-600 hover:text-primary transition-all">
            <Heart className="size-4" />
          </Link>
          <Link href="/cart" className="text-gray-600 hover:text-primary transition-all relative">
            <ShoppingBag className="size-4" />
            <span className="absolute -top-1.5 -right-1.5 size-3.5 bg-primary text-white text-[8px] flex items-center justify-center rounded-full font-bold">2</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
