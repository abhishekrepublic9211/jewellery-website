import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Share, ShoppingCart, Trash2, Diamond } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121615] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-12">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tight leading-none dark:text-white">Your Curated Collection</h1>
            <p className="text-[#6a8179] text-lg font-medium">8 exquisite pieces saved for your next masterpiece.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#f1f4f3] dark:bg-[#1e2a26] rounded-xl font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
              <Share className="size-4" />
              Share Wishlist
            </button>
          </div>
        </div>

        {/* Bento Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Highlight Item (Large Tile) */}
          <div className="sm:col-span-2 sm:row-span-2 group relative bg-white dark:bg-[#1e2a26] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-white/5">
            <div className="relative aspect-square sm:aspect-auto sm:h-full w-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7suiB1PcM47eNVVFa-ezLe7-5DrduvY_Y97lyUOqWz26TtlrgHtVfg4tIa4an11sYSYJlxFfSCB6pV7EGbuX-cHNDDOc2G1VTMsSQYICmgUaTtrJndAmR5CYz0awN1ngCXGfFZgoqvtGTfel70T8MGawKZ1mWOlk0TDREkhepKPLvWv90bLGnkb3hoXziNQ5A609xlIoy16gObG3tNSKdAKI4W0yfwMQa3GNx7E_LnPdp6_vUj2LajUdoZc-k7Ju2jnXOg8RY6rs')` }}>
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Featured</div>
              <button className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="size-4 text-red-500" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Verdant Muse Emerald Necklace</h3>
                  <p className="text-white/80 text-sm">18k White Gold, 4.5ct Emerald</p>
                  <p className="text-xl font-medium">$12,400</p>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>

          {/* Regular Items */}
          {wishlistItems.map((item, i) => (
            <div key={i} className="group bg-white dark:bg-[#1e2a26] rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 transition-all hover:shadow-lg">
              <div className="aspect-[3/4] overflow-hidden relative">
                <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${item.image}')` }}></div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="bg-white p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all">
                    <ShoppingCart className="size-5" />
                  </button>
                  <button className="bg-white p-3 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all">
                    <Trash2 className="size-5" />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-[#121615] dark:text-white">{item.name}</h4>
                <p className="text-sm text-[#6a8179]">${item.price}</p>
                <div className="flex items-center gap-1.5 pt-2">
                  <span className={`w-2 h-2 rounded-full ${item.stock === 'In Stock' ? 'bg-green-500' : 'bg-orange-400'}`}></span>
                  <span className="text-[10px] font-bold text-[#6a8179] uppercase tracking-tighter">{item.stock}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const wishlistItems = [
  {
    name: "Aurelius Gold Band",
    price: "850",
    stock: "In Stock",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-o1ZVIBgkmB7ENWuntlU9NS7QT0qpgpxVHTp-wwagHno1SY4ZiELqpRwICzG9smKmkry8n7Vx2gWb39NQDux0jgbdb7FC5hlR5Fc_KJKJrm0Dgn5ia5koaETZuQEWtgIpSxrHO6b1Dgl6QntcMMLS9qwwmm3LGk-PukTvUfE43GXg1HxLlB8iAzZXfrxdacYqFqwQQ-AUbpcrA9pUVF3QpVlAioNoFRv4RISQOj8huUqYF5GlD802UBLA3mlYlWWFTEhGNcD8pxs"
  },
  {
    name: "Prism Silver Droplets",
    price: "420",
    stock: "Low Stock",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvFO3ThLxIeeTDHTjXL9WQjRKQg2-fzBC3sz0WvMnqJquknugH1NKo-CWWSGgwLFFKmFU8Az4T8EzcrvYhqoW2JPaTW81ceEStYEaYTStZaZxEX3kX_24EZJ7gKHUaDQAUuSTQKyMcyWbbL4n-f0Dv_Hix96KQyx0V1udIBTg_VRyJAXurRe1K7BRlNvH3S5MzkwP24DM0zGKtcoaDkp8sqhHzl7rOTUFX3mQQSOOCn8UJdpSA9eZida1G9D-Xyob2w1vkA1pmdjw"
  },
  {
    name: "Shadow Point Obsidian",
    price: "1,100",
    stock: "In Stock",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4h_n9zOlBkLtv5bjspxYg2WGRt3pteYj1p5dRA2fR1qUCA1HomHu985J9Qnc217xGOk2EAaw8EwJcI9KxzJdfqMXi_VtdBxTby8Ndea6xl5XUgBplCWsWsxWF3rDgvpFkqvznBQAgRqNZG3z_vYKc6W3sv-mdri82UIB0SjluFmkK9BvYAAtEnhV0iHG-SxQhnGFqV54xphvZrCj4b_DYMGNqPmeka4AeD0aiqSDsMY89Bg83WCywC-WRS3mMRbF5RBts7WScWm0"
  },
  {
    name: "Tempus Rose Chrono",
    price: "3,200",
    stock: "In Stock",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX6lnXbYpHumEwS6kaU9mIe2A9unGggrduwaxWp5AT-tFqIa_Z4DzaSm-w7XNtmPZZOJ_92t8BUi1s3UVGKJ62K6PeL1GaUiyor1Pz-4RQAM49ftb5jEOP6xJG6NZ76k14wUNImHItgCU5X1QRJY_Kx6UvYto4X_N_B4XrQv2yiWv1AjUaljI38oOWqOk4t7wOCjBIRKyM_Mwi4cH5rmq-g56bWIvvPMBwknD7C9N-jw48G1JIHqdQWNsaV3cBnEsdlEZPLiD3Aq0"
  }
];
