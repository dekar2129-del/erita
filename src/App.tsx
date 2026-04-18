import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  ChevronDown,
  Check, 
  TrendingUp, 
  ArrowRight,
  Menu,
  X,
  Play,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react';

const LOGOS = [
  'Amsterdam', 'venice.', 'ther', 'ob', 'MILANO', 'Amsterdam', 'venice.'
];

const STATS = [
  { label: 'Repeated Customers', value: '90%', color: 'text-primary' },
  { label: 'Expert Support Team', value: '390+', color: 'text-indigo-600' },
  { label: 'Project completed', value: '24k+', color: 'text-indigo-500' },
  { label: 'Satisfaction client', value: '99%', color: 'text-indigo-700' },
];

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    btnText: 'Get started for free',
    dark: false,
    features: ['Up to 5 project members', 'Unlimited tasks and projects', '2GB storage', 'Integrations', 'Basic support']
  },
  {
    name: 'Pro',
    price: '$9',
    btnText: 'Sign up now',
    dark: true,
    features: ['Up to 50 project members', 'Unlimited tasks and projects', '50GB storage', 'Integrations', 'Priority support', 'Advanced analytics']
  },
  {
    name: 'Business',
    price: '$19',
    btnText: 'Sign up now',
    dark: false,
    features: ['Unlimited project members', 'Unlimited tasks and projects', '200GB storage', 'Integrations', 'Dedicated account manager', 'Custom fields', 'Advanced analytics', 'Export capabilities']
  }
];

