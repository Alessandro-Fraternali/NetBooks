import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book-model.model';
import AOS from 'aos';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  results!: BookModel[];

  ngOnInit() {
    AOS.init();
  }

  updateBooks(results: BookModel[]): void {
    this.results = results;
  }
}
