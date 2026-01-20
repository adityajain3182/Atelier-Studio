import { Brand } from './types';

export const BRANDS: Brand[] = [
  {
    id: '1',
    name: 'AETHER & OAK',
    tagline: 'Sustainable minimalism for the modern wanderer.',
    description: 'Highlighting skilled artisans and organic materials.',
    fullDescription: 'Aether & Oak was born from a desire to strip away the unnecessary. We focus on raw textures, neutral palettes, and silhouettes that breathe. Our garments are crafted in small batches in Portugal, ensuring fair wages and meticulous attention to detail. We believe luxury lies in the feeling of the fabric against your skin.',
    established: '2021',
    origin: 'Copenhagen, Denmark',
    image: 'https://picsum.photos/800/1000?random=1',
    gallery: ['https://picsum.photos/800/600?random=11', 'https://picsum.photos/800/600?random=12', 'https://picsum.photos/800/600?random=13'],
    website: 'https://example.com/aether',
    categories: ['Apparel', 'Accessories'],
    products: [
      { id: 'p1', name: 'Linen Chore Coat', price: '$240', description: 'Heavyweight organic linen in raw oat.', image: 'https://picsum.photos/600/800?random=101' },
      { id: 'p2', name: 'Tapered Trouser', price: '$180', description: 'High-waisted silhouette with pleats.', image: 'https://picsum.photos/600/800?random=102' },
      { id: 'p3', name: 'Wool Knit Beanie', price: '$65', description: 'Merino wool blend for warmth.', image: 'https://picsum.photos/600/800?random=103' },
      { id: 'p4', name: 'Canvas Tote', price: '$120', description: 'Reinforced handles and waterproof base.', image: 'https://picsum.photos/600/800?random=104' },
    ]
  },
  {
    id: '2',
    name: 'NOIR ET BLANC',
    tagline: 'Strictly monochrome. Unapologetically bold.',
    description: 'Sharp tailoring meets street-ready avant-garde.',
    fullDescription: 'Noir et Blanc challenges the spectrum of color by refusing it entirely. By limiting our palette to absolute black and white, we force the focus onto structure, drape, and form. Our pieces are architectural experiments designed to be worn. Influenced by brutalist architecture and 90s techno culture.',
    established: '2019',
    origin: 'Berlin, Germany',
    image: 'https://picsum.photos/800/1000?random=2',
    gallery: ['https://picsum.photos/800/600?random=21', 'https://picsum.photos/800/600?random=22'],
    website: 'https://example.com/noir',
    categories: ['Outerwear', 'Tailoring'],
    products: [
        { id: 'p5', name: 'Asymmetric Blazer', price: '$450', description: 'Structured wool with raw hems.', image: 'https://picsum.photos/600/800?random=105' },
        { id: 'p6', name: 'Pleated Wide Leg', price: '$320', description: 'Japanese wool gabardine.', image: 'https://picsum.photos/600/800?random=106' },
        { id: 'p7', name: 'Mock Neck Shell', price: '$150', description: 'Tight knit modal blend.', image: 'https://picsum.photos/600/800?random=107' },
    ]
  },
  {
    id: '3',
    name: 'LUMEN',
    tagline: 'Performance wear disguised as high fashion.',
    description: 'Technical fabrics for the urban environment.',
    fullDescription: 'Lumen bridges the gap between gym performance and runway aesthetics. We utilize proprietary hydrophobic styling and heat-regulating meshes to create garments that adapt to your environment. From the subway to the sprint, Lumen keeps you composed.',
    established: '2023',
    origin: 'Seoul, South Korea',
    image: 'https://picsum.photos/800/1000?random=3',
    gallery: ['https://picsum.photos/800/600?random=31', 'https://picsum.photos/800/600?random=32'],
    website: 'https://example.com/lumen',
    categories: ['Sportswear', 'Techwear'],
    products: [
        { id: 'p8', name: 'Hydro-Shell Parka', price: '$550', description: 'Waterproof membrane with taped seams.', image: 'https://picsum.photos/600/800?random=108' },
        { id: 'p9', name: 'Tech Cargo Pant', price: '$280', description: 'Articulated knees and magnetic pockets.', image: 'https://picsum.photos/600/800?random=109' },
        { id: 'p10', name: 'Base Layer Top', price: '$110', description: 'Moisture-wicking compression fabric.', image: 'https://picsum.photos/600/800?random=110' },
    ]
  },
  {
    id: '4',
    name: 'VERDANT STUDIO',
    tagline: 'Reclaiming the past.',
    description: 'Upcycled vintage textiles tailored for today.',
    fullDescription: 'There is enough fabric in the world already. Verdant Studio operates on a strictly circular model, sourcing high-quality vintage denim, military surplus, and deadstock wool to create one-of-a-kind garments. Each piece tells a history, remixed for the contemporary wardrobe.',
    established: '2018',
    origin: 'Portland, USA',
    image: 'https://picsum.photos/800/1000?random=4',
    gallery: ['https://picsum.photos/800/600?random=41', 'https://picsum.photos/800/600?random=42'],
    website: 'https://example.com/verdant',
    categories: ['Upcycled', 'Denim'],
    products: [
        { id: 'p11', name: 'Reworked 501s', price: '$220', description: 'Vintage denim with patchwork repair.', image: 'https://picsum.photos/600/800?random=111' },
        { id: 'p12', name: 'Surplus Field Jacket', price: '$340', description: 'Upcycled military cotton canvas.', image: 'https://picsum.photos/600/800?random=112' },
        { id: 'p13', name: 'Quilted Liner Vest', price: '$180', description: 'Deadstock parachute nylon.', image: 'https://picsum.photos/600/800?random=113' },
    ]
  },
  {
    id: '5',
    name: 'SILHOUETTE',
    tagline: 'Fluidity in motion.',
    description: 'Gender-neutral draping and silk essentials.',
    fullDescription: 'Silhouette ignores traditional sizing and gender norms in favor of fluid adaptability. Using heavy-weight silks and Tencel blends, our garments drape differently on every body, creating a unique relationship between the wearer and the cloth.',
    established: '2022',
    origin: 'Paris, France',
    image: 'https://picsum.photos/800/1000?random=5',
    gallery: ['https://picsum.photos/800/600?random=51', 'https://picsum.photos/800/600?random=52'],
    website: 'https://example.com/silhouette',
    categories: ['Unisex', 'Formal'],
    products: [
        { id: 'p14', name: 'Silk Slip Dress', price: '$380', description: '100% Mulberry silk in champagne.', image: 'https://picsum.photos/600/800?random=114' },
        { id: 'p15', name: 'Oversized Shirt', price: '$250', description: 'Sheer organza with french cuffs.', image: 'https://picsum.photos/600/800?random=115' },
        { id: 'p16', name: 'Wide Leg Trouser', price: '$290', description: 'Fluid viscose with elastic waist.', image: 'https://picsum.photos/600/800?random=116' },
    ]
  },
  {
    id: '6',
    name: 'ROAM',
    tagline: 'For the journey home.',
    description: 'Heavy knits and protective layers.',
    fullDescription: 'Inspired by the Scottish Highlands, ROAM creates knitwear that acts as armor against the elements. We use 100% heritage wool, spun in local mills, to create sweaters and coats that are meant to last a lifetime. Heavy, warm, and timeless.',
    established: '2015',
    origin: 'Edinburgh, UK',
    image: 'https://picsum.photos/800/1000?random=6',
    gallery: ['https://picsum.photos/800/600?random=61', 'https://picsum.photos/800/600?random=62'],
    website: 'https://example.com/roam',
    categories: ['Knitwear', 'Outerwear'],
    products: [
        { id: 'p17', name: 'Fisherman Cable Knit', price: '$295', description: 'Heavy gauge wool in cream.', image: 'https://picsum.photos/600/800?random=117' },
        { id: 'p18', name: 'Waxed Cotton Coat', price: '$420', description: 'Water resistant with corduroy collar.', image: 'https://picsum.photos/600/800?random=118' },
        { id: 'p19', name: 'Merino Scarf', price: '$55', description: 'Extra long knit for layering.', image: 'https://picsum.photos/600/800?random=119' },
    ]
  }
];
