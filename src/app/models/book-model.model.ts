export class BookModel {
  title: string;
  infoLink: string;
  imageLinks: string;
  description: string;
  authors: string;
  maturityRating: string;
  id: string;
  industryIdentifiers: string;

  constructor(obj?: any) {
    this.title = (obj && obj.title) || null;
    this.infoLink = (obj && obj.infoLink) || null;
    this.imageLinks = (obj && obj.imageLinks) || null;
    this.description = (obj && obj.description) || null;
    this.authors = (obj && obj.authors) || null;
    this.maturityRating = (obj && obj.maturityRating) || null;
    this.id = (obj && obj.id) || null;
    this.industryIdentifiers = (obj && obj.industryIdentifiers) || null;
  }
}