const SERVICES = [
  { title: 'Career Strategy Development', open: false },
  { title: 'Elite Referral Integration', open: true, desc: 'We help you streamline operations by connecting your career goals with industry leaders through powerful executive referrals.' },
  { title: 'Personal Brand Design', open: false },
  { title: 'Custom Interview Coaching', open: false }
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-dark/95 py-3 shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl text-white">
              <TrendingUp size={24} />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Business', 'Pricing', 'Features', 'About'].map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-white/80 hover:text-white">{link}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-primary text-white pl-6 pr-2 py-2 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105">
              Login
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowUpRight size={16} />
              </div>
            </button>
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-slate-dark p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
               <TrendingUp size={32} className="text-primary" />
               <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                 <X size={32} />
               </button>
            </div>
            <nav className="flex flex-col gap-8">
              {['Business', 'Pricing', 'Features', 'About'].map((link) => (
                <a key={link} href="#" className="text-3xl font-bold text-white" onClick={() => setMobileMenuOpen(false)}>{link}</a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="px-4 pt-4">
          <div className="section-dark min-h-[85vh] relative flex flex-col lg:flex-row items-center pt-32 lg:pt-0">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
               <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] border border-white/10 rounded-full -translate-y-1/2"></div>
               <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] border border-white/10 rounded-full -translate-y-1/2 scale-125"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-12 relative z-10">
              <div className="max-w-xl">
                <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 leading-[1.1]">
                  Redefining <br />
                  How <span className="text-primary italic">Careers</span> <br />
                  Gets Built
                </h1>
                <p className="text-lg text-white/60 mb-10 max-w-sm leading-relaxed">
                  At The Heart Of Everything We Do Is A Commitment To Making Your Career Stronger, Faster, And More Efficient.
                </p>
                <button className="btn-primary py-4 px-10 group">
                  Get Started
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40">
                    <ArrowUpRight size={14} />
                  </div>
                </button>

                <div className="mt-12 flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-dark overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-slate-dark flex items-center justify-center text-[10px] font-bold">25K+</div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-[60px] overflow-hidden border-[12px] border-white/5 shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Success" 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                   />
                </div>
                {/* Floating elements */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-2xl flex items-center gap-3">
                   <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                     <Play size={16} fill="currentColor" />
                   </div>
                   <div className="text-ink pr-4">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Weekly Growth</div>
                      <div className="text-sm font-bold">Career Accelerate</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <div className="py-20 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale overflow-hidden">
          {LOGOS.map((logo, i) => (
            <span key={i} className="text-2xl font-black font-display tracking-tighter">{logo}</span>
          ))}
        </div>

        {/* Trusted Partners Section */}
        <section className="py-32 bg-[#F6F6FF] rounded-[80px] -mt-10 relative z-10 overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
                25,000+ Trusted Partnerships built on Results <span className="block h-1 w-32 bg-primary mt-4"></span>
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed font-medium">
                Trusted by over 25,000 of the world's most successful professionals, we deliver reliable, high-performance career paths that drive real-world impact.
              </p>
              <button className="bg-primary text-white pl-8 pr-2 py-2 rounded-full font-bold flex items-center gap-4 hover:scale-105 transition-transform">
                Discover more
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                   <ArrowUpRight size={18} />
                </div>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
              {/* Floating Stat Cards */}
              <div className="space-y-6 pt-12">
                 <div className="card-stat aspect-square max-w-[200px] ml-auto">
                    <div className="text-4xl font-black text-primary mb-2">90%</div>
                    <div className="text-[10px] font-bold uppercase text-gray-400">Repeated <br/>Customers</div>
                 </div>
                 <div className="card-stat aspect-square max-w-[200px] -mr-8">
                    <div className="text-4xl font-black text-indigo-500 mb-2">390+</div>
                    <div className="text-[10px] font-bold uppercase text-gray-400">Expert Support <br/>Team</div>
                 </div>
              </div>
              <div className="space-y-6">
                 <div className="card-stat aspect-square max-w-[200px] bg-white border-primary/10">
                    <div className="text-2xl font-black text-indigo-400 mb-1">24k+</div>
                    <div className="text-[10px] font-bold uppercase text-gray-400">Project <br/>completed</div>
                 </div>
                 <div className="card-stat aspect-square max-w-[200px] -ml-8">
                    <div className="text-4xl font-black text-indigo-700 mb-2">99%</div>
                    <div className="text-[10px] font-bold uppercase text-gray-400">Satisfaction <br/>client</div>
                 </div>
              </div>
              
              {/* Background gradient blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl text-center mb-24">Our Pricing</h2>
            
            <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {PLANS.map((plan, i) => (
                <div 
                  key={i} 
                  className={`p-10 rounded-[40px] shadow-sm transform transition-all hover:-translate-y-2 flex flex-col ${plan.dark ? 'bg-black text-white scale-105 z-10 shadow-2xl shadow-primary/20' : 'bg-white border border-gray-100 text-ink'}`}
                >
                  {plan.dark && <div className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit mb-6">Most popular</div>}
                  <div className="text-lg font-bold mb-6">{plan.name}</div>
                  <div className="flex items-baseline gap-1 mb-10">
                    <span className="text-6xl font-black">{plan.price}</span>
                    <span className="text-gray-400 font-medium">/month</span>
                  </div>
                  
                  <button className={`w-full py-4 rounded-2xl font-bold mb-10 transition-colors ${plan.dark ? 'bg-primary text-white hover:bg-white hover:text-ink' : 'bg-primary text-white hover:bg-black'}`}>
                    {plan.btnText}
                  </button>
                  
                  <div className="space-y-5 flex-1">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        <Check size={18} className={plan.dark ? 'text-primary' : 'text-primary'} />
                        <span className={`text-sm font-medium ${plan.dark ? 'text-white/70' : 'text-gray-500'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise List */}
        <section className="py-32 bg-white border-t border-gray-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20">
            <div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-500">
                     <TrendingUp size={16} />
                  </div>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">Business Approach</span>
               </div>
               <h2 className="text-6xl leading-[1.1] mb-12">Driving Growth Through Innovation And Expertise</h2>
               <p className="text-gray-500 mb-10 text-lg leading-relaxed font-medium">
                  We combine smart strategy, innovative technology, and personalized support to help your career reach new heights.
               </p>
               <button className="bg-primary text-white pl-8 pr-2 py-2 rounded-full font-bold flex items-center gap-6 group">
                  View all services
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                     <ArrowUpRight size={18} />
                  </div>
               </button>
            </div>

            <div className="flex flex-col border-t border-gray-100">
               {SERVICES.map((service, i) => (
                 <div key={i} className={`py-12 flex flex-col border-b border-gray-100 transition-all ${service.open ? 'text-primary' : 'text-ink'}`}>
                    <div className="flex justify-between items-center cursor-pointer group">
                       <h3 className="text-3xl font-bold group-hover:translate-x-2 transition-transform">{service.title}</h3>
                       {service.open ? <ChevronDown size={28} /> : <ChevronRight size={28} className="text-gray-300" />}
                    </div>
                    {service.open && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-8 text-gray-500 text-lg max-w-xl pr-12 leading-relaxed"
                      >
                         <p className="border-t border-primary/20 pt-8">{service.desc}</p>
                      </motion.div>
                    )}
                 </div>
               ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-dark py-32 text-white">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5">
              <div className="lg:col-span-2">
                 <div className="flex items-center gap-2 mb-8">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl">
                      <TrendingUp size={24} />
                    </div>
                    <span className="text-2xl font-display font-black">Soaring Sabitri</span>
                 </div>
                 <p className="text-white/40 text-lg max-w-sm mb-12">
                    Redefining how professionals connect with industry excellence through premium referrals.
                 </p>
                 <div className="flex gap-4">
                    {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                       <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                          <Icon size={18} />
                       </a>
                    ))}
                 </div>
              </div>

              <div>
                 <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 italic">Quick Links</h4>
                 <ul className="space-y-4 text-white/60 font-medium">
                    {['Pricing', 'Referral Network', 'Career Success', 'About Us', 'Contact'].map(item => (
                       <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                    ))}
                 </ul>
              </div>

              <div>
                 <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 italic">Support</h4>
                 <ul className="space-y-4 text-white/60 font-medium">
                    {['Help Center', 'Safety & Trust', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                       <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                    ))}
                 </ul>
              </div>
           </div>

           <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-white/20 uppercase tracking-[0.25em]">
              <p>© {new Date().getFullYear()} SOARING SABITRI GROUP. ALL RIGHTS RESERVED.</p>
              <p>DESIGNED BY <a href="https://ozosoft.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors uppercase decoration-offset-4">OZOSOFT</a></p>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

