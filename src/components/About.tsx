import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center text-white">About Me</h2>
          <p className="section-subtitle text-center mx-auto text-gray-300 text-justify">
          I am a passionate full-stack developer with a strong foundation in both front-end and back-end development. Currently pursuing my bachelor's degree in Information and Communication Technology, I combine academic knowledge with practical experience in building web and mobile applications
          </p>
          
          <div className="flex justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm animate-slide-up text-center w-full max-w-3xl" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">B.Sc. ICT</h4>
                  <p className="text-gray-400">University of Turku · 2023-2026</p>
                  <p className="text-gray-300 mt-2">
                    
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Web Development Certificate</h4>
                  <p className="text-gray-400">Fullstackopen · 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
