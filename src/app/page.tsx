import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white font-display text-[#121615] antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="px-6 lg:px-10 py-6">
          <div className="relative h-[80vh] w-full rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz0DzjMl-Cdpi8cV5JS7KLR4Bu7PDEp-GnGgO6NTLFh-WcunYCW_cc-zh36qxu3QoidOdDJ7HmklOABp3tbF44KLZzNjgwXhRCRGfn97WpHMoA77qXYKr6fF4LmPcw6JWeqKeDqG9gs0cdVFPm7PiSWSE-Z52raYZyjzJ00bMXXRgds5j52zPsebSNQS9v3yz-K4uvojAJi42Q_ewllzdQflmZCQblDef1eRQLGpXzETMkfUk7TLSivlNhsSddP-W1GvW7Co1_q6E" 
                className="w-full h-full object-cover"
                alt="Hero Background"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <span className="inline-block text-accent-gold font-bold tracking-[0.4em] uppercase mb-4 text-[10px]">Summer Collection 2024</span>
              <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter">
                Timeless Elegance,<br />Modern Edge
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/collection" className="bg-[#20604a] text-white px-10 py-4 rounded-xl font-bold transition-all hover:bg-[#1a4f3d] text-sm">
                  Shop Men's
                </Link>
                <Link href="/collection" className="bg-white text-black px-10 py-4 rounded-xl font-bold transition-all hover:bg-gray-100 text-sm">
                  Shop Women's
                </Link>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-10 h-0.5 bg-white" />
                <div className="w-10 h-0.5 bg-white/30" />
                <div className="w-10 h-0.5 bg-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">Explore Our World</span>
                <h2 className="text-4xl font-black tracking-tight">Shop by Category</h2>
              </div>
              <Link href="/collection" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">Browse All Collections</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[700px]">
              <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2x8E90OfZ_vLC23o5qkxBUIPiZkZsX6FMH-8m9awbx4JEOxB7ub3t4P3zQvdO7HTmrjFpenmsgQhZaDKxKCEWX88imPUz84VGeWPuMenX7O_q80eowq9664LboJG9m11Vtf_Rx_I1lYd3ENoh5bdO-y6p65Jjm83KFYVHclPAbDrJR1_aC9nAZxpmq5QgHNBIiG7G0rRA0l0e7MFlq_tyz_J4aNM2yTzuI4ZcHseilM8u1_alLg9D3MQjeAoPnifJ_nYJ8CXeJEE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Rings" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-black mb-1">Rings</h3>
                  <p className="text-xs text-white/70 font-medium tracking-wide">From minimalist bands to statement pieces</p>
                </div>
              </div>

              <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChcGb91t55u2QLYe6guJAtJusVwfLiPcEVVK9xj0KP4duD90uL3NEUK19iOHc1YgNbpFkKOMC8fQPyAsMwtrzvlgQvdFUoQ923wtRJFKVGuDwUwx1LADOxLsrAgT5rstgxohf4imHhc8jwjp3jVoDEoCxn1M16yGFgtWRSSfOcyLYlDvJDYJGPKPGTt-SYC1x_x-WlOqyzulSw1PHu4iTZiIorUbgl7YEEBY2nD8kx-sFQaAaJRrYdFBnPYcSvgfSU3GCBGDZIqsI" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Necklaces" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-8 left-8 text-white font-black text-2xl">Necklaces</div>
              </div>

              <div className="relative rounded-3xl overflow-hidden group bg-[#121615]">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_jaFmjySrnErkBXL3R8wqVxLBk___lcq9SSCFTfUTyE0B0-VRs55BETrw7LuIoMtBOOXnlUaUQ2bpo6Sh6lz1Wc9adh1DBJqP2wq4dN7Z0fuHek6zssfWUAzUwo8ft2-cOiQ7XNdFxsQWvtCLRNAxeX9b5RUHykQh2C-Hbqf__DlDOP87_2mIEQI90mvtKKUa1klDpwekuqFcydwXrdNiJ7-vNmexBK2aQcIfhMzyZKJxI3lZNaowVA6OGVd-ctD27rbwm83gaNU" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Watches" />
                <div className="absolute bottom-6 left-6 text-white font-black text-xl">Watches</div>
              </div>

              <div className="relative rounded-3xl overflow-hidden group bg-[#121615]">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj8UTFjvKCDCTrmldaMWwhWxaBDfA9U48R7hc-aNO28HP-hmA9PVqVLV5yFMgj241xmKHRJF9uOHs8GtjBdte1sxFaFxrHDtaOWfM5mCXRqU_bRkC1GcDyQPRn8GJ_grbXUYPFqjJFbLyfMk9UEdHnEx4OJ7xwiF38hHI636SomRWgfIJWJQJGvR2RrSHxeIk0eTIc_4JUP85r7849Hqa2dsg_aAa55DQCbUGqQMMlmqCkYydW4zmL3Q6MA4ciwx5TU3u3fGHH2i4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Bracelets" />
                <div className="absolute bottom-6 left-6 text-white font-black text-xl">Bracelets</div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-20 px-6 lg:px-20 bg-[#fefdfb]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-black tracking-tight">New Arrivals</h2>
              <div className="flex gap-4">
                <button className="size-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all">
                  <ArrowLeft className="size-4" />
                </button>
                <button className="size-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all">
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {newArrivals.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                    <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                    {item.new && (
                      <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest">New</div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest mb-2">{item.desc}</p>
                  <p className="font-black text-sm">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability & Craft */}
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-center bg-[#f2f3f0] rounded-[40px] overflow-hidden">
            <div className="p-12 lg:p-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Craftsmanship</span>
              <h2 className="text-5xl font-black leading-[1.1] mb-8 tracking-tight">The Art of Sustainability and Craft</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-md font-medium">
                Each piece in our collection is meticulously handcrafted by master artisans using only ethically sourced, recycled 18K gold and lab-grown gemstones. We believe that true luxury should be as kind to the planet as it is beautiful to the eye.
              </p>
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3">
                   <div className="size-5 bg-primary/10 rounded-full flex items-center justify-center">
                     <CheckCircle className="size-3 text-primary" />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest">100% Recycled Materials</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="size-5 bg-primary/10 rounded-full flex items-center justify-center">
                     <CheckCircle className="size-3 text-primary" />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest">Lifetime Warranty</span>
                </div>
              </div>
              <Link href="/about" className="inline-block border-b-2 border-black pb-1 font-bold uppercase tracking-widest text-[10px]">Read Our Story</Link>
            </div>
            <div className="h-full min-h-[600px]">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbaTvMgGJ6yb9Btj1uhg9RhIXIs27N497Ku0RupClasor3ScndlidqkFzyFLOxmW08sgEinUXuD2DOVXk388-Urf0hcM5PQDTuhD7ZScMPzwEtm9CnrentwTKpk6-xPDNfeIRu4xXwbr5xV5DLWQBgEUcFrh4MWYszQWd0DMSTYe7NxEJR8g1WlgteDPCI_ktzV4nJ3StQx_A2rbrlefhUtvH2Y8wwYYEh8-_lt1wXk3HbprbBMv3Vk9kwG-l4SGG8ySRLc5afCSA" className="w-full h-full object-cover" alt="Artisan Crafting" />
            </div>
          </div>
        </section>

        {/* Join the Circle */}
        <section className="py-24 px-6 text-center border-t border-gray-100">
           <Mail className="size-8 mx-auto mb-6 text-accent-gold" />
           <h2 className="text-4xl font-black mb-4 tracking-tight">Join The Circle</h2>
           <p className="text-gray-500 text-xs font-medium max-w-sm mx-auto mb-10 leading-relaxed uppercase tracking-wider">
             Receive early access to new drops, exclusive editorial content, and member-only pricing.
           </p>
           <div className="max-w-md mx-auto flex gap-0 rounded-xl overflow-hidden border border-gray-200">
             <input className="flex-1 px-6 py-4 border-none focus:ring-0 text-xs font-medium bg-gray-50" placeholder="Your email address" type="email" />
             <button className="bg-[#20604a] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-[#1a4f3d] transition-all">Subscribe</button>
           </div>
           <p className="mt-4 text-[8px] text-gray-400 font-bold uppercase tracking-widest">By signing up, you agree to our privacy policy</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const newArrivals = [
  {
    name: "Heritage Emerald Ring",
    desc: "18k Recycled Gold",
    price: "2,450",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqvNjcHrUrIKlBhTtdBWvnx9ejOyTWqNqjinDhbC6ufQ8bDfU704YpkLH2rhbaHuvzbPiYB1JtimwXanpAGWY8LortkKCvqUY4czDUGQkzYMuBmLBq3GIoeqI110UYk6QsI1aVz-L5cerx4Zqw4TYmx1bkAfg-Lzo1r3154Mngdtdb67o9WtpPBICOzIFeoHgOXCsrp0NWNtTgzW3e3unoCoWvLb4p7xRLMYnSholMBF7u0_M5QdKRld_tYNPzprlQTHbHII1C90k",
    new: true
  },
  {
    name: "Serpent Silver Pendant",
    desc: "Sterling Silver 925",
    price: "850",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChcGb91t55u2QLYe6guJAtJusVwfLiPcEVVK9xj0KP4duD90uL3NEUK19iOHc1YgNbpFkKOMC8fQPyAsMwtrzvlgQvdFUoQ923wtRJFKVGuDwUwx1LADOxLsrAgT5rstgxohf4imHhc8jwjp3jVoDEoCxn1M16yGFgtWRSSfOcyLYlDvJDYJGPKPGTt-SYC1x_x-WlOqyzulSw1PHu4iTZiIorUbgl7YEEBY2nD8kx-sFQaAaJRrYdFBnPYcSvgfSU3GCBGDZIqsI"
  },
  {
    name: "Titanium Curb Bracelet",
    desc: "Limited Edition Matte Finish",
    price: "1,100",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQp4WJPIQ4gDdRb5PZ5rZFtHQ6y7JjclCuy0zN2R03f2adlTkGnUl2O8K-EsoSXwltE2trYuV0cJnb5ZRY7Dwxf59NhpVLVG0bMEBAQRn0iqXoYnYEDVUYLyZ6eEI0FwS_F5Um9lDViGe00VolsP5L7yASn1SVqBBecWzgL6By_c39mFZPQI7fDb_P8kgJ3Qs0-CfAm3U5o6aZ7FTN7mFQFvn2VgqhsrjhwdW3dl7wBTJ4Wi4CaPyN5YLn3Jhxm6Ou-XBWNPiOzL4"
  },
  {
    name: "Chronograph V1 Gold",
    desc: "Automatic Swiss Movement",
    price: "5,900",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX6lnXbYpHumEwS6kaU9mIe2A9unGggrduwaxWp5AT-tFqIa_Z4DzaSm-w7XNtmPZZOJ_92t8BUi1s3UVGKJ62K6PeL1GaUiyor1Pz-4RQAM49ftb5jEOP6xJG6NZ76k14wUNImHItgCU5X1QRJY_Kx6UvYto4X_N_B4XrQv2yiWv1AjUaljI38oOWqOk4t7wOCjBIRKyM_Mwi4cH5rmq-g56bWIvvPMBwknD7C9N-jw48G1JIHqdQWNsaV3cBnEsdlEZPLiD3Aq0"
  }
];
