
import { ArrowRight, Download, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  scrollToSection: (id: string) => void;
  handleEmailClick: () => void;
};

export default function HeroSection({ scrollToSection, handleEmailClick }: HeroSectionProps) {
  return (
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
  );
}
