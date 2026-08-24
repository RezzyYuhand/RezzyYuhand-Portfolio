import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-alt border-t border-border">
      <div className="max-w-screen px-5 py-3 md:px-52 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-text-muted">
            © {currentYear} Rezzy Yuhand Pramudita | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
