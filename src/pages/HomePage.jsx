import { Link } from "react-router-dom";
import { personalInfo, aboutMe } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

const getSkillLogo = (skillName) => {
  const name = skillName.toLowerCase();
  if (name.includes("react")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
  if (name.includes("next")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg";
  if (name.includes("javascript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
  if (name.includes("typescript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";
  if (name.includes("html")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg";
  if (name.includes("tailwind")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
  if (name.includes("php")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg";
  if (name.includes("laravel")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg";
  if (name.includes("node")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg";
  if (name.includes("express")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg";
  if (name.includes("python")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";
  if (name.includes("java") && !name.includes("javascript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg";
  if (name.includes("kotlin")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg";
  if (name.includes("postgres")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg";
  if (name.includes("mongo")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg";
  if (name.includes("mysql")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg";
  if (name.includes("firebase")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg";
  if (name.includes("docker")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg";
  if (name.includes("git")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg";
  if (name.includes("aws")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
  if (name.includes("gcp") || name.includes("cloud")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg";
  if (name.includes("figma")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg";
  if (name.includes("illustrator")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg";
  return null;
};

export default function HomePage() {
  const [ref, isVisible] = useInView();

  return (
    <div
      id="home"
      className="min-h-screen min-w-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={ref}
        className={`max-w-screen w-full px-40 py-32 ${isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500" />
              </span>
              <span className="text-sm font-medium text-primary-700">
                Available for work or projects
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] leading-tight mb-6">
              Hello World !! I'm{" "}<br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary mb-4 font-medium">
              {personalInfo.tagline}
            </p>

            <p className="text-text-secondary/80 leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0">
              {personalInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full gradient-btn shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300"
              >
                View My Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-text-primary rounded-full border border-border bg-white hover:border-primary-300 hover:bg-primary-50/50 hover:scale-105 transition-all duration-300"
              >
                About Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-surface-alt border border-border text-text-secondary hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-surface-alt border border-border text-text-secondary hover:text-accent-600 hover:border-accent-300 hover:bg-accent-50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-surface-alt border border-border text-text-secondary hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-300 via-accent-300 to-primary-400 p-1 animate-[spin_20s_linear_infinite]">
                <div className="w-full h-full rounded-full bg-white" />
              </div>
              {/* Avatar placeholder */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center overflow-hidden">
                <img src="ADN01333.png" className="" />

              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 p-3 rounded-full bg-primary-400 shadow-lg animate-float">
              </div>
              <div
                className="absolute -bottom-2 -left-2 p-3 rounded-full bg-primary-500 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
              </div>
              <div
                className="absolute top-1/3 -left-6 p-3 rounded-full bg-accent-300 shadow-lg animate-float"
                style={{ animationDelay: "2.5s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-6 p-3 rounded-full bg-accent-500 shadow-lg animate-float"
                style={{ animationDelay: "2.5s" }}
              >
              </div>
            </div>
          </div>
        </div>

        {/* Skills Carousel Section */}
        <div className="w-full mt-24 overflow-hidden relative opacity-60 hover:opacity-100 transition-opacity duration-500">
          {/* Gradient edge masks for smooth fade out */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-scroll-left-mobile sm:animate-scroll-left hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex items-center justify-center shrink-0">
               {aboutMe.skills.map((skill) => {
                 const logo = getSkillLogo(skill.name);
                 return logo ? (
                   <img 
                     key={skill.name} 
                     src={logo} 
                     alt={skill.name} 
                     title={skill.name}
                     className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-6 sm:mx-10" 
                   />
                 ) : null;
               })}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex items-center justify-center shrink-0">
               {aboutMe.skills.map((skill) => {
                 const logo = getSkillLogo(skill.name);
                 return logo ? (
                   <img 
                     key={`${skill.name}-dup`} 
                     src={logo} 
                     alt={skill.name} 
                     title={skill.name}
                     className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-6 sm:mx-10" 
                   />
                 ) : null;
               })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
