import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BookCard } from 'src/app/interfaces/blocks.interface';
import { BestSellersHistoryService } from 'src/app/services/best-sellers-history.service';
// import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  booksData;
  isLoaded = true;
  bookCardList: BookCard[] = [];
  bestSellerHistoryService: BestSellersHistoryService = inject(
    BestSellersHistoryService
  );
  filteredBookCard: BookCard[] = [];

  constructor(private _myservice: BestSellersHistoryService) {
    this.bookCardList = this.bestSellerHistoryService.getAllBookCards();
    console.log(this.bookCardList);
    this.filteredBookCard = this.bookCardList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredBookCard = this.bookCardList;
    } else {
      this.filteredBookCard = this.bookCardList.filter((bookCard) =>
        bookCard?.book.title.toLowerCase().includes(text.toLowerCase())
      );
    }
  }

  ngOnInit() {
    this.isLoaded = true;
    this._myservice.getBooks().subscribe(
      (data) => {
        (this.booksData = data), console.log(this.booksData);
        console.log('culo');
        this.isLoaded = false;
      },
      (error) => console.log('err')
    );
  }
}
