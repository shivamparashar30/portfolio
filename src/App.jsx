
// import "./App.css";
// import Profile from "./assets/Photo.png";
// import Project1 from "./assets/Project11.png";
// import Project2 from "./assets/Project22.png";
// import Project3 from "./assets/Project333.png";
// import Project4 from "./assets/Project33.png";
// import LinkedIn from "./assets/linkedin.svg";
// import Github from "./assets/github.svg";
// import ArrowDown from "./assets/arrow-down.svg";
// import { useEffect, useState } from "react";

// function App() {
//   const [scrolling, setScrolling] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const onPageScroll = () => {
//     if (window.pageYOffset > 200) {
//       setScrolling(true);
//     } else {
//       setScrolling(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", onPageScroll);
//     return () => {
//       window.removeEventListener("scroll", onPageScroll);
//     };
//   }, []);

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50">
//         <div className="container m-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                 Shivam Parashar
//               </h1>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <ul className="flex gap-8">
//                 <li>
//                   <a
//                     href="#home"
//                     className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#projects"
//                     className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium"
//                   >
//                     Projects
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#technologies"
//                     className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium"
//                   >
//                     Skills
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#aboutme"
//                     className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium"
//                   >
//                     About
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Mobile Hamburger Button */}
//             <button
//               className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//               <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
//               <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
//             <ul className="flex flex-col gap-4 pb-4">
//               <li>
//                 <a
//                   href="#home"
//                   onClick={closeMobileMenu}
//                   className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#projects"
//                   onClick={closeMobileMenu}
//                   className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
//                 >
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#technologies"
//                   onClick={closeMobileMenu}
//                   className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
//                 >
//                   Skills
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#aboutme"
//                   onClick={closeMobileMenu}
//                   className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
//                 >
//                   About
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </header>
//       <main className="pt-20">
//         {/* Intro/banner section */}
//         <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
//           {/* Animated background elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
//             <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
//             <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
//           </div>
          
//           <div className="container m-auto px-6 py-20 relative z-10">
//             <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              
//               {/* Text Content */}
//               <div className="flex-1 space-y-6 w-full">
//                 {/* Mobile: Photo and Text Side by Side */}
//                 <div className="flex md:hidden items-center gap-6 mb-6">
//                   {/* Mobile Profile Image */}
//                   <div className="relative flex-shrink-0 animate-fade-in-right animation-delay-400">
//                     <div className="relative hover-float-slow">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
//                       <div className="profile-3d">
//                         <img
//                           className="relative rounded-full border-4 border-cyan-500/30 w-28 h-28 object-cover shadow-2xl shadow-cyan-500/20 transition-all duration-700 hover:border-cyan-400/50 hover:shadow-cyan-400/40"
//                           src={Profile}
//                           alt="Shivam Parashar"
//                         />
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Mobile Hero Text */}
//                   <div className="flex-1 animate-fade-in-up">
//                     <h1 className="font-bold text-3xl leading-tight">
//                       Hello, I'm
//                     </h1>
//                     <h1 className="font-bold text-3xl leading-tight mt-1">
//                       <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
//                         Shivam Parashar
//                       </span>
//                     </h1>
//                   </div>
//                 </div>

//                 {/* Desktop Hero Text */}
//                 <div className="hidden md:block">
//                   <div className="inline-block animate-bounce-in">
//                     <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-cyan-400 hover-lift-3d">
//                       👋 Welcome to my portfolio
//                     </span>
//                   </div>
//                   <h1 className="font-bold text-5xl md:text-7xl leading-tight animate-fade-in-up animation-delay-200 mt-6">
//                     Hello, I'm <br />
//                     <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient hover-lift-3d inline-block">
//                       Shivam Parashar
//                     </span>
//                   </h1>
//                 </div>

