import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent {
  bookRank!: string | null;
  bookData: any;
  jsonResults: any;
  chosenBook: any;
  arrayBooks: [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _http: HttpClient
  ) {}

  ngOnInit() {
    this.bookRank = this.activatedRoute.snapshot.paramMap.get('rank');
    this.arrayBooks = this.getBooks().subscribe((val) =>
      console.log('1' + val.results.books)
    );
    console.log(this.arrayBooks);
  }

  // val.results.book in una variabile arrayBooks
  // ciclare arrayBooks e ad ogni ciclo per ogni libro controlla book.rank
  // se book.rank è uguale a quello cliccato salva book in chosenBook

  getBooks() {
    this.jsonResults = this._http.get(
      'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=N7nfrHYJqsu2xo5L3YpvhAc7ykkMm5Yp'
    );

    return this.jsonResults;
  }
}
