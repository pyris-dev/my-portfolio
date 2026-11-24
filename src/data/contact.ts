import type { ContactEntry } from "../types/contact";

/**
 * Contact information for the portfolio.
 * Should follow the {@link ContactEntry} structure.
 */
export const CONTACT: Array<ContactEntry> = [
  {
    label: "Email",
    value: "N/A",
    href: "mailto:your.email@example.com"
  },
  {
    label: "GitHub",
    value: "github.com/pyris-dev",
    href: "https://github.com/pyris-dev"
  },
  { label: "Discord", value: "pyris.dev" }
];
