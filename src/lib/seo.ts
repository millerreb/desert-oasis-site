import type { Metadata } from "next";
import { getServiceById } from "@/lib/mokdata";

// Page titles and descriptions for every page on the site.
// Each page imports what it needs, e.g.  export const metadata = pageMeta("/about")
// To change what Google shows for a page, edit its entry here.

type PageSeo = { title: string; description: string };

const BRAND = "Desert Oasis Dermatology";
const AREA = "Maricopa, AZ & Chandler, AZ";

export const defaultSeo: PageSeo = {
  title: `Dermatologist in ${AREA} | ${BRAND}`,
  description:
    "Board-certified dermatologist and Mohs surgeon Dr. Jonathan Lavian treats acne, eczema, skin cancer and more in Maricopa and Chandler, AZ. Most insurances accepted.",
};

const pages: Record<string, PageSeo> = {
  "/": defaultSeo,
  "/homepage": defaultSeo,
  "/about": {
    title: `Dr. Jonathan Lavian, MD, FAAD | Dermatologist & Mohs Surgeon | ${BRAND}`,
    description:
      "Meet Dr. Jonathan Lavian, double board-certified in Dermatology and Mohs Micrographic Surgery, caring for patients in Maricopa and Chandler, AZ.",
  },
  "/services": {
    title: `Dermatology Services in ${AREA} | ${BRAND}`,
    description:
      "Medical, surgical and cosmetic dermatology in Maricopa and Chandler, AZ: skin cancer screening, Mohs surgery, acne, eczema, psoriasis, Botox, peels and more.",
  },
  "/hours-and-location": {
    title: `Office Hours & Locations | ${BRAND} Maricopa & Chandler`,
    description:
      "Hours, addresses and directions for Desert Oasis Dermatology's offices in Maricopa (John Wayne Pkwy) and Chandler (S Alma School Rd). Call (480) 418-3314.",
  },
  "/insurance-accepted": {
    title: `Insurance Accepted & Self-Pay Prices | ${BRAND}`,
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
      "Skin care products recommended by board-certified dermatologist Dr. Jonathan Lavian.",
  },
  "/reviews": {
    title: `Patient Reviews | ${BRAND}`,
    description:
      "See what patients say about Dr. Jonathan Lavian and Desert Oasis Dermatology in Maricopa and Chandler, AZ.",
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

export function pageMeta(path: string): Metadata {
  const seo = pages[path] ?? defaultSeo;
  return { title: seo.title, description: seo.description };
}

// Service pages (/services/[id]): one description per service.
const serviceDescriptions: Record<string, string> = {
  "skin-cancer-screening":
    "Full-body skin cancer screenings and mole checks with a board-certified dermatologist and Mohs surgeon in Maricopa and Chandler, AZ. Early detection saves lives.",
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

export function serviceMeta(id: string): Metadata {
  const service = getServiceById(id);
  if (!service) return pageMeta("/services");
  return {
    title: `${service.serviceName} in ${AREA} | ${BRAND}`,
    description:
      serviceDescriptions[id] ??
      `${service.serviceName} from a board-certified dermatologist in Maricopa and Chandler, AZ.`,
  };
}
