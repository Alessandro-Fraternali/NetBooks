import { Component, Input } from '@angular/core';
import { BookCard } from 'src/app/interfaces/housinglocation';
import { BestSellersHistoryService } from 'src/app/services/best-sellers-history.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: BookCard;
  booksData;
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
