import React, { useState } from "react";
// --- ICONS (Lucide for generic UI) ---
import { 
  Linkedin, 
  Mail, 
  Download, 
  Menu, 
  X,
  Code,       
  Database,    
  Lightbulb,   
  Users,       
  ClipboardList,
  ExternalLink,
  Atom,       
  Github as GithubUI
} from "lucide-react";

// --- ICONS (React Icons for Brand Logos) ---
import { FaPython, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiHtml5, SiCss3, SiFigma, SiPostgresql } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- FUNCTION: Smooth Scroll ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // --- DATA: Projects ---
  const projectItems = [
    {
      title: "FGO Servants Database",
      desc: "A responsive character database for Fate/Grand Order players. Features real-time search, class filtering, and detailed stat displays.",
      tech: ["React", "CSS", "API"],
      link: "https://github.com/SensXation/Fgo-Servants",
      liveDemo: "https://sensxation.github.io/Fgo-Servants/",
      image: "/Portfolio/Fgoimage.png", 
      color: "bg-gradient-to-br from-blue-900 to-black" 
    },
    {
      title: "IHSG Automation Pipeline",
      desc: "Fully automated ETL system that scrapes daily stock data, validates quality, and stores it in a cloud PostgreSQL database without manual intervention.",
      tech: ["Python", "GitHub Actions", "Supabase", "Streamlit"],
      link: "https://github.com/SensXation/ihsg-automation",
      liveDemo: "#",
      image: "/Portfolio/IHSGimage.png", 
      color: "bg-gradient-to-br from-green-900 to-black"
    },
    {
      title: "Olist E-Commerce Analysis",
      desc: "Comprehensive business intelligence project analyzing Brazilian e-commerce trends. Utilized complex SQL joins to clean data and built interactive dashboards.",
      tech: ["SQL", "Python", "Looker Studio"],
      link: "https://github.com/SensXation/olist-ecommerce-analysis",
      liveDemo: "#",
      image: "/Portfolio/Olistimage.png", 
      color: "bg-gradient-to-br from-purple-900 to-black"
    }
  ];

  // --- DATA: About Me ---
  const aboutItems = [
    {
      title: "Web Development",
      desc: "Building clean, responsive, and functional websites using modern frameworks like React and Tailwind CSS.",
      icon: <Code size={32} className="text-blue-400" />
    },
    {
      title: "Database Management",
      desc: "Designing efficient schemas, optimizing SQL queries, and managing secure data storage systems.",
      icon: <Database size={32} className="text-green-400" />
    },
    {
      title: "Problem Solving",
      desc: "Analyzing complex technical challenges and developing logical, efficient, and scalable solutions.",
      icon: <Lightbulb size={32} className="text-yellow-400" />
    },
    {
      title: "Team Collaboration",
      desc: "Working effectively with peers to brainstorm ideas, align on goals, and build better software together.",
      icon: <Users size={32} className="text-purple-400" />
    },
    {
      title: "Project Management",
      desc: "Organizing workflows, tracking progress, and managing timelines to ensure timely project delivery.",
      icon: <ClipboardList size={32} className="text-red-400" />
    }
  ];

  // --- DATA: Technical Skills ---
  const skillItems = [
    {
      title: "Python",
      desc: "Versatile language for backend logic, data analysis, and automation scripts.",
      icon: <FaPython size={32} className="text-[#3776AB]" /> 
    },
    {
      title: "HTML & CSS",
      desc: "The structural foundation of the web, focused on semantic markup and responsive styling.",
      icon: (
        <div className="flex gap-2 justify-center">
          <SiHtml5 size={32} className="text-[#E34F26]" />
          <SiCss3 size={32} className="text-[#1572B6]" />
        </div>
      )
    },
    {
      title: "JavaScript",
      desc: "Adding interactivity, dynamic behavior, and logic to web applications.",
      icon: <DiJavascript1 size={32} className="text-[#F7DF1E]" />
    },
    {
      title: "SQL / DB",
      desc: "Querying, managing, and optimizing relational databases efficiently.",
      icon: <SiPostgresql size={32} className="text-[#4169E1]" />
    },
    {
      title: "React.js",
      desc: "Building efficient, component-based user interfaces with state management.",
      icon: <Atom size={32} className="text-[#61DAFB]" />
    },
    {
      title: "Bootstrap",
      desc: "Rapidly designing responsive layouts using pre-built components and grid systems.",
      icon: <FaBootstrap size={32} className="text-[#7952B3]" />
    },
    {
      title: "Figma",
      desc: "Designing user interfaces, wireframes, and prototypes before coding.",
      icon: <SiFigma size={32} className="text-[#F24E1E]" />
    },
    {
      title: "GitHub",
      desc: "Collaborating on code, managing versions, and deploying projects.",
      icon: <FaGithub size={32} className="text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-white selection:text-black">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/5">
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <h1 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-serif font-bold tracking-widest cursor-pointer hover:text-gray-300 transition"
          >
            WRP
          </h1>
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-400 items-center">
            <li onClick={() => scrollToSection('about')} className="hover:text-white transition duration-300 cursor-pointer">About</li>
            <li onClick={() => scrollToSection('projects')} className="hover:text-white transition duration-300 cursor-pointer">Projects</li>
            <li onClick={() => scrollToSection('skills')} className="hover:text-white transition duration-300 cursor-pointer">Skills</li>
            <li onClick={() => scrollToSection('contact')} className="hover:text-white transition duration-300 cursor-pointer">Contact</li>
          </ul>
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black absolute w-full border-t border-gray-800 shadow-xl">
            <ul className="flex flex-col p-6 space-y-4 text-center text-gray-400">
              <li onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer py-2">About</li>
              <li onClick={() => scrollToSection('projects')} className="hover:text-white cursor-pointer py-2">Projects</li>
              <li onClick={() => scrollToSection('skills')} className="hover:text-white cursor-pointer py-2">Skills</li>
              <li className="pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-5 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition"
                >
                  Let's Work Together
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Willsen Ricky Pratama.
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Computer Science student at BINUS University specializing in <span className="text-white font-medium underline decoration-gray-600 underline-offset-4">Database Technology</span>. 
            Deeply interested in data management and system optimization. I’m a fast learner who enjoys experimenting with new tech to build <span className="text-white font-medium underline decoration-gray-600 underline-offset-4">real-world solutions</span>.
          </p>
          <div className="flex justify-center pt-4">
            {/* --- UPDATE: CV DOWNLOAD BUTTON --- */}
            <a 
              href="/Portfolio/cv.pdf" 
              download="Willsen_Ricky_Pratama_CV.pdf"
              className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300 hover:scale-105"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
          <div className="flex justify-center gap-8 pt-8">
            <a href="mailto:Willsen.pratama@binus.ac.id" className="text-gray-500 hover:text-white transition duration-300 hover:scale-110"><Mail size={28} /></a>
            <a href="https://www.linkedin.com/in/willsenricky/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] transition duration-300 hover:scale-110"><Linkedin size={28} /></a>
            <a href="https://github.com/SensXation" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition duration-300 hover:scale-110"><GithubUI size={28} /></a>
          </div>
        </div>
      </header>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <h3 className="text-3xl font-bold text-white relative after:content-[''] after:block after:w-full after:h-1 after:bg-white after:mt-2">About Me</h3>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-gray-400 text-lg leading-loose">
              I am a Computer Science student at BINUS University Alam Sutera, specializing in <span className="text-white font-medium">Database Technology</span>. 
              I am passionate about exploring new technologies, honing my technical skills, and applying them to build useful, scalable projects. 
              <br /><br />
              While I focus heavily on technical growth, I am also deeply committed to personal development. 
              I thrive on solving complex problems and I look forward to leveraging my skills to contribute effectively in future professional endeavors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutItems.map((item, index) => (
              <div key={index} className="group p-8 bg-[#0a0a0a] border border-white/10 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5">
                <div className="mb-6 inline-block p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white inline-block relative after:content-[''] after:block after:w-full after:h-1 after:bg-white after:mt-2">
              My Projects
            </h3>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A showcase of my technical journey,showcasing my skills in web development and database management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectItems.map((project, index) => (
              <div key={index} className="bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 group">
                <div className={`h-64 relative overflow-hidden ${!project.image && project.color} flex items-center justify-center`}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <span className="text-white/20 text-4xl font-bold uppercase tracking-widest px-4 text-center">{project.title.split(" ")[0]}</span>
                  )}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white hover:text-black transition flex items-center gap-2">
                      View Project <ExternalLink size={16} />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition">
                      <GithubUI size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-900/30 border border-blue-500/30 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white inline-block relative after:content-[''] after:block after:w-full after:h-1 after:bg-white after:mt-2">
              Technical Skills
            </h3>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of languages, frameworks, and technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {skillItems.map((skill, index) => (
              <div key={index} className="group p-6 bg-black border border-white/10 rounded-2xl hover:border-white transition-all duration-300 hover:-translate-y-2">
                <div className="mb-4 inline-block p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-[#050505] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              I am actively seeking internship opportunities. 
              If you have an opportunity in mind, Feel free to reach out through the form below or via my email/social links!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Email Card */}
            <a href="mailto:Willsen.pratama@binus.ac.id" className="group p-8 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="mb-4 inline-block p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition">
                <Mail size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Email</h4>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 transition">Get in touch via email</p>
            </a>

            {/* 2. LinkedIn Card */}
            <a href="https://www.linkedin.com/in/willsenricky/" target="_blank" rel="noopener noreferrer" className="group p-8 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="mb-4 inline-block p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition">
                <Linkedin size={32} className="text-[#0077b5]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">LinkedIn</h4>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 transition">Connect professionally</p>
            </a>

            {/* 3. GitHub Card */}
            <a href="https://github.com/SensXation" target="_blank" rel="noopener noreferrer" className="group p-8 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="mb-4 inline-block p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition">
                <GithubUI size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">GitHub</h4>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 transition">Check out my code</p>
            </a>
          </div>

          <div className="text-center mt-24 border-t border-white/5 pt-8">
             <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Willsen Ricky Pratama. All rights reserved.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default App;