//                 {/* Common content for both mobile and desktop */}
//                 <h2 className="font-bold text-2xl md:text-4xl text-gray-300 animate-fade-in-up animation-delay-400">
//                   React Native Developer
//                 </h2>
//                 <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-600">
//                   I am a skilled React Native Developer specializing in creating
//                   efficient, user-friendly mobile applications with a focus on
//                   community engagement and cutting-edge technology.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-800">
//                   <a
//                     href="#projects"
//                     className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover-tilt hover:scale-105 active:scale-95 text-center"
//                   >
//                     View My Work
//                   </a>
//                   <a
//                     href="#aboutme"
//                     className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl font-semibold text-white transition-all duration-500 hover:bg-gray-800 hover-tilt text-center"
//                   >
//                     About Me
//                   </a>
//                 </div>
//                 <div className="flex gap-6 pt-6 animate-fade-in-up animation-delay-1000">
//                   <a
//                     href="https://github.com/shivamparashar30"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group"
//                   >
//                     <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-gray-800 hover-float hover-rotate-3d">
//                       <img src={Github} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
//                     </div>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/shivamparashar30/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group"
//                   >
//                     <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-gray-800 hover-float hover-rotate-3d animation-delay-200">
//                       <img src={LinkedIn} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
//                     </div>
//                   </a>
//                 </div>
//               </div>

//               {/* Desktop Profile Image */}
//               <div className="relative flex-shrink-0 hidden md:block animate-fade-in-right animation-delay-400">
//                 <div className="relative hover-float-slow">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
//                   <div className="profile-3d">
//                     <img
//                       className="relative rounded-full border-4 border-cyan-500/30 w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl shadow-cyan-500/20 transition-all duration-700 hover:border-cyan-400/50 hover:shadow-cyan-400/40"
//                       src={Profile}
//                       alt="Shivam Parashar"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* projects */}
//         <section id="projects" className="py-20 bg-black perspective-section">
//           <div className="container m-auto px-4">
//             <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
//               Featured Projects
//             </h2>
            
//             {/* Projects Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
              
//               {/* Project 1 - All In One Donation App */}
//               <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up">
//                 <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
//                     src={Project1}
//                     alt="All In One Donation App"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-500">
//                     All In One Donation App
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     Streamlines donations using React Native, MongoDB, Node.js and Express.js.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">MongoDB</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Node.js</span>
//                   </div>
//                   <button
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/shivamparashar30/AIOD-FrontEnd")
//                     }
//                     className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
//                   >
//                     View Project →
//                   </button>
//                 </div>
//               </div>

//               {/* Project 2 - Furniture Ecommerce */}
//               <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-200">
//                 <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
//                     src={Project2}
//                     alt="Furniture Ecommerce"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-500">
//                     Furniture Ecommerce
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     Furniture E-commerce Store, built with React Native, MongoDB, Node.js and Express.js.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">MongoDB</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Express.js</span>
//                   </div>
//                   <button
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/shivamparashar30/FurnitureApp-FrontEnd")
//                     }
//                     className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
//                   >
//                     View Project →
//                   </button>
//                 </div>
//               </div>

//               {/* Project 3 - Text Utils App */}
//               <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-400">
//                 <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
//                     src={Project3}
//                     alt="Text Utils App"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-500">
//                     Text Utils App
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     Responsive HTML/CSS layout for landing page for front-end developer.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">HTML</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">CSS</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">JavaScript</span>
//                   </div>
//                   <button
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/shivamparashar30/textutils")
//                     }
//                     className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
//                   >
//                     View Project →
//                   </button>
//                 </div>
//               </div>

//               {/* Project 4 - Food Ordering App */}
//               <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-600">
//                 <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
//                     src={Project4}
//                     alt="Food Ordering App"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-500">
//                     Food Ordering App
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     Food Ordering App using React Native and MongoDB.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">MongoDB</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Node.js</span>
//                   </div>
//                   <button
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/shivamparashar30/Food-order-app")
//                     }
//                     className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
//                   >
//                     View Project →
//                   </button>
//                 </div>
//               </div>

