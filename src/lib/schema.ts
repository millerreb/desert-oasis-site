// Structured data (schema.org JSON-LD): hidden code that tells Google the practice's
// name, offices, addresses, hours and phone number in a format it reads directly.
// Everything comes from site.ts, so updating hours or addresses there updates this too.
//
// Intentionally left out: individual physician entries (no names or credentials on the
// site) and review/rating markup (Google doesn't show stars from a site's own testimonials).

import { SITE_URL } from "@/lib/seo"
import { offices, PHONE, FAX, type Office } from "@/lib/site"

const url = (path: string) => new URL(path, SITE_URL).toString()

const PRACTICE_NAME = "Desert Oasis Dermatology"
const ORGANIZATION_ID = url("/#organization")
const clinicId = (office: Office) => url(`${office.slug}#clinic`)

// Practice-wide social profiles
const socialProfiles = [
  "https://www.facebook.com/profile.php?id=61574712775280",
  "https://www.instagram.com/desert_oasis_dermatology_",
  "https://www.tiktok.com/@desert.oasis.dermatology",
  "https://www.youtube.com/channel/UCSIbaqDBbdiEulTQlpOjd3A",
]

// Each office's own listings elsewhere
const officeProfiles: Record<Office["key"], string[]> = {
  maricopa: ["https://www.yelp.com/biz/desert-oasis-dermatology-maricopa"],
  chandler: ["https://www.yelp.com/biz/desert-oasis-dermatology-chandler"],
}

// Where each piece appears (each fact in one place):
//   homepage            -> websiteSchema + organizationSchema
//   each office page    -> clinicSchema for that office

// The site's name, so Google can show "Desert Oasis Dermatology" as the site name in results
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": url("/#website"),
    name: PRACTICE_NAME,
    url: url("/"),
  }
}

// The practice as a whole, linking its two offices
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": ORGANIZATION_ID,
    name: PRACTICE_NAME,
    url: url("/"),
    logo: url("/image/Logo.png"),
    telephone: PHONE,
    medicalSpecialty: "Dermatology",
    sameAs: socialProfiles,
    // Each office is fully described on its own page; this names and links to it
    subOrganization: offices.map((office) => ({
      "@type": "MedicalClinic",
      "@id": clinicId(office),
      name: `${PRACTICE_NAME} - ${office.city}`,
      url: url(office.slug),
    })),
  }
}

// One office, matching its Google Business Profile
export function clinicSchema(office: Office) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": clinicId(office),
    name: `${PRACTICE_NAME} - ${office.city}`,
    url: url(office.slug),
    telephone: PHONE,
    faxNumber: FAX,
    medicalSpecialty: "Dermatology",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${office.street} ${office.suite}`,
      addressLocality: office.city,
      addressRegion: "AZ",
      postalCode: office.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: office.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    hasMap: office.directionsUrl,
    sameAs: officeProfiles[office.key],
    // The practice is fully described on the homepage; this names and links to it
    parentOrganization: {
      "@type": "MedicalOrganization",
      "@id": ORGANIZATION_ID,
      name: PRACTICE_NAME,
      url: url("/"),
    },
  }
}
