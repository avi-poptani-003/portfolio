"use client";

import { useMemo } from "react";

const AboutSection = () => {
  // Skills data - memoized to prevent unnecessary re-renders
  const skills = useMemo(
    () => [
      {
        title: "Programming Languages",
        description: "Python, JavaScript",
      },
      {
        title: "Frontend",
        description: "React, Tailwindcss, EJS, jQuery, HTML, CSS.",
      },
      {
        title: "Backend + Database",
        description:
          "Nodejs, Expressjs, Django, Django Rest Framework, PostgreSQL ",
      },
      {
        title: "Design",
        description: "Figma, Miro",
      },
      {
        title: "Tools",
        description: "GIT, Postman, Wordpress",
      },
      {
        title: "Data Science & ML Libraries",
        description:
          "Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, Keras",
      },
    ],
    []
  );

  return (
    <section id="about" className="relative z-[3] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="transform-gpu transition-transform duration-300 ease-out">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-sm">
              About Me
            </h2>
            <p className="text-base sm:text-lg opacity-80 leading-relaxed">
              Software developer with a background in{" "}
              <span className="text-yellow-400">Computer Engineering</span> and
              hands-on experience building full-stack web applications. I've{" "}
              {""}
              <span className="text-yellow-400">
                led small teams during internships
              </span>
              , worked in{" "}
              <span className="text-yellow-400">Agile environments </span> and
              enjoy turning ideas into real-world solutions. Comfortable working
              across the stack and{" "}
              <span className="text-yellow-400 ">
                quick to learn what the project demands
              </span>
              . Currently exploring{" "}
              <span className="text-yellow-400">DevOps and AI/ML </span> to
              broaden my engineering toolkit and build smarter, more scalable
              systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/[0.03] backdrop-blur-[10px] border border-white/10 p-4 sm:p-6 rounded-lg 
                          transform transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30
                          hover:scale-[1.02] cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {skill.title}
                </h3>
                <p className="text-base sm:text-base opacity-80">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
