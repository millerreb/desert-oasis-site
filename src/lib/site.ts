// Practice details used across the site (hours, addresses, phone).
// Update hours or addresses here and every page that uses them stays in sync.

export const PHONE = "(480) 418-3314";
export const PHONE_LINK = "tel:+14804183314";
export const FAX = "(480) 923-6586";
export const BOOKING_URL = "https://l.klara.com/JKkUeq7HEnFzXBDj";

export type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export const WEEK: Day[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Times are 24-hour "HH:MM" so they can also be used for Google's structured data later.
export type OpenHours = { day: Day; opens: string; closes: string };

export type Office = {
  key: "maricopa" | "chandler";
  name: string;
  street: string;
  suite: string;
  city: string;
  zip: string;
  hours: OpenHours[];
  directionsUrl: string;
  // Used by the office pages (/maricopa-dermatologist, /chandler-dermatologist)
  slug: string;
  road: string;
  mapEmbedUrl: string;
  nearby: string[];
};

export const offices: Office[] = [
  {
    key: "chandler",
    name: "Chandler Office",
    street: "2860 S Alma School Rd",
    suite: "STE 33",
    city: "Chandler",
    zip: "85286",
    hours: [
      { day: "Monday", opens: "08:30", closes: "16:30" },
      { day: "Tuesday", opens: "08:30", closes: "12:00" },
      { day: "Thursday", opens: "08:30", closes: "16:30" },
    ],
    directionsUrl:
      "https://www.google.com/maps/place/Desert+Oasis+Dermatology+-+Chandler/@33.2642304,-111.8608164,17z/data=!3m1!4b1!4m6!3m5!1s0x872b01d61f9ee563:0xbefb48eebcc53c32!8m2!3d33.2642304!4d-111.8608164!16s%2Fg%2F11ymhcdzl8",
    slug: "/chandler-dermatologist",
    road: "S Alma School Rd",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.0959852664564!2d-111.86323182384797!3d33.263979358940205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b007930373701%3A0x7a2b046099685ec1!2s2860%20S%20Alma%20School%20Rd%2C%20Chandler%2C%20AZ%2085286!5e0!3m2!1sen!2sus!4v1762636791619!5m2!1sen!2sus",
    nearby: ["Chandler", "Gilbert", "Tempe", "Mesa", "Sun Lakes", "Ahwatukee"],
  },
  {
    key: "maricopa",
    name: "Maricopa Office",
    street: "21300 N John Wayne Pkwy",
    suite: "STE 116",
    city: "Maricopa",
    zip: "85139",
    hours: [
      { day: "Wednesday", opens: "08:30", closes: "16:30" },
      { day: "Friday", opens: "08:30", closes: "16:30" },
    ],
    directionsUrl:
      "https://www.google.com/maps/place/Desert+Oasis+Dermatology+-+Maricopa/@33.0739956,-112.0454332,17z/data=!3m1!4b1!4m6!3m5!1s0x872afb13db300289:0xa1cbdb5513efe36f!8m2!3d33.0739956!4d-112.0454332!16s%2Fg%2F11m6sg0qh8",
    slug: "/maricopa-dermatologist",
    road: "John Wayne Pkwy",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8634452736515!2d-112.04917711882933!3d33.075172293480286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872afb13db300289%3A0xa1cbdb5513efe36f!2sDesert%20Oasis%20Dermatology!5e0!3m2!1sen!2sbd!4v1743574353740!5m2!1sen!2sbd",
    nearby: ["Maricopa", "Casa Grande", "Stanfield", "Ak-Chin", "Hidden Valley"],
  },
];

// "08:30" -> "8:30 AM"
export function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${suffix}`;
}

export function getOffice(key: Office["key"]): Office {
  return offices.find((o) => o.key === key)!;
}

// ["Monday", "Tuesday", "Thursday"] -> "Mondays, Tuesdays and Thursdays"
export function openDaysText(office: Office): string {
  const days = office.hours.map((h) => `${h.day}s`);
  return days.length > 1
    ? `${days.slice(0, -1).join(", ")} and ${days[days.length - 1]}`
    : days[0];
}
