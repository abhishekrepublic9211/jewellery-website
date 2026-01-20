import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ShoppingBag, History, SquareStack, ShieldCheck, Eraser } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#121615] dark:text-white antialiased">
      <Header />
      <main className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
            Concierge Service
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-6">
            How can we <br /><span className="text-primary italic font-light">assist you</span> today?
          </h1>
          <p className="text-lg md:text-xl text-[#6a8179] max-w-2xl leading-relaxed">
            Experience our personalized white-glove service. From styling advice to global logistics, our specialists are here to ensure your journey is as flawless as our gems.
          </p>
        </div>

        {/* Service Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          <div className="bento-card col-span-1 md:col-span-2 bg-primary dark:bg-primary text-white p-8 rounded-xl flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined !text-4xl opacity-80">local_shipping</span>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors">Track Now</button>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Shipping & Logistics</h3>
              <p className="text-white/70 text-sm">Complimentary insured global delivery on all orders over $500.</p>
            </div>
          </div>
          <div className="bento-card bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36] p-8 rounded-xl flex flex-col justify-between min-h-[220px]">
            <History className="size-10 text-primary" />
            <div>
              <h3 className="text-xl font-bold mb-2">30-Day Returns</h3>
              <p className="text-[#6a8179] text-sm">Seamless returns and size exchanges for the perfect fit.</p>
            </div>
          </div>
          <div className="bento-card bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36] p-8 rounded-xl flex flex-col justify-between min-h-[220px]">
            <SquareStack className="size-10 text-primary" />
            <div>
              <h3 className="text-xl font-bold mb-2">Sizing Guide</h3>
              <p className="text-[#6a8179] text-sm">Detailed measurements for rings and wristwear.</p>
            </div>
          </div>
          <div className="bento-card bg-[#F0EFE8] dark:bg-[#2d3a36] p-8 rounded-xl flex flex-col justify-between min-h-[220px]">
            <ShieldCheck className="size-10 text-accent-gold" />
            <div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="text-[#6a8179] text-sm">Learn about our certified diamonds and ethically sourced metals.</p>
            </div>
          </div>
          <div className="bento-card bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36] p-8 rounded-xl flex flex-col justify-between min-h-[220px]">
            <Eraser className="size-10 text-primary" />
            <div>
              <h3 className="text-xl font-bold mb-2">Jewelry Care</h3>
              <p className="text-[#6a8179] text-sm">Professional advice on maintaining your piece's brilliance.</p>
            </div>
          </div>
        </div>

        {/* Contact & Location Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
              <p className="text-[#6a8179]">Typically replies within 2 hours during business hours.</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#121615] dark:text-white/60">First Name</label>
                  <input className="w-full bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36] rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Alexander" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#121615] dark:text-white/60">Last Name</label>
                  <input className="w-full bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36] rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Reid" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#121615] dark:text-white/60">Subject</label>
                <select className="w-full bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36] rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all">
                  <option>Order Status Inquiry</option>
                  <option>Custom Bespoke Request</option>
                  <option>Product Information</option>
                  <option>Wholesale Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#121615] dark:text-white/60">Message</label>
                <textarea className="w-full bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36] rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="How can our concierge help you?" rows={5}></textarea>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <span className="material-symbols-outlined !text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>
          </section>

          {/* Store Locator & Map */}
          <section className="space-y-8">
            <div className="rounded-xl overflow-hidden border border-[#dde3e1] dark:border-[#2d3a36] h-[400px] relative group">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBe0FGe6CZDDFyh603LPC5vgTFEVoY-WaBvwhkFaZqeJQpur9l-qR4f88By6stVZ5XMOcTt3ZoZ-PHD4IRvKulhwhPpVl-D5y5QZ0KmmlGvReHmhGOHWDq--XpHmjGatPQDnnVU2pKzupLehZrxoIrIxluNCKFdtlVTAim5nvW8I9o3r4InjzrXfreyJnAupZMKFydLW2gGFNnfFzWB-YUFs4sBPzZSD2v8BxliIYZ6LtRSL-niu2vyFXbyg7MWMamZUrYm2ZYMJSI')` }}>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-[#1c2a26]/90 backdrop-blur-md p-4 rounded-lg flex items-center justify-between shadow-lg">
                <div className="flex gap-3 items-center">
                  <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined !text-xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Paris Flagship</p>
                    <p className="text-xs text-[#6a8179]">24 Place Vendôme, 75001 Paris</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-primary uppercase underline tracking-wider">Directions</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36]">
                <h4 className="font-bold text-accent-gold uppercase tracking-widest text-xs mb-3">Live Support</h4>
                <div className="space-y-3">
                  <a className="flex items-center gap-3 group" href="tel:+1800LUXE">
                    <span className="material-symbols-outlined text-primary !text-lg">call</span>
                    <span className="text-sm group-hover:text-primary transition-colors">+1 (800) LUXE-01</span>
                  </a>
                  <a className="flex items-center gap-3 group" href="#">
                    <span className="material-symbols-outlined text-primary !text-lg">chat</span>
                    <span className="text-sm group-hover:text-primary transition-colors">WhatsApp Concierge</span>
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-[#1c2a26] border border-[#dde3e1] dark:border-[#2d3a36]">
                <h4 className="font-bold text-accent-gold uppercase tracking-widest text-xs mb-3">Service Hours</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6a8179]">Mon — Fri</span>
                    <span className="font-medium">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6a8179]">Saturday</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6a8179]">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
