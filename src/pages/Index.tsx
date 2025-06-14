import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, Phone, Award, Code, Database, Brain, Briefcase, GraduationCap, Trophy, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Index = () => {
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
    { name: "Tabnine", level: 80, category: "AI TOOLS" },
    { name: "Hugging Face", level: 85, category: "AI TOOLS" },
    { name: "PyTorch", level: 80, category: "AI TOOLS" },
    { name: "TensorFlow", level: 75, category: "AI TOOLS" },
    { name: "Apache MXNet", level: 70, category: "AI TOOLS" },
    { name: "Microsoft Azure AI platform", level: 80, category: "AI TOOLS" },
    { name: "OpenAI Codex", level: 80, category: "AI TOOLS" },
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
    "Java Language Certified by Mind Luster"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:tejanarapureddy2@gmail.com';
  };

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

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/30">
                <img 
                  src="/lovable-uploads/da5af4b9-ad12-496a-bf47-ed4c65822148.png" 
                  alt="Mano Teja Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Engineer
                </span>
                <br />
                <span className="text-gray-300 font-rajdhani">& Innovator</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
                Computer Science student specializing in AI & Data Science at Siddharth Institute, 
                currently pursuing AI course at Infosys Springboard. Passionate about building innovative AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 font-semibold"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 font-semibold"
                >
                  Download Resume <Download className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 font-semibold"
                  onClick={handleEmailClick}
                >
                  Email Me <Mail className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="font-inter">
              <h3 className="text-2xl font-semibold text-white mb-6 font-rajdhani">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a Computer Science undergraduate specializing in AI & Data Science at Siddharth Institute of Engineering and Technology, Puttur,
                I'm driven by a passion for AI innovation and building real-world solutions that make a difference.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey combines technical excellence with innovative thinking. From winning the ISTE first prize 
                for my pothole detection system to securing first place in the Studesk Entrepreneurship Competition with Karyamarga, 
                I believe in the power of technology to solve complex problems.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Currently pursuing advanced AI courses through Infosys Springboard, I share my knowledge through daily 
                certificate showcases and project demonstrations, inspiring others in the AI community.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/mano-teja-reddy-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/Narapu-Reddy-Mano-Teja-Reddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <Trophy className="h-12 w-12 mx-auto text-yellow-400" />
                  <CardTitle className="text-lg text-white font-rajdhani">Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 font-inter">ISTE First Prize, Studesk Competition Winner</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <Briefcase className="h-12 w-12 mx-auto text-cyan-400" />
                  <CardTitle className="text-lg text-white font-rajdhani">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 font-inter">AI Course - Infosys Springboard</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <GraduationCap className="h-12 w-12 mx-auto text-green-400" />
                  <CardTitle className="text-lg text-white font-rajdhani">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 font-inter">CSE - AI & Data Science, SIET Puttur</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardHeader>
                  <Target className="h-12 w-12 mx-auto text-purple-400" />
                  <CardTitle className="text-lg text-white font-rajdhani">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 font-inter">AI Engineer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              A comprehensive skill set spanning frontend development, backend systems, databases, and cutting-edge AI technologies
            </p>
            {/* Enlarged profile image */}
            <div className="flex justify-center mt-10 mb-0">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl shadow-cyan-400/40">
                <img 
                  src="/lovable-uploads/da5af4b9-ad12-496a-bf47-ed4c65822148.png" 
                  alt="Mano Teja Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {['Frontend', 'Backend', 'Database', 'AI/ML', 'Programming', 'Analytics', 'AI TOOLS'].map((category) => (
              <Card key={category} className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-white font-rajdhani">
                    {category === 'Frontend' && <Code className="h-5 w-5 mr-2 text-cyan-400" />}
                    {category === 'Backend' && <Zap className="h-5 w-5 mr-2 text-green-400" />}
                    {category === 'Database' && <Database className="h-5 w-5 mr-2 text-orange-400" />}
                    {category === 'AI/ML' && <Brain className="h-5 w-5 mr-2 text-purple-400" />}
                    {category === 'Programming' && <Code className="h-5 w-5 mr-2 text-red-400" />}
                    {category === 'Analytics' && <Award className="h-5 w-5 mr-2 text-yellow-400" />}
                    {category === 'AI TOOLS' && <Zap className="h-5 w-5 mr-2 text-blue-400" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).length === 0 && category === "AI TOOLS" ? (
                      <div className="text-gray-400 text-center font-inter text-sm italic">Coming soon</div>
                    ) : (
                      skills.filter(skill => skill.category === category).map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-300 font-inter">{skill.name}</span>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8 font-rajdhani">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="px-4 py-2 text-sm bg-cyan-900 text-cyan-100 hover:bg-cyan-800 font-inter">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              Innovative solutions that showcase my technical expertise and problem-solving abilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-600">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-white font-rajdhani">{project.title}</CardTitle>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5 text-gray-400 hover:text-cyan-400 cursor-pointer" />
                      </a>
                    ) : (
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <Badge variant="outline" className="w-fit text-green-400 border-green-400">
                    {project.achievement}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed font-inter">
                    {project.description}
                    {project.link && (
                      <>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 underline ml-1 break-all"
                        >
                          {project.link}
                        </a>
                      </>
                    )}
                  </CardDescription>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-white mb-2 font-rajdhani">Impact:</p>
                    <p className="text-sm text-gray-300 font-inter">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-purple-900 text-purple-100 font-inter">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Experience & Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 hover:shadow-lg transition-shadow bg-gray-800 border-gray-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-cyan-400 font-rajdhani">AI Course - Infosys Springboard</CardTitle>
                    <CardDescription className="text-gray-300 font-inter">Current Position</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-cyan-400 border-cyan-400">Ongoing</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 font-inter">
                  Specializing in cutting-edge AI technologies including Natural Language Processing, 
                  Computer Vision, and Generative AI. Developing practical AI solutions and gaining 
                  hands-on experience with industry-standard tools and frameworks.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-cyan-900/30 rounded-lg">
                    <Brain className="h-8 w-8 mx-auto text-cyan-400 mb-2" />
                    <p className="text-sm font-medium text-white font-inter">NLP Specialization</p>
                  </div>
                  <div className="text-center p-4 bg-purple-900/30 rounded-lg">
                    <Award className="h-8 w-8 mx-auto text-purple-400 mb-2" />
                    <p className="text-sm font-medium text-white font-inter">Computer Vision</p>
                  </div>
                  <div className="text-center p-4 bg-green-900/30 rounded-lg">
                    <Zap className="h-8 w-8 mx-auto text-green-400 mb-2" />
                    <p className="text-sm font-medium text-white font-inter">Generative AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400 font-rajdhani">Founder - TENSPICK</CardTitle>
                <CardDescription className="text-gray-300 font-inter">Innovation Journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 font-inter">
                  Founded TENSPICK with a vision to create innovative AI-powered solutions for businesses. 
                  Leading the development of scalable platforms and building a team of passionate developers 
                  focused on solving real-world problems through technology.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="flex items-center font-inter">
                    <Target className="h-4 w-4 mr-1" />
                    Vision: AI Solutions
                  </span>
                  <span className="flex items-center font-inter">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Focus: Business Innovation
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              Ready to collaborate on innovative AI projects or discuss the future of technology? 
              Let's build something amazing together.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white font-rajdhani">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-cyan-400" />
                    <button 
                      onClick={handleEmailClick}
                      className="text-gray-300 hover:text-white transition-colors font-inter"
                    >
                      tejanarapureddy2@gmail.com
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="h-6 w-6 text-cyan-400" />
                    <a 
                      href="https://www.linkedin.com/in/mano-teja-reddy-" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors font-inter"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="h-6 w-6 text-gray-400" />
                    <a 
                      href="https://github.com/Narapu-Reddy-Mano-Teja-Reddy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors font-inter"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white font-rajdhani">Future Vision</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-inter">
                  My journey toward becoming a leading AI engineer continues to evolve through TENSPICK and academic pursuits. 
                  I'm committed to creating AI solutions that make a meaningful impact on society 
                  while fostering innovation and collaboration in the tech community.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 font-semibold"
                  onClick={handleEmailClick}
                >
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
