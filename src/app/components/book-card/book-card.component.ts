import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book-model.model';
import AOS from 'aos';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input()
  result!: BookModel;
  constructor() {}
  ngOnInit() {
    AOS.init();
  }
}
