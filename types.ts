export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  images: string[]; // Changed from single image string to array of strings
  categories?: string[];
  link?: string;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  established: string;
  origin: string;
  image: string;
  gallery: string[];
  website: string;
  categories: string[];
  products: Product[];
}