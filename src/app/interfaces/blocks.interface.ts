import { EventEmitter } from '@angular/core';

export interface InjectedEstaliaBlockComponent {
  data: any;
  changed: EventEmitter<any>;
  OnInjected(): void;
}

export interface BookCard {
  type: 'book-card';
  book: {
    book_image: string;
    title: string;
    description: string;
  };
}

export type NetTomeBlock = BookCard;
