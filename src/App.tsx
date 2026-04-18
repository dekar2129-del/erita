import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Star,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Menu,
  X,
  Car,
  ShieldCheck,
  Zap,
  Key,
  Gauge
} from 'lucide-react';

const NAV_LINKS = ['Home', 'Fleet', 'Services', 'Locations', 'Contact'];

const FLEET = [
  { 
    id: '01', 
    title: 'Luxury Sedans', 
    tags: ['Mercedes-Benz S-Class', 'BMW 7 Series', 'Audi A8'],
    description: 'Experience ultimate comfort and sophistication with our executive sedan fleet. Perfect for business travel and premium airport transfers.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '02', 
    title: 'Performance & Sport', 
    tags: ['Porsche 911', 'Audi R8', 'Lamborghini Huracán'],
    description: 'Unleash pure power on the road. Our performance category features the world\'s most iconic sports cars for an unforgettable driving experience.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '03', 
    title: 'Luxury SUVs', 
    tags: ['Range Rover', 'BMW X7', 'Mercedes G-Wagon'],
    description: 'Power meets versatility. Our SUV fleet offers spacious interiors and commanding presence for family trips or group adventures.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '04', 
    title: 'Electric Premium', 
    tags: ['Tesla Model S Plaid', 'Lucid Air', 'Porsche Taycan'],
    description: 'Drive the future of mobility. Zero emissions, instant torque, and cutting-edge technology in our sustainable performance fleet.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>('02');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-black bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 glass h-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-black">
              <Car size={24} strokeWidth={3} />
            </div>
            <div className="text-2xl font-black text-ink tracking-tighter">CABRAX</div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-[13px] font-black text-ink/80 hover:text-primary transition-all uppercase tracking-widest"
                onClick={() => link === 'Home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-primary text-black btn-pill !px-8 !py-3 text-[14px] hover:bg-white transition-all modern-shadow">
            Rent Now
          </button>

          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-paper p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black">
                    <Car size={20} strokeWidth={3} />
                  </div>
                  <span className="text-xl font-black text-ink tracking-tight uppercase">Cabrax</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                 <X size={28} />
               </button>
            </div>
            <nav className="flex flex-col gap-8 items-center flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-4xl font-black text-ink hover:text-primary transition-colors uppercase tracking-tighter"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="mt-12 btn-pill bg-primary text-black !px-12 !py-4 text-lg modern-shadow font-black uppercase">
                Find a Car
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
          {/* Background Video/Image Placeholder */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover opacity-30 grayscale"
              alt="Luxury Car Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-8"
              >
                <div className="w-12 h-[2px] bg-primary"></div>
                <span className="font-mono text-[12px] font-bold text-primary uppercase tracking-[0.3em]">Premium Car Rental Service</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-[110px] font-black leading-[0.9] mb-8 tracking-tighter uppercase italic"
              >
                Drive the <br /> <span className="text-primary">Impossible.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-ink/60 font-medium max-w-xl mb-12 leading-relaxed"
              >
                Elevate your journey with our curated fleet of luxury, performance, and electric vehicles. Precision engineering at your fingertips.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-primary text-black btn-pill flex items-center gap-4 group hover:bg-white transition-all uppercase italic">
                  Explore Fleet
                  <div className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20">
                    <ChevronRight size={14} strokeWidth={3} />
                  </div>
                </button>
                <button className="bg-surface text-ink btn-pill border border-white/10 hover:border-primary/40 transition-all flex items-center gap-3 italic">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>

          {/* Side Vertical Text */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
            <div className="rotate-90 text-[10px] font-bold tracking-[1em] text-white/20 uppercase whitespace-nowrap">
              ESTABLISHED IN 2026 • PREMIUM MOBILITY SOLUTIONS
            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <section className="bg-primary py-12 overflow-hidden border-y border-white/10">
          <div className="flex items-center animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-24 text-black font-black text-4xl uppercase tracking-tighter px-12 italic">
                {['Mercedes-Benz', 'Porsche', 'Tesla', 'Audi', 'BMW', 'Lamborghini', 'Ferrari', 'Range Rover'].map((item) => (
                  <div key={item} className="flex items-center gap-8">
                    <span>{item}</span>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Fleet Section */}
        <section className="py-40 px-8 bg-paper" id="fleet">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
               <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.2em]">The Cabrax Fleet</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-none uppercase italic text-ink">
                    Elite <span className="text-primary">Performance.</span>
                  </h2>
               </div>
               <p className="max-w-md text-ink/40 font-medium text-lg leading-relaxed">
                  From whisper-quiet electric luxury to raw performance power, discover the perfect vehicle for your destination.
               </p>
            </div>

            <div className="flex flex-col gap-4">
               {FLEET.map((car) => (
                 <div key={car.id} className="group">
                    <div 
                      className={`p-8 md:p-12 flex items-center justify-between cursor-pointer transition-all border border-white/5 rounded-3xl ${activeCategory === car.id ? 'bg-surface border-primary/20' : 'bg-transparent hover:bg-white/5'}`}
                      onClick={() => setActiveCategory(car.id)}
                    >
                      <div className="flex items-center gap-8">
                         <span className={`text-xl font-black ${activeCategory === car.id ? 'text-primary' : 'text-white/20'}`}>
                           {car.id}.
                         </span>
                         <h3 className="text-2xl md:text-5xl font-black tracking-tighter uppercase italic text-ink">
                           {car.title}
                         </h3>
                      </div>
                      <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${activeCategory === car.id ? 'bg-primary text-black' : 'text-white/20'}`}>
                         <ArrowUpRight size={24} />
                      </div>
                    </div>

                    <AnimatePresence>
                      {activeCategory === car.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 bg-surface/50 rounded-b-3xl border-x border-b border-primary/10">
                             <div className="flex flex-col justify-center">
                                <div className="flex flex-wrap gap-2 mb-8">
                                   {car.tags.map(tag => (
                                     <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 text-primary border border-primary/20 px-4 py-2 rounded-full">
                                       {tag}
                                     </span>
                                   ))}
                                </div>
                                <p className="text-ink/60 text-xl leading-relaxed font-medium mb-12">
                                   {car.description}
                                </p>
                                <button className="bg-white text-black btn-pill !px-10 !py-4 text-sm font-black uppercase italic w-fit">
                                  Reserve {car.title}
                                </button>
                             </div>
                             <div className="relative aspect-[16/9] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <img src={car.image} alt={car.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Why Choose Cabrax */}
        <section id="services" className="py-40 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <div className="relative">
                  <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200" 
                      alt="Service Detail" 
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-black pulse">
                          <Gauge size={32} />
                       </div>
                    </div>
                  </div>
                  {/* Floating Stats */}
                  <div className="absolute -bottom-12 -right-12 bg-primary p-10 rounded-3xl text-black modern-shadow hidden xl:block">
                     <div className="text-4xl font-black italic tracking-tighter">100%</div>
                     <div className="text-[10px] font-bold uppercase tracking-widest">Satisfaction</div>
                  </div>
               </div>

               <div>
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Advantage</span>
                  </div>
                  <h2 className="text-6xl font-black leading-none mb-10 text-ink uppercase tracking-tighter italic">
                    Beyond <br /> <span className="text-primary">Standard.</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: <ShieldCheck />, title: 'Full Coverage', desc: 'Comprehensive premium insurance included with every rental.' },
                      { icon: <Zap />, title: 'Instant Booking', desc: 'Secure your vehicle in under 60 seconds with our digital platform.' },
                      { icon: <Clock />, title: '24/7 Support', desc: 'Concierge assistance available whenever you are on the road.' },
                      { icon: <Key />, title: 'Doorstep Delivery', desc: 'We bring the keys to you, anywhere in the metropolitan area.' }
                    ].map((item, idx) => (
                      <div key={idx} className="p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-all">
                        <div className="text-primary mb-4">{item.icon}</div>
                        <h4 className="text-lg font-black uppercase italic mb-2">{item.title}</h4>
                        <p className="text-sm text-ink/40 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-40 px-8 bg-paper">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-6 block font-mono">Real Reviews</span>
              <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic text-ink">Client <span className="text-primary">Voice.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Marcus Sterling', role: 'Business Executive', quote: 'The BMW 7 Series was immaculate and delivered right to my hotel. Cabrax redefined professional travel for me.' },
                { name: 'Aria Hudson', role: 'Event Designer', quote: 'Renting a G-Wagon for our production was seamless. The instant torque and premium service were incredible.' },
                { name: 'Kenji Sato', role: 'Tech Founder', quote: 'Driving the Taycan around the city was the highlight of my trip. The tech and performance were top-tier.' }
              ].map((item, i) => (
                <div key={i} className="bg-surface p-12 rounded-3xl border border-white/5 relative group hover:border-primary/20 transition-all">
                  <div className="text-primary mb-8 flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xl font-medium text-ink/80 leading-relaxed mb-12 italic">"{item.quote}"</p>
                  <div>
                    <h5 className="font-black uppercase italic text-lg">{item.name}</h5>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Map Section */}
        <section id="contact" className="py-40 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.2em]">Contact Us</span>
                </div>
                <h2 className="text-6xl font-black mb-12 text-ink uppercase tracking-tighter italic leading-none">
                  Begin Your <br /> <span className="text-primary">Story.</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest uppercase mb-1">Call Booking</div>
                      <div className="text-xl font-black text-ink italic">+1 (800) CAB-RAX-0</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest uppercase mb-1">Headquarters</div>
                      <div className="text-xl font-black text-ink italic">99 Performance Way, GT City</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-paper p-10 md:p-16 rounded-[48px] border border-white/10 luxury-shadow">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                       <input type="text" className="w-full bg-surface border border-white/10 p-4 rounded-xl text-ink focus:border-primary outline-none transition-all italic" placeholder="Race Driver" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                       <input type="email" className="w-full bg-surface border border-white/10 p-4 rounded-xl text-ink focus:border-primary outline-none transition-all italic" placeholder="driver@cabrax.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Select Fleet Category</label>
                    <select className="w-full bg-surface border border-white/10 p-4 rounded-xl text-ink focus:border-primary outline-none transition-all italic appearance-none">
                      <option>Luxury Sedan</option>
                      <option>Performance & Sport</option>
                      <option>Luxury SUV</option>
                      <option>Electric Premium</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Notes</label>
                    <textarea className="w-full bg-surface border border-white/10 p-4 rounded-xl text-ink h-32 focus:border-primary outline-none transition-all italic" placeholder="Special requests..."></textarea>
                  </div>
                  <button className="w-full bg-primary text-black btn-pill !py-5 font-black uppercase italic modern-shadow">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-8 bg-paper border-t border-white/5">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-24">
                 <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-black">
                        <Car size={24} strokeWidth={3} />
                      </div>
                      <div className="text-2xl font-black text-ink tracking-tighter uppercase italic">CABRAX</div>
                    </div>
                    <p className="text-sm text-white/40 max-w-xs font-medium leading-relaxed italic">The pinnacle of automotive rental. Performance, delivered to your door.</p>
                 </div>

                 <div className="flex flex-wrap justify-center gap-12">
                   {NAV_LINKS.map(link => (
                     <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-bold text-white/40 hover:text-primary transition-all uppercase tracking-[0.3em] font-mono">{link}</a>
                   ))}
                 </div>

                 <div className="flex items-center gap-4">
                     {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                       <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all border border-white/5 text-white/40">
                         <Icon size={18} />
                       </a>
                     ))}
                 </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
                <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 CABRAX PREMIUM. ALL RIGHTS RESERVED.</p>
                <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
                   Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">OZOSOFT</a>
                </p>
              </div>
           </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 255, 0, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(212, 255, 0, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 255, 0, 0); }
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #080808;
        }
        ::-webkit-scrollbar-thumb {
          background: #141414;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #D4FF00;
        }
      `}} />
    </div>
  );
}
