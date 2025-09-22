import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white justify-center flex flex-col w-full">
      <div className="container-section">
        <h2 className="section-title text-center text-white">Contact Me</h2>

        <div className="flex flex-col items-center justify-center mt-12">
          <div className="flex flex-col items-center animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 bg-blue-900/30 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400 mt-1">oskari.pessinen@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 bg-blue-900/30 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400 mt-1">Turku, Finland</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-row space-x-4">
                <Button onClick={() => window.open('https://www.linkedin.com/in/oskari-pessinen-6114582a6/')} variant="secondary" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-700" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button onClick={() => window.open('https://github.com/oskaripessinen')} variant="secondary" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-700" aria-label="Github">
                  <Github className="h-5 w-5" />
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
