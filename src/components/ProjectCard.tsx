import { Project } from "@/data/projectData";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Import your demo videos (you might need to adjust the imports based on your setup)
import priceFinderDemo from "../assets/project2.mp4";
import stockTrackerDemo from "../assets/project1.mp4";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Get the appropriate demo video based on project index
  const getDemoVideo = () => {
    if (index === 2) return priceFinderDemo;
    if (index === 1) return stockTrackerDemo;
    return null;
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    // For projects 1 and 2, show modal instead of navigating
    if (index === 2 || index === 1) {
      e.preventDefault();
      setShowDemoModal(true);
    }
    // For project 3 or others, the default link behavior works (opens in new tab)
  };

  return (
    <>
      <Card className="overflow-hidden animate-slide-up flex flex-col h-full" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex justify-between">
          {project.demoLink && (
            <Button variant="outline" size="sm" asChild>
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleDemoClick}
              >
                {index === 2 || index === 1 ? (
                  <Play className="mr-2 h-4 w-4" />
                ) : (
                  <ExternalLink className="mr-2 h-4 w-4" />
                )}
                Demo
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Github
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Demo Video Modal */}
      <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
        <DialogContent className="max-w-[320px] rounded-xl overflow-hidden">
          <DialogHeader>
            <DialogTitle>{project.title} Demo</DialogTitle>
          </DialogHeader>
          <div className="overflow-hidden mt-2">
            <video 
              src={getDemoVideo()} 
              controls 
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
