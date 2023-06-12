import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { BookModel } from '../models/book-model.model';

const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  // creo un'array dell'oggetto BookModel
  search(query: string): Observable<BookModel[]> {
    const params: string = `q=${query}`;

    const queryUrl = `${BOOK_API_URL}?${params}`;

    return this.http.get<any>(queryUrl).pipe(
      map((response) => {
        return response['items'].map(
          //dichiaro cosa voglio prendere con la get
          (item: {
            volumeInfo: {
              title: any;
              infoLink: any;
              description: any;
              maturityRating: any;
              authors: any;
              imageLinks: { thumbnail: any } | undefined;
            };
            id: any;
          }) => {
            // uso quello che ho preso dalla get per creare l'oggetto BookModel
            return new BookModel({
              title: item.volumeInfo.title,
              infoLink: item.volumeInfo.infoLink,
              imageLinks:
                item.volumeInfo.imageLinks != undefined
                  ? item.volumeInfo.imageLinks.thumbnail
                  : '',
              description: item.volumeInfo.description,
              maturityRating: item.volumeInfo.maturityRating,
              authors: item.volumeInfo.authors,
              id: item.id,
            });
          }
        );
      })
    );
  }
}
