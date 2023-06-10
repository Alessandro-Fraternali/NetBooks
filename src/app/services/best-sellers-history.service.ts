import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookCard } from '../interfaces/blocks.interface';

@Injectable({
  providedIn: 'root',
})
export class BestSellersHistoryService {
  header = new HttpHeaders({});
  bookCardList: BookCard[];

  constructor(private _http: HttpClient) {}

  getBooks() {
    return this._http.get(
      'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=N7nfrHYJqsu2xo5L3YpvhAc7ykkMm5Yp'
    );
  }

  // httpclient > promise observable

  getAllBookCards(): BookCard[] {
    return this.bookCardList;
  }

  getBookCardByTitle(title: string): BookCard | undefined {
    return this.bookCardList.find((bookCard) => bookCard.book.title === title);
  }
}

// HousingService BestSellersHistoryService
// housingLocationList bookCardList
// HousingLocation BookCard
// housingLocation bookCard
// getAllHousingLocations getAllBookCards
// getHousingLocationById getBookCardByID
// housingService = bestSellerHistoryService
// filteredLocationList filteredBookCard
// city title
