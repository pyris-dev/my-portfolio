/** A contact method displayed on the About tab. */
export interface ContactEntry {
  /** Name of the contact method. */
  label: string;
  /** Contact information displayed and copied to the clipboard. */
  value: string;
  /** Optional link opened when the contact card is selected. */
  href?: string;
}
