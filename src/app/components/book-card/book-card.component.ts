import { Component } from '@angular/core';
import { BestSellersHistoryService } from 'src/app/services/best-sellers-history.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  // booksData: any;
  // async ngOnInit() {
  //   this.booksData = this.service.getBooks();
  //   console.log('LIBRI' + this.booksData);
  // }
  // constructor(private service: BestSellersHistoryService) {}

  booksData;
  // book;
  isLoaded = true;
  constructor(private _myservice: BestSellersHistoryService) {}
  async ngOnInit(): Promise<void> {
    this.isLoaded = true;
    (await this._myservice.getBooks()).subscribe(
      (data) => {
        (this.booksData = data), console.log(this.booksData);
        this.isLoaded = false;
      },
      (error) => console.log('err')
    );
  }
}
