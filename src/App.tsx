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
  Stethoscope
} from 'lucide-react';

const NAV_LINKS = ['Home', 'Treatments', 'About', 'Doctors', 'Contact'];

const SERVICES = [
  { 
    id: '01', 
    title: 'Medical Dermatology', 
    expanded: false,
    tags: ['Acne Control', 'Psoriasis', 'Eczema', 'Skin Cancer Check'],
    description: 'Comprehensive diagnostic and therapeutic services for all medical skin conditions. Our specialists focus on long-term skin health through personalized medical protocols.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '02', 
    title: 'Advanced Laser Therapy', 
    expanded: true,
    tags: ['Laser Hair Removal', 'Pigmentation', 'Acne Scarring', 'Skin Tightening'],
    description: 'State-of-the-art US-FDA approved laser technologies for safe and effective results across all skin types. Our clinical precision ensures lasting skin health.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '03', 
    title: 'Cosmetic Rejuvenation', 
    expanded: false,
    tags: ['Botox', 'Fillers', 'Chemical Peels', 'Micro-needling'],
    description: 'Expertly delivered aesthetic enhancements to restore youthfulness and vitality. We emphasize natural-looking results through subtle, precision-guided improvements.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '04', 
    title: 'Medical Facials', 
    expanded: false,
    tags: ['HydraFacial', 'Oxygen Facial', 'Deep Cleansing', 'LED Therapy'],
    description: 'Professional-grade facial treatments tailored to your specific skin concerns. We combine medical active ingredients with relaxing techniques for glowing skin.',
    image: 'https://images.unsplash.com/photo-1570172619996-23b241c5f3fa?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '05', 
    title: 'Hair Restoration', 
    expanded: false,
    tags: ['PRP Therapy', 'Scalp Treatment', 'Hair Loss Consultation', 'Growth Serum'],
    description: 'Advanced solutions for thinning hair and scalp health. Our multi-disciplinary approach targets the root causes of hair loss for effective restoration.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800'
  },
];

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('02');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 glass h-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <Stethoscope size={24} />
            </div>
            <div className="text-xl md:text-2xl font-black text-ink tracking-tight">CRDC <span className="text-primary">Skin World</span></div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
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

          <button className="hidden md:block bg-primary text-white btn-pill !px-8 !py-3 text-[14px] hover:bg-ink transition-all modern-shadow">
            Book Appointment
          </button>

          <button 
            className="lg:hidden p-2 text-gray-600"
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
                    <span className="font-black text-sm">C</span>
                  </div>
                  <span className="text-xl font-black text-ink uppercase tracking-tight">CRDC Skin World</span>
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
              <button className="mt-12 btn-pill bg-primary text-white !px-12 !py-4 text-lg modern-shadow font-black">
                Book Consultation
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 px-8 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-32"></div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-2 mb-8 animate-pulse">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <span className="font-mono text-[12px] font-bold text-primary uppercase tracking-[0.3em]">Excellence in Dermatology</span>
                </div>
                
                <h1 className="text-6xl md:text-[84px] font-black leading-[1.05] mb-8 tracking-tighter">
                  Expert Care for <br /> <span className="text-primary italic">Healthy Skin.</span>
                </h1>
                
                <p className="text-xl text-ink/60 font-medium max-w-xl mb-12 leading-relaxed">
                  Experience world-class dermatological solutions at CRDC Skin World. Our specialists combine clinical precision with advanced aesthetics for your best skin.
                </p>

                <div className="flex flex-wrap gap-4 mb-16">
                  <button className="bg-ink text-white btn-pill flex items-center gap-4 group hover:bg-primary transition-all">
                    View Treatments
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20">
                      <ChevronRight size={14} />
                    </div>
                  </button>
                  <button className="bg-white text-ink btn-pill border border-slate-200 hover:border-primary/40 transition-all flex items-center gap-3">
                    <Phone size={18} className="text-primary" />
                    Call Clinic
                  </button>
                </div>

                <div className="flex items-center gap-8 border-t border-slate-100 pt-10 w-full lg:w-auto">
                  <div>
                    <div className="text-4xl font-black text-ink mb-1">15k+</div>
                    <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest leading-none">Healthy Patients</div>
                  </div>
                  <div className="w-px h-12 bg-slate-100"></div>
                  <div>
                    <div className="text-4xl font-black text-ink mb-1">10+</div>
                    <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest leading-none">Specialized Doctors</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full aspect-square flex items-center justify-center">
                  {/* Subtle Shape */}
                  <div className="absolute w-[90%] aspect-square bg-surface rounded-[80px] rotate-6 border border-primary/5"></div>
                  
                  {/* Clinic Imagery */}
                  <div className="relative w-[85%] aspect-[3/4] overflow-hidden rounded-[60px] modern-shadow z-10 bg-slate-100 border-8 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
                      alt="Expert Dermatologist" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Trust Badges */}
                  <div className="absolute top-20 -right-4 z-20 bg-white modern-shadow p-6 rounded-3xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-ink">FDA Approved</div>
                      <div className="text-[10px] text-ink/40 font-bold uppercase">Standardized Care</div>
                    </div>
                  </div>

                  {/* Schedule Card */}
                  <div className="absolute bottom-10 -left-4 z-20 bg-ink text-white p-6 rounded-3xl modern-shadow border border-white/5 max-w-[200px]">
                     <div className="flex items-center gap-3 mb-4">
                        <Clock size={16} className="text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Clinic Hours</span>
                     </div>
                     <p className="text-xs font-medium text-white/60 mb-1">Mon - Sat</p>
                     <p className="text-lg font-black leading-none mb-4">9:00 AM - 8:00 PM</p>
                     <p className="text-[10px] font-bold text-primary underline">Book Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Quick Links */}
        <section className="bg-primary py-8 overflow-hidden">
          <div className="flex items-center animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 text-white font-black text-2xl uppercase tracking-tighter px-8">
                {['Acne Treatment', 'Chemical Peels', 'HydraFacial', 'Laser Hair Removal', 'Anti-Aging', 'Skin Brightening'].map((item) => (
                  <div key={item} className="flex items-center gap-6">
                    <Star size={24} className="fill-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Clinical Gallery / Results */}
        <section className="py-40 px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 text-center md:text-left">
              <div>
                <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Excellence</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9]">
                  Clinical <br /> <span className="text-primary italic">Success.</span>
                </h2>
              </div>
              <p className="max-w-md text-ink/40 font-medium text-lg leading-relaxed">
                Witness the transformation journey of our patients. We prioritize natural results through medical-grade precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Advanced Laser Care', type: 'Clinical', img: 'https://images.unsplash.com/photo-1521108665069-4e0f6cdec92c?auto=format&fit=crop&q=80&w=800' },
                { title: 'Skin Rejuvenation', type: 'Esthetics', img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800' },
                { title: 'Modern Diagnostics', type: 'Technology', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800' }
              ].map((item, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-[48px] bg-surface aspect-[4/5] luxury-shadow">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{item.type}</span>
                    <h4 className="text-white text-2xl font-black tracking-tight">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments Accordion Section */}
        <section className="py-40 px-8 bg-paper overflow-hidden" id="treatments">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
               <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Services</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                    Clinic <span className="text-primary italic">Specializations</span>
                  </h2>
               </div>
               <p className="max-w-md text-ink/40 font-medium text-lg leading-relaxed">
                  Providing a comprehensive spectrum of skin, hair, and cosmetic treatments delivered with clinical excellence.
               </p>
            </div>

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
                        <h3 className="text-2xl md:text-4xl font-black tracking-tight">
                          {service.title}
                        </h3>
                     </div>
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeAccordion === service.id ? 'bg-primary text-white rotate-45' : 'text-ink group-hover:text-primary'}`}>
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
                                     <span key={tag} className="text-[11px] font-bold uppercase tracking-widest bg-white/5 text-white/80 px-6 py-2 rounded-full border border-white/10">
                                       {tag}
                                     </span>
                                   ))}
                                </div>
                                <p className="text-white/60 text-xl leading-relaxed font-medium mb-12 max-w-2xl">
                                   {service.description}
                                </p>
                                <button className="bg-primary text-white btn-pill !px-10 !py-4 text-sm font-black mb-12 lg:mb-0">
                                  Learn More About Treatment
                                </button>
                             </div>
                             {service.image && (
                               <div className="flex-1 w-full relative overflow-hidden rounded-[40px] luxury-shadow border-4 border-white/5">
                                 <img 
                                   src={service.image} 
                                   alt={service.title} 
                                   className="w-full aspect-video object-cover"
                                   referrerPolicy="no-referrer"
                                 />
                               </div>
                             )}
                          </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Doctor Spotlight */}
        <section id="doctors" className="py-40 px-8 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <div className="relative">
                  <div className="aspect-[4/5] rounded-[60px] overflow-hidden modern-shadow border-8 border-white group relative">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71f1536785?auto=format&fit=crop&q=80&w=800" 
                      alt="Head Dermatologist" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                       <div className="text-white">
                          <h4 className="text-3xl font-black mb-2">Dr. Sarah Johnson</h4>
                          <p className="font-bold text-primary text-sm uppercase tracking-widest leading-none">Senior Dermatologist</p>
                       </div>
                    </div>
                  </div>
                  {/* Experience Badge */}
                  <div className="absolute top-12 -right-8 bg-white modern-shadow p-10 rounded-3xl border border-slate-50 rotate-6">
                    <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Experience</div>
                    <div className="text-5xl font-black text-ink leading-none tracking-tighter">12+ <span className="text-2xl">Yrs</span></div>
                  </div>
               </div>

               <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Experts</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black leading-tight mb-12 tracking-tighter">
                     Clinical <br /> <span className="text-primary italic">Excellence.</span>
                  </h2>
                  <div className="space-y-8 text-ink/60 text-lg font-medium leading-relaxed mb-12">
                    <p>
                       Led by renowned dermatologists, CRDC Skin World brings decades of collective experience in diagnostic and cosmetic skin health.
                    </p>
                    <p>
                       Our medical team is committed to ethical practice, utilizing gold-standard technology to provide customized care plans for every skin journey.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 bg-white rounded-3xl modern-shadow border border-slate-50">
                       <div className="text-primary mb-4 font-black">Certifications</div>
                       <p className="text-xs font-bold text-ink uppercase tracking-widest">Board Certified Specialists</p>
                    </div>
                    <div className="p-6 bg-white rounded-3xl modern-shadow border border-slate-50">
                       <div className="text-primary mb-4 font-black">Technology</div>
                       <p className="text-xs font-bold text-ink uppercase tracking-widest">US-FDA Approved Equipment</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Patient Stories / Testimonials */}
        <section className="py-40 px-8 bg-ink text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <span className="font-mono text-[12px] font-bold text-primary uppercase tracking-[0.3em]">Patient Stories</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-12">
                  Real <br /> <span className="text-primary italic">Transformations.</span>
                </h2>
                <p className="text-white/40 font-medium text-lg leading-relaxed mb-12 max-w-sm">
                  Listen to our patients describe their path to confidence and healthier skin.
                </p>
                <div className="flex items-center gap-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-primary text-primary" />)}
                  <span className="font-black text-xl">4.9/5</span>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: 'Emma Watson', role: 'Acne Treatment', quote: 'The clinical approach at CRDC changed my perspective on skin care. My results are beyond expectation.' },
                  { name: 'Michael Chen', role: 'Laser Therapy', quote: 'Professional, hygienic, and highly effective. The staff made me feel comfortable from the first consultation.' }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[48px] luxury-shadow flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-8">
                        <Star size={24} className="fill-current" />
                      </div>
                      <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed italic mb-8">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1">{testimonial.name}</h4>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-40 px-8 bg-paper">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-6 block">Care FAQ</span>
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Healthy <span className="text-primary italic">Answers.</span></h2>
              <p className="text-ink/60 text-xl font-medium">Clear insights into your dermatological path.</p>
            </div>

            <div className="flex flex-col gap-6">
               {[
                 { q: 'What is the CRDC clinic approach?', a: 'We employ a medical-first philosophy, prioritizing skin health diagnostics before exploring aesthetic enhancements.' },
                 { q: 'Are your laser treatments safe for dark skin?', a: 'Yes, we use advanced Q-switch and Diode technologies that are specifically calibrated for safety on all Melanin-rich skin tones.' },
                 { q: 'How do I prepare for my first consultation?', a: 'Simply reach out via phone or our online portal. We recommend bringing any current skin care products you are using for evaluation.' },
                 { q: 'Is there downtime for cosmetic procedures?', a: 'Most of our treatments are designed for minimal interruption. Our experts will provide detailed post-care protocols based on your specific procedure.' }
               ].map((faq, i) => (
                 <div key={i} className="bg-white p-10 md:p-12 rounded-[40px] border border-slate-100 hover:border-primary/20 transition-all group modern-shadow">
                    <h4 className="text-2xl font-black text-ink mb-6 group-hover:text-primary transition-all leading-tight tracking-tight">{faq.q}</h4>
                    <p className="text-ink/40 text-lg leading-relaxed font-medium">
                       {faq.a}
                    </p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Contact/Appointment Section */}
        <section className="py-60 px-8 bg-white relative overflow-hidden" id="contact">
          {/* Accent Shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-40 -mt-40"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-12 px-8 py-3 bg-primary/5 rounded-full">Get in Touch</span>
            <h2 className="text-[60px] md:text-[140px] font-black leading-[0.9] tracking-tighter mb-24 max-w-6xl">
              Begin Your <br /> <span className="text-primary italic">Skin Journey</span>.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mb-32">
               <div className="flex flex-col items-center p-12 bg-surface rounded-[60px] border border-slate-100 modern-shadow">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-8 modern-shadow">
                    <Phone size={24} />
                  </div>
                  <p className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-4 leading-none">Call Support</p>
                  <a href="tel:+1234567890" className="text-2xl font-black text-ink hover:text-primary transition-all underline decoration-primary/20 underline-offset-8">+12 3456 7890</a>
               </div>
               
               <div className="flex flex-col items-center p-12 bg-ink text-white rounded-[60px] modern-shadow">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-primary mb-8 border border-white/10">
                    <MapPin size={24} />
                  </div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 leading-none">Our Location</p>
                  <p className="text-2xl font-black tracking-tight leading-tight">123 Clinical Plaza, <br />Health District, IN</p>
               </div>

               <div className="flex flex-col items-center p-12 bg-surface rounded-[60px] border border-slate-100 modern-shadow">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-8 modern-shadow">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-4 leading-none">Online Booking</p>
                  <a href="#" className="text-2xl font-black text-ink hover:text-primary transition-all underline decoration-primary/20 underline-offset-8">Book Now</a>
               </div>
            </div>

            {/* Quick Consultation Form */}
            <div className="w-full max-w-4xl bg-white border border-slate-100 p-10 md:p-20 rounded-[80px] luxury-shadow">
               <div className="text-center mb-16">
                  <h3 className="text-4xl font-black mb-4 tracking-tight">Request a Call Back</h3>
                  <p className="text-ink/40 font-medium">Leave your details and our counselor will reach out shortly.</p>
               </div>
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col items-start gap-4">
                     <label className="text-[10px] font-bold text-ink uppercase tracking-widest">Full Name</label>
                     <input type="text" placeholder="e.g. John Doe" className="w-full bg-surface p-6 rounded-3xl border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium" />
                  </div>
                  <div className="flex flex-col items-start gap-4">
                     <label className="text-[10px] font-bold text-ink uppercase tracking-widest">Phone Number</label>
                     <input type="tel" placeholder="+91 XXXX XXX XXX" className="w-full bg-surface p-6 rounded-3xl border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium" />
                  </div>
                  <div className="flex flex-col items-start gap-4 md:col-span-2">
                     <label className="text-[10px] font-bold text-ink uppercase tracking-widest">What are you looking for?</label>
                     <select className="w-full bg-surface p-6 rounded-3xl border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium">
                        <option>Acne Consultation</option>
                        <option>Laser Hair Removal</option>
                        <option>Skin Lighting & Brightening</option>
                        <option>General Dermatology</option>
                        <option>Other / Not Sure</option>
                     </select>
                  </div>
                  <button className="md:col-span-2 bg-primary text-white btn-pill !py-6 text-lg font-black modern-shadow hover:bg-ink transition-all">
                     Submit Request
                  </button>
               </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-8 bg-ink text-white">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
              <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                      <Stethoscope size={28} />
                    </div>
                    <div className="text-2xl font-black tracking-tight leading-none">CRDC <br /><span className="text-primary">Skin World</span></div>
                 </div>
                 <p className="text-sm text-white/40 max-w-xs font-medium leading-relaxed">Advanced Dermatological Care for sustainable skin health and timeless beauty.</p>
                 <div className="flex flex-col gap-2">
                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] leading-none mb-2">© 2026 CRDC CLINICAL. ALL RIGHTS RESERVED.</p>
                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
                       Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">OZOSOFT</a>
                    </p>
                 </div>
              </div>

              <div className="flex flex-wrap justify-center gap-12">
                {NAV_LINKS.map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-black text-white/40 hover:text-primary transition-all uppercase tracking-[0.3em]">{link}</a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                  <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary transition-all border border-white/5 hover:border-primary"><Facebook size={20} /></a>
                  <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary transition-all border border-white/5 hover:border-primary"><Twitter size={20} /></a>
                  <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary transition-all border border-white/5 hover:border-primary"><Instagram size={20} /></a>
                  <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary transition-all border border-white/5 hover:border-primary"><Linkedin size={20} /></a>
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
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}} />
    </div>
  );
}

