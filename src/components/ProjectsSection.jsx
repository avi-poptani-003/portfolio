import { useMemo, useCallback } from "react";

const ProjectsSection = () => {
  // Project data structure - memoized to prevent unnecessary re-renders
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "CustoFlow",
        category: "web",
        status: "complete",
        description:
          "A real estate CRM using Django, DRF, React, TailwindCSS, and PostgreSQL, with features like lead management, visit scheduling, and team collaboration",
        technologies: ["Python", "Django", "React", "Tailwindcss", "PostgreSQL"],
        link: "https://github.com/avi-poptani-003/CustoFlow",
        linkType: "GitHub",
      },
      {
        id: 2,
        title: "Global Explorer Tracker",
        category: "Web",
        status: "complete",
        description:
          "Global Explorer Tracker is a simple yet powerful web application that helps users keep track of the countries they have visited. Built using Node.js, Express, and PostgreSQL, this project provides a user-friendly interface for adding new countries to a personalized list and viewing the total number of countries visited.",
        technologies: ["Nodejs", "Expressjs", "EJS", "PostgreSQL"],
        link: "https://github.com/avi-poptani-003/Global-Explorer-Tracker",
        linkType: "GitHub",
      },
      {
        id: 3,
        title: "SkyChord",
        category: "Mobile",
        status: "complete",
        description:
          "a React Native mobile application that generates unique chord progressions and melodies to assist musicians in overcoming creative blocks.",
        technologies: ["Python", "React Native"],
        link: "https://github.com/avi-poptani-003/",
        linkType: "GitHub",
      },
      {
        id: 4,
        title: "House Price Prediction",
        category: "Machine Learning",
        status: "complete",
        description:
          "A machine learning project predicting house prices using Python, Pandas, NumPy, Matplotlib, Scikit-learn, and regression models with data preprocessing and evaluation.",
        technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        link: "https://github.com/avi-poptani-003/House-Price-Prediction-ML-Project",
        linkType: "GitHub",
      },
      {
        id: 5,
        title: "RESTful API For Blog POST",
        category: "REST API",
        status: "complete",
        description:
          "A robust and secure RESTful API built with Express.js and PostgreSQL, providing CRUD operations for managing blog posts.",
        technologies: ["Flutter", "Dart", "SQLite", "Health APIs"],
        link: "https://github.com/avi-poptani-003/restful-blog-api-node-postgres",
        linkType: "GitHub",
      },
      {
        id: 6,
        title: "Dynamic Traffic Control System (DTCS)",
        category: "AI ML",
        status: "Pending",
        description:
          "A cost-effective IoT and AI-powered traffic solution using ESP8266, ESP32, and Raspberry Pi. Prioritizes emergency vehicles via Wi-Fi-connected signals and uses live camera feeds with machine learning to optimize traffic flow, reducing congestion and improving emergency response times.",
        technologies: ["Python", "TensorFlow", "OpenCV", "ESP8266", "ESP32", "Raspberry Pi"],
        link: "#",
        linkType: "GitHub",
      },
    ],
    []
  );

  // Memoized category color mapping for better performance
  const categoryColors = useMemo(
    () => ({
      web: "text-blue-400",
      mobile: "text-green-400",
      design: "text-purple-400",
      default: "text-yellow-400",
    }),
    []
  );

  // Memoized status color mapping for better performance
  const statusColors = useMemo(
    () => ({
      complete: "bg-green-500/20 text-green-400 border-green-500/30",
      pending: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    }),
    []
  );

  // Optimized category color function
  const getCategoryColor = useCallback(
    (category) => categoryColors[category] || categoryColors.default,
    [categoryColors]
  );

  // Optimized status color function
  const getStatusColor = useCallback(
    (status) => statusColors[status] || statusColors.pending,
    [statusColors]
  );

  // Memoized project card component for better performance
  const ProjectCard = useCallback(
    ({ project }) => (
      <div
        key={project.id}
        className="bg-white/[0.03] backdrop-blur-[10px] border border-white/10 p-6 rounded-lg cursor-pointer
                   transform transition-all duration-300 ease-out
                   hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20
                   hover:border-white/20 group flex flex-col h-full"
      >
        {/* Category and Status Badges */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs uppercase tracking-wider font-bold transition-colors duration-300 ${getCategoryColor(
              project.category
            )} group-hover:text-yellow-400`}
          >
            {project.category}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full border font-medium uppercase tracking-wide transition-all duration-300 ${getStatusColor(
              project.status
            )} flex items-center gap-2`}
          >
            {project.status}
            <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm opacity-70 leading-relaxed mb-4 group-hover:opacity-90 transition-opacity duration-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-white/[0.05] border border-white/[0.1] rounded text-yellow-400
                         transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <div className="mt-auto pt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 hover:text-white transition-all duration-300 group/link"
            onClick={(e) => e.stopPropagation()}
          >
            <span>View {project.linkType}</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    ),
    [getCategoryColor, getStatusColor]
  );

  return (
    <section id="projects" className="relative z-[3] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center drop-shadow-sm">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
