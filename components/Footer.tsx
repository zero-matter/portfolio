import { content } from "@/lib/content";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const { footer } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-tertiary border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-text-tertiary text-center md:text-left">
            <p>© {currentYear} Azad Patel. All rights reserved.</p>
            <p className="text-xs mt-1">{footer.builtWith}</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={content.hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors p-2"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={content.hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors p-2"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${content.hero.email}`}
              className="text-text-secondary hover:text-accent-primary transition-colors p-2"
              aria-label="Send email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Right: Location */}
          <div className="text-sm text-text-tertiary text-center md:text-right">
            <p>{footer.location}</p>
            <p className="text-xs mt-1">{footer.availability}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
