
import {
  ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, Phone, Award, Code, Database, Brain, Briefcase, GraduationCap, Trophy, Target, Zap
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  // All state/data used in components
  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 88, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "Python", level: 90, category: "AI/ML" },
    { name: "Java", level: 85, category: "Programming" },
    { name: "C", level: 80, category: "Programming" },
    { name: "TensorFlow", level: 75, category: "AI/ML" },
    { name: "OpenCV", level: 78, category: "AI/ML" },
    { name: "Power BI", level: 82, category: "Analytics" },
    { name: "Excel", level: 88, category: "Analytics" },
    // AI Tools
    { name: "Cursor", level: 80, category: "AI TOOLS" },
    { name: "ChatGPT", level: 92, category: "AI TOOLS" },
    { name: "Deepseek", level: 80, category: "AI TOOLS" },
    { name: "GitHub Copilot", level: 88, category: "AI TOOLS" },
    { name: "PyTorch", level: 80, category: "AI TOOLS" },
    { name: "TensorFlow", level: 75, category: "AI TOOLS" },
    { name: "Microsoft Azure AI platform", level: 80, category: "AI TOOLS" },
    { name: "OpenAI Codex", level: 80, category: "AI TOOLS" },
    { name: "BE 10X Generative AI (LetsUpgrade)", level: 85, category: "AI TOOLS" },
  ];
  const projects = [
    {
      title: "Karyamarga",
      description: "First Prize winning project in Studesk Entrepreneurship Competition at Siddharth Institute of Engineering and Technology",
      tech: ["React.js", "Node.js", "Python", "MySQL"],
      achievement: "🏆 Studesk First Prize Winner",
      impact: "Innovative entrepreneurship solution recognized at institutional level"
    },
    {
      title: "Automatic Pothole & Accident Detection",
      description: "ISTE First Prize winning project using smart sensors and ML algorithms for real-time road safety monitoring",
      tech: ["Python", "OpenCV", "TensorFlow", "IoT Sensors"],
      achievement: "🏆 ISTE First Prize Winner",
      impact: "Real-world solution for urban infrastructure safety"
    },
    {
      title: "TENSPICK Platform",
      description: "Founded and developing an innovative AI-powered platform for data science solutions",
      tech: ["React.js", "Node.js", "Python", "MySQL"],
      achievement: "🚀 Startup Founder",
      impact: "Building scalable AI solutions for businesses"
    },
    {
      title: "Teertharaksha",
      description: "A senior citizen temple planner to simplify spiritual journeys for elders. Visit the project: ",
      tech: ["React.js", "AI Tools", "Planning", "Web"],
      achievement: "🌐 Live Project",
      impact: "Helps senior citizens plan temple visits and spiritual trips with ease.",
      link: "https://lnkd.in/e33dbDPT"
    },
    {
      title: "College Hackathon Leadership",
      description: "Led teams in multiple hackathons, coordinating technology stack decisions and project outcomes",
      tech: ["Full Stack", "Team Leadership", "Project Management"],
      achievement: "👥 Team Leader",
      impact: "Mentored junior developers and delivered winning solutions"
    }
  ];
  const certifications = [
    "AI & Machine Learning - Infosys Springboard",
    "Natural Language Processing Specialization",
    "Computer Vision with OpenCV",
    "Generative AI Fundamentals",
    "Data Science with Python",
    "Full Stack Web Development",
    "Java Language Certified by Mind Luster",
    "Python course from Udemy",
    "Java course from Mind Luster"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:tejanarapureddy2@gmail.com';
  };

  // Navigation is preserved here for consistency
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-mono">
              Mano Teja Reddy
            </div>
            <div className="hidden md:flex space-x-8 font-sans">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-cyan-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>
      {/* Page sections */}
      <HeroSection
        scrollToSection={scrollToSection}
        handleEmailClick={handleEmailClick}
      />
      <AboutSection />
      <SkillsSection skills={skills} certifications={certifications} />
      <ProjectsSection projects={projects} />
      <ExperienceSection />
      <ContactSection handleEmailClick={handleEmailClick} />
    </div>
  );
};

export default Index;
