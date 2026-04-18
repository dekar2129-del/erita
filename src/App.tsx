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
  { id: '01', title: 'Brand Identity', expanded: false },
  { 
    id: '02', 
    title: 'Digital Creation', 
    expanded: true,
    tags: ['E-Commerce', 'Portfolio', 'Custom Apps', 'Digital Strategy'],
    description: 'We craft immersive digital experiences that mirror the elegance of your brand. Our approach blends timeless design with modern technology.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  { id: '03', title: 'Visual Content', expanded: false },
  { id: '04', title: 'Strategic Audit', expanded: false },
  { id: '05', title: 'Content Design', expanded: false },
];

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('02');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-black tracking-widest text-ink italic">ERITA.</div>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60 hover:text-primary transition-all"
                onClick={() => link === 'Home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="hidden md:block px-8 py-3 bg-ink text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary transition-all active:scale-95 luxury-shadow">
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
               <span className="text-xl font-serif font-black italic tracking-widest">ERITA.</span>
               <button onClick={() => setMobileMenuOpen(false)}>
                 <X size={24} />
               </button>
            </div>
            <nav className="flex flex-col gap-6 items-center flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-2xl font-bold hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="mt-10 px-10 py-4 bg-black text-white text-lg font-bold rounded-full">
                Contact Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden pt-32 pb-40">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              {/* Hero Left Content */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center gap-4 mb-10">
                  <div className="accent-line"></div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary">Boutique Creative Studio</span>
                </div>
                
                <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-ink">
                  Curated for <br /> <span className="text-serif-italic text-primary">Elegance</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-ink/60 mb-14 font-medium max-w-lg leading-relaxed">
                  We craft sophisticated digital experiences that mirror the prestige and vision of modern brands.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <button className="btn-refined bg-ink text-white border-ink hover:bg-primary hover:border-primary luxury-shadow">
                    Explore Studio
                  </button>
                  <button className="btn-refined bg-transparent text-ink border-ink/20 hover:border-ink">
                    Start Dialogue
                  </button>
                </div>
              </div>

              {/* Hero Visual Right */}
              <div className="flex-1 relative flex justify-center items-center w-full max-w-xl">
                <div className="relative aspect-[4/5] w-full">
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
                    alt="Erita Studio Aesthetic" 
                    className="relative w-full h-full object-cover rounded-2xl z-10 luxury-shadow"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Refined Card */}
                  <div className="absolute -bottom-10 -left-10 bg-paper p-10 rounded-2xl z-20 luxury-shadow border border-ink/5">
                     <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Current Status</span>
                     <p className="text-2xl font-serif italic text-ink">Available for <br />new mandates.</p>
                  </div>

                  {/* Spinning Badge */}
                  <div className="absolute -top-12 -right-12 z-20 w-44 h-44 bg-paper/90 backdrop-blur-sm rounded-full p-6 luxury-shadow flex items-center justify-center border border-ink/5">
                    <div className="relative w-full h-full">
                       <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                         <path 
                           id="circlePath" 
                           d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" 
                           fill="none"
                         />
                         <text className="text-[9px] font-bold uppercase tracking-[0.2em] fill-ink/40">
                           <textPath xlinkHref="#circlePath">
                              ERITA STUDIO • TIMELESS CREATION • 
                           </textPath>
                         </text>
                       </svg>
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white luxury-shadow hover:scale-110 transition-transform cursor-pointer">
                             <CirclePlay size={24} />
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40 px-8 bg-paper relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl luxury-shadow relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                    alt="Erita Studio Environment" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                {/* Floating Meta */}
                <div className="absolute top-12 -right-12 p-10 bg-paper luxury-shadow rounded-xl border border-ink/5 hidden md:block">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Manifesto</span>
                  <p className="text-2xl font-serif italic text-ink">Bespoke creation <br />for modern legacy.</p>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="accent-line"></div>
                  <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">The Studio</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-ink mb-12">
                  Artisans of the <br /> <span className="text-serif-italic text-primary">Digital Era</span>
                </h2>
                <div className="space-y-8 text-ink/60 text-lg font-medium leading-relaxed">
                  <p>
                    ERITA is a curated creative practice born from a desire to return to the artisan roots of brand and digital creation. 
                    We operate at the intersection of timeless prestige and modern strategic depth.
                  </p>
                  <p>
                    Our studio partners with luxury heritage brands and visionary pioneers to steward their visual narrative across the global landscape. 
                    Every artifact we build is engineered for permanence, not just performance.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-2 gap-12 border-t border-ink/5 pt-12">
                  <div>
                    <span className="text-4xl font-serif italic text-ink block mb-2">99%</span>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Fidelity Rate</span>
                  </div>
                  <div>
                    <span className="text-4xl font-serif italic text-ink block mb-2">2026</span>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">ESTABLISHED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Strip */}
        <section className="bg-ink py-[30px] overflow-hidden whitespace-nowrap">
          <div className="flex items-center justify-around text-[11px] uppercase tracking-[3px] font-bold">
            {['Brand Architecture', 'Couture Design', 'Digital Strategy', 'Visual Identity'].map((item, i) => (
              <div key={item} className="flex items-center gap-[12px] text-paper/40">
                {i > 0 && <div className="w-[4px] h-[4px] bg-primary rounded-full"></div>}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Process */}
        <section className="py-40 px-8 bg-surface/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-4 mb-8">
                   <div className="accent-line"></div>
                   <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">The Erita Method</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-ink mb-10">
                  A Curated <br /> <span className="text-serif-italic text-primary">Process</span>
                </h2>
                <p className="text-ink/60 text-lg font-medium leading-relaxed max-w-sm">
                   We follow a meticulous path to ensure every digital artifact is a masterpiece, balancing strategic intent with artisan execution.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: 'Bespoke Audit', desc: 'A deep exploration into your brand essence and market position to define a unique digital trajectory.' },
                  { title: 'Refined Design', desc: 'Crafting visual languages that communicate prestige, utilizing elite typography and spatial harmony.' },
                  { title: 'Couture Build', desc: 'Developing with a focus on seamless interactions and pixel-perfect fidelity across all platforms.' },
                  { title: 'Elevated Launch', desc: 'Strategic deployment followed by iterative refinement to ensure long-term brand dominance.' }
                ].map((step, i) => (
                  <div key={step.title} className="group p-10 bg-paper rounded-2xl border border-ink/5 hover:border-primary/20 transition-all duration-500 luxury-shadow">
                    <span className="inline-block text-[10px] font-bold text-primary mb-8 px-4 py-1 bg-primary/10 rounded-full tracking-widest uppercase">Phase 0{i+1}</span>
                    <h3 className="text-3xl font-serif font-black text-ink mb-6 italic">{step.title}</h3>
                    <p className="text-ink/50 text-[16px] leading-[1.8] font-medium">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight Section */}
        <section className="py-40 px-8 bg-paper" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24 items-end mb-24">
               <div>
                  <div className="inline-flex items-center gap-4 mb-8">
                    <div className="accent-line"></div>
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">Our Offerings</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-ink">
                    Elevated <br /><span className="text-serif-italic text-primary">Solutions</span>
                  </h2>
               </div>
               <p className="max-w-xl text-ink/60 text-xl font-medium leading-relaxed pb-4">
                  ERITA studio handles every detail of your digital presence with artisan-level care and strategic precision.
               </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col">
               {SERVICES.map((service) => (
                 <div key={service.id} className="border-t border-ink/5 first:border-t-0">
                   <div 
                     className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer group transition-all"
                     onClick={() => setActiveAccordion(activeAccordion === service.id ? null : service.id)}
                   >
                     <div className="flex items-center gap-12 mb-4 md:mb-0">
                        <span className="text-xs font-bold text-primary tracking-widest">
                          0{service.id}
                        </span>
                        <h3 className="text-3xl md:text-5xl font-serif italic text-ink group-hover:translate-x-4 transition-transform duration-500">
                          {service.title}
                        </h3>
                     </div>
                     <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all border border-ink/10 ${activeAccordion === service.id ? 'bg-primary text-white rotate-45 border-primary' : 'text-primary group-hover:bg-primary group-hover:text-white'}`}>
                        <ArrowUpRight size={24} />
                     </div>
                   </div>

                   <AnimatePresence>
                     {activeAccordion === service.id && (
                       <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                       >
                          <div className="flex flex-col lg:flex-row gap-20 pb-16 items-start">
                             <div className="flex-1">
                                <div className="flex flex-wrap gap-4 mb-10">
                                   {service.tags?.map(tag => (
                                     <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-6 py-2 rounded-full">
                                       {tag}
                                     </span>
                                   ))}
                                </div>
                                <p className="text-ink/60 text-2xl font-serif italic leading-relaxed">
                                   {service.description}
                                </p>
                             </div>
                             {service.image && (
                               <div className="flex-1 w-full max-w-2xl">
                                  <div className="relative overflow-hidden luxury-shadow">
                                    <img 
                                      src={service.image} 
                                      alt={service.title} 
                                      className="w-full aspect-[16/9] object-cover"
                                      referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                                  </div>
                               </div>
                             )}
                          </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
            </div>

            {/* View More Button */}
            <div className="mt-24 flex justify-center">
               <button className="group flex items-center gap-6 bg-ink text-white px-12 py-6 rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-primary transition-all luxury-shadow active:scale-95">
                  The Full Portfolio
                  <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-40 px-8 bg-paper">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-xl">
                 <div className="inline-flex items-center gap-4 mb-8">
                   <div className="accent-line"></div>
                   <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">Curated Works</span>
                 </div>
                 <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-ink">
                    The <span className="text-serif-italic text-primary">Archives</span>
                 </h2>
              </div>
              <div className="flex gap-4">
                 {['All', 'Brand', 'Digital', 'Physical'].map(cat => (
                   <button key={cat} className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${cat === 'All' ? 'bg-ink text-white' : 'border border-ink/10 text-ink hover:border-primary'}`}>
                      {cat}
                   </button>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: 'Auralis Timepieces', cat: 'Digital Creation', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
                 { title: 'Lumiere Maison', cat: 'Brand Identity', img: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800' },
                 { title: 'Nordic Essence', cat: 'Strategic Audit', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
                 { title: 'Velvet Horizon', cat: 'Mobile Experience', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800' },
                 { title: 'Onyx Collective', cat: 'Visual Content', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800' },
                 { title: 'Ethereal State', cat: 'High-End Web', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' }
               ].map((work, i) => (
                 <div key={work.title} className="group relative overflow-hidden rounded-2xl luxury-shadow cursor-pointer aspect-[4/5]">
                    <img 
                      src={work.img} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-12 text-center">
                       <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{work.cat}</span>
                       <h3 className="text-3xl font-serif italic text-white mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{work.title}</h3>
                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-150">
                          <ArrowUpRight size={20} />
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* SEO SECTION: FAQ */}
        <section className="py-40 px-8 bg-surface border-t border-ink/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-8 block">Bespoke Insights</span>
              <h2 className="text-6xl md:text-8xl font-black text-ink tracking-tighter mb-10">Artisan <span className="text-serif-italic text-primary">Intelligence</span></h2>
              <p className="text-ink/60 text-xl font-medium font-serif italic">Commonly discussed during our first consultation.</p>
            </div>

            <div className="flex flex-col gap-8">
               {[
                 { q: 'What is the ERITA creative philosophy?', a: 'We believe in timeless aesthetic and strategic silence. Every element must serve a purpose and mirror the prestige of the brand it represents.' },
                 { q: 'How long does a boutique digital creation take?', a: 'Artisan work takes time. A typical bespoke digital existence is birthed over 12 to 16 weeks of meticulous refinement.' },
                 { q: 'Do you offer ongoing brand stewardship?', a: 'Yes, we partner with a select number of brands annually to provide long-term visual guardianship and strategic evolution.' },
                 { q: 'Can ERITA modernise an established heritage brand?', a: 'We specialise in heritage evolution. Respecting the history while engineering a future-proof digital prestige.' }
               ].map((faq, i) => (
                 <div key={i} className="bg-paper p-12 rounded-2xl border border-ink/5 hover:border-primary/20 transition-all group luxury-shadow">
                    <h4 className="text-2xl font-serif italic font-black text-ink mb-6 group-hover:text-primary transition-colors">{faq.q}</h4>
                    <p className="text-ink/50 text-[16px] leading-[1.8] font-medium">
                       {faq.a}
                    </p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* New "Let's Connect" Section */}
        <section className="py-60 px-8 bg-paper relative overflow-hidden" id="contact">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-[0.3em] mb-12 px-10 py-3 bg-primary/5 rounded-full">A New Dialogue</span>
            <h2 className="text-[60px] md:text-[140px] font-black leading-[0.8] tracking-tighter mb-20 max-w-6xl text-ink">
              Craft with <br /> <span className="text-serif-italic text-primary">ERITA</span>.
            </h2>
            
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <a 
                 href="mailto:studio@erita.io"
                 className="group text-4xl md:text-6xl font-black text-ink hover:text-primary transition-all flex items-center gap-6"
               >
                 studio@erita.io
                 <div className="w-16 h-16 border border-ink/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ArrowUpRight size={32} />
                 </div>
               </a>
            </div>
            <p className="mt-20 text-ink/30 font-bold text-[10px] uppercase tracking-[0.4em]">
                Bespoke Digital existence by ERITA Studio.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-32 px-8 bg-ink text-paper">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-24">
              <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
                 <div className="text-4xl font-serif font-black italic tracking-widest uppercase">ERITA.</div>
                 <p className="text-[16px] text-paper/40 max-w-xs font-medium italic">Crafting digital prestige for the world's most ambitious visions.</p>
                 <div className="flex flex-col gap-2">
                    <p className="text-[10px] text-paper/20 uppercase font-black tracking-widest">© 2026 ERITA CREATIVE LTD. All rights reserved.</p>
                    <p className="text-[10px] text-paper/20 uppercase font-black tracking-widest">
                       Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OZOSOFT</a>
                    </p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-16 lg:gap-32">
                 <div className="flex flex-col gap-6">
                    <span className="text-[10px] font-black text-paper/20 uppercase tracking-[0.3em]">The Studio</span>
                    {NAV_LINKS.slice(0, 3).map(link => <a key={link} href={`#${link.toLowerCase()}`} className="text-[12px] font-bold text-paper/60 hover:text-primary transition-all tracking-widest uppercase">{link}</a>)}
                 </div>
                 <div className="flex flex-col gap-6">
                    <span className="text-[10px] font-black text-paper/20 uppercase tracking-[0.3em]">Dialogue</span>
                    {NAV_LINKS.slice(3).map(link => <a key={link} href={`#${link.toLowerCase()}`} className="text-[12px] font-bold text-paper/60 hover:text-primary transition-all tracking-widest uppercase">{link}</a>)}
                 </div>
              </div>

              <div className="flex items-center gap-6">
                  <a href="#" className="w-14 h-14 flex items-center justify-center border border-paper/10 rounded-full hover:bg-primary hover:border-primary transition-all"><Facebook size={20} /></a>
                  <a href="#" className="w-14 h-14 flex items-center justify-center border border-paper/10 rounded-full hover:bg-primary hover:border-primary transition-all"><Twitter size={20} /></a>
                  <a href="#" className="w-14 h-14 flex items-center justify-center border border-paper/10 rounded-full hover:bg-primary hover:border-primary transition-all"><Instagram size={20} /></a>
                  <a href="#" className="w-14 h-14 flex items-center justify-center border border-paper/10 rounded-full hover:bg-primary hover:border-primary transition-all"><Linkedin size={20} /></a>
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

