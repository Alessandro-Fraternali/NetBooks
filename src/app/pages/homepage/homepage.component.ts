import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookCard } from 'src/app/interfaces/blocks.interface';
import { BestSellersHistoryService } from 'src/app/services/best-sellers-history.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  // booksData;
  // // book;
  // isLoaded = true;
  // constructor(private _myservice: BestSellersHistoryService) {}
  // ngOnInit(): void {
  //   this.isLoaded = true;
  //   this._myservice.getBooks().subscribe(
  //     (data) => {
  //       (this.booksData = data), console.log(this.booksData);
  //       this.isLoaded = false;
  //     },
  //     (error) => console.log('err')
  //   );
  // }
}
