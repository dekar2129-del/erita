/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  CirclePlay,
  Menu,
  X
} from 'lucide-react';

const NAV_LINKS = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

const SERVICES = [
  { id: '01', title: 'UI/UX Design', expanded: false },
  { 
    id: '02', 
    title: 'Application Design', 
    expanded: true,
    tags: ['E-Commerce App', 'Mobile App Design', 'Responsive Web App', 'Corporate Web Design'],
    description: 'We craft immersive digital experiences that mirror the vision of modern brands. Our approach blends timeless design with modern technology.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800'
  },
  { id: '03', title: 'Website Design', expanded: false },
  { id: '04', title: 'UI Design', expanded: false },
  { id: '05', title: 'Design System', expanded: false },
];

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('02');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 glass h-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <span className="font-black text-xl">P</span>
            </div>
            <div className="text-2xl font-black text-ink">Plusslicemeat.</div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-[14px] font-bold text-ink/60 hover:text-primary transition-all"
                onClick={() => link === 'Home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-ink text-white btn-pill !px-8 !py-3 text-[14px] hover:bg-primary transition-all modern-shadow">
            Consultation
          </button>

          <button 
            className="md:hidden p-2 text-gray-600"
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
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                    <span className="font-black text-sm">P</span>
                  </div>
                  <span className="text-xl font-black text-ink">Plusslicemeat.</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-ink">
                 <X size={28} />
               </button>
            </div>
            <nav className="flex flex-col gap-8 items-center flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-4xl font-black text-ink hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="mt-12 btn-pill bg-primary text-white !px-12 !py-4 text-lg modern-shadow">
                Start a Project
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative pt-40 pb-20 px-8">
          <div className="max-w-7xl mx-auto relative">
            <div className="flex flex-col items-center text-center">
              {/* Monospace Greeting */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="font-mono text-sm font-bold text-ink/60 uppercase tracking-widest">Hello There!</span>
              </div>
              
              <h1 className="text-6xl md:text-[100px] font-black leading-tight mb-8">
                We're <span className="text-primary tracking-tighter">Plusslicemeat</span>
              </h1>
              
              <p className="text-xl text-ink/60 font-medium max-w-2xl mb-12">
                Premier UI/UX Design & Development Studio based in India, engineering high-fidelity digital products.
              </p>

              <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
                {/* Orange Background Circle */}
                <div className="absolute w-[80%] aspect-square bg-primary rounded-full opacity-100"></div>
                
                {/* Hero Image */}
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" 
                  alt="Portfolio Star" 
                  className="relative h-[110%] object-cover -mb-20 z-10"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Tags - Top Right */}
                <div className="absolute top-[20%] right-0 z-20 flex flex-col items-end gap-3 scale-75 md:scale-100">
                  <div className="bg-ink text-white px-6 py-2 rounded-full font-bold text-sm">Responsive</div>
                  <div className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm">Dashboard</div>
                  <div className="bg-ink text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                    <Star size={14} className="fill-white" />
                    Mobile App Design
                  </div>
                </div>

                {/* Floating Tags - Top Left */}
                <div className="absolute top-[30%] left-0 z-20 flex flex-col items-start gap-4 scale-75 md:scale-100">
                   <div className="flex items-center gap-2 bg-white modern-shadow p-2 rounded-xl">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg"></div>
                      <div className="pr-4">
                        <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Rating</div>
                        <div className="font-bold text-ink">4.9 of 5</div>
                      </div>
                   </div>
                   <div className="text-ink font-bold leading-tight bg-white p-4 rounded-xl modern-shadow border border-slate-50">
                    "Exceptional Design <br /> Highly Recommended"
                   </div>
                </div>

                {/* Main Hero Buttons */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
                  <button className="bg-ink text-white btn-pill flex items-center gap-3">
                    Portfolio
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                       <ArrowUpRight size={14} />
                    </div>
                  </button>
                  <button className="bg-white text-ink btn-pill border border-slate-200">
                    Hire Us
                  </button>
                </div>
              </div>

              {/* Spinning Badge */}
              <div className="absolute top-0 right-0 w-32 h-32 md:w-44 md:h-44">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <path id="badgePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                  <text className="text-[8px] font-black uppercase tracking-[0.2em] fill-ink">
                    <textPath xlinkHref="#badgePath">PLUSSLICEMEAT STUDIO • HIGH END DESIGN • </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center text-white modern-shadow">
                    <Star size={24} fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Strip */}
        <section className="bg-ink py-6 overflow-hidden">
          <div className="flex items-center animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 text-white font-bold text-xl md:text-3xl uppercase tracking-tighter px-6">
                {['Website Design', 'Dashboard', 'Wireframe', 'User Research'].map((item) => (
                  <div key={item} className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <Star size={20} className="text-primary fill-primary rotate-45" />
                      <Star size={20} className="text-primary fill-primary -rotate-45" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40 px-8 bg-paper relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-[40px] modern-shadow relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                    alt="Plusslicemeat Studio" 
                    className="w-full h-full object-cover transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                {/* Floating Meta */}
                <div className="absolute top-12 -right-12 p-10 bg-white modern-shadow rounded-3xl border border-slate-100 hidden md:block">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Our Creed</span>
                  <p className="text-2xl font-black text-ink">Design that <br />Drives Result.</p>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-[2px] bg-primary"></div>
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">About Plusslicemeat</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black leading-tight mb-12">
                  Engineering <br /> <span className="text-primary italic">Innovation</span>
                </h2>
                <div className="space-y-8 text-ink/60 text-lg font-medium leading-relaxed">
                  <p>
                    Plusslicemeat is a premier technology and design studio dedicated to transforming complex challenges into seamless digital products.
                  </p>
                  <p>
                    We partner with global brands to engineer high-fidelity experiences that combine technical excellence with human-centric design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Process */}
        <section className="py-40 px-8 bg-surface relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-8">
                   <div className="w-8 h-[2px] bg-primary"></div>
                   <span className="text-primary font-bold text-sm uppercase tracking-widest text-ink">The Build Method</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black leading-tight mb-10">
                  Our Strategic <br /> <span className="text-primary italic">Process</span>
                </h2>
                <p className="text-ink/60 text-lg font-medium leading-relaxed max-w-sm">
                   We follow a meticulous path to ensure every digital product is engineered for high performance and visual impact.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: 'Bespoke Audit', desc: 'A deep exploration into your product logic and market position to define a unique trajectory.' },
                  { title: 'Refined Design', desc: 'Crafting visual languages that communicate efficiency, utilizing modern typography and spatial harmony.' },
                  { title: 'Agile Build', desc: 'Developing with a focus on seamless interactions and pixel-perfect fidelity across platforms.' },
                  { title: 'Launch & Scale', desc: 'Strategic deployment followed by iterative refinement to ensure long-term market dominance.' }
                ].map((step, i) => (
                  <div key={step.title} className="group p-10 bg-white rounded-[40px] border border-slate-100 hover:border-primary/20 transition-all duration-500 modern-shadow">
                    <span className="inline-block text-[14px] font-black text-primary mb-8 px-4 py-1 bg-primary/10 rounded-full tracking-widest">PHASE 0{i+1}</span>
                    <h3 className="text-3xl font-black text-ink mb-6">{step.title}</h3>
                    <p className="text-ink/40 text-[16px] leading-[1.8] font-medium">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight Section */}
        <section className="py-40 px-8 bg-surface" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
               <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-[2px] bg-primary"></div>
                    <span className="font-mono text-sm font-bold text-ink/60 uppercase tracking-widest">My Specialization</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black">
                    Services <span className="text-primary italic">I Provide</span>
                  </h2>
               </div>
               <p className="max-w-md text-ink/40 font-medium text-sm leading-relaxed">
                  Elevating your digital existence with precise UI/UX engineering and innovative design strategies.
               </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-6">
               {SERVICES.map((service) => (
                 <div key={service.id} className="group">
                   <div 
                     className={`p-8 md:p-12 flex items-center justify-between cursor-pointer transition-all rounded-[40px] ${activeAccordion === service.id ? 'bg-ink text-white modern-shadow' : 'bg-white hover:bg-slate-50 border border-slate-100'}`}
                     onClick={() => setActiveAccordion(activeAccordion === service.id ? null : service.id)}
                   >
                     <div className="flex items-center gap-8">
                        <span className={`text-xl font-black ${activeAccordion === service.id ? 'text-primary' : 'text-slate-200'}`}>
                          {service.id}.
                        </span>
                        <h3 className="text-2xl md:text-4xl font-black">
                          {service.title}
                        </h3>
                     </div>
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeAccordion === service.id ? 'bg-primary text-white' : 'text-ink group-hover:text-primary transition-colors'}`}>
                        <ArrowUpRight size={24} />
                     </div>
                   </div>

                   <AnimatePresence>
                     {activeAccordion === service.id && (
                       <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-ink -mt-10 pt-10 rounded-b-[40px] px-8 md:px-12 pb-16"
                       >
                          <div className="flex flex-col lg:flex-row gap-16 items-center">
                             <div className="flex-1">
                                <div className="flex flex-wrap gap-4 mb-10">
                                   {service.tags?.map(tag => (
                                     <span key={tag} className="text-[12px] font-bold uppercase tracking-widest bg-white/10 text-white/80 px-6 py-2 rounded-full border border-white/5">
                                       {tag}
                                     </span>
                                   ))}
                                </div>
                                <p className="text-white/60 text-lg leading-relaxed font-medium mb-10">
                                   {service.description}
                                </p>
                                {service.image && (
                                  <div className="relative overflow-hidden rounded-3xl luxury-shadow group/img">
                                    <img 
                                      src={service.image} 
                                      alt={service.title} 
                                      className="w-full aspect-video object-cover"
                                      referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                                  </div>
                                )}
                             </div>
                          </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
            </div>

            <div className="mt-20 flex justify-center">
               <button className="bg-primary text-white btn-pill flex items-center gap-3">
                  Let's Talk
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                     <ChevronRight size={18} />
                  </div>
               </button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-40 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-xl">
                 <div className="flex items-center gap-2 mb-8">
                   <div className="w-8 h-[2px] bg-primary"></div>
                   <span className="text-primary font-bold text-sm uppercase tracking-widest">Recent Case Studies</span>
                 </div>
                 <h2 className="text-6xl md:text-8xl font-black">
                    Our <span className="text-primary italic">Portfolio</span>
                 </h2>
              </div>
              <div className="flex gap-4">
                 {['All', 'Mobile', 'Web', 'Branding'].map(cat => (
                   <button key={cat} className={`btn-pill !px-6 !py-2 text-[12px] uppercase transition-all ${cat === 'All' ? 'bg-primary text-white' : 'bg-slate-50 text-ink/60 hover:bg-slate-100'}`}>
                      {cat}
                   </button>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {[
                 { title: 'Auralis Timepieces', cat: 'E-Commerce App', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
                 { title: 'Lumiere Maison', cat: 'Landing Page', img: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800' },
                 { title: 'Nordic Essence', cat: 'UX Audit', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' }
               ].map((work, i) => (
                 <div key={work.title} className="group relative overflow-hidden rounded-[40px] modern-shadow cursor-pointer aspect-[4/5] bg-slate-100">
                    <img 
                      src={work.img} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-6 bottom-6 bg-white/90 backdrop-blur-md p-8 rounded-[30px] translate-y-2 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100 border border-white/50">
                       <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">{work.cat}</span>
                       <h3 className="text-2xl font-black text-ink mb-4">{work.title}</h3>
                       <div className="flex items-center gap-2 text-ink font-bold text-sm">
                          Explore Case Study <ChevronRight size={16} className="text-primary" />
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-40 px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-6 block">Common Queries</span>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Artisan <span className="text-primary italic">Intelligence</span></h2>
              <p className="text-ink/60 text-xl font-medium">Clear answers for your digital transformation journey.</p>
            </div>

            <div className="flex flex-col gap-8">
               {[
                 { q: 'What is the Plusslicemeat design philosophy?', a: 'We believe in data-driven aesthetics where every element serves a functional purpose while maintaining high visual appeal.' },
                 { q: 'How long does a digital product take to build?', a: 'A typical high-fidelity product is birthed over 8 to 12 weeks of meticulous engineering and refinement.' },
                 { q: 'Do you offer ongoing technology support?', a: 'Yes, we provide long-term partnership models for continuous evolution and cloud-native optimizations.' },
                 { q: 'Can you modernize an established enterprise?', a: 'Specializing in legacy transformation, we bridge the gap between heritage operations and modern digital excellence.' }
               ].map((faq, i) => (
                 <div key={i} className="bg-white p-10 md:p-12 rounded-[40px] border border-slate-100 hover:border-primary/20 transition-all group modern-shadow">
                    <h4 className="text-2xl font-black text-ink mb-6 group-hover:text-primary transition-colors">{faq.q}</h4>
                    <p className="text-ink/40 text-[16px] leading-[1.8] font-medium">
                       {faq.a}
                    </p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section className="py-60 px-8 bg-white relative overflow-hidden" id="contact">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-12 px-10 py-3 bg-primary/5 rounded-full">New Dialogue</span>
            <h2 className="text-[60px] md:text-[140px] font-black leading-tight tracking-tighter mb-20 max-w-6xl">
              Build with <br /> <span className="text-primary italic">Plusslicemeat</span>.
            </h2>
            
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <a 
                 href="mailto:hello@plusslicemeat.com"
                 className="group text-4xl md:text-6xl font-black text-ink hover:text-primary transition-all flex items-center gap-6"
               >
                 hello@plusslicemeat.com
                 <div className="w-16 h-16 border border-slate-100 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ArrowUpRight size={32} />
                 </div>
               </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-8 bg-ink text-white">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
              <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                 <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                      <span className="font-black text-xl">P</span>
                    </div>
                    <div className="text-2xl font-black">Plusslicemeat.</div>
                 </div>
                 <p className="text-sm text-white/40 max-w-xs font-medium">Exceptional UI/UX Design & Development Studio based in India.</p>
                 <div className="flex flex-col gap-1">
                    <p className="text-[12px] text-white/20 font-bold uppercase tracking-widest leading-none">© 2026 PLUSSLICEMEAT CREATIVE. ALL RIGHTS RESERVED.</p>
                    <p className="text-[12px] text-white/20 font-bold uppercase tracking-widest">
                       Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">OZOSOFT</a>
                    </p>
                 </div>
              </div>

              <div className="flex flex-wrap justify-center gap-10">
                {NAV_LINKS.map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold text-white/60 hover:text-primary transition-all uppercase tracking-widest">{link}</a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary transition-all"><Facebook size={18} /></a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary transition-all"><Twitter size={18} /></a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary transition-all"><Instagram size={18} /></a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary transition-all"><Linkedin size={18} /></a>
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
          animation: marquee 30s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}

