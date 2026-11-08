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
  },
];

// "08:30" -> "8:30 AM"
export function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${suffix}`;
}
