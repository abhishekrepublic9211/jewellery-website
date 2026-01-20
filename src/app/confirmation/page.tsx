import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Truck, Printer, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121615] dark:text-white antialiased min-h-screen flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-primary/10 px-6 md:px-20 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary dark:text-accent-gold">
            <div className="size-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] uppercase">Luxe Aesthetics</h2>
          </div>
        </Link>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 md:py-20">
        {/* Success Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="size-20 bg-primary/10 dark:bg-accent-gold/10 rounded-full flex items-center justify-center mb-6 border border-primary/20 dark:border-accent-gold/20">
            <CheckCircle className="size-10 text-primary dark:text-accent-gold" />
          </div>
          <h1 className="text-[#121615] dark:text-white tracking-tight text-[32px] md:text-[42px] font-bold leading-tight mb-4">
            Thank you for your order, James.
          </h1>
          <p className="text-primary/70 dark:text-white/70 text-lg max-w-lg mx-auto leading-relaxed">
            Your artisan pieces are being prepared with care in our studio. A confirmation email has been sent to <span className="font-semibold italic text-primary dark:text-accent-gold">james.w@example.com</span>.
          </p>
        </div>

        {/* Order Status Card */}
        <div className="bg-white dark:bg-white/5 rounded-xl border border-primary/5 dark:border-white/10 p-8 mb-12 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4 justify-between items-end border-b border-primary/10 pb-6">
              <div>
                <p className="text-primary/60 dark:text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Status: Hand-Finishing</p>
                <h3 className="text-2xl font-bold text-primary dark:text-white">Processing</h3>
              </div>
              <div className="text-right">
                <p className="text-primary/60 dark:text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Estimated Arrival</p>
                <p className="text-lg font-medium text-primary dark:text-white">Oct 24 - Oct 26</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent-gold rounded-full">Order #LX-82910</span>
                <span className="text-sm font-bold text-primary dark:text-white">25% Complete</span>
              </div>
              <div className="h-3 rounded-full bg-accent-taupe dark:bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20 flex items-center gap-3">
                <Truck className="size-5" />
                Track Order Details
              </button>
            </div>
          </div>
        </div>

        {/* Order Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Items */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border-b border-primary/10 pb-3">
              <h2 className="text-xl font-bold tracking-tight">Order Items (2)</h2>
            </div>
            {confirmedItems.map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="size-28 flex-shrink-0 bg-accent-taupe dark:bg-white/5 rounded-lg overflow-hidden border border-primary/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                      <p className="text-primary/60 dark:text-white/50 text-sm italic">{item.details}</p>
                    </div>
                    <p className="font-bold text-primary dark:text-accent-gold">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/50 dark:bg-white/5 p-6 rounded-xl border border-primary/5">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-primary/10 pb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-primary/60 dark:text-white/50">Subtotal</span>
                  <span className="font-medium">$1,670.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary/60 dark:text-white/50">Insured Shipping</span>
                  <span className="font-medium text-primary dark:text-accent-gold">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary/60 dark:text-white/50">Estimated Tax</span>
                  <span className="font-medium">$141.95</span>
                </div>
                <div className="h-px bg-accent-gold/30 my-6"></div>
                <div className="flex justify-between items-end">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl text-primary dark:text-accent-gold">$1,811.95</span>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <button className="w-full py-3 text-sm font-bold border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                  <Printer className="size-4" />
                  Print Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const confirmedItems = [
  {
    name: "Aurelian Signet Ring",
    details: "Size: 10 — 18k Solid Gold",
    price: "1,250",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5PmEgkBkvfWq5EXq8V0I6f4FGXnl3FYtkV9qJx3bbyFchZeg-y-Ik-BteAvJ8Hos56ib4fphjQY3F1B1kOFfS7o856qdcIMX1dz8uEneV3nJv-jp7doI5NflG_bFBsv_TF1ZCzt64FXYJSnLHqhrC0HJgJekZk3Mje5U01JPg6RswZBgPiUakBi8gN8lkCHDkLUY0pXRdPKHMLzYsXSuOxBouBtBP-yvk2K845cUZeihHmXWPfeSCXvRXywrHfTcn0Ucw1jeEWzg"
  },
  {
    name: "Vantablack Leather Wallet",
    details: "Italian Calfskin — Hand-stitched",
    price: "420",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_3Es0GCr1-ZzhYxMEYy6-pofASFiLHCQXCDwyPLoK3XyA-Z-h8hxuZ_ksKQ3EhMoMPKfqme7U6KgSj2d26YI4cRPPw-BlMmH5wIPFqQgu2s_5qXbmLb3eMk8KSOhc_0wozk6s70HE9QvTN5KtZ3FVJmMVT_LZriQLsR7DMRaDp-03d1-Vz57DyvFQNyofaZco6FTjX2kVe4Z6v2ntr-8iqBki-ajrp8cplYT-lIYLT3svY8Vb4EahpQELMwxOCcPg2ea_26EmtLs"
  }
];
