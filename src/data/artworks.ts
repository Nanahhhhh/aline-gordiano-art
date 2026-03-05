export type ArtworkStatus = 'available' | 'sold' | 'on request';

export interface Artwork {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  price?: string;
  status: ArtworkStatus;
  tags: string[];
  image: string;
  alt: string;
  featured?: boolean;
  description?: string;
}

export const artworks: Artwork[] = [
  {
    slug: 'golden-hour-london',
    title: 'Golden Hour, London',
    year: 2024,
    medium: 'Acrylic on canvas',
    dimensions: '60 × 80 cm',
    price: '£1,200',
    status: 'available',
    tags: ['landscape', 'london', 'abstract'],
    image: '/artworks/placeholder-1.jpg',
    alt: 'Abstract acrylic painting depicting golden hour light over London skyline in warm terracotta and amber tones',
    featured: true,
    description: 'A vibrant study of light filtering through urban architecture during the golden hour. Warm terracotta and amber pigments create a luminous atmosphere that captures the fleeting beauty of London at dusk.',
  },
  {
    slug: 'bloom',
    title: 'Bloom',
    year: 2024,
    medium: 'Acrylic on canvas',
    dimensions: '50 × 50 cm',
    price: '£850',
    status: 'available',
    tags: ['floral', 'botanical', 'abstract'],
    image: '/artworks/placeholder-2.jpg',
    alt: 'Abstract floral acrylic painting with lush pinks and greens on warm white background',
    featured: true,
    description: 'An expressive botanical study celebrating the moment of blooming. Bold brushstrokes in pink, coral and sage green evoke the joyful abundance of a London garden in spring.',
  },
  {
    slug: 'terracotta-dreams',
    title: 'Terracotta Dreams',
    year: 2023,
    medium: 'Acrylic on linen',
    dimensions: '80 × 100 cm',
    price: '£1,800',
    status: 'sold',
    tags: ['abstract', 'texture'],
    image: '/artworks/placeholder-3.jpg',
    alt: 'Large abstract acrylic on linen with rich terracotta, burnt orange and cream tones',
    featured: true,
    description: 'An immersive abstract work exploring texture and earthen pigments. Layers of terracotta and burnt orange are built up slowly to create a richly tactile surface reminiscent of ancient walls.',
  },
  {
    slug: 'solitude',
    title: 'Solitude',
    year: 2023,
    medium: 'Acrylic on canvas',
    dimensions: '40 × 60 cm',
    price: '£720',
    status: 'available',
    tags: ['figurative', 'abstract', 'mood'],
    image: '/artworks/placeholder-4.jpg',
    alt: 'Minimalist figurative acrylic painting of a lone figure in warm muted tones',
    featured: true,
    description: 'A quiet, introspective work exploring themes of solitude and inner peace. The lone figure is rendered with minimal marks against an expansive warm background.',
  },
  {
    slug: 'river-light',
    title: 'River Light',
    year: 2023,
    medium: 'Acrylic on canvas',
    dimensions: '70 × 90 cm',
    price: '£1,500',
    status: 'on request',
    tags: ['landscape', 'water', 'light'],
    image: '/artworks/placeholder-5.jpg',
    alt: 'Abstract river landscape acrylic painting with shimmering blues and gold reflections',
    featured: true,
    description: 'Inspired by the River Thames, this work captures the interplay of light on moving water. Fluid brushwork and a palette of gold, azure and ivory convey the ceaseless movement of the river.',
  },
  {
    slug: 'autumn-composition',
    title: 'Autumn Composition',
    year: 2023,
    medium: 'Acrylic on board',
    dimensions: '30 × 40 cm',
    price: '£480',
    status: 'available',
    tags: ['abstract', 'seasonal', 'nature'],
    image: '/artworks/placeholder-6.jpg',
    alt: 'Abstract autumn acrylic composition with deep amber, burgundy and golden ochre tones',
    featured: true,
    description: 'A study in seasonal colour and textural richness. Amber, burgundy and golden ochre pigments are layered to evoke the warmth and abundance of an autumn afternoon.',
  },
  {
    slug: 'morning-mist',
    title: 'Morning Mist',
    year: 2022,
    medium: 'Acrylic on canvas',
    dimensions: '60 × 60 cm',
    price: '£950',
    status: 'sold',
    tags: ['atmospheric', 'abstract', 'landscape'],
    image: '/artworks/placeholder-7.jpg',
    alt: 'Atmospheric abstract acrylic painting with soft grey-blue mist and pale gold highlights',
    description: 'Soft grey-blue washes and whispers of pale gold build an atmosphere of quiet morning calm. A meditative work that captures the hushed beauty of mist before the day begins.',
  },
  {
    slug: 'warmth',
    title: 'Warmth',
    year: 2022,
    medium: 'Acrylic on canvas',
    dimensions: '50 × 70 cm',
    price: '£1,100',
    status: 'available',
    tags: ['abstract', 'colour study'],
    image: '/artworks/placeholder-8.jpg',
    alt: 'Vibrant abstract acrylic painting exploring warmth with orange, red and golden yellows',
    description: 'An energetic colour study celebrating warmth in all its forms. Bold gestural marks in orange, red and golden yellow fill the canvas with radiant energy.',
  },
  {
    slug: 'still-life-with-oranges',
    title: 'Still Life with Oranges',
    year: 2022,
    medium: 'Acrylic on canvas',
    dimensions: '45 × 45 cm',
    price: '£680',
    status: 'available',
    tags: ['still life', 'fruit', 'classical'],
    image: '/artworks/placeholder-9.jpg',
    alt: 'Contemporary acrylic still life with vibrant oranges on a terracotta linen background',
    description: 'A contemporary take on the classical still life tradition. Juicy oranges glow against a warm terracotta background, painted with expressive loose brushwork.',
  },
  {
    slug: 'into-the-light',
    title: 'Into the Light',
    year: 2024,
    medium: 'Acrylic on canvas',
    dimensions: '90 × 120 cm',
    price: '£2,400',
    status: 'available',
    tags: ['large format', 'abstract', 'light'],
    image: '/artworks/placeholder-10.jpg',
    alt: 'Large format abstract acrylic painting with luminous white and warm gold light burst',
    description: 'A large, luminous work that invites the viewer into a space of pure light. Layers of translucent white, cream and warm gold create a radiant, almost spiritual atmosphere.',
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}
