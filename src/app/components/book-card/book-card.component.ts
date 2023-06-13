import { Component, Input } from '@angular/core';
import { BookModel } from 'src/app/models/book-model.model';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input()
  result!: BookModel;
  constructor() {}
}
