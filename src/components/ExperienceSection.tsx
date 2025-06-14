
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Award, Zap, Target, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
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
  );
}
