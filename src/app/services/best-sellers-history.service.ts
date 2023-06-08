import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BestSellersHistoryService {
  header = new HttpHeaders({});

  constructor(private _http: HttpClient) {}

  async getBooks() {
    return this._http.get(
      // 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=N7nfrHYJqsu2xo5L3YpvhAc7ykkMm5Yp'
      'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=N7nfrHYJqsu2xo5L3YpvhAc7ykkMm5Yp'
    );
  }
}
