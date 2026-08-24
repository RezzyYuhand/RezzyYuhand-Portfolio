import { aboutMe, personalInfo } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import SectionHeading from "../components/SectionHeading";

function SkillBar({ skill, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
        <span className="text-xs font-semibold text-primary-600">{skill.level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-surface-muted overflow-hidden">
        <div
          className="h-full rounded-full gradient-btn transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function StatCard({ stat, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`text-center p-6 rounded-2xl bg-white border border-border hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-3xl font-extrabold font-[var(--font-heading)] gradient-text mb-1">
        {stat.value}
      </div>
      <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
    </div>
  );
}

export default function AboutPage() {
  const [bioRef, bioVisible] = useInView();

  return (
    <section id="about" className="pt-36 pb-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me — my story, skills, and what drives me."
        />

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {aboutMe.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div
            ref={bioRef}
            className={`${bioVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-bold font-[var(--font-heading)] text-text-primary mb-6">
              My Story
            </h3>
            <div className="space-y-4">
              {aboutMe.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 rounded-2xl gradient-bg border border-primary-100">
              <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                Let's Connect
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  {personalInfo.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <svg
                    className="w-5 h-5 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* WhatsApp Contact Form */}
            <div className="mt-8 p-6 rounded-2xl gradient-bg border border-primary-100">
              <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                Send Me a Message
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get("name");
                  const message = formData.get("message");
                  const text = `from: ${name}%0Amessage: ${message}`;
                  window.open(`https://wa.me/6282110119649?text=${text}`, '_blank');
                  e.target.reset();
                }}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-alt border border-border focus:border-primary-400 focus:ring-1 focus:ring-primary-400 outline-none transition-all text-sm text-text-primary placeholder:text-text-muted"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-alt border border-border focus:border-primary-400 focus:ring-1 focus:ring-primary-400 outline-none transition-all text-sm text-text-primary placeholder:text-text-muted resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send to WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold font-[var(--font-heading)] text-text-primary mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-5">
              {aboutMe.skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
