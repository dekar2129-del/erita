import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Award, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Zap, 
  CreditCard, 
  ShieldCheck,
  Globe,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const PLANS = [
  {
    name: 'Essential',
    price: '$29',
    period: '/mo',
    features: ['Access to basic referral list', 'Weekly job newsletters', 'Profile visibility to recruiters', 'Community forum access'],
    recommended: false
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/mo',
    features: ['Direct referral introductions', 'Unlimited premium job listings', '1-on-1 resume review monthly', 'Priority support', 'Skill assessment badges'],
    recommended: true
  },
  {
    name: 'Executive',
    price: '$199',
    period: '/mo',
    features: ['Dedicated career consultant', 'Executive referral network', 'Guaranteed interview coaching', 'White-glove job hunting', 'VIP event access'],
    recommended: false
  }
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
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-xl' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl text-white transform group-hover:rotate-12 transition-transform">
              <TrendingUp size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold leading-tight">Soaring Sabitri</span>
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase leading-none">Referral Network</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['Solutions', 'Pricing', 'Network', 'About'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-semibold text-ink/70 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block font-bold text-sm text-ink/70 hover:text-primary transition-colors">Login</button>
            <button className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
            <button 
              className="lg:hidden p-2 text-ink"
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-2">
                  <TrendingUp size={24} className="text-primary" />
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Soaring Sabitri</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-ink">
                 <X size={32} />
               </button>
            </div>
            <nav className="flex flex-col gap-6">
              {['Solutions', 'Pricing', 'Network', 'About'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-3xl font-bold hover:text-primary transition-colors border-b border-gray-100 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <button className="btn-primary w-full py-5 text-xl">Sign Up</button>
                <button className="btn-outline w-full py-5 text-xl">Login</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-gradient-to-b from-primary/5 via-white to-white">
          {/* Background blurred circles */}
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                <Zap size={14} /> The Future of Referral-Based Careers
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.95] text-ink max-w-5xl mx-auto">
                Unlock Careers Through <span className="text-gradient italic">Connection.</span>
              </h1>
              <p className="text-xl text-ink/60 max-w-2xl mx-auto mb-12 font-medium">
                Skip the traditional queue. Sourcing elite referrals from industry giants to put your application at the top of the deck.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="btn-primary py-5 px-12 text-lg">Join the Network</button>
                <button className="btn-outline py-5 px-12 text-lg">Browse Opportunities</button>
              </div>

              <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-50">
                <div className="flex items-center gap-2 text-xl font-bold font-display tracking-tighter">
                   <div className="w-8 h-8 bg-black rounded-md"></div> TECHGIANT
                </div>
                <div className="flex items-center gap-2 text-xl font-bold font-display tracking-tighter">
                   <div className="w-8 h-8 bg-black rotate-45"></div> NOVACORP
                </div>
                <div className="flex items-center gap-2 text-xl font-bold font-display tracking-tighter italic underline">
                   STRATA
                </div>
                <div className="flex items-center gap-2 text-xl font-bold font-display tracking-tighter">
                   <div className="w-8 h-8 bg-black rounded-full"></div> NEXUS.AI
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="solutions" className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Elite Referrals',
                  icon: <Users className="text-primary" />,
                  desc: 'We connect you with high-level employees in your target companies who will refer your profile directly.'
                },
                {
                  title: 'Expert Coaching',
                  icon: <Award className="text-secondary" />,
                  desc: 'Personalized 1-on-1 sessions to optimize your professional presence and interview performance.'
                },
                {
                  title: 'Global Opportunities',
                  icon: <Briefcase className="text-indigo-600" />,
                  desc: 'Exclusive access to unlisted job openings across tech, finance, and creative industries worldwide.'
                }
              ].map((feature, i) => (
                <div key={i} className="card-gradient p-12 rounded-[32px] modern-shadow hover:scale-[1.02] transition-transform group">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                      {React.cloneElement(feature.icon, { size: 32 })}
                   </div>
                   <h3 className="text-3xl mb-4">{feature.title}</h3>
                   <p className="text-ink/60 font-medium leading-relaxed mb-6">{feature.desc}</p>
                   <button className="flex items-center gap-2 text-primary font-bold">
                      Learn more <ChevronRight size={18} />
                   </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Model Section */}
        <section id="pricing" className="py-32 bg-ink relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block italic">Sustainable Excellence</span>
            <h2 className="text-6xl text-white mb-20 max-w-4xl mx-auto leading-none">Choose Your Path to <span className="text-gradient italic">Success.</span></h2>
            
            <div className="grid md:grid-cols-3 gap-8 items-stretch pt-12">
              {PLANS.map((plan, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-10 rounded-[40px] flex flex-col ${plan.recommended ? 'bg-primary text-white scale-105 z-20 shadow-2xl shadow-primary/40' : 'bg-white/5 text-white border border-white/10'}`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                      Most Popular
                    </div>
                  )}
                  <div className="text-sm font-bold uppercase tracking-[0.2em] mb-2 opacity-60">{plan.name}</div>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-60">{plan.period}</span>
                  </div>
                  
                  <div className="space-y-4 mb-12 flex-1">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3 text-sm text-left font-medium">
                        <CheckCircle2 size={18} className={`flex-shrink-0 ${plan.recommended ? 'text-white' : 'text-primary'}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.recommended ? 'bg-white text-primary hover:bg-ink hover:text-white shadow-xl shadow-black/20' : 'bg-primary text-white hover:bg-white hover:text-ink'}`}>
                    Select Plan
                  </button>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-16 text-white/40 text-sm italic font-medium">All plans come with a 7-day success guarantee. Terms and conditions apply.</p>
          </div>
        </section>

        {/* Call to Action with Search */}
        <section className="py-32 bg-paper relative overflow-hidden">
          <div className="container mx-auto px-6">
             <div className="max-w-7xl mx-auto bg-white rounded-[60px] p-20 lg:p-32 modern-shadow flex flex-col items-center text-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
                
                <h2 className="text-5xl md:text-7xl mb-12 max-w-3xl leading-none">Find Your Position in the <span className="text-gradient italic">Next Big Thing.</span></h2>
                
                <div className="w-full max-w-2xl relative mb-12">
                   <div className="absolute left-6 top-1/2 -translate-y-1/2 text-ink/30">
                      <Search size={24} />
                   </div>
                   <input 
                    type="text" 
                    placeholder="Search by role, company, or industry..." 
                    className="w-full pl-16 pr-40 py-6 rounded-full border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 text-lg transition-all shadow-inner"
                   />
                   <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-ink text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors">
                      Search Jobs
                   </button>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                   {['Full-time', 'Remote', 'Product Design', 'SWE', 'FinTech', 'AI'].map(tag => (
                     <span key={tag} className="text-xs font-bold px-4 py-2 bg-paper rounded-full text-ink/40 border border-gray-100">#{tag}</span>
                   ))}
                </div>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg text-white">
                  <TrendingUp size={20} />
                </div>
                <span className="text-2xl font-display font-bold">Soaring Sabitri</span>
              </div>
              <p className="text-ink/50 text-lg max-w-sm font-medium leading-relaxed mb-10 italic">
                Empowering the next generation of global talent through strategic connections and expert guidance. Your career, soaring higher.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center text-ink/30 hover:border-primary hover:text-primary transition-all shadow-sm">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-primary mb-10 italic underline underline-offset-4">Resources</h4>
              <ul className="space-y-4 font-bold text-ink/60">
                {['Success Stories', 'Network Directory', 'Resume Builder', 'Interview Prep', 'Career Blog'].map(item => (
                  <li key={item}><a href="#" className="hover:text-primary transition-colors">/ {item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-primary mb-10 italic underline underline-offset-4">Company</h4>
              <ul className="space-y-4 font-bold text-ink/60">
                {['Our Vision', 'Partnerships', 'Privacy Policy', 'Terms of Use', 'Contact Support'].map(item => (
                  <li key={item}><a href="#" className="hover:text-primary transition-colors">/ {item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-ink/30 uppercase tracking-[0.25em]">
            <p>© {new Date().getFullYear()} SOARING SABITRI GROUP. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-12">
               <div className="flex gap-6">
                 <a href="#" className="hover:text-primary transition-colors">Security</a>
                 <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
               </div>
               <p>DESIGNED BY <a href="https://ozosoft.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline decoration-offset-4">OZOSOFT</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

