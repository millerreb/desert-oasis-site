// The blog's articles. Each post becomes its own page at /blog/<slug>.
// To add a post, copy an entry and change it. Order here doesn't matter: the blog
// page sorts by date and groups by category.
//
// Text formatting inside "text" and list items:
//   **bold**   *italic*   [link text](/services/acne)
//   [link text](booking) links to online scheduling.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }

export type BlogCategory = "Sun Protection" | "Skin Cancer & Spots" | "Skin Conditions" | "Hair & Scalp" | "Skincare"

export type BlogPost = {
  slug: string
  title: string
  // Shown on the blog card and in Google results (keep under ~155 characters)
  description: string
  category: BlogCategory
  // Publish date, YYYY-MM-DD
  date: string
  // Optional photo from /public; posts without one show the logo tile
  image?: string
  blocks: BlogBlock[]
}

export const BLOG_AUTHOR = { name: "Dr. Jonathan Lavian, MD", url: "/about" }

// Order categories appear in on the blog page
export const blogCategories: BlogCategory[] = ["Sun Protection", "Skin Cancer & Spots", "Skin Conditions", "Hair & Scalp", "Skincare"]

export const blogPosts: BlogPost[] = [
  {
    "slug": "sunscreen-101",
    "title": "Sunscreen 101: Your Most Common Sunscreen Questions, Answered",
    "description": "How much SPF you really need, why zinc oxide matters for wrinkles and dark spots, and whether sunscreen chemicals are safe. A dermatologist answers.",
    "category": "Sun Protection",
    "date": "2026-05-04",
    "image": "/blog/sunscreen-101.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Walk down any drugstore aisle and you'll find dozens of sunscreens, each promising something different: higher SPF, \"anti-aging,\" \"sport,\" \"sensitive skin.\" It's easy to feel overwhelmed. The good news is that choosing the right sunscreen is simpler than the labels make it seem. Here are straightforward answers to the questions our patients ask most."
      },
      {
        "type": "h2",
        "text": "What kind of sunscreen should you buy?"
      },
      {
        "type": "p",
        "text": "Focus on **ingredients**, not brands. A good sunscreen should meet two simple criteria:"
      },
      {
        "type": "ul",
        "items": [
          "It should be at least **SPF 30**.",
          "It should contain **zinc oxide** as its active ingredient."
        ]
      },
      {
        "type": "p",
        "text": "If a product checks both boxes, you're in good shape, whatever the name on the bottle."
      },
      {
        "type": "h2",
        "text": "What does SPF on sunscreen mean?"
      },
      {
        "type": "p",
        "text": "**SPF stands for Sun Protection Factor.** It measures how well a sunscreen protects your skin from **UVB rays**, the rays mainly responsible for sunburn and skin cancer."
      },
      {
        "type": "p",
        "text": "What SPF *doesn't* tell you is how well a product protects against **UVA rays**, and that distinction matters more than most people realize (more on that below)."
      },
      {
        "type": "h2",
        "text": "Does SPF matter after SPF 30?"
      },
      {
        "type": "p",
        "text": "Not significantly. **SPF 30 blocks about 97%** of UVB rays, while **SPF 50 blocks about 98%**. That extra 1% rarely makes a meaningful difference."
      },
      {
        "type": "p",
        "text": "What *does* make a difference is **reapplication**. Even the highest-SPF sunscreen wears off with time, sweat and water. Reapplying regularly, roughly every two hours and after swimming or sweating, protects you far better than chasing a slightly higher number on the label."
      },
      {
        "type": "h2",
        "text": "Is a higher SPF the most important factor in preventing wrinkles and dark spots?"
      },
      {
        "type": "p",
        "text": "No. The SPF number only relates to **UVB protection**, the rays linked to burning and skin cancer. **Wrinkles, sun spots and other signs of aging are primarily caused by UVA rays**, and SPF does not measure that type of protection at all."
      },
      {
        "type": "p",
        "text": "In other words, a sunscreen with a high SPF can still leave you exposed to the rays that age your skin."
      },
      {
        "type": "h2",
        "text": "What ingredient best prevents wrinkles and dark spots?"
      },
      {
        "type": "p",
        "text": "Look for sunblock containing **zinc oxide**. It is the only ingredient that provides **100% blockage of UVA rays**, the primary cause of skin aging and hyperpigmentation (dark spots)."
      },
      {
        "type": "p",
        "text": "If preventing wrinkles and keeping an even skin tone are among your goals, zinc oxide should be at the top of your list when you read the active ingredients."
      },
      {
        "type": "h2",
        "text": "Are the chemicals in sunscreen dangerous?"
      },
      {
        "type": "p",
        "text": "Some chemical sunscreen ingredients, such as **oxybenzone**, can be minimally absorbed into the bloodstream with repeated use over large areas of the body. However, the levels are very low and rarely harmful."
      },
      {
        "type": "p",
        "text": "If you'd rather avoid the question entirely, **mineral sunscreens with zinc oxide are not absorbed into the bloodstream** and are always a safe choice."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "When you're shopping for sunscreen, keep it simple:"
      },
      {
        "type": "ul",
        "items": [
          "**Choose SPF 30 or higher.** Going much higher adds little extra protection.",
          "**Look for zinc oxide** in the active ingredients for the best UVA protection against wrinkles and dark spots.",
          "**Reapply often.** Consistency matters more than the number on the bottle."
        ]
      },
      {
        "type": "p",
        "text": "Have questions about which sunscreen is right for your skin, or concerns about sun damage you've already noticed? Our team is happy to help. **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "sun-protection-clothing-upf-winter-sun",
    "title": "Sun Protection Beyond Sunscreen: Clothing, UPF and Winter Sun",
    "description": "Can you burn through a T-shirt? What UPF ratings mean, how to choose sun-protective clothing, and why winter sun in Arizona still counts.",
    "category": "Sun Protection",
    "date": "2026-11-02",
    "image": "/blog/sun-protection-clothing-upf-winter-sun.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Most people think of sunscreen when they think of sun protection. But your clothing, and the time of year, matter more than you might expect. Here's what you need to know."
      },
      {
        "type": "h2",
        "text": "Can you get sunburned through clothing?"
      },
      {
        "type": "p",
        "text": "**Yes.** Dr. Lavian learned this firsthand during medical school. He spent an entire day in a national park in Colombia and was careful to reapply sunscreen every two hours to every part of his body not covered by clothing. The only place he ended up burning? **Underneath his T-shirt.**"
      },
      {
        "type": "p",
        "text": "How much protection clothing provides depends on the fabric:"
      },
      {
        "type": "ul",
        "items": [
          "A **regular cotton T-shirt** blocks roughly **80%** of UV rays, give or take, depending on how thick the fabric is and how dark the color is. That helps, but if you're outside for several hours in just a cotton shirt, **you can still easily burn**.",
          "**Wet** cotton protects even less.",
          "**Synthetic fabrics**, like polyester and nylon, tend to provide more protection because they are woven more tightly, letting fewer UV rays through.",
          "**Darker colors** generally block more UV than lighter ones."
        ]
      },
      {
        "type": "h2",
        "text": "What kind of sun-protective clothing should you buy?"
      },
      {
        "type": "p",
        "text": "You may be used to looking for **SPF** on sunscreen, but clothing uses a different rating: **UPF**, or **Ultraviolet Protection Factor**. UPF measures how much of **both UVA and UVB rays** a fabric blocks."
      },
      {
        "type": "table",
        "head": [
          "UPF rating",
          "UV rays blocked"
        ],
        "rows": [
          [
            "UPF 5 (typical cotton T-shirt)",
            "About 80%"
          ],
          [
            "UPF 15",
            "About 93%"
          ],
          [
            "UPF 30",
            "About 97%"
          ],
          [
            "UPF 50",
            "About 98%"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**If you'll be in the sun for several hours, choose clothing rated at least UPF 30.** Sun-protective shirts, hats with a wide brim and lightweight long sleeves are all great options for hiking, golfing, gardening or a day at the lake."
      },
      {
        "type": "h2",
        "text": "Do you need to wear sunscreen in the winter?"
      },
      {
        "type": "p",
        "text": "**Yes.** The amount of damaging UV radiation that reaches you is measured by the **UV index**, which depends on factors like the time of year, cloud cover, the ozone layer and elevation."
      },
      {
        "type": "p",
        "text": "UV levels are lower in winter than in summer, but **they are far from zero**, especially in sunny places like Arizona. A few things to keep in mind:"
      },
      {
        "type": "ul",
        "items": [
          "**Time adds up.** An hour outside on a winter afternoon can expose you to as much UV radiation as a shorter stretch outdoors in summer.",
          "**UVA rays**, which cause wrinkles and dark spots, stay fairly steady year-round and pass through clouds and car windows.",
          "**Elevation and snow increase exposure.** UV gets stronger the higher you go, and snow reflects UV rays back up at you, so skiers and mountain hikers are especially at risk."
        ]
      },
      {
        "type": "p",
        "text": "You can check the UV index for your area in most weather apps. **When it's 3 or higher, sun protection is recommended.**"
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**A cotton T-shirt isn't enough** for long days outdoors.",
          "**Look for UPF 30 or higher** on sun-protective clothing.",
          "**Wear sunscreen and sun-protective clothing year-round**, including in winter."
        ]
      },
      {
        "type": "p",
        "text": "Have questions about protecting your skin, or a spot you'd like checked? **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "sunscreen-for-darker-skin-tones",
    "title": "The Best Sunscreen for Darker Skin Tones (Without the White Cast)",
    "description": "Why darker skin still needs sunscreen, and how tinted sunscreens with iron oxide blend in without a white cast while helping prevent dark spots.",
    "category": "Sun Protection",
    "date": "2026-06-15",
    "image": "/blog/sunscreen-for-darker-skin-tones.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "\"I don't want to look pasty white after putting on sunscreen.\" It's one of the most common concerns we hear from patients with darker skin, and it's a fair one. Many sunscreens, especially mineral ones, can leave a chalky or purplish film. The good news is that there are sunscreens designed to blend in beautifully."
      },
      {
        "type": "h2",
        "text": "Do people with darker skin need sunscreen?"
      },
      {
        "type": "p",
        "text": "**Yes.** Darker skin has more natural protection from the sun, but it is not immune to sun damage. People of all skin tones can:"
      },
      {
        "type": "ul",
        "items": [
          "**Get sunburned**",
          "**Develop skin cancer.** In people with darker skin, skin cancer is often diagnosed at a later stage, when it's harder to treat.",
          "**Develop dark spots and uneven skin tone.** Sun exposure can worsen hyperpigmentation and conditions like melasma, which are especially common in skin of color."
        ]
      },
      {
        "type": "h2",
        "text": "What sunscreen blends in best for darker skin?"
      },
      {
        "type": "p",
        "text": "We recommend a **tinted sunscreen**. These sunscreens have a **brownish tint that comes from iron oxide**, which helps them blend into the skin instead of leaving a white cast."
      },
      {
        "type": "p",
        "text": "Tinted sunscreens have some extra benefits:"
      },
      {
        "type": "ul",
        "items": [
          "**They protect against visible light.** Iron oxide helps block visible light, which can trigger or worsen **dark spots and melasma**, a common concern for people with darker skin.",
          "**They double as makeup.** Many tinted sunscreens can be used as a **combination sunscreen and foundation**, simplifying your morning routine.",
          "**They come in a range of shades.** Look for a brand that offers several tints so you can find your best match."
        ]
      },
      {
        "type": "h2",
        "text": "What else should you look for?"
      },
      {
        "type": "ul",
        "items": [
          "**SPF 30 or higher**",
          "**Broad-spectrum protection** (protects against both UVA and UVB rays)",
          "**Zinc oxide** in the active ingredients for strong UVA protection",
          "**Water resistance** if you'll be sweating or swimming"
        ]
      },
      {
        "type": "h2",
        "text": "Tips for applying sunscreen"
      },
      {
        "type": "ul",
        "items": [
          "**Use enough.** Most people apply too little. Aim for about a nickel-sized amount for your face.",
          "**Don't forget your ears, neck and the backs of your hands.**",
          "**Reapply every two hours** when outdoors, and after swimming or sweating."
        ]
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Everyone needs sun protection, whatever their skin tone. A **tinted sunscreen with iron oxide** gives you that protection without the white cast, helps prevent dark spots, and can even replace your foundation."
      },
      {
        "type": "p",
        "text": "Looking for help with dark spots, melasma or finding the right sunscreen for your skin? **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "skin-cancer-101",
    "title": "Skin Cancer 101: Types, Warning Signs and Why Skin Checks Matter",
    "description": "The three main types of skin cancer, the ABCDE warning signs of melanoma, and why regular skin checks matter in sunny Arizona.",
    "category": "Skin Cancer & Spots",
    "date": "2026-02-09",
    "image": "/blog/skin-cancer-101.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Skin cancer is the **most common cancer in the United States**, and living somewhere as sunny as Arizona raises your risk. The good news is that when skin cancer is caught early, it is almost always treatable. Here are answers to the questions our patients ask most."
      },
      {
        "type": "h2",
        "text": "What are the main types of skin cancer?"
      },
      {
        "type": "p",
        "text": "There are three main types:"
      },
      {
        "type": "ul",
        "items": [
          "**Basal cell carcinoma (BCC)** is the **most common** type. It often looks like a **shiny, pearly or pink bump**, or a sore that bleeds and won't heal. It grows slowly and rarely spreads, but it can damage surrounding skin if left untreated.",
          "**Squamous cell carcinoma (SCC)** is the second most common. It often looks like a **rough, scaly red patch**, a firm bump or a crusted sore, usually on sun-exposed areas. It is more likely than BCC to spread if it isn't treated.",
          "**Melanoma** is less common but the **most dangerous**, because it can spread to other parts of the body. It often appears as a **new or changing mole**, or a dark spot that looks different from your other moles."
        ]
      },
      {
        "type": "h2",
        "text": "What causes skin cancer?"
      },
      {
        "type": "p",
        "text": "The biggest cause is **ultraviolet (UV) radiation** from the sun and tanning beds. Other risk factors include:"
      },
      {
        "type": "ul",
        "items": [
          "A history of **sunburns**, especially blistering burns in childhood",
          "**Fair skin**, light eyes, or red or blond hair",
          "**Many moles**, or unusual-looking moles",
          "A **family or personal history** of skin cancer",
          "A **weakened immune system**, such as after an organ transplant"
        ]
      },
      {
        "type": "p",
        "text": "People of **all skin tones** can get skin cancer. In people with darker skin, it is often found later, when it's harder to treat, and can show up in less sun-exposed areas like the palms, soles of the feet and under the nails."
      },
      {
        "type": "h2",
        "text": "What warning signs should you look for?"
      },
      {
        "type": "p",
        "text": "Check your skin for the **ABCDEs of melanoma**:"
      },
      {
        "type": "ul",
        "items": [
          "**A — Asymmetry:** one half doesn't match the other.",
          "**B — Border:** irregular, ragged or blurred edges.",
          "**C — Color:** several colors or uneven shading.",
          "**D — Diameter:** larger than a pencil eraser (about 6 mm), though melanomas can be smaller.",
          "**E — Evolving:** any change in size, shape, color or height."
        ]
      },
      {
        "type": "p",
        "text": "Also make an appointment for any **sore that doesn't heal** within a few weeks, a spot that **bleeds, itches or hurts**, or a **\"ugly duckling\"** mole that looks different from the rest."
      },
      {
        "type": "h2",
        "text": "How often should you get a skin check?"
      },
      {
        "type": "p",
        "text": "It depends on your risk. **Most adults benefit from checking their own skin once a month**, using a mirror for hard-to-see areas or asking a partner for help. A **professional skin exam** is recommended if you have:"
      },
      {
        "type": "ul",
        "items": [
          "A personal or family history of skin cancer",
          "Many moles or unusual moles",
          "Fair skin or a history of frequent sunburns",
          "Lots of time in the sun, through work or hobbies"
        ]
      },
      {
        "type": "p",
        "text": "Your dermatologist can recommend how often you should come in, typically **once a year** for people at higher risk."
      },
      {
        "type": "h2",
        "text": "How is skin cancer treated?"
      },
      {
        "type": "p",
        "text": "Most skin cancers are treated by **removing them in the office**. Depending on the type, size and location, options may include:"
      },
      {
        "type": "ul",
        "items": [
          "**Surgical excision**, cutting out the cancer along with a small border of healthy skin",
          "**Mohs surgery**, a specialized technique that removes the cancer layer by layer while sparing as much healthy skin as possible, often used on the face",
          "**Prescription creams** or **freezing** for some very early or superficial skin cancers and precancers"
        ]
      },
      {
        "type": "h2",
        "text": "How can you lower your risk?"
      },
      {
        "type": "ul",
        "items": [
          "**Wear sunscreen every day**, SPF 30 or higher, with zinc oxide.",
          "**Wear sun-protective clothing**, a wide-brimmed hat and sunglasses.",
          "**Seek shade** during peak sun hours, roughly 10 a.m. to 4 p.m.",
          "**Never use tanning beds.**",
          "**Check your skin monthly** and see a dermatologist for anything new or changing."
        ]
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Skin cancer is common, especially in sunny places like Arizona, but it's **highly treatable when caught early**. Protect your skin every day, know the warning signs, and don't wait to get a changing spot checked."
      },
      {
        "type": "p",
        "text": "Due for a skin check? **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "what-is-this-spot-on-my-skin",
    "title": "What Is This Spot on My Skin? Common Skin Growths Explained",
    "description": "Seborrheic keratoses, cherry angiomas, skin tags, sun spots and more: a guide to common skin growths and the warning signs worth a skin check.",
    "category": "Skin Cancer & Spots",
    "date": "2026-04-06",
    "image": "/blog/what-is-this-spot-on-my-skin.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Found a new bump, spot or growth on your skin and wondering what it is? Most spots are harmless, but some are worth having checked. Here's a guide to the most common growths dermatologists see every day, plus the warning signs that mean it's time to make an appointment."
      },
      {
        "type": "p",
        "text": "*This guide is for general education only. It can't replace an exam, so if you're unsure about a spot, have a dermatologist take a look.*"
      },
      {
        "type": "h2",
        "text": "Seborrheic keratoses"
      },
      {
        "type": "p",
        "text": "These are some of the most common growths in adults over 40. They look **waxy, scaly and slightly raised**, almost as if they've been \"stuck on\" the skin, and range in color from tan to brown to black. They are **harmless**, but they can be removed if they become irritated or bother you cosmetically."
      },
      {
        "type": "h2",
        "text": "Cherry angiomas"
      },
      {
        "type": "p",
        "text": "These are **small, bright red bumps** made of tiny blood vessels. They often appear on the torso and become more common with age. They are **harmless** and can be removed for cosmetic reasons."
      },
      {
        "type": "h2",
        "text": "Skin tags"
      },
      {
        "type": "p",
        "text": "Skin tags are **small, soft, flesh-colored growths** that hang from the skin, often on the neck, underarms, eyelids or groin. They are **harmless**, but can be easily removed if they catch on clothing or jewelry."
      },
      {
        "type": "h2",
        "text": "Sun spots (solar lentigines)"
      },
      {
        "type": "p",
        "text": "Also called age spots or liver spots, these are **flat, tan to brown spots** on sun-exposed areas like the face, hands and shoulders. They are caused by years of sun exposure. They are harmless, but they are a sign of sun damage, so they're a good reminder to wear sunscreen."
      },
      {
        "type": "h2",
        "text": "Dermatofibromas"
      },
      {
        "type": "p",
        "text": "These are **firm, small bumps**, often on the legs, that may be pink, tan or brown. A telltale sign is that they **dimple inward when you pinch them**. They are harmless and sometimes appear after a minor injury such as a bug bite."
      },
      {
        "type": "h2",
        "text": "Moles"
      },
      {
        "type": "p",
        "text": "Most moles are **harmless**. But because melanoma, the most serious type of skin cancer, can start in or look like a mole, it's important to keep an eye on them."
      },
      {
        "type": "h2",
        "text": "Actinic keratoses"
      },
      {
        "type": "p",
        "text": "These are **rough, scaly, sandpaper-like patches** on sun-exposed skin, such as the face, scalp, ears and backs of the hands. They are **precancerous**, meaning they can turn into skin cancer over time, so they should be **treated by a dermatologist**."
      },
      {
        "type": "h2",
        "text": "When should you worry about a spot?"
      },
      {
        "type": "p",
        "text": "Use the **ABCDEs of melanoma** to check your moles and spots:"
      },
      {
        "type": "ul",
        "items": [
          "**A — Asymmetry:** one half doesn't match the other.",
          "**B — Border:** the edges are irregular, ragged or blurred.",
          "**C — Color:** several colors or uneven shading.",
          "**D — Diameter:** larger than about 6 millimeters (the size of a pencil eraser), though melanomas can be smaller.",
          "**E — Evolving:** any change in size, shape, color or height."
        ]
      },
      {
        "type": "p",
        "text": "Also watch for the **\"ugly duckling\" sign**: a spot that looks different from all your other moles."
      },
      {
        "type": "p",
        "text": "**Make an appointment if you notice:**"
      },
      {
        "type": "ul",
        "items": [
          "A **new or changing** spot",
          "A sore that **doesn't heal** within a few weeks",
          "A spot that **bleeds, itches or hurts**",
          "A **shiny, pearly or pink bump**, which can be a sign of basal cell carcinoma"
        ]
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Most skin growths are harmless, but **the only way to know for sure is to have them checked**. Regular skin checks help catch skin cancer early, when it's most treatable. This is especially important if you have a lot of moles, a history of sunburns, or a family history of skin cancer."
      },
      {
        "type": "p",
        "text": "Have a spot you're wondering about? **Schedule a skin check with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "acne-101",
    "title": "Acne 101: A Dermatologist's Answers to Your Most Common Acne Questions",
    "description": "A dermatologist's answers to common acne questions, from the best over-the-counter routine to prescription options like spironolactone.",
    "category": "Skin Conditions",
    "date": "2026-01-12",
    "image": "/blog/acne-101.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Acne is the most common skin condition in the United States, and it doesn't stop at the teenage years. Many adults deal with breakouts well into their 30s, 40s and beyond. The good news is that acne is very treatable. Here are clear answers to the questions we hear most often, from everyday habits to prescription options."
      },
      {
        "type": "h2",
        "text": "What causes acne?"
      },
      {
        "type": "p",
        "text": "Acne forms when pores become clogged with oil and dead skin cells. Bacteria that normally live on the skin can then multiply inside the clogged pore, leading to inflammation, redness and pimples. Hormones, genetics, certain medications and some skincare or hair products can all make breakouts more likely."
      },
      {
        "type": "h2",
        "text": "Should you pop your pimples?"
      },
      {
        "type": "p",
        "text": "**No.** Popping pimples increases the risk of **infection and scarring**, and it often pushes inflammation deeper into the skin, making the blemish last longer."
      },
      {
        "type": "p",
        "text": "Instead, treat your acne with **consistent medication** to prevent breakouts from forming in the first place. If a painful pimple pops up before a big event, a dermatologist can often treat it safely in the office."
      },
      {
        "type": "h2",
        "text": "What is the most effective over-the-counter acne regimen?"
      },
      {
        "type": "p",
        "text": "The most effective approach is a combination of:"
      },
      {
        "type": "ul",
        "items": [
          "**A benzoyl peroxide wash** in the morning, which kills acne-causing bacteria.",
          "**Adapalene gel** (such as Differin) applied at night, which keeps pores from clogging."
        ]
      },
      {
        "type": "p",
        "text": "Adapalene is a retinoid that **used to require a prescription but is now available over the counter**."
      },
      {
        "type": "p",
        "text": "A few tips to get the most out of this routine:"
      },
      {
        "type": "ul",
        "items": [
          "**Be patient.** Most acne treatments take **6 to 12 weeks** to show their full effect, and some people notice a little extra irritation at first.",
          "**Start slowly.** If your skin is sensitive, apply adapalene every other night for the first couple of weeks, then increase to nightly.",
          "**Use a pea-sized amount** of adapalene for your whole face, not just on individual pimples.",
          "**Protect your linens.** Benzoyl peroxide can bleach towels, pillowcases and clothing, so white fabrics are a smart choice."
        ]
      },
      {
        "type": "h2",
        "text": "What are the side effects of topical retinoids like adapalene or tretinoin?"
      },
      {
        "type": "p",
        "text": "Topical retinoids have two main side effects to plan for:"
      },
      {
        "type": "ul",
        "items": [
          "**Increased sun sensitivity.** Your skin will **burn about twice as quickly** as it normally would, so daily sunscreen is a must. We recommend an SPF 30 or higher containing zinc oxide.",
          "**Dryness.** Retinoids dry out the skin, so you will need to **moisturize more often** than usual. Choose a moisturizer labeled \"non-comedogenic\" so it won't clog pores."
        ]
      },
      {
        "type": "h2",
        "text": "Which birth control pill is most effective at reducing acne?"
      },
      {
        "type": "p",
        "text": "Combination pills containing **drospirenone and ethinyl estradiol** (such as the brand name **YAZ**, though many generics are now available) are highly effective at clearing **hormonal acne**, which often flares around the menstrual cycle and along the jawline and chin."
      },
      {
        "type": "p",
        "text": "Birth control pills require a prescription and aren't right for everyone. Talk with your doctor about your medical history, including any history of blood clots, migraines with aura or smoking, before starting one."
      },
      {
        "type": "h2",
        "text": "What is spironolactone, and can it help my acne?"
      },
      {
        "type": "p",
        "text": "**Spironolactone** is an oral prescription medication that is very effective for **hormonal acne in women**. It was originally developed to treat high blood pressure, but at lower doses it has become one of dermatologists' favorite tools for stubborn breakouts along the jawline, chin and neck."
      },
      {
        "type": "h3",
        "text": "How does it work?"
      },
      {
        "type": "p",
        "text": "Androgens (hormones such as testosterone, which everyone has in varying amounts) stimulate the skin's oil glands. More oil means more clogged pores and more breakouts. Spironolactone **blocks androgens from acting on the oil glands**, which reduces oil production and helps prevent new pimples from forming."
      },
      {
        "type": "p",
        "text": "Like most acne treatments, it takes time. Expect to see improvement over about **2 to 3 months**, with continued benefit after that. It is often used alongside topical treatments, or together with a birth control pill."
      },
      {
        "type": "h3",
        "text": "What are the common side effects?"
      },
      {
        "type": "p",
        "text": "Most people tolerate spironolactone well. The most common side effects include:"
      },
      {
        "type": "ul",
        "items": [
          "**Irregular periods or spotting** between periods",
          "**Breast tenderness**",
          "**Increased urination**, since it is a mild diuretic (\"water pill\")",
          "**Dizziness or lightheadedness**, especially when standing up quickly, because it can lower blood pressure",
          "**Fatigue or headaches**"
        ]
      },
      {
        "type": "p",
        "text": "Spironolactone can also raise potassium levels in the blood. This is rarely a problem for healthy young women, but you should avoid potassium supplements and salt substitutes (which often contain potassium), and tell your doctor about any other medications you take or if you have kidney problems."
      },
      {
        "type": "h3",
        "text": "Can you get pregnant while taking spironolactone?"
      },
      {
        "type": "p",
        "text": "**No. You should not become pregnant while taking spironolactone.** Because it blocks male hormones, it can interfere with the normal development of a male baby during pregnancy."
      },
      {
        "type": "p",
        "text": "If you could become pregnant, use a reliable form of birth control the entire time you are on spironolactone. Many patients pair it with a birth control pill, which both prevents pregnancy and helps regulate the irregular periods spironolactone can cause. If you are planning a pregnancy, talk with your dermatologist about stopping spironolactone beforehand, and contact your doctor right away if you become pregnant while taking it."
      },
      {
        "type": "h2",
        "text": "What is isotretinoin (Accutane)?"
      },
      {
        "type": "p",
        "text": "Isotretinoin, often still called by its original brand name Accutane, is a powerful oral medication for **severe, scarring or stubborn acne** that hasn't responded to other treatments. For many patients, a single course leads to long-lasting or even permanent clearing. Because it is so effective, it also requires close monitoring by a dermatologist."
      },
      {
        "type": "h2",
        "text": "What are the most common side effects of isotretinoin?"
      },
      {
        "type": "p",
        "text": "Most people on isotretinoin experience some of the following:"
      },
      {
        "type": "ul",
        "items": [
          "**Dry skin**, especially on the **lips**. A good lip balm becomes your best friend.",
          "**Increased sun sensitivity**, so daily sunscreen is essential.",
          "**Heightened muscle soreness** after working out."
        ]
      },
      {
        "type": "p",
        "text": "These effects are usually manageable and go away after treatment ends."
      },
      {
        "type": "h2",
        "text": "What are the rare but serious side effects of isotretinoin?"
      },
      {
        "type": "p",
        "text": "In rare cases, isotretinoin can cause:"
      },
      {
        "type": "ul",
        "items": [
          "Headaches",
          "Temporary decreases in night vision",
          "Elevated liver function markers",
          "High triglycerides (a type of fat in the blood)",
          "Mood disturbances, such as depression or anxiety"
        ]
      },
      {
        "type": "p",
        "text": "This is why patients on isotretinoin have regular check-ins and blood work. **If you notice any changes in your mood while taking isotretinoin, contact your dermatologist right away.**"
      },
      {
        "type": "p",
        "text": "Isotretinoin also causes **severe birth defects** if taken during pregnancy. Anyone who could become pregnant must be enrolled in the FDA's iPLEDGE safety program, use reliable contraception and have regular pregnancy tests during treatment."
      },
      {
        "type": "h2",
        "text": "When should you see a dermatologist?"
      },
      {
        "type": "p",
        "text": "It's time to make an appointment if:"
      },
      {
        "type": "ul",
        "items": [
          "Over-the-counter treatments haven't helped after about three months.",
          "Your acne is painful, deep or cystic.",
          "Breakouts are leaving dark spots or scars.",
          "Acne is affecting your confidence or quality of life."
        ]
      },
      {
        "type": "p",
        "text": "The sooner acne is treated, the lower the risk of permanent scarring."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**Don't pop pimples.** Treat them consistently instead.",
          "**Start with benzoyl peroxide and adapalene** for an effective over-the-counter routine, and give it 6 to 12 weeks.",
          "**Wear sunscreen and moisturize** while using retinoids.",
          "**Prescription options work.** Birth control pills, spironolactone and isotretinoin can clear acne that over-the-counter products can't."
        ]
      },
      {
        "type": "p",
        "text": "Struggling with breakouts? Our team can build a treatment plan that fits your skin. **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "eczema-101",
    "title": "Eczema 101: How to Calm Itchy, Irritated Skin",
    "description": "What causes eczema, how to bathe and moisturize to calm it, and the treatments that help when itchy, irritated skin won't settle down.",
    "category": "Skin Conditions",
    "date": "2026-02-23",
    "image": "/blog/eczema-101.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Eczema, also called **atopic dermatitis**, causes dry, itchy, inflamed patches of skin. It's common in children but affects many adults too, and the itch can disrupt sleep, work and daily life. There's no permanent cure, but the right routine and treatment can keep it well under control."
      },
      {
        "type": "h2",
        "text": "What causes eczema?"
      },
      {
        "type": "p",
        "text": "Eczema happens when the skin's protective **barrier doesn't work as well as it should**. Moisture escapes easily, and irritants and allergens get in more easily, which triggers inflammation and itching. It often runs in families and is linked to **allergies, asthma and hay fever**."
      },
      {
        "type": "p",
        "text": "Common triggers include:"
      },
      {
        "type": "ul",
        "items": [
          "**Dry air**, especially in winter or desert climates",
          "**Hot showers** and harsh soaps",
          "**Fragrances** in soaps, lotions and laundry detergent",
          "**Wool** and scratchy fabrics",
          "**Sweat**, stress and illness"
        ]
      },
      {
        "type": "h2",
        "text": "Is eczema contagious?"
      },
      {
        "type": "p",
        "text": "**No.** You can't catch eczema from someone else or spread it to others."
      },
      {
        "type": "h2",
        "text": "What is the most important thing you can do for eczema?"
      },
      {
        "type": "p",
        "text": "**Moisturize, moisturize, moisturize.** Repairing the skin barrier is the foundation of eczema care:"
      },
      {
        "type": "ul",
        "items": [
          "Use a **thick cream or ointment**, not a lotion. Lotions are mostly water and don't protect the skin barrier well.",
          "**Apply it within a few minutes of bathing**, while your skin is still damp, and again at least once more during the day.",
          "Choose **fragrance-free** products."
        ]
      },
      {
        "type": "h2",
        "text": "How should you bathe if you have eczema?"
      },
      {
        "type": "ul",
        "items": [
          "Take **short, lukewarm showers or baths** (5 to 10 minutes).",
          "Use a **fragrance-free bar soap for sensitive skin**, and only where you need it.",
          "**Pat dry** gently instead of rubbing, then moisturize right away."
        ]
      },
      {
        "type": "h2",
        "text": "Are steroid creams safe?"
      },
      {
        "type": "p",
        "text": "Many patients worry about using steroid creams. **When used as directed by your dermatologist, topical steroids are safe and very effective** at calming eczema flares. The key is using the right strength, in the right place, for the right amount of time. Weaker steroids are used on the face and skin folds, and stronger ones on thicker skin like the hands and legs."
      },
      {
        "type": "p",
        "text": "Avoid using a strong steroid cream for long periods without guidance, as that can thin the skin."
      },
      {
        "type": "h2",
        "text": "What other treatments are available?"
      },
      {
        "type": "p",
        "text": "If moisturizers and steroid creams aren't enough, there are many other options:"
      },
      {
        "type": "ul",
        "items": [
          "**Non-steroid prescription creams and ointments** that are safe for long-term use, including on the face and eyelids",
          "**Biologic injections** and **oral medications** that calm the immune system for moderate to severe eczema",
          "**Phototherapy** (light therapy) in the dermatologist's office"
        ]
      },
      {
        "type": "p",
        "text": "These treatments have made a dramatic difference for many patients whose eczema didn't respond to creams alone."
      },
      {
        "type": "h2",
        "text": "How can you stop the itch?"
      },
      {
        "type": "ul",
        "items": [
          "**Try not to scratch.** Scratching damages the skin barrier and makes eczema worse, creating an itch-scratch cycle. Keep nails short.",
          "**Apply a cool compress** to itchy areas.",
          "**Run a humidifier** in your bedroom.",
          "**Wear soft, breathable cotton** clothing.",
          "**Use fragrance-free laundry detergent** and skip dryer sheets."
        ]
      },
      {
        "type": "h2",
        "text": "When should you see a dermatologist?"
      },
      {
        "type": "p",
        "text": "Make an appointment if:"
      },
      {
        "type": "ul",
        "items": [
          "Your eczema isn't improving with over-the-counter care.",
          "The itch is keeping you up at night.",
          "Your skin is **oozing, crusting or has yellow scabs**, which may be a sign of infection.",
          "Eczema is affecting your quality of life."
        ]
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**Thick creams or ointments**, applied right after bathing, are the foundation of eczema care.",
          "**Keep showers short and lukewarm**, and go fragrance-free.",
          "**Steroid creams are safe** when used as directed.",
          "**Newer treatments** can help when creams aren't enough."
        ]
      },
      {
        "type": "p",
        "text": "Tired of the itch? Our team can build a treatment plan that works for you. **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "rosacea-101",
    "title": "Rosacea 101: Why Your Face Is Red and What You Can Do About It",
    "description": "What rosacea looks like, what causes facial redness and flushing, common triggers to avoid, and the treatments that keep it under control.",
    "category": "Skin Conditions",
    "date": "2026-03-23",
    "image": "/blog/rosacea-101.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Do you flush easily, have persistent redness on your cheeks and nose, or get acne-like bumps that don't respond to acne products? You may have **rosacea**, a common long-term skin condition that affects millions of adults. It can't be cured, but it can be very well controlled."
      },
      {
        "type": "h2",
        "text": "What does rosacea look like?"
      },
      {
        "type": "p",
        "text": "Rosacea usually affects the **center of the face**: the cheeks, nose, chin and forehead. Signs include:"
      },
      {
        "type": "ul",
        "items": [
          "**Flushing or blushing** easily",
          "**Persistent redness**",
          "**Small visible blood vessels**",
          "**Red bumps and pus-filled pimples** that can look like acne",
          "**Burning, stinging or sensitive skin**",
          "**Dry, gritty or irritated eyes** (ocular rosacea)"
        ]
      },
      {
        "type": "p",
        "text": "It's most common in adults over 30 and people with fair skin, but it can affect anyone."
      },
      {
        "type": "h2",
        "text": "What causes rosacea?"
      },
      {
        "type": "p",
        "text": "The exact cause of rosacea isn't known yet, but researchers have several leading theories. Most likely, it results from a **combination of factors**:"
      },
      {
        "type": "ul",
        "items": [
          "**Genetics.** Rosacea often runs in families, so you may inherit a tendency to develop it.",
          "**An overactive immune response.** In people with rosacea, the skin's immune system appears to overreact to everyday triggers, leading to inflammation, redness and bumps.",
          "**Blood vessel changes.** The blood vessels in the face may dilate too easily and stay dilated, which may explain the flushing, persistent redness and visible vessels.",
          "**Demodex mites.** These microscopic mites live on everyone's skin, but people with rosacea tend to have more of them, and the skin may react to them or the bacteria they carry.",
          "**Nerve sensitivity.** Overly sensitive nerves in the skin may contribute to flushing, burning and stinging in response to heat, spicy foods and other triggers.",
          "**A weakened skin barrier.** Many people with rosacea have a more fragile skin barrier, which makes the skin more sensitive and easily irritated.",
          "**Gut health.** Some studies have explored a possible link between rosacea and digestive conditions, but this connection is still being researched."
        ]
      },
      {
        "type": "p",
        "text": "What we do know: **rosacea is not contagious and is not caused by poor hygiene.**"
      },
      {
        "type": "h2",
        "text": "Is rosacea the same as acne?"
      },
      {
        "type": "p",
        "text": "**No.** Rosacea bumps can look like acne, but the two are different conditions. Rosacea **doesn't cause blackheads or whiteheads**, and many acne products, like harsh scrubs or strong benzoyl peroxide, can actually **irritate rosacea and make it worse**. That's why getting the right diagnosis matters."
      },
      {
        "type": "h2",
        "text": "What triggers rosacea flares?"
      },
      {
        "type": "p",
        "text": "Triggers vary from person to person, but common ones include:"
      },
      {
        "type": "ul",
        "items": [
          "**Sun exposure**, the most common trigger",
          "**Heat**, including hot weather, hot showers and saunas",
          "**Alcohol**, especially red wine",
          "**Spicy foods** and **hot drinks**",
          "**Stress** and intense exercise",
          "**Harsh or fragranced skincare products**"
        ]
      },
      {
        "type": "p",
        "text": "Keeping a simple diary of your flares can help you figure out your personal triggers."
      },
      {
        "type": "h2",
        "text": "How should you care for your skin if you have rosacea?"
      },
      {
        "type": "ul",
        "items": [
          "**Wear sunscreen every day.** Mineral sunscreens with **zinc oxide** tend to be the gentlest on sensitive, rosacea-prone skin.",
          "**Use a gentle, fragrance-free cleanser** and lukewarm water.",
          "**Moisturize daily** with a fragrance-free cream to support your skin barrier.",
          "**Avoid scrubs, toners with alcohol, and harsh exfoliants.**",
          "**Test new products** on a small area before using them on your whole face."
        ]
      },
      {
        "type": "h2",
        "text": "What treatments are available?"
      },
      {
        "type": "p",
        "text": "Rosacea treatment depends on your symptoms:"
      },
      {
        "type": "ul",
        "items": [
          "**For bumps and pimples:** prescription creams and gels such as **metronidazole, azelaic acid or ivermectin**, or a **low-dose oral antibiotic** like doxycycline.",
          "**For visible blood vessels and persistent redness:** **laser or light treatments** in the dermatologist's office are often the most effective option."
        ]
      },
      {
        "type": "p",
        "text": "Most people need a combination of daily skincare, trigger avoidance and treatment to keep rosacea under control."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**Rosacea isn't acne**, and acne products can make it worse.",
          "**Sun is the number one trigger**, so daily sunscreen is essential.",
          "**Gentle, fragrance-free skincare** helps keep flares down.",
          "**Prescription treatments and lasers** work well for bumps, redness and blood vessels."
        ]
      },
      {
        "type": "p",
        "text": "Tired of constant redness? **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "dry-skin-101",
    "title": "Dry Skin 101: Simple Fixes for Itchy, Tight, Flaky Skin",
    "description": "Simple fixes for itchy, tight, flaky skin: which moisturizers work, when to apply them, and the shower habits that make dry skin worse.",
    "category": "Skin Conditions",
    "date": "2026-10-05",
    "image": "/blog/dry-skin-101.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Dry skin is one of the most common reasons people visit a dermatologist. It can feel tight, itchy and rough, and it may even crack or flake. Dry air, hot water, harsh soaps and aging can all strip moisture from the skin. The good news is that a few small changes to your daily routine can make a big difference. Here are our answers to the questions patients ask most."
      },
      {
        "type": "h2",
        "text": "What should you do if you have dry skin?"
      },
      {
        "type": "p",
        "text": "Switch your moisturizer to a **thick cream or ointment**. Standard moisturizing **lotions are mostly water** and are simply insufficient for adequately hydrating very dry skin."
      },
      {
        "type": "p",
        "text": "A quick way to tell the difference: lotions usually come in a pump bottle and pour easily, creams are thicker and often come in a jar or tub, and ointments (like petroleum jelly) are the thickest and most protective of all."
      },
      {
        "type": "p",
        "text": "When reading labels, look for helpful ingredients such as:"
      },
      {
        "type": "ul",
        "items": [
          "**Petrolatum**, which seals moisture into the skin",
          "**Ceramides**, which help repair the skin's natural barrier",
          "**Glycerin** and **hyaluronic acid**, which draw water into the skin"
        ]
      },
      {
        "type": "p",
        "text": "And as with soap, choose products that are **fragrance-free**."
      },
      {
        "type": "h2",
        "text": "When is the best time to moisturize?"
      },
      {
        "type": "p",
        "text": "Right after you bathe. **Apply your cream or ointment within a few minutes of getting out of the shower**, while your skin is still slightly damp. This locks in the water your skin just absorbed. Gently **pat your skin dry** with a towel rather than rubbing."
      },
      {
        "type": "p",
        "text": "For very dry hands, try applying a thick layer of ointment at bedtime and wearing cotton gloves overnight."
      },
      {
        "type": "h2",
        "text": "What is the best type of soap for dry, sensitive skin?"
      },
      {
        "type": "p",
        "text": "Opt for a **fragrance-free bar soap** formulated specifically for sensitive skin."
      },
      {
        "type": "p",
        "text": "Liquid soaps need **preservatives** to keep them from spoiling, and these ingredients can sometimes trigger **irritation or allergic reactions** in people with sensitive skin."
      },
      {
        "type": "p",
        "text": "It also helps to use soap only where you need it, such as the underarms, groin and feet, and simply rinse the rest of your body with water."
      },
      {
        "type": "h2",
        "text": "How should you adjust your shower routine if you have dry skin?"
      },
      {
        "type": "p",
        "text": "Keep your showers **short** and use **lukewarm water**. Long, hot showers strip away the skin's natural oils and dry it out quickly. Aim for about 5 to 10 minutes."
      },
      {
        "type": "h2",
        "text": "What else can help?"
      },
      {
        "type": "p",
        "text": "A few more habits that protect dry skin:"
      },
      {
        "type": "ul",
        "items": [
          "**Run a humidifier** in your bedroom, especially during the winter or in dry climates.",
          "**Use fragrance-free laundry detergent** and skip scented dryer sheets.",
          "**Avoid harsh scrubs** and exfoliating brushes, which can further damage dry skin.",
          "**Wear soft, breathable fabrics** like cotton next to your skin instead of wool.",
          "**Protect your skin outdoors** with gloves in cold weather and daily sunscreen year-round."
        ]
      },
      {
        "type": "h2",
        "text": "When should you see a dermatologist?"
      },
      {
        "type": "p",
        "text": "Make an appointment if:"
      },
      {
        "type": "ul",
        "items": [
          "Your skin stays dry or itchy even after a few weeks of these changes.",
          "Itching keeps you up at night.",
          "Your skin is cracking, bleeding or shows signs of infection, such as oozing or crusting.",
          "You have red, inflamed patches, which may be a sign of eczema or another skin condition that needs treatment."
        ]
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**Use a thick cream or ointment**, not a lotion.",
          "**Moisturize right after showering**, while your skin is still damp.",
          "**Choose a fragrance-free bar soap** for sensitive skin.",
          "**Keep showers short and lukewarm.**"
        ]
      },
      {
        "type": "p",
        "text": "Still dealing with dry, uncomfortable skin? Our team can help find the cause and the right treatment. **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "thinning-hair-in-men",
    "title": "Thinning Hair in Men: What Actually Works (and What to Skip)",
    "description": "Do biotin supplements work for thinning hair? What to know about minoxidil, finasteride and other proven treatments for male pattern hair loss.",
    "category": "Hair & Scalp",
    "date": "2026-08-24",
    "image": "/blog/thinning-hair-in-men.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Noticing more scalp in the mirror, a receding hairline or thinning on top? You're not alone. **Male pattern hair loss** affects most men at some point in their lives, and it usually shows up as thinning at the front of the scalp and on the crown (the top, toward the back). The good news is that there are proven, affordable treatments, and the earlier you start, the more hair you can keep."
      },
      {
        "type": "h2",
        "text": "Do hair growth supplements like biotin work?"
      },
      {
        "type": "p",
        "text": "For male pattern hair loss, **there is minimal evidence that supplements, including biotin, increase hair growth**. Save your money. High-dose biotin can also interfere with certain blood tests, including some thyroid and heart tests, so tell your doctor if you take it."
      },
      {
        "type": "h2",
        "text": "What over-the-counter treatment can men use for thinning hair?"
      },
      {
        "type": "p",
        "text": "**5% minoxidil** (best known by the brand name **Rogaine**) is the go-to over-the-counter option. It comes as a liquid solution or a foam that you **apply to your scalp twice a day**."
      },
      {
        "type": "p",
        "text": "A few things to know before you start:"
      },
      {
        "type": "ul",
        "items": [
          "**Be patient.** It takes about **3 to 6 months** to see results.",
          "**Set realistic expectations.** Minoxidil works better at **preventing further hair loss** than at regrowing hair, though some men do see regrowth.",
          "**Expect some early shedding.** Many men notice extra hair shedding in the first few weeks. This is normal and usually a sign the medication is working, as older hairs make way for new growth.",
          "**Keep using it.** The benefits last only as long as you use it. If you stop, hair loss typically resumes within a few months."
        ]
      },
      {
        "type": "h2",
        "text": "Where can you find 5% minoxidil at the best price?"
      },
      {
        "type": "p",
        "text": "You don't need to pay for the name brand. Generic 5% minoxidil works the same way, and **Amazon often sells it at the lowest price**, either under Amazon's own brand or the **Kirkland (Costco) brand**."
      },
      {
        "type": "p",
        "text": "One surprise: many Costco stores only stock the Kirkland **foam**, which tends to cost a bit more. The **liquid solution** is usually the most affordable option and is often sold online in multi-month supplies."
      },
      {
        "type": "h2",
        "text": "What prescription medication can men take for thinning hair?"
      },
      {
        "type": "p",
        "text": "**Finasteride** (brand name **Propecia**) is an FDA-approved, once-daily pill for male pattern hair loss. It works by lowering levels of DHT, the hormone that shrinks hair follicles over time. Finasteride can both **slow hair thinning and help regrow hair**, and many men use it together with minoxidil for the best results."
      },
      {
        "type": "p",
        "text": "You may also hear about **oral minoxidil**. Low-dose minoxidil pills are being used **off-label** for hair loss and are still being studied in clinical trials. Ask your dermatologist whether it might be an option for you."
      },
      {
        "type": "h2",
        "text": "What are the side effects of finasteride?"
      },
      {
        "type": "p",
        "text": "Most men take finasteride without problems, but it's important to know the possible side effects. Based on clinical trials:"
      },
      {
        "type": "ul",
        "items": [
          "About **3% of men report sexual side effects**, such as lower sex drive or erectile difficulties.",
          "About **1% of men report breast tenderness or enlargement**."
        ]
      },
      {
        "type": "p",
        "text": "Some men have also reported **mood changes, such as depression**, after starting finasteride. A direct link hasn't been firmly established, but let your doctor know right away if you notice any changes in your mood."
      },
      {
        "type": "p",
        "text": "A couple of other important notes:"
      },
      {
        "type": "ul",
        "items": [
          "Finasteride lowers **PSA levels** (a prostate cancer screening test), so tell any doctor ordering a PSA test that you take it.",
          "**Women who are or may become pregnant should not handle crushed or broken tablets**, because the medication can affect the development of a male baby."
        ]
      },
      {
        "type": "p",
        "text": "Talk with your dermatologist about whether finasteride is right for you."
      },
      {
        "type": "h2",
        "text": "Where can you find finasteride for the cheapest price?"
      },
      {
        "type": "p",
        "text": "Generic finasteride is inexpensive, especially through **Mark Cuban Cost Plus Drug Company**, which sells generic prescriptions at the manufacturer's cost plus a 15% markup and small pharmacy and shipping fees. Their prices are often much lower than retail chains like CVS and Walgreens, even with a coupon or insurance. You'll still need a prescription from your doctor."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**Skip the supplements.** There's little evidence they help with male pattern hair loss.",
          "**Start with 5% minoxidil** twice daily, and give it 3 to 6 months.",
          "**Shop generic.** Amazon and Kirkland brand minoxidil, and Cost Plus Drugs for finasteride, can save you a lot.",
          "**Ask about finasteride** if you want a stronger, prescription option."
        ]
      },
      {
        "type": "p",
        "text": "Worried about thinning hair? The sooner you start treatment, the more hair you can keep. **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "dandruff-treatment",
    "title": "Dandruff: What Actually Works (and the Cheapest Way to Treat It)",
    "description": "What causes dandruff, which over-the-counter shampoos work best, and how to use them for the cheapest, most effective results.",
    "category": "Hair & Scalp",
    "date": "2026-09-21",
    "image": "/blog/dandruff-treatment.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "White flakes on your shoulders, an itchy scalp, or greasy, scaly patches around your eyebrows and nose? You're dealing with one of the most common skin conditions there is. The good news: dandruff is easy to treat with inexpensive over-the-counter shampoos, as long as you use them the right way."
      },
      {
        "type": "h2",
        "text": "What causes dandruff?"
      },
      {
        "type": "p",
        "text": "Dandruff is a mild form of a condition called **seborrheic dermatitis**. It's linked to a yeast called **Malassezia** that normally lives on everyone's skin. In some people, the skin reacts to this yeast with **flaking, redness and itching**."
      },
      {
        "type": "p",
        "text": "It shows up in oily areas, so besides the scalp, it can affect the **eyebrows, the sides of the nose, behind the ears, the beard area and the center of the chest**. It often gets worse in winter and during stressful times."
      },
      {
        "type": "p",
        "text": "**Dandruff isn't caused by poor hygiene**, and it isn't contagious."
      },
      {
        "type": "h2",
        "text": "Does dry scalp mean you should wash your hair less?"
      },
      {
        "type": "p",
        "text": "Usually **not**. Many people with flakes assume their scalp is dry and wash less often, but dandruff typically **improves with more regular washing**, because it helps clear the oil and yeast that drive it."
      },
      {
        "type": "h2",
        "text": "What over-the-counter shampoos work best?"
      },
      {
        "type": "p",
        "text": "Look for one of these **active ingredients** on the label:"
      },
      {
        "type": "ul",
        "items": [
          "**Ketoconazole 1%** (such as Nizoral): an anti-yeast ingredient and one of the most effective options",
          "**Selenium sulfide** (such as Selsun Blue): slows skin turnover and fights yeast",
          "**Zinc pyrithione** (such as Head & Shoulders): fights yeast and bacteria",
          "**Salicylic acid**: helps loosen and remove thick scale",
          "**Coal tar**: slows skin turnover, though it has a strong smell and can stain light-colored hair"
        ]
      },
      {
        "type": "p",
        "text": "As always, focus on the **ingredient, not the brand**. Store brands with the same active ingredient work just as well and cost less."
      },
      {
        "type": "h2",
        "text": "How should you use dandruff shampoo?"
      },
      {
        "type": "p",
        "text": "This is where most people go wrong:"
      },
      {
        "type": "ul",
        "items": [
          "**Leave it on for about 5 minutes** before rinsing so the active ingredient has time to work. Lather it up at the start of your shower, then rinse at the end.",
          "**Use it 2 to 3 times a week** at first, then once or twice a week to keep flakes away.",
          "**Rotate between two shampoos** with different active ingredients if one stops working as well.",
          "**Use it on your face too.** You can lather it into your eyebrows, beard and the sides of your nose, then rinse.",
          "**Follow with your regular conditioner** if the medicated shampoo leaves your hair feeling dry."
        ]
      },
      {
        "type": "h2",
        "text": "When should you see a dermatologist?"
      },
      {
        "type": "p",
        "text": "Make an appointment if:"
      },
      {
        "type": "ul",
        "items": [
          "Your flakes don't improve after a few weeks of using medicated shampoos correctly.",
          "Your scalp is **very red, thick, scaly or painful**. This could be psoriasis or another condition.",
          "You're **losing hair** along with flaking.",
          "The rash is spreading to your face or body."
        ]
      },
      {
        "type": "p",
        "text": "Your dermatologist can prescribe a **stronger ketoconazole shampoo**, a **medicated scalp solution** or a **mild prescription cream** for the face."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**Dandruff is common, not contagious, and not caused by being dirty.**",
          "**Choose a shampoo by its active ingredient**: ketoconazole, selenium sulfide or zinc pyrithione.",
          "**Leave it on for 5 minutes** and use it a few times a week.",
          "**Store brands work just as well.**"
        ]
      },
      {
        "type": "p",
        "text": "Still flaking? **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "anti-aging-skincare",
    "title": "Anti-Aging Skincare: What Actually Works (and What Doesn't)",
    "description": "Most anti-aging serums lack strong evidence. A dermatologist explains the two products proven to prevent and reduce signs of aging.",
    "category": "Skincare",
    "date": "2026-03-09",
    "image": "/blog/anti-aging-skincare.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "Vitamin C serums, hyaluronic acid elixirs, peptide creams, \"miracle\" oils: there's no shortage of products promising to reverse aging. Many of them cost a small fortune. So which ones are worth it? The honest answer is that only a couple of products have strong evidence behind them, and they're probably cheaper than what's already on your shelf."
      },
      {
        "type": "h2",
        "text": "Do expensive serums and anti-aging creams work?"
      },
      {
        "type": "p",
        "text": "Unfortunately, **most don't have great evidence behind them**. In many clinical studies of these products, when outside observers who didn't know who had used the product compared photos from before and after, **most couldn't tell a difference**."
      },
      {
        "type": "p",
        "text": "That doesn't mean these products are harmful, and some people simply enjoy using them. But if your goal is to visibly prevent or reduce signs of aging, your money is better spent elsewhere."
      },
      {
        "type": "h2",
        "text": "What actually prevents aging of the skin?"
      },
      {
        "type": "p",
        "text": "There are two products with strong, proven evidence."
      },
      {
        "type": "h3",
        "text": "1. Sunscreen"
      },
      {
        "type": "p",
        "text": "**Sunscreen is the single most important product for preventing skin aging.** The sun's UVA rays are the main cause of **wrinkles, dark spots and uneven skin tone**, and they reach your skin every day, rain or shine, all year round."
      },
      {
        "type": "p",
        "text": "For the best protection against aging:"
      },
      {
        "type": "ul",
        "items": [
          "Use a **broad-spectrum sunscreen with SPF 30 or higher**.",
          "Look for **zinc oxide** in the active ingredients for strong UVA protection.",
          "**Apply it every morning**, not just on beach days, and reapply when you're outdoors."
        ]
      },
      {
        "type": "h3",
        "text": "2. Retinoids"
      },
      {
        "type": "p",
        "text": "**Retinoids** are vitamin A derivatives that **boost collagen, the protein that keeps skin thick and firm**, and **reduce fine wrinkles** over time. They can also improve skin texture and dark spots."
      },
      {
        "type": "p",
        "text": "They come in different strengths:"
      },
      {
        "type": "ul",
        "items": [
          "**Retinol** is a milder form sold over the counter in many creams and serums.",
          "**Adapalene** gel is a stronger retinoid that's now available over the counter.",
          "**Tretinoin** is a prescription-strength retinoid with the most evidence for reducing wrinkles. Ask your dermatologist whether it's right for you."
        ]
      },
      {
        "type": "p",
        "text": "Tips for using retinoids:"
      },
      {
        "type": "ul",
        "items": [
          "**Apply at night**, starting every other night, and use a pea-sized amount for your whole face.",
          "**Expect some dryness or irritation at first.** Moisturize as needed.",
          "**Wear sunscreen daily**, since retinoids make your skin more sensitive to the sun.",
          "**Don't use retinoids if you are pregnant or planning to become pregnant.**",
          "**Give it time.** Improvements in fine lines typically take several months."
        ]
      },
      {
        "type": "h2",
        "text": "Other habits that help"
      },
      {
        "type": "ul",
        "items": [
          "**Don't smoke.** Smoking speeds up wrinkle formation.",
          "**Skip tanning beds.** They expose your skin to intense UVA radiation.",
          "**Wear sun-protective clothing and hats** when you'll be outdoors for long periods."
        ]
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**Most serums and potions** have limited evidence. They make nice gifts, but don't count on them to turn back the clock.",
          "**Daily sunscreen** is the most powerful anti-aging product there is.",
          "**Retinoids** are the best-proven treatment for fine wrinkles."
        ]
      },
      {
        "type": "p",
        "text": "Interested in a personalized anti-aging plan, including prescription-strength options? **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  },
  {
    "slug": "lotion-cream-or-ointment",
    "title": "Lotion, Cream or Ointment? How to Choose the Right Moisturizer",
    "description": "What's the difference between a lotion, a cream and an ointment, and which moisturizer should you use for dry skin, your face or eczema?",
    "category": "Skincare",
    "date": "2026-07-13",
    "image": "/blog/lotion-cream-or-ointment.jpg",
    "blocks": [
      {
        "type": "p",
        "text": "The moisturizer aisle is packed with promises: glowing skin, fewer wrinkles, \"age-defying\" formulas. But what does moisturizer actually do, and which kind should you buy? Here's a dermatologist's no-nonsense guide."
      },
      {
        "type": "h2",
        "text": "Should you use moisturizer every day?"
      },
      {
        "type": "p",
        "text": "**If your skin is dry, yes.** That's what moisturizer is for."
      },
      {
        "type": "p",
        "text": "If your skin isn't dry, you don't need to use one just for the sake of it. Despite what many ads suggest, **there is no evidence that moisturizing prevents wrinkles or slows the normal aging of the skin**. (If preventing wrinkles is your goal, sunscreen is the product that actually makes a difference.)"
      },
      {
        "type": "h2",
        "text": "What's the difference between a lotion, a cream and an ointment?"
      },
      {
        "type": "p",
        "text": "The main difference is how much **water** each contains:"
      },
      {
        "type": "ul",
        "items": [
          "**Lotions** have the highest percentage of water. They feel light and absorb quickly, but they also **evaporate quickly**, so they don't hydrate dry skin for long. They usually come in a pump bottle.",
          "**Creams** are thicker, with less water and more oil. They moisturize much better than lotions and usually come in a jar or tub.",
          "**Ointments**, such as **petroleum jelly**, contain little to no water. They are the **most effective at sealing in moisture**, but can feel greasy or sticky."
        ]
      },
      {
        "type": "h2",
        "text": "What kind of moisturizer should you use?"
      },
      {
        "type": "p",
        "text": "It depends on your goal:"
      },
      {
        "type": "ul",
        "items": [
          "**For dry skin:** use a **cream or an ointment**. If your skin is dry enough to need moisturizer, you probably need something thicker than a lotion.",
          "**For very dry, cracked or burning skin:** use an **ointment**. Cracked skin often stings when lotions or creams are applied, because their water and added ingredients can irritate it. An ointment protects the skin and **helps it heal more quickly**.",
          "**For a light daily layer:** a **lotion** can be useful when you want something non-greasy, for example as a base under sunscreen on your face in the morning."
        ]
      },
      {
        "type": "h2",
        "text": "How can you get the most out of your moisturizer?"
      },
      {
        "type": "ul",
        "items": [
          "**Apply it right after bathing**, within a few minutes, while your skin is still slightly damp.",
          "**Choose fragrance-free** products, especially if your skin is sensitive.",
          "**Use ointment overnight** if you find it too sticky during the day.",
          "**Look for proven ingredients** like petrolatum, ceramides and glycerin rather than paying extra for trendy additives."
        ]
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "ul",
        "items": [
          "**Moisturize if your skin is dry.** It won't prevent wrinkles, but it will keep your skin comfortable and healthy.",
          "**Creams beat lotions** for dry skin.",
          "**Ointments are best** for very dry or cracked skin."
        ]
      },
      {
        "type": "p",
        "text": "Still struggling with dry, irritated skin? It could be eczema or another treatable condition. **Schedule an appointment with us at [dodermatology.com](booking).**"
      }
    ]
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Newest first
export function postsByDate(posts: BlogPost[] = blogPosts): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

// Up to `count` other posts, same category first, then the newest of the rest
export function relatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const others = postsByDate().filter((p) => p.slug !== post.slug)
  const same = others.filter((p) => p.category === post.category)
  const rest = others.filter((p) => p.category !== post.category)
  return [...same, ...rest].slice(0, count)
}

// "2026-05-04" -> "May 4, 2026" (fixed time zone so the server and browser agree)
export function formatPostDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  })
}
