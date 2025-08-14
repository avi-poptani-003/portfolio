import { useMemo } from "react";

const ExperienceSection = () => {
  // Experience data following the design document's Experience Model - memoized to prevent unnecessary re-renders
  const experiences = useMemo(
    () => [
      {
        id: 1,
        title: "Full-Stack Developer",
        company: "Infoxoras",
        period: "2020 - 2024",
        description:
          "Led a 3-member team to develop a scalable real estate CRM using Django, DRF, React, TailwindCSS, and PostgreSQL, with features like lead management, visit scheduling, and team collaboration.Optimized DRF APIs and PostgreSQL queries, improving dashboard load times by ~10%, and integrated third-party APIs for communication and analytics to enhance engagement and insights.",
      },
      {
        id: 2,
        title: "Data Analysis Intern",
        company: "Main Flow Services and Technologies",
        period: "2018 - 2020",
        description:
          "Collaborated with analysts to clean, normalize, and transform large datasets for improved accuracy and seamless integration into reporting pipelines. Wrote complex SQL queries with joins, aggregations, and subqueries to uncover insights and support strategic decisions. Built interactive dashboards using Python libraries (Pandas, NumPy, Seaborn), ensuring findings were communicated to both technical and non-technical stakeholders.",
      },
      {
        id: 3,
        title: "Web Developer Intern",
        company: "Samrisa Infotech Private Limited.",
        period: "2017 - 2018",
        description:
          "Led the development of web applications using WordPress, enhancing user experience and functionality. Collaborated on SEO strategy implementation to boost search rankings, while refining code iteratively to ensure adaptability and alignment with evolving project standards and best practices",
      },
    ],
    []
  );

  // Experience item component for better reusability and performance
  const ExperienceItem = useMemo(
    () =>
      ({ experience }) =>
        (
          <div
            key={experience.id}
            className="timeline-item relative pl-10 mb-8 last:mb-0 transform-gpu transition-all duration-500 hover:translate-x-2 hover:scale-[1.02] cursor-pointer group"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-400 transition-colors duration-300">
              {experience.title}
              {experience.company && (
                <span className="text-base sm:text-lg font-normal opacity-80 ml-2">
                  at {experience.company}
                </span>
              )}
            </h3>
            <p className="opacity-80 text-sm sm:text-base group-hover:opacity-100 transition-opacity duration-300">
              {experience.description}
            </p>
          </div>
        ),
    []
  );

  return (
    <section className="relative z-[3] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center drop-shadow-sm">
          Experience
        </h2>

        <div
          id="experience-timeline"
          className="max-w-2xl mx-auto px-4 sm:px-0"
        >
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