//               {/* Project 5 - AI Skill Scan */}
//               <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-800">
//                 <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
//                     src={Project1}
//                     alt="AI Skill Scan"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-500">
//                     AI Skill Scan
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     AI-powered skill assessment platform built with React Native, MongoDB, Node.js and Express.js.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">AI</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">MongoDB</span>
//                   </div>
//                   <button
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/shivamparashar30/ai-skill-scan")
//                     }
//                     className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
//                   >
//                     View Project →
//                   </button>
//                 </div>
//               </div>

//               {/* Project 6 - Movie Ticket Booking App */}
//               <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-1000">
//                 <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
//                     src={Project2}
//                     alt="Movie Ticket Booking App"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-500">
//                     Movie Ticket Booking App
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     Complete movie ticket booking solution with React Native, MongoDB, Node.js and Express.js.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">MongoDB</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Express.js</span>
//                   </div>
//                   <button
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/shivamparashar30/movie-ticket-booking")
//                     }
//                     className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
//                   >
//                     View Project →
//                   </button>
//                 </div>
//               </div>

//               {/* Project 7 - Admin DB */}
//               <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-1200">
//                 <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
//                     src={Project3}
//                     alt="Admin DB"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-500">
//                     Admin DB
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     Comprehensive admin dashboard for database management built with React.js.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React.js</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">Dashboard</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Database</span>
//                   </div>
//                   <button
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/shivamparashar30/admin-db")
//                     }
//                     className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
//                   >
//                     View Project →
//                   </button>
//                 </div>
//               </div>

//               {/* Project 8 - Body Fat Calculator App */}
//               <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-1400">
//                 <div className="relative overflow-hidden h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
//                     src={Project4}
//                     alt="Body Fat Calculator App"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-500">
//                     Body Fat Calculator App
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     AI-powered body fat percentage calculator using React Native and TensorFlow for accurate predictions.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">TensorFlow</span>
//                     <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">AI/ML</span>
//                   </div>
//                   <button
//                     onClick={() =>
//                       (window.location.href =
//                         "https://github.com/shivamparashar30/body-fat-calculator")
//                     }
//                     className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
//                   >
//                     View Project →
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Technologies */}
//           <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black" id="technologies">
//             <div className="container m-auto px-6">
//               <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                   Skills & Technologies
//                 </h2>
//                 <p className="text-gray-400 text-lg">Technologies I work with</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                
//                 {/* Skill Card 1 - HTML */}
//                 <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">HTML</h3>
//                     <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">Advanced</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '100%'}}></div>
//                   </div>
//                 </div>

//                 {/* Skill Card 2 - CSS */}
//                 <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">CSS, Bootstrap & Tailwind</h3>
//                     <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">Proficient</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '95%'}}></div>
//                   </div>
//                 </div>

//                 {/* Skill Card 3 - Programming Languages */}
//                 <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">JavaScript, Java, C++, Python</h3>
//                     <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">Proficient</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '95%'}}></div>
//                   </div>
//                 </div>

//                 {/* Skill Card 4 - UI Design */}
//                 <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">UI Design in Figma</h3>
//                     <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">Advanced</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '100%'}}></div>
//                   </div>
//                 </div>

//                 {/* Skill Card 5 - React Native */}
//                 <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">React Native</h3>
//                     <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">Advanced</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '100%'}}></div>
//                   </div>
//                 </div>

//                 {/* Skill Card 6 - React Js */}
//                 <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">React.js</h3>
//                     <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">Proficient</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '90%'}}></div>
//                   </div>
//                 </div>

//                 {/* Skill Card 7 - MongoDB */}
//                 <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">MongoDB</h3>
//                     <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30">Intermediate</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '75%'}}></div>
//                   </div>
//                 </div>

//                 {/* Skill Card 8 - Express Js */}
//                 <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Express.js</h3>
//                     <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-semibold border border-gray-500/30">Beginner</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '50%'}}></div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </section>

//           {/* Additional skills section */}
//           <section className="py-20 bg-black">
//             <div className="container m-auto px-6">
//               <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                   Additional Skills & Tools
//                 </h2>
//                 <p className="text-gray-400 text-lg">Tools and technologies I use daily</p>
//               </div>
              
