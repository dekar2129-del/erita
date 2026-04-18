import { useState, useEffect } from 'react';
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
  BookOpen,
  Trophy,
  Timer,
  Stethoscope,
  Microscope,
  GraduationCap,
  ShieldCheck,
  Search,
  Users,
  Award,
  BarChart3,
  Dna,
  Beaker,
  FileText,
  MousePointer2,
  Bell
} from 'lucide-react';

const NAV_LINKS = ['Home', 'Quizzes', 'Leaderboard', 'Exams', 'About'];

const CATEGORIES = [
  { 
    id: '01', 
    title: 'Anatomy & Physiology', 
    icon: <Dna className="text-blue-500" />, 
    count: '1,200+ Questions',
    description: 'Master the architectural foundations of the human body and functional systems.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '02', 
    title: 'Surgical Principles', 
    icon: <Stethoscope className="text-teal-500" />, 
    count: '850+ Questions',
    description: 'Core concepts of perioperative care, surgical techniques, and trauma management.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '03', 
    title: 'Pathology & Microbiology', 
    icon: <Beaker className="text-purple-500" />, 
    count: '980+ Questions',
    description: 'Detailed analysis of disease mechanisms and infectious agents.',
    image: 'https://images.unsplash.com/photo-1579154273821-ad15e4f4549f?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '04', 
    title: 'Clinical Pharmacology', 
    icon: <Microscope className="text-emerald-500" />, 
    count: '720+ Questions',
    description: 'Pharmacokinetics, dynamics, and therapeutics for comprehensive patient care.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800'
  }
];

