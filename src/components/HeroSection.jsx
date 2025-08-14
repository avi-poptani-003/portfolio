import { useMemo } from "react";

const Briefcase = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const MapPin = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

function HeroSection() {
  // Memoized hero content configuration
  const heroContent = useMemo(
    () => ({
      name: "Avi Poptani",
      greeting: "Hello,",
      title: "Full Stack Developer",
      location: "Gandhinagar",
      availability: "Available for Work",
    }),
    []
  );

  // Memoized CSS classes for better performance
  const styles = useMemo(
    () => ({
      section:
        "min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8",
      container: "container mx-auto",
      content: "max-w-4xl mx-auto text-center",
      heading:
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight",
      greeting: "text-yellow-400",
      subtitle: "text-lg sm:text-xl mb-4 sm:mb-6 opacity-80",
      infoContainer:
        "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8",
      infoItem:
        "flex items-center gap-2 text-yellow-400 transform transition-all duration-300 hover:scale-105",
      infoText: "text-sm sm:text-base",
      buttonWrapper: "inline-block p-[2px] rounded-lg",
      button:
        "bg-slate-800 px-6 sm:px-8 py-2 sm:py-3 rounded-lg relative z-10 transition-all duration-300 inline-block cursor-pointer text-sm sm:text-base border border-yellow-400/20 hover:border-yellow-400/50 hover:bg-slate-700 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20",
    }),
    []
  );

  // Memoized icon configuration
  const iconConfig = useMemo(
    () => ({
      size: 20,
      className:
        "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110",
    }),
    []
  );

  // Memoized info items for better performance
  const infoItems = useMemo(
    () => [
      {
        id: "location",
        icon: (
          <MapPin size={iconConfig.size} className={iconConfig.className} />
        ),
        text: heroContent.location,
      },
      {
        id: "availability",
        icon: (
          <Briefcase size={iconConfig.size} className={iconConfig.className} />
        ),
        text: heroContent.availability,
      },
    ],
    [heroContent, iconConfig]
  );

  // Memoized info item component
  const InfoItem = useMemo(
    () =>
      ({ item }) =>
        (
          <div className={`${styles.infoItem} group`}>
            {item.icon}
            <span className={styles.infoText}>{item.text}</span>
          </div>
        ),
    [styles]
  );

  return (
    <section className={`${styles.section} relative z-[3]`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Heading */}
          <h1 className={`${styles.heading}`}>
            <span className={`${styles.greeting} animate-pulse`}>
              {heroContent.greeting}
            </span>{" "}
            I'm {heroContent.name}
          </h1>

          {/* Subtitle */}
          <p className={`${styles.subtitle}`}>{heroContent.title}</p>

          {/* Info Items */}
          <div className={`${styles.infoContainer}`}>
            {infoItems.map((item) => (
              <InfoItem key={item.id} item={item} />
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="https://www.linkedin.com/in/avi-poptani/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} text-lg`}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/avi-poptani-003"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} text-lg`}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