//               <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
//                 <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
//                     <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
//                     Git
//                   </p>
//                 </div>
//                 <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
//                     <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
//                     Github
//                   </p>
//                 </div>
//                 <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
//                     <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
//                     VS Code
//                   </p>
//                 </div>
//                 <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
//                     <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
//                     Postman
//                   </p>
//                 </div>
//                 <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
//                     <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
//                     Teamwork
//                   </p>
//                 </div>
//                 <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
//                     <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
//                     Quick Learning
//                   </p>
//                 </div>
//                 <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
//                     <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
//                     Engagement
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black" id="aboutme">
//             <div className="container m-auto px-6">
//               <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                   About Me
//                 </h2>
//                 <p className="text-gray-400 text-lg">My journey and experience</p>
//               </div>
              
//               <div className="max-w-4xl mx-auto">
//                 <div className="relative">
//                   {/* Timeline line */}
//                   <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>
                  
//                   {/* Timeline items */}
//                   <div className="space-y-12">
                    
//                     {/* Education - BCA */}
//                     <div className="relative flex items-center">
//                       <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
//                       <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
//                         <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                           <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30 mb-3">
//                             2022
//                           </span>
//                           <h3 className="text-xl font-bold mb-2 text-white">Bachelor of Computer Applications</h3>
//                           <p className="text-gray-400">Aryan College, Ajmer</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Education - MCA */}
//                     <div className="relative flex items-center md:flex-row-reverse">
//                       <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
//                       <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
//                         <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                           <span className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30 mb-3">
//                             2024
//                           </span>
//                           <h3 className="text-xl font-bold mb-2 text-white">Master of Computer Applications</h3>
//                           <p className="text-gray-400">PES University, Bangalore</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Professional Experience - Tigbar */}
//                     <div className="relative flex items-center">
//                       <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
//                       <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
//                         <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                           <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30 mb-3">
//                             Jul 2024 - Dec 2024
//                           </span>
//                           <h3 className="text-xl font-bold mb-2 text-cyan-400">Software Developer Intern</h3>
//                           <p className="text-white font-semibold mb-3">Tigbar (Remote)</p>
//                           <ul className="space-y-2 text-gray-400">
//                             <li className="flex items-start gap-2">
//                               <span className="text-cyan-400 mt-1">▹</span>
//                               <span>Worked on cross-platform app development using React Native</span>
//                             </li>
//                             <li className="flex items-start gap-2">
//                               <span className="text-cyan-400 mt-1">▹</span>
//                               <span>Collaborated with teams using Agile methodologies and Jira</span>
//                             </li>
//                             <li className="flex items-start gap-2">
//                               <span className="text-cyan-400 mt-1">▹</span>
//                               <span>Utilized Redux Toolkit for efficient state management</span>
//                             </li>
//                             <li className="flex items-start gap-2">
//                               <span className="text-cyan-400 mt-1">▹</span>
//                               <span>Used GitHub for version control and seamless code integration</span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Current Position - Grofo */}
//                     <div className="relative flex items-center md:flex-row-reverse">
//                       <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10 animate-pulse"></div>
//                       <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
//                         <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-6 shadow-lg shadow-cyan-500/20">
//                           <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-500/50 mb-3">
//                             Jan 2025 - Present
//                           </span>
//                           <h3 className="text-xl font-bold mb-2 text-cyan-400">Front-End Developer</h3>
//                           <p className="text-white font-semibold mb-3">Grofo (Remote)</p>
//                           <ul className="space-y-2 text-gray-300">
//                             <li className="flex items-start gap-2">
//                               <span className="text-cyan-400 mt-1">▹</span>
//                               <span>Developing comprehensive CRM solutions for chemical companies using React.js</span>
//                             </li>
//                             <li className="flex items-start gap-2">
//                               <span className="text-cyan-400 mt-1">▹</span>
//                               <span>Creating user-centered interfaces in Figma with focus on client satisfaction</span>
//                             </li>
//                             <li className="flex items-start gap-2">
//                               <span className="text-cyan-400 mt-1">▹</span>
//                               <span>Managing complete development lifecycle from requirements to deployment</span>
//                             </li>
//                             <li className="flex items-start gap-2">
//                               <span className="text-cyan-400 mt-1">▹</span>
//                               <span>Building responsive web applications using modern technologies</span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </section>
//       </main>
//       <footer className="bg-black border-t border-gray-800">
//         <div className="container m-auto px-6 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-center md:text-left">
//               <p className="text-gray-400 text-sm">
//                 © 2024 Shivam Parashar. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Built with React & Tailwind CSS
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <a
//                 href="https://github.com/shivamparashar30"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group"
//               >
//                 <div className="w-10 h-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <img src={Github} className="w-5 h-5 group-hover:scale-110 transition-transform" alt="GitHub" />
//                 </div>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/shivamparashar30/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group"
//               >
//                 <div className="w-10 h-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20">
//                   <img src={LinkedIn} className="w-5 h-5 group-hover:scale-110 transition-transform" alt="LinkedIn" />
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//         {scrolling && (
//           <div className="fixed bottom-8 right-8 z-50">
//             <button
//               className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110"
//               onClick={() => {
//                 window.scrollTo(0, 0);
//               }}
//               aria-label="Scroll to top"
//             >
//               <img src={ArrowDown} className="w-6 h-6 rotate-180" alt="Scroll to top" />
//             </button>
//           </div>
//         )}
//       </footer>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Profile from "./assets/Photo.png";
import Project1 from "./assets/img1.png";
import Project2 from "./assets/img2.png";
import Project3 from "./assets/img3.png";
import Project4 from "./assets/img4.png";
import Project5 from "./assets/img5.png";
import Project6 from "./assets/img6.png";
import Project7 from "./assets/img7.png";
import LinkedIn from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50">
        <div className="container m-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Shivam Parashar
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex gap-8">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300 font-medium"
                  >
                    About
                  </a>
                </li>
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
              <li>
                <a
                  href="#home"
                  onClick={closeMobileMenu}
                  className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={closeMobileMenu}
                  className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  onClick={closeMobileMenu}
                  className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#aboutme"
                  onClick={closeMobileMenu}
                  className="block text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="pt-20">
        {/* Intro/banner section */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
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
                <h2 className="font-bold text-2xl md:text-4xl text-gray-300 animate-fade-in-up animation-delay-400">
                  React Native Developer
                </h2>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-600">
                  I am a skilled React Native Developer specializing in creating
                  efficient, user-friendly mobile applications with a focus on
                  community engagement and cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-800">
                  <a
                    href="#projects"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover-tilt hover:scale-105 active:scale-95 text-center"
                  >
                    View My Work
                  </a>
                  <a
                    href="#aboutme"
                    className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl font-semibold text-white transition-all duration-500 hover:bg-gray-800 hover-tilt text-center"
                  >
                    About Me
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
                  <div className="profile-3d">
                    <img
                      className="relative rounded-full border-4 border-cyan-500/30 w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl shadow-cyan-500/20 transition-all duration-700 hover:border-cyan-400/50 hover:shadow-cyan-400/40"
                      src={Profile}
                      alt="Shivam Parashar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* projects */}
        <section id="projects" className="py-12 md:py-20 bg-black perspective-section">
          <div className="container m-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
              Featured Projects
            </h2>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
              
              {/* Project 1 - All In One Donation App */}
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up">
                <div className="relative overflow-hidden h-48 md:h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    src={Project1}
                    alt="All In One Donation App"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                    All In One Donation App
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    Streamlines donations using React Native, MongoDB, Node.js and Express.js.
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">MongoDB</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Node.js</span>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/shivamparashar30/AIOD-FrontEnd")
                    }
                    className="w-full py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
                  >
                    View Project →
                  </button>
                </div>
              </div>

              {/* Project 2 - Furniture Ecommerce */}
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-200">
                <div className="relative overflow-hidden h-48 md:h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    src={Project2}
                    alt="Furniture Ecommerce"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                    Furniture Ecommerce
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    Furniture E-commerce Store, built with React Native, MongoDB, Node.js and Express.js.
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">MongoDB</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Express.js</span>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/shivamparashar30/FurnitureApp-FrontEnd")
                    }
                    className="w-full py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
                  >
                    View Project →
                  </button>
                </div>
              </div>

             

              {/* Project 4 - Food Ordering App */}
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-600">
                <div className="relative overflow-hidden h-48 md:h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    src={Project3}
                    alt="Food Ordering App"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                    Food Ordering App
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    Food Ordering App using React Native and MongoDB.
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">MongoDB</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Node.js</span>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/shivamparashar30/Food-order-app")
                    }
                    className="w-full py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
                  >
                    View Project →
                  </button>
                </div>
              </div>

              {/* Project 5 - AI Skill Scan */}
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-800">
                <div className="relative overflow-hidden h-48 md:h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    src={Project4}
                    alt="AI Skill Scan"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                    AI Skill Scan
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    AI-powered skill assessment platform built with React Native, MongoDB, Node.js and Express.js.
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">AI</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">MongoDB</span>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/shivamparashar30/ai-skill-scan-main")
                    }
                    className="w-full py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
                  >
                    View Project →
                  </button>
                </div>
              </div>

              {/* Project 6 - Movie Ticket Booking App */}
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-1000">
                <div className="relative overflow-hidden h-48 md:h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    src={Project5}
                    alt="Movie Ticket Booking App"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                    Movie Ticket Booking App
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    Complete movie ticket booking solution with React Native, MongoDB, Node.js and Express.js.
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">MongoDB</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Express.js</span>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/shivamparashar30/Movie-Ticket-Booking-App")
                    }
                    className="w-full py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
                  >
                    View Project →
                  </button>
                </div>
              </div>

              {/* Project 7 - Admin DB */}
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-1200">
                <div className="relative overflow-hidden h-48 md:h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    src={Project6}
                    alt="Admin DB"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                    Admin DB
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    Comprehensive admin dashboard for database management built with React.js.
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React.js</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">Dashboard</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">Database</span>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/shivamparashar30/Admin-Dashboard")
                    }
                    className="w-full py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
                  >
                    View Project →
                  </button>
                </div>
              </div>

              {/* Project 8 - Body Fat Calculator App */}
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 card-3d animate-fade-in-up animation-delay-1400">
                <div className="relative overflow-hidden h-48 md:h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    src={Project7}
                    alt="Body Fat Calculator App"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                    Body Fat Calculator App
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    AI-powered body fat percentage calculator using React Native and TensorFlow for accurate predictions.
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">React Native</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover-lift transition-all duration-300">TensorFlow</span>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover-lift transition-all duration-300">AI/ML</span>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/shivamparashar30/Body-Fat-Calculator")
                    }
                    className="w-full py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 active:scale-95 hover-tilt"
                  >
                    View Project →
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Technologies */}
          <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black" id="technologies">
            <div className="container m-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Skills & Technologies
                </h2>
                <p className="text-gray-400 text-lg">Technologies I work with</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                
                {/* Skill Card 1 - HTML */}
                <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">HTML</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">Advanced</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '100%'}}></div>
                  </div>
                </div>

                {/* Skill Card 2 - CSS */}
                <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">CSS, Bootstrap & Tailwind</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">Proficient</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '95%'}}></div>
                  </div>
                </div>

                {/* Skill Card 3 - Programming Languages */}
                <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">JavaScript, Java, C++, Python</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">Proficient</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '95%'}}></div>
                  </div>
                </div>

                {/* Skill Card 4 - UI Design */}
                <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">UI Design in Figma</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">Advanced</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '100%'}}></div>
                  </div>
                </div>

                {/* Skill Card 5 - React Native */}
                <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">React Native</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">Advanced</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '100%'}}></div>
                  </div>
                </div>

                {/* Skill Card 6 - React Js */}
                <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">React.js</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">Proficient</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '90%'}}></div>
                  </div>
                </div>

                {/* Skill Card 7 - MongoDB */}
                <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">MongoDB</h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30">Intermediate</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '75%'}}></div>
                  </div>
                </div>

                {/* Skill Card 8 - Express Js */}
                <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Express.js</h3>
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-semibold border border-gray-500/30">Beginner</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-transform duration-1000 ease-out" style={{width: '50%'}}></div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Additional skills section */}
          <section className="py-20 bg-black">
            <div className="container m-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Additional Skills & Tools
                </h2>
                <p className="text-gray-400 text-lg">Tools and technologies I use daily</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                    Git
                  </p>
                </div>
                <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                    Github
                  </p>
                </div>
                <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                    VS Code
                  </p>
                </div>
                <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                    Postman
                  </p>
                </div>
                <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                    Teamwork
                  </p>
                </div>
                <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                    Quick Learning
                  </p>
                </div>
                <div className="group px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                    Engagement
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black" id="aboutme">
            <div className="container m-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-gray-400 text-lg">My journey and experience</p>
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
                            2022
                          </span>
                          <h3 className="text-xl font-bold mb-2 text-white">Bachelor of Computer Applications</h3>
                          <p className="text-gray-400">Aryan College, Ajmer</p>
                        </div>
                      </div>
                    </div>

                    {/* Education - MCA */}
                    <div className="relative flex items-center md:flex-row-reverse">
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
                      <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                          <span className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30 mb-3">
                            2024
                          </span>
                          <h3 className="text-xl font-bold mb-2 text-white">Master of Computer Applications</h3>
                          <p className="text-gray-400">PES University, Bangalore</p>
                        </div>
                      </div>
                    </div>

                    {/* Professional Experience - Tigbar */}
                    <div className="relative flex items-center">
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
                      <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                          <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30 mb-3">
                            Jul 2024 - Dec 2024
                          </span>
                          <h3 className="text-xl font-bold mb-2 text-cyan-400">Software Developer Intern</h3>
                          <p className="text-white font-semibold mb-3">Tigbar (Remote)</p>
                          <ul className="space-y-2 text-gray-400">
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Worked on cross-platform app development using React Native</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Collaborated with teams using Agile methodologies and Jira</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Utilized Redux Toolkit for efficient state management</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Used GitHub for version control and seamless code integration</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Current Position - Grofo */}
                    <div className="relative flex items-center md:flex-row-reverse">
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10 animate-pulse"></div>
                      <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-6 shadow-lg shadow-cyan-500/20">
                          <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-500/50 mb-3">
                            Jan 2025 - Present
                          </span>
                          <h3 className="text-xl font-bold mb-2 text-cyan-400">Front-End Developer</h3>
                          <p className="text-white font-semibold mb-3">Grofo (Remote)</p>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Developing comprehensive CRM solutions for chemical companies using React.js</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Creating user-centered interfaces in Figma with focus on client satisfaction</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Managing complete development lifecycle from requirements to deployment</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>Building responsive web applications using modern technologies</span>
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
      <footer className="bg-black border-t border-gray-800">
        <div className="container m-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Shivam Parashar. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React & Tailwind CSS
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/shivamparashar30"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20">
                  <img src={Github} className="w-5 h-5 group-hover:scale-110 transition-transform" alt="GitHub" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/shivamparashar30/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20">
                  <img src={LinkedIn} className="w-5 h-5 group-hover:scale-110 transition-transform" alt="LinkedIn" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {scrolling && (
          <div className="fixed bottom-8 right-8 z-50">
            <button
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              aria-label="Scroll to top"
            >
              <img src={ArrowDown} className="w-6 h-6 rotate-180" alt="Scroll to top" />
            </button>
          </div>
        )}
      </footer>
    </>
  );
}

export default App;