import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Trash2, Heart, Plus, Minus, Lock } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121615] dark:text-white antialiased transition-colors duration-300">
      <Header />
      <main className="flex-1 px-6 lg:px-40 py-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 text-sm font-medium text-[#6a8179]">
          <Link className="hover:text-primary transition-colors" href="/collection">Shop</Link>
          <ChevronRight className="size-4" />
          <span className="text-[#121615] dark:text-white">Shopping Bag</span>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tighter mb-2">Your Collection</h1>
          <p className="text-[#6a8179]">Review your selected pieces before secure checkout.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-6">
            {cartItems.map((item, i) => (
              <div key={i} className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white dark:bg-[#1d2925] border border-[#dde3e1] dark:border-[#2d3a35] hover:border-accent-gold transition-all duration-300">
                <div className="w-full md:w-48 h-48 bg-[#F0EFE8] rounded-lg overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110" src={item.image} alt={item.name} />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                      <p className="text-sm text-[#6a8179] mb-4">{item.details}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
                        {item.status}
                      </div>
                    </div>
                    <p className="text-xl font-bold">${item.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center border border-[#dde3e1] dark:border-[#2d3a35] rounded-xl p-1">
                      <button className="p-1 hover:text-primary transition-colors"><Minus className="size-4" /></button>
                      <span className="px-4 font-bold">1</span>
                      <button className="p-1 hover:text-primary transition-colors"><Plus className="size-4" /></button>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-sm font-medium text-[#6a8179] hover:text-primary flex items-center gap-1 transition-colors">
                        <Heart className="size-4" /> Save for later
                      </button>
                      <button className="text-sm font-medium text-red-500/70 hover:text-red-500 flex items-center gap-1 transition-colors">
                        <Trash2 className="size-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Summary */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-[#F0EFE8] dark:bg-[#1d2925] rounded-xl p-8 border border-[#dde3e1] dark:border-[#2d3a35]">
              <h2 className="text-2xl font-black mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[#6a8179]">
                  <span>Subtotal</span>
                  <span className="text-[#121615] dark:text-white font-medium">$2,340.00</span>
                </div>
                <div className="flex justify-between text-[#6a8179]">
                  <span>Shipping</span>
                  <span className="text-primary font-bold">Complimentary</span>
                </div>
                <div className="flex justify-between text-[#6a8179]">
                  <span>Taxes</span>
                  <span className="text-[#121615] dark:text-white font-medium">$187.20</span>
                </div>
                <div className="pt-4 border-t border-accent-gold/30 flex justify-between items-baseline">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-black text-primary">$2,527.20</span>
                </div>
              </div>
              <div className="space-y-4">
                <Link href="/checkout" className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                  Checkout Securely
                  <Lock className="size-5" />
                </Link>
                <p className="text-[10px] text-center uppercase tracking-widest text-[#6a8179] font-bold">
                  30-Day returns • Insured Shipping • Secure Encryption
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const cartItems = [
  {
    name: "Ethereal Gold Band",
    details: "18k Solid Gold • Diamond Inlay • Size 7",
    status: "In Stock",
    price: "1,450.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqvNjcHrUrIKlBhTtdBWvnx9ejOyTWqNqjinDhbC6ufQ8bDfU704YpkLH2rhbaHuvzbPiYB1JtimwXanpAGWY8LortkKCvqUY4czDUGQkzYMuBmLBq3GIoeqI110UYk6QsI1aVz-L5cerx4Zqw4TYmx1bkAfg-Lzo1r3154Mngdtdb67o9WtpPBICOzIFeoHgOXCsrp0NWNtTgzW3e3unoCoWvLb4p7xRLMYnSholMBF7u0_M5QdKRld_tYNPzprlQTHbHII1C90k"
  },
  {
    name: "Chronos Minimalist Watch",
    details: "Silver Finish • Italian Leather Strap • 40mm",
    status: "Limited Edition",
    price: "890.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_jaFmjySrnErkBXL3R8wqVxLBk___lcq9SSCFTfUTyE0B0-VRs55BETrw7LuIoMtBOOXnlUaUQ2bpo6Sh6lz1Wc9adh1DBJqP2wq4dN7Z0fuHek6zssfWUAzUwo8ft2-cOiQ7XNdFxsQWvtCLRNAxeX9b5RUHykQh2C-Hbqf__DlDOP87_2mIEQI90mvtKKUa1klDpwekuqFcydwXrdNiJ7-vNmexBK2aQcIfhMzyZKJxI3lZNaowVA6OGVd-ctD27rbwm83gaNU"
  }
];
