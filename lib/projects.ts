export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string[];
  year: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  gallery: string[];
  kpis: {
    label: string;
    value: string;
  }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "marina-bay-bahrain",
    title: "Marina Bay Launch",
    client: "Infra Corp",
    category: ["Influence PR"],
    year: "2023",
    location: "Bahrain",
    description:
      "Real estate project launch event for Marina Bay by Infra Corp, blending traditional PR with social media strategy. The event brought Bahraini media and regional influencers together for maximum impact across the region.",
    challenge:
      "Extending the announcement from Bahrain to Dubai, KSA, Egypt, and MENA for broader awareness and sales growth.",
    solution:
      "We crafted a multi-channel PR strategy combining traditional media outreach with influencer partnerships, creating synchronized content releases across all target markets.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    ],
    kpis: [
      { label: "AR Value", value: "$1.3M" },
      { label: "PR Value", value: "$5M" },
      { label: "Social Reach", value: "161M" },
      { label: "Regional Hits", value: "269" },
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "pepsico-she-works-wonders",
    title: "She Works Wonders",
    client: "PepsiCo",
    category: ["Influence PR", "Influence X"],
    year: "2023",
    location: "Egypt",
    description:
      "Program launch supporting female university students and fresh graduates, increasing representation in male-dominated fields like Sales and Supply Chain. Integrated collaboration across multiple subsidiaries.",
    challenge:
      "Differentiate a women empowerment program amid existing similar initiatives while managing high-level government representation.",
    solution:
      "Created a distinctive brand identity and narrative that highlighted tangible outcomes and real success stories, positioning the program as results-driven rather than symbolic.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    ],
    kpis: [
      { label: "Total Clippings", value: "353" },
      { label: "AD Value", value: "EGP 42.5M" },
      { label: "PR Value", value: "EGP 148.8M" },
      { label: "New Partners", value: "11+" },
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "isdb-annual-meeting-2022",
    title: "Annual Meeting 2022",
    client: "Islamic Development Bank",
    category: ["Influence PR"],
    year: "2022",
    location: "Sharm El-Sheikh, Egypt",
    description:
      "47th Annual Meeting of the Islamic Development Bank in Sharm El-Sheikh, attracting 2,000+ participants for discussions on sustainable development and economic issues.",
    challenge:
      "Coordinating multi-level consistent communication with third-party endorsements and spokesperson profiling across diverse international delegations.",
    solution:
      "Implemented a comprehensive media strategy with dedicated spokesperson training, real-time content distribution, and coordinated messaging across 51 countries in 9 languages.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    ],
    kpis: [
      { label: "Coverage Mentions", value: "916" },
      { label: "Total Reach", value: "346M" },
      { label: "Interviews", value: "41" },
      { label: "Countries Covered", value: "51" },
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "forbes-30-under-30-summit",
    title: "30 Under 30 Summit",
    client: "Forbes Middle East",
    category: ["Influence PR"],
    year: "2023",
    location: "Egypt",
    description:
      "Inaugural summit for established entrepreneurs, artists, founders, and celebrities. As the Official Communications & PR Partner, we managed comprehensive event communications.",
    challenge:
      "Positioning the summit as a must-attend entrepreneurship platform in Egypt through strategic press conferences and TV interviews.",
    solution:
      "Developed an integrated PR campaign combining pre-event buzz generation, live coverage coordination, and post-event content amplification.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    ],
    kpis: [
      { label: "Total Hits", value: "600" },
      { label: "TV Interviews", value: "70" },
      { label: "Social Posts", value: "200" },
      { label: "Online Articles", value: "300" },
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "sports-expo-2023",
    title: "Sports EXPO 2023",
    client: "Sports EXPO",
    category: ["Influence PR", "Mention"],
    year: "2023",
    location: "Egypt",
    description:
      "World-class inaugural fitness industry event under presidential patronage. Full PR communications and digital marketing services provided for this landmark event.",
    challenge:
      "Managing 100+ executive, sponsor, and athlete interviews while coordinating messaging and Q&As across multiple stakeholders.",
    solution:
      "Established a dedicated media center with streamlined interview scheduling, prepared spokesperson briefs, and real-time social media coverage.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    ],
    kpis: [
      { label: "Media Hits", value: "1,300+" },
      { label: "Coverage", value: "Global" },
      { label: "Social Interactions", value: "Thousands" },
      { label: "Interviews", value: "100+" },
    ],
    featured: true,
  },
  {
    id: "6",
    slug: "golden-parade",
    title: "The Golden Parade",
    client: "Ministry of Tourism",
    category: ["Influence PR"],
    year: "2021",
    location: "Egypt",
    description:
      "Promoted Egypt as a safe tourism destination during the coronavirus pandemic. Featured the historic Pharaohs Golden Parade in April 2021, showcasing Egypt's ancient heritage to the world.",
    challenge:
      "Restoring confidence in Egypt as a tourism destination during global pandemic restrictions and travel concerns.",
    solution:
      "Designed robust reputation management with third-party endorsements and organized 18 B2B/B2G meetings during Arabian Travel Market 2021.",
    image:
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&h=600&fit=crop",
    ],
    kpis: [
      { label: "Global Reach", value: "101M+" },
      { label: "Countries", value: "100" },
      { label: "B2B Meetings", value: "18" },
      { label: "Impact", value: "Historic" },
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category.includes(category));
}
