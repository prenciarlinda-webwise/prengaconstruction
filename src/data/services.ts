export interface Service {
  id: string;
  category: string;
  slug: string;
  description: string;
  services: string[];
  features?: string[];
  hasImages?: boolean;
}

export const servicesData: Service[] = [
  {
    id: 'painting',
    category: 'Painting & Finishing',
    slug: 'painting',
    description: 'Transform your space with our professional painting services. From interior walls to exterior facades, we deliver flawless finishes that stand the test of time.',
    services: [
      'Interior painting',
      'Exterior painting',
      'Drywall repair & patching',
      'Texture removal & application',
      'Trim & baseboard painting',
      'Cabinet painting & refinishing',
      'Pressure washing (before painting)',
    ],
    features: [
      'Premium quality paints',
      'Detailed surface preparation',
      'Clean and professional work',
      'Color consultation available',
    ],
    hasImages: true,
  },
  {
    id: 'flooring',
    category: 'Flooring',
    slug: 'flooring',
    description: 'Upgrade your floors with our expert installation services. We work with all flooring types to give your home the foundation it deserves.',
    services: [
      'Hardwood flooring installation & repair',
      'Laminate flooring',
      'Vinyl plank (LVP / LVT)',
      'Tile flooring',
      'Carpet installation & removal',
      'Subfloor repair & leveling',
      'Floor removal & disposal',
    ],
    features: [
      'Wide selection of materials',
      'Professional installation',
      'Subfloor assessment included',
      'Proper acclimation process',
    ],
    hasImages: true,
  },
  {
    id: 'carpentry',
    category: 'Carpentry',
    slug: 'carpentry',
    description: 'Custom carpentry solutions for your home. From structural framing to decorative trim work, our skilled craftsmen deliver precision and quality.',
    services: [
      'Framing (walls, rooms, additions)',
      'Trim & molding installation',
      'Baseboards & crown molding',
      'Door & window installation',
      'Custom shelving',
      'Stair repairs',
      'Deck repair & construction',
    ],
    features: [
      'Skilled craftsmen',
      'Custom solutions',
      'Quality materials',
      'Attention to detail',
    ],
    hasImages: true,
  },
  {
    id: 'drywall',
    category: 'Drywall',
    slug: 'drywall',
    description: 'Complete drywall services from installation to finishing. We handle everything from new construction to repairs with seamless results.',
    services: [
      'New drywall installation',
      'Drywall repair',
      'Ceiling repair',
      'Water damage repair',
      'Soundproof drywall',
      'Tape, mud & finish',
    ],
    features: [
      'Seamless finishing',
      'Quick turnaround',
      'Dust containment',
      'Level 5 finish available',
    ],
    hasImages: true,
  },
  {
    id: 'tile-masonry',
    category: 'Tile & Masonry',
    slug: 'tile-masonry',
    description: 'Expert tile installation and masonry work for beautiful, durable surfaces throughout your home.',
    services: [
      'Floor tile',
      'Wall tile',
      'Backsplashes',
      'Shower tile',
      'Stone installation',
      'Grout repair & sealing',
    ],
    features: [
      'Precision installation',
      'Pattern layouts',
      'Waterproof systems',
      'Long-lasting results',
    ],
    hasImages: true,
  },
  {
    id: 'remodeling',
    category: 'Remodeling',
    slug: 'remodeling',
    description: 'Complete remodeling services for your entire home — kitchens, bathrooms, living spaces, and more. We handle projects of all sizes with careful planning and expert execution.',
    services: [
      'Full bathroom remodel',
      'Full kitchen remodel',
      'Whole house renovations',
      'Shower & tub installation',
      'Cabinet & countertop installation',
      'Vanity & fixture installation',
      'Room additions',
      'Open-concept conversions',
      'Backsplash tile',
      'Waterproofing',
      'Garage conversions',
      'Basement finishing',
    ],
    features: [
      'Design assistance',
      'Project management',
      'Permit assistance',
      'Quality fixtures & materials',
      'Code-compliant work',
      'Proper waterproofing',
    ],
    hasImages: true,
  },
  // Services below do NOT have their own images yet - show only in link/text areas
  {
    id: 'doors-windows',
    category: 'Doors & Windows',
    slug: 'doors-windows',
    description: 'Enhance your home\'s appearance and energy efficiency with professional door and window installation services.',
    services: [
      'Interior door installation',
      'Exterior door installation',
      'Window replacement',
      'Sliding doors',
      'French doors',
      'Hardware installation',
    ],
    features: [
      'Energy-efficient options',
      'Proper sealing & insulation',
      'Security upgrades',
      'Style consultations',
    ],
  },
  {
    id: 'exterior',
    category: 'Exterior Work',
    slug: 'exterior',
    description: 'Enhance your home\'s curb appeal and protect it from the elements with our exterior construction services.',
    services: [
      'Siding repair & installation',
      'Deck building & repair',
      'Fence installation',
      'Porch repair',
      'Exterior trim',
      'Gutter installation',
    ],
    features: [
      'Weather-resistant materials',
      'Curb appeal focus',
      'Structural integrity',
      'Long-term durability',
    ],
  },
  {
    id: 'demo',
    category: 'Demo & Cleanup',
    slug: 'demo-cleanup',
    description: 'Professional demolition and cleanup services to prepare your space for renovation or remove unwanted structures.',
    services: [
      'Interior demolition',
      'Kitchen & bathroom demo',
      'Floor removal',
      'Construction debris removal',
      'Job site cleanup',
    ],
    features: [
      'Safe demolition practices',
      'Proper disposal',
      'Quick turnaround',
      'Site protection',
    ],
  },
  {
    id: 'roofing',
    category: 'Roofing',
    slug: 'roofing',
    description: 'Protect your home with professional roofing services. From repairs to complete replacements, we\'ve got you covered.',
    services: [
      'Roof repair',
      'Roof replacement',
      'Shingle installation',
      'Roof inspection',
      'Leak repair',
      'Gutter repair',
    ],
    features: [
      'Quality materials',
      'Warranty options',
      'Storm damage repair',
      'Free inspections',
    ],
  },
  {
    id: 'pressure-washing',
    category: 'Pressure Washing',
    slug: 'pressure-washing',
    description: 'Restore your property\'s appearance with our professional pressure washing services. Safe and effective cleaning for all surfaces.',
    services: [
      'House exterior washing',
      'Deck & patio cleaning',
      'Driveway cleaning',
      'Fence cleaning',
      'Concrete cleaning',
      'Pre-paint preparation',
    ],
    features: [
      'Eco-friendly solutions',
      'Adjustable pressure',
      'Surface-safe techniques',
      'Quick drying',
    ],
  },
  {
    id: 'fence',
    category: 'Fence Installation',
    slug: 'fence-installation',
    description: 'Secure your property and add privacy with our professional fence installation services. Multiple styles and materials available.',
    services: [
      'Wood fence installation',
      'Vinyl fence installation',
      'Chain link fence',
      'Privacy fence',
      'Fence repair',
      'Gate installation',
    ],
    features: [
      'Multiple material options',
      'Custom designs',
      'Proper post setting',
      'Gate automation available',
    ],
  },
];

// Services with images - shown with image boxes on homepage, services page, gallery
export const servicesWithImages = servicesData.filter((s) => s.hasImages);

// Services without images - shown only as links/text
export const servicesWithoutImages = servicesData.filter((s) => !s.hasImages);

// First 8 services (all have images) for prominent display
export const mainServices = servicesWithImages;

// Additional services (no images) for text-only sections
export const additionalServices = servicesWithoutImages;
