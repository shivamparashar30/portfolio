import "./App.css";
import Profile from "./assets/Photo.png";
import Project1 from "./assets/images/all-in-one-donation.png";
import Project2 from "./assets/images/furniture.png";
import Project3 from "./assets/images/food delivery.png";
import Project4 from "./assets/images/ai-skill-scan.png";
import Project5 from "./assets/images/movie ticket booking.png";
import Project6 from "./assets/images/AdminDB.png";
import Project7 from "./assets/images/body-fat-calc.png";
import Project8 from "./assets/images/candence.png";
import Project9 from "./assets/images/expendly.png";
import Project10 from "./assets/images/pulse care.png";
import LinkedIn from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import ArrowDown from "./assets/arrow-down.svg";
import Resume from "./assets/file/Shivam_s_Resume_June_26.pdf";
import { useEffect, useState, useRef } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeTab, setActiveTab] = useState("mobile");
  const [formStatus, setFormStatus] = useState("");
  const [tabTransition, setTabTransition] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const projectRefs = useRef([]);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counters, setCounters] = useState({ apps: 0, projects: 0, experience: 0, companies: 0 });
  const [rocketLaunched, setRocketLaunched] = useState(false);

  const roles = ["React Native Developer", "Software Engineer", "Full Stack Developer", "UI/UX Designer"];

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const handleRocketLaunch = () => {
    if (rocketLaunched) return;
    setRocketLaunched(true);

    const startPos = window.pageYOffset;
    const duration = 1200;
    let startTime = null;
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startPos * (1 - easeInOutCubic(progress)));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => setRocketLaunched(false), 500);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Stats counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
          const targets = { apps: 10, projects: 20, experience: 2, companies: 2 };
          const duration = 2000;
          const steps = 60;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounters({
              apps: Math.round(targets.apps * eased),
              projects: Math.round(targets.projects * eased),
              experience: Math.round(targets.experience * eased),
              companies: Math.round(targets.companies * eased),
            });
            if (step >= steps) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsVisible]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPos = window.pageYOffset;
    const distance = targetPos - startPos;
    const duration = 1200;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startPos + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolling || mobileMenuOpen ? 'bg-gray-950 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="container m-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SP<span className="text-cyan-400">.</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex gap-8">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#projects", label: "Projects" },
                  { href: "#technologies", label: "Skills" },
                  { href: "#aboutme", label: "About" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => smoothScroll(e, item.href)}
                      className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium link-underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
            <ul className="flex flex-col gap-4 pb-4">
              {[
                { href: "#home", label: "Home" },
                { href: "#projects", label: "Projects" },
                { href: "#technologies", label: "Skills" },
                { href: "#aboutme", label: "About" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { closeMobileMenu(); smoothScroll(e, item.href); }}
                    className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <main className="pt-20">
        {/* Intro/banner section */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-30"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container m-auto px-6 py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              
              {/* Text Content */}
              <div className="flex-1 space-y-6 w-full">
                {/* Mobile: Photo and Text Side by Side */}
                <div className="flex md:hidden items-center gap-6 mb-6">
                  {/* Mobile Profile Image */}
                  <div className="relative flex-shrink-0 animate-fade-in-right animation-delay-400">
                    <div className="relative hover-float-slow">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
                      <div className="profile-3d">
                        <img
                          className="relative rounded-full border-4 border-cyan-500/30 w-28 h-28 object-cover shadow-2xl shadow-cyan-500/20 transition-all duration-700 hover:border-cyan-400/50 hover:shadow-cyan-400/40"
                          src={Profile}
                          alt="Shivam Parashar"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Hero Text */}
                  <div className="flex-1 animate-fade-in-up">
                    <h1 className="font-bold text-3xl leading-tight">
                      Hello, I'm
                    </h1>
                    <h1 className="font-bold text-3xl leading-tight mt-1">
                      <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                        Shivam Parashar
                      </span>
                    </h1>
                  </div>
                </div>

                {/* Desktop Hero Text */}
                <div className="hidden md:block">
                  <div className="inline-block animate-bounce-in">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-cyan-400 hover-lift-3d">
                      👋 Welcome to my portfolio
                    </span>
                  </div>
                  <h1 className="font-bold text-5xl md:text-7xl leading-tight animate-fade-in-up animation-delay-200 mt-6">
                    Hello, I'm <br />
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient hover-lift-3d inline-block">
                      Shivam Parashar
                    </span>
                  </h1>
                </div>

                {/* Common content for both mobile and desktop */}
                <h2 className="font-bold text-2xl md:text-4xl text-gray-300 animate-fade-in-up animation-delay-400 h-10 md:h-14">
                  <span>{displayText}</span>
                  <span className="text-cyan-400 animate-pulse">|</span>
                </h2>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-600">
                  Experienced React Native and React.js Developer with hands-on full-stack development expertise. Skilled in building scalable mobile and web applications, application testing, debugging, deployment, and delivering high-performance solutions in Agile environments. Strong collaborator with the ability to work independently or within teams, in both remote and onsite environments.
                </p>
                <div className="animate-fade-in-up animation-delay-600">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm text-emerald-400 font-medium">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Available for opportunities
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-800">
                  <a
                    href="#projects"
                    onClick={(e) => smoothScroll(e, "#projects")}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover-tilt hover:scale-105 active:scale-95 text-center"
                  >
                    View My Work
                  </a>
                  <a
                    href={Resume}
                    download="Shivam_Parashar_Resume.pdf"
                    className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl font-semibold text-white transition-all duration-500 hover:bg-gray-800 hover-tilt text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Resume
                  </a>
                </div>
                <div className="flex gap-6 pt-6 animate-fade-in-up animation-delay-1000">
                  <a
                    href="https://github.com/shivamparashar30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-gray-800 hover-float hover-rotate-3d">
                      <img src={Github} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivamparashar30/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-gray-800 hover-float hover-rotate-3d animation-delay-200">
                      <img src={LinkedIn} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Desktop Profile Image */}
              <div className="relative flex-shrink-0 hidden md:block animate-fade-in-right animation-delay-400">
                <div className="relative hover-float-slow">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
                  <div className="profile-3d profile-ring">
                    <img
                      className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl shadow-cyan-500/20 transition-all duration-700 hover:shadow-cyan-400/40"
                      src={Profile}
                      alt="Shivam Parashar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section ref={statsRef} className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-10"></div>
          <div className="container m-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: counters.apps, suffix: "+", label: "Apps Built", color: "from-blue-500 to-cyan-500" },
                { value: counters.projects, suffix: "+", label: "Projects", color: "from-cyan-500 to-blue-500" },
                { value: counters.experience, suffix: "+", label: "Years Experience", color: "from-blue-500 to-purple-500" },
                { value: counters.companies, suffix: "", label: "Companies", color: "from-purple-500 to-cyan-500" },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 transition-transform duration-500 group-hover:scale-110`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I Bring */}
        <section className="py-16 md:py-20 bg-gray-900 relative">
          <div className="absolute inset-0 dot-grid opacity-10"></div>
          <div className="container m-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Why Hire Me</p>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What I Bring to the Table
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Mobile Development */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 group animate-fade-in-up">
                <div className="flex justify-center mb-6" style={{ perspective: "800px" }}>
                  <div className="phone-3d">
                    <div className="phone-notif">3</div>
                    <div className="phone-lines" style={{ position: "absolute", top: "14px", left: "10px", right: "10px", zIndex: 1 }}>
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">Mobile Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">Cross-platform apps with React Native deployed on Play Store & App Store with push notifications and real-time features.</p>
              </div>

              {/* Web Development */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 group animate-fade-in-up animation-delay-200">
                <div className="flex justify-center mb-6" style={{ perspective: "800px" }}>
                  <div className="laptop-3d">
                    <div className="laptop-screen">
                      <div className="code-lines" style={{ position: "absolute", top: "10px", left: "10px", right: "10px", zIndex: 1 }}>
                        <span></span><span></span><span></span><span></span><span></span>
                      </div>
                      <div className="code-cursor"></div>
                    </div>
                    <div className="laptop-base"></div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">Web Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">Responsive web apps and CRM dashboards built with React.js, converting Figma designs into pixel-perfect interfaces.</p>
              </div>

              {/* Full Stack & Deployment */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 group animate-fade-in-up animation-delay-400">
                <div className="flex justify-center mb-6" style={{ perspective: "800px" }}>
                  <div className="server-3d relative">
                    <div className="server-unit">
                      <div className="server-led green"></div>
                      <div className="server-led blue"></div>
                      <div className="server-slots"><span></span><span></span><span></span><span></span><span></span></div>
                    </div>
                    <div className="server-unit">
                      <div className="server-led green"></div>
                      <div className="server-led amber"></div>
                      <div className="server-slots"><span></span><span></span><span></span><span></span><span></span></div>
                    </div>
                    <div className="server-unit">
                      <div className="server-led blue"></div>
                      <div className="server-led green"></div>
                      <div className="server-slots"><span></span><span></span><span></span><span></span><span></span></div>
                    </div>
                    <div className="data-flow"></div>
                    <div className="data-flow"></div>
                    <div className="data-flow"></div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">Full Stack & Deployment</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">End-to-end development with Node.js, MongoDB, Firebase, and Supabase. Managing full lifecycle from dev to production.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="section-divider"></div>

        {/* projects */}
        <section id="projects" className="py-12 md:py-20 bg-black perspective-section relative">
          <div className="absolute inset-0 dot-grid opacity-20"></div>
          <div className="container m-auto px-4 relative z-10">
            <p className="text-center text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-in-up">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
              Featured Projects
            </h2>

            {/* Tabs */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="inline-flex bg-gray-900/80 backdrop-blur-sm rounded-xl p-1.5 border border-gray-800">
                <button
                  onClick={() => { setTabTransition(true); setTimeout(() => { setActiveTab("mobile"); setTabTransition(false); }, 200); }}
                  className={`px-5 md:px-8 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-500 ${
                    activeTab === "mobile"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Mobile Apps
                </button>
                <button
                  onClick={() => { setTabTransition(true); setTimeout(() => { setActiveTab("web"); setTabTransition(false); }, 200); }}
                  className={`px-5 md:px-8 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-500 ${
                    activeTab === "web"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Web Apps
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto transition-all duration-300 ${tabTransition ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

              {[
                { img: Project1, title: "All In One Donation", desc: "All-in-one donation app enabling donations of clothes, money, food, and books with secure backend.", tags: ["React Native", "MongoDB", "Express.js"], link: "https://github.com/shivamparashar30/AIOD-FrontEnd", type: "mobile" },
                { img: Project2, title: "Furniture Ecommerce", desc: "Modern furniture shopping app with product browsing, cart management, and real-time listings.", tags: ["React Native", "MongoDB", "Node.js"], link: "https://github.com/shivamparashar30/FurnitureApp-FrontEnd", type: "mobile" },
                { img: Project3, title: "Food Ordering App", desc: "Food Ordering App using React Native and MongoDB.", tags: ["React Native", "MongoDB", "Node.js"], link: "https://github.com/shivamparashar30/Food-order-app", type: "mobile" },
                { img: Project5, title: "Movie Ticket Booking", desc: "Complete movie ticket booking solution with React Native, MongoDB, Node.js and Express.js.", tags: ["React Native", "MongoDB", "Express.js"], link: "https://github.com/shivamparashar30/Movie-Ticket-Booking-App", type: "mobile" },
                { img: Project7, title: "Body Fat Calculator", desc: "AI-powered body fat percentage calculator using React Native and TensorFlow.", tags: ["React Native", "TensorFlow", "AI/ML"], link: "https://github.com/shivamparashar30/Body-Fat-Calculator", type: "mobile" },
                { img: Project10, title: "Pulse Care", desc: "Healthcare platform for seamless appointment management and patient-doctor interactions.", tags: ["React.js", "REST APIs", "Auth"], link: "https://github.com/shivamparashar30/PulseCare", type: "mobile" },
                { img: Project4, title: "AI Skill Scan", desc: "AI-powered resume scanning platform with real-time skill analysis and job alignment using Puter.js.", tags: ["React.js", "AI", "Puter.js"], link: "https://ai-skill-scan-main.vercel.app/", type: "web" },
                { img: Project6, title: "Admin Dashboard", desc: "Comprehensive admin dashboard for database management built with React.js.", tags: ["React.js", "Dashboard", "Database"], link: "https://admindbshivam.vercel.app", type: "web" },
                { img: Project8, title: "Cadence", desc: "Interview prep platform with 150+ DSA problems, interactive roadmaps, progress tracking, and focus timer.", tags: ["React.js", "Node.js", "MongoDB"], link: "https://cadence-prep.vercel.app/", type: "web" },
                { img: Project9, title: "Spendly", desc: "Smart expense tracking and budget management dashboard.", tags: ["React.js", "Firebase", "Analytics"], link: "https://github.com/shivamparashar30/spendly", type: "web" },
              ]
                .filter((project) => project.type === activeTab)
                .map((project, i) => (
                <div
                  key={project.title}
                  ref={(el) => (projectRefs.current[i] = el)}
                  data-index={i}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="relative overflow-hidden aspect-video bg-gray-800">
                    <img
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-out"
                      src={project.img}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700"></div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/40 text-white rounded-full backdrop-blur-md border border-white/10">
                      {project.type === "mobile" ? "Mobile" : "Web"}
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className={`px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold rounded-full border hover-lift transition-all duration-300 ${
                            j % 2 === 0
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                              : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => (window.location.href = project.link)}
                      className="w-full py-2.5 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
                    >
                      View Project →
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Section divider */}
          <div className="section-divider"></div>

          {/* Technologies */}
          <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative" id="technologies">
            <div className="absolute inset-0 dot-grid opacity-15"></div>
            <div className="container m-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Know</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Skills & Technologies
                </h2>
                <p className="text-gray-400 text-lg">Technologies I work with</p>
              </div>

              <div className="max-w-5xl mx-auto space-y-6">

                {/* Row 1: Languages + Dev Tools */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Languages */}
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in-up">
                    <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">&lt;/&gt;</span>
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "Java", "Python", "C++"].map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Developer Tools */}
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up animation-delay-200">
                    <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">#</span>
                      Developer Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "Postman", "Figma", "Jira", "Android Studio", "Xcode", "Vercel"].map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 2: Frameworks - full width */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 animate-fade-in-up animation-delay-400">
                  <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">{ }</span>
                    Frameworks & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "Supabase", "Firebase", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "REST APIs", "SQL"].map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm font-medium bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section divider */}
          <div className="section-divider"></div>

          <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative" id="aboutme">
            <div className="absolute inset-0 dot-grid opacity-15"></div>
            <div className="container m-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">My Journey</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-gray-400 text-lg">Education & experience</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-12">
                    
                    {/* Education - BCA */}
                    <div className="relative flex items-center">
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
                      <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                          <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30 mb-3">
                            July 2019 - May 2022
                          </span>
                          <h3 className="text-xl font-bold mb-2 text-white">Bachelor of Computer Applications</h3>
                          <p className="text-gray-400">Aryan College, Ajmer</p>
                          <p className="text-gray-500 text-sm mt-1">CGPA: 7.7/10</p>
                        </div>
                      </div>
                    </div>

                    {/* Education - MCA */}
                    <div className="relative flex items-center md:flex-row-reverse">
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
                      <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                          <span className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30 mb-3">
                            Oct 2022 - July 2024
                          </span>
                          <h3 className="text-xl font-bold mb-2 text-white">Master of Computer Applications</h3>
                          <p className="text-gray-400">PES University, Bangalore</p>
                          <p className="text-gray-500 text-sm mt-1">CGPA: 8.2/10</p>
                        </div>
                      </div>
                    </div>

                    {/* Professional Experience - Tigbar */}
                    <div className="relative flex items-center">
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
                      <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                          <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30 mb-3">
                            Feb 2024 - Dec 2024
                          </span>
                          <h3 className="text-xl font-bold mb-2 text-cyan-400">React Native Developer</h3>
                          <p className="text-white font-semibold mb-3">Tigbar (Remote)</p>
                          <ul className="space-y-2 text-gray-400">
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Built cross-platform apps using React Native with smooth performance on iOS and Android</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Facilitated Agile ceremonies and used Jira for sprint tracking and task management</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Implemented Redux Toolkit for state management, improving app efficiency</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Collaborated via GitHub for version control and seamless code integration</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Current Position - Chemflo */}
                    <div className="relative flex items-center md:flex-row-reverse">
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10 animate-pulse"></div>
                      <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-6 shadow-lg shadow-cyan-500/20">
                          <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-500/50 mb-3">
                            Jan 2025 - Present
                          </span>
                          <h3 className="text-xl font-bold mb-2 text-cyan-400">Software Engineer</h3>
                          <p className="text-white font-semibold mb-3">Chemflo (Remote)</p>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Built 10+ web and mobile apps from scratch, including a complete CRM system using React.js and React Native</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Delivered responsive CRM solutions and mobile apps for chemical companies and field representatives</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Converted Figma designs into responsive web applications with clean, user-friendly interfaces</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Managed Play Store and App Store deployments, push notifications, and manual testing for production apps</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative" id="contact">
        <div className="absolute inset-0 dot-grid opacity-15"></div>
        <div className="container m-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Have a project in mind or want to discuss an opportunity? Fill out the form and I'll get back to you soon.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus("sending");
                const formData = new FormData(e.target);
                formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
                formData.append("from_name", "Portfolio Contact Form");
                formData.append("subject", formData.get("subject") || "New Enquiry from Portfolio");
                try {
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                  });
                  const data = await res.json();
                  if (data.success) {
                    setFormStatus("success");
                    e.target.reset();
                    setTimeout(() => setFormStatus(""), 4000);
                  } else {
                    setFormStatus("error");
                    setTimeout(() => setFormStatus(""), 4000);
                  }
                } catch {
                  setFormStatus("error");
                  setTimeout(() => setFormStatus(""), 4000);
                }
              }}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-10 space-y-5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all duration-500 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 ${
                  formStatus === "success"
                    ? "bg-emerald-600 shadow-emerald-500/30"
                    : formStatus === "error"
                    ? "bg-red-600 shadow-red-500/30"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40"
                } ${formStatus === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {formStatus === "sending" ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : formStatus === "error" ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed. Try again.
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black relative">
        <div className="section-divider"></div>
        <div className="container m-auto px-6 py-12 pb-16 md:pb-12">
          <div className="flex flex-col items-center gap-6">
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Shivam Parashar
            </h3>
            <p className="text-gray-500 text-sm text-center max-w-md">
              React Native Developer building mobile & web experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/shivamparashar30"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-gray-900/50 border border-gray-800 hover:border-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
                  <img src={Github} className="w-5 h-5 group-hover:scale-110 transition-transform" alt="GitHub" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/shivamparashar30/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-gray-900/50 border border-gray-800 hover:border-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
                  <img src={LinkedIn} className="w-5 h-5 group-hover:scale-110 transition-transform" alt="LinkedIn" />
                </div>
              </a>
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <p className="text-gray-600 text-xs">
              © 2025 Shivam Parashar. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className={`group fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full border border-cyan-500/30 bg-gray-900/80 backdrop-blur-md flex items-center justify-center scroll-top-btn overflow-visible hover:border-cyan-400 hover:bg-gray-800/90 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 ${rocketLaunched ? 'rocket-launch' : ''}`}
          onClick={handleRocketLaunch}
          aria-label="Scroll to top"
        >
          {/* Rocket icon */}
          <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 rocket-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
          </svg>
          {/* Flame - visible on hover and during launch */}
          <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5 transition-opacity duration-200 ${rocketLaunched ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <span className="w-1 h-3 bg-orange-400 rounded-full animate-flame"></span>
            <span className="w-1.5 h-4 bg-yellow-400 rounded-full animate-flame animation-delay-100"></span>
            <span className="w-1 h-3 bg-orange-500 rounded-full animate-flame animation-delay-200"></span>
          </span>
          {/* Smoke trail during launch */}
          {rocketLaunched && (
            <>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3 h-6 bg-gradient-to-b from-yellow-500 via-orange-500 to-transparent rounded-full animate-exhaust opacity-90"></span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-400/30 rounded-full animate-smoke"></span>
              <span className="absolute -bottom-6 left-1/3 w-3 h-3 bg-gray-500/20 rounded-full animate-smoke animation-delay-100"></span>
              <span className="absolute -bottom-7 left-2/3 w-3 h-3 bg-gray-500/20 rounded-full animate-smoke animation-delay-200"></span>
            </>
          )}
        </button>
      )}
    </>
  );
}

export default App;