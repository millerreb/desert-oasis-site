// Content for every service page (/services/[id]).
// The page layout is in src/app/(website)/services/Service-details.tsx.
//
// Each service has:
//   intro        - 1-2 sentences shown in the brown banner under the page title
//   paragraphs   - the page's sections. Each has a title (shown as a heading) and content.
//                  A blank line inside content ("\n\n") starts a new paragraph.
//                  Optional: bullets (a bulleted list) and after (a paragraph after the list).
//   faqs         - questions and answers shown at the bottom (also sent to Google)
//   related      - ids of other services to link to in the sidebar
//   relatedPosts - blog post slugs (from blogPosts.ts) to link to in the sidebar
//   offices      - leave out if offered at both offices; ["chandler"] if Chandler only
//
// Text formatting (same as the blog):  **bold**   *italic*   [link text](/services/acne)
// [link text](booking) links to online scheduling.

export type ServiceCategory = "Medical" | "Surgical" | "Cosmetic";

export interface ServiceSection {
  title: string;
  content: string;
  bullets?: string[];
  after?: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  id: string;
  serviceName: string;
  // Which tab on /services the page belongs to (also used in the breadcrumb)
  category: ServiceCategory;
  mainImage: string;
  intro: string;
  paragraphs: ServiceSection[];
  faqs: ServiceFaq[];
  related: string[];
  relatedPosts?: string[];
  offices?: ("chandler" | "maricopa")[];
  callToAction: {
    heading: string;
    subheading: string;
    phone: string;
    buttonText: string;
  };
}

// Common call to action for all services
const commonCallToAction = {
  heading: "Questions? Give us a call!",
  subheading: "Schedule your visit today",
  phone: "(480) 418-3314",
  buttonText: "Schedule Appointment",
};

const img = "/placeholder.svg?height=500&width=500";

