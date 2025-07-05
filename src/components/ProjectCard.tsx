import { Project } from "@/data/projectData";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader } from "lucide-react";

// Import your demo videos
import priceFinderDemo from "../assets/project2.mp4";
import stockTrackerDemo from "../assets/project1.mp4";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (!showDemoModal) {
      setIsVideoLoading(true);
    }
  }, [showDemoModal]);


  const getDemoVideo = () => {
    if (index === 2) return priceFinderDemo;
    if (index === 1) return stockTrackerDemo;
    return null;
  };


  const getVideoDimensions = () => {
    if (index === 1) {
      return {
        width: "w-[270px]",
        height: "h-[550px]",
      };
    } else if (index === 2) {
      return {
        width: "w-[270px]",
        height: "h-[480px]",
      };
    }
    
    return {
      width: "w-full",
      height: "w-full",
      
    };
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    if (index === 2 || index === 1) {
      e.preventDefault();
      setShowDemoModal(true);
    }
  };

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
  };

  const handleModalOpen = (open: boolean) => {
    setShowDemoModal(open);
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const { height, width } = getVideoDimensions();

  return (
    <>
      <Card className="overflow-hidden bg-gray-900 animate-slide-up flex rounded-xl flex-col gap-0" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="aspect-video w-full overflow-hidden bg-gray-900">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-150"
          />
        </div>
        <CardHeader className="min-h-[130px] flex flex-col justify-start m-0">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <span className="text-xs text-gray-600 font-light">{project.Notice}</span>
        </CardHeader>
        <CardContent className="flex-grow m-0">
          <div className="flex flex-wrap gap-2 justify-start items-start ">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex justify-between">
          {project.demoLink && (
            <Button variant="default" size="sm" asChild>
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleDemoClick}
              >
                {index === 2 || index === 1 ? (
                  <Play className="mr-0 h-4 w-4" />
                ) : (
                  <ExternalLink className="mr-0 h-4 w-4" />
                )}
                <span className="text-[12px]">Demo</span>
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-0 h-4 w-4" />
                <span className="text-[12px]">
                  Github
                </span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>

      <Dialog open={showDemoModal} onOpenChange={handleModalOpen}>
        <DialogContent className="max-w-[320px] !rounded-2xl">
          <DialogHeader>
            <DialogTitle>{project.title} Demo</DialogTitle>
          </DialogHeader>
          <div className={`overflow-hidden mt-2 relative`}>
            {isVideoLoading && (
              <div className={`absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10 rounded-xl ${width} ${height}`}>
                <div className="flex flex-col items-center">
                  <Loader className="h-8 w-8 animate-spin text-primary" />
                </div>
              </div>
            )}
            <video 
              ref={videoRef}
              src={getDemoVideo()} 
              controls
              preload="auto"
              autoPlay
              onCanPlay={handleVideoCanPlay}
              onLoadedData={handleVideoCanPlay}
              className={`${height} ${width} object-contain rounded-xl transition-opacity duration-300 ${isVideoLoading ? "opacity-0" : "opacity-100"}`}
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
