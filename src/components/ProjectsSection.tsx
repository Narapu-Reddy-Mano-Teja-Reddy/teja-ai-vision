
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  achievement: string;
  impact: string;
  link?: string;
};

type ProjectsSectionProps = { projects: Project[] };

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
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
  );
}
