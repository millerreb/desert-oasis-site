import type { Metadata } from "next";
import { getServiceById } from "@/lib/mokdata";

// Page titles and descriptions for every page on the site.
// Each page imports what it needs, e.g.  export const metadata = pageMeta("/about")
// To change what Google shows for a page, edit its entry here.

type PageSeo = { title: string; description: string };

// The site's official address. Google already lists the www version, so every page's
// canonical tag points here (e.g. https://www.dodermatology.com/services/acne).
export const SITE_URL = "https://www.dodermatology.com";

// Pages kept out of Google search results. They still work for anyone who visits.
// To unhide a page, delete its line. A section like "/blog" also covers every page under it.
export const hiddenFromSearch = [
  "/homepage", // duplicate of the homepage at "/"
  "/future-comming-soon",
  "/maricopa-survey-redirect",
  "/chandler-survey-redirect",
  "/reviews",
  "/patient-portal",
  "/recommended-products",
  "/blog",
];

export function isHiddenFromSearch(path: string): boolean {
  return hiddenFromSearch.some((p) => path === p || path.startsWith(`${p}/`));
}

// Pages whose canonical tag points somewhere other than their own address.
const canonicalOverrides: Record<string, string> = {
  "/homepage": "/",
};

// Canonical tag + "don't show in search" tag for a page.
function searchTags(path: string): Metadata {
  const canonicalPath = canonicalOverrides[path] ?? path;
  return {
    // new URL() joins the address and path with exactly one slash, with or without a leading "/"
    alternates: { canonical: new URL(canonicalPath, SITE_URL).toString() },
    ...(isHiddenFromSearch(path) ? { robots: { index: false, follow: true } } : {}),
  };
}

const BRAND = "Desert Oasis Dermatology";
const AREA = "Maricopa & Chandler, AZ";

export const defaultSeo: PageSeo = {
  title: `${BRAND} | ${AREA}`,
  description:
    "Board-certified dermatology and Mohs surgery in Maricopa and Chandler, AZ, treating acne, eczema, skin cancer and more. Most insurances accepted.",
};

const pages: Record<string, PageSeo> = {
  "/": defaultSeo,
  "/homepage": defaultSeo,
  "/about": {
    title: "Dr. Jonathan Lavian, MD | Dermatologist & Mohs Surgeon",
    description:
      "Meet Dr. Jonathan Lavian, double board-certified in Dermatology and Mohs Micrographic Surgery, caring for patients in Maricopa and Chandler, AZ.",
  },
  "/services": {
    title: `Dermatology Services in ${AREA}`,
    description:
      "Medical, surgical and cosmetic dermatology in Maricopa and Chandler, AZ: skin cancer screening, Mohs surgery, acne, eczema, psoriasis, Botox, peels and more.",
  },
  "/hours-and-location": {
    title: `Office Hours & Locations | ${AREA}`,
    description:
      "Hours, addresses and directions for Desert Oasis Dermatology's offices in Maricopa (John Wayne Pkwy) and Chandler (S Alma School Rd). Call (480) 418-3314.",
  },
  "/maricopa-dermatologist": {
    title: `Dermatologist in Maricopa, AZ | ${BRAND}`,
    description:
      "Board-certified dermatologist on John Wayne Pkwy in Maricopa, AZ, open Wednesdays and Fridays. Skin cancer screening, Mohs surgery, acne, eczema and cosmetics.",
  },
  "/chandler-dermatologist": {
    title: `Dermatologist in Chandler, AZ | ${BRAND}`,
    description:
      "Board-certified dermatologist on S Alma School Rd in Chandler, AZ, open Mon, Tue and Thu. Skin cancer screening, Mohs surgery, acne, eczema and cosmetics.",
  },
  "/insurance-accepted": {
    title: `Insurance & Self-Pay Prices | ${BRAND}`,
    description:
      "Insurance plans accepted at Desert Oasis Dermatology, including Medicare, AHCCCS plans, Aetna, BCBS, Cigna, Humana and UnitedHealthcare, plus self-pay pricing.",
  },
  "/patient-info": {
    title: `Patient Information | ${BRAND}`,
    description:
      "Everything you need before your visit to Desert Oasis Dermatology in Maricopa or Chandler, AZ: scheduling, forms, insurance, billing and secure messaging.",
  },
  "/dermatology-patient-forms": {
    title: `New Patient Forms | ${BRAND}`,
    description:
      "Download and submit your dermatology patient forms before your visit to Desert Oasis Dermatology in Maricopa or Chandler, AZ.",
  },
  "/pay-bill": {
    title: `Pay Your Bill Online | ${BRAND}`,
    description:
      "Pay your Desert Oasis Dermatology bill securely online or by phone, and find answers to common billing questions.",
  },
  "/billing-questions": {
    title: `Billing Questions | ${BRAND}`,
    description:
      "How to reach the Desert Oasis Dermatology billing team with questions about your statement, insurance or payment options.",
  },
  "/chat-with-us": {
    title: `Text or Chat With Us | ${BRAND}`,
    description:
      "Send Desert Oasis Dermatology a secure text message through Klara for scheduling, questions and support.",
  },
  "/patient-portal": {
    title: `Patient Portal | ${BRAND}`,
    description: "Access the Desert Oasis Dermatology patient portal.",
  },
  "/recommended-products": {
    title: `Dermatologist-Recommended Skin Care Products | ${BRAND}`,
    description:
      "Skin care products recommended by the board-certified dermatology team at Desert Oasis Dermatology.",
  },
  "/reviews": {
    title: `Patient Reviews | ${BRAND}`,
    description:
      "See what patients say about Desert Oasis Dermatology in Maricopa and Chandler, AZ.",
  },
  "/blog": {
    title: `Skin Health Blog | ${BRAND}`,
    description:
      "Dermatologist-written articles on skin cancer prevention, acne, eczema, sun protection in Arizona and cosmetic skin care.",
  },
  "/careers": {
    title: `Careers | ${BRAND}`,
    description:
      "Join the team at Desert Oasis Dermatology in Maricopa and Chandler, AZ. See open positions and apply.",
  },
  "/accessibility": {
    title: `Accessibility Statement | ${BRAND}`,
    description:
      "Desert Oasis Dermatology is committed to an accessible website for everyone. Call (480) 418-3314 if you need assistance.",
  },
  "/future-comming-soon": {
    title: `Coming Soon | ${BRAND}`,
    description: "This feature is coming soon.",
  },
  "/maricopa-survey-redirect": {
    title: `Thank You for Your Feedback | ${BRAND} Maricopa`,
    description: "Thank you for sharing feedback about your visit to our Maricopa office.",
  },
  "/chandler-survey-redirect": {
    title: `Thank You for Your Feedback | ${BRAND} Chandler`,
    description: "Thank you for sharing feedback about your visit to our Chandler office.",
  },
};

