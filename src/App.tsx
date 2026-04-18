import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Heart, 
  Star, 
  Clock, 
  MapPin, 
  Phone,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  UtensilsCrossed,
  Cake,
  Cookie,
  Coffee
} from 'lucide-react';

const CATEGORIES = [
  { name: 'Artisanal Cakes', icon: <Cake size={20} />, img: 'https://images.unsplash.com/photo-1578985543062-d974ad93d5f6?auto=format&fit=crop&q=80&w=800' },
  { name: 'Traditional Sweets', icon: <UtensilsCrossed size={20} />, img: 'https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&q=80&w=800' },
  { name: 'Gourmet Pastries', icon: <Cookie size={20} />, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800' },
  { name: 'Cafe & Beverages', icon: <Coffee size={20} />, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800' },
];

const FEATURED = [
  { name: 'Royal Velvet Rose', price: '$42', rating: 4.9, img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=600' },
  { name: 'Saffron Silk Laddoo', price: '$28', rating: 5.0, img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=600' },
  { name: 'Midnight Truffle Noir', price: '$45', rating: 4.8, img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=600' },
  { name: 'Crème Pistachio Dream', price: '$18', rating: 4.7, img: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&q=80&w=600' },
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-xl shadow-ink/5' : 'py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-white">
              <Cake size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold leading-none tracking-tight text-ink uppercase">Suraj Kumars</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase italic">Artisanal Bakery</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {['Home', 'Collections', 'The Craft', 'Store', 'Custom Order'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-xs font-bold text-ink hover:text-accent transition-all tracking-[0.1em] uppercase relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="relative group overflow-hidden">
              <ShoppingBag size={20} className="text-ink group-hover:text-accent transition-colors" />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button 
              className="lg:hidden text-ink"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-paper flex flex-col p-12"
          >
            <button 
              className="self-end mb-12 text-ink"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8">
              {['Home', 'Collections', 'The Craft', 'Store', 'Custom Order'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-4xl font-display italic text-ink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="h-[1px] bg-ink/10 my-4"></div>
              <button className="btn-elegant w-full">Track Order</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-warm pt-20">
          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-6 rounded-full">
                Est. 1994 • Crafted with Passion
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] text-ink">
                Refined <br />
                <span className="italic font-normal serif text-primary">Sweetness</span>
              </h1>
              <p className="text-lg text-ink/60 max-w-md mb-12 font-medium leading-relaxed">
                Suraj Kumars Sharma brings you an exquisite collection of artisanal pastries and traditional delicacies, where every bite is a masterclass in flavor.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="btn-elegant">Discover Menu</button>
                <button className="px-6 py-4 flex items-center gap-3 text-ink font-bold hover:gap-5 transition-all uppercase text-xs tracking-widest border-b border-transparent hover:border-ink">
                  Our Story <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/5] lg:aspect-square"
            >
              <div className="absolute inset-0 border border-ink/5 rounded-full scale-110 animate-pulse"></div>
              <div className="absolute inset-0 border border-ink/10 rounded-full scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&q=90&w=1200" 
                alt="Signature Artisanal Cake"
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-20 modern-shadow transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-full shadow-2xl z-30 hidden md:block max-w-[200px] border border-ink/5">
                <div className="text-accent italic font-serif text-3xl mb-1 mt-[-40px]">Fresh</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-ink/30 mb-2">Baked Morningly</div>
                <div className="text-xs font-semibold text-ink leading-tight">Handcrafted using only organic ingredients.</div>
              </div>
            </motion.div>
          </div>
          
          {/* Background Text */}
          <div className="absolute -bottom-20 -left-20 text-[20vw] font-display font-black text-ink/5 leading-none select-none pointer-events-none whitespace-nowrap">
            PREMIUM SHARMA
          </div>
        </section>

        {/* Categories Section */}
        <section id="collections" className="py-32 bg-paper relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">The Collections</span>
                <h2 className="text-5xl md:text-6xl text-ink max-w-xl">A Symphony of <span className="italic font-normal serif text-primary">Flavors</span></h2>
              </div>
              <p className="text-ink/40 max-w-xs text-sm uppercase font-bold tracking-widest leading-loose">
                Exploring the delicate balance between tradition and modern pastry arts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CATEGORIES.map((cat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-[500px] overflow-hidden bg-ink"
                >
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-ink transition-colors">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-3xl mb-4 leading-tight">{cat.name}</h3>
                      <button className="flex items-center gap-2 text-white/60 text-[10px] uppercase font-bold tracking-[0.2em] group-hover:text-white transition-colors">
                        Explore Collection <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Craft Section */}
        <section id="the-craft" className="py-32 bg-warm">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" 
                alt="Our craftsmanship" 
                className="w-full aspect-[4/5] object-cover rounded-none modern-shadow"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-12 -right-12 bg-primary text-white p-12 w-48 h-48 flex flex-col justify-center items-center text-center rounded-none shadow-2xl rotate-12">
                <span className="text-4xl font-display font-black block mb-1">30+</span>
                <span className="text-[8px] font-bold uppercase tracking-widest leading-tight">Years of Expertise</span>
              </div>
            </div>
            <div>
              <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Our Heritage</span>
              <h2 className="text-5xl md:text-6xl text-ink mb-12">Driven by <span className="italic font-normal serif text-primary">Perfection</span>, Inspired by <span className="italic font-normal serif text-primary">Joy</span>.</h2>
              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 bg-white flex items-center justify-center text-primary shadow-lg">
                    <Star size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">Finest Ingredients</h4>
                    <p className="text-ink/60 text-sm leading-relaxed font-medium">We source global cocoa, organic dairy, and local spices to create flavors that resonate with luxury.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 bg-white flex items-center justify-center text-primary shadow-lg">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">Handcrafted with Love</h4>
                    <p className="text-ink/60 text-sm leading-relaxed font-medium">Every sweet and cake is individually crafted by our master confectioners under the guidance of Suraj Kumars Sharma.</p>
                  </div>
                </div>
              </div>
              <button className="btn-elegant">Our Philosophy</button>
            </div>
          </div>
        </section>

        {/* Featured Items */}
        <section className="py-32 bg-paper">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Seasonal Highlights</span>
              <h2 className="text-5xl md:text-6xl text-ink">Signature Delicacies</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {FEATURED.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden mb-6 bg-warm">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <button className="absolute bottom-4 right-4 bg-white p-4 shadow-xl translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ShoppingBag size={20} className="text-ink" />
                    </button>
                    <div className="absolute top-4 left-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className={`${i < Math.floor(item.rating) ? 'text-primary fill-primary' : 'text-gray-300'} `} />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg mb-1 leading-tight group-hover:text-primary transition-colors">{item.name}</h4>
                      <p className="text-accent font-bold tracking-widest text-sm italic">{item.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-ink relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full gap-4 p-4">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="border border-white/20 aspect-square"></div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-white text-5xl md:text-7xl mb-12">Enriching Your <span className="italic font-normal serif text-primary">Celebrations</span>.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-all flex items-center justify-center gap-4">
                Order Custom Cake <ArrowRight size={18} />
              </button>
              <button className="border border-white/30 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Find Nearest Store
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-paper py-24 border-t border-ink/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center text-white">
                  <Cake size={18} />
                </div>
                <span className="text-xl font-display font-bold leading-none tracking-tight text-ink uppercase">Suraj Kumars</span>
              </div>
              <p className="text-ink/60 text-sm leading-relaxed mb-8">
                Defining the pinnacle of dessert experiences through artisanal craftsmanship and timeless traditional recipes.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Boutique Locations</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 text-sm text-ink/60">
                  <MapPin size={18} className="flex-shrink-0 text-primary" />
                  <span>102 Artisanal Lane, <br />Gourmet District, Mumbai</span>
                </li>
                <li className="flex gap-4 text-sm text-ink/60">
                  <Phone size={18} className="flex-shrink-0 text-primary" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex gap-4 text-sm text-ink/60">
                  <Clock size={18} className="flex-shrink-0 text-primary" />
                  <span>Daily: 09:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Collections</h4>
              <ul className="space-y-4">
                {['Wedding Cakes', 'Traditional Laddu', 'French Macarons', 'Holiday Hampers', 'Signature Desserts'].map(item => (
                  <li key={item}><a href="#" className="text-sm text-ink/60 hover:text-ink transition-colors font-medium">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Join the Club</h4>
              <p className="text-xs text-ink/40 mb-6 uppercase font-bold tracking-widest">Receive curated offers and private tasting invites.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-ink/20 py-3 text-xs focus:outline-none focus:border-primary transition-colors tracking-widest"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary font-bold text-[10px] tracking-widest uppercase">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-ink/30 uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} SURAJ KUMARS SHARMA GROUP. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <p>DESIGNED BY <a href="https://ozosoft.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline decoration-offset-4">OZOSOFT</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

