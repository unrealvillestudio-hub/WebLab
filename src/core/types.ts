// UNRLVL — WebLab v2.2 Core Types

export type WebModuleId = "web" | "landing" | "ecommerce";

export type WebLanguage = "ES" | "ES-FL" | "EN" | "ES+EN";

export type WebPlatform = "wordpress" | "shopify";

export type WebTone =
  | "professional"
  | "conversational"
  | "luxury"
  | "energetic"
  | "technical"
  | "warm";

export type PageSectionId =
  | "hero"
  | "about"
  | "services"
  | "features"
  | "testimonials"
  | "faq"
  | "cta"
  | "contact"
  | "pricing"
  | "team"
  | "gallery"
  | "blog_preview";

export type LandingGoal =
  | "lead_capture"
  | "product_sale"
  | "appointment"
  | "awareness"
  | "waitlist"
  | "download";

export type EcommerceOutput =
  | "product_listing"
  | "collection_copy"
  | "homepage"
  | "about_page"
  | "policy_pages"
  | "email_flow";

export interface PageSection {
  id: PageSectionId;
  label: string;
  description: string;
  wordCount: number;
  required: boolean;
  platforms: (WebPlatform | "both")[];
}

export interface WebPack {
  id: string;
  label: string;
  module: WebModuleId;
  description: string;
  sections: PageSectionId[];
  estimatedWords: number;
  outputFormat: "markdown" | "html" | "structured";
}

export interface ProductSpec {
  name: string;
  category: string;
  keyBenefits: string;
  targetAudience: string;
  price?: string;
  complianceNotes?: string;
}

// ── ECOMMERCE PRODUCT CONTEXT ─────────────────────────────────────────────────

export type EcomListingMode = 'bulk' | 'select';

export interface EcomProductContext {
  // Collection Page
  collectionId?: string;       // null = "Todas las collections"
  collectionLabel?: string;
  collectionDescription?: string;
  collectionDescriptionEnhanced?: string;

  // Product Listing
  listingMode?: EcomListingMode;   // 'bulk' | 'select'
  selectedProductIds?: string[];   // for 'select' mode

  // Product Page (single product)
  productId?: string;
  productDescription?: string;
  productDescriptionEnhanced?: string;
}

// ── BLUEPRINT IMAGE TOGGLES ───────────────────────────────────────────────────

export interface BlueprintImageToggles {
  usePersonBP: boolean;
  useLocationBP: boolean;
}
  export type WebOutputMode = 'html' | 'liquid';
export interface WebOutput {
  id: string;
  packId: string;
  brandId: string;
  module: WebModuleId;
  language: WebLanguage;
  platform: WebPlatform;
  superAggro: boolean;
  outputMode?: WebOutputMode;
  sections: { sectionId: string; label: string; content: string }[];
  wordCount: number;
  generatedAt: string;
  prompt: string;
}

export interface BrandProfile {
  id: string;
  name: string;
  shortName: string;
  owner: string;
  color: string;
  secondaryColor?: string;
  emoji: string;
  description: string;
  market: string;
  channels: string[];
}