"use client";

import { Lock, ArrowRight, CreditCard, Wallet, Landmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121615] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dde3e1] dark:border-[#2a3a35] px-10 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-4 text-primary dark:text-[#52c19b]">
          <div className="size-6">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight uppercase">Luxe Jewelry</h2>
        </Link>
        <div className="flex gap-4 items-center">
          <span className="text-xs text-[#6a8179] font-medium tracking-widest uppercase hidden md:inline">Secure Checkout</span>
          <Lock className="size-5 text-primary" />
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row max-w-[1200px] mx-auto w-full px-6 py-10 gap-12">
        {/* Left Side: Payment Process */}
        <div className="flex-1 max-w-[640px]">
          {/* Progress Indicator */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex gap-6 justify-between items-center">
              <p className="text-[#121615] dark:text-white text-base font-medium">Payment Step</p>
              <p className="text-[#121615] dark:text-white text-sm font-normal">Step 2 of 3</p>
            </div>
            <div className="rounded-full bg-[#dde3e1] dark:bg-[#2a3a35] overflow-hidden">
              <div className="h-1.5 rounded-full bg-primary" style={{ width: '66%' }}></div>
            </div>
            <div className="flex justify-between text-[#6a8179] text-xs font-bold uppercase tracking-wider mt-1">
              <span>Shipping</span>
              <span className="text-primary">Payment</span>
              <span>Review</span>
            </div>
          </div>

          <h1 className="text-[#121615] dark:text-white tracking-tight text-3xl font-bold mb-6">Payment Details</h1>

          {/* Payment Method Tabs */}
          <div className="mb-8">
            <div className="flex border-b border-[#dde3e1] dark:border-[#2a3a35] gap-8">
              <button className="flex flex-col items-center justify-center border-b-2 border-primary text-primary gap-1 pb-3 pt-2 group">
                <CreditCard className="size-5" />
                <p className="text-xs font-bold uppercase tracking-widest">Credit Card</p>
              </button>
              <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#6a8179] hover:text-primary gap-1 pb-3 pt-2 transition-colors">
                <Wallet className="size-5" />
                <p className="text-xs font-bold uppercase tracking-widest">Wallets</p>
              </button>
              <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#6a8179] hover:text-primary gap-1 pb-3 pt-2 transition-colors">
                <Landmark className="size-5" />
                <p className="text-xs font-bold uppercase tracking-widest">Financing</p>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[#121615] dark:text-white text-sm font-semibold tracking-wide uppercase">Cardholder Name</span>
                <input className="form-input w-full rounded-lg border-[#dde3e1] dark:border-[#2a3a35] dark:bg-background-dark focus:border-primary focus:ring-0 h-14 placeholder:text-[#6a8179]/50 text-base px-4" placeholder="MARCUS AURELIUS" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[#121615] dark:text-white text-sm font-semibold tracking-wide uppercase">Card Number</span>
                <div className="relative">
                  <input className="form-input w-full rounded-lg border-[#dde3e1] dark:border-[#2a3a35] dark:bg-background-dark focus:border-primary focus:ring-0 h-14 placeholder:text-[#6a8179]/50 text-base pr-12 px-4" placeholder="0000 0000 0000 0000" type="text" />
                </div>
              </label>
              <div className="flex gap-4">
                <label className="flex flex-col gap-2 flex-1">
                  <span className="text-[#121615] dark:text-white text-sm font-semibold tracking-wide uppercase">Expiration</span>
                  <input className="form-input w-full rounded-lg border-[#dde3e1] dark:border-[#2a3a35] dark:bg-background-dark focus:border-primary focus:ring-0 h-14 placeholder:text-[#6a8179]/50 text-base px-4" placeholder="MM / YY" type="text" />
                </label>
                <label className="flex flex-col gap-2 flex-1">
                  <span className="text-[#121615] dark:text-white text-sm font-semibold tracking-wide uppercase">CVV</span>
                  <input className="form-input w-full rounded-lg border-[#dde3e1] dark:border-[#2a3a35] dark:bg-background-dark focus:border-primary focus:ring-0 h-14 placeholder:text-[#6a8179]/50 text-base px-4" placeholder="123" type="text" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <input checked className="rounded text-primary focus:ring-primary h-5 w-5 cursor-pointer" type="checkbox" readOnly />
              <span className="text-sm text-[#6a8179] dark:text-gray-400">Billing address same as shipping</span>
            </div>
            <Link href="/confirmation" className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-primary text-white gap-3 text-base font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-[#1a4f3d] transition-all active:scale-[0.98]">
              Complete Purchase
              <ArrowRight className="size-5" />
            </Link>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <aside className="w-full lg:w-[380px]">
          <div className="bg-white dark:bg-[#1c2825] rounded-xl p-8 sticky top-28 shadow-sm border border-[#dde3e1] dark:border-[#2a3a35]">
            <h3 className="text-lg font-bold mb-6 tracking-tight">Order Summary</h3>
            <div className="flex flex-col gap-6 mb-8">
              {summaryItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="size-20 bg-background-light dark:bg-background-dark rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs text-[#6a8179]">{item.details}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#dde3e1] dark:border-[#2a3a35] pt-6 flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#6a8179]">Subtotal</span>
                <span className="font-medium">$2,100.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6a8179]">Shipping</span>
                <span className="text-primary font-medium">Complimentary</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6a8179]">Estimated Tax</span>
                <span className="font-medium">$168.00</span>
              </div>
              <div className="mt-4 pt-4 border-t border-[#dde3e1] dark:border-[#2a3a35] flex justify-between items-end">
                <span className="text-base font-bold uppercase tracking-widest">Total</span>
                <span className="text-2xl font-bold text-primary">$2,268.00</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
      <footer className="py-8 border-t border-[#dde3e1] dark:border-[#2a3a35] mt-auto">
        <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6a8179] text-xs font-medium uppercase tracking-[0.1em]">
          <div>© 2024 LUXE JEWELRY. All Rights Reserved.</div>
          <div className="flex gap-8">
            <Link className="hover:text-primary transition-colors" href="#">Privacy</Link>
            <Link className="hover:text-primary transition-colors" href="#">Terms</Link>
            <Link className="hover:text-primary transition-colors" href="#">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const summaryItems = [
  {
    name: "Heirloom Gold Band",
    details: "Size: 7 • 18k Yellow Gold",
    price: "1,250.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUCy3e7RxWvBcyTYLpBcRqdAPmdkQQ70Cjfp7KhFLfPiuxpUcv--dxQAX0MPgJxwO4Eq0Bx5CDC6Fcr3HYf2_uVf7ce9CTADC3yyi3ItOEG0N-Ry8uViWxHpzEuB1Hd9eM1O4qKCufNM-pG1fhSj4PJ_q7saEeoDzeLYod9Rrm1TuuxcIuoPmEqkk-qnv2Pt9uPsyLdsbJOTGaA7CTF73WC09X8pc1mUTDgWQ32Ja6kiKco3RsiSj5n1ysTY_B4zeLNAgBjILJtNE"
  },
  {
    name: "South Sea Pearl Studs",
    details: "Grade: AAA • White",
    price: "850.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFAm5LceLl1E1D-zaIse-HKZ5hS-ovW0Fowbi4gkcd8DE1pdp9IiBd5zZuZEK4gF9zFy0xfhywU-BwWRFa-5ciRawFxi8FCblI_J6H3bn0uNzoRIfd4Oq9AJS_mbAIOog3gOZtNQvdfD5bAc9imOAw-T_SnuJYw_U6xkiJqVOalKFFB5a4d8iKKRLh2Rte5Stbq4Q7Th3Ukc0B3WS38jUiq_luZ5fbu4yGEbUhVBNUWAClXYP2ClQZdJ9OjuJ0lKihvyQ4WMGnmL8"
  }
];
