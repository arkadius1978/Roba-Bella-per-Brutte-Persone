
export enum Category {
  HOME = 'Home',
  APPAREL = 'Roba da indossare',
  BOOKS = 'Libri',
  BLOG = 'Diario del Disagio'
}

export interface Product {
  id: string;
  title: string;
  // Price removed as requested
  imageUrl: string;
  amazonUrl: string;
  category: Category;
  description: string;
  quote?: string;
  isBestSeller?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Supports basic HTML or newlines
  date: string; // Display date (e.g. "20 Febbraio")
  isoDate: string; // ISO Date for SEO (e.g. "2024-02-20")
  imageUrl: string;
  author: string;
  readTime: string;
}
