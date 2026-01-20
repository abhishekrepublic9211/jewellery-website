import Link from "next/link";
import { Globe, Share2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121615] text-white py-20 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-5 bg-white text-[#121615] flex items-center justify-center rounded-sm">
               <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="size-3">
                  <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" />
               </svg>
            </div>
            <span className="font-black text-lg tracking-tighter uppercase">LUXE JEWELRY</span>
          </Link>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-medium">
            Elevating modern luxury through sustainable craftsmanship and timeless design. Established 2024.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Collections</h4>
          <ul className="space-y-4 text-xs font-medium text-gray-400">
            <li><Link className="hover:text-white transition-colors" href="/collection">The Solstice Collection</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/collection">Minimalist Essentials</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/collection">Men's Editorial</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/collection">Engagement & Bridal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Client Service</h4>
          <ul className="space-y-4 text-xs font-medium text-gray-400">
            <li><Link className="hover:text-white transition-colors" href="/support">Shipping & Returns</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/support">Sizing Guide</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/support">Care Instructions</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/support">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Connect</h4>
          <div className="flex gap-6 text-gray-400">
            <Link href="#" className="hover:text-white transition-colors"><Globe className="size-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Share2 className="size-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Heart className="size-5" /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
        <p>© 2024 LUXE JEWELRY INTERNATIONAL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
