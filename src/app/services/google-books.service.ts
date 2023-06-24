import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book-model.model';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  // dichiaro il metodo search in cui passo la stringa che l'utente scrive nella searchbar
  // che mi ritorna un array di BookModel
  search(query: string): Observable<BookModel[]> {
    //creo una costante chiamata params da usare per filtrare la ricerca
    const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';
    const params: string = `q=${query}`;
    const queryUrl = `${BOOK_API_URL}?${params}`;

    // interface
    return this.http.get<any>(queryUrl).pipe(
      // mappo il risultato per prendere response
      map((response) => {
        // mappo response per prendere il singolo item
        return response['items'].map(
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
