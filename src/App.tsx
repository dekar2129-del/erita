import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Ship, 
  Truck, 
  Package, 
  ShieldCheck, 
  BarChart3, 
  ArrowUpRight, 
  ChevronRight, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Menu, 
  X, 
  ArrowRight,
  MapPin,
  ExternalLink,
  Search,
  CheckCircle2,
  Anchor,
  Box,
  FastForward,
  LifeBuoy
} from 'lucide-react';

const NAV_LINKS = ['Home', 'About Us', 'Services', 'Global Reach', 'Contact'];

const SERVICES = [
  {
    id: '01',
    title: 'Global Sourcing',
    icon: <Globe className="text-primary" />,
    description: 'Direct procurement from verified global manufacturers ensuring quality and competitive edge.',
    image: 'https://images.unsplash.com/photo-1578575425248-982422998871?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '02',
    title: 'Freight Forwarding',
    icon: <Ship className="text-primary" />,
    description: 'Comprehensive sea, air, and land logistics solutions tailored to your timeline and budget.',
    image: 'https://images.unsplash.com/photo-1494412574743-01958273293d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '03',
    title: 'Customs Clearance',
    icon: <ShieldCheck className="text-primary" />,
    description: 'Expert navigating of complex international trade regulations and documentation.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '04',
    title: 'Supply Chain Optimization',
    icon: <BarChart3 className="text-primary" />,
    description: 'Data-driven strategies to streamline your inventory and reduce operational overhead.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  }
];

const METRICS = [
  { val: '45+', label: 'Countries Reached' },
  { val: '2.5M', label: 'Tons Exported Yearly' },
  { val: '1.2k', label: 'Verified Suppliers' },
  { val: '100%', label: 'Compliance Rate' }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg">
              <Anchor size={22} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-ink uppercase tracking-tight">HABIBAR</span>
              <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase">Rahman Group</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-[12px] font-bold text-ink/60 hover:text-primary transition-all uppercase tracking-[0.2em]"
                onClick={() => link === 'Home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
             <button className="text-[12px] font-bold text-ink/40 hover:text-primary transition-colors uppercase tracking-[0.2em]">
                Track Order
             </button>
             <button className="bg-primary text-white px-8 py-3 rounded-md text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-none transition-all">
               Global Inquiry
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <div className="flex items-center gap-3">
                  <Anchor size={28} className="text-primary" />
                  <span className="text-2xl font-black text-ink uppercase tracking-tighter">HABIBAR RAHMAN</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-ink">
                 <X size={28} />
               </button>
            </div>
            <nav className="flex flex-col gap-8 flex-1">
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
              <div className="w-full h-[1px] bg-gray-100 my-4"></div>
              <button className="bg-primary text-white w-full py-5 text-lg font-black uppercase shadow-lg shadow-primary/20">
                Contact Sales
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Responsive Hero Section */}
        <section id="home" className="relative min-h-[90vh] flex items-stretch overflow-hidden bg-ink">
          {/* Mobile Background Image (Visible only on mobile) */}
          <div className="absolute inset-0 z-0 lg:hidden text-white">
            <img 
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1200" 
              alt="Global trade background" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"></div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-20 relative z-10">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/20 border border-primary/30 w-fit px-4 py-1.5 rounded-full mb-10"
             >
               <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Connecting Continents since 1994</span>
             </motion.div>
             
             <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black leading-[0.9] mb-10 tracking-tighter text-white uppercase"
             >
               TRANSFORMING <br /> GLOBAL <span className="text-primary decoration-primary/20 underline underline-offset-8">TRADE.</span>
             </motion.h1>
             
             <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/50 font-medium max-w-xl mb-12 leading-relaxed"
             >
               We bridge the gap between resource-rich regions and global demand with innovative supply chain solutions and unwavering commitment to quality.
             </motion.p>

             <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 mb-20"
             >
                <button className="bg-primary text-white px-10 py-5 rounded-md text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 group">
                   Get a Shipping Quote
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 text-white backdrop-blur-md px-10 py-5 rounded-md text-sm font-black uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                   Our Global Network
                   <Globe size={18} className="opacity-50" />
                </button>
             </motion.div>

             <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-12">
               {METRICS.map((m, i) => (
                 <div key={i}>
                    <div className="text-2xl font-black text-white mb-1 tracking-tighter italic">{m.val}</div>
                    <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest leading-none">{m.label}</div>
                 </div>
               ))}
             </div>
          </div>

          <div className="hidden lg:block w-1/2 relative overflow-hidden bg-ink">
             <img 
               src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1920" 
               alt="Vast industrial port logistics" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-ink/10"></div>
             {/* Decorative element over the image */}
             <div className="absolute bottom-20 left-20 bg-white p-8 rounded-2xl shadow-2xl max-w-xs border border-gray-100 flex items-center gap-6 animate-pulse-subtle">
                <Box size={40} className="text-primary flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-black text-ink/30 uppercase tracking-widest mb-1">Live Shipment Track</div>
                  <div className="text-lg font-black text-ink uppercase tracking-tight leading-none italic">SGS-4092 <span className="text-primary tracking-normal not-italic lowercase text-xs ml-2">In Transit</span></div>
                </div>
             </div>
          </div>
        </section>

        {/* Services / Solutions Section */}
        <section id="services" className="py-40 px-8 bg-paper relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
           
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
                 <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-[2px] bg-primary"></div>
                       <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.4em]">Core Capabilities</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-ink uppercase tracking-tighter leading-none italic mb-8">
                      Trade  <br /> <span className="text-primary italic">Mechanics.</span>
                    </h2>
                    <p className="text-xl text-ink/40 font-medium leading-relaxed italic">
                      Seamless integration of sourcing, logistics, and supply chain management for the modern global economy.
                    </p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {SERVICES.map((s, idx) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl p-10 flex flex-col border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden"
                   >
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                         {s.icon}
                      </div>
                      <h3 className="text-2xl font-black text-ink uppercase tracking-tight italic mb-4 leading-none">{s.title}</h3>
                      <p className="text-ink/40 font-medium leading-relaxed text-sm mb-12 flex-1">
                        {s.description}
                      </p>
                      <img 
                        src={s.image} 
                        alt={s.title} 
                        className="w-full aspect-video object-cover rounded-xl mt-auto opacity-80 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                         <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                            <ArrowUpRight size={20} />
                         </div>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Global Strategy Section */}
        <section id="global-reach" className="py-40 px-8 bg-ink text-white relative">
           <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1454165833767-02754a7c1b21?auto=format&fit=crop&q=80&w=1920" 
                alt="World map abstract" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
           </div>

           <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div>
                    <div className="flex items-center gap-3 mb-8">
                       <div className="w-10 h-[2px] bg-primary"></div>
                       <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.4em]">Strategic Reach</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] italic mb-10">
                      Borderless <br /> <span className="text-primary italic">Ambition.</span>
                    </h2>
                    <p className="text-xl text-white/40 font-medium leading-relaxed mb-20 max-w-lg">
                      Headquartered at the crossroads of international trade, Habibar Rahman Group operates a network that spans primary manufacturing hubs to terminal retail nodes.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                       {[
                         { title: 'Terminal Expertise', icon: <Anchor />, desc: 'Deep-rooted relationships with tier-1 port authorities globally.' },
                         { title: 'Agile Operations', icon: <FastForward />, desc: 'Real-time logistical adjustments to bypass regional supply shocks.' },
                       ].map((f, i) => (
                         <div key={i} className="flex gap-6 group">
                            <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                               {f.icon}
                            </div>
                            <div>
                               <h4 className="text-lg font-black uppercase italic mb-2">{f.title}</h4>
                               <p className="text-xs text-white/30 leading-relaxed font-medium">{f.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="relative">
                    <div className="aspect-[4/5] bg-white/5 rounded-[40px] border border-white/10 p-12 flex flex-col justify-end group hover:border-primary/30 transition-all overflow-hidden relative">
                       {/* Abstract Map Nodes */}
                       <div className="absolute inset-0 pointer-events-none p-12 opacity-30">
                          <div className="relative w-full h-full">
                             {[
                               { t: 20, l: 30 }, { t: 50, l: 80 }, { t: 80, l: 20 }, { t: 30, l: 60 }, { t: 70, l: 65 }
                             ].map((p, idx) => (
                               <div key={idx} className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]" style={{ top: `${p.t}%`, left: `${p.l}%` }}>
                                  <div className="absolute inset-0 animate-ping bg-primary rounded-full"></div>
                               </div>
                             ))}
                             <svg className="absolute inset-0 w-full h-full stroke-primary/30 stroke-[0.5] fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M30 20 L80 50 L65 70 L20 80 L60 30 Z" />
                             </svg>
                          </div>
                       </div>
                    
                       <div className="relative z-10">
                          <h3 className="text-4xl font-black uppercase tracking-tight italic mb-8">Ready for the Next <br /> Phase?</h3>
                          <p className="text-white/30 font-medium mb-10 text-sm">Our global team is ready to analyze your supply chain and proposal regional optimizations.</p>
                          <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-8 transition-all">
                             View Operational Map
                             <ExternalLink size={16} />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA Banner Section */}
        <section id="contact" className="py-40 px-8 bg-paper">
           <div className="max-w-7xl mx-auto rounded-[60px] bg-primary p-16 lg:p-32 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 z-0 pointer-events-none">
                 <div className="grid grid-cols-12 grid-rows-12 gap-px w-full h-full">
                    {Array.from({ length: 144 }).map((_, i) => <div key={i} className="border border-white"></div>)}
                 </div>
              </div>

              <div className="relative z-10 flex flex-col items-center text-white">
                 <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tight leading-[0.85] italic mb-10">Let's Solidify <br /> Your <span className="text-ink decoration-white decoration-8 underline underline-offset-[20px]">Supply.</span></h2>
                 <p className="text-xl text-white/70 font-medium mb-16 max-w-2xl leading-relaxed">Habibar Rahman Group provides the stability and scale required for ambitious international growth.</p>
                 <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center">
                    <button className="bg-ink text-white px-12 py-6 rounded-xl text-xl font-black uppercase italic hover:scale-105 transition-all w-full sm:w-auto shadow-2xl">Partner with Us</button>
                    <button className="bg-white/10 text-white px-12 py-6 rounded-xl text-xl font-black uppercase italic hover:bg-white/20 transition-all border border-white/20 w-full sm:w-auto backdrop-blur-md">Sales Inquiry</button>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-8 bg-surface border-t border-gray-100">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
                 <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                         <Anchor size={28} strokeWidth={2.5} />
                       </div>
                       <div className="flex flex-col leading-none">
                         <span className="text-2xl font-black text-ink uppercase tracking-tight italic">HABIBAR</span>
                         <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase">Rahman Group</span>
                       </div>
                    </div>
                    <p className="text-lg text-ink/40 max-w-md font-medium leading-relaxed italic mb-12">The authoritative partner for sustainable global trade and logistics since 1994. Engineering the supply chains of the future.</p>
                    <div className="flex items-center gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                          <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl hover:bg-primary hover:text-white transition-all text-ink/20 border border-gray-100 shadow-sm">
                            <Icon size={18} />
                          </a>
                        ))}
                    </div>
                 </div>

                 <div className="flex flex-col gap-10">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Operations</h5>
                    <div className="flex flex-col gap-4">
                       {['Market Analysis', 'Fleet Logistics', 'Customs Entry', 'Risk Mitigation'].map(link => <a key={link} href="#" className="text-sm font-bold text-ink/40 hover:text-primary transition-colors italic uppercase tracking-widest">{link}</a>)}
                    </div>
                 </div>

                 <div className="flex flex-col gap-10">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Connect</h5>
                    <div className="flex flex-col gap-4">
                       <a href="mailto:trade@habibar.com" className="text-xl font-black text-ink italic hover:text-primary transition-colors underline decoration-primary/20 underline-offset-8">trade@habibar.com</a>
                       <p className="text-sm font-bold text-ink/40 tracking-tight leading-relaxed uppercase italic">Global HQ, Suite 900 <br /> Maritime Plaza, Singapore</p>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-gray-100 pt-12">
                 <p className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em] italic">© 2026 HABIBAR RAHMAN GROUP. MEMBER OF THE GLOBAL TRADE FEDERATION.</p>
                 <div className="flex items-center gap-10 text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em]">
                    <a href="#" className="hover:text-primary transition-colors">Trade Terms</a>
                    <a href="#" className="hover:text-primary transition-colors">Compliance</a>
                    <p>Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">OZOSOFT</a></p>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
          50% { transform: scale(1.02); box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 6s ease-in-out infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #F8FAFC;
        }
        ::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2563EB;
        }
      `}} />
    </div>
  );
}
