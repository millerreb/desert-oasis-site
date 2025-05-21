
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
  {
    id: "mohs-surgery",
    serviceName: "Mohs Surgery",
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

