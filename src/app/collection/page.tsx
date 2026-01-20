import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ShoppingBag, Heart, ChevronRight, Filter } from "lucide-react";
import Link from "next/link";

export default function CollectionPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 antialiased">
      <Header />
      <main className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8">
        {/* Breadcrumbs & Heading */}
        <div className="mb-10">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <span className="text-[10px]">/</span>
            <span className="hover:text-primary transition-colors">Collections</span>
            <span className="text-[10px]">/</span>
            <span className="text-slate-900 dark:text-white">The Eternal Series</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">The Eternal Series</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                A curated selection of handcrafted 18K gold and obsidian pieces designed to transcend time. Each item in the Eternal Series is finished with a brushed metallic texture.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-500">24 Items Found</span>
              <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-bold uppercase tracking-wider">
            <span>18K Gold</span>
            <button className="material-symbols-outlined text-sm leading-none">close</button>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-transparent rounded-lg text-xs font-bold uppercase tracking-wider hover:border-accent-gold transition-colors cursor-pointer">
            <span>Under $1000</span>
            <button className="material-symbols-outlined text-sm leading-none">close</button>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-primary underline underline-offset-4 ml-2">Clear All</button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-10">
              {/* Gender Section */}
              <section>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center justify-between">
                  Gender
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </h4>
                <div className="space-y-3">
                  {['Men', 'Women', 'Unisex'].map((gender) => (
                    <label key={gender} className="flex items-center gap-3 group cursor-pointer">
                      <div className="size-5 rounded border border-slate-300 dark:border-slate-700 flex items-center justify-center group-hover:border-primary transition-colors">
                        <div className="size-2.5 bg-primary rounded-sm opacity-0 group-has-[:checked]:opacity-100"></div>
                      </div>
                      <input className="hidden" type="checkbox" defaultChecked={gender === 'Men'} />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{gender}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Material Section */}
              <section>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center justify-between">
                  Material
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-3 py-2 text-xs font-bold border border-primary bg-primary text-white rounded-lg">18K Gold</button>
                  <button className="px-3 py-2 text-xs font-bold border border-slate-200 dark:border-slate-800 hover:border-accent-gold rounded-lg transition-colors">Silver</button>
                  <button className="px-3 py-2 text-xs font-bold border border-slate-200 dark:border-slate-800 hover:border-accent-gold rounded-lg transition-colors">Platinum</button>
                  <button className="px-3 py-2 text-xs font-bold border border-slate-200 dark:border-slate-800 hover:border-accent-gold rounded-lg transition-colors">Obsidian</button>
                </div>
              </section>

              {/* Price Range */}
              <section>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center justify-between">
                  Price Range
                  <span className="text-[10px] font-normal tracking-normal text-slate-500">$200 — $5000+</span>
                </h4>
                <div className="px-2">
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full relative">
                    <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-lg"></div>
                    <div className="absolute right-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-lg"></div>
                  </div>
                </div>
              </section>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
              {products.map((product, i) => (
                <div key={i} className="product-card group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 mb-6">
                    <img className="base-image absolute inset-0 w-full h-full object-cover transition-opacity duration-700" src={product.image1} alt={product.name} />
                    <img className="hover-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700" src={product.image2} alt={product.name} />
                    {product.new && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary rounded-full">New Arrival</span>
                      </div>
                    )}
                    <div className="quick-add absolute inset-x-4 bottom-4">
                      <button className="w-full py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                        Quick Add — ${product.price}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="font-sans font-bold text-slate-900 dark:text-white">${product.price}</p>
                    </div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{product.tags}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Load More */}
            <div className="mt-20 flex flex-col items-center gap-6">
              <p className="text-sm font-medium text-slate-400 uppercase tracking-[0.2em]">Showing 6 of 24 pieces</p>
              <div className="w-48 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-primary"></div>
              </div>
              <button className="px-12 py-4 border border-slate-200 dark:border-slate-800 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                Load More Designs
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const products = [
  {
    name: "Vertex Gold Band",
    price: "850",
    tags: "18K Solid Gold • Minimalist",
    image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2x8E90OfZ_vLC23o5qkxBUIPiZkZsX6FMH-8m9awbx4JEOxB7ub3t4P3zQvdO7HTmrjFpenmsgQhZaDKxKCEWX88imPUz84VGeWPuMenX7O_q80eowq9664LboJG9m11Vtf_Rx_I1lYd3ENoh5bdO-y6p65Jjm83KFYVHclPAbDrJR1_aC9nAZxpmq5QgHNBIiG7G0rRA0l0e7MFlq_tyz_J4aNM2yTzuI4ZcHseilM8u1_alLg9D3MQjeAoPnifJ_nYJ8CXeJEE",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaVy1859qRxXWCIz2gBBkmm_HJuSc9CVVMIi59JrxQ4bVJLwvW3KKpXphetqGfcz-j7ok49OKcCs8ibWVTt40lhLI4MWIh-iq2vx8zv0Ee2pdTMg2lVWuIohoyczq4E2h_wUbZKTvmsJBWnYOA3JL624_CAqffAsykZaRpFyQZYUjPUupLeuedtu4t4tUtldD0IreC___wpiCSerbtl8jgjMv68HOleKhgbbHEeUr6HQiIj9fI1A_uJu2S0eEqiC4RB3Ec5O5tHbI",
    new: true
  },
  {
    name: "Obsidian Link Chain",
    price: "420",
    tags: "Sterling Silver • Heritage",
    image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOi9OM7hiu2zHJ7DcBmtYyjPDu5tsO4z6xNZ9bfGJc2RUIKiuFwoG-_6fjVxoppDERHU2_vaCsckdYpuOCIHm5wQLXV-7mz9kDTWtMNkfPbVLuW8bAoDGhuH3uML2iuPcNW2_G3Sckmr7r69WtJXIKxOkblycVZf8KtvmhC2QQZ231SRojVPXUyVwViLTyj5eCflcrzMUKiEAZwL-0yFuMaYH7F01JbLepWOiAA7h7YTekH9hc4sLId0rq5YClMs-nI-B9gZJU92w",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVR3ZmiWC9tJAfQe-WUezjaDcunHInHQnG432EF0pjD7lPRJDv17jFvZwyGheBWmgWFvbsOKKd6gqgyfXtNUTrdO9iMAwMiSsPmfQSiG_S7cU8V7NoXkt_zWHS_FuN6J76wliYlFQcHJ1b1U0HO2Uu9pJiu0dz79QR_sD8tT3KuVJwkbbrKksAf8FPA_4tPvdZ3gLuOXMB50LZwdUwsGHu03QDPY92gn5N8Vpp_Br2ubEFy-cCZkvbmkrSiKqp2Q2j5uQRQ-4CNYE"
  },
  {
    name: "Imperial Cufflinks",
    price: "1,250",
    tags: "18K Gold • Formal",
    image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPx4yqFNGj3JOjMWWHWRId22bJjlQKIYItVGQne2Lqg3Lv6BeCw1fUGPEf5oRLBiNnuVS-asVSCQD6ldGpNPOAICyxSuQiuWph_1ZWjClnoHv8hTpCLVjrtSL-Wf9oJ_mgVOtFcCmOhO37bjijqt_ZqIc3WH1MVARQQsoj70emo5dFAvKQRt6W8u_p1zwmdG4Go8xroU29s2FxFvR2rEdRU2jnqqc8g0norxNAzgf5BK-9gDT3iLxyuPm-9s3HAkqNxkdu1eDvpjY",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGaJ4B5319Z2cGR0vxYx9SK7wm59Uv9jC7QmjS3xjPgS6v_dOolCp0xVDBEeXP2fTrYygo6nkYTUD0rv56S4IHygSf2EI9NEFR7w3k07egzPu-w8HHySgl0UIFtRFzusKb2Wz9tAvnh0PiwQs1WJLm5ji0Q4jjo6D0fI42C9Ip9oG_t3DsP6ES--vqhCcUj-FoLa5OFvwXLVq_B7WF1Udg7F1PzZtMhEdReyt4Y1QGcU21y1BixbHb1xOXbstClGwkWbK7rBD0KI"
  },
  {
    name: "Orbit Hoops",
    price: "290",
    tags: "Sterling Silver • Women",
    image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sx1-_1nT7dMj69LuJF_0xyq6VtEzvEXJzNk8sOAeiBHnG6EWrZdU-KPFqw8VYgrNdqHqe-keEv5xoQix4XChEOmksJhkDPoxbGuJitVdFEXcngKpJhQlZ_5vFZbcHHgat1VcLmeT2lPId56XpcppAM1LNGiJ6r7dwfBFdUyDu9o5Zqfv2JA0xOfP69hCGvTuAKchFC02wvxXBopmgmlh9bHhXQrPyQ_cDnla7GOW_gU21Oii54ARM2WaqTa-tufIz-JcBMQz-oQ",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiEivjUdbkxqE-Z_m1Fe-QmPyuBPpbqhVmdzCQsP_y6xLy67JANAgQngiC6EOjRAg2Yi4YsqPh_Ywc3LQEJOxSL7Mxeq9tzGo7f1yzKVCb0ZJjyNMxZ-7Gl9BgvjoWxsE0N0yE7oPPQNwNA_lHLD5vOJbqHIrhcn2FYh7fvKl41tqRrFHiwslF_cuZMLoDhJGyq0hxDOn4GpkjttBN4jnfT0Qd46LueqB44sIFWedRv0S0rgnDpflvtnCbsGsuA6WFWLUj_p7yJwU"
  },
  {
    name: "Solstice Pendant",
    price: "2,100",
    tags: "24K Plated • Eternal Series",
    image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuChcGb91t55u2QLYe6guJAtJusVwfLiPcEVVK9xj0KP4duD90uL3NEUK19iOHc1YgNbpFkKOMC8fQPyAsMwtrzvlgQvdFUoQ923wtRJFKVGuDwUwx1LADOxLsrAgT5rstgxohf4imHhc8jwjp3jVoDEoCxn1M16yGFgtWRSSfOcyLYlDvJDYJGPKPGTt-SYC1x_x-WlOqyzulSw1PHu4iTZiIorUbgl7YEEBY2nD8kx-sFQaAaJRrYdFBnPYcSvgfSU3GCBGDZIqsI",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL2LAxmnEyji_S8TwzP-cd5VtzlN0kjWb5iQV2A4WIchwmf48zibBnAOpsAMMCcpsyfzW-j4YEQK1wSb6S2P7F72W-M1XPJPg4bWD2JKag1fSmvN4_7TWrePIg4VQIdFOQzKtAp_x0ESWE7s1ojnocan1ZXaEd92kcjCWw2RJK8ruJZa2xshy81CA1ZyFPTmWf92IItEDrqADOzHyNJHTqwFzg6Y0UAsoj1LEVqyBG4I0cYe_ppwpFjMvA84JsItsTFAHuho6CONQ"
  },
  {
    name: "Lattice Bracelet",
    price: "580",
    tags: "Titanium Steel • Unisex",
    image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQp4WJPIQ4gDdRb5PZ5rZFtHQ6y7JjclCuy0zN2R03f2adlTkGnUl2O8K-EsoSXwltE2trYuV0cJnb5ZRY7Dwxf59NhpVLVG0bMEBAQRn0iqXoYnYEDVUYLyZ6eEI0FwS_F5Um9lDViGe00VolsP5L7yASn1SVqBBecWzgL6By_c39mFZPQI7fDb_P8kgJ3Qs0-CfAm3U5o6aZ7FTN7mFQFvn2VgqhsrjhwdW3dl7wBTJ4Wi4CaPyN5YLn3Jhxm6Ou-XBWNPiOzL4",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj8UTFjvKCDCTrmldaMWwhWxaBDfA9U48R7hc-aNO28HP-hmA9PVqVLV5yFMgj241xmKHRJF9uOHs8GtjBdte1sxFaFxrHDtaOWfM5mCXRqU_bRkC1GcDyQPRn8GJ_grbXUYPFqjJFbLyfMk9UEdHnEx4OJ7xwiF38hHI636SomRWgfIJWJQJGvR2RrSHxeIk0eTIc_4JUP85r7849Hqa2dsg_aAa55DQCbUGqQMMlmqCkYydW4zmL3Q6MA4ciwx5TU3u3fGHH2i4"
  }
];
