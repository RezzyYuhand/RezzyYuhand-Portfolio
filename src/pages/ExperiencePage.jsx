import { experiences, projects, education, organizations, competitions } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import SectionHeading from "../components/SectionHeading";

function TimelineItem({ item, index }) {
  const [ref, isVisible] = useInView();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Desktop layout: alternating sides */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-start">
        {/* Left content */}
        <div className={`${isLeft ? "pr-10" : ""}`}>
          {isLeft && <TimelineCard item={item} />}
        </div>

        {/* Center dot + line */}
        <div className="flex flex-col items-center h-full">
          <div className="absolute w-4 h-4 top-1/2 rounded-full gradient-btn border-4 border-white shadow-md z-10" />
          <div className="w-0.5 h-full bg-gradient-to-b from-primary-300 to-accent-300 min-h-[100px]" />
        </div>

        {/* Right content */}
        <div className={`${!isLeft ? "pl-10" : ""}`}>
          {!isLeft && <TimelineCard item={item} />}
        </div>
      </div>

      {/* Mobile layout: left line */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div className="absolute top-1/3 w-3.5 h-3.5 rounded-full gradient-btn border-4 border-white shadow-md z-10 shrink-0" />
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-300 to-accent-300" />
        </div>
        <div className="pb-10 flex-1">
          <TimelineCard item={item} />
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ item }) {
  return (
    <div className="group p-6 rounded-2xl bg-white border border-border hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300">
      <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
        {item.period}
      </span>
      <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-primary-600 transition-colors">
        {item.role}
      </h3>
      <p className="text-sm font-medium text-accent-600 mb-3">{item.company}</p>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-surface-muted text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function EducationCard({ item, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-white border border-border hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/5 transition-all duration-500 hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Card accent */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-xl bg-accent-50 text-accent-600 shrink-0">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </div>
        <div className="flex-1">
          <span className="inline-block text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full mb-2">
            {item.period}
          </span>
          <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-600 transition-colors">
            {item.degree}
          </h3>
          <p className="text-sm font-medium text-primary-600">{item.institution}</p>
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {item.description}
      </p>

      {item.achievements && item.achievements.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.achievements.map((achievement) => (
            <span
              key={achievement}
              className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-50 text-accent-700"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              {achievement}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function OrganizationCard({ item, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-white border border-border hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/5 transition-all duration-500 hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-4 mb-3">
        <div className="p-3 rounded-xl bg-accent-50 text-accent-600 shrink-0">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
        </div>
        <div className="flex-1">
          <span className="inline-block text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full mb-2">
            {item.period}
          </span>
          <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-600 transition-colors">
            {item.role}
          </h3>
          <p className="text-sm font-medium text-primary-600">{item.name}</p>
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

function CompetitionCard({ item, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-white border border-border hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-4 mb-3">
        <div className="p-3 rounded-xl bg-amber-50 text-amber-600 shrink-0">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .982-3.172M2.25 18.75a60.07 60.07 0 0 1 .55-9.753 5.424 5.424 0 0 0 4.2-3.247 60.165 60.165 0 0 1 5-1.5 60.165 60.165 0 0 1 5 1.5 5.424 5.424 0 0 0 4.2 3.247 60.088 60.088 0 0 1 .55 9.753" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-amber-600 transition-colors">
            {item.name}
          </h3>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full mt-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            {item.achievement}
          </span>
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-white border border-border hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500 hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card accent */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl gradient-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-primary-50 text-primary-600">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-primary-600 hover:bg-primary-50 transition-all"
              aria-label="View source code"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-accent-600 hover:bg-accent-50 transition-all"
              aria-label="View live project"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-primary-600 transition-colors">
        {project.title}
      </h3>
      
      {project.link && project.link !== "#" && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 hover:underline mb-3 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
          {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </a>
      )}
      {!project.link || project.link === "#" ? (
        <div className="mb-3" /> // spacer if no link
      ) : null}

      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary-50 text-primary-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <section id="experience" className="pt-36 pb-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Education */}
        <SectionHeading
          title="Education"
          subtitle="My academic background and qualifications."
        />

        <div className="mb-12">
          {education.map((edu, i) => (
            <EducationCard key={edu.id} item={edu} index={i} />
          ))}
        </div>

        {/* Organizational Experience */}
        <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
          Organizational Experience
        </h3>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {organizations.map((org, i) => (
            <OrganizationCard key={org.id} item={org} index={i} />
          ))}
        </div>

        {/* Competitions */}
        <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
          Competitions & Awards
        </h3>
        <div className="grid grid-cols-1 gap-6 mb-28">
          {competitions.map((comp, i) => (
            <CompetitionCard key={comp.id} item={comp} index={i} />
          ))}
        </div>

        {/* Experience Timeline */}
        <SectionHeading
          title="My Experience"
          subtitle="A timeline of my professional journey and career milestones."
        />

        <div className="mb-28">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} item={exp} index={i} />
          ))}
        </div>

        {/* Portfolio / Projects */}
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built — from concept to deployment."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
