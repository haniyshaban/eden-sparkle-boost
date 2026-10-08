import { Link } from "react-router-dom";
import { EdenMark } from "@/components/EdenMark";
import { EMAIL, LINKEDIN } from "@/lib/site";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/70">
      <div className="page">
        <div className="flex flex-col gap-6 border-t border-paper/15 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-2.5 text-paper">
            <EdenMark className="h-7 w-7 text-sage-light" />
            <span className="text-base font-medium tracking-tight">Eden Labs</span>
          </Link>

          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            <Link to="/guardsync" className="transition-colors hover:text-paper">
              GuardSync
            </Link>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-paper">
              Email
            </a>
          </nav>

          <p>© {year} Eden Labs</p>
        </div>
      </div>
    </footer>
  );
};
