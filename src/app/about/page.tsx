import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#121615] dark:text-white transition-colors duration-300">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full parallax-bg bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `linear-gradient(rgba(20, 30, 27, 0.4), rgba(20, 30, 27, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMzAId8aeq8CJfext1rUkkq9nZqqj_ivwKG6mP9-96BCEQZoVkU1yDv0mQSIFbkCx2m5BOV417VSf5xAMtGWyaVX10Zcl0XlVv3EzZxpvqu41TTWAESyLkS1lMkuMaooPTRCmSozXAflrmRanAmAh5PUqC9EG_ObT2W5UWi6phfUpDxDlSHakGDTA5Y7vN5Qzj2V2pg2QLSUL01i66NfGThEniWGN3EfXTesKG3QZj2J1VQ6Nan38jND_giI4EPtF-W6FTmaBicRw')` }}>
            </div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <span className="inline-block text-accent-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Est. 1994</span>
            <h1 className="text-white text-5xl md:text-8xl font-black leading-tight mb-6 drop-shadow-lg">
              The Art of <br /><span className="text-accent-gold">Eternal</span> Design
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              A heritage of precision, passion, and hand-forged excellence in every piece that touches your skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
                Explore Collection
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                Our Process
              </button>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block h-1 w-20 bg-accent-gold rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white leading-tight">
                Crafted for the <br />Individualist.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Born in a small studio in Florence and refined in the heart of London, Luxe Jewels began with a simple philosophy: jewelry should be as unique as the memories it honors. We don't believe in mass production. We believe in the weight of cold gold, the fire of ethically sourced diamonds, and the human touch.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Every curve, every setting, and every polish is performed by master artisans who have spent decades perfecting their craft. We are not just making accessories; we are forging heirlooms.
              </p>
              <div className="flex gap-10 pt-4">
                <div>
                  <span className="block text-3xl font-black text-primary dark:text-white">28</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest">Years Experience</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-primary dark:text-white">100%</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest">Ethical Sourcing</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-primary dark:text-white">14</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest">Master Artisans</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-xl transition-all group-hover:top-0 group-hover:right-0"></div>
              <img alt="Our Craftsmanship" className="relative rounded-xl shadow-2xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz0DzjMl-Cdpi8cV5JS7KLR4Bu7PDEp-GnGgO6NTLFh-WcunYCW_cc-zh36qxu3QoidOdDJ7HmklOABp3tbF44KLZzNjgwXhRCRGfn97WpHMoA77qXYKr6fF4LmPcw6JWeqKeDqG9gs0cdVFPm7PiSWSE-Z52raYZyjzJ00bMXXRgds5j52zPsebSNQS9v3yz-K4uvojAJi42Q_ewllzdQflmZCQblDef1eRQLGpXzETMkfUk7TLSivlNhsSddP-W1GvW7Co1_q6E" />
            </div>
          </div>
        </section>

        {/* Bento Grid: Our Craftsmanship */}
        <section className="py-24 px-6 lg:px-20 bg-background-light dark:bg-white/5">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4">The Workshop Ritual</h2>
              <p className="text-gray-600 dark:text-gray-400">Step inside the sanctum of high-end jewelry design.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 bg-cover bg-center rounded-2xl relative overflow-hidden group" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbaTvMgGJ6yb9Btj1uhg9RhIXIs27N497Ku0RupClasor3ScndlidqkFzyFLOxmW08sgEinUXuD2DOVXk388-Urf0hcM5PQDTuhD7ZScMPzwEtm9CnrentwTKpk6-xPDNfeIRu4xXwbr5xV5DLWQBgEUcFrh4MWYszQWd0DMSTYe7NxEJR8g1WlgteDPCI_ktzV4nJ3StQx_A2rbrlefhUtvH2Y8wwYYEh8-_lt1wXk3HbprbBMv3Vk9kwG-l4SGG8ySRLc5afCSA')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h3 className="text-white text-xl font-bold">Hand-Forged Gold</h3>
                    <p className="text-white/70 text-sm">We use traditional heat-treating methods to ensure structural integrity.</p>
                  </div>
                </div>
              </div>
              <div className="bg-cover bg-center rounded-2xl group relative overflow-hidden" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCua-0gcLiGCmXczpCUQI7Jgr3fqeDGRq_Hlt1bi_PfhP534PKM0i2acfDQXTe8DDdawnPWTZpD4dkhhStA3ZuRcJXY2mRA7Uqd7xZfh0UkmW6E1ZHGRCqR4O17QLBiJPDWNBZ-BeL2px5qgK_QydpxA2x9YevF0sLM8cFPeD68aCARBs5bOSHLlpZ1vJlsptTrRujbWkpmtSOiQsOXaG6cdyjFAMe5Nhl3teZ4BxGqxpBWQFL1jCd04y7GeIEComcfVT2IL_t--jM')` }}>
                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <span className="text-white font-bold">Precision Tools</span>
                </div>
              </div>
              <div className="bg-cover bg-center rounded-2xl group relative overflow-hidden" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGEVeOx4UPqj1Sp0TiAvqimciU_DM5u3Pv5kPcj1B9e3NHm_auNVCtK4kFIV5_k6LNlza8yRGX2Ta9BrdrNbuplFHZY_gx5VVezyiu0eDkR_FEbjCYQnSJYB8XBt7nbDl_EqzoUgxkbmdJHWiRUa90YSn84ZsncNk8qj5DO0cNrEozl-f69a0WSsIKQ-zneHoVRzKHDgoVqh-rfrkt_-YyWKA7ceO77N0qsWk2mktjEwDu9SoLyldDONgC7ARZqy9rSJwxbmXdVZk')` }}>
                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <span className="text-white font-bold">Rare Gems</span>
                </div>
              </div>
              <div className="md:col-span-2 bg-cover bg-center rounded-2xl group relative overflow-hidden" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGy3spC_kdk0VVikxZboCkF1bOs-_Z9BxF7ptdjX4YfyxjGEeAr23mRURMXsvTSvsEjkR0893helXREaA6WTj0zMdFF_UaT92urRatmjPB4sAY7_Ts68MVtzNt-215OzdB1fNzUs7Ju3YsFXE-IA1gD-v-NdCvEIFBSWt9jY9s7CKqY01UX-nrfU09tkcKqkJHIs0oetKZyd6ZpU6BE6vZJX0fCItXaMyapO3FqqdWOU_VLzzkt7JVAunNvI-X0F1ny0m8x7VGpvg')` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-8 flex flex-col justify-center">
                  <h3 className="text-white text-xl font-bold">The Blueprint</h3>
                  <p className="text-white/70 text-sm max-w-[200px]">Every piece starts with a hand-drawn vision before entering CAD design.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Banner */}
        <section className="relative py-32 overflow-hidden bg-primary text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="material-symbols-outlined text-accent-gold text-5xl mb-6">eco</span>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Earth First. <br />Elegance Always.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-accent-gold">verified</span>
                    <div>
                      <h4 className="font-bold mb-1">Recycled Metals</h4>
                      <p className="text-white/70 text-sm">90% of our gold and silver is sourced from recycled high-quality jewelry and industrial components.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-accent-gold">diamond</span>
                    <div>
                      <h4 className="font-bold mb-1">Conflict-Free Stones</h4>
                      <p className="text-white/70 text-sm">Strict adherence to the Kimberley Process ensures every stone is ethically mined and traded.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                  <span className="text-4xl font-black mb-2">0%</span>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent-gold">Child Labor</p>
                </div>
                <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10 translate-y-8">
                  <span className="text-4xl font-black mb-2">100%</span>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent-gold">Fair Wages</p>
                </div>
                <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                  <span className="text-4xl font-black mb-2">Net</span>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent-gold">Carbon Neutral</p>
                </div>
                <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10 translate-y-8">
                  <span className="text-4xl font-black mb-2">Eco</span>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent-gold">Packaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-black mb-4">The Minds Behind the Metal</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Meet the designers, master jewelers, and visionaries who turn raw material into wearable art.</p>
              </div>
              <div className="flex gap-4">
                <button className="size-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="size-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="group">
                <div className="relative h-[450px] mb-6 overflow-hidden rounded-2xl">
                  <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ608Q2X8-zXdX3zrL5D6piEcwC3QR90jvTIzbhwBE79Fa4yAEt4raXOopKMuGkYrKpaVuv3NLN-qhhcVt8W8pUeLUn42HC4a5cbF9HyrLJpOrM7h8_yzYUTJkb7O3Jy8NJeWoeVW94irhLaMQqzGeAmK-HfM6KiM0aLvNT06zl8s5s0QP_-CQ9SItYxIHoY44nFaR6F7c1254H7kOHZDZAGWK0ApednR-6G5dK7QGO6JWZNJl1Yxxwd9wbe8IArrDkwMiaYxr3Ks" alt="Marcus Vane" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-4 justify-center">
                      <span className="material-symbols-outlined text-white cursor-pointer hover:text-accent-gold">link</span>
                      <span className="material-symbols-outlined text-white cursor-pointer hover:text-accent-gold">mail</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-black text-primary dark:text-white">Marcus Vane</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Creative Director</p>
              </div>
              {/* Team Member 2 */}
              <div className="group">
                <div className="relative h-[450px] mb-6 overflow-hidden rounded-2xl translate-y-8">
                  <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdoxk4LHSD9Gndoi9tM9sxO1nTiyQ9vbzBoWiWkpY12Qa3Ilqo1B2SsYAfi3dHf7BluvCHWrjkcG3j1mHpRNJOJS-jp4Rfr8pnPYYt4ui_VELtCUNlt0oaqCDaTcXGMGdjTHfnO_mxzkFP4X4VVgrF7D1mhWU3yEpgxWE_X6mmAjfWrVAA_zBYbf5hr6qxO4lVKpODGgKRXsPmaMft6VBTzVajBK9n9sLJlySNa_qr2mspHKRLiYfg28iOGfqjN36acdG8Usqezf4" alt="Elena Rossi" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-4 justify-center">
                      <span className="material-symbols-outlined text-white cursor-pointer hover:text-accent-gold">link</span>
                      <span className="material-symbols-outlined text-white cursor-pointer hover:text-accent-gold">mail</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-black text-primary dark:text-white">Elena Rossi</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Lead Gemologist</p>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="group">
                <div className="relative h-[450px] mb-6 overflow-hidden rounded-2xl">
                  <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpiAU56AzD84fP5rLsq-OWXllhp4Xyab9stO1BzbNfJM0XptmSewVbU48Ql9EhW-bEUSyQhoXzE4_XG1LbLDjAX8Px10AUXDaeQzeHqirlOBJdtZUBDlfjjzA4YDGXA7jFRkE0QlSkpAcEIEvRO1ChepLRLkx2dQBgWVbD9HqUz88MNm_IxPBnys-4RjEaMCv_DvXsEW4I_pSCf6EX7dtObtVohxWP0UJVwrSTvOp9jw-MEozkdbdCn3F0lHfnuxzqDL0DI33wvlo" alt="Arthur Sterling" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-4 justify-center">
                      <span className="material-symbols-outlined text-white cursor-pointer hover:text-accent-gold">link</span>
                      <span className="material-symbols-outlined text-white cursor-pointer hover:text-accent-gold">mail</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-black text-primary dark:text-white">Arthur Sterling</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Master Forger</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-20 text-center">
          <div className="max-w-2xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">Ready to Find Your <span className="text-primary italic">Statement?</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Join our newsletter to receive exclusive insights into new drops, artisan stories, and private studio tours.</p>
            <div className="flex flex-col sm:flex-row gap-0 overflow-hidden rounded-xl border-2 border-primary mx-auto max-w-lg">
              <input className="flex-1 px-6 py-4 border-none focus:ring-0 text-gray-800 dark:bg-white/5 dark:text-white" placeholder="Email address" type="email" />
              <button className="bg-primary text-white px-8 py-4 font-bold hover:bg-primary/90 transition-all uppercase text-sm tracking-widest">Join Us</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
