
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
    { name: "Power BI", level: 82, category: "Analytics" }
  ];

  const projects = [
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
    "Full Stack Web Development"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mano Teja Reddy
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                MT
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Engineer
                </span>
                <br />
                <span className="text-gray-700">& Entrepreneur</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Computer Science student at Siddharth Institute, Founder of TENSPICK, and aspiring AI professional 
                currently interning at Infosys Springboard. Passionate about building innovative AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
                >
                  Download Resume <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a Computer Science undergraduate at Siddharth Institute and Founder of TENSPICK, 
                I'm driven by a passion for AI innovation and building real-world solutions that make a difference.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey combines technical excellence with entrepreneurial vision. From winning the ISTE first prize 
                for my pothole detection system to leading hackathon teams, I believe in the power of technology 
                to solve complex problems.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a strong spiritual foundation and disciplined approach to continuous learning, 
                I share my knowledge through daily certificate showcases and project demonstrations, 
                inspiring others in the AI community.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/mano-teja-reddy-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/Narapu-Reddy-Mano-Teja-Reddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Trophy className="h-12 w-12 mx-auto text-yellow-600" />
                  <CardTitle className="text-lg">Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">ISTE First Prize, District Elocution 2nd Prize</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Briefcase className="h-12 w-12 mx-auto text-blue-600" />
                  <CardTitle className="text-lg">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Infosys Springboard AI Intern</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <GraduationCap className="h-12 w-12 mx-auto text-green-600" />
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">CSE at Siddharth Institute</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-12 w-12 mx-auto text-purple-600" />
                  <CardTitle className="text-lg">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Global AI Entrepreneur</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive skill set spanning frontend development, backend systems, databases, and cutting-edge AI technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {['Frontend', 'Backend', 'Database', 'AI/ML', 'Programming', 'Analytics'].map((category) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {category === 'Frontend' && <Code className="h-5 w-5 mr-2 text-blue-600" />}
                    {category === 'Backend' && <Zap className="h-5 w-5 mr-2 text-green-600" />}
                    {category === 'Database' && <Database className="h-5 w-5 mr-2 text-orange-600" />}
                    {category === 'AI/ML' && <Brain className="h-5 w-5 mr-2 text-purple-600" />}
                    {category === 'Programming' && <Code className="h-5 w-5 mr-2 text-red-600" />}
                    {category === 'Analytics' && <Award className="h-5 w-5 mr-2 text-yellow-600" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions that showcase my technical expertise and problem-solving abilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  </div>
                  <Badge variant="outline" className="w-fit text-green-700 border-green-700">
                    {project.achievement}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Impact:</p>
                    <p className="text-sm text-gray-600">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
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
      <section id="experience" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-blue-600">AI Intern - Infosys Springboard</CardTitle>
                    <CardDescription className="text-gray-600">Current Position</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-blue-700 border-blue-700">Ongoing</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specializing in cutting-edge AI technologies including Natural Language Processing, 
                  Computer Vision, and Generative AI. Developing practical AI solutions and gaining 
                  hands-on experience with industry-standard tools and frameworks.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Brain className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <p className="text-sm font-medium">NLP Specialization</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Award className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-sm font-medium">Computer Vision</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Zap className="h-8 w-8 mx-auto text-green-600 mb-2" />
                    <p className="text-sm font-medium">Generative AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Founder - TENSPICK</CardTitle>
                <CardDescription className="text-gray-600">Entrepreneurial Journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Founded TENSPICK with a vision to create innovative AI-powered solutions for businesses. 
                  Leading the development of scalable platforms and building a team of passionate developers 
                  focused on solving real-world problems through technology.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Target className="h-4 w-4 mr-1" />
                    Vision: Global AI Impact
                  </span>
                  <span className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Focus: Business Solutions
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on innovative AI projects or discuss the future of technology? 
              Let's build something amazing together.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                    <a 
                      href="https://www.linkedin.com/in/mano-teja-reddy-" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
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
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Future Vision</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey toward global entrepreneurship through TENSPICK continues to evolve. 
                  I'm committed to creating AI solutions that make a meaningful impact on society 
                  while fostering innovation and collaboration in the tech community.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
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
