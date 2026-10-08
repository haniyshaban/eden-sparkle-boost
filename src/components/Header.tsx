import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { EdenMark } from "@/components/EdenMark";
import { CALENDAR_LINK } from "@/lib/site";

const navItems = [
  { name: "Services", href: "/#services", isRoute: false },
  { name: "GuardSync", href: "/guardsync", isRoute: true },
  { name: "Process", href: "/#process", isRoute: false },
  { name: "Contact", href: "/#contact", isRoute: false },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = isScrolled || isMenuOpen;
  const linkClass = "transition-colors hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-line bg-paper/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Eden Labs home">
          <EdenMark className="h-9 w-9 text-sage" />
          <span className="text-[17px] font-medium tracking-tight text-ink">Eden Labs</span>
        </Link>

        <nav className="hidden items-center gap-9 text-[15px] text-graphite md:flex">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link key={item.name} to={item.href} className={linkClass}>
                {item.name}
              </Link>
            ) : (
              <a key={item.name} href={item.href} className={linkClass}>
                {item.name}
              </a>
            ),
          )}
          <a href={CALENDAR_LINK} target="_blank" rel="noreferrer" className="btn-ink btn-sm">
            Book a call
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-ink md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="page flex flex-col pb-6 md:hidden">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                className="border-b border-line py-3 text-lg text-ink"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="border-b border-line py-3 text-lg text-ink"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ),
          )}
          <a href={CALENDAR_LINK} target="_blank" rel="noreferrer" className="btn-ink mt-6">
            Book a call
          </a>
        </nav>
      )}
    </header>
  );
};
