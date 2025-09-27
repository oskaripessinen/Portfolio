import { useReveal } from "@/hooks/useReveal";

const About = () => {
  return (
    <section id="about" className="min-h-screen justify-center flex bg-gray-900 text-white">
      <div className="container-section justify-center flex flex-col items-center">
        <div className="max-w-4xl ">
          <h2 data-reveal className="section-title text-center text-white">About Me</h2>
          <p data-reveal className="section-subtitle mx-auto text-gray-300 font-sans text-lg w-[95%] md:w-full">
          I am a passionate full-stack developer with a strong foundation in both front-end and back-end development. Currently pursuing my bachelor's degree in Information and Communication Technology, I combine academic knowledge with practical experience in building web and mobile applications.
          </p>
          
          <div className="flex justify-center">
            <div data-reveal className="bg-gray-800 p-6 rounded-2xl shadow-sm text-center w-[95%] md:w-full max-w-3xl">
              <h3 className="text-xl font-bold mb-4 text-center text-white">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">B.Sc. in Information and Communication Technology</h4>
                  <p className="text-gray-400">University of Turku · 2023-2026</p>
                  <p className="text-gray-300 mt-2">
                    
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Web Development Certificate</h4>
                  <div className="flex flex-row text-center items-center justify-center gap-1">
                    <a href="https://fullstackopen.com/en" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-gray-200 underline underline-offset-1">
                      Fullstackopen
                    </a>
                    <p className="text-gray-400">· 2024</p>
                  </div>
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
