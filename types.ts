export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
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
