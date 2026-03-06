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
    slug: 'evening-path',
    title: 'Evening Path',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    price: '£280',
    status: 'available',
    tags: ['landscape', 'path', 'warm light'],
    image: '/artworks/evening-path.svg',
    alt: 'Placeholder artwork for Evening Path by Aline Gordiano',
    featured: true,
    description: 'A placeholder entry prepared for the final site structure. Replace this with the real title, photo, dimensions and price once the finished artwork details arrive.',
  },
  {
    slug: 'golden-window',
    title: 'Golden Window',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    price: '£320',
    status: 'available',
    tags: ['interior', 'light', 'minimal'],
    image: '/artworks/golden-window.svg',
    alt: 'Placeholder artwork for Golden Window by Aline Gordiano',
    featured: true,
    description: 'Temporary artwork record used to keep the gallery layout complete. This can be updated later with the final painting image and text.',
  },
  {
    slug: 'red-horse-study',
    title: 'Red Horse Study',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '40 × 50 cm',
    price: '£360',
    status: 'available',
    tags: ['horse', 'figurative', 'texture'],
    image: '/artworks/red-horse-study.svg',
    alt: 'Placeholder artwork for Red Horse Study by Aline Gordiano',
    featured: true,
    description: 'Prepared as a clean placeholder for a future figurative work. Once the final photograph is ready, simply replace the image path and text.',
  },
  {
    slug: 'field-under-sky',
    title: 'Field Under Sky',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '40 × 50 cm',
    price: '£340',
    status: 'available',
    tags: ['landscape', 'sky', 'field'],
    image: '/artworks/field-under-sky.svg',
    alt: 'Placeholder artwork for Field Under Sky by Aline Gordiano',
    featured: true,
    description: 'A stand-in artwork record for the finished site. Use this slot for one of Aline’s real landscape works when the final assets are ready.',
  },
  {
    slug: 'studio-florals',
    title: 'Studio Florals',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '50 × 50 cm',
    price: '£390',
    status: 'available',
    tags: ['floral', 'studio', 'colour'],
    image: '/artworks/studio-florals.svg',
    alt: 'Placeholder artwork for Studio Florals by Aline Gordiano',
    featured: true,
    description: 'A temporary floral entry to make the site feel complete before the real artwork archive is uploaded.',
  },
  {
    slug: 'quiet-movement',
    title: 'Quiet Movement',
    year: 2026,
    medium: 'Acrylic on linen',
    dimensions: '60 × 80 cm',
    price: '£520',
    status: 'available',
    tags: ['abstract', 'gesture', 'texture'],
    image: '/artworks/quiet-movement.svg',
    alt: 'Placeholder artwork for Quiet Movement by Aline Gordiano',
    featured: true,
    description: 'This artwork card is ready to receive a final image and details. It currently acts as a polished placeholder for the gallery.',
  },
  {
    slug: 'luminous-earth',
    title: 'Luminous Earth',
    year: 2025,
    medium: 'Acrylic on canvas',
    dimensions: '60 × 80 cm',
    price: '£560',
    status: 'sold',
    tags: ['earth tones', 'abstract', 'light'],
    image: '/artworks/luminous-earth.svg',
    alt: 'Placeholder artwork for Luminous Earth by Aline Gordiano',
    description: 'Marked as sold to help the site show both available and sold work sections in a more professional gallery format.',
  },
  {
    slug: 'aurora-study',
    title: 'Aurora Study',
    year: 2025,
    medium: 'Acrylic on canvas',
    dimensions: '50 × 70 cm',
    price: '£430',
    status: 'sold',
    tags: ['colour', 'light', 'atmosphere'],
    image: '/artworks/aurora-study.svg',
    alt: 'Placeholder artwork for Aurora Study by Aline Gordiano',
    description: 'A temporary sold-work record, useful for showing credibility and a more complete artist portfolio layout.',
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}
