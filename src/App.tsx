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
  Stethoscope,
  Calendar,
  ShieldCheck,
  Video,
  Search,
  Users,
  Award,
  Heart,
  Zap
} from 'lucide-react';

const NAV_LINKS = ['Home', 'Doctors', 'Specials', 'About', 'Contact'];

const SPECIALTIES = [
  { id: '01', title: 'Cardiology', icon: <Heart className="text-red-500" />, desc: 'Expert care for your heart health and cardiovascular system.' },
  { id: '02', title: 'Neurology', icon: <Zap className="text-yellow-500" />, desc: 'Advanced diagnostics and treatment for nervous system disorders.' },
  { id: '03', title: 'Pediatrics', icon: <Users className="text-blue-500" />, desc: 'Compassionate medical care for infants, children, and adolescents.' },
  { id: '04', title: 'Dermatology', icon: <ShieldCheck className="text-teal-500" />, desc: 'Comprehensive care for skin, hair, and nail conditions.' }
];

const FEATURED_DOCTORS = [
  { 
    name: 'Dr. Sarah Mitchell', 
    title: 'Senior Cardiologist', 
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
    rating: '4.9',
    reviews: '120',
    specialty: 'Cardiology'
  },
  { 
    name: 'Dr. James Wilson', 
    title: 'Expert Neurologist', 
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    rating: '4.8',
    reviews: '95',
    specialty: 'Neurology'
  },
  { 
    name: 'Dr. Elena Rodriguez', 
    title: 'Pediatric Specialist', 
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600',
    rating: '5.0',
    reviews: '210',
    specialty: 'Pediatrics'
  }
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
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Stethoscope size={24} strokeWidth={2.5} />
            </div>
            <div className="text-2xl font-black text-ink tracking-tight">SHEHAAT</div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-[14px] font-bold text-ink/60 hover:text-primary transition-all uppercase tracking-widest"
                onClick={() => link === 'Home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <button className="text-[14px] font-bold text-ink/60 hover:text-primary transition-all">
                Sign In
             </button>
             <button className="bg-primary text-white btn-pill !px-8 !py-3 text-[14px] hover:shadow-lg hover:shadow-primary/20 transition-all">
               Join Platform
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Stethoscope size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-xl font-black text-ink uppercase tracking-tight">Shehaat</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-ink">
                 <X size={28} />
               </button>
            </div>
            <nav className="flex flex-col gap-6 items-center flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-3xl font-black text-ink hover:text-primary transition-colors uppercase tracking-tight"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="flex flex-col w-full gap-4 mt-12 pb-12">
                <button className="btn-pill bg-primary text-white w-full !py-4 text-lg font-bold">
                  Get Started
                </button>
                <button className="btn-pill bg-surface text-ink w-full !py-4 text-lg font-bold">
                  Sign In
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative pt-24 pb-32 px-8 overflow-hidden bg-gradient-to-b from-surface to-paper">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          
          <div className="max-w-7xl mx-auto relative content-grid">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8"
                >
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Available 24/7 for you</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8 tracking-tighter text-ink">
                  Your Health, <br /> Our <span className="text-primary">Commitment.</span>
                </h1>
                
                <p className="text-lg text-ink/60 font-medium max-w-xl mb-12 leading-relaxed">
                  Book appointments with top-rated medical specialists in your area. Simple, secure, and personalized healthcare at your fingertips.
                </p>

                {/* Hero Search */}
                <div className="bg-white p-2 rounded-[32px] modern-shadow border border-gray-100 flex flex-col md:flex-row gap-2 mb-12 max-w-2xl">
                   <div className="flex-1 flex items-center gap-4 px-6 py-4">
                      <Search size={20} className="text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search specialty, doctor or condition" 
                        className="bg-transparent border-none outline-none w-full font-medium text-ink placeholder:text-gray-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                   </div>
                   <button className="bg-primary text-white btn-pill !py-4 md:!px-10 text-sm font-bold flex items-center justify-center gap-2">
                      Find Doctors
                      <ChevronRight size={16} />
                   </button>
                </div>

                <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-gray-100">
                    <div className="flex -space-x-4">
                       {[
                         'https://images.unsplash.com/photo-1559839734-2b71f1536785?auto=format&fit=crop&q=80&w=100',
                         'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100',
                         'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100'
                       ].map((src, i) => (
                         <img key={i} src={src} className="w-12 h-12 rounded-full border-4 border-white object-cover" />
                       ))}
                       <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold border-4 border-white">
                          50+
                       </div>
                    </div>
                    <div>
                       <div className="text-xl font-black text-ink leading-none mb-1">2,000+</div>
                       <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Registered Doctors</div>
                    </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full aspect-square flex items-center justify-center">
                  {/* Decorative Elements */}
                  <div className="absolute top-[10%] right-[10%] w-32 h-32 bg-primary/10 rounded-3xl -rotate-12 animate-float"></div>
                  <div className="absolute bottom-[20%] left-[5%] w-24 h-24 bg-green-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Hero Image */}
                  <div className="relative z-10 w-[85%] aspect-[4/5] overflow-hidden rounded-[80px] shadow-2xl border-8 border-white bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                      alt="Healthcare Professional" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Doctor Card UI Overlay */}
                  <div className="absolute top-[20%] -right-12 z-20 bg-white modern-shadow p-6 rounded-3xl border border-gray-50 flex flex-col gap-4 max-w-[220px]">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                           <Video size={20} />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Virtual Care</div>
                           <div className="text-sm font-bold text-ink leading-none">Online Consult</div>
                        </div>
                     </div>
                     <div className="h-px bg-gray-100 w-full"></div>
                     <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />)}
                     </div>
                  </div>

                  {/* Rating Card Overlay */}
                  <div className="absolute -bottom-6 left-12 z-20 bg-ink text-white p-8 rounded-[40px] shadow-2xl flex flex-col gap-4">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                           <Award size={24} />
                        </div>
                        <div>
                           <div className="text-2xl font-black italic tracking-tighter leading-none mb-1">Top Tier</div>
                           <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] leading-none">Medical Staff</div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories / Specialties */}
        <section id="specials" className="py-24 px-8 bg-paper">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20 text-center md:text-left">
                <div>
                   <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6 block">Our Specialties</span>
                   <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Expert Care <span className="text-primary italic">Categories.</span></h2>
                </div>
                <p className="max-w-md text-ink/40 font-medium text-lg">We cover a wide range of medical specialties to ensure you get the best possible care for any condition.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SPECIALTIES.map((spec) => (
                  <div key={spec.id} className="group p-10 rounded-[48px] bg-surface hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-500 hover:shadow-xl cursor-pointer">
                    <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                       <div className="group-hover:text-white transition-colors">{spec.icon}</div>
                    </div>
                    <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{spec.title}</h4>
                    <p className="text-ink/40 font-medium leading-relaxed group-hover:text-ink/60 transition-colors">
                       {spec.desc}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                       Learn More <ArrowUpRight size={14} />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Featured Doctors Section */}
        <section id="doctors" className="py-40 px-8 bg-surface overflow-hidden relative">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>
          <div className="max-w-7xl mx-auto relative content-grid z-10">
            <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
               <div>
                  <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6 block">Qualified Professionals</span>
                   <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Find Your <span className="text-primary italic">Expert Doctor.</span></h2>
               </div>
               <button className="bg-white text-ink btn-pill border border-gray-200 hover:border-primary/20 transition-all flex items-center gap-4 italic font-bold">
                  View All Doctors 
                  <ArrowUpRight size={18} />
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {FEATURED_DOCTORS.map((doctor, idx) => (
                 <div key={idx} className="bg-white rounded-[60px] overflow-hidden modern-shadow group border border-gray-100">
                    <div className="relative aspect-[4/5] overflow-hidden">
                       <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                       />
                       <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                          <Star size={14} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-black">{doctor.rating}</span>
                       </div>
                       <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <button className="bg-primary text-white w-full py-4 rounded-3xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/30">
                             Book Appointment
                             <Calendar size={18} />
                          </button>
                       </div>
                    </div>
                    <div className="p-10 text-center">
                       <h4 className="text-2xl font-black text-ink mb-1">{doctor.name}</h4>
                       <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">{doctor.title}</p>
                       <div className="h-px bg-gray-100 w-full mb-6"></div>
                       <div className="flex justify-around items-center text-ink/40">
                          <div className="flex flex-col">
                             <span className="text-lg font-black text-ink">12+</span>
                             <span className="text-[10px] font-bold uppercase tracking-widest">Exp. Yrs</span>
                          </div>
                          <div className="w-px h-8 bg-gray-100"></div>
                          <div className="flex flex-col">
                             <span className="text-lg font-black text-ink">{doctor.reviews}</span>
                             <span className="text-[10px] font-bold uppercase tracking-widest">Reviews</span>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* How it Works / Trust Section */}
        <section id="about" className="py-40 px-8 bg-paper overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <div className="order-2 lg:order-1">
                  <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-8 block">Why Shehaat?</span>
                  <h2 className="text-5xl md:text-7xl font-black leading-tight mb-12 tracking-tighter">Healthcare <br /> <span className="text-primary">Simplified.</span></h2>
                  
                  <div className="space-y-10">
                     {[
                       { icon: <Search />, title: 'Find Specialists', desc: 'Browse through thousands of verified medical experts in your city.' },
                       { icon: <Calendar />, title: 'Instant Booking', desc: 'Secure your appointment directly on the platform in few clicks.' },
                       { icon: <Video />, title: 'Online Consultation', desc: 'Consult your doctor via secure video calls from home.' },
                       { icon: <ShieldCheck />, title: 'Verified Profiles', desc: 'Every doctor on our platform is board-certified and vetted.' }
                     ].map((step, idx) => (
                       <div key={idx} className="flex gap-8 group">
                          <div className="w-16 h-16 rounded-[24px] bg-surface flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                             {step.icon}
                          </div>
                          <div className="flex flex-col justify-center">
                             <h4 className="text-xl font-black mb-2 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{step.title}</h4>
                             <p className="text-ink/60 font-medium leading-relaxed max-w-sm">{step.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="order-1 lg:order-2 relative">
                  <div className="aspect-square rounded-[100px] overflow-hidden shadow-2xl relative transform rotate-3">
                     <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                      alt="Modern Clinic" 
                      className="w-full h-full object-cover grayscale brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                  </div>
                  {/* Floating Circle Stats */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-ink rounded-full flex flex-col items-center justify-center text-white modern-shadow z-20 animate-pulse">
                     <div className="text-5xl font-black italic tracking-tighter">98%</div>
                     <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Patient Satisfaction</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-8 pb-40">
           <div className="max-w-7xl mx-auto rounded-[80px] bg-primary p-12 lg:p-32 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              <div className="relative z-10">
                 <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter italic uppercase">Ready for <br /> Better Health?</h2>
                 <p className="text-xl text-white/80 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">Join thousands of patients who trust Shehaat for their primary medical needs and expert consultations.</p>
                 <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="bg-white text-primary btn-pill !px-12 !py-6 text-xl font-black hover:scale-105 transition-all w-full md:w-auto">
                       Book Your Apppointment Now
                    </button>
                    <button className="bg-ink text-white btn-pill !px-12 !py-6 text-xl font-black border border-white/10 hover:bg-white/10 transition-all w-full md:w-auto">
                       Are You a Doctor?
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact / Quick Stats Section */}
        <section id="contact" className="py-40 px-8 bg-surface">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                 {[
                   { icon: <Phone />, label: 'Emergency Support', value: '01 2345 6789', color: 'bg-red-50 text-red-500' },
                   { icon: <MapPin />, label: 'Headquarters', value: 'Sheikh Zayed, Cairo, EG', color: 'bg-indigo-50 text-indigo-500' },
                   { icon: <Clock />, label: 'Support Hours', value: '24/7 Available', color: 'bg-teal-50 text-teal-500' }
                 ].map((card, i) => (
                   <div key={i} className="bg-white p-12 rounded-[50px] border border-gray-100 modern-shadow flex flex-col items-center text-center group hover:scale-105 transition-all">
                      <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-8`}>
                         {card.icon}
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{card.label}</span>
                      <p className="text-2xl font-black tracking-tighter italic">{card.value}</p>
                   </div>
                 ))}
              </div>

              {/* Newsletter / Booking Hint */}
              <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[80px] border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                  <div className="flex-1">
                     <h3 className="text-4xl font-black mb-4 tracking-tighter italic">Get Health Updates.</h3>
                     <p className="text-ink/40 font-medium">Subscribe to our medical newsletter for expert tips and news.</p>
                  </div>
                  <div className="w-full md:w-[400px] flex p-2 bg-surface rounded-full border border-gray-100">
                     <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none px-6 py-4 flex-1 font-medium italic" />
                     <button className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <ArrowUpRight size={20} />
                     </button>
                  </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-8 bg-ink text-white overflow-hidden">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between gap-20 mb-20">
                 <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                         <Stethoscope size={28} strokeWidth={2.5} />
                       </div>
                       <div className="text-3xl font-black tracking-tight leading-none uppercase italic">SHEHAAT</div>
                    </div>
                    <p className="text-lg text-white/40 max-w-xs font-medium leading-relaxed italic">Leading the way in digital healthcare solutions for the modern world.</p>
                    <div className="flex items-center gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                          <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all border border-white/5 text-white/40">
                            <Icon size={18} />
                          </a>
                        ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-32">
                    <div className="flex flex-col gap-6">
                       <h5 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">Platform</h5>
                       {['Home', 'Doctors', 'Specials', 'About'].map(t => <a key={t} href="#" className="text-sm font-bold text-white/40 hover:text-white transition-colors">{t}</a>)}
                    </div>
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                       <h5 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">Support</h5>
                       {['Help Center', 'Safety', 'Terms', 'Privacy'].map(t => <a key={t} href="#" className="text-sm font-bold text-white/40 hover:text-white transition-colors">{t}</a>)}
                    </div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
                <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] italic">© 2026 SHEHAAT HEALTH TECH. ALL RIGHTS RESERVED.</p>
                <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
                   Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all underline-offset-4 italic">OZOSOFT</a>
                </p>
              </div>
           </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
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
          background: #FFFFFF;
        }
        ::-webkit-scrollbar-thumb {
          background: #F1F5F9;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4F46E5;
        }
      `}} />
    </div>
  );
}
