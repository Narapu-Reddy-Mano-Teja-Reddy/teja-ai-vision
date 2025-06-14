
import { Trophy, Briefcase, GraduationCap, Target, Linkedin, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutSection() {
  return (
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
  );
}
