export interface Book {
  _id: string;
  title: string;
  description: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}
