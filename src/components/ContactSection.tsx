
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

type ContactSectionProps = { handleEmailClick: () => void };

export default function ContactSection({ handleEmailClick }: ContactSectionProps) {
  return (
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
  );
}
