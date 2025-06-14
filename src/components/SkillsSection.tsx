
import { Code, Zap, Database, Brain, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type Skill = { name: string; level: number; category: string };
type SkillsSectionProps = { skills: Skill[]; certifications: string[] };

export default function SkillsSection({ skills, certifications }: SkillsSectionProps) {
  const cats = ['Frontend', 'Backend', 'Database', 'AI/ML', 'Programming', 'Analytics', 'AI TOOLS'];
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            A comprehensive skill set spanning frontend development, backend systems, databases, and cutting-edge AI technologies
          </p>
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
          {cats.map((category) => (
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
                  {skills.filter(skill => skill.category === category).length === 0 && category === "AI TOOLS"
                    ? <div className="text-gray-400 text-center font-inter text-sm italic">Coming soon</div>
                    : skills.filter(skill => skill.category === category).map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300 font-inter">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))
                  }
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
  );
}
