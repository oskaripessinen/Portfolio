import { Project } from "@/data/projectData";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { Loader } from "lucide-react";

import priceFinderDemo from "../assets/project2.mp4";
import stockTrackerDemo from "../assets/project1.mp4";

import proj4_img4 from "../assets/IMG_0102.png"
import proj4_img3 from "../assets/IMG_0103.png"
import proj4_img1 from "../assets/IMG_0104.png"
import proj4_img2 from "../assets/IMG_0105.png"
import proj4_img7 from "../assets/IMG_0106.png"
import proj4_img6 from "../assets/IMG_0107.png"
import proj4_img8 from "../assets/IMG_0108.png"
import proj4_img5 from "../assets/IMG_0109.png"

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageIndex, setImageIndex] = useState(0); // ShareFlow galleria
  
  useEffect(() => {
    if (!showDemoModal) {
      setIsVideoLoading(true);
    }
  }, [showDemoModal]);


  const getDemoVideo = () => {
    if (index === 3) return priceFinderDemo;
    if (index === 2) return stockTrackerDemo;
    return null;
  };

  // ShareFlow-kuvat (index === 0)
  const getDemoImages = () => {
    if (index === 0) {
      return [
        proj4_img1,
        proj4_img2,
        proj4_img3,
        proj4_img4,
        proj4_img5,
        proj4_img6,
        proj4_img7,
        proj4_img8,
      ];
    }
    return [];
  };

  const getVideoDimensions = () => {
    if (index === 2) {
      return {
        width: "w-[270px]",
        height: "h-[550px]",
      };
    } else if (index === 3) {
      return {
        width: "w-[270px]",
        height: "h-[480px]",
      };
    } else if (index === 0) {
      return {
        width: "w-[220px]",
        height: "h-[480px]",
      }
    }
    
    return {
      width: "w-full",
      height: "w-full",
      
    };
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    if (index === 3 || index === 2 || index === 0) {
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
  const images = getDemoImages();
  const isShareFlow = index === 0;

  return (
    <>
      <Card className="overflow-hidden bg-gray-900 animate-slide-up flex rounded-[1.4rem] flex-col gap-0" style={{ animationDelay: `${index * 0.1}s` }}>
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
          <div className="flex flex-wrap gap-2 mb-4 justify-start items-center">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">
                {tech}
              </Badge>
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
                {index === 2 || index === 3 || index === 0 ? (
                  <Play className="mr-0 h-4 w-4" />
                ) : (
                  <ExternalLink className="mr-0 h-4 w-4" />
                )}
                <span className="text-[12px]">Demo</span>
              </a>
            </Button>
          )}
          {project.githubLink && project.demoLink ? (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-0 h-4 w-4" />
                <span className="text-[12px]">
                  Github
                </span>
              </a>
            </Button>
          ) : 
          <Button variant="outline" size="sm" className="min-w-full py-4 mx-auto" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-0 h-4 w-4" />
                <span className="text-[12px]">
                  Github
                </span>
              </a>
            </Button>
          }
        </CardFooter>
      </Card>

      <Modal
        open={showDemoModal}
        onClose={() => handleModalOpen(false)}
        title={`${project.title} Demo`}
        contentClassName="max-w-[320px] w-auto !rounded-2xl items-center justify-center"
      >
          {isShareFlow ? (
            <div className="relative mt-2 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center flex-row">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() =>
                    setImageIndex((prev) => (prev - 1 + images.length) % images.length)
                  }
                  className="mr-2 text-white p-1 rounded-full"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>

                <div className={`relative ${width} ${height} overflow-hidden flex items-center justify-center mx-auto`}>
                  <img
                    src={images[imageIndex]}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                    className="h-full w-full rounded-lg"
                  />
                </div>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setImageIndex((prev) => (prev + 1) % images.length)}
                  className="ml-2 text-white p-1 rounded-full"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </div>

              <div className="mt-5 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => setImageIndex(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${i === imageIndex ? "bg-primary" : "bg-gray-600"}`}
                  />
                ))}
              </div>
            </div>
          ) : (
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
          )}
      </Modal>
    </>
  );
};

export default ProjectCard;
