import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {


  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white justify-center flex flex-col w-full">
      <div className="container-section">
        <h2 data-reveal className="section-title m-0 text-center text-white">Contact Me</h2>
        <h3 data-reveal className="text-center text-slate-300 mt-3 text-lg">Feel free to reach out or connect on linkedin</h3>

        <div className="flex flex-col items-center justify-center mt-6">
          <div className="flex flex-col items-center animate-fade-in">
            <div className="space-y-1">
                <Button onClick={() => window.open('mailto:oskari.pessinen@gmail.com')} variant="outline" size="lg" className="rounded-3xl">
                  <div className="">
                    <Mail size={30} className="!h-6 !w-6 mr-2 text-blue-400" />
                  </div>
                  <div data-reveal>
                    <p className="text-lg text-slate-300">oskari.pessinen@gmail.com</p>
                  </div>
              </Button>
            </div>
            <div className="mt-8">
              <div data-reveal className="flex flex-row space-x-4">
                <Button onClick={() => window.open('https://www.linkedin.com/in/oskari-pessinen-6114582a6/')} variant="secondary" size="icon" className="rounded-full" aria-label="LinkedIn">
                  <Linkedin className="!h-4 !w-4" />
                </Button>
                <Button onClick={() => window.open('https://github.com/oskaripessinen')} variant="secondary" size="icon" className="rounded-full" aria-label="Github">
                  <Github className="!h-4 !w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