// Every page with an entry above; the sitemap is built from this list.
export const pagePaths = Object.keys(pages);

export function pageMeta(path: string): Metadata {
  // Blog articles share the blog's title until they have their own.
  const seo = pages[path] ?? (path.startsWith("/blog/") ? pages["/blog"] : defaultSeo);
  return { title: seo.title, description: seo.description, ...searchTags(path) };
}

// Service pages (/services/[id]): one description per service.
const serviceDescriptions: Record<string, string> = {
  "skin-cancer-screening":
    "Full-body skin cancer screenings and mole checks with a board-certified dermatologist and Mohs surgeon in Maricopa and Chandler, AZ.",
  acne:
    "Personalized acne treatment for teens and adults in Maricopa and Chandler, AZ, from prescription creams and oral medications to chemical peels.",
  eczema:
    "Relief for itchy, inflamed skin. Eczema care for children and adults in Maricopa and Chandler, AZ, including prescription and biologic therapies.",
  "hand-dermatitis":
    "Treatment for dry, cracked, irritated hands caused by irritants or allergies, from a board-certified dermatologist in Maricopa and Chandler, AZ.",
  warts:
    "Safe, effective wart removal in Maricopa and Chandler, AZ, including cryotherapy, topical treatments and minor procedures.",
  "excessive-sweating":
    "Treatment for excessive sweating (hyperhidrosis) of the underarms, hands and feet in Maricopa and Chandler, AZ, including prescription options and Botox.",
  "hair-loss":
    "Diagnosis and treatment of hair loss and thinning hair for men and women from a board-certified dermatologist in Maricopa and Chandler, AZ.",
  "dark-spots":
    "Treatment for dark spots, sun spots, melasma and uneven skin tone in Maricopa and Chandler, AZ, from a board-certified dermatologist.",
  "allergic-reactions":
    "Diagnosis and treatment of skin allergies, hives and allergic rashes from a board-certified dermatologist in Maricopa and Chandler, AZ.",
  molluscum:
    "Gentle treatment for molluscum contagiosum in children and adults from a board-certified dermatologist in Maricopa and Chandler, AZ.",
  dandruff:
    "Relief for dandruff, flaking and itchy scalp (seborrheic dermatitis) from a board-certified dermatologist in Maricopa and Chandler, AZ.",
  vitiligo:
    "Vitiligo treatment to calm and repigment affected skin, from a board-certified dermatologist in Maricopa and Chandler, AZ.",
  psoriasis:
    "Psoriasis treatment in Maricopa and Chandler, AZ, from prescription creams to immune-modulating medications, with a board-certified dermatologist.",
  rosaceae:
    "Rosacea treatment to reduce facial redness, flushing and bumps, from a board-certified dermatologist in Maricopa and Chandler, AZ.",
  "mohs-surgery":
    "Mohs surgery for skin cancer by a double board-certified Mohs surgeon in Maricopa and Chandler, AZ. High cure rates with maximum healthy skin preserved.",
  excision:
    "Surgical removal of skin cancers, cysts, moles and other growths by a board-certified dermatologic surgeon in Maricopa and Chandler, AZ.",
  "cyst-drainage":
    "In-office cyst drainage and removal from a board-certified dermatologist in Maricopa and Chandler, AZ.",
  "chemical-peels":
    "Customized chemical peels for sun damage, dark spots, acne scars and dull skin, performed by a dermatologist in Maricopa and Chandler, AZ.",
  botox:
    "Botox and neurotoxin injections to smooth lines and wrinkles, performed by a board-certified dermatologist in Maricopa and Chandler, AZ.",
  microneedling:
    "Microneedling to improve acne scars, fine lines and skin texture, performed by a board-certified dermatologist in Maricopa and Chandler, AZ.",
};

// Shorter names for search-result titles, where the page's full service name is too long.
// The heading on the page itself is unchanged.
const serviceTitleNames: Record<string, string> = {
  excision: "Skin Cancer & Growth Removal",
  "excessive-sweating": "Hyperhidrosis Treatment",
  molluscum: "Molluscum Treatment",
  microneedling: "Microneedling",
  "hand-dermatitis": "Hand Dermatitis Treatment",
};

export function serviceMeta(id: string): Metadata {
  const service = getServiceById(id);
  if (!service) return pageMeta("/services");
  return {
    // No practice name here: Google shows the site name above each result (from the website schema)
    title: `${serviceTitleNames[id] ?? service.serviceName} in ${AREA}`,
    description:
      serviceDescriptions[id] ??
      `${service.serviceName} from a board-certified dermatologist in Maricopa and Chandler, AZ.`,
    ...searchTags(`/services/${id}`),
  };
}