const LEADERBOARD = [
  { name: 'Dr. Aaron Chen', score: '98.5%', specialty: 'Neuro-Surgery', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Sophie Varma', score: '97.2%', specialty: 'Orthopedics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Julian Ross', score: '96.8%', specialty: 'Cardiology', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400' }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 18 });

  // Simple countdown effect simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 glass h-20">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <GraduationCap size={24} strokeWidth={2.5} />
            </div>
            <div className="text-2xl font-black text-ink tracking-tight uppercase">ARC<span className="text-primary tracking-[0.2em]">MRCS</span></div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-[11px] font-bold text-ink/60 hover:text-primary transition-all uppercase tracking-[0.2em]"
                onClick={() => link === 'Home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
             <button className="text-[11px] font-bold text-ink/40 hover:text-primary transition-all uppercase tracking-widest">
                Login
             </button>
             <button className="bg-primary text-white btn-pill !px-8 !py-2.5 text-[11px] hover:shadow-xl hover:shadow-primary/20 transition-all uppercase tracking-widest border border-primary/10">
               Join Contest
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
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-2xl font-black text-ink uppercase">ARCMRCS</span>
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
                  className="text-3xl font-black text-ink hover:text-primary transition-colors uppercase tracking-tight"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="w-full h-[1px] bg-gray-100 my-4"></div>
              <button className="btn-pill bg-primary text-white w-full !py-5 text-lg font-black uppercase shadow-lg shadow-primary/20">
                Register Now
              </button>
              <button className="btn-pill bg-surface text-ink w-full !py-5 text-lg font-black uppercase border border-gray-100">
                Candidate Login
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-40 px-8 bg-paper overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-40"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px] -ml-20"></div>

          <div className="max-w-7xl mx-auto relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="flex flex-col items-start">
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mb-10 px-4 py-2 bg-primary/10 rounded-full"
                   >
                     <Trophy size={16} className="text-primary" />
                     <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Next National Contest Live In:</span>
                   </motion.div>
                   
                   {/* Mini Countdown Display */}
                   <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex gap-4 mb-12"
                   >
                      {[
                        { val: timeLeft.hours, label: 'HRS' },
                        { val: timeLeft.minutes, label: 'MIN' },
                        { val: timeLeft.seconds, label: 'SEC' }
                      ].map((t, i) => (
                        <div key={i} className="flex flex-col items-center">
                           <div className="text-4xl font-black text-ink font-mono tabular-nums leading-none mb-2">{t.val.toString().padStart(2, '0')}</div>
                           <div className="text-[8px] font-bold text-ink/30 uppercase tracking-widest">{t.label}</div>
                        </div>
                      ))}
                   </motion.div>

                   <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-[100px] font-black leading-[0.88] mb-10 tracking-tighter text-ink uppercase"
                   >
                     Master The <br /> <span className="text-primary decoration-primary/20 decoration-8 underline-offset-[16px]">Exam.</span>
                   </motion.h1>
                   
                   <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-ink/50 font-medium max-w-xl mb-12 leading-relaxed"
                   >
                     The most comprehensive medical quiz platform for MRCS trainees. Detailed rationales, peer benchmarking, and high-yield surgical clinical scenarios.
                   </motion.p>

                   <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                   >
                      <button className="bg-primary text-white btn-pill !px-12 !py-5 text-sm font-bold uppercase tracking-widest shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 group">
                         Start Free Quiz
                         <MousePointer2 size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                      <button className="bg-white text-ink btn-pill !px-12 !py-5 text-sm font-bold uppercase tracking-widest border border-gray-200 hover:border-primary/30 transition-all flex items-center justify-center gap-3">
                         View Leaderboard
                         <BarChart3 size={18} />
                      </button>
                   </motion.div>

                   <div className="flex items-center gap-12 mt-20 pt-10 border-t border-gray-100 w-full">
                      {[
                        { val: '15k+', label: 'Active Candidates' },
                        { val: '2.5M+', label: 'Questions Solved' },
                        { val: '98%', label: 'Success Rate' }
                      ].map((s, i) => (
                        <div key={i}>
                           <div className="text-2xl font-black text-ink mb-1">{s.val}</div>
                           <div className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">{s.label}</div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="relative">
                   <div className="relative aspect-square">
                      {/* Abstract Surgical Grid Background */}
                      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-10">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div key={i} className="border border-primary"></div>
                        ))}
                      </div>
                      
                      {/* Main Visual: Dashboard Concept */}
                      <div className="relative z-10 w-full h-full p-8 flex items-center justify-center animate-float">
                        <div className="relative w-full aspect-[4/5] bg-ink rounded-[40px] overflow-hidden p-8 shadow-2xl border-4 border-white/5">
                            <div className="flex justify-between items-center mb-10">
                               <div className="flex gap-2">
                                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                               </div>
                               <div className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] text-white/40 uppercase tracking-widest font-mono">Simulating MRCS-A</div>
                            </div>

                            <div className="space-y-10">
                               <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                  <div className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold mb-4">Question #42 / 180</div>
                                  <div className="text-lg text-white font-bold mb-6 leading-snug tracking-tight">A 65-year-old male presents with sudden onset epigastric pain and signs of peritonism. Radiography reveals...</div>
                                  <div className="space-y-3">
                                     {[
                                       { t: 'Pneumoperitoneum', active: true },
                                       { t: 'Subphrenic Abscess', active: false },
                                       { t: 'Hiatal Hernia', active: false }
                                     ].map((opt, idx) => (
                                       <div key={idx} className={`p-4 rounded-xl border text-xs font-bold transition-all ${opt.active ? 'bg-primary border-primary text-white' : 'bg-white/5 border-white/10 text-white/40'}`}>
                                          {opt.t}
                                       </div>
                                     ))}
                                  </div>
                               </div>

                               <div className="flex gap-4">
                                  <div className="flex-1 p-6 bg-primary/10 rounded-3xl border border-primary/20">
                                     <div className="text-[8px] text-primary uppercase tracking-widest font-bold mb-2 text-center">Your Performance</div>
                                     <div className="text-3xl font-black text-white text-center italic">Top 3%</div>
                                  </div>
                                  <div className="flex-1 p-6 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                                     <BarChart3 className="text-white/40" size={32} />
                                  </div>
                               </div>
                            </div>
                        </div>

                        {/* Floating Notifications */}
                        <div className="absolute top-1/4 -right-12 z-20 bg-white p-6 rounded-[24px] shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce-subtle">
                           <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                              <Bell size={18} />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] font-black text-ink uppercase tracking-tight leading-none mb-1">New Contest</span>
                              <span className="text-[10px] text-ink/30 font-bold uppercase tracking-widest">Starts Saturday</span>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Quiz Categories Section */}
        <section id="quizzes" className="py-40 px-8 bg-paper relative">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
                 <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-8">
                       <div className="w-10 h-0.5 bg-primary"></div>
                       <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-[0.5em]">Subject Domains</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-ink uppercase tracking-tighter leading-none italic">
                      Specialized <span className="text-primary">Curriculum.</span>
                    </h2>
                 </div>
                 <p className="max-w-md text-ink/40 font-medium text-lg leading-relaxed mb-4">
                   Curated subject paths designed to pinpoint knowledge gaps and fortify clinical reasoning for professional certification.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {CATEGORIES.map((cat) => (
                   <div key={cat.id} className="group relative flex flex-col bg-surface rounded-[40px] overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
                      <div className="relative aspect-[4/3] overflow-hidden">
                         <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                         <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent flex items-end p-8">
                            <span className="text-[8px] font-black uppercase tracking-widest text-white/60 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">{cat.count}</span>
                         </div>
                      </div>
                      <div className="p-10 flex flex-col flex-1 relative">
                         <div className="absolute -top-10 left-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                            {cat.icon}
                         </div>
                         <div className="mt-8 mb-6">
                            <h3 className="text-2xl font-black tracking-tight text-ink uppercase italic leading-none mb-2">{cat.title}</h3>
                            <div className="w-8 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all duration-700"></div>
                         </div>
                         <p className="text-ink/40 font-medium leading-relaxed mb-10 flex-1 text-sm">
                           {cat.description}
                         </p>
                         <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-6 transition-all">
                            Explore subject
                            <ChevronRight size={14} />
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Performance & Leaderboard Section */}
        <section id="leaderboard" className="py-40 px-8 bg-ink text-white overflow-hidden relative">
           {/* Background Mesh */}
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
           
           <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div className="order-last lg:order-first">
                    <div className="space-y-4">
                       {LEADERBOARD.map((user, idx) => (
                         <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all cursor-default group"
                         >
                            <div className="flex items-center gap-8">
                               <div className="flex flex-col items-center">
                                  <span className="text-2xl font-black italic text-primary">0{idx + 1}</span>
                                  <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">RANK</span>
                               </div>
                               <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                               </div>
                               <div>
                                  <h4 className="text-xl font-black uppercase italic tracking-tight">{user.name}</h4>
                                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">{user.specialty}</p>
                               </div>
                            </div>
                            <div className="flex flex-col items-end">
                               <span className="text-4xl font-black text-white tabular-nums tracking-tighter">{user.score}</span>
                               <div className="flex items-center gap-1 text-primary">
                                  <Star size={10} fill="currentColor" />
                                  <span className="text-[8px] font-black uppercase tracking-widest">Percentile</span>
                               </div>
                            </div>
                         </motion.div>
                       ))}
                    </div>
                 </div>

                 <div className="text-left">
                    <div className="flex items-center gap-3 mb-8">
                       <div className="w-10 h-0.5 bg-primary"></div>
                       <span className="font-mono text-sm font-bold text-primary uppercase tracking-[0.4em]">Peer Benchmarking</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] italic mb-10">
                      National <br /> <span className="text-primary italic">Standings.</span>
                    </h2>
                    <p className="text-xl text-white/40 font-medium leading-relaxed mb-16 max-w-xl">
                      Compare your progress with thousands of aspirants globally. Our intelligent scoring algorithm segments performance by subject, clinical domain, and speed.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8">
                       <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
                          <BarChart3 className="text-primary mb-6" size={32} />
                          <h5 className="text-lg font-black uppercase italic mb-2">Real-time Analytics</h5>
                          <p className="text-xs text-white/30 font-medium leading-relaxed">Instantly track your percentile ranking across 20+ medical specialties.</p>
                       </div>
                       <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
                          <Users className="text-primary mb-6" size={32} />
                          <h5 className="text-lg font-black uppercase italic mb-2">Peer Comparison</h5>
                          <p className="text-xs text-white/30 font-medium leading-relaxed">See how top scorers approach high-yield clinical vignettes.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Feature Highlights Section */}
        <section id="exams" className="py-40 px-8 bg-paper">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-32">
                 <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-8 block font-mono">Expert Methodology</span>
                 <h2 className="text-6xl md:text-[80px] font-black uppercase tracking-tighter leading-tight italic text-ink">The ARC <br /> <span className="text-primary italic">Standard.</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { title: 'Evidence-Based Rationales', desc: 'Every correct and incorrect option is explained with references to authoritative medical texts and clinical guidelines.', icon: <FileText size={24} /> },
                   { title: 'Clinical Context Layer', desc: 'Questions are integrated with real clinical scenarios, pathology slides, and surgical radiological imaging.', icon: <Microscope size={24} /> },
                   { title: 'Exam Pattern Fidelity', desc: 'Quizzes perfectly replicate the latest exam interfaces and testing environment of the MRCS Part A & B.', icon: <Timer size={24} /> }
                 ].map((feature, idx) => (
                   <div key={idx} className="p-16 rounded-[60px] bg-surface border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500">
                      <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all">
                         {feature.icon}
                      </div>
                      <h4 className="text-2xl font-black uppercase italic tracking-tight mb-8 text-ink">{feature.title}</h4>
                      <p className="text-ink/40 font-medium leading-relaxed text-sm">{feature.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 bg-paper">
           <div className="max-w-7xl mx-auto">
              <div className="relative rounded-[80px] bg-primary p-16 lg:p-32 overflow-hidden flex flex-col items-center text-center">
                 <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="grid grid-cols-12 grid-rows-12 gap-px w-full h-full">
                       {Array.from({ length: 144 }).map((_, i) => <div key={i} className="border border-white"></div>)}
                    </div>
                 </div>
                 
                 <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] italic mb-10 text-white">Unlock Your <br /> <span className="text-ink">Potential.</span></h2>
                    <p className="text-xl text-white/70 font-medium mb-16 max-w-2xl leading-relaxed">Join 15,000+ medical professionals already excelling with ARCMRCS. Start your preparation today.</p>
                    <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center">
                       <button className="bg-ink text-white btn-pill !px-12 !py-6 text-xl font-black uppercase italic hover:scale-105 transition-all w-full sm:w-auto shadow-2xl">Create Free Account</button>
                       <button className="bg-white/10 text-white btn-pill !px-12 !py-6 text-xl font-black uppercase italic hover:bg-white/20 transition-all border border-white/20 w-full sm:w-auto backdrop-blur-md">Learn More</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer id="about" className="py-24 px-8 bg-surface border-t border-gray-100">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
                 <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                       <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                         <GraduationCap size={28} strokeWidth={2.5} />
                       </div>
                       <div className="text-3xl font-black tracking-tight leading-none uppercase italic text-ink">ARC<span className="text-primary">MRCS</span></div>
                    </div>
                    <p className="text-lg text-ink/40 max-w-md font-medium leading-relaxed italic mb-10 text-center lg:text-left">The premier diagnostic testing and exam preparation suite for international surgical and medical certification.</p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                          <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl hover:bg-primary hover:text-white transition-all border border-gray-100 text-ink/20 shadow-sm">
                            <Icon size={18} />
                          </a>
                        ))}
                    </div>
                 </div>

                 <div className="flex flex-col gap-8 text-center lg:text-left">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Resources</h5>
                    <div className="flex flex-col gap-4">
                       {['Quiz Library', 'Mock Exams', 'Study Guides', 'Performance Tips'].map(link => <a key={link} href="#" className="text-sm font-bold text-ink/40 hover:text-primary transition-colors italic uppercase tracking-widest leading-none">{link}</a>)}
                    </div>
                 </div>

                 <div className="flex flex-col gap-8 text-center lg:text-left">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Connect</h5>
                    <div className="flex flex-col gap-4">
                       <a href="mailto:support@arcmrcs.com" className="text-lg font-black text-ink italic hover:text-primary transition-colors underline decoration-primary/20 underline-offset-8">hello@arcmrcs.com</a>
                       <p className="text-sm font-bold text-ink/40 tracking-tight leading-relaxed italic uppercase">Academic Heights, Unit 404 <br /> Medical District, London</p>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-gray-100 pt-12">
                 <p className="text-[9px] text-ink/30 font-bold uppercase tracking-[0.2em] italic">© 2026 ARCMRCS ACADEMY. ALL TRADEMARKS REGISTERED TO THEIR RESPECTIVE OWNERS.</p>
                 <div className="flex items-center gap-8">
                    <a href="#" className="text-[9px] text-ink/30 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="text-[9px] text-ink/30 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Candidate Terms</a>
                    <p className="text-[9px] text-ink/30 font-bold uppercase tracking-[0.2em]">
                       Designed by <a href="https://www.ozosoft.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all font-black">OZOSOFT</a>
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
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -10px) rotate(1deg); }
          66% { transform: translate(-10px, 10px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
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
          background: #0EA5E9;
        }
      `}} />
    </div>
  );
}
