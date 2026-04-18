import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  ShieldCheck,
  Menu,
  X,
  Building2,
  Construction,
  Hammer,
  LayoutGrid,
  Phone,
  Scaling,
  Factory,
  CheckCircle2,
  HardHat,
  Ruler,
  Maximize2,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

const NAV_LINKS = ['Home', 'Services', 'Portfolio', 'Process', 'Contact'];

const SERVICES = [
  { 
    id: '01', 
    title: 'Aluminum Facades', 
    icon: <Building2 className="text-primary" />, 
    description: 'Expert design and installation of premium aluminum curtain walls and cladding systems.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '02', 
    title: 'Structural Glazing', 
    icon: <LayoutGrid className="text-primary" />, 
    description: 'Seamless glass solutions that push the boundaries of modern architectural transparency.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '03', 
    title: 'Precision Fabrication', 
    icon: <Factory className="text-primary" />, 
    description: 'In-house manufacturing of custom architectural components with sub-millimeter precision.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5f566f1e?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '04', 
    title: 'Project Management', 
    icon: <Construction className="text-primary" />, 
    description: 'End-to-end site execution from conceptual design to final construction handover.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  }
];

const PORTFOLIO = [
  { 
    title: 'Sky Tower Plaza', 
    category: 'Curtain Wall', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    title: 'Central Tech Hub', 
    category: 'Aluminum Cladding', 
    image: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    title: 'Riverbank Residences', 
    category: 'Structural Glass', 
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600' 
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 glass h-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white shadow-lg">
              <Scaling size={24} strokeWidth={2.5} />
            </div>
            <div className="text-xl font-black text-ink tracking-tighter uppercase">ALUTECH<span className="text-primary tracking-normal font-medium lowercase">facade</span></div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-[12px] font-bold text-ink/70 hover:text-primary transition-all uppercase tracking-widest"
                onClick={() => link === 'Home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
             <button className="bg-primary text-white px-8 py-3 rounded text-[12px] font-bold hover:bg-ink transition-all uppercase tracking-widest shadow-xl shadow-primary/20">
               Request Quote
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
                  <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white">
                    <Scaling size={24} />
                  </div>
                  <span className="text-2xl font-black text-ink uppercase tracking-tighter">ALUTECH</span>
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
        {/* Hero Section */}
        <section id="home" className="relative h-screen min-h-[800px] flex items-center px-8 bg-ink overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=90&w=1920" 
               alt="Modern building facade" 
               className="w-full h-full object-cover opacity-40 scale-105"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
             <div className="max-w-3xl flex flex-col items-start">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary px-4 py-1 rounded-sm mb-8"
                >
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Architectural Fabrication Excellence</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl font-black leading-none mb-10 tracking-tighter text-white uppercase"
                >
                  ENGINEERING <br /> <span className="text-primary italic">MODERN SKYLINES.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-white/60 font-medium max-w-xl mb-12 leading-relaxed"
                >
                  Alutech delivers structural glass and aluminum facade solutions for landmark developments. Precision engineered, expertly installed.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                   <button className="bg-primary text-white px-10 py-5 rounded text-sm font-bold uppercase tracking-widest shadow-2xl shadow-primary/40 flex items-center gap-3 group">
                      Our Solutions
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                   <button className="bg-white/10 text-white backdrop-blur-md px-10 py-5 rounded text-sm font-bold uppercase tracking-widest border border-white/20 hover:bg-white/20 transition-all">
                      View Portfolio
                   </button>
                </motion.div>

                {/* Industrial Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24 border-t border-white/10 pt-12 w-full">
                   {[
                     { val: '25+', label: 'Years of Expertise' },
                     { val: '450+', label: 'Completed Projects' },
                     { val: '120k', label: 'Sqft Production' },
                     { val: 'ISO', label: 'Safety Certified' }
                   ].map((s, i) => (
                     <div key={i}>
                        <div className="text-2xl font-black text-white mb-1 uppercase tracking-tighter">{s.val}</div>
                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{s.label}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Vertical Decor Line */}
          <div className="absolute right-20 bottom-0 h-64 w-[1px] bg-primary/30 hidden lg:block"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-40 px-8 bg-paper">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32 border-b border-gray-200 pb-16">
                 <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-[2px] bg-primary"></div>
                      <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.4em]">Technical Expertise</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter leading-none italic">
                      Facade <span className="text-primary">Disciplines.</span>
                    </h2>
                 </div>
                 <p className="max-w-md text-ink/50 font-medium text-lg leading-relaxed">
                   Advanced architectural envelopes that balance aesthetics with structural performance and thermal efficiency.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
                 {SERVICES.map((service) => (
                   <div key={service.id} className="group bg-white p-12 lg:p-20 flex flex-col hover:bg-ink transition-all duration-700">
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-16 h-16 rounded border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-primary group-hover:border-transparent transition-all duration-500 text-ink group-hover:text-white">
                            {service.icon}
                         </div>
                         <span className="font-mono text-4xl text-gray-100 font-black group-hover:text-white/5 transition-colors">{service.id}</span>
                      </div>
                      <h3 className="text-3xl font-black tracking-tight text-ink uppercase italic mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                      <p className="text-ink/50 font-medium leading-relaxed mb-12 group-hover:text-white/40 transition-colors">
                        {service.description}
                      </p>
                      <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary group-hover:text-white group-hover:gap-6 transition-all mt-auto underline underline-offset-8 decoration-primary/30">
                         Detailed Technical Specs
                         <ChevronRight size={14} />
                      </button>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Focus & Visual Section */}
        <section className="py-40 px-8 bg-surface overflow-hidden">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="relative">
                    {/* Industrial Image Composition */}
                    <div className="relative aspect-square">
                       <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] opacity-50"></div>
                       <div className="relative z-10 w-4/5 aspect-[3/4] rounded-sm overflow-hidden shadow-2xl translate-x-12">
                          <img 
                            src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80&w=800" 
                            alt="Structural glazing detail" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                       </div>
                       <div className="absolute bottom-0 right-0 w-3/5 aspect-square rounded-sm overflow-hidden border-8 border-surface shadow-2xl -mb-12">
                          <img 
                            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800" 
                            alt="Precision fabrication" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                       </div>
                    </div>
                 </div>

                 <div className="flex flex-col items-start pt-12 lg:pt-0">
                    <div className="flex items-center gap-2 mb-8">
                      <div className="w-8 h-[2px] bg-primary"></div>
                      <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.4em]">Quality Standard</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-ink uppercase tracking-tighter leading-[0.9] italic mb-12">
                      Precision <br /> <span className="text-primary italic">Engineered.</span>
                    </h2>
                    
                    <div className="space-y-10">
                       {[
                         { title: 'In-House Fabrication', icon: <Factory size={24} />, desc: 'Fully equipped 120,000 sqft facility for custom aluminum and glass production.' },
                         { title: 'Safety & Compliance', icon: <HardHat size={24} />, desc: 'Strict adherence to international ISO and safety standards in building construction.' },
                         { title: 'Design Consultation', icon: <Ruler size={24} />, desc: 'Partnering with architects to realize complex facade geometries and technical requirements.' }
                       ].map((item, idx) => (
                         <div key={idx} className="flex gap-8 group">
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white">
                               {item.icon}
                            </div>
                            <div>
                               <h4 className="text-xl font-black uppercase italic text-ink mb-2">{item.title}</h4>
                               <p className="text-sm text-ink/40 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-40 px-8 bg-paper">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-32">
                 <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-8 block font-mono">Our Footprint</span>
                 <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-none italic text-ink">Selected <span className="text-primary italic">Works.</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {PORTFOLIO.map((item, idx) => (
                   <div key={idx} className="group cursor-pointer">
                      <div className="relative aspect-[3/4] overflow-hidden rounded mb-8 bg-gray-200">
                         <img 
                           src={item.image} 
                           alt={item.title} 
                           className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                           referrerPolicy="no-referrer"
                         />
                         <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors"></div>
                         <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <ArrowUpRight size={20} />
                         </div>
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{item.category}</span>
                         <h4 className="text-2xl font-black text-ink uppercase italic tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                      </div>
                   </div>
                 ))}
              </div>
              
              <div className="flex justify-center mt-32">
                 <button className="border-b-2 border-primary pb-2 text-[12px] font-black uppercase tracking-[0.3em] text-ink hover:text-primary transition-all">
                    View Complete Project Index
                 </button>
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-8 bg-ink">
           <div className="max-w-7xl mx-auto relative rounded-sm bg-primary p-16 lg:p-32 overflow-hidden flex flex-col lg:flex-row items-center justify-between text-white gap-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -mr-40 -mt-40"></div>
              
              <div className="relative z-10 text-center lg:text-left">
                 <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic mb-10">Request a <br /> Technical <span className="text-ink">Review.</span></h2>
                 <p className="text-xl text-white/50 font-medium max-w-xl leading-relaxed">Let's discuss how our facade expertise can optimize your building project's structural and aesthetic performance.</p>
              </div>

              <div className="relative z-10 flex flex-col gap-6 w-full lg:w-auto">
                 <button className="bg-ink text-white px-12 py-6 text-xl font-black uppercase italic hover:scale-105 transition-all shadow-2xl">Start Consultation</button>
                 <button className="bg-white/10 text-white px-12 py-6 text-xl font-black uppercase italic hover:bg-white/20 transition-all border border-white/20 backdrop-blur-md">Sales Office: +1 (555) 123-4567</button>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-24 px-8 bg-surface border-t border-gray-100">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
                 <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 bg-primary rounded flex items-center justify-center text-white">
                         <Scaling size={28} strokeWidth={2.5} />
                       </div>
                       <div className="text-3xl font-black tracking-tighter leading-none uppercase text-ink">ALUTECH<span className="text-primary tracking-normal font-medium lowercase">facade</span></div>
                    </div>
                    <p className="text-lg text-ink/40 max-w-md font-medium leading-relaxed italic mb-12">Leading structural glass and aluminum facade specialist. Building the future of urban architecture through precision engineering.</p>
                    <div className="flex items-center gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                          <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded hover:bg-primary hover:text-white transition-all text-ink/30 border border-gray-100">
                            <Icon size={18} />
                          </a>
                        ))}
                    </div>
                 </div>

                 <div className="flex flex-col gap-10">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Operations</h5>
                    <div className="flex flex-col gap-4">
                       {['Aluminum Systems', 'Structural Glass', 'Project Engineering', 'Maintenance'].map(link => <a key={link} href="#" className="text-sm font-bold text-ink/40 hover:text-primary transition-colors italic uppercase tracking-widest">{link}</a>)}
                    </div>
                 </div>

                 <div className="flex flex-col gap-10">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Business</h5>
                    <div className="flex flex-col gap-4">
                       <a href="mailto:hq@alutech.co" className="text-xl font-black text-ink italic hover:text-primary transition-colors underline decoration-primary/20 underline-offset-8">contracts@alutech.com</a>
                       <p className="text-sm font-bold text-ink/40 tracking-tight leading-relaxed uppercase">1200 Fabrication Way <br /> Industrial District, Skyline City</p>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-gray-100 pt-12">
                 <p className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em] italic">© 2026 ALUTECH ARCHITECTURAL SYSTEMS. ISO 9001:2015 CERTIFIED.</p>
                 <div className="flex items-center gap-10">
                    <a href="#" className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Safety Manual</a>
                    <p className="text-[10px] text-ink/20 font-bold uppercase tracking-[0.2em]">
                       Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">OZOSOFT</a>
                    </p>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #F1F5F9;
        }
        ::-webkit-scrollbar-thumb {
          background: #CBD5E1;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2563EB;
        }
      `}} />
    </div>
  );
}
