import { useInView } from "../hooks/useInView";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] text-text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center gap-2 justify-center">
        <span className="h-1 w-8 rounded-full bg-primary-400" />
        <span className="h-1 w-16 rounded-full gradient-btn" />
        <span className="h-1 w-8 rounded-full bg-accent-400" />
      </div>
    </div>
  );
}