export const servicesData: ServiceData[] = [
  // ───────────── Medical ─────────────
  {
    id: "skin-cancer-screening",
    serviceName: "Skin Cancer Screening",
    category: "Medical",
    mainImage: img,
    intro:
      "A head-to-toe skin exam with a board-certified dermatologist is one of the simplest ways to catch skin cancer early, when it is easiest to treat. In sunny Arizona, regular skin checks matter more than almost anywhere else.",
    paragraphs: [
      {
        title: "Why skin checks matter in Arizona",
        content:
          "Skin cancer is the most common cancer in the United States, and Arizona's strong, year-round sun puts residents at higher risk. Most skin cancers, including melanoma, can be cured when they are found early. A trained eye can often spot a cancer long before it causes symptoms, and before it has a chance to grow deeper or spread.",
      },
      {
        title: "Who should get screened",
        content: "Anyone can develop skin cancer, but a regular skin exam is especially important if you have:",
        bullets: [
          "A personal or family history of skin cancer or melanoma",
          "Fair skin, light hair or eyes, or skin that burns easily",
          "A history of blistering sunburns, tanning beds or years of outdoor work or sports",
          "Many moles (more than about 50) or moles that look unusual",
          "A weakened immune system, such as after an organ transplant",
          "A spot that is new, changing, itching, bleeding or not healing",
        ],
      },
      {
        title: "What to expect during your visit",
        content:
          "A full-body skin exam usually takes about 10 to 15 minutes. You'll change into a gown, and your dermatologist will check your skin from your scalp to your toes, including areas that are hard to see on your own, such as your back, scalp, ears and the soles of your feet. You can keep your underwear on, and you can ask us to skip any area you prefer.\n\nWe use dermoscopy, a lighted magnifier that shows patterns beneath the skin's surface, to take a closer look at moles and spots. If something looks suspicious, we can usually perform a quick [skin biopsy](/services/skin-biopsy) at the same visit. Precancerous spots called [actinic keratoses](/services/actinic-keratosis) can often be treated right away with liquid nitrogen.",
      },
      {
        title: "How to prepare",
        content:
          "Come with clean skin and, if possible, without nail polish so we can check your nails. Remove makeup if you'd like your face examined closely. Write down any spots that worry you, and let us know about any personal or family history of skin cancer.",
      },
      {
        title: "Warning signs to watch for at home",
        content:
          "Between visits, check your skin once a month. For moles, remember the ABCDEs of melanoma: Asymmetry, irregular Borders, uneven Color, Diameter larger than a pencil eraser, and Evolving (any change in size, shape or color). Also watch for a pearly or pink bump, a scaly patch that doesn't go away, or a sore that bleeds and doesn't heal. Read more in our article [Skin Cancer 101](/blog/skin-cancer-101).",
      },
      {
        title: "If skin cancer is found",
        content:
          "Most skin cancers are treated right here in our offices. Depending on the type, size and location, treatment may include a simple [excision](/services/excision) or, for many cancers on the face and other sensitive areas, [Mohs surgery](/services/mohs-surgery) at our Chandler office.",
      },
    ],
    faqs: [
      {
        q: "How often should I have a skin cancer screening?",
        a: "Many adults benefit from a yearly skin exam. If you have had skin cancer before or have many moles, we may recommend checks every 3 to 6 months. Your dermatologist will suggest a schedule based on your own risk.",
      },
      {
        q: "Is a skin cancer screening covered by insurance?",
        a: "Many insurance plans cover skin exams, especially when you have a spot of concern or a history of skin cancer, but coverage varies. See our [insurance page](/insurance-accepted) or call us with questions.",
      },
      {
        q: "Does a skin check hurt?",
        a: "No. The exam itself is just looking at the skin. If a biopsy is needed, the area is numbed first, so you'll feel only a small pinch.",
      },
    ],
    related: ["mole-evaluation", "actinic-keratosis", "skin-biopsy", "mohs-surgery"],
    relatedPosts: ["skin-cancer-101", "what-is-this-spot-on-my-skin", "sunscreen-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "acne",
    serviceName: "Acne Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Clear skin is possible at any age. We create personalized acne treatment plans for teens and adults, from prescription creams to oral medications, and help prevent the scarring acne can leave behind.",
    paragraphs: [
      {
        title: "What causes acne?",
        content:
          "Acne starts in the pores, where oil, dead skin cells and bacteria build up and cause inflammation. Hormones play a big role, which is why acne often begins in the teen years and can flare around menstrual cycles, pregnancy or menopause. Genetics, certain medications, heavy or oily products, and friction from helmets, masks or phone use can also contribute.\n\nAcne can appear as blackheads and whiteheads, red bumps and pimples, or deeper, painful cysts and nodules. It most often affects the face, chest, shoulders and back.",
      },
      {
        title: "When to see a dermatologist",
        content:
          "Over-the-counter products help many people with mild acne. It's time to see a dermatologist if your acne hasn't improved after two to three months of consistent treatment, if you have painful or deep breakouts, if acne is leaving dark marks or scars, or if it's affecting your confidence. Treating acne early is the best way to prevent permanent scarring.",
      },
      {
        title: "Our approach to acne treatment",
        content:
          "Every plan starts with a careful look at your skin, your history and what you've already tried. Depending on the type and severity of your acne, treatment may include:",
        bullets: [
          "**Topical treatments**, such as retinoids (like tretinoin or adapalene), benzoyl peroxide, azelaic acid and topical antibiotics",
          "**Oral antibiotics** for a limited time to calm inflamed breakouts",
          "**Hormonal treatments** for women, such as spironolactone or certain birth control pills",
          "**Isotretinoin** for severe, scarring or stubborn acne, with the monthly monitoring the program requires",
          "**[Chemical peels](/services/chemical-peels)** to help unclog pores and fade marks",
          "**A simple skin care routine** with gentle cleansers, oil-free moisturizer and daily sunscreen",
        ],
        after:
          "Most treatments take 8 to 12 weeks to show their full effect, so we'll schedule follow-up visits to check your progress and adjust your plan.",
      },
      {
        title: "Acne scars and dark marks",
        content:
          "After acne clears, it can leave behind flat dark or red marks, or indented scars. Dark marks usually fade over time, especially with sun protection and the right topical treatments. For indented scars, we offer [microneedling](/services/microneedling) to help smooth the skin's texture. The first step is always getting active acne under control.",
      },
    ],
    faqs: [
      {
        q: "How long does it take for acne treatment to work?",
        a: "Most acne treatments take 8 to 12 weeks to work fully. Skin can sometimes look a little worse in the first few weeks of a retinoid before it improves. Sticking with your plan is the key to results.",
      },
      {
        q: "Does diet cause acne?",
        a: "For some people, high-sugar foods and dairy, especially skim milk, may make acne worse. Diet is rarely the only cause, but it can be one piece of the puzzle. Read more in our article [Acne 101](/blog/acne-101).",
      },
      {
        q: "Do you treat adult acne?",
        a: "Yes. Many adults, especially women, develop acne in their 20s, 30s and beyond. Adult acne often responds well to hormonal treatments as well as topical medications.",
      },
    ],
    related: ["microneedling", "chemical-peels", "rosaceae", "dark-spots"],
    relatedPosts: ["acne-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "eczema",
    serviceName: "Eczema Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Eczema (atopic dermatitis) causes dry, itchy, inflamed skin that can disrupt sleep and daily life. We help children and adults get flares under control and keep skin calm, from everyday skin care to the newest prescription and biologic treatments.",
    paragraphs: [
      {
        title: "What is eczema?",
        content:
          "Eczema is a chronic condition in which the skin barrier doesn't hold in moisture or keep out irritants as well as it should. The result is dry, sensitive skin that becomes red, itchy and sometimes cracked, oozing or thickened from scratching. It often starts in childhood, and many people with eczema also have asthma or seasonal allergies.\n\nIn babies, eczema often appears on the cheeks and scalp. In older children and adults, it commonly affects the inside of the elbows, the backs of the knees, the hands, the neck and around the eyes. In darker skin tones, eczema may look brown, purple or gray rather than red.",
      },
      {
        title: "Common eczema triggers",
        content: "Triggers vary from person to person. Common ones include:",
        bullets: [
          "Dry air, including Arizona's low humidity and winter heating",
          "Hot showers, harsh soaps and fragranced products",
          "Sweat and heat",
          "Wool or rough fabrics",
          "Stress and lack of sleep",
          "Skin infections, which can make flares worse",
        ],
      },
      {
        title: "Treatment options",
        content:
          "Eczema can't be cured, but it can be well controlled. Your plan may include:",
        bullets: [
          "**Daily skin care**: short lukewarm showers, gentle fragrance-free cleansers and a thick moisturizer applied right after bathing",
          "**Prescription anti-inflammatory creams and ointments**, including topical steroids and steroid-free options for sensitive areas like the face and eyelids",
          "**Treatment for infection** if the skin becomes infected",
          "**Biologic injections and other advanced medications** for moderate to severe eczema that isn't controlled with creams",
        ],
        after:
          "If your eczema may be caused or worsened by an allergy to something touching your skin, we may refer you for patch testing.",
      },
      {
        title: "Eczema in children",
        content:
          "Eczema is one of the most common skin conditions we see in kids. Many children improve as they get older. We'll give you a clear plan for bathing, moisturizing and treating flares at home, and choose treatments that are safe for your child's age. Learn more about our [pediatric dermatology](/services/pediatric-dermatology) care.",
      },
    ],
    faqs: [
      {
        q: "Is eczema contagious?",
        a: "No. Eczema is not contagious and can't be passed to others, though eczema-prone skin can sometimes become infected.",
      },
      {
        q: "What is the best moisturizer for eczema?",
        a: "Thicker is usually better. Fragrance-free creams and ointments work better than thin lotions for eczema. See our guide [Lotion, Cream or Ointment?](/blog/lotion-cream-or-ointment)",
      },
      {
        q: "Are topical steroids safe?",
        a: "When used as directed, prescription steroid creams are safe and very effective. Your dermatologist will choose the right strength for each area of the body and explain how long to use it.",
      },
    ],
    related: ["hand-dermatitis", "allergic-reactions", "rash-evaluation", "pediatric-dermatology"],
    relatedPosts: ["eczema-101", "dry-skin-101", "lotion-cream-or-ointment"],
    callToAction: commonCallToAction,
  },
  {
    id: "hand-dermatitis",
    serviceName: "Hand Dermatitis",
    category: "Medical",
    mainImage: img,
    intro:
      "Dry, cracked, itchy or painful hands can make everyday tasks difficult. Hand dermatitis (hand eczema) is very common, and with the right diagnosis and routine, most people get real relief.",
    paragraphs: [
      {
        title: "What is hand dermatitis?",
        content:
          "Hand dermatitis is inflammation of the skin on the hands. It can cause dryness, redness, scaling, painful cracks (fissures), small itchy blisters, or thick, rough skin. It often affects the fingertips, the backs of the hands and the skin between the fingers.",
      },
      {
        title: "Common causes",
        content: "Hand dermatitis usually has more than one cause:",
        bullets: [
          "**Irritants**: frequent hand washing, sanitizer, water, cleaning products, solvents and friction. This is the most common cause.",
          "**Allergies** to something that touches the skin, such as fragrance, preservatives, rubber gloves, nickel or hair dye",
          "**Atopic dermatitis (eczema)**, which makes the skin barrier more fragile",
          "**Dry climate**, including Arizona's low humidity",
        ],
        after:
          "Healthcare workers, hairdressers, food service workers, mechanics, cleaners and parents of young children are especially prone to hand dermatitis.",
      },
      {
        title: "Diagnosis",
        content:
          "We'll examine your skin and ask about your job, hobbies, products and when your symptoms flare. Other conditions, such as psoriasis or a fungal infection, can look similar, so we may do a quick skin scraping. If an allergy is suspected, we may refer you for patch testing to identify the trigger.",
      },
      {
        title: "Treatment and prevention",
        content: "Treatment calms the inflammation and repairs your skin barrier. Your plan may include:",
        bullets: [
          "Prescription anti-inflammatory creams or ointments",
          "A thick, fragrance-free hand cream or ointment applied after every hand wash",
          "Cotton-lined gloves for wet work and cleaning, and avoiding latex if you're sensitive to it",
          "Lukewarm water and a gentle, fragrance-free cleanser instead of harsh soaps",
          "Ointment and cotton gloves overnight for severe dryness and cracks",
          "Oral or other advanced medications for severe or long-lasting cases",
        ],
      },
      {
        title: 'When to see a dermatologist',
        content:
          "Make an appointment if your hands haven't improved after two weeks of gentle care and moisturizer, if you have painful cracks or blisters, if the rash is spreading to other areas, or if it's affecting your work or sleep. Yellow crusting, pus or increasing pain can be signs of infection and should be checked promptly.",
      },
    ],
    faqs: [
      {
        q: "Why won't my hands heal?",
        a: "Hands are constantly exposed to water, soap and friction, so they need protection while they heal. Using a prescription treatment along with a protective routine is usually what makes the difference.",
      },
      {
        q: "Is hand sanitizer bad for hand dermatitis?",
        a: "Alcohol-based sanitizer can sting on cracked skin but is often less irritating than repeated soap and water. Apply a moisturizer afterward to protect your skin.",
      },
      {
        q: "Can hand dermatitis be caused by an allergy?",
        a: "Yes. Allergies to fragrance, preservatives, rubber and metals are common causes. If we suspect an allergy, we may refer you for patch testing.",
      },
    ],
    related: ["eczema", "allergic-reactions", "rash-evaluation", "skin-infections"],
    relatedPosts: ["eczema-101", "dry-skin-101", "lotion-cream-or-ointment"],
    callToAction: commonCallToAction,
  },
  {
    id: "warts",
    serviceName: "Wart Removal",
    category: "Medical",
    mainImage: img,
    intro:
      "Warts are common, harmless growths caused by a virus, but they can be stubborn, spread and sometimes hurt. We offer safe, effective wart treatment for children and adults.",
    paragraphs: [
      {
        title: "What causes warts?",
        content:
          "Warts are caused by the human papillomavirus (HPV). The virus enters through tiny breaks in the skin and causes a rough, raised growth. Warts can spread by touching a wart, sharing towels or razors, or walking barefoot in places like pool decks and locker rooms. Children, people who bite their nails and people with weakened immune systems get them more often.",
      },
      {
        title: "Types of warts",
        content: "Common types of warts include:",
        bullets: [
          "**Common warts**: rough bumps, often on the fingers and hands",
          "**Plantar warts**: on the soles of the feet, often flat and painful to walk on",
          "**Flat warts**: small, smooth bumps, often on the face or legs",
          "**Filiform warts**: thin, thread-like growths, often around the mouth or nose",
        ],
        after:
          "Genital warts are a different condition and need a separate evaluation. Some growths that look like warts, including certain skin cancers, are not warts at all, so it's worth having a dermatologist take a look at any spot you're unsure about.",
      },
      {
        title: "Treatment options",
        content:
          "Many warts go away on their own over months to years, but treatment can speed things up and keep them from spreading. Options include:",
        bullets: [
          "**[Cryotherapy](/services/cryotherapy)**: freezing the wart with liquid nitrogen in the office, usually repeated every few weeks",
          "**Salicylic acid**: a peeling treatment used at home, which works best with daily use",
          "**Prescription topical treatments** to irritate or stimulate the immune system against the wart",
          "**Other in-office treatments** for warts that don't respond, which we'll discuss with you",
        ],
        after:
          "Warts often need several treatments, so expect a few visits for stubborn or plantar warts. We'll choose a gentle approach for young children.",
      },
      {
        title: "Preventing warts from spreading",
        content:
          "Avoid picking or shaving over warts, keep them covered, wear sandals in public showers and pool areas, and don't share towels, razors or nail tools. Keeping hands moisturized and treating cracks also helps.",
      },
    ],
    faqs: [
      {
        q: "Does wart removal hurt?",
        a: "Freezing feels like a brief, cold sting and the area may be sore for a day or two. Plantar warts can be tender afterward. We'll help keep children as comfortable as possible.",
      },
      {
        q: "Why do warts come back?",
        a: "The virus can remain in the surrounding skin even after a wart is gone, so new warts can appear. Treating warts early, while they're small, and following prevention tips lowers the chance of recurrence.",
      },
      {
        q: "Should I see a dermatologist for a wart?",
        a: "See us if a wart is painful, spreading, on your face or genitals, not improving with home treatment, or if you aren't sure it's a wart. People with diabetes should not treat foot warts at home.",
      },
    ],
    related: ["cryotherapy", "molluscum", "pediatric-dermatology", "benign-growth-removal"],
    relatedPosts: ["what-is-this-spot-on-my-skin"],
    callToAction: commonCallToAction,
  },
  {
    id: "excessive-sweating",
    serviceName: "Excessive Sweating (Hyperhidrosis)",
    category: "Medical",
    mainImage: img,
    intro:
      "Sweating more than your body needs to stay cool is a real medical condition called hyperhidrosis. It's treatable, and we offer options from prescription antiperspirants to Botox injections.",
    paragraphs: [
      {
        title: "What is hyperhidrosis?",
        content:
          "Hyperhidrosis is excessive sweating that goes beyond what's needed to regulate body temperature. It can soak through clothes, drip from the hands, make it hard to hold a pen or shake hands, and affect confidence at work and in social situations. In the Arizona heat, everyone sweats, but people with hyperhidrosis sweat heavily even when they're cool and resting.",
      },
      {
        title: "Types and causes",
        content:
          "**Primary hyperhidrosis** is the most common type. It usually starts in childhood or the teen years, often runs in families, and affects specific areas such as the underarms, palms, soles of the feet or face. It's caused by overactive nerve signals to the sweat glands, not by anxiety or poor hygiene.\n\n**Secondary hyperhidrosis** is sweating caused by something else, such as a medication, thyroid problem, diabetes, menopause or infection. It tends to start in adulthood and may cause sweating all over the body or at night. If we suspect a secondary cause, we'll talk with you about next steps, which may include seeing your primary care doctor.",
      },
      {
        title: "Treatment options",
        content: "Treatment depends on where you sweat and how much it affects you. Options include:",
        bullets: [
          "**Clinical-strength and prescription antiperspirants**, applied at night to dry skin",
          "**Prescription medicated wipes or gels** for underarm sweating",
          "**Botox injections** for underarm sweating, which can reduce sweating for several months at a time",
          "**Oral medications** that reduce sweating throughout the body, for some patients",
          "**Iontophoresis** for sweaty hands and feet, which uses a mild electrical current in water and can be done at home with a prescribed device",
        ],
        after:
          "Many patients do best with a combination. We'll start with the simplest effective option and adjust from there.",
      },
      {
        title: "Everyday tips",
        content:
          "Choose breathable or moisture-wicking fabrics, rotate shoes so they can dry out, use absorbent insoles, and apply antiperspirant before bed rather than in the morning. These small changes can make treatment work even better.",
      },
    ],
    faqs: [
      {
        q: "How long does Botox for sweating last?",
        a: "Results from underarm Botox commonly last several months, and some people get relief for longer. Treatment can be repeated when sweating returns.",
      },
      {
        q: "Is Botox for sweating covered by insurance?",
        a: "Some plans cover Botox for severe underarm sweating, often after other treatments have been tried. Coverage varies, so we'll help you check before treatment.",
      },
      {
        q: "Is excessive sweating a sign of something serious?",
        a: "Primary hyperhidrosis is not dangerous. New sweating that starts in adulthood, happens mostly at night or comes with weight loss or fever should be evaluated, since it may have another cause.",
      },
    ],
    related: ["botox", "skin-infections", "rash-evaluation"],
    callToAction: commonCallToAction,
  },
  {
    id: "hair-loss",
    serviceName: "Hair Loss Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Thinning hair, a widening part or sudden bald patches can be upsetting. We find the cause of hair loss in men and women and build a treatment plan to slow shedding and help regrow hair.",
    paragraphs: [
      {
        title: "Common causes of hair loss",
        content: "Hair loss has many causes, and finding the right one is the key to treating it:",
        bullets: [
          "**Pattern hair loss** (androgenetic alopecia): gradual thinning at the crown, temples or part, the most common cause in both men and women",
          "**Telogen effluvium**: sudden, heavy shedding a few months after illness, surgery, childbirth, major stress or rapid weight loss",
          "**Alopecia areata**: round, smooth bald patches caused by the immune system",
          "**Traction alopecia**: thinning from tight hairstyles, braids or extensions",
          "**Scarring alopecias**: less common conditions that can permanently damage hair follicles and need prompt treatment",
          "**Medical causes**, such as thyroid disease, low iron, hormonal changes and certain medications",
        ],
      },
      {
        title: "Your evaluation",
        content:
          "We'll ask about your health, family history, medications and hair care, and examine your scalp closely, often with a magnifying dermatoscope. We may recommend blood tests to check iron, thyroid and other levels. If the cause is unclear or a scarring condition is possible, a small scalp biopsy can give answers.",
      },
      {
        title: "Treatment options",
        content: "Your plan depends on the type of hair loss. Options may include:",
        bullets: [
          "**Minoxidil**, as a topical foam or solution, or a low-dose pill for some patients",
          "**Finasteride or dutasteride** for pattern hair loss in men",
          "**Spironolactone** and other options for women with pattern hair loss",
          "**Steroid injections** into the scalp for alopecia areata and some inflammatory conditions",
          "**Newer oral medications** for severe alopecia areata",
          "**Treating underlying causes**, such as low iron or a thyroid problem",
        ],
        after:
          "If you're interested in a hair transplant, we can talk through whether you might be a candidate and refer you.",
      },
      {
        title: "Why early treatment matters",
        content:
          "Treatments for pattern hair loss work best at keeping the hair you have, so starting sooner gives better results. Most treatments take 4 to 6 months to show a difference and about a year for full results, so patience is important. Read more in [Thinning Hair in Men: What Actually Works](/blog/thinning-hair-in-men).",
      },
    ],
    faqs: [
      {
        q: "Is it normal to lose hair every day?",
        a: "Yes. Most people shed around 50 to 100 hairs a day. Shedding much more than usual, a widening part, or bald patches are reasons to see a dermatologist.",
      },
      {
        q: "Will my hair grow back?",
        a: "It depends on the cause. Hair often regrows after telogen effluvium and many cases of alopecia areata. Pattern hair loss can be slowed and partly reversed with ongoing treatment. Scarring alopecias need prompt care to protect remaining hair.",
      },
      {
        q: "Do hair loss shampoos and supplements work?",
        a: "Most have little evidence behind them. Biotin rarely helps unless you're deficient and can interfere with some blood tests. We'll focus on proven treatments.",
      },
    ],
    related: ["dandruff", "rash-evaluation", "skin-biopsy"],
    relatedPosts: ["thinning-hair-in-men", "dandruff-treatment"],
    callToAction: commonCallToAction,
  },
  {
    id: "dark-spots",
    serviceName: "Dark Spots Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Sun spots, melasma and dark marks left by acne can make skin tone look uneven. We first make sure a spot is harmless, then build a plan to fade it and keep new spots from forming.",
    paragraphs: [
      {
        title: "Types of dark spots",
        content: "Dark spots (hyperpigmentation) happen when skin makes extra pigment (melanin). Common types include:",
        bullets: [
          "**Sun spots** (solar lentigines): flat brown spots on the face, hands, arms and chest from years of sun",
          "**Melasma**: larger brown or gray-brown patches, often on the cheeks, forehead and upper lip, triggered by sun, heat and hormones such as pregnancy or birth control",
          "**Post-inflammatory hyperpigmentation**: dark marks left after acne, eczema, bug bites or injuries, especially common in medium and darker skin tones",
          "**Freckles and other benign spots**, such as seborrheic keratoses",
        ],
      },
      {
        title: "Checking that a spot is safe",
        content:
          "Some skin cancers, including melanoma, can look like an ordinary brown spot. Before treating any dark spot, your dermatologist will examine it, often with a dermatoscope. A spot that is new, changing, irregular or different from your others may need a [biopsy](/services/skin-biopsy) first.",
      },
      {
        title: "Treatment options",
        content: "The best treatment depends on the type of spot and your skin tone. Options may include:",
        bullets: [
          "**Prescription lightening creams**, such as hydroquinone, often combined with a retinoid and a mild steroid",
          "**Retinoids** like tretinoin, which speed up skin turnover and fade pigment",
          "**Other brightening ingredients**, such as azelaic acid, vitamin C, niacinamide and tranexamic acid (topical or, for some melasma patients, oral)",
          "**[Chemical peels](/services/chemical-peels)** to remove pigmented surface skin and boost results",
          "**[Cryotherapy](/services/cryotherapy)** for some individual sun spots",
        ],
        after:
          "If laser or light-based treatment might help your spots, we can talk about it and refer you.",
      },
      {
        title: "Sun protection is the most important step",
        content:
          "No treatment works for long without daily sun protection, especially in Arizona. Use a broad-spectrum SPF 30 or higher sunscreen every day, reapply when outdoors, and wear a wide-brimmed hat. For melasma, a tinted mineral sunscreen with iron oxides also helps block visible light, which can darken melasma. See [Sunscreen 101](/blog/sunscreen-101) for tips.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to fade dark spots?",
        a: "Most treatments take 8 to 12 weeks to show results, and melasma often needs ongoing maintenance. Spots from acne usually fade faster once breakouts are under control.",
      },
      {
        q: "Can melasma be cured?",
        a: "Melasma can be greatly improved but often returns with sun, heat or hormonal changes. Daily sun protection and a maintenance plan keep it under control.",
      },
      {
        q: "Are dark spot treatments safe for darker skin tones?",
        a: "Yes, with the right approach. Some treatments can irritate or darken brown skin if used incorrectly, so we choose gentle, effective options suited to your skin tone.",
      },
    ],
    related: ["chemical-peels", "acne", "benign-growth-removal", "skin-cancer-screening"],
    relatedPosts: ["sunscreen-101", "sunscreen-for-darker-skin-tones", "anti-aging-skincare"],
    callToAction: commonCallToAction,
  },
  {
    id: "allergic-reactions",
    serviceName: "Skin Allergy Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Itchy rashes, hives and swelling can come from something you touched, ate or took. We find the likely cause, calm your skin and help you prevent future reactions.",
    paragraphs: [
      {
        title: "Common types of allergic skin reactions",
        content: "Allergic and allergy-like reactions on the skin include:",
        bullets: [
          "**Allergic contact dermatitis**: an itchy, red, sometimes blistering rash where the skin touched an allergen, such as nickel, fragrance, preservatives, hair dye, adhesives or poison ivy",
          "**Irritant contact dermatitis**: a rash from harsh soaps, chemicals or frequent washing (not a true allergy, but it looks similar)",
          "**Hives (urticaria)**: raised, itchy welts that come and go, sometimes with swelling of the lips or eyelids",
          "**Drug rashes**: a widespread rash after starting a new medication",
        ],
      },
      {
        title: "When to get emergency care",
        content:
          "Call 911 or go to the emergency room right away for swelling of the tongue or throat, trouble breathing or swallowing, dizziness or fainting, or a rash with blistering, peeling skin or sores in the mouth or eyes. These can be signs of a severe reaction.",
      },
      {
        title: "Finding the cause",
        content:
          "We'll look at the pattern of your rash and ask about products, jewelry, work exposures, new medications, foods and recent illnesses. The location of a rash often gives clues: earlobes and wrists point to metals, eyelids to cosmetics or nail polish, and hands to gloves or workplace chemicals. If an allergy to something touching your skin is likely, we may refer you for patch testing to pinpoint it.",
      },
      {
        title: "Treatment options",
        content: "Treatment focuses on calming the reaction and avoiding the trigger:",
        bullets: [
          "Avoiding the suspected trigger and switching to gentle, fragrance-free products",
          "Prescription anti-inflammatory creams for contact dermatitis",
          "A short course of oral steroids for severe or widespread rashes",
          "Daily non-drowsy antihistamines for hives",
          "Additional prescription treatments for chronic hives that keep coming back",
        ],
        after:
          "Most contact rashes improve within one to three weeks once the trigger is removed and treatment begins.",
      },
    ],
    faqs: [
      {
        q: "Why did I suddenly become allergic to a product I've used for years?",
        a: "Contact allergies develop after repeated exposure, so you can become allergic to something you've used without problems for a long time.",
      },
      {
        q: "What's the difference between hives and contact dermatitis?",
        a: "Hives are welts that move around and usually fade within 24 hours. Contact dermatitis is a rash that stays in the area that touched the trigger and lasts days to weeks.",
      },
      {
        q: "Do you do allergy testing?",
        a: "We don't perform patch testing in our office. If we think an allergy test would help, we'll refer you to a provider who does.",
      },
      {
        q: 'How long does hives last?',
        a: 'Most cases of hives clear within a few days to weeks. Hives that keep coming back for more than six weeks are called chronic hives, and they often have no single trigger. Effective daily treatments can control them.',
      },
    ],
    related: ["rash-evaluation", "eczema", "hand-dermatitis", "skin-infections"],
    relatedPosts: ["eczema-101", "dry-skin-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "molluscum",
    serviceName: "Molluscum Contagiosum Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Molluscum contagiosum is a common viral skin infection that causes small, smooth bumps, especially in children. We offer gentle treatments to clear the bumps and help stop them from spreading.",
    paragraphs: [
      {
        title: "What is molluscum contagiosum?",
        content:
          "Molluscum is caused by a poxvirus that only infects the top layer of skin. It causes small, firm, flesh-colored or pink bumps, usually 2 to 5 millimeters across, often with a tiny dimple in the center. The bumps are usually painless but can become itchy, red or irritated, especially in children with eczema.\n\nMolluscum is most common in children ages 1 to 10, but adults can get it too. It is harmless and usually goes away on its own, but that can take many months to a year or more.",
      },
      {
        title: "How molluscum spreads",
        content:
          "Molluscum spreads through skin-to-skin contact and shared items such as towels, bath toys and sports equipment. It can also spread to new areas of your own body through scratching or shaving. Swimming pools, bathing together and contact sports are common ways children pass it along.",
      },
      {
        title: "Treatment options",
        content:
          "Treatment is not always required, but many families choose it to clear the bumps faster, ease itching and reduce spread. Options include:",
        bullets: [
          "**Prescription topical medications** applied at home or in the office",
          "**[Cryotherapy](/services/cryotherapy)**: freezing individual bumps with liquid nitrogen, usually for older children and adults",
          "**Curettage**: gently removing bumps with a small instrument",
          "**Watchful waiting** with steps to limit spread, especially for young children with only a few bumps",
        ],
        after:
          "We'll choose an approach based on your child's age, the number and location of bumps, and how comfortable your child is with treatment. Several visits are often needed.",
      },
      {
        title: "Tips to prevent spread",
        content:
          "Avoid picking or scratching the bumps, cover them with clothing or bandages during sports and swimming, don't share towels or baths, and treat any eczema, since itchy skin spreads molluscum faster. Children can keep going to school and daycare.",
      },
    ],
    faqs: [
      {
        q: "How long does molluscum last?",
        a: "Without treatment, molluscum usually clears in 6 to 12 months, though it can last longer. Treatment can shorten that time.",
      },
      {
        q: "Why is the skin around the bumps red?",
        a: "Redness or a scaly patch around the bumps often means the immune system is starting to fight the virus, and the bumps may soon go away. Increasing pain, warmth or pus should be checked for infection.",
      },
      {
        q: "Can adults get molluscum?",
        a: "Yes. In adults, molluscum is often spread through intimate contact or shaving, and widespread molluscum can be a sign of a weakened immune system. Adults with molluscum should see a dermatologist.",
      },
      {
        q: 'Can my child still swim with molluscum?',
        a: 'Yes. Children with molluscum can swim, but cover any bumps with a waterproof bandage, and avoid sharing towels or kickboards.',
      },
    ],
    related: ["warts", "pediatric-dermatology", "cryotherapy", "eczema"],
    callToAction: commonCallToAction,
  },
  {
    id: "dandruff",
    serviceName: "Dandruff Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Flakes and an itchy scalp are common and treatable. We help you find what's behind your dandruff, from seborrheic dermatitis to psoriasis, and choose treatments that actually work.",
    paragraphs: [
      {
        title: "What causes dandruff?",
        content:
          "Most dandruff is a mild form of **seborrheic dermatitis**, a common condition linked to a yeast called Malassezia that lives on everyone's skin. In some people, this yeast triggers inflammation, leading to flaking, itching and sometimes redness. Seborrheic dermatitis can also affect the eyebrows, sides of the nose, behind the ears, the beard and the chest. In babies, it's known as cradle cap.\n\nFlares are common with stress, cold or dry weather and infrequent washing. Other conditions can also cause a flaky scalp, including [psoriasis](/services/psoriasis), [eczema](/services/eczema), fungal infections and reactions to hair products, which is why a correct diagnosis matters.",
      },
      {
        title: "Treatments that work",
        content: "Most people do well with the right shampoo used the right way:",
        bullets: [
          "**Medicated shampoos** with ketoconazole, selenium sulfide, zinc pyrithione, salicylic acid or coal tar, rotated as needed",
          "**Leave the lather on** for 5 minutes before rinsing so the active ingredient has time to work",
          "**Prescription antifungal shampoos, creams or foams** for stubborn cases",
          "**Prescription anti-inflammatory solutions or foams** to calm itching and redness during flares",
          "**Steroid-free creams** for the face, eyebrows and beard",
        ],
        after:
          "Seborrheic dermatitis tends to come back, so most people use a medicated shampoo once or twice a week to keep it away once it's under control. Read [Dandruff: What Actually Works](/blog/dandruff-treatment) for more tips.",
      },
      {
        title: "Tips for curly and textured hair",
        content:
          "If you wash less often, apply medicated shampoo to the scalp only and follow with conditioner on the lengths of your hair to prevent dryness. Avoid heavy oils and pomades on the scalp, which can feed the yeast. We'll tailor a routine that fits your hair type and washing schedule.",
      },
      {
        title: "When to see a dermatologist",
        content:
          "See us if over-the-counter shampoos haven't helped after a few weeks, if your scalp is very red, painful or crusted, if you're losing hair, or if the rash has spread to your face or body.",
      },
    ],
    faqs: [
      {
        q: "Is dandruff caused by a dry scalp?",
        a: "Usually not. Dandruff flakes are often oily and yellowish, and they're caused by inflammation, not dryness. Oiling the scalp can actually make it worse.",
      },
      {
        q: "Is dandruff contagious?",
        a: "No. Dandruff and seborrheic dermatitis are not contagious.",
      },
      {
        q: "Can dandruff cause hair loss?",
        a: "Dandruff itself rarely causes hair loss, but heavy scratching and inflammation can lead to some shedding. If you're noticing thinning, mention it at your visit.",
      },
      {
        q: 'Can babies get dandruff?',
        a: 'Yes. In babies, seborrheic dermatitis is called cradle cap. It usually clears by itself in a few months. Gently washing with baby shampoo and softening the scales with a little oil can help; see us if it spreads or seems itchy or inflamed.',
      },
    ],
    related: ["psoriasis", "hair-loss", "rash-evaluation", "skin-infections"],
    relatedPosts: ["dandruff-treatment"],
    callToAction: commonCallToAction,
  },
  {
    id: "vitiligo",
    serviceName: "Vitiligo Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Vitiligo causes patches of skin to lose their color. Newer treatments can help stop it from spreading and bring color back, and we'll help you find the right plan for your skin and goals.",
    paragraphs: [
      {
        title: "What is vitiligo?",
        content:
          "Vitiligo is a condition in which the immune system attacks melanocytes, the cells that give skin its color. This causes white or light patches, often on the face, hands, around the mouth and eyes, elbows, knees and genitals. Hair in the patches may turn white as well. Vitiligo affects people of all skin tones, but it's often more noticeable on darker skin.\n\nVitiligo is not contagious and is not caused by anything you did. It can run in families and is sometimes linked to other autoimmune conditions, such as thyroid disease.",
      },
      {
        title: "Diagnosis",
        content:
          "We'll examine your skin closely to confirm the diagnosis. Some other conditions, such as fungal infections and patches left after inflammation, can look similar. We may recommend blood tests to check your thyroid.",
      },
      {
        title: "Treatment options",
        content:
          "Treatment works best when started early, while patches are newer. Options may include:",
        bullets: [
          "**Prescription creams**, such as topical steroids and steroid-free calcineurin inhibitors, to calm the immune attack",
          "**A JAK inhibitor cream** approved for vitiligo in people 12 and older, which can help restore color on the face and body",
          "**Oral medications** to slow rapidly spreading vitiligo, in select cases",
          "**Camouflage** with makeup or self-tanner, if you'd like to make patches less noticeable",
        ],
        after:
          "Phototherapy (light treatment) can also help many people with vitiligo. If it's a good fit for you, we can refer you to a center that offers it.",
      },
      {
        title: "What to expect",
        content:
          "Repigmentation is gradual. It often appears first as small dots of color around hair follicles and can take 3 to 6 months or longer. The face and neck usually respond best; the hands and feet are slower. We'll follow your progress and adjust your plan as needed.",
      },
      {
        title: "Protecting your skin",
        content:
          "Skin without pigment sunburns easily. Use a broad-spectrum SPF 30 or higher sunscreen on your patches and wear protective clothing, especially in the Arizona sun.",
      },
    ],
    faqs: [
      {
        q: "Can vitiligo be cured?",
        a: "There's no permanent cure yet, but many people get meaningful repigmentation with treatment, and treatment can help keep vitiligo from spreading.",
      },
      {
        q: "Will vitiligo spread?",
        a: "Vitiligo is unpredictable. Some people have stable patches for years; others see new patches. Early treatment can help slow spread.",
      },
      {
        q: "Do I have to treat vitiligo?",
        a: "No. Vitiligo is not harmful to your health, and treatment is a personal choice. We'll support you whether you want treatment, camouflage or simply sun protection.",
      },
      {
        q: 'Is vitiligo linked to other health conditions?',
        a: 'Vitiligo is sometimes associated with other autoimmune conditions, especially thyroid disease. We may recommend a blood test, and you should tell your primary care doctor about your diagnosis.',
      },
    ],
    related: ["dark-spots", "psoriasis", "rash-evaluation"],
    relatedPosts: ["sunscreen-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "psoriasis",
    serviceName: "Psoriasis Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Psoriasis causes thick, scaly, itchy patches that can affect your skin, scalp, nails and joints. Today's treatments can clear or nearly clear the skin for many people, and we'll help you find the right one.",
    paragraphs: [
      {
        title: "What is psoriasis?",
        content:
          "Psoriasis is a chronic immune condition that makes skin cells grow too quickly. The extra cells pile up into raised, scaly patches called plaques, most often on the elbows, knees, scalp, lower back and nails. On lighter skin, plaques usually look red with silvery-white scale; on darker skin they may look purple, gray or dark brown.\n\nPsoriasis is not contagious. It tends to run in families and can flare with stress, infections such as strep throat, skin injuries, cold dry weather, smoking, alcohol and certain medications.",
      },
      {
        title: "More than skin deep",
        content:
          "Up to about one in three people with psoriasis develop **psoriatic arthritis**, which causes joint pain, stiffness and swelling. Psoriasis is also linked to a higher risk of heart disease, diabetes and depression. Tell us about joint pain or morning stiffness, since treating early can help protect your joints.",
      },
      {
        title: "Treatment options",
        content: "Treatment depends on how much skin is involved, where it is and how it affects your life:",
        bullets: [
          "**Topical treatments**: steroid creams, vitamin D creams and newer steroid-free creams and foams",
          "**Scalp treatments**: medicated shampoos, solutions and foams",
          "**Oral medications** that calm the immune system, for more widespread psoriasis",
          "**Biologic injections**, which target specific parts of the immune system and work very well for moderate to severe psoriasis and psoriatic arthritis",
        ],
        after:
          "Some medications need periodic blood work, which we'll arrange. Phototherapy (light treatment) is another option for some patients; if it might help you, we can refer you.",
      },
      {
        title: "Living with psoriasis",
        content:
          "Moisturize daily with a thick cream, take lukewarm showers, avoid picking scale, and manage stress when you can. Quitting smoking and keeping a healthy weight can improve psoriasis and help treatments work better.",
      },
    ],
    faqs: [
      {
        q: "Can psoriasis be cured?",
        a: "Psoriasis is a long-term condition, but many people achieve clear or almost clear skin with the right treatment and stay that way with ongoing care.",
      },
      {
        q: "Are biologics safe?",
        a: "Biologics have been used for psoriasis for many years and are generally well tolerated. We'll review your health history, screen for certain infections before starting and monitor you during treatment.",
      },
      {
        q: "Is it psoriasis or eczema?",
        a: "They can look alike. Psoriasis plaques tend to be thicker, more sharply defined and scalier, and often appear on the elbows, knees and scalp. A dermatologist can tell the difference.",
      },
      {
        q: 'Can psoriasis affect my nails?',
        a: "Yes. Nail psoriasis can cause pitting, discoloration, crumbling or lifting of the nails, and it's more common in people with psoriatic arthritis. See our [nail conditions](/services/nail-conditions) page.",
      },
    ],
    related: ["eczema", "nail-conditions", "dandruff", "rash-evaluation"],
    relatedPosts: ["dry-skin-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "rosaceae",
    serviceName: "Rosacea Treatment",
    category: "Medical",
    mainImage: img,
    intro:
      "Rosacea causes facial redness, flushing and acne-like bumps. It can't be cured, but it can be well controlled with the right treatment and by avoiding your triggers.",
    paragraphs: [
      {
        title: "What is rosacea?",
        content: "Rosacea is a chronic skin condition that usually affects the central face. It most often starts after age 30. Signs include:",
        bullets: [
          "Flushing or blushing easily",
          "Persistent redness across the cheeks, nose, chin or forehead",
          "Small visible blood vessels",
          "Red bumps and pus-filled pimples (without blackheads)",
          "Burning, stinging or sensitive skin",
          "Dry, gritty or irritated eyes (ocular rosacea)",
          "In some people, thickened skin on the nose (rhinophyma)",
        ],
      },
      {
        title: "Common triggers",
        content:
          "Rosacea flares are often set off by sun, heat, hot drinks, spicy food, alcohol (especially red wine), exercise, stress, wind and harsh skin care products. Arizona's heat and sun make trigger management especially important. Keeping a simple diary can help you spot yours.",
      },
      {
        title: "Treatment options",
        content: "We tailor treatment to your symptoms:",
        bullets: [
          "**Prescription creams and gels**, such as metronidazole, azelaic acid and ivermectin, for bumps and redness",
          "**Oral anti-inflammatory medications**, such as low-dose doxycycline, for more active rosacea",
          "**Prescription creams that temporarily reduce redness** for several hours",
          "**A gentle skin care routine** with a mild cleanser, fragrance-free moisturizer and a mineral sunscreen every day",
          "**Treatment for eye symptoms**, with referral to an eye doctor when needed",
        ],
        after:
          "Visible blood vessels and persistent redness often respond best to laser or light treatment. If that might help you, we can discuss it and refer you.",
      },
      {
        title: "Rosacea or acne?",
        content:
          "Rosacea is often mistaken for acne, but some acne treatments, such as harsh scrubs and certain topical medications, can make rosacea worse. Getting the right diagnosis matters. Read more in [Rosacea 101](/blog/rosacea-101).",
      },
      {
        title: 'Rosacea in all skin tones',
        content:
          'Rosacea is most often diagnosed in people with fair skin, but it affects all skin tones. On brown and Black skin, redness can be harder to see, and rosacea may show up instead as warmth, stinging, dryness or acne-like bumps. If your face often burns or flushes, or products that used to be fine now sting, rosacea is worth considering.',
      },
    ],
    faqs: [
      {
        q: "Is rosacea caused by drinking alcohol?",
        a: "No. Alcohol can trigger flushing in people with rosacea, but rosacea affects many people who don't drink.",
      },
      {
        q: "How long does rosacea treatment take to work?",
        a: "Bumps usually improve within 4 to 8 weeks of treatment. Redness can take longer, and ongoing treatment helps prevent flares.",
      },
      {
        q: "What sunscreen is best for rosacea?",
        a: "Mineral sunscreens with zinc oxide or titanium dioxide are usually the least irritating for rosacea-prone skin.",
      },
      {
        q: 'Can rosacea affect the eyes?',
        a: 'Yes. Ocular rosacea can cause dry, gritty, red or irritated eyes and swollen eyelids. Let us know about eye symptoms; we can start treatment and refer you to an eye doctor when needed.',
      },
    ],
    related: ["acne", "dark-spots", "rash-evaluation"],
    relatedPosts: ["rosacea-101", "sunscreen-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "actinic-keratosis",
    serviceName: "Actinic Keratosis (Precancerous Spots)",
    category: "Medical",
    mainImage: img,
    intro:
      "Actinic keratoses are rough, scaly spots caused by years of sun exposure. They're very common in Arizona, and treating them lowers the chance that they turn into skin cancer.",
    paragraphs: [
      {
        title: "What are actinic keratoses?",
        content:
          "Actinic keratoses (AKs), also called solar keratoses, are rough, dry or crusty spots that develop on sun-damaged skin. They're often easier to feel than to see, like sandpaper under your fingertip. AKs can be pink, red, tan or skin-colored, and they may come and go or feel tender.\n\nThey usually appear on the areas that get the most sun: the face, ears, scalp (especially with thinning hair), lips, neck, forearms and the backs of the hands. They're most common in adults over 40 with fair skin, but anyone with a lot of sun exposure can get them.",
      },
      {
        title: "Why treatment matters",
        content:
          "AKs are considered precancerous. Most won't become cancer, but a small percentage can turn into squamous cell carcinoma, a common type of skin cancer, and it's hard to tell which ones will. Having AKs is also a sign of significant sun damage, which raises your overall risk of skin cancer. That's why we recommend treating AKs and having regular [skin cancer screenings](/services/skin-cancer-screening).\n\nSee a dermatologist promptly if a spot grows quickly, becomes thick or raised, bleeds, or becomes painful, since these can be signs of skin cancer. AKs on the lips (actinic cheilitis) also deserve a closer look.",
      },
      {
        title: "Treatment options",
        content: "The right treatment depends on how many spots you have and where they are:",
        bullets: [
          "**[Cryotherapy](/services/cryotherapy)**: freezing individual spots with liquid nitrogen in the office. It takes seconds and is the most common treatment.",
          "**Prescription field treatment creams**, such as 5-fluorouracil (5-FU) or imiquimod, applied at home to treat a whole area, including early damage you can't see yet",
          "**[Biopsy](/services/skin-biopsy)** of any spot that looks thick or unusual, to rule out skin cancer",
        ],
        after:
          "Field treatment creams cause temporary redness, crusting and irritation, which is a sign they're working. We'll explain what to expect and help you plan treatment around your schedule. Many patients choose to use them in the cooler months when they spend less time outdoors.",
      },
      {
        title: "Preventing new spots",
        content:
          "Daily broad-spectrum SPF 30 or higher sunscreen, wide-brimmed hats, sun-protective clothing and avoiding midday sun can reduce new AKs. Some research suggests nicotinamide (vitamin B3) may also help people at high risk; ask us if it's right for you. See [Sun Protection Beyond Sunscreen](/blog/sun-protection-clothing-upf-winter-sun) for tips.",
      },
    ],
    faqs: [
      {
        q: "Are actinic keratoses cancer?",
        a: "No, they're precancerous. Most never become cancer, but treating them reduces the risk, and regular skin checks help us catch any that change.",
      },
      {
        q: "Will actinic keratoses come back?",
        a: "Treated spots usually clear, but new ones can develop on sun-damaged skin over time. Sun protection and regular checkups help keep them under control.",
      },
      {
        q: "Is treatment covered by insurance?",
        a: "Treatment of actinic keratoses is generally considered medical care and is covered by many insurance plans. Call us if you have questions about your coverage.",
      },
    ],
    related: ["cryotherapy", "skin-cancer-screening", "skin-biopsy", "mohs-surgery"],
    relatedPosts: ["what-is-this-spot-on-my-skin", "skin-cancer-101", "sun-protection-clothing-upf-winter-sun"],
    callToAction: commonCallToAction,
  },
  {
    id: "mole-evaluation",
    serviceName: "Mole Evaluation & Removal",
    category: "Medical",
    mainImage: img,
    intro:
      "Most moles are harmless, but a new or changing mole should be checked. We evaluate moles carefully, biopsy anything suspicious and remove moles for medical or cosmetic reasons.",
    paragraphs: [
      {
        title: "When a mole needs a closer look",
        content:
          "Moles (nevi) are clusters of pigment cells. Most adults have 10 to 40, and nearly all are harmless. But melanoma, the most serious type of skin cancer, can start in an existing mole or appear as a new dark spot. Dermatologists use the ABCDE warning signs:",
        bullets: [
          "**A**symmetry: one half doesn't match the other",
          "**B**order: edges that are ragged, notched or blurred",
          "**C**olor: uneven color, or shades of brown, black, red, white or blue",
          "**D**iameter: larger than about 6 mm (a pencil eraser), though melanomas can be smaller",
          "**E**volving: any change in size, shape, color or height, or new symptoms",
        ],
        after:
          "Also watch for the \"ugly duckling\": a mole that looks different from your others. A mole that itches, bleeds, crusts or won't heal should be checked too.",
      },
      {
        title: "A careful exam",
        content:
          "We'll examine the mole with dermoscopy, a lighted magnifier that shows structures beneath the skin's surface. This helps us tell which moles are reassuring and which need a closer look. We'll often check your other moles too, or recommend a full [skin cancer screening](/services/skin-cancer-screening).\n\nIf a mole looks suspicious, we'll perform a quick [skin biopsy](/services/skin-biopsy) in the office so it can be examined under a microscope by a specialist. Most biopsies come back benign.",
      },
      {
        title: "Mole removal",
        content: "Moles can be removed for medical reasons or because they bother you. Common methods include:",
        bullets: [
          "**Shave removal**: the mole is numbed and shaved flush with the skin. No stitches are needed, and it heals in one to two weeks.",
          "**Excision**: the mole and a small margin of skin are removed and closed with a few stitches. This is used for deeper moles or when the whole mole needs to be examined.",
        ],
        after:
          "Every removed mole is sent to the lab to confirm it's benign. Any removal leaves some mark; we'll talk about the expected scar before your procedure. When a mole is removed only for cosmetic reasons, insurance usually doesn't cover it, and we'll discuss any cost with you beforehand.",
      },
    ],
    faqs: [
      {
        q: "Is it safe to remove a mole at home?",
        a: "No. At-home removal creams and tools can cause scarring and infection, and they leave nothing to test, so a skin cancer could be missed.",
      },
      {
        q: "Can a removed mole grow back?",
        a: "Sometimes a little pigment returns after a shave removal. This is usually harmless, but let us know so we can check it.",
      },
      {
        q: "How often should I have my moles checked?",
        a: "Adults with many moles, unusual moles or a family history of melanoma often benefit from yearly skin exams. We'll recommend a schedule based on your risk.",
      },
    ],
    related: ["skin-cancer-screening", "skin-biopsy", "excision", "benign-growth-removal"],
    relatedPosts: ["skin-cancer-101", "what-is-this-spot-on-my-skin"],
    callToAction: commonCallToAction,
  },
  {
    id: "rash-evaluation",
    serviceName: "Rash Evaluation",
    category: "Medical",
    mainImage: img,
    intro:
      "If you have a rash that won't go away, keeps coming back or is spreading, a dermatologist can figure out what it is. The right diagnosis leads to the right treatment.",
    paragraphs: [
      {
        title: "When to see a dermatologist for a rash",
        content: "Many rashes clear on their own, but it's time to make an appointment if your rash:",
        bullets: [
          "Hasn't improved after a week or two of over-the-counter treatment",
          "Is spreading, very itchy or painful, or keeping you up at night",
          "Keeps coming back in the same place",
          "Appeared after starting a new medication",
          "Is blistering, oozing, crusting or looks infected",
        ],
        after:
          "Get emergency care right away for a rash with fever and feeling very ill, rapidly spreading purple spots, skin peeling or blistering over large areas, sores in the mouth or eyes, or swelling of the face or throat with trouble breathing.",
      },
      {
        title: "Why rashes can be hard to tell apart",
        content:
          "Many different conditions cause red, itchy skin, and they can look very similar. Common causes include [eczema](/services/eczema), contact dermatitis and [allergic reactions](/services/allergic-reactions), [psoriasis](/services/psoriasis), fungal and bacterial [skin infections](/services/skin-infections), hives, seborrheic dermatitis, drug reactions and autoimmune conditions. Using the wrong cream can make some rashes worse; for example, steroid creams can spread a fungal infection.",
      },
      {
        title: "Finding the cause",
        content:
          "We'll look closely at your rash and ask when it started, where it appeared first, what makes it better or worse, and about your products, medications, work, travel, pets and family members with similar symptoms. Photos of earlier flares are helpful. When needed, we may do a quick in-office test, such as:",
        bullets: [
          "A **skin scraping** to look for fungus",
          "A **culture** to check for bacteria or a virus",
          "A **[skin biopsy](/services/skin-biopsy)**, a small sample examined under a microscope",
          "**Blood tests**, when a rash may be linked to a condition elsewhere in the body",
        ],
        after: "If an allergy to something touching your skin is likely, we may refer you for patch testing.",
      },
      {
        title: "Targeted treatment",
        content:
          "Once we know the cause, we'll build a treatment plan to calm your skin, relieve itching and keep the rash from coming back. That may include prescription creams, oral medications, gentle skin care and steps to avoid triggers. We'll schedule a follow-up to make sure your skin is improving.",
      },
    ],
    faqs: [
      {
        q: "Should I stop using creams before my appointment?",
        a: "Keep using anything a doctor prescribed unless told otherwise, but bring a list or photos of everything you've tried. If a new product seems to have caused the rash, stop using it.",
      },
      {
        q: "Can stress cause a rash?",
        a: "Stress can trigger or worsen conditions like eczema, psoriasis and hives, but a rash usually has an underlying cause that can be treated.",
      },
      {
        q: "Can you see my child for a rash?",
        a: "Yes. We see children and teens for rashes and many other skin conditions. Learn more about our [pediatric dermatology](/services/pediatric-dermatology) care.",
      },
    ],
    related: ["allergic-reactions", "eczema", "skin-infections", "psoriasis"],
    relatedPosts: ["eczema-101", "dry-skin-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "skin-infections",
    serviceName: "Skin Infections",
    category: "Medical",
    mainImage: img,
    intro:
      "Fungal, bacterial and viral skin infections are common and usually very treatable. We confirm what's causing yours so you get the right treatment from the start.",
    paragraphs: [
      {
        title: "Common skin infections we treat",
        content: "Skin infections are caused by fungi, bacteria or viruses. Common examples include:",
        bullets: [
          "**Fungal**: ringworm (tinea) on the body, groin (jock itch), feet (athlete's foot) or scalp; nail fungus; tinea versicolor, which causes light or dark patches on the chest and back; and yeast infections in skin folds",
          "**Bacterial**: impetigo, a crusty, honey-colored rash common in children; folliculitis, infected hair follicles; and boils",
          "**Viral**: [warts](/services/warts), [molluscum contagiosum](/services/molluscum), cold sores and shingles",
        ],
        after:
          "Arizona's heat and sweat can make fungal infections and folliculitis especially common, particularly in skin folds and under tight athletic clothing.",
      },
      {
        title: "Accurate diagnosis",
        content:
          "Many infections look like other rashes, such as eczema or psoriasis, and the wrong cream can make some of them worse. Steroid creams, for example, can make a fungal infection spread. We can often confirm the cause in the office with a quick skin scraping examined for fungus, or send a culture to the lab.",
      },
      {
        title: "Effective treatment",
        content: "Depending on the cause, treatment may include:",
        bullets: [
          "Prescription antifungal creams, shampoos or pills",
          "Topical or oral antibiotics for bacterial infections",
          "Antibacterial washes to prevent recurrent folliculitis and boils",
          "Antiviral medication for cold sores and shingles",
          "Draining a painful boil in the office when needed",
        ],
        after:
          "Finish the full course of any medication, even if your skin looks better sooner, to help keep the infection from coming back.",
      },
      {
        title: "When to seek care right away",
        content:
          "Spreading redness, warmth, swelling or red streaks, especially with fever, can be signs of cellulitis, a deeper infection. Seek same-day care or go to urgent care or the emergency room. Shingles near the eye also needs prompt treatment.",
      },
      {
        title: "Preventing infections",
        content:
          "Keep skin clean and dry, change out of sweaty clothes quickly, wear sandals in locker rooms and pool areas, don't share towels or razors, and keep cuts covered. Recurrent infections can sometimes be a sign of diabetes or another health condition, so let us know if they keep coming back.",
      },
    ],
    faqs: [
      {
        q: "Is ringworm a worm?",
        a: "No. Ringworm is a fungal infection that often makes a ring-shaped, scaly rash. It's easily treated with antifungal medication.",
      },
      {
        q: "Are skin infections contagious?",
        a: "Many are, including impetigo, ringworm and molluscum. Ask us how long to keep your child home from school or sports and how to avoid spreading it at home.",
      },
      {
        q: "Why does my folliculitis keep coming back?",
        a: "Shaving, sweat, tight clothing and hot tubs are common triggers. We'll help identify yours and may suggest antibacterial washes or other treatments to prevent flares.",
      },
    ],
    related: ["rash-evaluation", "nail-conditions", "warts", "hidradenitis-suppurativa"],
    callToAction: commonCallToAction,
  },
  {
    id: "nail-conditions",
    serviceName: "Nail Conditions",
    category: "Medical",
    mainImage: img,
    intro:
      "Dermatologists treat nails as well as skin and hair. From nail fungus to a new dark streak, we diagnose and treat nail problems of the fingers and toes.",
    paragraphs: [
      {
        title: "Common nail problems",
        content: "We evaluate and treat a wide range of nail concerns, including:",
        bullets: [
          "**Nail fungus** (onychomycosis): thick, yellow, crumbly or lifted nails, most often on the toes",
          "**Brittle, peeling or splitting nails**",
          "**Nail psoriasis**: pitting, discoloration, crumbling or lifting of the nail",
          "**Ingrown nails** and infections around the nail (paronychia)",
          "**Nail discoloration**, ridges and changes in shape",
          "**Warts** around or under the nails",
        ],
      },
      {
        title: "Changes worth checking promptly",
        content:
          "Most nail changes are harmless, but some need a closer look. See a dermatologist for a new dark brown or black stripe in a nail, especially in one nail only; a streak that is widening or has blurry edges; pigment spreading onto the surrounding skin; or a nail that is bleeding, lifting or changing shape without a clear cause. Rarely, these can be signs of melanoma or another skin cancer under the nail.",
      },
      {
        title: "Diagnosis",
        content:
          "Many nail conditions look alike. For example, nail psoriasis and nail trauma can look just like fungus. We'll examine your nails and may take a small nail clipping to test for fungus before starting treatment, so you don't spend months on a medication that won't help. A dark streak may need a nail biopsy.",
      },
      {
        title: "Treatment options",
        content: "Treatment depends on the cause and may include:",
        bullets: [
          "Prescription topical or oral antifungal medications for nail fungus",
          "Treatment of nail psoriasis with topical, injected or oral medications",
          "Treatment of infections around the nail",
          "Guidance on nail care, trimming and protecting brittle nails",
        ],
        after:
          "Nails grow slowly. Fingernails take about 6 months to grow out and toenails 12 to 18 months, so improvement takes time even when treatment is working.",
      },
      {
        title: 'Ingrown nails and infections around the nail',
        content:
          'An ingrown nail happens when the edge of the nail grows into the surrounding skin, causing pain, redness and swelling, most often on the big toe. Tight shoes and trimming nails too short or with rounded edges are common causes. Infections around the nail (paronychia) can follow a hangnail, nail biting or frequent wet work. We can treat the infection and recommend nail care that helps prevent it from happening again.',
      },
    ],
    faqs: [
      {
        q: "Does nail fungus go away on its own?",
        a: "Rarely. Without treatment it often slowly worsens and can spread to other nails. Treatment works best when started early.",
      },
      {
        q: "Are oral nail fungus medications safe?",
        a: "For most healthy adults, yes. We'll review your health history and medications and may check blood work before or during treatment.",
      },
      {
        q: "Is a dark line in my nail dangerous?",
        a: "Usually not. Dark lines are common, especially in darker skin tones, and are often harmless. But a new or changing line, particularly in one nail, should be checked by a dermatologist.",
      },
    ],
    related: ["skin-infections", "psoriasis", "warts", "skin-biopsy"],
    callToAction: commonCallToAction,
  },
  {
    id: "hidradenitis-suppurativa",
    serviceName: "Hidradenitis Suppurativa",
    category: "Medical",
    mainImage: img,
    intro:
      "Hidradenitis suppurativa (HS) causes painful, recurring bumps and boils in the armpits, groin and other skin folds. It isn't caused by poor hygiene, and with the right treatment, flares can be greatly reduced.",
    paragraphs: [
      {
        title: "What is hidradenitis suppurativa?",
        content:
          "HS is a chronic inflammatory condition that affects hair follicles in areas where skin rubs together, such as the armpits, groin, inner thighs, buttocks and under the breasts. It causes painful lumps that can grow, break open and drain, and then heal with scarring. Over time, tunnels can form under the skin.\n\nHS usually starts after puberty and is more common in women. It often runs in families and is linked to hormones and the immune system. It is **not** an infection, it's not contagious, and it's not caused by poor hygiene.",
      },
      {
        title: "Why early care matters",
        content:
          "HS is often mistaken for recurring boils or ingrown hairs, and many people go years without a diagnosis. Without treatment, HS can progress to tunnels and scarring. Starting treatment early can reduce flares, ease pain and help prevent the condition from getting worse.",
      },
      {
        title: "Treatment options",
        content: "We tailor treatment to the severity of your HS. Options may include:",
        bullets: [
          "**Antibacterial washes** and topical antibiotics for mild HS",
          "**Oral antibiotics**, often used for several months to calm inflammation",
          "**Hormonal treatments**, such as spironolactone, for some women",
          "**Steroid injections** into painful, swollen bumps to bring quick relief",
          "**Biologic medications**, which target inflammation and are approved for moderate to severe HS",
          "**Procedures** to drain or remove persistent lumps and tunnels when needed",
        ],
      },
      {
        title: "Everyday tips",
        content:
          "Loose, breathable clothing reduces friction. Gentle cleansing, avoiding shaving during flares, and warm compresses on painful spots can help. Quitting smoking and reaching a healthy weight can make a meaningful difference in HS for many people. We'll also help you manage pain and the emotional toll HS can take.",
      },
    ],
    faqs: [
      {
        q: "Is HS the same as boils?",
        a: "No. Boils are infections that usually happen once. HS causes repeated bumps in the same areas, often in skin folds, and needs ongoing treatment.",
      },
      {
        q: "Can HS be cured?",
        a: "There's no cure yet, but many people get good control of their HS with treatment, and newer medications have made a big difference for moderate to severe cases.",
      },
      {
        q: "Should I pop or drain HS bumps at home?",
        a: "Please don't. Squeezing can push inflammation deeper and cause more scarring. Call us for a painful flare; an in-office injection or drainage can help.",
      },
      {
        q: 'Does diet affect HS?',
        a: "Some people with HS notice flares with dairy or high-sugar foods, and losing excess weight can reduce friction and inflammation. Diet alone won't control HS, but it can be one part of your plan.",
      },
    ],
    related: ["cyst-drainage", "skin-infections", "acne"],
    callToAction: commonCallToAction,
  },
  {
    id: "pediatric-dermatology",
    serviceName: "Pediatric Dermatology",
    category: "Medical",
    mainImage: img,
    intro:
      "Children's skin has its own needs. We care for babies, kids and teens with common skin conditions, with gentle treatments and clear guidance for parents.",
    paragraphs: [
      {
        title: "Skin conditions we treat in children and teens",
        content: "We see children for many common skin, hair and nail concerns, including:",
        bullets: [
          "**[Eczema](/services/eczema)** (atopic dermatitis) and dry, itchy skin",
          "**[Warts](/services/warts)** and **[molluscum contagiosum](/services/molluscum)**",
          "**[Acne](/services/acne)** in preteens and teens",
          "**Birthmarks and moles**, including moles that are changing",
          "**[Rashes](/services/rash-evaluation)**, hives and [skin infections](/services/skin-infections) such as impetigo and ringworm",
          "**Hair loss**, including alopecia areata",
          "**Diaper rash** and cradle cap that won't clear",
        ],
      },
      {
        title: "Gentle, kid-friendly care",
        content:
          "We take time to explain each step to children and parents in words they understand, and we choose treatments that are gentle and appropriate for your child's age. For procedures like freezing warts, we'll talk with you about the most comfortable options, and sometimes the best choice is simply to wait and watch.",
      },
      {
        title: "Support for parents",
        content:
          "Skin conditions in children often need care at home every day. We'll explain your child's condition, give you a written plan for bathing, moisturizing and using medications, and tell you what to do if things flare between visits. Bring any questions you have; there's no such thing as a silly question about your child's skin.",
      },
      {
        title: "Teens and acne",
        content:
          "Acne can affect a teen's confidence at an important age, and early treatment helps prevent scarring. We'll create a simple routine your teen can actually stick with and adjust it until their skin improves.",
      },
      {
        title: "Sun protection starts early",
        content:
          "Sunburns in childhood raise the risk of skin cancer later in life. Keep babies under 6 months out of direct sun, and use broad-spectrum SPF 30 or higher sunscreen, hats and sun-protective clothing for older kids, especially in the Arizona sun. Our [Sunscreen 101](/blog/sunscreen-101) article answers common questions.",
      },
    ],
    faqs: [
      {
        q: "What should I bring to my child's appointment?",
        a: "Bring a list of products and medications you've used, photos of any rash when it looked its worst, and any questions. Please bring the child's insurance card and, if you're not the parent or legal guardian, any required consent.",
      },
      {
        q: "Will my child outgrow eczema?",
        a: "Many children's eczema improves a lot as they grow, though some continue to have sensitive skin. Good skin care now helps control symptoms either way.",
      },
      {
        q: "Should a mole on my child be checked?",
        a: "Most moles in children are harmless. A mole that's growing quickly, bleeding, changing color or very different from the child's others should be checked.",
      },
      {
        q: 'Do you see babies?',
        a: "Yes. We see infants for common concerns such as eczema, cradle cap, diaper rash and birthmarks. Call us if you aren't sure whether your child's concern is one we treat.",
      },
    ],
    related: ["eczema", "warts", "molluscum", "acne"],
    relatedPosts: ["eczema-101", "acne-101", "sunscreen-101"],
    callToAction: commonCallToAction,
  },
  // ───────────── Surgical ─────────────
  {
    id: "mohs-surgery",
    serviceName: "Mohs Surgery",
    category: "Surgical",
    mainImage: img,
    offices: ["chandler"],
    intro:
      "Mohs surgery offers the highest cure rate for most basal cell and squamous cell skin cancers while saving as much healthy skin as possible. It's performed at our Chandler office by a double board-certified dermatologist and Mohs surgeon.",
    paragraphs: [
      {
        title: "What is Mohs surgery?",
        content:
          "Mohs micrographic surgery is a precise technique for removing skin cancer. The cancer is removed one thin layer at a time, and each layer is examined under a microscope during your visit. Unlike a standard excision, Mohs lets the surgeon check 100% of the edges of the removed tissue. If cancer remains, the surgeon knows exactly where, and removes another layer only in that spot.\n\nThis approach gives cure rates of up to about 99% for many first-time basal cell carcinomas, and removes as little healthy skin as possible, which means smaller scars.",
      },
      {
        title: "When is Mohs recommended?",
        content: "Mohs is often the best choice for skin cancers that are:",
        bullets: [
          "On the face, ears, eyelids, nose, lips, scalp, neck, hands, feet or genitals, where saving tissue matters",
          "Large, growing quickly or with edges that are hard to see",
          "Recurrent, meaning they came back after earlier treatment",
          "Aggressive types under the microscope",
          "In patients with a weakened immune system",
        ],
      },
      {
        title: "The day of surgery",
        content:
          "Mohs is done in the office under local anesthesia, so you're awake but the area is numb. The first layer is removed in a few minutes, and the wound is bandaged. While the tissue is processed and examined, which often takes about an hour per layer, you'll wait comfortably in the office. If more cancer is seen, another thin layer is removed from just that area. Most cancers are cleared in one to three layers.\n\nBecause the length of the visit depends on how many layers are needed, plan to be with us for several hours, or most of the day. Bring a snack, a book or a phone charger, and a friend or family member if you'd like company. Eat a normal breakfast and take your usual medications unless we tell you otherwise.",
      },
      {
        title: "Repair and recovery",
        content:
          "Once the cancer is gone, most wounds are repaired the same day, usually with stitches. Some small wounds heal well on their own. For more complex cases, we coordinate repair with plastic surgery colleagues. You'll go home with written wound care instructions.\n\nMost people return to normal activities within a day or two, but you'll need to avoid heavy lifting and strenuous exercise for about one to two weeks. Stitches are usually removed in 7 to 14 days. Scars continue to improve for up to a year.",
      },
      {
        title: "Your surgeon",
        content:
          "Mohs surgery at Desert Oasis Dermatology is performed by [Dr. Jonathan Lavian, MD](/about), who is double board-certified in Dermatology and Mohs Micrographic Surgery. As your Mohs surgeon, he removes the cancer, reads the slides himself and repairs the wound, all in the same visit.",
      },
    ],
    faqs: [
      {
        q: "Is Mohs surgery painful?",
        a: "The numbing injection stings briefly, then the area is numb. Most patients feel little discomfort during surgery and manage soreness afterward with acetaminophen.",
      },
      {
        q: "Will I have a scar?",
        a: "Any surgery leaves a scar, but Mohs removes as little healthy skin as possible, and careful repair helps the scar blend in. Most scars fade and flatten over several months.",
      },
      {
        q: "Where is Mohs surgery performed?",
        a: "Mohs surgery is performed at our Chandler office on S Alma School Rd. Patients from our Maricopa office are welcome to have their surgery there.",
      },
      {
        q: "Does insurance cover Mohs surgery?",
        a: "Mohs surgery for skin cancer is medically necessary and is covered by most insurance plans, including Medicare. Call us if you have questions about your plan.",
      },
    ],
    related: ["skin-cancer-screening", "excision", "skin-biopsy", "actinic-keratosis"],
    relatedPosts: ["skin-cancer-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "excision",
    serviceName: "Excision (Removal of Cancer or Growth)",
    category: "Surgical",
    mainImage: img,
    intro:
      "Surgical excision removes a skin cancer, mole, cyst or other growth completely, along with a small margin of skin. It's a common, quick procedure done in the office under local anesthesia.",
    paragraphs: [
      {
        title: "What is an excision?",
        content:
          "In an excision, the growth is cut out along with a small border of normal-looking skin, and the wound is closed with stitches. The removed tissue is sent to a lab and examined under a microscope to confirm the diagnosis and check that the edges are clear.",
      },
      {
        title: "What can be removed",
        content: "Excision is used for many types of skin growths, including:",
        bullets: [
          "Skin cancers, such as basal cell carcinoma, squamous cell carcinoma and early melanoma, especially on the trunk, arms and legs",
          "Moles that are atypical or that a biopsy showed should be fully removed",
          "[Cysts](/services/cyst-drainage), including those that keep coming back",
          "Lipomas (soft, fatty lumps under the skin)",
          "Other growths that are irritated, growing or a concern",
        ],
        after:
          "For skin cancers on the face and other sensitive areas, or for cancers with unclear edges, [Mohs surgery](/services/mohs-surgery) may be a better option. We'll recommend the best approach for you.",
      },
      {
        title: "What to expect",
        content:
          "The area is cleaned and numbed with a small injection. Once it's numb, you'll feel pressure but not pain. The growth is removed, and the skin is closed with stitches, often with dissolvable stitches beneath the surface and a few on top. Most excisions take 30 to 60 minutes, including preparation and bandaging.\n\nTell us before your visit if you take blood thinners, have a pacemaker or defibrillator, or have had problems with numbing medicine. Don't stop any prescription medication unless your doctor tells you to.",
      },
      {
        title: "Recovery and aftercare",
        content:
          "You'll go home with a bandage and written wound care instructions, which usually involve gentle cleaning and petroleum jelly. Avoid heavy lifting, strenuous exercise and swimming for one to two weeks, depending on the location. Stitches on the face usually come out in about a week, and stitches on the body in about two weeks.\n\nThe scar is usually a thin line that is longer than the growth itself, which helps it lie flat. It will be pink at first and fade over several months. Protect it from the sun to help it heal well.",
      },
      {
        title: "Your results",
        content:
          "We'll contact you with your lab results, usually within one to two weeks. If the edges aren't clear of cancer, we'll discuss next steps, which may include removing a little more skin.",
      },
    ],
    faqs: [
      {
        q: "Is an excision covered by insurance?",
        a: "Excision of skin cancer or a suspicious growth is medical care and is usually covered. Removal of a harmless growth for cosmetic reasons usually isn't; we'll discuss any cost beforehand.",
      },
      {
        q: "When can I shower after an excision?",
        a: "Usually after 24 to 48 hours, depending on your instructions. Gently pat the area dry and apply fresh petroleum jelly and a bandage.",
      },
      {
        q: "Will the scar be noticeable?",
        a: "Most excision scars fade to a thin, light line over time. Sun protection, gentle care and avoiding strain on the wound while it heals help the scar look its best.",
      },
    ],
    related: ["mohs-surgery", "skin-biopsy", "cyst-drainage", "mole-evaluation"],
    relatedPosts: ["skin-cancer-101", "what-is-this-spot-on-my-skin"],
    callToAction: commonCallToAction,
  },
  {
    id: "cyst-drainage",
    serviceName: "Cyst Drainage",
    category: "Surgical",
    mainImage: img,
    intro:
      "A swollen, painful cyst can be drained or injected in the office for quick relief. When a cyst keeps coming back, we can remove it completely.",
    paragraphs: [
      {
        title: "What is a skin cyst?",
        content:
          "The most common skin cysts are epidermoid cysts (often called sebaceous cysts). They are round, firm bumps under the skin, sometimes with a small dark opening in the center, filled with a thick, cheesy material made of keratin. They often appear on the face, neck, chest, back and scalp. Pilar cysts are similar and usually appear on the scalp.\n\nCysts are almost always harmless. Many stay small and painless for years. But a cyst can become inflamed, swollen, red and painful, and it can sometimes rupture under the skin.",
      },
      {
        title: "Relief for inflamed cysts",
        content: "When a cyst is inflamed, we have two main ways to bring relief:",
        bullets: [
          "**Steroid injection**: a small amount of anti-inflammatory medicine injected into the cyst can shrink swelling and pain within a few days.",
          "**Incision and drainage**: the area is numbed, a small opening is made, and the contents are drained. This gives fast relief for a swollen, painful cyst.",
        ],
        after:
          "If the cyst appears infected, we may also prescribe an antibiotic. Drainage relieves symptoms but doesn't remove the cyst wall, so the cyst can come back.",
      },
      {
        title: "Removing a cyst permanently",
        content:
          "To keep a cyst from returning, the entire cyst sac needs to be removed with an [excision](/services/excision). This is usually done once the cyst is calm, not while it's inflamed, which makes the procedure easier and lowers the chance of it coming back. The area is numbed, the cyst is removed, and the skin is closed with stitches.",
      },
      {
        title: "Aftercare",
        content:
          "After drainage, the wound may be left open to drain and heal, and you may need to change a dressing at home for several days. After an excision, you'll follow standard wound care and return to have stitches removed in one to two weeks. We'll give you written instructions for either procedure.",
      },
    ],
    faqs: [
      {
        q: "Can I pop a cyst at home?",
        a: "Please don't. Squeezing a cyst can push its contents deeper, cause infection and lead to more scarring. Call us for a painful cyst instead.",
      },
      {
        q: "Is a cyst a sign of cancer?",
        a: "Skin cysts are almost always benign. A lump that's growing quickly, very hard, fixed in place or unlike a typical cyst should be examined.",
      },
      {
        q: "Is cyst removal covered by insurance?",
        a: "Draining or removing a cyst that is painful, inflamed, infected or recurring is often covered. Removal only for cosmetic reasons may not be; we'll talk about it at your visit.",
      },
      {
        q: 'Why does my cyst smell?',
        a: "The material inside a cyst is made of keratin and skin oils, which can have a strong odor when it drains. That's normal and doesn't necessarily mean infection.",
      },
    ],
    related: ["excision", "hidradenitis-suppurativa", "benign-growth-removal", "acne"],
    relatedPosts: ["what-is-this-spot-on-my-skin"],
    callToAction: commonCallToAction,
  },
  {
    id: "skin-biopsy",
    serviceName: "Skin Biopsy",
    category: "Surgical",
    mainImage: img,
    intro:
      "A skin biopsy is a quick, simple procedure that gives a clear answer about a suspicious spot, mole or rash. Most biopsies take just a few minutes and are done during your visit.",
    paragraphs: [
      {
        title: "What is a skin biopsy?",
        content:
          "A biopsy removes a small sample of skin so it can be examined under a microscope by a dermatopathologist, a doctor who specializes in diagnosing skin. It's the most reliable way to diagnose skin cancer and many rashes and growths. We may recommend a biopsy for:",
        bullets: [
          "A new, changing or unusual mole",
          "A spot that bleeds, crusts or won't heal",
          "A growth that may be skin cancer",
          "A rash that doesn't have a clear cause or isn't responding to treatment",
          "Hair loss when the cause is unclear",
        ],
      },
      {
        title: "Types of biopsies",
        content: "The type of biopsy depends on the spot and what we need to learn:",
        bullets: [
          "**Shave biopsy**: a thin layer of skin is removed with a small blade. No stitches are needed.",
          "**Punch biopsy**: a small round sample, usually 3 to 4 mm, is removed with a tool like a tiny cookie cutter. It's often closed with one or two stitches.",
          "**Excisional biopsy**: the entire spot is removed and the skin is closed with stitches.",
        ],
      },
      {
        title: "A quick in-office procedure",
        content:
          "The area is cleaned and numbed with a small injection, which stings for a few seconds. After that, the biopsy itself is not painful. The sample is taken, any bleeding is stopped, and a bandage is applied. Most biopsies take just a few minutes and are done during the same visit when the spot is found.\n\nLet us know if you take blood thinners or have had problems with numbing medicine. In most cases, you should keep taking your medications as usual.",
      },
      {
        title: "Aftercare",
        content:
          "Keep the bandage on for about 24 hours. Then gently wash the area once a day with soap and water, apply petroleum jelly and cover it with a fresh bandage until it heals, usually in one to three weeks. Keeping the wound moist helps it heal with a smaller scar. Call us if you notice increasing redness, swelling, pain or pus.",
      },
      {
        title: "Getting your results",
        content:
          "Results usually take 1 to 2 weeks. Our office will contact you once they're in and explain what they mean. If you had stitches, they're typically removed in 7 to 14 days. If treatment is needed, such as an [excision](/services/excision) or [Mohs surgery](/services/mohs-surgery), we'll walk you through the next steps.",
      },
    ],
    faqs: [
      {
        q: "Does a skin biopsy mean I have cancer?",
        a: "No. Many biopsies come back benign. A biopsy simply gives us a definite answer so we can recommend the right next step.",
      },
      {
        q: "Will a biopsy leave a scar?",
        a: "Usually a small one. Shave biopsies often heal as a small pink or light spot, and punch biopsies as a small line or dot. Good wound care helps them fade.",
      },
      {
        q: "I haven't heard about my results. What should I do?",
        a: "If it's been more than two weeks, please call us at (480) 418-3314 so we can check on them.",
      },
    ],
    related: ["mole-evaluation", "skin-cancer-screening", "excision", "rash-evaluation"],
    relatedPosts: ["skin-cancer-101", "what-is-this-spot-on-my-skin"],
    callToAction: commonCallToAction,
  },
  {
    id: "cryotherapy",
    serviceName: "Cryotherapy (Liquid Nitrogen)",
    category: "Surgical",
    mainImage: img,
    intro:
      "Cryotherapy uses liquid nitrogen to freeze and remove precancerous spots, warts and some benign growths. It takes seconds, needs no cutting or stitches, and is done right in the office.",
    paragraphs: [
      {
        title: "How cryotherapy works",
        content:
          "Liquid nitrogen is extremely cold, about −320°F. When it's sprayed or applied to a spot for a few seconds, it freezes and destroys the abnormal cells. The treated skin then blisters or scabs and peels off, and healthy new skin grows in its place.",
      },
      {
        title: "What cryotherapy treats",
        content: "Cryotherapy is a fast, effective treatment for:",
        bullets: [
          "[Actinic keratoses](/services/actinic-keratosis) (rough, precancerous sun spots)",
          "[Warts](/services/warts), including common and plantar warts",
          "Seborrheic keratoses and other [benign growths](/services/benign-growth-removal)",
          "[Molluscum contagiosum](/services/molluscum) in older children and adults",
          "Some sun spots and skin tags",
        ],
        after:
          "Because no sample is taken for testing, cryotherapy is only used for spots that we're confident are not skin cancer. Anything that looks unusual gets a [biopsy](/services/skin-biopsy) first.",
      },
      {
        title: "What to expect",
        content:
          "No numbing or preparation is needed. Each spot takes only a few seconds and feels like a brief, cold sting, then a burning feeling that fades within minutes. Several spots can be treated in one visit.\n\nAfterward, the area may be red and swollen, and a blister, sometimes filled with clear or reddish fluid, can form within a day or two. This is a normal part of healing.",
      },
      {
        title: "Healing and aftercare",
        content: "Most treated spots heal within 1 to 3 weeks. To help healing:",
        bullets: [
          "Wash gently with soap and water and keep the area clean",
          "Apply petroleum jelly and a bandage if the area is open or rubs on clothing",
          "Don't pick at the blister or scab; let it fall off on its own",
          "Take acetaminophen if the area is sore",
        ],
        after:
          "Treated skin may be lighter or darker than the surrounding skin for a while, and occasionally a light spot is permanent, especially in darker skin tones. Thick warts often need more than one treatment, spaced a few weeks apart.",
      },
    ],
    faqs: [
      {
        q: "Does cryotherapy hurt?",
        a: "It stings and feels very cold for a few seconds, then may burn briefly. Most people find it very tolerable and don't need any numbing.",
      },
      {
        q: "Can I shower after cryotherapy?",
        a: "Yes. You can shower and wash the area gently the same day. Pat it dry afterward.",
      },
      {
        q: "How many treatments will I need?",
        a: "Most actinic keratoses and seborrheic keratoses clear in one treatment. Warts often need two to four treatments, a few weeks apart.",
      },
      {
        q: 'Is cryotherapy safe for children?',
        a: 'Yes, for many children, though the cold sting can be hard for young kids. For younger children we often consider gentler options first. See our [pediatric dermatology](/services/pediatric-dermatology) page.',
      },
    ],
    related: ["actinic-keratosis", "warts", "benign-growth-removal", "molluscum"],
    relatedPosts: ["what-is-this-spot-on-my-skin"],
    callToAction: commonCallToAction,
  },
  {
    id: "benign-growth-removal",
    serviceName: "Skin Tag & Benign Growth Removal",
    category: "Surgical",
    mainImage: img,
    intro:
      "Skin tags, seborrheic keratoses and other harmless growths are common, especially with age. We make sure each one is benign and can remove growths that are irritated or that bother you.",
    paragraphs: [
      {
        title: "Common harmless growths",
        content: "Many skin growths are benign (not cancer), including:",
        bullets: [
          "**Skin tags**: small, soft flaps of skin, often on the neck, underarms, eyelids and groin",
          "**Seborrheic keratoses**: waxy, rough, \"stuck-on\" spots that range from tan to dark brown or black",
          "**Cherry angiomas**: small, bright red bumps made of tiny blood vessels",
          "**Dermatosis papulosa nigra**: small dark bumps on the face, common in darker skin tones",
          "**Dermatofibromas**: firm bumps, often on the legs",
          "**Sebaceous hyperplasia**: small yellowish bumps on the face",
        ],
        after: "These growths often become more common with age and can run in families.",
      },
      {
        title: "Making sure it's benign",
        content:
          "Some skin cancers can look like harmless growths, especially dark seborrheic keratoses, which can resemble melanoma. We always examine a spot before removing it, often with dermoscopy. If anything looks unusual, we'll perform a [biopsy](/services/skin-biopsy) to be certain.",
      },
      {
        title: "Removal options",
        content:
          "Growths that are irritated, bleeding, catching on clothing or jewelry, or bothering you cosmetically can be removed in the office. Depending on the growth, we may use:",
        bullets: [
          "**Snip removal** for skin tags, often with a little numbing first",
          "**Freezing** with liquid nitrogen ([cryotherapy](/services/cryotherapy))",
          "**Shave removal**, with numbing, for raised growths",
        ],
        after:
          "Most treated areas heal in one to two weeks. Some may leave a lighter or darker spot, particularly in darker skin, which usually fades over time.",
      },
      {
        title: "Insurance and cost",
        content:
          "When a growth is removed because it's irritated, bleeding, inflamed or suspicious, insurance may cover it. When removal is purely cosmetic, insurance usually doesn't, and we'll discuss any costs with you before treatment. See our [insurance and self-pay page](/insurance-accepted) for more information.",
      },
      {
        title: 'Preventing new growths',
        content:
          "Many benign growths are simply part of aging and genetics, so they can't always be prevented. Daily sun protection may reduce some sun-related spots, and keeping skin folds dry can reduce friction that irritates skin tags. Check your skin regularly, and let us know if any growth changes, bleeds without injury or looks different from the others.",
      },
    ],
    faqs: [
      {
        q: "Can I remove a skin tag at home?",
        a: "We don't recommend it. At-home methods can cause bleeding, infection and scarring, and occasionally a growth that looks like a skin tag is something else.",
      },
      {
        q: "Will the growths come back?",
        a: "A removed growth usually doesn't return, but new ones can form over time, since many people are prone to them.",
      },
      {
        q: "Are seborrheic keratoses contagious?",
        a: "No. Seborrheic keratoses are not contagious and are not caused by a virus. They're a common, harmless part of skin aging.",
      },
    ],
    related: ["cryotherapy", "mole-evaluation", "skin-biopsy", "dark-spots"],
    relatedPosts: ["what-is-this-spot-on-my-skin"],
    callToAction: commonCallToAction,
  },
  // ───────────── Cosmetic ─────────────
  {
    id: "botox",
    serviceName: "Neurotoxins (Botox)",
    category: "Cosmetic",
    mainImage: img,
    intro:
      "Botox and other neurotoxin injections soften frown lines, forehead lines and crow's feet for a refreshed, natural look. Treatment takes minutes, with little to no downtime.",
    paragraphs: [
      {
        title: "How neurotoxins work",
        content:
          "Many wrinkles, called dynamic wrinkles, are caused by repeated muscle movement, such as frowning, squinting or raising your eyebrows. Neurotoxins like Botox temporarily relax the specific muscles that cause these lines. The skin above smooths out, and with regular treatment, deeper lines can soften over time.\n\nWhen done well, results look natural: you can still make facial expressions, just with fewer lines. Our goal is for you to look rested and like yourself.",
      },
      {
        title: "Common treatment areas",
        content: "Neurotoxins are most often used for:",
        bullets: [
          "**Frown lines** (the \"11s\" between the eyebrows)",
          "**Forehead lines**",
          "**Crow's feet** at the corners of the eyes",
        ],
        after:
          "Botox is also used medically to treat [excessive underarm sweating](/services/excessive-sweating).",
      },
      {
        title: "What to expect",
        content:
          "We'll start with a consultation about your goals, health history and medications. The treatment itself takes about 10 to 15 minutes. A very fine needle is used to place small amounts of medicine into specific muscles. Most people describe it as a quick pinch, and no numbing is usually needed.\n\nYou may have small bumps at the injection sites that fade within an hour, and occasionally a small bruise. You can return to most normal activities right away.",
      },
      {
        title: "Results and how long they last",
        content:
          "You'll start to see results in 3 to 5 days, with full results at about 2 weeks. Results typically last 3 to 4 months. As the effect wears off, lines gradually return, and you can schedule your next treatment.",
      },
      {
        title: "Aftercare and safety",
        content: "For the best results after treatment:",
        bullets: [
          "Stay upright for about 4 hours",
          "Avoid rubbing or massaging the treated areas for the rest of the day",
          "Skip strenuous exercise, saunas and facials until the next day",
        ],
        after:
          "Side effects are usually mild, such as temporary redness, swelling, bruising or a mild headache. Less commonly, a temporary droop of the eyelid or eyebrow can occur, which goes away as the medicine wears off. Neurotoxins should not be used during pregnancy or breastfeeding, or by people with certain nerve or muscle conditions. Cosmetic neurotoxin treatment is not covered by insurance.",
      },
    ],
    faqs: [
      {
        q: "Will I look frozen?",
        a: "Not when the dose is tailored to you. We aim for a natural result that softens lines while keeping your expressions. It's easy to add a little more at a follow-up visit if needed.",
      },
      {
        q: "At what age can you start Botox?",
        a: "There's no single right age. Some people start in their late 20s or 30s to soften early lines, while others start later. We'll talk about what makes sense for you.",
      },
      {
        q: "What's the difference between Botox and fillers?",
        a: "Neurotoxins relax muscles to soften lines caused by movement. Fillers add volume under the skin. They treat different concerns and are sometimes used together.",
      },
    ],
    related: ["chemical-peels", "microneedling", "excessive-sweating"],
    relatedPosts: ["anti-aging-skincare"],
    callToAction: commonCallToAction,
  },
  {
    id: "chemical-peels",
    serviceName: "Chemical Peels",
    category: "Cosmetic",
    mainImage: img,
    intro:
      "A chemical peel removes dull, damaged surface skin to reveal a smoother, brighter, more even complexion. Peels can help with sun damage, dark spots, acne and fine lines.",
    paragraphs: [
      {
        title: "How chemical peels work",
        content:
          "A chemical peel is a solution applied to the skin that loosens and removes the outer layers. As the skin renews itself, it becomes smoother and more even in tone, and deeper peels stimulate new collagen. The strength of the peel determines how deep it works, how much peeling you'll have and how long recovery takes.",
      },
      {
        title: "What peels can help with",
        content: "Chemical peels can improve:",
        bullets: [
          "Sun damage and rough, uneven texture",
          "[Dark spots](/services/dark-spots), sun spots and some types of melasma",
          "Active [acne](/services/acne), clogged pores and post-acne marks",
          "Fine lines and dull skin",
        ],
        after:
          "Peels are not the best choice for deep wrinkles, sagging skin or deep acne scars. For indented scars, [microneedling](/services/microneedling) may work better.",
      },
      {
        title: "Choosing the right peel",
        content:
          "Peels range from light peels with little downtime to stronger peels that cause several days of peeling. Common peeling agents include glycolic acid, salicylic acid (good for oily and acne-prone skin) and others. We'll recommend a peel based on your concerns, skin type and how much downtime you can have.\n\nMedium and darker skin tones can benefit from peels too, but have a higher risk of dark spots after stronger peels, so we choose and prepare these carefully, sometimes with a lightening cream for a few weeks beforehand.",
      },
      {
        title: "What to expect",
        content:
          "Stop using retinoids and exfoliating products for several days before your peel, as directed. The peel is applied to clean skin and left on for a few minutes. You may feel tingling, warmth or stinging, which fades once it's neutralized or removed. A light peel takes about 15 to 30 minutes.\n\nAfterward, your skin may be pink and feel tight. Light flaking or peeling usually starts in 2 to 3 days and lasts a few days. Many people get a series of peels spaced several weeks apart for the best results.",
      },
      {
        title: "Aftercare",
        content:
          "Use a gentle cleanser and moisturizer, don't pick or peel flaking skin, and avoid retinoids and exfoliants until your skin heals. Sun protection is essential: treated skin is very sensitive to sun, so use a broad-spectrum SPF 30 or higher sunscreen every day and avoid direct sun, especially in Arizona. Cosmetic peels are not covered by insurance.",
      },
    ],
    faqs: [
      {
        q: "Do chemical peels hurt?",
        a: "Most people feel tingling or mild stinging that lasts a few minutes. Light peels are very well tolerated.",
      },
      {
        q: "How often can I get a chemical peel?",
        a: "Light peels can often be repeated every 4 to 6 weeks. Stronger peels are done less often. We'll recommend a schedule for your skin.",
      },
      {
        q: "Can I get a peel in the summer?",
        a: "Yes, with careful sun protection. Some people prefer to schedule stronger peels in the cooler months, when it's easier to avoid the sun.",
      },
    ],
    related: ["dark-spots", "acne", "microneedling", "botox"],
    relatedPosts: ["anti-aging-skincare", "sunscreen-101"],
    callToAction: commonCallToAction,
  },
  {
    id: "microneedling",
    serviceName: "Microneedling (Acne Scars)",
    category: "Cosmetic",
    mainImage: img,
    intro:
      "Microneedling uses tiny needles to trigger your skin's natural healing, building new collagen to improve acne scars, fine lines and skin texture with minimal downtime.",
    paragraphs: [
      {
        title: "How microneedling works",
        content:
          "During microneedling, a device with very fine needles creates thousands of tiny channels in the skin. These controlled micro-injuries prompt the skin to repair itself, producing new collagen and elastin. Over several weeks, this helps fill in indented scars and makes skin firmer and smoother.",
      },
      {
        title: "What microneedling can help with",
        content: "Microneedling can improve:",
        bullets: [
          "**Acne scars**, especially rolling and boxcar scars",
          "**Fine lines** and early wrinkles",
          "**Rough texture** and enlarged-looking pores",
          "**Some other scars**, such as mild surgical scars",
        ],
        after:
          "Active acne should be under control before microneedling. If you're still breaking out, we'll treat your [acne](/services/acne) first.",
      },
      {
        title: "Who is a good candidate",
        content:
          "Microneedling works for many skin types and skin tones, and has a lower risk of pigment changes than many other resurfacing treatments, which can make it a good option for medium and darker skin. It's not recommended during pregnancy, over active acne, cold sores or skin infections, or for people prone to keloid scars. Tell us if you've taken isotretinoin in the past several months.",
      },
      {
        title: "What to expect",
        content:
          "A numbing cream is applied for comfort, and the procedure takes about 20 to 30 minutes after numbing. Most people feel a light vibration or scratching.\n\nAfterward, your skin will look red, like a sunburn, and may feel tight for 1 to 3 days. Mild swelling and light flaking are normal. Most people return to work within a day or two. Avoid makeup for 24 hours, and skip retinoids, exfoliants, swimming and strenuous exercise for a few days.",
      },
      {
        title: "Results",
        content:
          "Collagen builds gradually, so results appear over several weeks and continue to improve for months. Most people with acne scars need a series of 3 to 6 treatments spaced about 4 to 6 weeks apart. Daily sunscreen protects your results and your healing skin. Cosmetic microneedling is not covered by insurance.",
      },
    ],
    faqs: [
      {
        q: "Does microneedling hurt?",
        a: "With numbing cream, most people find it quite comfortable. You may feel some pressure or mild discomfort over bony areas.",
      },
      {
        q: "Is professional microneedling better than at-home rollers?",
        a: "Yes. In-office devices reach the right depth to rebuild collagen safely in a clean setting. At-home rollers are much shallower and can cause infection or irritation if not used carefully.",
      },
      {
        q: "How soon will I see results?",
        a: "Skin may look brighter within a week, but improvement in scars builds over 2 to 3 months as new collagen forms, and continues with each session.",
      },
      {
        q: 'Can microneedling be combined with other treatments?',
        a: "Yes. Microneedling is sometimes combined with chemical peels or other treatments, spaced a few weeks apart, for better results. We'll build a treatment plan around your goals.",
      },
    ],
    related: ["acne", "chemical-peels", "botox", "dark-spots"],
    relatedPosts: ["acne-101", "anti-aging-skincare"],
    callToAction: commonCallToAction,
  },
];

// Function to get service data by ID
export function getServiceById(id: string): ServiceData | undefined {
  return servicesData.find((service) => service.id === id);
}
