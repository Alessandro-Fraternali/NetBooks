import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BookCard } from 'src/app/interfaces/blocks.interface';
import { BookModel } from 'src/app/models/book-model.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  results!: BookModel[];

  updateBooks(results: BookModel[]): void {
    this.results = results;
  }
}
