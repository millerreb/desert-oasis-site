
export interface ServiceData {
  id: string;
  serviceName: string;
  category: string;
  mainImage: string;
  paragraphs: {
    title: string;
    content: string;
  }[];
  callToAction: {
    heading: string;
    subheading: string;
    phone: string;
    buttonText: string;
  };
}

// Common call to action for all services
const commonCallToAction = {
  heading: "QUESTIONS? GIVE US A CALL!",
  subheading: "Schedule Your Consultation Today",
  phone: "(480) 418-3314",
  buttonText: "Schedule Appointment",
};

// Mock data for all services
export const servicesData: ServiceData[] = [
  // Medical treatments
  {
    id: "skin-cancer-screening",
    serviceName: "Skin Cancer Screening",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Early Detection Saves Lives",
        content:
          "Skin cancer is one of the most common types of cancer, but early detection significantly improves treatment outcomes. Our dermatologists provide thorough skin examinations to identify any suspicious moles or lesions.",
      },
      {
        title: "Comprehensive Screening",
        content:
          "We use advanced diagnostic techniques, including dermoscopy and biopsy, to assess skin abnormalities and ensure accurate detection of potential skin cancers.",
      },
      {
        title: "Risk Factors and Prevention",
        content:
          "Exposure to UV radiation, family history, and skin type can increase the risk of skin cancer. We provide guidance on sun protection and lifestyle changes to help reduce your risk.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "acne",
    serviceName: "Acne Treatment",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Effective Acne Management",
        content:
          "Acne is a common skin condition that causes pimples, blackheads, and inflammation. Our dermatologists offer personalized treatment plans to help clear your skin and prevent future breakouts.",
      },
      {
        title: "Treatment Approaches",
        content:
          "We provide a range of treatment options, including topical and oral medications, skincare routines, and advanced therapies such as chemical peels and laser treatments.",
      },
      {
        title: "Identifying Triggers",
        content:
          "Acne triggers vary from person to person and can include hormonal changes, diet, stress, and skincare products. We help identify and minimize these triggers for healthier skin.",
      },
    ],
    callToAction: commonCallToAction,
  },

  {
    id: "eczema",
    serviceName: "Eczema Treatment",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Managing Chronic Skin Inflammation",
        content:
          "Eczema, or atopic dermatitis, is a chronic skin condition that causes redness, itching, and irritation. Our dermatologists offer personalized treatment plans to help control flare-ups and soothe your skin.",
      },
      {
        title: "Treatment Approaches",
        content:
          "We provide a range of treatment options, including medicated creams, lifestyle adjustments, and advanced therapies such as biologic injections for severe cases.",
      },
      {
        title: "Identifying Triggers",
        content:
          "Eczema triggers vary from person to person and can include allergens, stress, weather changes, and certain fabrics. We help identify and minimize these triggers for better skin management.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "hand-dermatitis",
    serviceName: "Hand Dermatitis",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Irritation and Allergy-Based Treatment",
        content:
          "Hand dermatitis, often caused by irritants or allergens, leads to dryness, cracking, and rashes. Our dermatologists create tailored treatment plans to soothe and protect your skin.",
      },
      {
        title: "Treatment Options",
        content:
          "We offer medicated creams, barrier protection strategies, and lifestyle recommendations to prevent flare-ups and heal damaged skin.",
      },
      {
        title: "Prevention Strategies",
        content:
          "Frequent hand washing, chemical exposure, and cold weather can worsen symptoms. We provide protective skincare regimens to minimize irritation.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "warts",
    serviceName: "Wart Removal",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Effective Wart Treatments",
        content:
          "Warts are caused by the human papillomavirus (HPV) and can be stubborn to treat. Our dermatologists use advanced techniques to remove them safely and effectively.",
      },
      {
        title: "Treatment Methods",
        content:
          "Cryotherapy (freezing), laser therapy, chemical treatments, and minor surgical removal are available options depending on the severity of the wart.",
      },
      {
        title: "Preventing Wart Recurrence",
        content:
          "HPV can persist in the skin, leading to recurring warts. Proper skin hygiene and early treatment can help reduce the risk of spread.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "excessive-sweating",
    serviceName: "Excessive Sweating (Hyperhidrosis)",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Regain Control Over Excessive Sweating",
        content:
          "Hyperhidrosis causes excessive sweating, impacting daily life and confidence. We offer advanced treatment solutions to help manage and reduce symptoms.",
      },
      {
        title: "Treatment Options",
        content:
          "Treatments include prescription antiperspirants, Botox injections, iontophoresis, and minimally invasive procedures to target overactive sweat glands.",
      },
      {
        title: "Understanding Causes",
        content:
          "Primary hyperhidrosis is often hereditary, while secondary hyperhidrosis can be due to medical conditions. Our dermatologists assess the root cause for effective management.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "hair-loss",
    serviceName: "Hair Loss Treatment",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Solutions for Hair Thinning and Baldness",
        content:
          "Hair loss can occur due to genetics, stress, hormonal imbalances, or medical conditions. We offer targeted treatments to restore hair growth and prevent further loss.",
      },
      {
        title: "Treatment Plans",
        content:
          "Options include FDA-approved medications like minoxidil and finasteride, PRP therapy, laser treatments, and hair transplant consultations.",
      },
      {
        title: "Early Intervention Matters",
        content:
          "The sooner hair loss is addressed, the better the results. Our experts develop customized solutions to maintain and regrow hair.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "dark-spots",
    serviceName: "Dark Spots Treatment",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Solutions for Dark Spots and Hyperpigmentation",
        content:
          "Dark spots can be caused by sun exposure, aging, hormonal changes, or acne scars. We provide specialized treatments to lighten and even out skin tone.",
      },
      {
        title: "Treatment Plans",
        content:
          "Our treatments include chemical peels, laser therapy, topical creams with ingredients like hydroquinone, retinoids, and vitamin C, as well as customized skincare regimens.",
      },
      {
        title: "Early Treatment for Better Results",
        content:
          "Treating dark spots early can prevent them from becoming more pronounced. Our dermatologists design personalized plans to help you achieve a clearer, more radiant complexion.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "allergic-reactions",
    serviceName: "Skin Allergy Treatment",
    category: "Dermatology",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "What Causes Skin Allergies?",
        content:
          "Skin allergies can result from contact with allergens such as pollen, pet dander, certain foods, medications, or skincare products. Common symptoms include redness, itching, swelling, hives, and rashes.",
      },
      {
        title: "Personalized Treatment Options",
        content:
          "Our treatment plans include antihistamines, topical creams, prescription medications, and allergy testing to identify triggers. We also provide skincare solutions and lifestyle recommendations for long-term relief.",
      },
      {
        title: "Expert Care for Quick Relief",
        content:
          "Timely care is crucial to managing skin allergies and preventing severe reactions. Our specialists offer customized treatments to soothe irritation, promote healing, and prevent future outbreaks.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "molluscum",
    serviceName: "Molluscum Contagiosum Treatment",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Understanding Molluscum Contagiosum",
        content:
          "Molluscum Contagiosum is a viral skin infection that causes small, painless bumps. It spreads through direct contact or contaminated objects and is common in children and adults with weakened immune systems.",
      },
      {
        title: "Treatment Plans",
        content:
          "Treatment options include cryotherapy (freezing the bumps), topical creams, laser therapy, or minor surgical removal. In some cases, the infection may resolve on its own over time.",
      },
      {
        title: "Early Treatment for Faster Recovery",
        content:
          "While molluscum is usually harmless, early treatment can prevent spreading and speed up recovery. Our specialists provide personalized care to manage and eliminate the infection.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "dandruff",
    serviceName: "Dandruff Treatment",
    category: "Hair & Scalp Care",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Understanding Dandruff",
        content:
          "Dandruff is a common scalp condition that causes flaking and itching. It can result from dry skin, fungal infections, sensitivity to hair products, or underlying skin conditions like seborrheic dermatitis.",
      },
      {
        title: "Effective Treatment Solutions",
        content:
          "Our treatments include medicated shampoos, antifungal solutions, scalp hydration therapy, and personalized care plans to address the root cause of dandruff and provide long-lasting relief.",
      },
      {
        title: "Healthy Scalp, Healthy Hair",
        content:
          "Regular scalp care is essential for preventing dandruff and maintaining hair health. Our experts offer customized solutions to soothe irritation, balance oil production, and promote a flake-free scalp.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "vitiligo",
    serviceName: "Vitiligo Treatment",
    category: "Skin Care",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "What is Vitiligo?",
        content:
          "Vitiligo is a skin condition characterized by the loss of pigment, leading to white patches on different parts of the body. It occurs when melanocytes, the cells responsible for skin color, are destroyed.",
      },
      {
        title: "Advanced Treatment Options",
        content:
          "We offer a range of treatments, including topical creams, phototherapy, oral medications, and innovative therapies to help manage pigmentation loss and slow its progression.",
      },
      {
        title: "Personalized Care for Skin Health",
        content:
          "Our specialists develop customized treatment plans based on your skin type and condition severity. Early intervention can improve results and boost confidence.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "psoriasis",
    serviceName: "Psoriasis Treatment",
    category: "Skin Care",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Understanding Psoriasis",
        content:
          "Psoriasis is a chronic skin condition that causes red, scaly patches due to rapid skin cell turnover. It can be triggered by stress, infections, or environmental factors and may cause discomfort and itching.",
      },
      {
        title: "Effective Treatment Approaches",
        content:
          "Our treatments include topical steroids, moisturizers, phototherapy, immune-modulating medications, and lifestyle recommendations to manage symptoms and prevent flare-ups.",
      },
      {
        title: "Long-Term Skin Health",
        content:
          "Psoriasis requires ongoing care. Our specialists provide personalized treatment plans to reduce inflammation, soothe irritation, and promote healthy skin.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "rosaceae",
    serviceName: "Rosacea Treatment",
    category: "Skin Care",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Understanding Rosacea",
        content:
          "Rosacea is a chronic skin condition that causes facial redness, visible blood vessels, and sometimes acne-like bumps. It can be triggered by sun exposure, spicy foods, stress, and temperature changes.",
      },
      {
        title: "Effective Treatment Solutions",
        content:
          "Our treatments include topical and oral medications, laser therapy, gentle skincare routines, and lifestyle recommendations to reduce redness, control flare-ups, and improve skin texture.",
      },
      {
        title: "Personalized Care for Lasting Relief",
        content:
          "Managing rosacea requires a tailored approach. Our dermatologists create customized treatment plans to soothe sensitive skin, prevent triggers, and promote a healthy complexion.",
      },
    ],
    callToAction: commonCallToAction,
  },

  // Surgical treatments

  // Added services (medical)
  {
    id: "actinic-keratosis",
    serviceName: "Actinic Keratosis (Precancerous Spots)",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Rough Spots From Years of Sun",
        content:
          "Actinic keratoses are rough, scaly or crusty spots that develop on sun-exposed skin such as the face, scalp, ears, forearms and hands. They are very common in Arizona and are a sign of long-term sun damage.",
      },
      {
        title: "Why Treatment Matters",
        content:
          "Actinic keratoses are considered precancerous because a small percentage can turn into squamous cell carcinoma, a type of skin cancer. Treating them early lowers that risk, and a regular skin exam helps us catch new spots as they appear.",
      },
      {
        title: "Treatment Options",
        content:
          "Individual spots are often treated in the office with liquid nitrogen (cryotherapy). When there are many spots, we may recommend a prescription cream such as 5-fluorouracil (5-FU), which treats both the visible spots and early sun damage you can't see yet.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "mole-evaluation",
    serviceName: "Mole Evaluation & Removal",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "When a Mole Needs a Closer Look",
        content:
          "Most moles are harmless, but a mole that is new, changing, itching, bleeding or looks different from your other moles should be checked. Dermatologists look for the ABCDE warning signs: asymmetry, irregular borders, uneven color, a diameter larger than a pencil eraser, and evolving size, shape or color.",
      },
      {
        title: "A Careful Exam",
        content:
          "We examine concerning moles with dermoscopy, a magnified view of the skin's surface. If a mole looks suspicious, we perform a quick biopsy in the office so it can be examined under a microscope.",
      },
      {
        title: "Mole Removal",
        content:
          "Moles can be removed for medical reasons or because they catch on clothing or bother you cosmetically. Depending on the mole, removal may be done with a shave or a small excision, and we'll discuss the best option for your skin.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "rash-evaluation",
    serviceName: "Rash Evaluation",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Answers for Rashes That Won't Go Away",
        content:
          "A rash that is itchy, painful, spreading or not improving with over-the-counter creams deserves a closer look. Many different conditions can look similar, so getting the right diagnosis is the first step to getting the right treatment.",
      },
      {
        title: "Finding the Cause",
        content:
          "We start with a careful exam and questions about your symptoms, products, medications and exposures. When needed, we may perform a simple in-office test, such as a skin scraping, culture or biopsy, to confirm the diagnosis.",
      },
      {
        title: "Targeted Treatment",
        content:
          "Once we know the cause, whether it's eczema, an allergic reaction, an infection or another condition, we build a treatment plan to calm your skin and help keep the rash from coming back.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "skin-infections",
    serviceName: "Skin Infections",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Common Skin Infections",
        content:
          "Skin infections can be caused by fungi, bacteria or viruses. Common examples include ringworm, athlete's foot, tinea versicolor, impetigo and folliculitis (infected hair follicles).",
      },
      {
        title: "Accurate Diagnosis",
        content:
          "Many infections look like other rashes, and the wrong cream can make some of them worse. We can often confirm the cause in the office with a quick skin scraping or culture so you get the right treatment from the start.",
      },
      {
        title: "Effective Treatment",
        content:
          "Depending on the cause, treatment may include prescription creams, washes or oral medications. We'll also share tips to help prevent the infection from returning or spreading.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "nail-conditions",
    serviceName: "Nail Conditions",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Nails Are Part of Your Skin",
        content:
          "Dermatologists treat nail problems as well as skin and hair. Common concerns include nail fungus, thick or discolored nails, brittle or splitting nails, ingrown nails, and nail changes caused by conditions such as psoriasis.",
      },
      {
        title: "Changes Worth Checking",
        content:
          "A new dark streak in a nail, a nail that lifts or changes shape, or redness and swelling around the nail should be evaluated. While most nail changes are harmless, some can be a sign of infection or, rarely, skin cancer under the nail.",
      },
      {
        title: "Treatment Options",
        content:
          "Treatment depends on the cause and may include prescription topical or oral medications, in-office procedures, and guidance on nail care. Because nails grow slowly, improvement often takes several months.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "hidradenitis-suppurativa",
    serviceName: "Hidradenitis Suppurativa",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Understanding Hidradenitis Suppurativa",
        content:
          "Hidradenitis suppurativa (HS) is a chronic inflammatory condition that causes painful bumps, boils and abscesses, usually in the armpits, groin, buttocks and under the breasts. It is not caused by poor hygiene and is not contagious.",
      },
      {
        title: "Why Early Care Matters",
        content:
          "Without treatment, HS can lead to tunnels under the skin and scarring. Starting treatment early can reduce flares, ease pain and help prevent the condition from progressing.",
      },
      {
        title: "Treatment Options",
        content:
          "We tailor treatment to the severity of your HS. Options may include medicated washes, topical and oral antibiotics, in-office injections for painful flares, and biologic medications for moderate to severe cases.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "pediatric-dermatology",
    serviceName: "Pediatric Dermatology",
    category: "Medical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Skin Care for Children and Teens",
        content:
          "Children's skin has its own needs. We care for many common pediatric skin conditions, including eczema, warts, molluscum contagiosum, birthmarks, rashes and acne in teens.",
      },
      {
        title: "Gentle, Kid-Friendly Care",
        content:
          "We take time to explain each step to children and parents and choose treatments that are gentle and appropriate for a child's age.",
      },
      {
        title: "Support for Parents",
        content:
          "We'll help you understand your child's condition and give you a clear plan for everyday skin care at home, so you know what to do between visits.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "mohs-surgery",
    serviceName: "Mohs Surgery",
    category: "Surgical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "What Is Mohs Surgery?",
        content:
          "Mohs micrographic surgery is a precise treatment for many skin cancers, including basal cell and squamous cell carcinoma. The cancer is removed in thin layers, and each layer is examined under a microscope during your visit, so healthy skin is preserved wherever possible.",
      },
      {
        title: "When Is Mohs Recommended?",
        content:
          "Mohs is often recommended for skin cancers on the face, ears, scalp, hands and other areas where preserving tissue matters, and for cancers that are large, have unclear borders, or have returned after treatment.",
      },
      {
        title: "The Day of Surgery",
        content:
          "Surgery is done in the office under local anesthesia. Between layers, you wait while your surgeon examines the tissue, and the process continues until no cancer is seen.",
      },
      {
        title: "Repair and Aftercare",
        content:
          "Most wounds are repaired the same day. For more complex cases, we coordinate reconstruction with plastic surgeons. You'll receive aftercare instructions before you leave.",
      },
      {
        title: "Your Surgeon",
        content:
          "Mohs surgery at Desert Oasis Dermatology is performed by a board-certified Mohs surgeon, who performs both the surgery and the microscopic examination.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "excision",
    serviceName: "Excision (Removal of Cancer or Growth)",
    category: "Surgical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Safe and Effective Skin Growth Removal",
        content:
          "Excision is a minor surgical procedure used to remove suspicious moles, skin cancers, and other abnormal growths. Our dermatologists ensure precision and minimal scarring.",
      },
      {
        title: "Procedure Overview",
        content:
          "A local anesthetic is applied, and the affected area is surgically removed with precision. Stitches may be required, and recovery is typically quick.",
      },
      {
        title: "Post-Surgical Care",
        content:
          "Proper wound care is essential for healing. We provide detailed aftercare instructions to promote recovery and reduce scarring.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "cyst-drainage",
    serviceName: "Cyst Drainage",
    category: "Surgical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Relieving Painful Cysts",
        content:
          "Cysts can become inflamed and painful. Our dermatologists perform safe and effective drainage to relieve discomfort and prevent infection.",
      },
      {
        title: "Procedure Details",
        content:
          "A small incision is made to drain the cyst, reducing swelling and pressure. In some cases, a steroid injection may be used to prevent recurrence.",
      },
      {
        title: "Long-Term Management",
        content:
          "Some cysts may return. If needed, full excision can be performed to permanently remove the cyst sac and prevent future flare-ups.",
      },
    ],
    callToAction: commonCallToAction,
  },

  // Cosmetic treatments

  // Added services (procedures)
  {
    id: "skin-biopsy",
    serviceName: "Skin Biopsy",
    category: "Surgical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "What Is a Skin Biopsy?",
        content:
          "A skin biopsy removes a small sample of skin so it can be examined under a microscope. It is the most reliable way to diagnose a suspicious spot or mole, or a rash that doesn't have a clear cause.",
      },
      {
        title: "A Quick In-Office Procedure",
        content:
          "The area is numbed with a small injection, so the biopsy itself is not painful. Depending on the spot, we take a thin shave of skin or a small round sample, which may be closed with a few stitches. Most biopsies take just a few minutes.",
      },
      {
        title: "Aftercare and Results",
        content:
          "We'll give you simple wound care instructions to follow at home. Results usually take 1 to 2 weeks, and our office will contact you once they're in. If you had stitches, they are typically removed 10 to 14 days later.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "cryotherapy",
    serviceName: "Cryotherapy (Liquid Nitrogen)",
    category: "Surgical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Freezing Away Unwanted Spots",
        content:
          "Cryotherapy uses liquid nitrogen to freeze and destroy abnormal skin cells. It is a fast, effective in-office treatment for precancerous spots (actinic keratoses), warts and certain benign growths such as seborrheic keratoses.",
      },
      {
        title: "What to Expect",
        content:
          "Treatment takes only seconds per spot and feels like a brief, cold sting. Afterward, the area may be red and swollen, and a blister can form within a day or two. This is a normal part of healing.",
      },
      {
        title: "Healing",
        content:
          "The treated spot usually forms a scab that falls off on its own within 1 to 3 weeks, revealing new skin. Some spots, especially thick warts, may need more than one treatment.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "benign-growth-removal",
    serviceName: "Skin Tag & Benign Growth Removal",
    category: "Surgical",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Common Harmless Growths",
        content:
          "Many skin growths are harmless, including skin tags, seborrheic keratoses (waxy, \"stuck-on\" spots), cherry angiomas (small red bumps) and other benign lesions. They often become more common with age.",
      },
      {
        title: "Making Sure It's Benign",
        content:
          "Some growths can look like skin cancer, so we always examine a spot before removing it. If anything looks unusual, we may perform a biopsy to be certain.",
      },
      {
        title: "Removal Options",
        content:
          "Growths that are irritated, bleeding, catching on clothing or bothering you cosmetically can be removed in the office, typically with freezing, a shave or snipping. When removal is purely cosmetic, insurance usually doesn't cover it, and we'll discuss any costs with you beforehand.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "chemical-peels",
    serviceName: "Chemical Peels",
    category: "Cosmetic",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Rejuvenate Your Skin with Chemical Peels",
        content:
          "Chemical peels help improve skin texture, reduce acne scars, and even out skin tone by removing dead skin layers and stimulating collagen production.",
      },
      {
        title: "Types of Peels",
        content:
          "We offer light, medium, and deep chemical peels to target different skin concerns, from mild discoloration to deep wrinkles and scarring.",
      },
      {
        title: "Aftercare and Recovery",
        content:
          "Redness and peeling may occur after treatment, but results are long-lasting. Sun protection is essential post-procedure to maintain results.",
      },
    ],
    callToAction: commonCallToAction,
  },
  {
    id: "botox",
    serviceName: "Neurotoxins (Botox)",
    category: "Cosmetic",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Rejuvenate Your Skin with Chemical Peels",
        content:
          "Chemical peels help improve skin texture, reduce acne scars, and even out skin tone by removing dead skin layers and stimulating collagen production.",
      },
      {
        title: "Types of Peels",
        content:
          "We offer light, medium, and deep chemical peels to target different skin concerns, from mild discoloration to deep wrinkles and scarring.",
      },
      {
        title: "Aftercare and Recovery",
        content:
          "Redness and peeling may occur after treatment, but results are long-lasting. Sun protection is essential post-procedure to maintain results.",
      },
    ],
    callToAction: commonCallToAction,
  },

  {
    id: "microneedling",
    serviceName: "Microneedling (Acne Scars)",
    category: "Cosmetic",
    mainImage: "/placeholder.svg?height=500&width=500",
    paragraphs: [
      {
        title: "Boost Collagen and Reduce Scars",
        content:
          "Microneedling stimulates collagen production to improve acne scars, fine lines, and overall skin texture with minimal downtime.",
      },
      {
        title: "How It Works",
        content:
          "Tiny needles create micro-injuries in the skin, triggering natural healing. This boosts collagen and elastin, leading to firmer, smoother skin.",
      },
      {
        title: "Visible Results",
        content:
          "Results improve over multiple sessions, with noticeable skin enhancement within a few weeks. Microneedling is safe for all skin types.",
      },
    ],
    callToAction: commonCallToAction,
  },
];


// Function to get service data by ID
export function getServiceById(id: string): ServiceData | undefined {
  return servicesData.find((service) => service.id === id);
}

