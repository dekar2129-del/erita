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
  Wrench,
  Droplets,
  Paintbrush,
  Zap,
  Home,
  ShieldCheck,
  Search,
  Users,
  Hammer,
  Sparkles,
  Trash2,
  Bug,
  Smartphone,
  Calendar,
  Award
} from 'lucide-react';

const NAV_LINKS = ['Home', 'Services', 'How it Works', 'Professionals', 'Contact'];

const SERVICES = [
  { 
    id: '01', 
    title: 'Full Home Cleaning', 
    icon: <Sparkles className="text-orange-500" />, 
    price: 'Starting at $49',
    description: 'Deep cleaning for every corner of your home, from floors to ceilings.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '02', 
    title: 'Expert Plumbing', 
    icon: <Droplets className="text-blue-500" />, 
    price: 'Flat $29 Visit Fee',
    description: 'Fixing leaks, installing pipes, and ensuring your water flows perfectly.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '03', 
    title: 'Electrical Repairs', 
    icon: <Zap className="text-yellow-500" />, 
    price: 'Safety Certified',
    description: 'Restoring power, fixing short circuits, and installing smart home tech.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '04', 
    title: 'Professional Painting', 
    icon: <Paintbrush className="text-purple-500" />, 
    price: 'Free Quote',
    description: 'Giving your walls a new life with premium colors and perfect finish.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '05', 
    title: 'Pest Control', 
    icon: <Bug className="text-red-500" />, 
    price: 'Guaranteed Results',
    description: 'Eco-friendly and effective solutions to keep your home pest-free.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a30?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '06', 
    title: 'Appliance Repair', 
    icon: <Smartphone className="text-emerald-500" />, 
    price: 'Genuine Parts',
    description: 'Fixing fridges, washing machines, and all your kitchen essentials.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  }
];

const PROFESSIONALS = [
  { name: 'John Doe', role: 'Master Plumber', rating: 4.9, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sarah Smith', role: 'Lead Interior Painter', rating: 5.0, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  { name: 'David Lee', role: 'Electrical Specialist', rating: 4.8, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 glass h-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <Home size={24} strokeWidth={2.5} />
            </div>
            <div className="text-2xl font-black text-ink tracking-tight uppercase">LOCAL<span className="text-primary italic">JUGAAD</span></div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-[13px] font-black text-ink/60 hover:text-primary transition-all uppercase tracking-[0.2em]"
                onClick={() => link === 'Home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
             <button className="text-[13px] font-black text-ink/60 hover:text-primary transition-all uppercase tracking-widest">
                Partner Login
             </button>
             <button className="bg-primary text-white btn-pill !px-10 !py-3 text-[13px] hover:shadow-xl hover:shadow-primary/20 transition-all uppercase">
               Book Service
             </button>
          </div>

          <button 
            className="lg:hidden p-2 text-ink"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Home size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-xl font-black text-ink uppercase tracking-tight">Localjugaad</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-ink">
                 <X size={28} />
               </button>
            </div>
            <nav className="flex flex-col gap-6 items-center flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-4xl font-black text-ink hover:text-primary transition-colors uppercase tracking-tighter"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="w-full flex flex-col gap-4 mt-12">
                <button className="btn-pill bg-primary text-white w-full !py-5 text-lg font-black uppercase">
                  Find Professionals
                </button>
                <button className="btn-pill bg-surface text-ink w-full !py-5 text-lg font-black uppercase">
                  Become a Partner
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative pt-24 pb-40 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col items-start relative z-10">
                   <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 mb-8"
                   >
                     <div className="w-12 h-[2px] bg-primary"></div>
                     <span className="font-mono text-[12px] font-bold text-primary uppercase tracking-[0.4em]">Home Service On Demand</span>
                   </motion.div>
                   
                   <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-[90px] font-black leading-[0.95] mb-10 tracking-tighter text-ink uppercase"
                   >
                     Fix Your Home <br /> <span className="text-primary italic">In Minutes.</span>
                   </motion.h1>
                   
                   <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-ink/60 font-medium max-w-xl mb-12 leading-relaxed"
                   >
                     Trusted by 20,000+ households. Instant booking, verified professionals, and 100% satisfaction guarantee.
                   </motion.p>

                   {/* Hero Search Box */}
                   <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-2xl bg-white p-2 rounded-[32px] modern-shadow border border-orange-100 flex flex-col md:flex-row gap-2"
                   >
                      <div className="flex-1 flex items-center gap-4 px-6 py-4">
                         <Search size={22} className="text-primary" />
                         <input 
                            type="text" 
                            placeholder="What do you need help with?" 
                            className="bg-transparent border-none outline-none w-full font-bold text-ink placeholder:text-ink/30 italic text-lg"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                         />
                      </div>
                      <button className="bg-primary text-white btn-pill !py-4 md:!px-12 text-lg font-black uppercase flex items-center justify-center gap-3 active:bg-ink">
                         Search
                         <ArrowUpRight size={20} />
                      </button>
                   </motion.div>

                   <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-orange-200/50 w-full">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <ShieldCheck size={20} />
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-ink/40">Verified Partners</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Phone size={20} />
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-ink/40">24/7 Support</span>
                      </div>
                   </div>
                </div>

                <div className="relative order-first lg:order-last">
                   <div className="relative aspect-square flex items-center justify-center">
                      {/* Floating Accent Shapes */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-[60px] -ml-24 -mb-24"></div>
                      
                      {/* Hero Image Container */}
                      <div className="relative z-10 w-[90%] aspect-[4/5] rounded-[80px] overflow-hidden border-8 border-white modern-shadow">
                        <img 
                          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                          alt="Professional Handyman at Work" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Floating Trust Card */}
                      <div className="absolute bottom-12 -right-12 z-20 bg-ink text-white p-10 rounded-[48px] shadow-2xl skew-x-[-4deg]">
                         <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                               <Sparkles size={24} />
                            </div>
                            <div className="text-3xl font-black italic tracking-tighter">4.9/5</div>
                         </div>
                         <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] leading-none">Customer Rating</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Featured Services Grid */}
        <section id="services" className="py-40 px-8 bg-paper">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
                 <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-12 h-[2px] bg-primary"></div>
                      <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.4em]">Our Offerings</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-none uppercase italic text-ink">
                      Popular <span className="text-primary">Services.</span>
                    </h2>
                 </div>
                 <p className="max-w-md text-ink/40 font-medium text-lg leading-relaxed">
                   Reliable solutions for your home maintenance needs. Book experienced professionals in just a few taps.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {SERVICES.map((service) => (
                   <div key={service.id} className="group flex flex-col bg-surface rounded-[60px] overflow-hidden border border-transparent hover:border-orange-200 transition-all duration-500 hover:shadow-2xl">
                      <div className="relative aspect-[16/10] overflow-hidden">
                         <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                         <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm">
                            {service.icon}
                         </div>
                      </div>
                      <div className="p-10 flex flex-col flex-1">
                         <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl font-black tracking-tight text-ink uppercase italic">{service.title}</h3>
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full">{service.price}</span>
                         </div>
                         <p className="text-ink/40 font-medium leading-relaxed mb-10 flex-1">
                           {service.description}
                         </p>
                         <button className="w-full flex items-center justify-between p-6 bg-white rounded-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-orange-100 group-hover:border-transparent">
                            <span className="text-sm font-black uppercase tracking-widest italic">Book Consultation</span>
                            <ChevronRight size={20} />
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-40 px-8 bg-ink text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-32">
                 <span className="text-primary font-bold text-sm uppercase tracking-[0.4em] mb-8 block font-mono">Simple Steps</span>
                 <h2 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-none italic">As Easy As <br /> <span className="text-primary">1-2-3.</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 overflow-hidden rounded-[80px]">
                 {[
                   { id: '01', title: 'Choose Service', desc: 'Select from over 50+ categories curated just for your household needs.', icon: <Search size={40} /> },
                   { id: '02', title: 'Pick Slot', desc: 'Choose a date and time that fits your busy schedule. We work around you.', icon: <Calendar size={40} /> },
                   { id: '03', title: 'Expert Arrives', desc: 'Our verified professional arrives at your doorstep and fixes it all.', icon: <CheckCircle2 size={40} /> }
                 ].map((step) => (
                   <div key={step.id} className="p-20 bg-ink flex flex-col items-center text-center group">
                      <div className="text-[120px] font-black text-white/5 absolute -top-4 -left-4 pointer-events-none group-hover:text-primary/10 transition-colors">{step.id}</div>
                      <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                         {step.icon}
                      </div>
                      <h4 className="text-3xl font-black uppercase italic tracking-tight mb-6">{step.title}</h4>
                      <p className="text-white/40 font-medium leading-relaxed max-w-xs">{step.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Professionals Section */}
        <section id="professionals" className="py-40 px-8 bg-paper">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div>
                    <div className="flex items-center gap-2 mb-8">
                      <div className="w-12 h-[2px] bg-primary"></div>
                      <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.4em]">The Backbone</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-ink uppercase tracking-tighter leading-[0.9] italic mb-12">
                      Trusted <br /> <span className="text-primary">Experts.</span>
                    </h2>
                    <p className="text-xl text-ink/60 font-medium leading-relaxed mb-16 max-w-xl">
                      Our professionals are pre-vetted, background-checked, and highly rated. We only partner with the best in the industry.
                    </p>
                    
                    <div className="space-y-6">
                       {[
                         { title: 'Background Checked', icon: <ShieldCheck size={20} /> },
                         { title: 'Training & Certification', icon: <Award size={20} /> },
                         { title: 'Quality Guarantee', icon: <CheckCircle2 size={20} /> }
                       ].map((item, idx) => (
                         <div key={idx} className="flex items-center gap-6 p-6 bg-surface rounded-[32px] border border-orange-100 hover:border-primary/30 transition-all cursor-default group">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                               {item.icon}
                            </div>
                            <span className="text-lg font-black uppercase italic text-ink">{item.title}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-6 relative">
                    <div className="flex flex-col gap-6 pt-12">
                       {PROFESSIONALS.slice(0, 2).map((pro, i) => (
                         <div key={i} className="bg-white p-6 rounded-[48px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-[32px] overflow-hidden mb-6">
                               <img src={pro.image} alt={pro.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <h4 className="text-xl font-black text-ink uppercase italic leading-none mb-1">{pro.name}</h4>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">{pro.role}</p>
                            <div className="flex items-center gap-2 text-yellow-500">
                               <Star size={14} fill="currentColor" />
                               <span className="text-[10px] font-black text-ink">{pro.rating}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="flex flex-col gap-6">
                       {PROFESSIONALS.slice(1, 4).map((pro, i) => (
                         <div key={i} className="bg-white p-6 rounded-[48px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-[32px] overflow-hidden mb-6">
                               <img src={pro.image} alt={pro.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <h4 className="text-xl font-black text-ink uppercase italic leading-none mb-1">{pro.name}</h4>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">{pro.role}</p>
                            <div className="flex items-center gap-2 text-yellow-500">
                               <Star size={14} fill="currentColor" />
                               <span className="text-[10px] font-black text-ink">{pro.rating}</span>
                            </div>
                         </div>
                       ))}
                       <div className="bg-primary p-6 rounded-[48px] shadow-xl text-white flex flex-col items-center justify-center text-center">
                          <div className="text-4xl font-black italic tracking-tighter">500+</div>
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Verified Pros</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Testimonials Marquee Section */}
        <section className="py-24 bg-surface overflow-hidden border-y border-orange-100">
           <div className="flex items-center animate-review-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 px-12">
                   {[
                     { name: 'Alice', quote: 'Cleaning done perfectly! Localjugaad is a lifesaver.' },
                     { name: 'Robert', quote: 'Best plumbing service I have ever used. On time and professional.' },
                     { name: 'Nisha', quote: 'The painter transformed my living room. Excellent work!' },
                     { name: 'Mike', quote: 'Eco-friendly pest control worked wonders. No more bugs!' }
                   ].map((item, idx) => (
                     <div key={idx} className="bg-white px-10 py-6 rounded-full shadow-sm border border-orange-100 flex items-center gap-6">
                        <div className="flex gap-1 text-yellow-400">
                           <Star size={14} fill="currentColor" />
                        </div>
                        <p className="text-ink font-medium italic">"{item.quote}" — <span className="font-black text-primary uppercase text-xs tracking-widest">{item.name}</span></p>
                     </div>
                   ))}
                </div>
              ))}
           </div>
        </section>

        {/* CTA Banner */}
        <section className="py-40 px-8 bg-paper overflow-hidden">
           <div className="max-w-7xl mx-auto relative rounded-[80px] bg-primary p-16 lg:p-32 text-center text-white shadow-2xl shadow-primary/30">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -mr-40 -mt-40"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[60px] -ml-24 -mb-24"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.85] italic mb-12">Let Us Handle <br /> The <span className="text-black">Jugaad.</span></h2>
                 <p className="text-xl text-white/80 font-medium mb-16 max-w-2xl leading-relaxed">Focus on what matters. We take care of your home chores with expert precision and professional care.</p>
                 <div className="flex flex-col md:flex-row gap-6 w-full max-w-lg justify-center">
                    <button className="bg-white text-primary btn-pill !px-12 !py-6 text-xl font-black uppercase italic hover:scale-105 transition-all w-full md:w-auto">Book Now</button>
                    <button className="bg-ink text-white btn-pill !px-12 !py-6 text-xl font-black uppercase italic hover:bg-white/10 transition-all border border-white/10 w-full md:w-auto">Contact Us</button>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-24 px-8 bg-surface border-t border-orange-100">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
                 <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                         <Home size={28} strokeWidth={2.5} />
                       </div>
                       <div className="text-3xl font-black tracking-tight leading-none uppercase italic">LOCAL<span className="text-primary">JUGAAD</span></div>
                    </div>
                    <p className="text-lg text-ink/40 max-w-md font-medium leading-relaxed italic mb-10">Premium on-demand home service platform connecting you with expert professionals. We fix, clean, and maintain your home so you don't have to.</p>
                    <div className="flex items-center gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                          <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl hover:bg-primary hover:text-white transition-all border border-orange-100 text-ink/20">
                            <Icon size={18} />
                          </a>
                        ))}
                    </div>
                 </div>

                 <div className="flex flex-col gap-8 text-center lg:text-left">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Navigation</h5>
                    <div className="flex flex-col gap-4">
                       {NAV_LINKS.map(link => <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-bold text-ink/60 hover:text-primary transition-colors italic">{link}</a>)}
                    </div>
                 </div>

                 <div className="flex flex-col gap-8 text-center lg:text-left">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Talk to us</h5>
                    <div className="flex flex-col gap-4">
                       <a href="tel:+1234567890" className="text-xl font-black text-ink italic hover:text-primary transition-colors underline decoration-primary/20 underline-offset-8">+1 (800) LOCAL-JG</a>
                       <p className="text-sm font-bold text-ink/40 tracking-tight leading-relaxed italic">101 Service Lane, Suite 202 <br /> Metro City Central</p>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-orange-100 pt-12">
                 <p className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em] italic">© 2026 LOCALJUGAAD SERVICES PVT LTD. ALL RIGHTS RESERVED.</p>
                 <div className="flex items-center gap-6">
                    <a href="#" className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Terms</a>
                    <p className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em]">
                       Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">OZOSOFT</a>
                    </p>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-review-marquee {
          display: inline-flex;
          animation: marquee 50s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #FFF7ED;
        }
        ::-webkit-scrollbar-thumb {
          background: #FFD2A8;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #FF6B00;
        }
      `}} />
    </div>
  );
}
