export enum Category {
  HOME = 'Home',
  APPAREL = 'Roba da indossare',
  BOOKS = 'Libri'
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