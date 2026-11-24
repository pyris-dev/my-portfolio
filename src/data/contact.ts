/** A contact method displayed on the About tab. */
interface ContactEntry {
  /** Name of the contact method. */
  label: string;
  /** Contact information displayed and copied to the clipboard. */
  value: string;
  /** Optional link opened when the contact card is selected. */
  href?: string;
}

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
