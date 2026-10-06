import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import portfolio from "../data/portfolio";
import Link from "next/link";

const Footer = () => {
  const connectLinks = [
    { href: portfolio.links.github, label: "GitHub", Icon: FaGithub },
    { href: portfolio.links.kaggle, label: "Kaggle", Icon: FaKaggle },
    {
      href: portfolio.links.googleScholar,
      label: "Scholar",
      Icon: SiGooglescholar,
    },
    { href: portfolio.links.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  ];

  return (
    <footer className="mt-20 border-t border-border-base bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Identity */}
          <div className="space-y-4">
            <p className="font-mono text-sm tracking-[0.15em] text-text-primary">
              shivamshetty
            </p>

            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              AI/ML Engineer building production-grade systems, research-driven
              applications, and scalable platforms.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted">
              NAVIGATION
            </p>

            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Achievements", href: "/achievements" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    text-sm text-text-secondary text-left
                    hover:text-text-primary
                    transition-colors duration-200
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted">
              CONNECT
            </p>

            <div className="flex flex-col gap-2">
              {connectLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2
                    text-sm text-text-secondary
                    hover:text-text-primary
                    transition-colors duration-200
                  "
                >
                  <Icon className="text-base text-text-muted" />
                  <span className="font-mono text-[12px] tracking-wide">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
          mt-12 pt-6
          border-t border-border-base/70
          flex flex-col md:flex-row items-center justify-between gap-4
        "
        >
          <p className="text-[11px] font-mono tracking-wide text-text-muted">
            © {new Date().getFullYear()} Shivam Shetty
          </p>

          <p className="text-[11px] font-mono tracking-wide text-text-faint">
            Built with Next.js · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
