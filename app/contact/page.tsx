import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import portfolio from "@/data/portfolio";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Contact | Shivam Shetty",
  description:
    "Get in touch for ML engineering roles, research, and technical project collaborations.",
};

const ContactPage = () => {
  const contactLinks = [
    {
      label: "Email",
      href: `mailto:${portfolio.personal.email}`,
      icon: <FaEnvelope size={14} />,
    },
    {
      label: "GitHub",
      href: portfolio.links.github,
      icon: <FaGithub size={14} />,
    },
    {
      label: "LinkedIn",
      href: portfolio.links.linkedin,
      icon: <FaLinkedin size={14} />,
    },
    {
      label: "Google Scholar",
      href: portfolio.links.googleScholar,
      icon: <SiGooglescholar size={14} />,
    },
  ];

  return (
    <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      <SectionHeader number="// 07" title="Get in Touch" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-8">
        {/* Left Side: Context & Links */}
        <div className="md:col-span-2 space-y-6">
          <p className="text-sm text-text-secondary leading-relaxed max-w-md">
            Whether you have a question, a project collaboration idea, or just want to 
            connect regarding machine learning or research opportunities, feel free to reach out.
          </p>
          
          <ul className="space-y-4 pt-2">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors duration-200 group"
                >
                  <span className="text-text-faint group-hover:text-accent transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-mono tracking-wide">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Contact Form Wrapper */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;