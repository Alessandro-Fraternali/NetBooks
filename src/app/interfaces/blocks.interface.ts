export interface BookCard {
  type: 'book-card';
  book: {
    book_image: string;
    title: string;
    description: string;
  };
}
