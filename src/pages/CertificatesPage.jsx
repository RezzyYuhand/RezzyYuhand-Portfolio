import { certificates } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import SectionHeading from "../components/SectionHeading";

function CertificateCard({ cert, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-white border border-border hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl gradient-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl border border-primary-100 group-hover:scale-110 transition-transform duration-300 p-2 shadow-sm">
          {cert.issuer.includes("Google") ? (
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
              alt="Google" 
              className="w-full h-full object-contain" 
            />
          ) : cert.issuer.includes("Dicoding") ? (
            <img 
              src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" 
              alt="Dicoding" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/certificate_logo.png"; }}
            />
          ) : (
            cert.icon
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-primary-600 transition-colors leading-snug">
            {cert.title}
          </h3>
          <p className="text-sm text-text-secondary mb-2">{cert.issuer}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {cert.date}
            </span>
            {cert.credentialUrl && cert.credentialUrl !== "#" && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-accent-600 hover:text-accent-700 transition-colors"
              >
                View
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
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
      </div>
    </div>
  );
}

export default function CertificatesPage() {
  return (
    <section id="certificates" className="pt-36 pb-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Certificates & Credentials"
          subtitle="Professional certifications and courses that validate my expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
