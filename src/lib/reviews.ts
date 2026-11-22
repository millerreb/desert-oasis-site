import { getOffice, type Office } from "@/lib/site";

// Patient reviews shown on /reviews and on the homepage ("Patient Testimonials").
// Copy the text exactly as it appears on Google. Names are first name + last initial.
// To add a review, copy one entry and change it. To remove one, delete its entry.
// featured: true puts the review on the homepage too (keep 3–4 featured so the carousel looks full).

export type Review = {
  name: string;
  office: Office["key"];
  text: string;
  featured?: boolean;
};

export const reviews: Review[] = [
  // Chandler
  {
    name: "Adam E.",
    office: "chandler",
    featured: true,
    text: "The best dermatologist around. If it helps, I'm a physician also and would not go to anyone else.",
  },
  {
    name: "Heidi H.",
    office: "chandler",
    text: "This place was wonderful! I made an appt the day before and when I arrived I was called back almost immediately. The staff was so friendly and helpful and the visit was quick and effortless. 10/10 recommend 💯",
  },
  {
    name: "Matt V.",
    office: "chandler",
    featured: true,
    text: "Dr. Lavian is a fantastic, highly knowledgeable dermatologist. He took the time to explain how to properly care for my skin and addressed a spot on my face that had me worried. He knew exactly what it was and removed it painlessly and quickly without needing to cut. Huge thanks to Dr. Lavian—he has earned a patient for life!",
  },

  // Maricopa
  {
    name: "Don T.",
    office: "maricopa",
    featured: true,
    text: "Dr. Lavian is truly exceptional. From my very first visit, I felt thoroughly cared for. They take the time to answer all my questions and never make me feel rushed. The entire staff is professional and welcoming as well.",
  },
  {
    name: "Josh J.",
    office: "maricopa",
    text: "The staff is very friendly and service is quick. The Dr is very friendly and knowledgeable. He knows what he is doing and explains what he is doing during the exam. Great experience from start to finish.",
  },
  {
    name: "Jared K.",
    office: "maricopa",
    text: "I'm thoroughly impressed with Dr. Lavian and his staff. Dr. Lavian is extremely knowledgeable and efficient. I can't believe how much we got done in one quick appointment! His expertise in diagnosing put me at ease, and he was so gentle in the procedure he performed that I hardly felt a thing. It really was a perfect doctor experience for me. He is extremely kind and is a good listener, and his staff is just as kind as he is. If you're looking for a compassionate, kind, and skilled dermatologist, look no further than Dr. Lavian at Desert Oasis Dermatology!",
  },
  {
    name: "Amanda R.",
    office: "maricopa",
    featured: true,
    text: "Dr. Lavian is amazing! He has a great bedside manner and took all my concerns seriously and helped me come up with a plan. Highly recommend!",
  },
];

// Each office's Google listing, where the "Read all reviews on Google" links go.
// These are the same links used for directions in site.ts.
export function googleReviewsUrl(office: Office["key"]): string {
  return getOffice(office).directionsUrl;
}

export function officeLocation(office: Office["key"]): string {
  return `${getOffice(office).city}, AZ`;
}

export function reviewsFor(office: Office["key"]): Review[] {
  return reviews.filter((r) => r.office === office);
}

export const featuredReviews: Review[] = reviews.filter((r) => r.featured);
