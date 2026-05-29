import { useState } from "react";
import { CONTACT, EDUCATION } from "../content";

export function AboutTab() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 1200);
  };

  return (
    <div className="tab-panel">
      <div className="about-section">
        <div className="about-block">
          <h3 className="about-heading">About Me</h3>
          <p className="about-text">
            I'm a passionate developer who loves building things from scratch. I
            enjoy working with TypeScript, creating game systems, and crafting
            interactive digital experiences. When I'm not coding, I'm exploring
            new technologies and contributing to open source.
          </p>
        </div>

        {EDUCATION.length > 0 && (
          <div className="about-block">
            <h3 className="about-heading">Education</h3>
            <div className="about-cards">
              {EDUCATION.map((edu) => (
                <div className="about-card" key={edu.school}>
                  <div className="about-card-top">
                    <span className="about-card-title">{edu.school}</span>
                    <span className="about-card-year">{edu.year}</span>
                  </div>
                  <span className="about-card-subtitle">{edu.degree}</span>
                  <p className="about-card-note">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="about-block">
          <h3 className="about-heading">Contact</h3>
          <div className="about-cards">
            {CONTACT.map((c) => {
              const Tag = c.href ? "a" : "div";
              const linkProps = c.href
                ? {
                    href: c.href,
                    target: "_blank" as const,
                    rel: "noopener noreferrer",
                  }
                : {};
              return (
                <Tag className="contact-card" key={c.label} {...linkProps}>
                  <button
                    className="copy-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(c.label, c.value);
                    }}
                  >
                    {copiedLabel === c.label ? "Copied" : "Copy"}
                  </button>
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
